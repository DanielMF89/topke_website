import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Award, value: "125+", label: "Años de Experiencia" },
    { icon: Users, value: "1000+", label: "Clientes Satisfechos" },
    { icon: TrendingUp, value: "7", label: "Divisiones Especializadas" },
  ];

  const values = [
    {
      title: "Excelencia",
      description: "Compromiso con la calidad en cada proyecto y servicio.",
    },
    {
      title: "Innovación",
      description: "Tecnología de punta para soluciones eficientes.",
    },
    {
      title: "Confiabilidad",
      description: "Más de un siglo respaldando a nuestros clientes.",
    },
    {
      title: "Sostenibilidad",
      description: "Soluciones responsables con el medio ambiente.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Desde 1896
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase mb-6 text-zinc-900 leading-tight">
            Comprometidos con el{" "}
            <span className="text-primary">Rendimiento</span>
          </h2>

          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed border-l-4 border-primary pl-6">
            Más de 125 años de experiencia en el sector agroindustrial,
            ofreciendo maquinaria, equipo y soluciones para mejorar sus procesos
            industriales.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 p-8 border-l-4 border-primary hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-12 h-12 text-primary mb-4" />
              <div className="text-4xl font-display font-bold text-zinc-900 mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Philosophy */}
          <div>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4 block">
              Nuestra Filosofía
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase leading-tight text-zinc-900">
              El éxito de nuestros clientes es{" "}
              <span className="text-primary">nuestro éxito</span>
            </h3>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              En nuestra trayectoria hemos contribuido en el crecimiento de
              nuestros aliados estratégicos en la industria a través del trabajo
              en equipo, tecnología y tenacidad con personal altamente
              calificado.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase mb-1">
                    Trayectoria
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Desde 1896 liderando el mercado guatemalteco.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase mb-1">
                    Cobertura
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Soluciones integrales para múltiples sectores industriales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase mb-1">
                    Respaldo
                  </h4>
                  <p className="text-sm text-zinc-600">
                    Representantes exclusivos de marcas líderes mundiales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-6 block">
              Nuestros Valores
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 p-6 hover:bg-zinc-100 transition-colors border-t-4 border-primary"
                >
                  <h4 className="font-display font-bold text-xl text-zinc-900 mb-3 uppercase">
                    {value.title}
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
