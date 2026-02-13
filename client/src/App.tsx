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
          features={["Pivotes", "Riego por Goteo", "Carretes Viajeros", "Aspersores"]}
          image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/bDWIpmjxMOEOGxxT.png"
          seoTitle="Sistemas de Riego Guatemala | Grupo Topke"
          seoDescription="Riego tecnificado en Guatemala: pivotes centrales, goteo, bombas. Diseño, instalación y mantenimiento para agricultura."
          seoKeywords="riego, sistemas de riego, riego tecnificado, riego por goteo, bombas de agua, Topke Guatemala"
        />
      </Route>
      
      <Route path="/propulsion">
        <DivisionTemplate 
          title="Motores y Bombas" 
          subtitle="Sistemas de bombeo y propulsión para agricultura y edificaciones."
          description="Soluciones integrales de bombeo para pozos profundos, sistemas de riego agrícola y abastecimiento de agua en edificios. Motores estacionarios de alta eficiencia y confiabilidad."
          features={["Bombas Turbina Vertical", "Motores Estacionarios", "Sistemas de Presión Constante", "Equipos para Pozos Profundos"]}
          image="https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/SVswVd9wqfqhyxEOC8iChw-img-1_1770738789000_na1fn_dmVydGljYWwtdHVyYmluZS1wdW1w.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1NWc3dWZDl3cWZxaHl4RU9DOGlDaHctaW1nLTFfMTc3MDczODc4OTAwMF9uYTFmbl9kbVZ5ZEdsallXd3RkSFZ5WW1sdVpTMXdkVzF3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VwKeP6l5edpplEIieC0Tp6ZxaBhlktLHyog4JDhLtJzYxdLEfEDLhUqU4TmrQMa2bDxTWbuOST15673py7UhGho0tfQRdDciKLFGGB1VBqOP0yvlRoiGIdevISbv09bjZ~b-ZjmnD5MHCqxfRnVtJegBeTKIjOkDXFhuV7DHc0VgxunErVEJxPFEIPiB~NMTMuhdoWYof5WtlXcl-kv5TnCb2bWB4nRtoSje9p2pHx~jb88a3fqD-nGuUkaqNUkvPPZZdI8A5dnvgfEUHj52WXuuVS1ZR6~wZtF03BmyS4ySDfMUzkphVkkA0Y1p8L9oeZi~d5~iv5trCySKJZJ6qQ__"
          seoTitle="Motores y Bombas de Agua Guatemala | Grupo Topke"
          seoDescription="Bombas turbina vertical, motores estacionarios y sistemas de bombeo para pozos profundos en Guatemala. Equipos de alta eficiencia para agricultura e industria."
          seoKeywords="bombas de agua, motores estacionarios, bombas turbina vertical, bombeo pozos profundos, sistemas de bombeo Guatemala, Topke, equipos de bombeo, motores industriales"
        />
      </Route>

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
          image="https://private-us-east-1.manuscdn.com/sessionFile/1aEaUseV5JVMvV6LqjW64x/sandbox/SVswVd9wqfqhyxEOC8iChw-img-3_1770738778000_na1fn_bHVicmljYW50ZXMtaW5kdXN0cmlhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWFFYVVzZVY1SlZNdlY2THFqVzY0eC9zYW5kYm94L1NWc3dWZDl3cWZxaHl4RU9DOGlDaHctaW1nLTNfMTc3MDczODc3ODAwMF9uYTFmbl9iSFZpY21sallXNTBaWE10YVc1a2RYTjBjbWxoYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fRdgMuPMLZaeSOhFN9PEs~Q9Kzsc0AuBAgewVDdpU7gjsK1JyfpK6PCYLOW48SZyM8OI981XqvyjaDMHkeGi2RzEAk1fZeBGd8HA1tcoJ9IVSjuaYYminUaH1ic9bnI0kTtbWK1oblcGTDBujciatfbziD52LcL~JyqYzI6dc2A3Kh85RD9cXVJbAToRr6BfE-W2HaOXbG5pdU3SLb~TpLe5TXJov3cPuoLdpM-5ebseGLGDmykA49u1JqkTaAuCxlx33fCbBq0knatjFzQRfswvSIvJ9cB7xoCKn8yKNVK9xjsAEDgMFvm7Mlz1vSwdwAJze0Qa2YNwBj7mKXpx6g__"
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
          features={["Perforación de Pozos", "Equipamiento de Pozos", "Filmación de Pozos", "Mantenimiento y Rehabilitación"]}
          image="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043532643/kuJhiznkPAFMWzpm.png"
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
