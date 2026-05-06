import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Facebook, Linkedin, Instagram, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Enlaces principales visibles
  const mainNavItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
  ];

  // Todas las divisiones en el menú desplegable "Divisiones"
  const dropdownItems = [
    { name: "Riego", path: "/riego" },
    { name: "Maquinaria", path: "/maquinaria" },
    { name: "Generación", path: "/generacion" },
    { name: "Propulsión", path: "/propulsion" },
    { name: "Perforación", path: "/perforacion" },
    { name: "Logística", path: "/logistica" },
    { name: "Lubricantes", path: "/lubricantes" },
  ];

  const otherLinks = [
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">


      {/* Floating Contact Widget (Expandable) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 group/widget">
        <div className="bg-zinc-900/80 backdrop-blur-md shadow-lg border border-zinc-700 p-2 rounded-[25px] transition-all duration-300 flex flex-col gap-2 animate-in slide-in-from-left overflow-hidden w-[50px] group-hover/widget:w-[200px]">
          
          <a href="https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20información" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-[#25D366] transition-colors group whitespace-nowrap">
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <MessageCircle size={16} />
            </div>
            <div className="flex flex-col opacity-0 group-hover/widget:opacity-100 transition-opacity duration-300 delay-75">
              <span className="text-[10px] font-bold uppercase text-zinc-500 leading-none">WhatsApp</span>
              <span className="text-sm font-bold">2224-8080</span>
            </div>
          </a>

        </div>
      </div>

      {/* Main Navigation - CHANGED to White */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-zinc-200",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white py-4"
        )}
      >
        <div className="w-full px-6 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <img 
                src="/images/logo-topke-new.png" 
                alt="Topke Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" // Removed brightness-0 invert
              />
              <div className="hidden lg:block border-l-2 border-zinc-300 pl-3 ml-1">
                <span className="block text-[10px] font-bold text-zinc-500 leading-tight tracking-widest uppercase">Desde</span>
                <span className="block text-sm font-bold text-zinc-900 leading-none">1896</span>
              </div>
            </Link>
          </div>
          {/* Desktop Nav - Right side */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors relative py-2",
                  location === item.path ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-zinc-700"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown Divisiones */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors outline-none relative py-2",
                dropdownItems.some(i => location === i.path) ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-zinc-700"
              )}>
                Divisiones <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-zinc-200 shadow-xl rounded-none p-2 min-w-[200px]">
                {dropdownItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      href={item.path}
                      className="block w-full px-4 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-100 hover:text-primary uppercase cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {otherLinks.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors relative py-2",
                  location === item.path ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-zinc-700"
                )}
              >
                {item.name}
              </Link>
            ))}

            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
              onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotización', '_blank')}
            >
              <span className="skew-x-[10deg]">Cotizar</span>
            </Button>
          </nav>

          {/* CTA Button - hidden, now inside nav */}
          <div className="hidden">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
              onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotización', '_blank')}
            >
              <span className="skew-x-[10deg]">Cotizar</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - CHANGED to White */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4 text-center">
            {[...mainNavItems, ...dropdownItems, ...otherLinks].map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className="text-lg font-bold uppercase text-zinc-700 hover:text-primary py-2 border-b border-zinc-100"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="w-full mt-4 bg-primary text-white font-bold uppercase rounded-none"
              onClick={() => window.open('https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotización', '_blank')}
            >
              Solicitar Cotización
            </Button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - INVERTED to Light */}
      <footer className="bg-white text-zinc-900 pt-16 pb-8 border-t-4 border-primary">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/images/logo-topke-new.png" 
                alt="Topke Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              Fundada en 1896, con una trayectoria de más 125 años de experiencia en el sector agroindustrial, ofreciendo maquinaria, equipo y soluciones de alto rendimiento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-zinc-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-zinc-700">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-zinc-700">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 border-l-4 border-primary pl-3 text-zinc-900">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Divisiones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Marcas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Bolsa de Empleo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Divisions */}
          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 border-l-4 border-primary pl-3 text-zinc-900">Divisiones</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link href="/maquinaria" className="hover:text-primary transition-colors">Maquinaria de Construcción</Link></li>
              <li><Link href="/generacion" className="hover:text-primary transition-colors">Generación de Energía</Link></li>
              <li><Link href="/riego" className="hover:text-primary transition-colors">Sistemas de Riego</Link></li>
              <li><Link href="/propulsion" className="hover:text-primary transition-colors">Motores y Bombas</Link></li>
              <li><Link href="/logistica" className="hover:text-primary transition-colors">Logística Industrial</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6 border-l-4 border-primary pl-3 text-zinc-900">Contacto</h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={16} />
                <span>PBX: +502 2224-8000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={16} />
                <span>info@topke.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <span>Vía 4, 5-52 Zona 4, Edificio Topke, Ciudad de Guatemala</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} Topke S.A. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-zinc-500">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
