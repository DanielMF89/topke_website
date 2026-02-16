import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface DivisionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon?: React.ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export default function DivisionTemplate({ title, subtitle, description, features, image, seoTitle, seoDescription, seoKeywords }: DivisionProps) {
  useEffect(() => {
    document.title = seoTitle || `${title} | Grupo Topke Guatemala`;
  }, [seoTitle, title]);

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle || `${title} | Grupo Topke Guatemala`}</title>
        <meta name="description" content={seoDescription || description} />
        <meta name="keywords" content={seoKeywords || `${title}, Guatemala, Topke`} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/70 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-none mb-6 uppercase">
              {title}
            </h1>
            <p className="text-xl text-zinc-300 max-w-xl font-light">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-zinc-900 mb-6 uppercase">Soluciones Integrales</h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              {description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-zinc-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none h-12 px-8"
              onClick={() => window.open(`https://wa.me/50222248080?text=Hola,%20necesito%20información%20sobre%20${title}`, '_blank')}
            >
              Solicitar Información <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-zinc-100 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
            <img 
              src={image} 
              alt="Detalle de servicio" 
              className="w-full h-[400px] object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-zinc-900 text-white text-center">
        <div className="container">
          <h2 className="text-2xl font-display font-bold uppercase mb-4">¿Interesado en esta división?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Contáctenos hoy mismo para recibir asesoría personalizada de nuestros expertos en {title}.
          </p>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-zinc-900 uppercase font-bold rounded-none"
            onClick={() => window.open(`https://wa.me/50222248080?text=Hola,%20estoy%20interesado%20en%20la%20división%20de%20${title}`, '_blank')}
          >
            Contactar Ahora
          </Button>
        </div>
      </section>
    </Layout>
  );
}
