import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import caiinnoLogo from "@/assets/Logo.jpg";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "¿Quiénes somos?", href: "/#quienes" },
  { label: "About us", href: "/#about" },
  { label: "Información Estadística", href: "/#info" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Publicaciones", href: "/#publicaciones" },
  { label: "Impacto", href: "/#impacto" },
];

/**
 * Helper para aplicar estilos de texto
 * Convierte los valores de fontSize numéricos a estilos inline
 */
const getTextStyles = (styleObj: any) => {
  const { fontSize, color, ...classStyles } = styleObj;
  const style: any = {};
  if (fontSize) style.fontSize = `${fontSize}px`;
  if (color) style.color = color;
  return {
    style,
    className: Object.values(classStyles).filter(Boolean).join(" "),
  };
};

// Helper para estilos de imagenes que usan dimensiones numéricas
const getImageStyles = (styleObj: any) => {
  const { width, height } = styleObj;
  return {
    style: {
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    },
  };
};

/**
 * Configuración de estilos para el Header
 * Los tamaños de fuente se definen en números (píxeles)
 * Facilita la modificación de tamaños, fuentes y colores
 */
const STYLES = {
  // Logo image
  logoImage: {
    width: 350,
    height: 100,
  },
  // Eslogan
  tagline: {
    color: "#00aad4",
    fontWeight: "font-bold",
    fontSize: 25,
    letterSpacing: "tracking-wide",
    display: "hidden sm:inline",
  },
  // Enlaces de navegación desktop
  navLink: {
    color: "#000000",
    hoverColor: "hover:!text-[#00aad4]",
    fontSize: 18,
    fontWeight: "font-semibold",
    transition: "transition-colors",
    underline: "underline-offset-4 hover:underline",
  },
  // Botón de menú móvil
  mobileButton: {
    color: "#000000", // negro por defecto
  },
  // Enlaces de navegación móvil
  mobileLinkContainer: {
    display: "flex",
    flexDirection: "flex-col",
    alignItems: "items-center",
    gap: "gap-3",
    paddingBottom: "pb-4",
  },
  mobileLink: {
    color: "#888888",
    hoverColor: "hover:!text-primary",
    fontSize: 14,
    fontWeight: "font-semibold",
    transition: "transition-colors",
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      {/* Logo bar */}
      <div className="flex items-center justify-center py-5 px-6 gap-8">
          <img
            src={caiinnoLogo}
            alt="Cai Inno logo"
            {...getImageStyles(STYLES.logoImage)}
            className="object-contain"
          />
          <span {...getTextStyles(STYLES.tagline)} className={`${STYLES.tagline.fontWeight} ${STYLES.tagline.letterSpacing} ${STYLES.tagline.display}`}>
            WE THINK BIG, WE WANT CHANGES
          </span>
        </div>
      {/* Navigation */}
      <nav>
        <div className="hidden md:flex items-center justify-center gap-10 pb-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...getTextStyles(STYLES.navLink)}
              className={`${STYLES.navLink.hoverColor} ${STYLES.navLink.fontWeight} ${STYLES.navLink.transition} ${STYLES.navLink.underline}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <div className="md:hidden flex justify-end px-4 py-2">
          <button onClick={() => setMobileOpen(!mobileOpen)} {...getTextStyles(STYLES.mobileButton)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className={`md:hidden ${STYLES.mobileLinkContainer.display} ${STYLES.mobileLinkContainer.flexDirection} ${STYLES.mobileLinkContainer.alignItems} ${STYLES.mobileLinkContainer.gap} ${STYLES.mobileLinkContainer.paddingBottom}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...getTextStyles(STYLES.mobileLink)}
                className={`${STYLES.mobileLink.hoverColor} ${STYLES.mobileLink.fontWeight} ${STYLES.mobileLink.transition}`}
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
