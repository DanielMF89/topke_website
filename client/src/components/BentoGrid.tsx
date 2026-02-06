import { useState, useEffect } from "react";
import { ArrowUpRight, Tractor, Zap, Droplets, Anchor, Truck, Wrench, Pickaxe, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "riego",
    title: "Riego",
    subtitle: "Sistemas Eficientes",
    icon: Droplets,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CgigVpouSQNJJntm.jpg",
    link: "/riego",
    color: "bg-zinc-900"
  },
  {
    id: "maquinaria",
    title: "Maquinaria",
    subtitle: "Construcción y Agro",
    icon: Tractor,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/LUFLccgeXDteZelu.jpg",
    link: "/maquinaria",
    color: "bg-zinc-900"
  },
  {
    id: "generacion",
    title: "Generación",
    subtitle: "Energía y Potencia",
    icon: Zap,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/JwXRBIbmDvtqwGMc.jpg",
    link: "/generacion",
    color: "bg-zinc-900"
  },
  {
    id: "propulsion",
    title: "Motores y Bombas",
    subtitle: "Riego y Edificios",
    icon: Droplets,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/KZXFZJjJQOVrgIbf.jpg",
    link: "/propulsion",
    color: "bg-zinc-800"
  },
  {
    id: "logistica",
    title: "Logística",
    subtitle: "Grúas y Elevación",
    icon: Anchor,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/uzLhuwBFVSCJFeOC.jpg",
    link: "/logistica",
    color: "bg-zinc-900"
  },
  {
    id: "lubricantes",
    title: "Lubricantes",
    subtitle: "Aceites Industriales",
    icon: Wrench,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/ZgnUVkEvzNfHTLpw.jpg",
    link: "/lubricantes",
    color: "bg-zinc-900"
  },
  {
    id: "perforacion",
    title: "Perforación",
    subtitle: "Pozos de Agua",
    icon: Pickaxe,
    image: "/images/xcmg-drilling-building.webp",
    link: "/perforacion",
    color: "bg-zinc-800"
  },
  // {
  //   id: "tienda",
  //   title: "Tienda",
  //   subtitle: "Repuestos y Accesorios",
  //   icon: ShoppingCart,
  //   image: "/images/efapel-switch-latina.jpg",
  //   link: "/tienda",
  //   color: "bg-zinc-800"
  // }
];

export default function BentoGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const itemsPerPage = 3;

  // Mobile Navigation Handlers
  const nextMobileSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevMobileSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Desktop Navigation Handlers
  const nextSlide = () => {
    setDesktopIndex((prev) => {
      const next = prev + itemsPerPage;
      return next >= items.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setDesktopIndex((prev) => {
      const next = prev - itemsPerPage;
      return next < 0 ? Math.max(0, items.length - itemsPerPage) : next;
    });
  };

  // Calculate visible items for desktop
  const visibleItems = items.slice(desktopIndex, desktopIndex + itemsPerPage);

  return (
    <section className="bg-white relative group/section min-h-[62vh] flex items-center justify-center">
      <div className="w-full h-full">
        
        {/* Mobile Carousel View (Visible only on mobile) */}
        <div className="md:hidden relative h-[62vh] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Link href={items[currentIndex].link}>
                <div className={`relative h-full w-full ${items[currentIndex].color} cursor-pointer`}>
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={items[currentIndex].image} 
                      alt={items[currentIndex].title} 
                      className="w-full h-full object-cover opacity-100" // Increased opacity to 100%
                    />
                    {/* Reduced gradient opacity for brighter images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end pb-16">
                    <div className="flex justify-between items-start mb-2 absolute top-6 left-6 right-6">
                      <div className="bg-black/30 text-white p-2 rounded-sm backdrop-blur-sm border border-white/10">
                        {(() => {
                          const Icon = items[currentIndex].icon;
                          return <Icon size={20} />;
                        })()}
                      </div>
                      <ArrowUpRight className="text-white drop-shadow-md" size={20} />
                    </div>

                    <div>
                      <h3 className="text-3xl font-display font-bold uppercase mb-1 text-white drop-shadow-lg">
                        {items[currentIndex].title}
                      </h3>
                      <p className="text-base font-medium text-zinc-100 drop-shadow-md">
                        {items[currentIndex].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Arrows */}
          <button 
            onClick={prevMobileSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-primary text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextMobileSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-primary text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                  idx === currentIndex ? "bg-primary w-4" : "bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View with Navigation */}
        <div className="hidden md:block relative h-[62vh]">
          <div className="grid grid-cols-3 h-full w-full">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full border-r border-b border-zinc-200 relative" // Changed border color to light
                >
                  <Link href={item.link}>
                    <div className={`group relative overflow-hidden cursor-pointer ${item.color} block h-full w-full`}>
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100" // Increased opacity to 100%
                        />
                        {/* Lighter gradient for more realism */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="bg-black/30 text-white group-hover:bg-primary group-hover:text-white p-2 rounded-sm backdrop-blur-sm transition-colors duration-300 border border-white/10">
                            {(() => {
                              const Icon = item.icon;
                              return <Icon size={24} />;
                            })()}
                          </div>
                          <ArrowUpRight className="text-white/80 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 drop-shadow-sm" size={24} />
                        </div>

                        <div className="mb-4">
                          <h3 className="text-3xl font-display font-bold uppercase mb-1 group-hover:translate-x-2 transition-transform duration-300 text-white drop-shadow-lg">
                            {item.title}
                          </h3>
                          <p className="text-base font-medium group-hover:translate-x-2 transition-all duration-300 delay-75 text-zinc-100 group-hover:text-white drop-shadow-md">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/50 transition-colors duration-300 z-20 pointer-events-none"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Arrows - Always Visible */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-primary text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-primary text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 hover:scale-110 shadow-lg"
          >
            <ChevronRight size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}
