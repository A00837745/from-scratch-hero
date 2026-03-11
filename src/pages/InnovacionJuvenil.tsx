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
import heroVideo from "@/assets/video-impacto.mp4";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import video1 from "@/assets/taller-niños.mp4";
import video2 from "@/assets/taller-mujeres.mp4";
import video3 from "@/assets/taller-jovenes.mp4";
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
    gradientColors: "#E000CD, #4c00ff",
    description: "Invento para calentar agua con materiales reciclables para que la gente viviendo en zonas de pobreza, sin gas, se puedan bañar.",
  }
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
    bgColor: "#C2FFFF",
    imageSrc: imagen1,
    // objectPosition: controla qué parte de la imagen se muestra cuando se recorta.
    // Valores útiles: "center" (default), "top", "bottom", "left", "right"
    objectPosition: "top",
  },
  {
    title: "TALLER PARA MUJERES INVENTORAS",
    subtitle: "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    bgColor: "#fffbc0",
    imageSrc: imagen2,
    horizontal: true,
  },
  {
    title: "TALLER PARA JOVENES INVENTORES",
    subtitle: "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    bgColor: "#ceafe0",
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
      <section className="relative w-full h-[80vh] overflow-hidden">
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

      {/* ─── TÍTULO + 3 TEXTOS ───
        Sección propia con fondo pastel verde menta.
        Para cambiar los 3 textos, edítalos directamente aquí.
        Para cambiar el color de fondo, modifica el backgroundColor.
      */}
      <section
        className="py-20 px-6 md:px-16 lg:px-24"
        style={{ background: "linear-gradient(to right, #C2FFFF, #fff3c2, #ead5ff)" }}
      >
        <div className="text-center mb-20">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4"
          >
            ¿QUÉ TALLERES HEMOS IMPLEMENTADO?
          </h1>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 max-w-8xl mx-auto">
          {/* Columna 1 — edita el texto directamente aquí */}
          <div className="text-center text-xl md:text-2xl leading-relaxed space-y-4">
            <p>En muchas escuelas de México, América Latina y el Caribe, existen pocas actividades que enseñen a las niñas y niños a pensar como inventores: a observar problemas, buscar soluciones y atreverse a crear algo nuevo.</p>
            <p>Esto, a pesar de que estas habilidades pueden cambiar su futuro y el de los países.</p>
          </div>
          {/* Columna 2 — edita el texto directamente aquí */}
          <div className="text-center text-xl md:text-2xl leading-relaxed space-y-4">
            <p>Países desarrollados tienen más inventoras e inventores y más patentes por muchas razones. Una de ellas es que desde pequeños escuchan que ellos pueden crear o inventar algo que cambie su vida o la de los demás.</p>
            <p>Por ejemplo, como dijo el economista Alfred Marshall, "los jóvenes norteamericanos capaces saben que podrían volverse inventores, o pasar de ser barberos a capitanes de guerra, tal como sucedió con los florentinos en la edad media”, es decir, que podían soñar en grande.</p>
          </div>
          {/* Columna 3 — edita el texto directamente aquí */}
          <div className="text-center text-xl md:text-2xl leading-relaxed space-y-4">
            <p>Nuestros jóvenes, niñas y niños también merecen creer en sus sueños. Y esa confianza empieza en la infancia, en la escuela y en la familia. Este taller busca despertar esa chispa.</p>
            <p>El taller también se enfoca en jóvenes universitarios, porque en esa etapa toman decisiones que determinan su futuro profesional.</p>
            <p>Creamos otro taller para adultos, el cual busca sensibilizarlos y hacerles recordar que sigue dentro de ellos una niña o un niño con creatividad, curiosidad y capacidad de inventar soluciones. Esto pretende que les despierte el interés por formar niñas o niños inventores en su círculo cercano, por ejemplo, hijas o hijos.</p>
          </div>
        </div>
      </section>

      {/* ─── 4 CONTENEDORES GRANDES (GRID 2x2) ───
        Abarcan todo el ancho de la página.
        Cada contenedor tiene color de fondo, título y subtítulo.
        Para agregar imágenes u otro contenido, edita el bloque correspondiente.
      */}
      <section 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 py-20 px-6 md:px-16 lg:px-24 w-full"
        style={{ backgroundColor: "#E0FFFF" }}
      >
        {infoBlocks.map((block) => (
          <div
            key={block.title}
            className="min-h-[320px] md:min-h-[420px] flex flex-col items-center justify-start px-8 pt-10 pb-10 text-center rounded-2xl"
            style={{ backgroundColor: block.bgColor }}
          >
            <h2
              className="font-black text-3xl md:text-4xl tracking-wide mb-3"
              style={{ color: "#0047ca" }}
            >
              {block.title}
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-auto leading-relaxed mb-6">
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

   

      {/* ─── GRID DE TARJETAS CON VIDEO ───
        El título ahora está dentro de la sección con fondo azul.
      */}
      <section
        className="py-20 px-6 md:px-16 lg:px-24 w-full"
        style={{ backgroundColor: "#C2FFFF" }}
      >
        {/* ─── TÍTULO DE LA SECCIÓN DE VIDEOS ─── */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4"
          >
            AHORA SABEN QUE SON INVENTORAS E INVENTORES
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
          />
        </div>
        {/*
          ─── TAMAÑO DE LAS TARJETAS DE VIDEO ───
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-[1600px] mx-auto items-start">
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