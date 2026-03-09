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
/**
 * ─── VIDEO DE FONDO (HERO) ───
 * Para cambiar el video de fondo que se reproduce en bucle al inicio de la página,
 * reemplaza esta importación con la ruta a tu nuevo video.
 * Ejemplo: import heroVideo from "@/assets/mi-nuevo-video.mp4";
 */
import heroVideo from "@/assets/fondo-main.mp4";
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
    description: "Invento para extraer agua de un pozo y salvar la vida de una comunidad.",
  },
  {
    videoSrc: video2,
    title: "TALLER PARA MUJERES INVENTORAS",
    gradientColors: "#fffb00, #e08300",
    description: "Invento para purificar agua con materiales reciclables para reducir contaminación en una universidad.",
  },
  {
    videoSrc: video3,
    title: "TALLER PARA JOVENES INVENTORES",
    gradientColors: "#de5bff, #4c00ff",
    description: "Invento para calentar agua con materiales reciclables para que la gente viviendo en zonas de pobreza, sin gas, se puedan bañar.",
  },
  {
    videoSrc: video4,
    title: "TALLER PARA ADULTOS INVENTORES",
    gradientColors: "#ff975b, #ff008c",
    description: "Invento para generar electricidad con materiales reciclados para la extracción de agua.",
  },
];

/**
 * ─── DATOS DE LOS CONTENEDORES GRANDES ───
 * Estos 4 bloques aparecen arriba de las tarjetas de video.
 * Modifica title, subtitle y bgColor para personalizar cada uno.
 */
const infoBlocks = [
  {
    title: "TALLER PARA NIÑOS INVENTORES",
    subtitle: "Según varios autores, incluyendo premios nobel de economía, la mejor acción para aumentar el número de inventores a futuro es trabajando en las infancias.",
    bgColor: "#d0f7f7",
    imageSrc: imagen1,
    // objectPosition: controla qué parte de la imagen se muestra cuando se recorta.
    // Valores útiles: "center" (default), "top", "bottom", "left", "right"
    objectPosition: "top",
  },
  {
    title: "TALLER PARA MUJERES INVENTORAS",
    subtitle: "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    bgColor: "#fefbd0",
    imageSrc: imagen2,
    horizontal: true,
  },
  {
    title: "TALLER PARA JOVENES INVENTORES",
    subtitle: "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    bgColor: "#eccaff",
    imageSrc: imagen3,
  },
  {
    title: "TALLER PARA ADULTOS INVENTORES",
    subtitle: "Árbol que nace torcido, puede enderezarse y volverse inventor. No hay edad para dar un giro en la vida y recuperar la creatividad y el ingenio.",
    bgColor: "#ffcbe8",
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

      {/* ─── VIDEO DE FONDO (HERO) ───
        Video en bucle sin sonido que se reproduce automáticamente.
        Para cambiar el video, modifica la importación `heroVideo` al inicio del archivo.
        Para ajustar la altura, cambia `h-[60vh]` (ej: h-[50vh], h-[70vh], h-screen).
      */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay oscuro opcional — ajusta la opacidad con bg-black/XX */}
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ─── TÍTULO DE LA PÁGINA ─── */}
      <section className="py-14 px-6 md:px-16 lg:px-24">
        <div className="text-center">
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
            className="min-h-[320px] md:min-h-[420px] flex flex-col items-center justify-start px-8 pt-10 pb-10 text-center rounded-2xl"
            style={{ backgroundColor: block.bgColor }}
          >
            <h2
              className="font-black text-2xl md:text-3xl tracking-wide mb-3"
              style={{ color: "#0047ca" }}
            >
              {block.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-xl max-w-auto leading-relaxed mb-6">
              {block.subtitle}
            </p>
            {/*
              ─── IMAGEN DEL BLOQUE ───
              Para hacer la imagen MÁS GRANDE:
                - Imágenes verticales: aumenta `max-h-80` → ej: max-h-96
                - Imagen horizontal: aumenta `h-52` → ej: h-64, h-72
                - Ambas: aumenta `max-w-sm` → ej: max-w-md, max-w-lg
              Para hacer la imagen MÁS PEQUEÑA:
                - Reduce los valores de alto correspondientes.
              Las verticales usan `object-contain` para no distorsionarse ni dejar bordes blancos.
              La horizontal usa `object-cover` con altura fija para llenar su espacio sin vacíos.
              Para marcar un bloque como horizontal añade `horizontal: true` en su objeto de `infoBlocks`.
            */}
            {block.horizontal ? (
              <img
                src={block.imageSrc}
                alt={block.title}
                className="w-full max-w-md h-96 object-cover object-center rounded-2xl mt-auto mb-auto"
              />
            ) : (
              <img
                src={block.imageSrc}
                alt={block.title}
                className="w-full max-w-sm max-h-96 object-cover rounded-2xl"
                style={{ objectPosition: block.objectPosition ?? "center" }}
              />
            )}
          </div>
        ))}
      </section>

            {/* ─── TÍTULO DE LA PÁGINA ─── */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="text-center">
          <h1
            className="font-black text-4xl md:text-6xl mb-3"
            style={{ color: "#0047ca" }}
          >
            SEA EN PAPEL O EN REALIDAD, LO IMPORTANTE ES QUE AHORA SABEN QUE SON INVENTORES
          </h1>
          <div
            className="h-1 w-20 mx-auto rounded-full mt-2"
            style={{ backgroundColor: "#0047ca" }}
          />
        </div>
      </section>

      {/* ─── GRID DE TARJETAS CON VIDEO ─── */}
      <section
        className="py-20 px-6 md:px-16 lg:px-24 w-full"
        style={{ backgroundColor: "#d0f7f7" }}
      >
        {/*
          ─── TAMAÑO DE LAS TARJETAS DE VIDEO ───
          Para ajustar el tamaño de las tarjetas:
          - max-w-md → más pequeñas (max-w-sm) o más grandes (max-w-lg, max-w-xl)
          - gap-10 → espacio entre tarjetas (gap-6 menos, gap-12 más)
          - Para que ocupen todo el ancho disponible, quita la clase max-w-md
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {videoCards.map((card) => (
            <VideoCard
              key={card.title}
              videoSrc={card.videoSrc}
              title={card.title}
              description={card.description}
              gradientColors={card.gradientColors}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InnovacionJuvenil;