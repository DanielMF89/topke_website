import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactSubmissions } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";

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
