import { useState } from "react";
import { Menu, X } from "lucide-react";

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
      {/* Logo bar */}
      <div className="flex items-center justify-center py-4 px-6 gap-3">
        <div className="flex items-center gap-1">
          {/* Logo circle */}
          <div className="w-12 h-12 rounded-full border-[3px] border-primary flex items-center justify-center relative">
            <span className="text-primary font-black text-lg tracking-tight">IN</span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-foreground font-extrabold text-2xl tracking-wide">CAI</span>
            <span className="text-primary font-extrabold text-2xl tracking-wide">INNO</span>
          </div>
        </div>
        <span className="text-primary font-bold text-sm tracking-wide hidden sm:inline">
          WE THINK BIG, WE WANT CHANGES
        </span>
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
        {/* Mobile toggle */}
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
