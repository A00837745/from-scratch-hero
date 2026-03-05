import impactWorld from "@/assets/impact-world.png";
import impactAwards from "@/assets/impact-awards.jpg";
import impactInnovation from "@/assets/impact-innovation.png";

const impactCards = [
  {
    image: impactWorld,
    title: "PARA MEJORAR EL MUNDO",
    headerColor: "#0096bb",
    buttonColor: "#0096bb",
    description:
      "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    buttonText: "Saber más",
    link: "#",
  },
  {
    image: impactInnovation,
    title: "INNOVACIÓN JUVENIL",
    headerColor: "#0096bb",
    buttonColor: "#0096bb",
    description:
      "Fomenta la creatividad y el espíritu inventor entre los niños y jóvenes a través de programas de innovación y desarrollo.",
    buttonText: "Ver más",
    link: "#",
  },
  {
    image: impactAwards,
    title: "★ PREMIOS",
    headerColor: "#f5a623",
    buttonColor: "#f5a623",
    description:
      "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    buttonText: "Ver más",
    link: "#",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-16 lg:px-24">
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
            className="bg-card rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* Colored header bar */}
            <div
              className="py-4 px-6 text-center"
              style={{ backgroundColor: card.headerColor }}
            >
              <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                {card.title}
              </h3>
            </div>

            {/* Image */}
            <div className="px-4 pt-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="px-6 pt-4 pb-2 flex-1">
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pb-6 pt-2 text-center">
              <a
                href={card.link}
                className="inline-flex items-center gap-1 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: card.buttonColor }}
              >
                {card.buttonText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
