import { COOKIE_NAME } from "../shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";
import { ENV } from "./_core/env";

// In-memory cache for Instagram token and posts
let cachedToken = ENV.instagramAccessToken;
let cachedPosts: any[] = [];
let lastFetchTime = 0;
let lastTokenRefreshTime = 0;
const POSTS_CACHE_TTL = 30 * 60 * 1000; // 30 minutes
const TOKEN_REFRESH_INTERVAL = 30 * 24 * 60 * 60 * 1000; // 30 days

async function refreshInstagramToken(token: string): Promise<string> {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("[Instagram] Token refresh failed:", await response.text());
      return token; // Return old token if refresh fails
    }
    const data = await response.json();
    console.log("[Instagram] Token refreshed successfully, expires in:", data.expires_in, "seconds");
    return data.access_token;
  } catch (err) {
    console.error("[Instagram] Token refresh error:", err);
    return token;
  }
}

async function fetchInstagramPosts(): Promise<any[]> {
  const now = Date.now();

  // Refresh token if needed (every 30 days)
  if (now - lastTokenRefreshTime > TOKEN_REFRESH_INTERVAL && cachedToken) {
    console.log("[Instagram] Refreshing token...");
    cachedToken = await refreshInstagramToken(cachedToken);
    lastTokenRefreshTime = now;
  }

  // Return cached posts if still fresh
  if (cachedPosts && now - lastFetchTime < POSTS_CACHE_TTL) {
    return cachedPosts;
  }

  if (!cachedToken) {
    throw new Error("Instagram access token not configured");
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,children{media_type,media_url,thumbnail_url}&access_token=${cachedToken}&limit=12`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Instagram] Fetch posts failed:", errorText);
    throw new Error(`Instagram API error: ${errorText}`);
  }

  const data = await response.json();
  cachedPosts = data.data || [];
  lastFetchTime = now;

  return cachedPosts;
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  instagram: router({
    getPosts: publicProcedure.query(async () => {
      try {
        const posts = await fetchInstagramPosts();
        return { success: true, posts };
      } catch (err: any) {
        console.error("[Instagram] getPosts error:", err);
        return { success: false, posts: [], error: err.message };
      }
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "El nombre es requerido"),
          email: z.string().email("Email inválido"),
          phone: z.string().optional(),
          serviceType: z.string().optional(),
          message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }

        // Insert into database
        await db.insert(contactSubmissions).values({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          serviceType: input.serviceType || null,
          message: input.message,
        });

        // Notify owner
        await notifyOwner({
          title: "Nuevo mensaje de contacto - Topke",
          content: `Nombre: ${input.name}\nEmail: ${input.email}\nTeléfono: ${input.phone || "N/A"}\nServicio: ${input.serviceType || "N/A"}\nMensaje: ${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
