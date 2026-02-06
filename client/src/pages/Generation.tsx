import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Battery, Activity, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Generation() {
  const solutions = [
    {
      title: "Generador Industrial",
      desc: "Potencia robusta para aplicaciones críticas y continuas.",
      features: [
        "Con Cabina / Sin Cabina",
        "Stock: 27.5 KVa - 300 KVa",
        "Bajo Pedido: Hasta 2000 KVa"
      ],
      image: "/images/generation/industrial-generator-ai.jpg"
    },
    {
      title: "Generador Residencial",
      desc: "Respaldo energético silencioso y confiable para el hogar.",
      features: [
        "Con Cabina Insonorizada",
        "Rango: 16 KVa - 50 KVa",
        "Tipo: Monofásicos"
      ],
      image: "/images/generation/residential-generator-ai.jpg"
    },
    {
      title: "Sistemas de Transferencia Automática",
      desc: "Gestión inteligente y segura del cambio de fuente de energía.",
      features: [
        "Capacidad: 100 Amp - 3200 Amp",
        "Operación 100% Automática",
        "Gabinete NEMA Certificado"
      ],
      image: "/images/generation/ats-system-ai.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/t-power-generated-1.jpg" 
            alt="Generación de Energía TopKe" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">División Energía</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6 uppercase">
              Energía que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Nunca se Detiene</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-xl font-light border-l-2 border-zinc-600 pl-6">
              Soluciones integrales de generación y respaldo eléctrico para industrias que no pueden permitirse parar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 text-zinc-900">Potencia Confiable</h3>
              <p className="text-zinc-500 leading-relaxed">
                Equipos diseñados para operar en las condiciones más exigentes, garantizando un suministro estable.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Activity size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 text-zinc-900">Eficiencia Energética</h3>
              <p className="text-zinc-500 leading-relaxed">
                Tecnología de vanguardia que maximiza el rendimiento por litro de combustible, reduciendo costos operativos.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 text-zinc-900">Soporte Total</h3>
              <p className="text-zinc-500 leading-relaxed">
                Mantenimiento preventivo y correctivo con repuestos originales y técnicos certificados por fábrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-2 uppercase">Nuestras Soluciones</h2>
              <p className="text-zinc-400">Tecnología de punta para cada necesidad energética</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-6 md:mt-0 border-zinc-700 text-white hover:bg-white hover:text-zinc-900 uppercase font-bold"
              onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20ver%20el%20catálogo%20de%20generación', '_blank')}
            >
              Ver Catálogo Completo
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-zinc-800 border border-zinc-700 overflow-hidden group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-display font-bold uppercase">{sol.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-400 mb-6 min-h-[3rem]">{sol.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/50222248080?text=Hola,%20necesito%20más%20detalles%20sobre%20${sol.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold uppercase text-sm hover:text-white transition-colors"
                  >
                    Más Detalles <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-12 bg-zinc-100">
        <div className="container flex justify-center items-center gap-12 opacity-50 grayscale">
           <span className="text-3xl font-bold text-zinc-800">TOSHIBA</span>
           <span className="text-3xl font-bold text-zinc-800">POWERGEN</span>
           <span className="text-3xl font-bold text-zinc-800">TE2</span>
        </div>
      </section>
    </Layout>
  );
}
