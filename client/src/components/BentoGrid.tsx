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
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/bDWIpmjxMOEOGxxT.png",
    link: "/riego",
    color: "bg-zinc-900"
  },
  {
    id: "maquinaria",
    title: "Maquinaria",
    subtitle: "Construcción y Agro",
    icon: Tractor,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/z9VnekxWyzinJO6R7ITYzL-img-1_1770402158000_na1fn_eGUyMTVnLXdvcmtpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3o5Vm5la3hXeXppbkpPNlI3SVRZekwtaW1nLTFfMTc3MDQwMjE1ODAwMF9uYTFmbl9lR1V5TVRWbkxYZHZjbXRwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fPvRLQ1ZtoEGhp~SrnVgXEpbBJ2sDq26ruAWka2pdxfwHoRj-NU49yIxa9TpTDjpBC9O2rZoEKIrl-UY2byAmj5heLiqGjRibgLNSuHJ2V5VVbM5BoDryLkOJZx8rbJF0rnl-8s0h93DigsWLbAnsPLr9OYEuLCsze5roTbAeADkMkk2MvtRI6Hca7T8E920kESS1Nd0B~Zxwe-HKQrgSbtZ0Vl-fvx2fZJ~HKC4PTMixfPqRPpbvQ7hfx~LH60RR7GIeSGsu3EyBYd3NzyyKktuqRxSQ~MqyHhbPXo2Y2r5MiL2morcCtBXUuLg~Od04gVh74xMmnh681-7STifsA__",
    link: "/maquinaria",
    color: "bg-zinc-900"
  },
  {
    id: "generacion",
    title: "Generación",
    subtitle: "Energía y Potencia",
    icon: Zap,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/tCqlCOUNDXL6zv3gaS4ShA-img-1_1771000219000_na1fn_Z2VuZXJhZG9yLWluZHVzdHJpYWwtdHBvd2VyLXRvcGtlLXYy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3RDcWxDT1VORFhMNnp2M2dhUzRTaEEtaW1nLTFfMTc3MTAwMDIxOTAwMF9uYTFmbl9aMlZ1WlhKaFpHOXlMV2x1WkhWemRISnBZV3d0ZEhCdmQyVnlMWFJ2Y0d0bExYWXkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NsP9GbIM~IlvWVByMlmwd81m91YKfnqM0kZWmu0Ko32C~9c~IPa56F78Eyurr~Gr7k23e-MYNZlwEalEHYC8q7QsfDuxabb2fyucJEq47rNIrHvl-Qqz6yue19xA2Pnml8siT4IcfHwrusXcf~a-vRwWdC7F247COoYuPmNvzjIjpIstngZr0lJRkpJ6CrMIVCSuqxDq-TEELF5t1sWqG8kGmlcJ-eW58xHEFtPmkda77f2C3iRPg-hugl-5IUE8ojQ1D1VaE64DYKuvrj2K-k~~QBYoIt2IfPWRk02ZKl73RvyKx5ixcN96ITQyzGFCuMGC686lTunbhCWxvAk9Lw__",
    link: "/generacion",
    color: "bg-zinc-900",
    objectPosition: "center 30%"
  },
  {
    id: "propulsion",
    title: "Propulsión",
    subtitle: "",
    icon: Droplets,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/0Fpmc8ZVKTJtsR5OII3OBW-img-1_1771537860000_na1fn_cHJvcHVsc2lvbi1oZXJvLWJyYW5kcw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94LzBGcG1jOFpWS1RKdHNSNU9JSTNPQlctaW1nLTFfMTc3MTUzNzg2MDAwMF9uYTFmbl9jSEp2Y0hWc2MybHZiaTFvWlhKdkxXSnlZVzVrY3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iWbgVhgemvZR51CG8T71EaimMCs-p~7njboH-j7KB03qPL54ou94JGJKHnmQUMGQwGnd6Hdcopl0mKgcuuPXGyloQmdT6NOiHmkrEvUqZiGBTHCRjTA3jL1QEmLZIp3m~4X5N6cQUaBwilPm2E7BTh7-7vKE-yDUMdCfLdlFU3cvCsMlh4N4Aa3pjSWR~nlWtqyRaf3~FMLFCR4tDCu-3v5OjFpIas~EiZd3K6-AtSP-GqjOX7ObQSR7pdfkPbKUbx-JBKLgjncpPKlTJVXbiMTY0cB2hzIJhWcUMDNlx~Z-vltBp5-Y1a~4ltMO-CJ0rPiOA2I0VN-EAu-cTbrg6Q__",
    link: "/propulsion",
    color: "bg-zinc-800"
  },
  {
    id: "logistica",
    title: "Logística",
    subtitle: "Grúas y Elevación",
    icon: Anchor,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/SVswVd9wqfqhyxEOC8iChw-img-2_1770738776000_na1fn_b3ZlcmhlYWQtY3JhbmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1NWc3dWZDl3cWZxaHl4RU9DOGlDaHctaW1nLTJfMTc3MDczODc3NjAwMF9uYTFmbl9iM1psY21obFlXUXRZM0poYm1VLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wgz4bWhCfg5uQtEl0~7jKB0r3V6rIp5cGmkxx3vjZoFmIyYmRNRPTWeDhtyBzWIYmC-GsLFWq-zy6k5cpEZlWf6f96tMmV1wWnLHZmlJRWzEgDsewH6odDTl40oadxtj5z0mo8aTMhTCyDBBCTmFh6bMIqn2n24QeM~MawMQh8RTDxJP4DRWu4YjdZBh5kqhOEKvjnH9cLelQGDiaL8~Mb6ZVyMs6X9-oZ8gj79E7wTVn~SbC1Had9JlKJZF0NBrQtIeQYqlJBBazlT-q4LeN7nH-a3GdWLgHc6HsXkYwx46Cmf92nfpuOyHjjhHKTE1jj6FEoJ0HUersuFlSJvTOQ__",
    link: "/logistica",
    color: "bg-zinc-900"
  },
  {
    id: "lubricantes",
    title: "Lubricantes",
    subtitle: "Aceites Industriales",
    icon: Wrench,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/yfPpHYmWXnYHPOrjdIKkIC-img-1_1771535607000_na1fn_bHVicmljYW50ZXMtY29tbWVyY2lhbC12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3lmUHBIWW1XWG5ZSFBPcmpkSUtrSUMtaW1nLTFfMTc3MTUzNTYwNzAwMF9uYTFmbl9iSFZpY21sallXNTBaWE10WTI5dGJXVnlZMmxoYkMxMk1nLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lGeRbKZto1eTTi0Y3nFaTINoFl-9oJkuKdW2FostQf0ECqXoNc5mJA0TbD8sZwfkcyVcnvGDioF5EgMKEvJrGza1xvXViHIeAvPRV4yJhOlF2hNlPOS-Q0ATJ9HP0~TiSAhGClk3T0Bi7~e7LjFjmfZ~vyW0s8HTvBfCYfmRPAUZYv5PUnS0M-ThdPcX5WiPKHv1M1OOnQbTfrAUDwa3sxzW0jD3mbSFGeIFUfmqA2bGuuc0Cx7TTuKVp3OTCrtJRSDjTaZozjbkSyt9EHHo644Q6X3bpjyWDqXlQHA25vojwtZ0hdcdVEDuL6NunMzjRLZ5cPZNh95IHu6i3B3WbA__",
    link: "/lubricantes",
    color: "bg-zinc-900"
  },
  {
    id: "perforacion",
    title: "Perforación",
    subtitle: "Pozos de Agua",
    icon: Pickaxe,
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/kuJhiznkPAFMWzpm.png",
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
                      className="w-full h-full object-cover opacity-100"
                      style={{ objectPosition: 'center center' }}
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
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                          style={{ objectPosition: 'center center' }}
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
