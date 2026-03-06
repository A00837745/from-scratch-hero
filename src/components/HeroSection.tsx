import fondoVideo from "@/assets/fondo-main.mp4";
import { useNavigate, useLocation } from "react-router-dom";

const heroLinks = [
  "¿QUIÉNES SOMOS?",
  "NUESTRO OBJETIVO",
  "¿QUÉ PRETENDEMOS?",
  "¿CÓMO LO HACEMOS?",
  "IMPACTO",
];

const VIDEO_SRC: string | null = fondoVideo;

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

/**
 * Configuración de estilos para el Hero Section
 * Los tamaños de fuente se definen en números (píxeles)
 * Facilita la modificación de tamaños, fuentes y colores
 */
const STYLES = {
  // Overlay background
  overlay: {
    backgroundColor: "bg-[hsl(var(--hero-overlay)/0.4)]",
  },
  // Título principal
  title: {
    color: "#FFFFFF", // blanco por defecto
    fontWeight: "font-black",
    fontSize: 80,
    fontStyle: "italic",
    letterSpacing: "tracking-wide",
    dropShadow: "drop-shadow-lg",
    marginBottom: "mb-8",
  },
  // Enlaces de navegación
  link: {
    color: "#FFFFFF",
    fontWeight: "font-bold",
    fontSize: 40,
    letterSpacing: "tracking-wide",
    dropShadow: "drop-shadow-md",
    hoverEffect: "hover:!text-[#00aad4]",
    transition: "transition-colors",
  },
  // Contenedor de enlaces
  navContainer: {
    display: "flex",
    flexDirection: "flex-col",
    gap: "gap-8",
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full h-[95vh] min-h-[500px] overflow-hidden">
      {/* Background video */}
      {VIDEO_SRC ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-foreground/90" />
      )}

      {/* Dark overlay */}
      <div className={`absolute inset-0 ${STYLES.overlay.backgroundColor}`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
        <h1 
          {...getTextStyles(STYLES.title)}
          className={`${STYLES.title.fontWeight} ${STYLES.title.fontStyle} ${STYLES.title.letterSpacing} ${STYLES.title.dropShadow} ${STYLES.title.marginBottom}`}
        >
          WE THINK BIG, WE WANT CHANGES
        </h1>
        <nav className={`${STYLES.navContainer.display} ${STYLES.navContainer.flexDirection} ${STYLES.navContainer.gap}`}>
          {heroLinks.map((link) => (
            <a
              key={link}
              href="#"
              {...getTextStyles(STYLES.link)}
              className={`${STYLES.link.fontWeight} ${STYLES.link.letterSpacing} ${STYLES.link.hoverEffect} ${STYLES.link.transition} ${STYLES.link.dropShadow} w-fit`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
