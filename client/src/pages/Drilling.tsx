import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { X, Droplet, Settings, Video as VideoIcon, Wrench } from "lucide-react";

export default function Drilling() {
  useEffect(() => {
    document.title = "Perforación de Pozos de Agua Guatemala | Grupo Topke";
  }, []);

  const [selectedMedia, setSelectedMedia] = useState<{type: 'image' | 'video', url: string} | null>(null);

  const features = [
    {
      icon: Droplet,
      title: "Perforación de Pozos",
      description: "Perforación de pozos profundos con tecnología de punta para extracción de agua subterránea"
    },
    {
      icon: Settings,
      title: "Equipamiento de Pozos",
      description: "Instalación completa de bombas sumergibles, sistemas de control y tubería de conducción"
    },
    {
      icon: VideoIcon,
      title: "Filmación de Pozos",
      description: "Inspección visual con cámaras especializadas para diagnóstico y mantenimiento preventivo"
    },
    {
      icon: Wrench,
      title: "Mantenimiento y Rehabilitación",
      description: "Servicios de limpieza, reparación y optimización de pozos existentes"
    }
  ];

  const media = [
    { type: 'image' as const, url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/zEITVJBnKDsOESDR.jpeg' },
    { type: 'video' as const, url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/uXxWjeARZrBfUJcf.mp4' },
    { type: 'video' as const, url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/xDvftblNCwVEAjQd.mp4' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Perforación de Pozos de Agua Guatemala | Grupo Topke</title>
        <meta name="description" content="Perforación de pozos profundos en Guatemala: perforadoras rotativas XCMG, compresores de aire y herramientas especializadas. Exploración y extracción de agua subterránea." />
        <meta name="keywords" content="perforación de pozos, pozos de agua, perforadoras rotativas, equipos de perforación Guatemala, Topke, xcmg, pozos profundos, extracción agua subterránea" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/kuJhiznkPAFMWzpm.png" 
            alt="Perforación de Pozos TopKe" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/70 to-transparent"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Perforación de Pozos de Agua
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Tecnología avanzada para la exploración y extracción de agua subterránea
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones completas desde el diseño hasta la instalación y mantenimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Equipos en Acción</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perforadoras rotativas XCMG y equipos especializados en operación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {media.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-zinc-900 cursor-pointer group"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.url} 
                    alt={`Equipo de perforación ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video 
                      src={item.url}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[20px] border-l-zinc-900 border-y-[12px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Necesita Perforar un Pozo?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Nuestros expertos le ayudarán a evaluar su proyecto y encontrar la mejor solución
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20me%20interesa%20información%20sobre%20perforación%20de%20pozos', '_blank')}
            >
              Contactar Asesor
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal for viewing media */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-zinc-300 transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.url} 
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video 
                src={selectedMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-full"
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
