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
import Propulsion from "./pages/Propulsion";
import Irrigation from "./pages/Irrigation";
import Drilling from "./pages/Drilling";
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

      <Route path="/riego" component={Irrigation} />
      
      {/* Divisiones Secundarias (Usando Template) */}
      
      <Route path="/propulsion" component={Propulsion} />

      <Route path="/logistica">
        <DivisionTemplate 
          title="Manejo de materiales y elevación" 
          subtitle="Sistemas de Elevación e Izaje."
          description="Soluciones robustas para el manejo de cargas pesadas en entornos industriales. Diseño, suministro e instalacion de sistemas de elevación que optimizan la seguridad y productividad de sus operaciones."
          features={["Puentes Grúa", "Complementos y Partes", "Polipastos y Winches", "Sistemas de Elevación a Medida"]}
          image="https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/SVswVd9wqfqhyxEOC8iChw-img-2_1770738776000_na1fn_b3ZlcmhlYWQtY3JhbmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1NWc3dWZDl3cWZxaHl4RU9DOGlDaHctaW1nLTJfMTc3MDczODc3NjAwMF9uYTFmbl9iM1psY21obFlXUXRZM0poYm1VLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wgz4bWhCfg5uQtEl0~7jKB0r3V6rIp5cGmkxx3vjZoFmIyYmRNRPTWeDhtyBzWIYmC-GsLFWq-zy6k5cpEZlWf6f96tMmV1wWnLHZmlJRWzEgDsewH6odDTl40oadxtj5z0mo8aTMhTCyDBBCTmFh6bMIqn2n24QeM~MawMQh8RTDxJP4DRWu4YjdZBh5kqhOEKvjnH9cLelQGDiaL8~Mb6ZVyMs6X9-oZ8gj79E7wTVn~SbC1Had9JlKJZF0NBrQtIeQYqlJBBazlT-q4LeN7nH-a3GdWLgHc6HsXkYwx46Cmf92nfpuOyHjjhHKTE1jj6FEoJ0HUersuFlSJvTOQ__"
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
          image="https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/yfPpHYmWXnYHPOrjdIKkIC-img-1_1771535607000_na1fn_bHVicmljYW50ZXMtY29tbWVyY2lhbC12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L3lmUHBIWW1XWG5ZSFBPcmpkSUtrSUMtaW1nLTFfMTc3MTUzNTYwNzAwMF9uYTFmbl9iSFZpY21sallXNTBaWE10WTI5dGJXVnlZMmxoYkMxMk1nLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lGeRbKZto1eTTi0Y3nFaTINoFl-9oJkuKdW2FostQf0ECqXoNc5mJA0TbD8sZwfkcyVcnvGDioF5EgMKEvJrGza1xvXViHIeAvPRV4yJhOlF2hNlPOS-Q0ATJ9HP0~TiSAhGClk3T0Bi7~e7LjFjmfZ~vyW0s8HTvBfCYfmRPAUZYv5PUnS0M-ThdPcX5WiPKHv1M1OOnQbTfrAUDwa3sxzW0jD3mbSFGeIFUfmqA2bGuuc0Cx7TTuKVp3OTCrtJRSDjTaZozjbkSyt9EHHo644Q6X3bpjyWDqXlQHA25vojwtZ0hdcdVEDuL6NunMzjRLZ5cPZNh95IHu6i3B3WbA__"
          seoTitle="Lubricantes Industriales y Aceites Guatemala | Grupo Topke"
          seoDescription="Lubricantes industriales, aceites de motor, fluidos hidráulicos y grasas de alto rendimiento en Guatemala. Productos Motul para maquinaria pesada y equipos industriales."
          seoKeywords="lubricantes industriales, aceites de motor, fluidos hidráulicos, grasas industriales, Motul Guatemala, Topke, análisis de aceite"
        />
      </Route>

      <Route path="/perforacion" component={Drilling} />

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
