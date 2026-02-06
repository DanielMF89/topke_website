import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Truck, HardHat, Ruler, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Definición de tipos para las categorías y productos
type Product = {
  name: string;
  desc: string;
  image: string;
};

type Category = {
  id: string;
  name: string;
  subtitle?: string; // Nuevo campo opcional para el subtítulo
  image: string;
  products: Product[];
};

export default function Machinery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "excavadoras",
      name: "Excavadoras",
      image: "/images/machinery/xcmg-excavator-real-2025.jpg",
      products: [
        {
          name: "Excavadora XE60G",
          desc: "Peso Operativo: 6T | Motor: Kubota | Cucharón: 26m³ | Cabina cerrada con A/C",
          image: "/images/machinery/xcmg-xe60g-ai-generated.jpg"
        },
        {
          name: "Excavadora XE135G",
          desc: "Peso Operativo: 13.5T | Motor: Cummins QSF 3.8 | Cucharón: 55m³ | Cabina cerrada con A/C",
          image: "/images/machinery/xcmg-xe135g-ai-generated.jpg"
        }
      ]
    },
    {
      id: "mini-excavadoras",
      name: "Mini Excavadoras",
      image: "/images/machinery/xcmg-xe35u-ai.jpg",
      products: [
        {
          name: "Mini Excavadora XE27U",
          desc: "Peso Operativo: 2.7T | Motor: Kubota D1105 | Potencia: 20.7 HP | Cucharón: 0.08m³",
          image: "/images/machinery/xcmg-xe35u-ai.jpg"
        },
        {
          name: "Mini Excavadora XE35U",
          desc: "Peso Operativo: 3.5T | Motor: Yanmar 3TNV88F | Potencia: 24.4 HP | Cucharón: 0.12m³",
          image: "/images/machinery/xcmg-xe35u-ai.jpg"
        }
      ]
    },
    {
      id: "cargadores",
      name: "Cargadores Frontales",
      image: "/images/machinery/xcmg-xc958-ai.jpg",
      products: [
        {
          name: "Cargador XC938",
          desc: "Peso Operativo: 12.6T | Motor: Cummins QSB6.7 | Cucharón: 1.9m³ | Carga Nominal: 3.5T",
          image: "/images/machinery/xcmg-xc958-ai.jpg"
        },
        {
          name: "Cargador XC958",
          desc: "Peso Operativo: 18T | Motor: Cummins QSL9 | Cucharón: 3.0m³ | Carga Nominal: 5.5T",
          image: "/images/machinery/xcmg-xc958-ai.jpg"
        }
      ]
    },
    {
      id: "compactacion",
      name: "Compactadoras y Niveladoras",
      image: "/images/machinery/xcmg-xs103h-ai.jpg",
      products: [
        {
          name: "Rodillo Vibratorio XS103H",
          desc: "Peso Operativo: 10T | Motor: Cummins | Frecuencia: 45/50 Hz | Tipo: Vibratorio Monocilíndrico",
          image: "/images/machinery/xcmg-xs103h-ai.jpg"
        },
        {
          name: "Motoniveladora GR2605",
          desc: "Peso Operativo: 19T | Motor: Cummins QSL9 | Potencia: 260 HP | Hoja: 4.27m",
          image: "/images/machinery/xcmg-gr2605-ai.jpg"
        }
      ]
    },
    {
      id: "elevacion",
      name: "Equipos de Elevación",
      subtitle: "Torres Grúa, Camiones Grúa, Elevadores de Fachada y Brazo Hidráulico",
      image: "/images/machinery/xcmg-xct25l5-ai.jpg",
      products: [
        {
          name: "Grúa Móvil XCT25L5",
          desc: "Capacidad: 25T | Pluma: 42m | Motor: SC9DF300 | Tipo: Camión Grúa",
          image: "/images/machinery/xcmg-xct25l5-ai.jpg"
        },
        {
          name: "Torre Grúa XGT6515",
          desc: "Capacidad Punta: 1.5T | Carga Máx: 10T | Alcance: 65m | Tipo: Torre Grúa",
          image: "/images/machinery/xcmg-xct25l5-ai.jpg"
        }
      ]
    },
    {
      id: "perforacion",
      name: "Perforación",
      image: "/images/machinery/xcmg-xr150d-ai.jpg",
      products: [
        {
          name: "Perforadora Rotativa XR150D",
          desc: "Profundidad Máx: 56m | Diámetro Máx: 1.5m | Par: 150kN.m | Peso: 48T",
          image: "/images/machinery/xcmg-xr150d-ai.jpg"
        }
      ]
    },
    {
      id: "concreto",
      name: "Maquinaria de Concreto",
      subtitle: "Mixer Trucks, Bombas y Plantas Móviles",
      image: "/images/machinery/xcmg-mixer-ai.jpg",
      products: [
        {
          name: "Camión Mezclador G12V",
          desc: "Capacidad: 12m³ | Chasis: HOWO/XCMG | Motor: 380 HP | Tecnología de mezclado homogéneo",
          image: "/images/machinery/xcmg-mixer-ai.jpg"
        },
        {
          name: "Bomba de Concreto HB62V",
          desc: "Alcance Vertical: 62m | Chasis: Mercedes-Benz/Volvo | Bombeo: 180m³/h",
          image: "/images/machinery/xcmg-mixer-ai.jpg"
        }
      ]
    },
    {
      id: "plataformas",
      name: "Plataformas de Elevación",
      subtitle: "De Tijeras y Telescópicas",
      image: "/images/machinery/xcmg-xgs28-ai.jpg",
      products: [
        {
          name: "Tijera Eléctrica XG1212AC",
          desc: "Altura Trabajo: 12m | Capacidad: 320kg | Tipo: Tijera Eléctrica | Cero emisiones",
          image: "/images/machinery/xcmg-xgs28-ai.jpg"
        },
        {
          name: "Brazo Telescópico XGS28",
          desc: "Altura Trabajo: 28m | Capacidad: 300/460kg | Tipo: Telescópica Diésel",
          image: "/images/machinery/xcmg-xgs28-ai.jpg"
        }
      ]
    },
    {
      id: "aditamentos",
      name: "Aditamentos",
      subtitle: "Accesorios",
      image: "/images/machinery/xcmg-breaker.jpg",
      products: [
        {
          name: "Martillo Hidráulico",
          desc: "Compatibilidad: Excavadoras 20-30T | Frecuencia: 400-800 bpm | Peso: 1.8T",
          image: "/images/machinery/xcmg-breaker.jpg"
        },
        {
          name: "Compactador de Placa",
          desc: "Fuerza Centrífuga: 60kN | Frecuencia: 2000 rpm | Peso Base: 0.9T",
          image: "/images/machinery/xcmg-breaker.jpg"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/xcmg-excavator-real.webp" 
            alt="Maquinaria de Construcción TopKe" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">División Maquinaria</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6 uppercase">
              Poder para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Construir el Futuro</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl font-light">
              Representamos a las marcas líderes mundiales en maquinaria pesada, garantizando rendimiento, durabilidad y el mejor soporte post-venta del mercado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-12 bg-zinc-900 border-b border-zinc-800">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Hammer className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">XCMG</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Distribuidor Oficial</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Truck className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">+500</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Equipos Vendidos</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <HardHat className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">24/7</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Soporte Técnico</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-zinc-800 hover:border-primary transition-colors group">
            <Ruler className="text-zinc-500 group-hover:text-primary mb-3 w-8 h-8 transition-colors" />
            <span className="text-3xl font-bold text-white mb-1">100%</span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Garantía TopKe</span>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-24 bg-zinc-50 min-h-screen">
        <div className="container">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4 uppercase">Catálogo de Maquinaria</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-zinc-500">
              Seleccione una categoría para ver nuestros equipos disponibles.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedCategory ? (
              // Vista de Categorías
              <motion.div 
                key="categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {categories.map((category, index) => (
                  <motion.div 
                    key={category.id}
                    whileHover={{ y: -10 }}
                    className="group bg-white border border-zinc-200 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                        <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                        {category.subtitle && (
                          <p className="text-zinc-300 text-sm font-light">{category.subtitle}</p>
                        )}
                        <div className="flex items-center text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          Ver Equipos <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Vista de Productos de la Categoría Seleccionada
              <motion.div 
                key="products"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8 flex items-center">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedCategory(null)}
                    className="group text-zinc-500 hover:text-primary pl-0"
                  >
                    <ChevronRight className="mr-2 w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Volver a Categorías
                  </Button>
                  <div className="h-6 w-px bg-zinc-300 mx-4"></div>
                  <h3 className="text-2xl font-bold text-zinc-900">{selectedCategory.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedCategory.products.map((product, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden relative bg-zinc-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <h4 className="text-2xl font-bold text-zinc-900 mb-4">{product.name}</h4>
                        
                        {/* Renderizado de descripción como lista vertical */}
                        <div className="space-y-3 mb-8 flex-grow">
                          {product.desc.split('|').map((item, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-zinc-600 font-light">{item.trim()}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full bg-zinc-900 hover:bg-primary text-white hover:text-white transition-colors mt-auto">
                          Solicitar Cotización
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
