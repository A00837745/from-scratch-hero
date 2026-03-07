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
    gradientColors: "#01f0f0, #0047ca",
  },
  {
    videoSrc: video2,
    title: "TALLER PARA MUJERES INVENTORAS",
    gradientColors: "#fffb00, #e08300",
  },
  {
    videoSrc: video3,
    title: "TALLER PARA JOVENES INVENTORES",
    gradientColors: "#de5bff, #4c00ff",
  },
  {
    videoSrc: video4,
    title: "TALLER PARA ADULTOS INVENTORES",
    gradientColors: "#ff975b, #ff008c",
  },
];

/**
 * ─── DATOS DE LOS CONTENEDORES GRANDES ───
 * Estos 4 bloques aparecen arriba de las tarjetas de video.
 * Modifica title, subtitle y bgColor para personalizar cada uno.
 */
const infoBlocks = [
  {
    title: "TÍTULO BLOQUE 1",
    subtitle: "Según varios autores, incluyendo premios nobel de economía, la mejor acción para aumentar el número de inventores a futuro es trabajando en las infancias.",
    bgColor: "hsl(200, 60%, 95%)",
    imageSrc: imagen1,
  },
  {
    title: "TÍTULO BLOQUE 2",
    subtitle: "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    bgColor: "hsl(340, 60%, 95%)",
    imageSrc: imagen2,
  },
  {
    title: "TÍTULO BLOQUE 3",
    subtitle: "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    bgColor: "hsl(200, 40%, 92%)",
    imageSrc: imagen3,
  },
  {
    title: "TÍTULO BLOQUE 4",
    subtitle: "Árbol que nace torcido, puede enderezarse y volverse inventor. No hay edad para dar un giro en la vida y recuperar la creatividad y el ingenio.",
    bgColor: "hsl(0, 0%, 97%)",
    imageSrc: imagen4,
  },
];

const InnovacionJuvenil = () => {
  useEffect(() => {
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
          <p className="font-bold text-2xl mt-6" style={{ color: "#00aad4" }}>
            Porque no existe un programa de formación de inventores.
          </p>
        </div>
      </section>

      {/* ─── 4 CONTENEDORES GRANDES (GRID 2x2) ───
        Abarcan todo el ancho de la página.
        Cada contenedor tiene color de fondo, título y subtítulo.
        Para agregar imágenes u otro contenido, edita el bloque correspondiente.
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6">
        {infoBlocks.map((block) => (
          <div
            key={block.title}
            className="min-h-[320px] md:min-h-[420px] flex flex-col items-center justify-start px-8 py-10 text-center rounded-2xl"
            style={{ backgroundColor: block.bgColor }}
          >
            <h2
              className="font-black text-2xl md:text-3xl tracking-wide mb-3"
              style={{ color: "#0047ca" }}
            >
              {block.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed mb-6">
              {block.subtitle}
            </p>
            <img
              src={block.imageSrc}
              alt={block.title}
              className="max-h-52 w-auto object-contain rounded-xl"
            />
          </div>
        ))}
      </section>

      {/* ─── GRID DE TARJETAS CON VIDEO ─── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
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