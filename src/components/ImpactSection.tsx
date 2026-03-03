import { useState } from "react";
import impactWorld from "@/assets/impact-world.png";
import impactAwards from "@/assets/impact-awards.jpg";
import impactInnovation from "@/assets/impact-innovation.png";
import impactPolicy from "@/assets/impact-policy.jpg";

const impactCards = [
  {
    image: impactWorld,
    title: "PARA MEJORAR EL MUNDO",
    description:
      "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    link: "#",
  },
  {
    image: impactAwards,
    title: "PREMIOS Y RECONOCIMIENTOS",
    description:
      "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    link: "#",
  },
  {
    image: impactInnovation,
    title: "INNOVACIÓN JUVENIL",
    description:
      "Fomenta la creatividad y el espíritu inventor entre los niños y jóvenes a través de programas de innovación y desarrollo.",
    link: "#",
  },
];

// helpers copied from Header to allow uniform style configuration
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

const getImageStyles = (styleObj: any) => {
  const { width, height } = styleObj;
  return {
    style: {
      ...(width ? { width: `${width}px` } : {}),
      ...(height ? { height: `${height}px` } : {}),
    },
  };
};

const STYLES = {
  section: {
    bgColor: "#ffe2c4",
    padding: "py-20 px-6 md:px-16 lg:px-24",
  },
  heading: {
    fontSize: 60,
    fontWeight: "font-black",
    color: "#0096bb",
    mb: "mb-3",
    textCenter: "text-center",
    underlineWidth: "75%",
  },
  title: {
    fontSize: 28,
    fontWeight: "font-bold",
    color: "#ffffff",
  },
  description: {
    fontSize: 20,
    color: "#555555",
  },
  link: {
    fontSize: 16,
    fontWeight: "font-semibold",
    color: "#000000",
    hoverColor: "#ff8400",
    transition: "transition-colors",
  },
};

const ImpactSection = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: STYLES.section.bgColor }} className={`${STYLES.section.padding}`}>
      <div className="text-center mb-14">
        <div className="inline-block">
          <h2
            {...getTextStyles({
              fontSize: STYLES.heading.fontSize,
              color: STYLES.heading.color,
            })}
            className={`${STYLES.heading.fontWeight} ${STYLES.heading.mb} ${STYLES.heading.textCenter} text-4xl md:text-5xl`}
          >
            IMPACTO
          </h2>
          <div style={{ backgroundColor: STYLES.heading.color, width: STYLES.heading.underlineWidth }} className="h-1 mx-auto rounded-full mt-2" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-8xl mx-auto">
        {impactCards.map((card, idx) => (
          <div
            key={card.title}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h3
                {...getTextStyles({
                  fontSize: STYLES.title.fontSize,
                  color: STYLES.title.color,
                })}
                className={`${STYLES.title.fontWeight} text-lg leading-tight drop-shadow-lg absolute bottom-4 left-4 right-4`}
              >
                {card.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-4">
              <p
                {...getTextStyles({
                  fontSize: STYLES.description.fontSize,
                  color: STYLES.description.color,
                })}
                className="leading-relaxed"
              >
                {card.description}
              </p>
              <a
                href={card.link}
                {...getTextStyles({
                  fontSize: STYLES.link.fontSize,
                  color: hoveredLink === idx ? STYLES.link.hoverColor : STYLES.link.color,
                })}
                className={`${STYLES.link.fontWeight} ${STYLES.link.transition} inline-flex items-center gap-1`}
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
