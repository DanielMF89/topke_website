import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplets, Tractor, Zap, Anchor, Wrench, Pickaxe } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "riego",
    title: "Riego",
    subtitle: "Sistemas Eficientes",
    icon: Droplets,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/KpMylQQnFkwwlJjW.jpg",
    link: "/riego",
  },
  {
    id: "maquinaria",
    title: "Maquinaria",
    subtitle: "Construcción y Agro",
    icon: Tractor,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pKUzjXyxgLPBRQQy.jpg",
    link: "/maquinaria",
  },
  {
    id: "generacion",
    title: "Generación",
    subtitle: "Energía y Potencia",
    icon: Zap,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/YWvZfesgWfpCjuAX.jpg",
    link: "/generacion",
  },
  {
    id: "propulsion",
    title: "Propulsión",
    subtitle: "Motores y Bombas",
    icon: Droplets,
    image: "/images/vertical-turbine-pump.jpg",
    link: "/propulsion",
  },
  {
    id: "logistica",
    title: "Logística",
    subtitle: "Grúas y Elevación",
    icon: Anchor,
    image: "/images/overhead-crane-real.jpg",
    link: "/logistica",
  },
  {
    id: "lubricantes",
    title: "Lubricantes",
    subtitle: "Aceites Industriales",
    icon: Wrench,
    image: "/images/motul-drum-real.jpg",
    link: "/lubricantes",
  },
  {
    id: "perforacion",
    title: "Perforación",
    subtitle: "Pozos de Agua",
    icon: Pickaxe,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/kuJhiznkPAFMWzpm.png",
    link: "/perforacion",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Link href={slides[currentIndex].link}>
            <a className="block w-full h-full">
              <div className="relative w-full h-full cursor-pointer group">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 container flex flex-col justify-end pb-16 md:pb-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-sm">
                        {(() => {
                          const Icon = slides[currentIndex].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase mb-3 text-white drop-shadow-2xl">
                      {slides[currentIndex].title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-zinc-100 drop-shadow-lg">
                      {slides[currentIndex].subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
            </a>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-primary text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-primary text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:scale-110 shadow-lg"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-primary w-12"
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
