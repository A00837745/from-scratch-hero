import { useState } from "react";
import { Menu, X } from "lucide-react";
import caiinnoLogo from "@/assets/caiinno-logo.png";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "¿Quiénes somos?", href: "#quienes" },
  { label: "About us", href: "#about" },
  { label: "Información Estadística", href: "#info" },
  { label: "Eventos", href: "#eventos" },
  { label: "Publicaciones", href: "#publicaciones" },
  { label: "Impacto", href: "#impacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      {/* Logo bar - uses an image so it's easy to swap */}
      <div className="flex items-center justify-center py-4 px-6">
        <img
          src={caiinnoLogo}
          alt="CAIINNO - Centro de Análisis para la Investigación en Innovación"
          className="h-14 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="hidden md:flex items-center justify-center gap-8 py-3 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary text-sm font-semibold transition-colors underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden flex justify-end px-4 py-2">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden flex flex-col items-center gap-3 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary text-sm font-semibold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
