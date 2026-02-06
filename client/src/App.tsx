import { Toaster } from "@/components/ui/sonner";
import VersionTag from "@/components/VersionTag";

import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Machinery from "./pages/Machinery";
import Generation from "./pages/Generation";
import DivisionTemplate from "./pages/DivisionTemplate";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/nosotros" component={About} />
      
      {/* Divisiones Principales */}
      <Route path="/maquinaria" component={Machinery} />
      <Route path="/generacion" component={Generation} />

      {/* Divisiones Secundarias (Usando Template) */}
      <Route path="/riego">
        <DivisionTemplate 
          title="Riego" 
          subtitle="Sistemas eficientes para la gestión del agua en el sector agroindustrial."
          description="Ofrecemos soluciones completas de riego tecnificado, desde el diseño hasta la instalación y mantenimiento. Optimizamos el uso del agua para maximizar la productividad de sus cultivos."
          features={["Pivotes Centrales", "Riego por Goteo", "Bombas de Agua", "Diseño Hidráulico"]}
          image="/images/riego-general-new.jpg"
        />
      </Route>
      
      <Route path="/propulsion">
        <DivisionTemplate 
          title="Motores y Bombas" 
          subtitle="Sistemas de bombeo y propulsión para agricultura y edificaciones."
          description="Soluciones integrales de bombeo para pozos profundos, sistemas de riego agrícola y abastecimiento de agua en edificios. Motores estacionarios de alta eficiencia y confiabilidad."
          features={["Bombas Turbina Vertical", "Motores Estacionarios", "Sistemas de Presión Constante", "Equipos para Pozos Profundos"]}
          image="/images/vertical-turbine-pump.jpg"
        />
      </Route>

      <Route path="/logistica">
        <DivisionTemplate 
          title="Manejo de materiales" 
          subtitle="Sistemas de Elevación e Izaje."
          description="Soluciones robustas para el manejo de cargas pesadas en entornos industriales. Diseño, suministro e instalacion de sistemas de elevación que optimizan la seguridad y productividad de sus operaciones."
          features={["Grúas Puente", "Grúas Pórtico", "Polipastos y Winches", "Sistemas de Elevación a Medida"]}
          image="/images/overhead-crane-real.jpg"
        />
      </Route>

      <Route path="/lubricantes">
        <DivisionTemplate 
          title="Lubricantes" 
          subtitle="Productos especializados para el mantenimiento y vida útil de maquinaria."
          description="Lubricantes de alto rendimiento formulados para proteger sus equipos bajo las condiciones más severas de operación, extendiendo su vida útil."
          features={["Aceites de Motor", "Fluidos Hidráulicos", "Grasas Industriales", "Análisis de Aceite"]}
          image="/images/motul-drum-real.jpg"
        />
      </Route>

      <Route path="/perforacion">
        <DivisionTemplate 
          title="Perforación de Pozos" 
          subtitle="Maquinaria y equipos especializados para la perforación de pozos profundos."
          description="Tecnología avanzada para la exploración y extracción de agua subterránea, garantizando eficiencia y seguridad en cada proyecto de perforación."
          features={["Perforadoras Rotativas", "Compresores de Aire", "Herramientas de Perforación", "Asesoría Geológica"]}
          image="/images/xcmg-drilling-building.webp"
        />
      </Route>

      {/* Páginas Generales */}
      <Route path="/contacto" component={Contact} />
      {/* <Route path="/tienda" component={Shop} /> */}

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // App Version: 1.3.0 - Force Update
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>

          <Toaster />
          <VersionTag />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
