import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Grúa Camión XCMG XCT25",
      price: "Q 1,250,000.00",
      category: "Maquinaria",
      image: "/images/xcmg-crane-1.jpg"
    },
    {
      id: 2,
      name: "Grúa Camión XCMG QY25K5",
      price: "Q 1,100,000.00",
      category: "Maquinaria",
      image: "/images/xcmg-crane-2.jpg"
    },
    {
      id: 3,
      name: "Minicargador XCMG XC760K",
      price: "Q 285,000.00",
      category: "Maquinaria",
      image: "/images/xcmg-skid-loader.png"
    },
    {
      id: 4,
      name: "Cargador Frontal XCMG XC968U",
      price: "Q 850,000.00",
      category: "Maquinaria",
      image: "/images/xcmg-loader.jpg"
    },
    {
      id: 5,
      name: "Interruptor Simple Blanco",
      price: "Q 24.87",
      category: "Eléctricos",
      image: "/images/efapel-latina-pdf-switch-simple.jpg"
    },
    {
      id: 6,
      name: "Interruptor 3way Blanco",
      price: "Q 29.05",
      category: "Eléctricos",
      image: "/images/efapel-latina-pdf-switch-3way.jpg"
    },
    {
      id: 7,
      name: "Dimmer Rotativo RLC",
      price: "Q 329.96",
      category: "Eléctricos",
      image: "/images/efapel-latina-pdf-dimmer.jpg"
    },
    {
      id: 8,
      name: "Toma HDMI con Conector",
      price: "Q 182.70",
      category: "Conectividad",
      image: "/images/efapel-latina-pdf-hdmi.jpg"
    }
  ];

  const categories = ["Todos", "Maquinaria", "Eléctricos", "Conectividad", "Repuestos"];

  return (
    <Layout>
      {/* Shop Header */}
      <section className="bg-zinc-900 text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-display font-bold uppercase mb-2">Tienda en Línea</h1>
              <p className="text-zinc-400">Repuestos y equipos disponibles para compra directa</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <input 
                  type="text" 
                  placeholder="Buscar productos..." 
                  className="w-full md:w-64 bg-zinc-800 border-zinc-700 text-white px-4 py-2 pl-10 focus:outline-none focus:border-primary"
                />
                <Search className="absolute left-3 top-2.5 text-zinc-500" size={18} />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-zinc-50">
        <div className="container flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white p-6 border border-zinc-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-100">
                <Filter size={20} className="text-primary" />
                <h3 className="font-bold uppercase text-zinc-900">Filtros</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase mb-3">Categorías</h4>
                  <ul className="space-y-2">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <a href="#" className={`text-sm hover:text-primary transition-colors ${i === 0 ? 'text-primary font-bold' : 'text-zinc-600'}`}>
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-900 uppercase mb-3">Precio</h4>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-full bg-zinc-50 border border-zinc-200 p-2 text-sm" />
                    <span className="text-zinc-400">-</span>
                    <input type="number" placeholder="Max" className="w-full bg-zinc-50 border border-zinc-200 p-2 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-zinc-200 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative bg-zinc-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <Button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-primary text-white rounded-none shadow-lg">
                      Añadir
                    </Button>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-xl font-bold text-zinc-900">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" className="rounded-none border-zinc-300 text-zinc-500 hover:text-primary hover:border-primary">Anterior</Button>
              <Button className="rounded-none bg-primary text-white">1</Button>
              <Button variant="outline" className="rounded-none border-zinc-300 text-zinc-500 hover:text-primary hover:border-primary">2</Button>
              <Button variant="outline" className="rounded-none border-zinc-300 text-zinc-500 hover:text-primary hover:border-primary">3</Button>
              <Button variant="outline" className="rounded-none border-zinc-300 text-zinc-500 hover:text-primary hover:border-primary">Siguiente</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
