import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users } from "lucide-react";

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1896;
  
  const milestones = [
    {
      year: "1896",
      title: "Fundación",
      desc: "Fundada por el visionario Hermann TÖPKE en Quetzaltenango, iniciando un legado familiar que ha trascendido el tiempo."
    },
    {
      year: "1905",
      title: "Expansión a la Capital",
      desc: "Traslado a la Ciudad de Guatemala, cerca del Portal del Comercio, diversificando la oferta desde clavos hasta camiones International."
    },
    {
      year: "1971",
      title: "Nueva Sede",
      desc: "La compañía evoluciona y se establece en su ubicación actual en la Zona 4 de la ciudad capital."
    },
    {
      year: currentYear.toString(),
      title: "Liderazgo Actual",
      desc: `Más de ${yearsOfExperience} años de experiencia, posicionándose como referente en el sector agroindustrial con un portafolio integral.`
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/rbjVrnKUQVDlzqrU.jpg" 
            alt="Historia TopKe" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/30 to-zinc-900/80"></div>
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border-2 border-white px-4 py-1 mb-6">
              <span className="text-white font-bold uppercase tracking-widest text-sm">Desde 1896</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6 uppercase">
              Nuestra Historia
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
              Una empresa familiar que ha trascendido generaciones, dejando una huella perdurable en el desarrollo industrial de Guatemala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parallel Sections: Historic Photo + Main Story */}
      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Donde Todo Comenzó */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-zinc-900 uppercase mb-4">Donde Todo Comenzó</h2>
              <p className="text-lg text-zinc-600">
                Ferretería Topke Sucursal, fundada en 1896 en la Ciudad de Guatemala
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-zinc-900 transform translate-x-3 translate-y-3 -z-10"></div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/SGwXKmmhxnFTqofX.png" 
                alt="Ferretería Topke Sucursal - Fundada 1896" 
                className="w-full h-auto shadow-2xl border-8 border-white"
              />
            </div>
          </motion.div>

          {/* Más de 125 Años de Confianza */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-zinc-900 uppercase mb-4">
                Más de {yearsOfExperience} años de <span className="text-primary">Confianza</span>
              </h2>
            </div>
            <div className="prose prose-lg text-zinc-600">
              <p className="mb-6">
                Fundada en 1896 por el visionario <strong>Hermann TÖPKE</strong> en Quetzaltenango, esta empresa familiar ha trascendido el tiempo y los retos para dejar una huella perdurable en el mercado.
              </p>
              <p className="mb-6">
                A lo largo de los años, la integridad y el compromiso de la familia TÖPKE han sido los pilares de su éxito, dejando un legado de confianza en sus aliados y clientes. Hoy en día, TOPKE se posiciona como un gran referente en el sector agroindustrial.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-zinc-800 font-medium my-8 bg-zinc-50 py-4 pr-4">
                "Una empresa familiar estable y en crecimiento de generación en generación."
              </blockquote>
            </div>
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="/images/familia-topke.png" 
                alt="Familia TopKe - Legado Histórico" 
                className="w-full h-auto object-contain shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-zinc-900 uppercase mb-4">Línea de Tiempo</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-zinc-900 text-white font-bold py-1 px-4 text-sm rounded-full">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 mt-4 text-center uppercase">{item.title}</h3>
                <p className="text-zinc-500 text-sm text-center leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 border border-zinc-800 hover:border-primary transition-colors group">
              <Award className="w-16 h-16 text-zinc-600 group-hover:text-primary mx-auto mb-6 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">Excelencia</h3>
              <p className="text-zinc-400">
                Buscamos la perfección en cada producto y servicio que ofrecemos, garantizando la satisfacción total.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 hover:border-primary transition-colors group">
              <Users className="w-16 h-16 text-zinc-600 group-hover:text-primary mx-auto mb-6 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">Familia</h3>
              <p className="text-zinc-400">
                Mantenemos los valores de unidad y compromiso que han caracterizado a nuestra empresa por generaciones.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 hover:border-primary transition-colors group">
              <MapPin className="w-16 h-16 text-zinc-600 group-hover:text-primary mx-auto mb-6 transition-colors" />
              <h3 className="text-xl font-bold uppercase mb-4">Trayectoria</h3>
              <p className="text-zinc-400">
                Más de un siglo de experiencia nos respalda como líderes indiscutibles en el mercado guatemalteco.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
