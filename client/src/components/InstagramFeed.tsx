import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { trpc } from "@/lib/trpc";

export function InstagramFeed() {
  const { data, isLoading, isError } = trpc.instagram.getPosts.useQuery(undefined, {
    staleTime: 30 * 60 * 1000, // 30 minutes
    retry: 1,
  });

  const posts = data?.posts || [];
  const success = data?.success ?? false;

  if (isError || (!isLoading && (!success || posts.length === 0))) {
    return null; // Hide section if fetch fails or no posts
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Novedades en Instagram
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Sigue nuestras últimas actualizaciones, proyectos y noticias en @grupotopke
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open("https://www.instagram.com/grupotopke/", "_blank")}
          >
            <Instagram className="w-4 h-4" />
            Seguir en Instagram
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post: any) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted transition-all hover:shadow-lg"
              >
                <img
                  src={post.media_type === "VIDEO" ? (post.thumbnail_url || post.media_url) : post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
