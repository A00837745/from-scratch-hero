import { Link } from "react-router-dom";
import impactWorld from "@/assets/impact-world.png";
import impactAwards from "@/assets/impact-awards.jpg";
import impactInnovation from "@/assets/impact-innovation.png";

const impactCards = [
  {
    image: impactWorld,
    title: "PARA MEJORAR EL MUNDO",
    gradient: "linear-gradient(135deg, #00b4d8, #0096bb)",
    buttonGradient: "linear-gradient(135deg, #00b4d8, #0077a0)",
    description:
      "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    buttonText: "Saber más",
    link: "#",
    isRoute: false,
  },
  {
    image: impactInnovation,
    title: "INNOVACIÓN JUVENIL",
    gradient: "linear-gradient(135deg, #00b4d8, #0096bb)",
    buttonGradient: "linear-gradient(135deg, #00b4d8, #0077a0)",
    description:
      "Fomenta la creatividad y el espíritu inventor entre los niños y jóvenes a través de programas de innovación y desarrollo.",
    buttonText: "Ver más",
    link: "/innovacion-juvenil",
    isRoute: true,
  },
  {
    image: impactAwards,
    title: "★ PREMIOS",
    gradient: "linear-gradient(135deg, #f7c948, #f5a623)",
    buttonGradient: "linear-gradient(135deg, #f7c948, #e8951e)",
    description:
      "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    buttonText: "Ver más",
    link: "#",
    isRoute: false,
  },
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="bg-background py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className="font-black text-4xl md:text-5xl mb-3"
          style={{ color: "#0096bb" }}
        >
          IMPACTO
        </h2>
        <div
          className="h-1 w-16 mx-auto rounded-full mt-2"
          style={{ backgroundColor: "#0096bb" }}
        />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {impactCards.map((card) => (
          <div
            key={card.title}
            className="group bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* Colored header bar with gradient */}
            <div
              className="py-4 px-6 text-center"
              style={{ background: card.gradient }}
            >
              <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                {card.title}
              </h3>
            </div>

            {/* Image with zoom on hover */}
            <div className="px-4 pt-4 overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Description */}
            <div className="px-6 pt-4 pb-2 flex-1">
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pb-6 pt-2 text-center">
              {card.isRoute ? (
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-opacity hover:opacity-85"
                  style={{ background: card.buttonGradient }}
                >
                  {card.buttonText} →
                </Link>
              ) : (
                <a
                  href={card.link}
                  className="inline-flex items-center gap-1 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-opacity hover:opacity-85"
                  style={{ background: card.buttonGradient }}
                >
                  {card.buttonText} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
