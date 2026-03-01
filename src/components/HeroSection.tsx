import { ChevronLeft, ChevronRight } from "lucide-react";
import heroPyramid from "@/assets/hero-pyramid.jpg";

const heroLinks = [
  "¿QUIÉNES SOMOS?",
  "NUESTRO OBJETIVO",
  "¿QUÉ PRETENDEMOS?",
  "¿CÓMO LO HACEMOS?",
  "IMPACTO",
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src={heroPyramid}
        alt="Pirámide de Chichén Itzá"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.35)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
        <h1 className="text-primary-foreground font-black text-3xl md:text-5xl lg:text-6xl mb-8 tracking-wide drop-shadow-lg italic">
          WE THINK BIG, WE WANT CHANGES
        </h1>
        <nav className="flex flex-col gap-3">
          {heroLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-primary-foreground font-bold text-lg md:text-2xl tracking-wide hover:text-primary transition-colors drop-shadow-md w-fit"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Carousel arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;
