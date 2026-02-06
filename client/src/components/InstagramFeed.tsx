import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

export default function InstagramFeed() {
  // Placeholder - En producción se integraría con Instagram Graph API
  const placeholderPosts = [
    { id: 1, image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/KpMylQQnFkwwlJjW.jpg" },
    { id: 2, image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pKUzjXyxgLPBRQQy.jpg" },
    { id: 3, image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/YWvZfesgWfpCjuAX.jpg" },
    { id: 4, image: "/images/vertical-turbine-pump.jpg" },
    { id: 5, image: "/images/overhead-crane-real.jpg" },
    { id: 6, image: "/images/motul-drum-real.jpg" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-900">
              Síguenos en Instagram
            </h2>
          </div>
          <p className="text-zinc-600 text-lg">
            @grupotopke - Mantente al día con nuestras últimas novedades
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {placeholderPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/grupotopke"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider"
            onClick={() =>
              window.open("https://www.instagram.com/grupotopke", "_blank")
            }
          >
            <Instagram className="w-5 h-5 mr-2" />
            Seguir en Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
