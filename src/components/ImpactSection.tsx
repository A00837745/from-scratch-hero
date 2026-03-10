import { Link } from "react-router-dom";
import impactWorld from "@/assets/impact-world.png";
import impactAwards from "@/assets/impact-awards.jpg";
import impactInnovation from "@/assets/impact-innovation.png";

const impactCards = [
  {
    image: impactWorld,
    title: "PARA MEJORAR EL MUNDO",
    gradient: "linear-gradient(135deg, #01f0f0, #0047ca)",
    buttonGradient: "linear-gradient(135deg, #01f0f0, #0047ca)",
    description:
      "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    buttonText: "Leer más",
    link: "#",
    isRoute: false,
  },
  {
    image: impactInnovation,
    title: "FORMACIÓN DE NUEVOS INVENTORES",
    gradient: "linear-gradient(135deg, #fffb00, #e08300)",
    buttonGradient: "linear-gradient(135deg, #fffb00, #e08300)",
    description:
      "Conoce como desde CAIINO formamos a los inventores del mañana",
    buttonText: "Leer más",
    link: "/innovacion-juvenil",
    isRoute: true,
  },
  {
    image: impactAwards,
    title: "PREMIOS",
    gradient: "linear-gradient(135deg, #de5bff, #4c00ff)",
    buttonGradient: "linear-gradient(135deg, #de5bff, #4c00ff)",
    description:
      "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    buttonText: "Leer más",
    link: "#",
    isRoute: false,
  },
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="bg-background py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4"
        >
          IMPACTO
        </h2>
        <div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-full mx-auto">
        {impactCards.map((card) => (
          <div
            key={card.title}
            className="group bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform duration-500 hover:scale-110"
          >
            {/* Card Header */}
            <div
              className="py-6 px-6 text-center"
              style={{ background: card.gradient }}
            >
              <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-center">
                {card.title}
              </h3>
            </div>

            {/* Image */}
            <div className="px-4 pt-6 overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: "460px" }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="px-6 pt-6 pb-4 flex-1">
              <p className="text-muted-foreground text-2xl text-center leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pb-10 pt-4 text-center">
              {card.isRoute ? (
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1 text-white font-semibold text-xl px-8 py-4 rounded-xl transition-opacity hover:opacity-80"
                  style={{ background: card.buttonGradient }}
                >
                  {card.buttonText}
                </Link>
              ) : (
                <a
                  href={card.link}
                  className="inline-flex items-center gap-1 text-white font-semibold text-xl px-8 py-4 rounded-xl transition-opacity hover:opacity-80"
                  style={{ background: card.buttonGradient }}
                >
                  {card.buttonText}
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
