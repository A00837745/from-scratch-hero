/**
 * ─── CÓMO AGREGAR O CAMBIAR VIDEOS ───
 *
 * 1. Coloca tu archivo de video en la carpeta `src/assets/`
 *    (formatos recomendados: .mp4, .webm)
 *
 * 2. Importa el video al inicio de este archivo:
 *    import video# from "@/assets/video.mp4";
 *
 * 3. Reemplaza el valor de `videoSrc` en el array `videoCards`
 *    con la variable importada.
 *
 * ─── CÓMO MODIFICAR LAS TARJETAS ───
 *
 * Cada objeto en el array `videoCards` representa una tarjeta.
 * Puedes cambiar:
 *   - title: Texto de la barra superior
 *   - description: Texto debajo del video
 *   - videoSrc: Ruta al video (importado como módulo)
 *   - gradientColors: Colores del degradado (separados por coma)
 *   - horizontalImageSrc: Imagen ancha (foto grupal, paisaje, etc.) — opcional
 *   - horizontalImageText: Texto que aparece bajo la imagen horizontal
 *   - verticalImageSrc: Imagen vertical (foto de invento, retrato, etc.) — opcional
 *   - verticalImageText: Texto que aparece bajo la imagen vertical
 *
 * Si una tarjeta solo tiene imagen vertical, omite horizontalImageSrc (y viceversa).
 *
 * =============================================================
 */

import { useEffect } from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import video1 from "@/assets/taller-niños.mp4";
import video2 from "@/assets/taller-mujeres.mp4";
import video3 from "@/assets/taller-jovenes.mp4";
import video4 from "@/assets/taller-adultos.mp4";
import imagen1 from "@/assets/invento-niños.jpg";
import imagen2 from "@/assets/invento-mujeres.jpg";
import imagen3 from "@/assets/invento-jovenes.jpg";
import imagen4 from "@/assets/invento-adultos.jpg";

/**
 * ─── DATOS DE LAS TARJETAS ───
 * Modifica este array para cambiar el contenido de cada tarjeta.
 *
 * PARA CAMBIAR LAS IMÁGENES:
 * - Usa `horizontalImageSrc` para fotos anchas (se muestran recortadas a altura fija).
 * - Usa `verticalImageSrc` para fotos verticales (se muestran con su proporción original).
 * - Solo pasa la prop que corresponda — la otra no aparecerá.
 *
 * PARA CAMBIAR EL TEXTO BAJO LA IMAGEN:
 * - Modifica `horizontalImageText` o `verticalImageText` según corresponda.
 */
const videoCards = [
  {
    videoSrc: video1,
    title: "TALLER PARA NIÑOS INVENTORES",
    description:
      "Según varios autores, incluyendo premios nobel de economía, la mejor acción para aumentar el número de inventores a futuro es trabajando en las infancias.",
    gradientColors: "#01f0f0, #0047ca",
    // Imagen vertical (niños en el suelo dibujando)
    verticalImageSrc: imagen1,
    verticalImageText: "Invento para extraer agua de un pozo y salvar la vida de una comunidad.",
  },
  {
    videoSrc: video2,
    title: "TALLER PARA MUJERES INVENTORAS",
    description:
      "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    gradientColors: "#fffb00, #e08300",
    // Imagen horizontal (foto grupal de mujeres)
    horizontalImageSrc: imagen2,
    horizontalImageText: "Invento para purificar agua con materiales reciclables para reducir contaminación en una universidad.",
  },
  {
    videoSrc: video3,
    title: "TALLER PARA JOVENES INVENTORES",
    description:
      "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    gradientColors: "#de5bff, #4c00ff",
    // Imagen vertical (jóvenes con invento)
    verticalImageSrc: imagen3,
    verticalImageText: "Invento para calentar agua con materiales reciclables para que la gente viviendo en zonas de pobreza, sin gas, se puedan bañar.",
  },
  {
    videoSrc: video4,
    title: "TALLER PARA ADULTOS INVENTORES",
    description:
      "Árbol que nace torcido, puede enderezarse y volverse inventor. No hay edad para dar un giro en la vida y recuperar la creatividad y el ingenio",
    gradientColors: "#ff975b, #ff008c",
    // Imagen vertical (adultos con invento)
    verticalImageSrc: imagen4,
    verticalImageText: "Invento para generar electricidad con materiales reciclados para la extracción de agua.",
  },
];

const InnovacionJuvenil = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── TÍTULO DE LA PÁGINA ─── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h1
            className="font-black text-4xl md:text-6xl mb-3"
            style={{ color: "#0047ca" }}
          >
            ¿PORQUÉ NACIÓ EL TALLER?
          </h1>
          <div
            className="h-1 w-20 mx-auto rounded-full mt-2"
            style={{ backgroundColor: "#0047ca" }}
          />
          <p className="font-bold text-2xl mt-6"
          style={{ color: "#00aad4" }}
          >
            Porque no existe un programa de formación de inventores.
          </p>
        </div>

        {/* ─── GRID DE TARJETAS CON VIDEO ───
          Se usa un grid de 2 columnas en desktop y 1 en móvil.
          Para cambiar a 3 o 4 columnas, modifica `lg:grid-cols-2` por
          `lg:grid-cols-3` o `lg:grid-cols-4`.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {videoCards.map((card) => (
            <VideoCard
              key={card.title}
              videoSrc={card.videoSrc}
              title={card.title}
              description={card.description}
              gradientColors={card.gradientColors}
              horizontalImageSrc={card.horizontalImageSrc}
              horizontalImageText={card.horizontalImageText}
              verticalImageSrc={card.verticalImageSrc}
              verticalImageText={card.verticalImageText}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InnovacionJuvenil;