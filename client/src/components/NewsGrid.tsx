import { useState, useEffect } from "react";
import { Heart, MessageCircle, Instagram, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Datos estáticos de respaldo (Fallback)
const fallbackPosts = [
  {
    id: "static-1",
    media_url: "/images/insta_post_1.jpeg",
    caption: "Miniexcavadora XE60G: Potencia compacta para grandes proyectos. Ideal para espacios reducidos sin sacrificar rendimiento. 🚜💪 #XCMG #Topke #Construccion",
    like_count: 156,
    comments_count: 12,
    timestamp: new Date(Date.now() - 86400000).toISOString(), // Hace 1 día
    permalink: "https://instagram.com"
  },
  {
    id: "static-2",
    media_url: "/images/insta_post_2.jpeg",
    caption: "Potencia que mueve. Nuestra maquinaria está lista para enfrentar cualquier desafío en el campo o la ciudad. 🏗️ #MaquinariaPesada #Topke",
    like_count: 134,
    comments_count: 8,
    timestamp: new Date(Date.now() - 172800000).toISOString(), // Hace 2 días
    permalink: "https://instagram.com"
  },
  {
    id: "static-3",
    media_url: "/images/insta_post_3.jpeg",
    caption: "Nuestros clientes confían en la calidad y respaldo de Grupo Topke. Entregando soluciones que impulsan el desarrollo. 🤝 #ClientesSatisfechos #Guatemala",
    like_count: 210,
    comments_count: 15,
    timestamp: new Date(Date.now() - 259200000).toISOString(), // Hace 3 días
    permalink: "https://instagram.com"
  },
  {
    id: "static-4",
    media_url: "/images/insta_post_4.jpeg",
    caption: "Excavadora XE55U y XE215G: Tecnología de punta para la construcción moderna. Eficiencia y durabilidad garantizada. 🚧 #XCMG #Excavadoras",
    like_count: 189,
    comments_count: 10,
    timestamp: new Date(Date.now() - 345600000).toISOString(), // Hace 4 días
    permalink: "https://instagram.com"
  },
  {
    id: "static-5",
    media_url: "/images/insta_post_5.jpeg",
    caption: "Durabilidad en tus proyectos. Equipos diseñados para resistir las condiciones más exigentes. 🛡️ #Calidad #Resistencia",
    like_count: 145,
    comments_count: 6,
    timestamp: new Date(Date.now() - 432000000).toISOString(), // Hace 5 días
    permalink: "https://instagram.com"
  },
  {
    id: "static-6",
    media_url: "/images/insta_post_6.jpeg",
    caption: "Generadores T-Power en acción. Energía ininterrumpida para mantener tu operación funcionando 24/7. ⚡ #Energia #Generadores",
    like_count: 167,
    comments_count: 9,
    timestamp: new Date(Date.now() - 604800000).toISOString(), // Hace 1 semana
    permalink: "https://instagram.com"
  },
  {
    id: "static-7",
    media_url: "/images/insta_post_7.jpeg",
    caption: "Tractor Agrícola XT804: El aliado perfecto para el campo. Potencia y versatilidad para tus cultivos. 🌾🚜 #Agro #TopkeAgro",
    like_count: 230,
    comments_count: 18,
    timestamp: new Date(Date.now() - 604800000).toISOString(), // Hace 1 semana
    permalink: "https://instagram.com"
  },
  {
    id: "static-8",
    media_url: "/images/insta_post_8.jpeg",
    caption: "Más de 128 años de experiencia en el mercado. Un legado de confianza y servicio en la región. 🏛️ #Historia #Trayectoria",
    like_count: 312,
    comments_count: 25,
    timestamp: new Date(Date.now() - 1209600000).toISOString(), // Hace 2 semanas
    permalink: "https://instagram.com"
  },
  {
    id: "static-9",
    media_url: "/images/insta_post_9.jpeg",
    caption: "Rodo Vibro Compactador XS113: Compactación superior para carreteras y proyectos de infraestructura. 🛣️ #Vial #Infraestructura",
    like_count: 198,
    comments_count: 14,
    timestamp: new Date(Date.now() - 1209600000).toISOString(), // Hace 2 semanas
    permalink: "https://instagram.com"
  },
  {
    id: "static-10",
    media_url: "/images/insta_post_10.jpeg",
    caption: "Generador Monofásico 'I' Power. Soluciones de energía a tu medida. 💡 #EnergiaPortatil #Topke",
    like_count: 115,
    comments_count: 5,
    timestamp: new Date(Date.now() - 1814400000).toISOString(), // Hace 3 semanas
    permalink: "https://instagram.com"
  }
];

// Función auxiliar para formatear fechas relativas
const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return `Hace ${Math.floor(interval)} años`;
  
  interval = seconds / 2592000;
  if (interval > 1) return `Hace ${Math.floor(interval)} meses`;
  
  interval = seconds / 86400;
  if (interval > 1) return `Hace ${Math.floor(interval)} días`;
  
  interval = seconds / 3600;
  if (interval > 1) return `Hace ${Math.floor(interval)} horas`;
  
  interval = seconds / 60;
  if (interval > 1) return `Hace ${Math.floor(interval)} minutos`;
  
  return "Hace un momento";
};

export default function NewsGrid() {
  // Usamos directamente los datos estáticos, sin estados de carga ni API
  const posts = fallbackPosts;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, posts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (posts.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-white py-8 border-t border-zinc-200"> {/* Reduced padding from py-16 to py-8 */}
      <div className="container mx-auto px-4">
        
        {/* Header - INVERTED to Dark Text */}
        <div className="flex justify-between items-end mb-6"> {/* Reduced margin from mb-10 to mb-6 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase mb-2">
              Novedades <span className="text-primary">@GrupoTopke</span>
            </h2>
            <p className="text-zinc-600">Mantente al día con nuestras últimas actividades y proyectos.</p>
          </div>
          <a 
            href="https://www.instagram.com/grupotopke/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-zinc-900 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <Instagram size={18} />
            Seguir en Instagram
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visiblePosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-primary/50 transition-colors group/card shadow-sm hover:shadow-md"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <img 
                      src={post.media_url} 
                      alt="Instagram Post" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-zinc-900">
                      <Instagram size={16} />
                    </div>
                  </div>

                  {/* Content Body - INVERTED to Light */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3 text-zinc-500 text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                          <Heart size={16} /> {post.like_count}
                        </span>
                        <span className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                          <MessageCircle size={16} /> {post.comments_count}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-wide">{timeAgo(post.timestamp)}</span>
                    </div>
                    
                    <p className="text-zinc-700 text-sm line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex justify-end">
                      <a 
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1 hover:underline"
                      >
                        Ver Post <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - INVERTED */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white text-zinc-900 border border-zinc-200 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= posts.length - itemsPerPage}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white text-zinc-900 border border-zinc-200 p-3 rounded-full shadow-lg hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Mobile Footer Link - INVERTED */}
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://www.instagram.com/grupotopke/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-900 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <Instagram size={18} />
            Seguir en Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
