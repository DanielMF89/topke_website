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
          image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/CgigVpouSQNJJntm.jpg"
          seoTitle="Sistemas de Riego Guatemala | Grupo Topke"
          seoDescription="Riego tecnificado en Guatemala: pivotes centrales, goteo, bombas. Diseño, instalación y mantenimiento para agricultura."
          seoKeywords="riego, sistemas de riego, riego tecnificado, pivotes, riego por goteo, bombas de agua, Topke Guatemala"
        />
      </Route>
      
      <Route path="/propulsion">
        <DivisionTemplate 
          title="Motores y Bombas" 
          subtitle="Sistemas de bombeo y propulsión para agricultura y edificaciones."
          description="Soluciones integrales de bombeo para pozos profundos, sistemas de riego agrícola y abastecimiento de agua en edificios. Motores estacionarios de alta eficiencia y confiabilidad."
          features={["Bombas Turbina Vertical", "Motores Estacionarios", "Sistemas de Presión Constante", "Equipos para Pozos Profundos"]}
          image="/images/vertical-turbine-pump.jpg"
          seoTitle="Motores y Bombas de Agua Guatemala | Grupo Topke"
          seoDescription="Bombas turbina vertical, motores estacionarios y sistemas de bombeo para pozos profundos en Guatemala. Equipos de alta eficiencia para agricultura e industria."
          seoKeywords="bombas de agua, motores estacionarios, bombas turbina vertical, bombeo pozos profundos, sistemas de bombeo Guatemala, Topke, equipos de bombeo, motores industriales"
        />
      </Route>

      <Route path="/logistica">
        <DivisionTemplate 
          title="Manejo de materiales" 
          subtitle="Sistemas de Elevación e Izaje."
          description="Soluciones robustas para el manejo de cargas pesadas en entornos industriales. Diseño, suministro e instalacion de sistemas de elevación que optimizan la seguridad y productividad de sus operaciones."
          features={["Grúas Puente", "Grúas Pórtico", "Polipastos y Winches", "Sistemas de Elevación a Medida"]}
          image="/images/overhead-crane-real.jpg"
          seoTitle="Grúas Puente y Sistemas de Elevación Guatemala | Grupo Topke"
          seoDescription="Grúas puente, grúas pórtico, polipastos y sistemas de elevación industrial en Guatemala. Diseño e instalación de equipos de izaje para manejo de cargas pesadas."
          seoKeywords="grúas puente, grúas pórtico, sistemas de elevación, polipastos, winches, equipos de izaje Guatemala, Topke, manejo de materiales, grúas industriales"
        />
      </Route>

      <Route path="/lubricantes">
        <DivisionTemplate 
          title="Lubricantes" 
          subtitle="Productos especializados para el mantenimiento y vida útil de maquinaria."
          description="Lubricantes de alto rendimiento formulados para proteger sus equipos bajo las condiciones más severas de operación, extendiendo su vida útil."
          features={["Aceites de Motor", "Fluidos Hidráulicos", "Grasas Industriales", "Análisis de Aceite"]}
          image="/images/motul-drum-real.jpg"
          seoTitle="Lubricantes Industriales y Aceites Guatemala | Grupo Topke"
          seoDescription="Lubricantes industriales, aceites de motor, fluidos hidráulicos y grasas de alto rendimiento en Guatemala. Productos Motul para maquinaria pesada y equipos industriales."
          seoKeywords="lubricantes industriales, aceites de motor, fluidos hidráulicos, grasas industriales, Motul Guatemala, Topke, análisis de aceite"
        />
      </Route>

      <Route path="/perforacion">
        <DivisionTemplate 
          title="Perforación de Pozos" 
          subtitle="Maquinaria y equipos especializados para la perforación de pozos profundos."
          description="Tecnología avanzada para la exploración y extracción de agua subterránea, garantizando eficiencia y seguridad en cada proyecto de perforación."
          features={["Perforadoras Rotativas", "Compresores de Aire", "Herramientas de Perforación", "Asesoría Geológica"]}
          image="/images/xcmg-drilling-building.webp"
          seoTitle="Perforación de Pozos de Agua Guatemala | Grupo Topke"
          seoDescription="Perforación de pozos profundos en Guatemala: perforadoras rotativas XCMG, compresores de aire y herramientas especializadas. Exploración y extracción de agua subterránea."
          seoKeywords="perforación de pozos, pozos de agua, perforadoras rotativas, equipos de perforación Guatemala, Topke, xcmg, pozos profundos, extracción agua subterránea"
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
