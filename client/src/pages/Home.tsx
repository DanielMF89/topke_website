import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BentoGrid from "@/components/BentoGrid";

import { InstagramFeed } from "@/components/InstagramFeed";
import { Link } from "wouter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
    document.title = "Maquinaria, Riego y Generadores | Grupo Topke Guatemala";
  }, []);

  // Marcas actualizadas con logos
  const brands = [
    { name: "XCMG", logo: "/images/logo-xcmg.png" },
    { name: "Weichai", logo: "/images/logo-weichai.png" },
    { name: "Toshiba", logo: "/images/logo-toshiba.png" },
    { name: "Senninger", logo: "/images/logo-senninger.png" },
    { name: "T-L Irrigation", logo: "/images/logo-tl.png" },
    { name: "Nelson", logo: "/images/logo-nelson-new.png" },
    { name: "Komet", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/WXkaChnoEKaLRgRC.jpg" },
    { name: "Cornell", logo: "/images/logo-cornell.png" },
    { name: "R&M", logo: "/images/logo-rm.png" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Maquinaria, Riego y Generadores | Grupo Topke Guatemala</title>
        <meta name="description" content="Maquinaria XCMG, sistemas de riego, generadores eléctricos y equipos industriales en Guatemala. Más de 125 años de experiencia. Venta, renta y servicio." />
        <meta name="keywords" content="maquinaria, riego, generadores, xcmg, bombas, Topke, Guatemala" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Topke",
              "url": "https://topke.com",
              "logo": "https://topke.com/images/logo-topke-new.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+502-2224-8000",
                "contactType": "customer service",
                "areaServed": "GT",
                "availableLanguage": "es"
              },
              "sameAs": [
                "https://www.facebook.com/grupotopke",
                "https://www.instagram.com/grupotopke",
                "https://www.linkedin.com/company/grupo-topke"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Full Width Bento Grid at Top - INVERTED to Light */}
      <div className="bg-white" data-version="1.1.0">
        <BentoGrid />
      </div>

      {/* Main Title & Purpose Section (Moved Up) - INVERTED to Light */}
      {/* Removed top padding completely (pt-12 -> pt-0) to connect with BentoGrid */}
      <section className="pb-24 pt-8 bg-white text-zinc-900 relative overflow-hidden">
        <div className="container relative z-10">
          
          {/* Main Title Block - Compact Layout */}
          <div className="max-w-full mb-16"> {/* Full width to ensure single line */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Desde 1896.</span>
            </div>
            
            {/* Single Line Title - Reduced font size slightly to ensure fit */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 leading-tight mb-6 uppercase whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
              Comprometidos con el <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Rendimiento</span>
            </h1>
            
            {/* Description Below Title */}
            <p className="text-xl md:text-2xl text-zinc-600 max-w-4xl font-light leading-relaxed border-l-4 border-primary pl-6">
              Más de 125 años de experiencia en el sector agroindustrial, ofreciendo maquinaria, equipo y soluciones para mejorar sus procesos industriales.
            </p>
          </div>

          {/* Instagram Feed Section - Moved here */}
          <div className="my-16">
            <InstagramFeed />
          </div>

          {/* Purpose Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4 block">Nuestra Filosofía</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase leading-tight text-zinc-900">
                El éxito de nuestros clientes es <span className="text-primary">nuestro éxito</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                En nuestra trayectoria hemos contribuido en el crecimiento de nuestros aliados estratégicos en la industria a través del trabajo en equipo, tecnología y tenacidad con personal altamente calificado.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase">Trayectoria</h4>
                    <p className="text-sm text-zinc-500">Desde 1896.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-zinc-900 uppercase">Cobertura</h4>
                    <p className="text-sm text-zinc-500">Soluciones Integrales</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-zinc-900 text-white hover:bg-zinc-800 font-bold uppercase tracking-wider rounded-none h-12 px-8"
                onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20más%20información%20sobre%20TopKe', '_blank')}
              >
                Contáctanos <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            

          </div>
        </div>
      </section>

      {/* Brands Marquee - Restored to Light for better visibility */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="container">
          <p className="text-center text-zinc-500 font-bold uppercase tracking-widest text-xs mb-10">Marcas reconocidas a nivel mundial</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand, i) => (
              <div key={i} className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
