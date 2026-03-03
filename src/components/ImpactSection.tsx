import impactWorld from "@/assets/impact-world.jpg";
import impactAwards from "@/assets/impact-awards.jpg";
import impactInnovation from "@/assets/impact-innovation.jpg";
import impactPolicy from "@/assets/impact-policy.jpg";

const impactCards = [
  {
    image: impactWorld,
    title: "Para mejorar el mundo",
    description:
      "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    link: "#",
  },
  {
    image: impactAwards,
    title: "Premios y reconocimientos",
    description:
      "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    link: "#",
  },
  {
    image: impactInnovation,
    title: "Innovación colaborativa",
    description:
      "Metodologías que reconocen el aporte de la innovación inclusiva en una economía resiliente y sostenible.",
    link: "#",
  },
  {
    image: impactPolicy,
    title: "Políticas públicas inclusivas",
    description:
      "Articulaciones para impulsar normas que fortalezcan la protección de derechos y el desarrollo social.",
    link: "#",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-[hsl(var(--impact-bg))] py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black italic text-[hsl(var(--impact-heading))] mb-3">
          IMPACTO
        </h2>
        <div className="w-16 h-1 bg-[hsl(var(--impact-heading))] mx-auto rounded-full" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {impactCards.map((card) => (
          <div
            key={card.title}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-primary-foreground font-bold text-lg leading-tight drop-shadow-lg">
                {card.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--impact-heading))] hover:text-[hsl(var(--impact-accent))] transition-colors"
              >
                Leer más
                <span className="text-base">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
