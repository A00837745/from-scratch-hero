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
    overlayColor: "#C2FFFF",
    titleColor: "#00bcd4",
    imageSrc: imagen1,
    objectPosition: "top",
  },
  {
    title: "TALLER PARA MUJERES INVENTORAS",
    subtitle: "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    overlayColor: "#e8c8f0",
    titleColor: "#c060d0",
    imageSrc: imagen2,
  },
  {
    title: "TALLER PARA JOVENES INVENTORES",
    subtitle: "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    overlayColor: "#f5d0a0",
    titleColor: "#e08300",
    imageSrc: imagen3,
  },
  {
    title: "TALLER PARA ADULTOS INVENTORES",
    subtitle: "Árbol que nace torcido, puede enderezarse y volverse inventor. No hay edad para dar un giro en la vida y recuperar la creatividad y el ingenio.",
    overlayColor: "#f0c0d8",
    titleColor: "#e06090",
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

      {/* ─── SECCIÓN: ¿QUÉ TALLERES HEMOS IMPLEMENTADO? ───
        3 tarjetas con fondo de color y texto superpuesto.
        Para cambiar colores, modifica bgColor en el array tallerCards.
        Para cambiar textos, edita title y description.
      */}
      <section
        className="py-20 px-6 md:px-16 lg:px-24"
        style={{ backgroundColor: "#ddd5e8" }}
      >
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-center"
          style={{ color: "#3730a3" }}
        >
          ¿Qué talleres hemos<br />implementado?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 — EL PANORAMA */}
          <div className="rounded-2xl p-8 flex flex-col justify-start" style={{ backgroundColor: "#b8c45a" }}>
            <h3 className="text-white font-black text-2xl md:text-3xl tracking-wide mb-4">EL PANORAMA</h3>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              En muchas escuelas de México, América Latina y el Caribe hay pocas actividades que enseñen a niñas y niños a pensar como inventores, es decir, a observar problemas, buscar soluciones y crear cosas nuevas, a pesar de que estas habilidades pueden transformar su futuro y el de sus países.
            </p>
          </div>
          {/* Card 2 — INVENCIÓN */}
          <div className="rounded-2xl p-8 flex flex-col justify-start" style={{ backgroundColor: "#c4b84a" }}>
            <h3 className="text-white font-black text-2xl md:text-3xl tracking-wide mb-4">INVENCIÓN</h3>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              En los países desarrollados hay más inventores y patentes, en parte porque desde pequeños se les hace creer que pueden crear algo que cambie su vida o la de otros. Por ello, es importante que nuestras niñas, niños y jóvenes también desarrollen esa confianza desde la infancia, en la escuela y la familia.
            </p>
          </div>
          {/* Card 3 — FORMACIÓN */}
          <div className="rounded-2xl p-8 flex flex-col justify-start" style={{ backgroundColor: "#7c5ba3" }}>
            <h3 className="text-white font-black text-2xl md:text-3xl tracking-wide mb-4">FORMACIÓN</h3>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Nuestros talleres buscan despertar esa chispa creativa, además de involucrar a jóvenes universitarios — quienes están definiendo su futuro profesional — y a adultos, para que reconecten con su creatividad y se motiven a impulsar el espíritu inventor en las niñas y niños de su entorno.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN: NUESTROS TALLERES ───
        4 tarjetas con imagen de fondo y texto superpuesto.
        Para cambiar las imágenes, modifica imageSrc en infoBlocks.
        Para cambiar los textos, edita title y subtitle.
        Para cambiar colores del degradado, modifica los valores de gradiente.
      */}
      <section
        className="py-20 px-6 md:px-16 lg:px-24 w-full"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center"
          style={{ color: "#3730a3" }}
        >
          Nuestros talleres
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {infoBlocks.map((block) => (
            <div
              key={block.title}
              className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[380px] flex flex-col justify-end"
            >
              {/* Imagen de fondo */}
              <img
                src={block.imageSrc}
                alt={block.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: block.objectPosition ?? "center" }}
              />
              {/* Overlay con color difuminado único por tarjeta */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${block.overlayColor}dd 0%, ${block.overlayColor}88 40%, transparent 70%)`,
                }}
              />
              {/* Texto superpuesto */}
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-white font-black text-xl md:text-2xl mb-1 drop-shadow-lg">
                  Taller para
                </h3>
                <h3 className="font-black text-2xl md:text-3xl mb-3 drop-shadow-lg" style={{ color: block.titleColor }}>
                  {block.title.replace("TALLER PARA ", "").toLowerCase()}
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed max-w-md drop-shadow-md">
                  {block.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
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