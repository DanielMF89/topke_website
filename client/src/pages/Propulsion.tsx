import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

type Product = {
  name: string;
  desc: string;
  image: string;
};

type Category = {
  id: string;
  name: string;
  subtitle?: string;
  image: string;
  products: Product[];
};

export default function Propulsion() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    document.title = "Sistemas de Propulsión Industrial | Grupo Topke Guatemala";
  }, []);

  const categories: Category[] = [
    {
      id: "dodge",
      name: "DODGE",
      subtitle: "Rodamientos y Acoplamientos",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CPAiuMElwIKxmXvi.png",
      products: [
        {
          name: "Rodamientos Montados",
          desc: "Rodamientos de bolas y rodillos montados en carcasas de hierro fundido o acero estampado para aplicaciones industriales pesadas.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CPAiuMElwIKxmXvi.png"
        },
        {
          name: "Acoplamientos Flexibles",
          desc: "Acoplamientos de engranaje y elastoméricos diseñados para transmisión de potencia con capacidad de absorción de desalineación.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CPAiuMElwIKxmXvi.png"
        }
      ]
    },
    {
      id: "sew",
      name: "SEW EURODRIVE",
      subtitle: "Motorreductores",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/agMvIjJPdZNCPkZG.png",
      products: [
        {
          name: "Motorreductores Helicoidales",
          desc: "Reductores de engranajes helicoidales de alta eficiencia con motores eléctricos integrados para aplicaciones industriales.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/agMvIjJPdZNCPkZG.png"
        },
        {
          name: "Reductores de Velocidad",
          desc: "Cajas reductoras de engranajes con múltiples configuraciones de montaje y relaciones de reducción para diversas aplicaciones.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/agMvIjJPdZNCPkZG.png"
        }
      ]
    },
    {
      id: "regal",
      name: "Regal Rexnord",
      subtitle: "Motores Eléctricos",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GcWDRZYnnSPFtrci.png",
      products: [
        {
          name: "Motores Industriales",
          desc: "Motores eléctricos trifásicos de alta eficiencia para aplicaciones industriales generales, disponibles en múltiples potencias.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GcWDRZYnnSPFtrci.png"
        },
        {
          name: "Motores Premium Efficiency",
          desc: "Motores de eficiencia premium que cumplen con estándares NEMA Premium y IE3, reduciendo costos operativos de energía.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GcWDRZYnnSPFtrci.png"
        }
      ]
    },
    {
      id: "martin",
      name: "Martin Engineering",
      subtitle: "Acoplamientos y Transmisión",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDHLhavwgaYvJRPZ.png",
      products: [
        {
          name: "Acoplamientos de Rejilla",
          desc: "Acoplamientos flexibles de rejilla metálica para transmisión de alto torque con capacidad de absorción de choques.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDHLhavwgaYvJRPZ.png"
        },
        {
          name: "Componentes de Transmisión",
          desc: "Poleas, sprockets y componentes de transmisión de potencia diseñados para aplicaciones de manejo de materiales.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/GDHLhavwgaYvJRPZ.png"
        }
      ]
    },
    {
      id: "guardian",
      name: "Guardian Couplings",
      subtitle: "Acoplamientos Industriales",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pETpKkMBMweaCFiH.png",
      products: [
        {
          name: "Acoplamientos Elastoméricos",
          desc: "Acoplamientos flexibles con elementos elastoméricos intercambiables para protección contra sobrecargas y vibraciones.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pETpKkMBMweaCFiH.png"
        },
        {
          name: "Acoplamientos de Disco",
          desc: "Acoplamientos de disco metálico para aplicaciones de alta velocidad y precisión con mínimo mantenimiento.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pETpKkMBMweaCFiH.png"
        }
      ]
    },
    {
      id: "cornell",
      name: "Cornell Pump",
      subtitle: "Bombas Industriales",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pttlvtBPwWasFfcg.png",
      products: [
        {
          name: "Bombas Centrífugas",
          desc: "Bombas centrífugas horizontales y verticales para aplicaciones de agua, aguas residuales y procesos industriales.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pttlvtBPwWasFfcg.png"
        },
        {
          name: "Bombas de Proceso",
          desc: "Bombas diseñadas para manejo de líquidos corrosivos y abrasivos en aplicaciones industriales exigentes.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/pttlvtBPwWasFfcg.png"
        }
      ]
    },
    {
      id: "roper",
      name: "Roper Pumps",
      subtitle: "Bombas de Desplazamiento Positivo",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/NsUVdBHsihhxpAnC.png",
      products: [
        {
          name: "Bombas de Engranajes",
          desc: "Bombas de engranajes internos para manejo de líquidos viscosos, aceites y productos químicos con flujo constante.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/NsUVdBHsihhxpAnC.png"
        },
        {
          name: "Bombas Rotativas",
          desc: "Bombas de desplazamiento positivo tipo rotor para transferencia de fluidos con alta precisión volumétrica.",
          image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/NsUVdBHsihhxpAnC.png"
        }
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Sistemas de Propulsión Industrial | Grupo Topke Guatemala</title>
        <meta name="description" content="Distribuidores autorizados de sistemas de propulsión industrial: DODGE, SEW EURODRIVE, Regal Rexnord, Martin, Guardian Couplings, Cornell y Roper Pumps en Guatemala." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CPAiuMElwIKxmXvi.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
              <Cog className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">División Propulsión</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Sistemas de Propulsión Industrial
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Soluciones completas de transmisión de potencia con las marcas líderes de la industria
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                Ver Catálogo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Contactar Asesor
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Marcas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Representamos las marcas más confiables en sistemas de propulsión y transmisión de potencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-red-600/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-red-600/10"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                  {category.subtitle && (
                    <p className="text-muted-foreground mb-4">{category.subtitle}</p>
                  )}
                  <Button variant="ghost" className="gap-2 group-hover:gap-3 transition-all">
                    Ver Productos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Productos */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-3xl font-bold">{selectedCategory.name}</h3>
                  {selectedCategory.subtitle && (
                    <p className="text-muted-foreground mt-1">{selectedCategory.subtitle}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  <span className="text-2xl">×</span>
                </Button>
              </div>

              <div className="p-6 space-y-6">
                {selectedCategory.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border hover:border-red-600/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-contain rounded-lg bg-zinc-900"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
                        <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
                        <Button className="mt-4 bg-red-600 hover:bg-red-700">
                          Solicitar Cotización
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </Layout>
  );
}
