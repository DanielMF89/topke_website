import { ReactNode, useState } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const divisions = [
    { name: "Riego", path: "/riego" },
    { name: "Maquinaria", path: "/maquinaria" },
    { name: "Generación", path: "/generacion" },
    { name: "Propulsión", path: "/propulsion" },
    { name: "Perforación", path: "/perforacion" },
    { name: "Logística", path: "/logistica" },
    { name: "Lubricantes", path: "/lubricantes" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center">
                <img
                  src="/images/logo-topke-new.png"
                  alt="Topke"
                  className="h-12 w-auto"
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/">
                <a className="text-zinc-700 hover:text-primary font-medium transition-colors">
                  Inicio
                </a>
              </Link>
              <Link href="/nosotros">
                <a className="text-zinc-700 hover:text-primary font-medium transition-colors">
                  Nosotros
                </a>
              </Link>
              
              {/* Divisiones Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-zinc-700 hover:text-primary font-medium transition-colors">
                  Divisiones <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {divisions.map((division) => (
                    <DropdownMenuItem key={division.path} asChild>
                      <Link href={division.path}>
                        <a className="w-full">{division.name}</a>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contacto">
                <a className="text-zinc-700 hover:text-primary font-medium transition-colors">
                  Contacto
                </a>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider"
                onClick={() =>
                  window.open(
                    "https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotización",
                    "_blank"
                  )
                }
              >
                Cotizar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-zinc-200">
              <nav className="flex flex-col gap-4">
                <Link href="/">
                  <a
                    className="text-zinc-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </Link>
                <Link href="/nosotros">
                  <a
                    className="text-zinc-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nosotros
                  </a>
                </Link>
                
                <div className="pl-4 flex flex-col gap-2">
                  <p className="text-sm font-bold text-zinc-500 uppercase">Divisiones</p>
                  {divisions.map((division) => (
                    <Link key={division.path} href={division.path}>
                      <a
                        className="text-zinc-700 hover:text-primary font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {division.name}
                      </a>
                    </Link>
                  ))}
                </div>

                <Link href="/contacto">
                  <a
                    className="text-zinc-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </Link>

                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider w-full"
                  onClick={() => {
                    window.open(
                      "https://wa.me/50222248080?text=Hola,%20quisiera%20solicitar%20una%20cotización",
                      "_blank"
                    );
                    setMobileMenuOpen(false);
                  }}
                >
                  Cotizar
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <img
                src="/images/logo-topke-new.png"
                alt="Topke"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-zinc-400 text-sm">
                Más de 125 años de experiencia en el sector agroindustrial.
              </p>
            </div>

            {/* Divisiones */}
            <div>
              <h4 className="font-display text-lg mb-4">Divisiones</h4>
              <ul className="space-y-2">
                {divisions.map((division) => (
                  <li key={division.path}>
                    <Link href={division.path}>
                      <a className="text-zinc-400 hover:text-white transition-colors text-sm">
                        {division.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enlaces */}
            <div>
              <h4 className="font-display text-lg mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/nosotros">
                    <a className="text-zinc-400 hover:text-white transition-colors text-sm">
                      Nosotros
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <a className="text-zinc-400 hover:text-white transition-colors text-sm">
                      Contacto
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Términos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-display text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Guatemala, Guatemala</li>
                <li>Tel: +502 2224-8080</li>
                <li>info@topke.com</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/grupotopke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/grupotopke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Grupo Topke. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
