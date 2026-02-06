import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  thumbnail_url?: string; // For videos
  children?: {
    data: Array<{
      media_type: string;
      media_url: string;
      thumbnail_url?: string;
    }>;
  };
}

const INSTAGRAM_TOKEN = "IGAAUpfZCNNZBLxBZAFlTMVA0X3lfOGpMM2lUTmF1Q3N1S2FvcG91dkFkUlJYNlYxRkxSR3MtUVNLZATFNMkpFZAHBhc0VjOXAyS2VhRUg2SDlYSjdobVhNOEg5TG5jb215Y0pOaHduUkJFblo5NE5ySHozeVItWjF2VFNSZAUF6QThrOAZDZD";

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch user media including children for carousel albums
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,children{media_type,media_url,thumbnail_url}&access_token=${INSTAGRAM_TOKEN}&limit=8`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Error fetching Instagram feed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error || (posts.length === 0 && !loading)) {
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
              Sigue nuestras últimas actualizaciones, proyectos y noticias en @topkeguatemala
            </p>
          </div>
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => window.open("https://www.instagram.com/topkeguatemala/", "_blank")}
          >
            <Instagram className="w-4 h-4" />
            Seguir en Instagram
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post) => (
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
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
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
