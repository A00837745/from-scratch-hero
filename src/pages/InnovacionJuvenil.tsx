/**
 * =============================================================
 * PÁGINA: Innovación Juvenil
 * =============================================================
 *
 * Esta página muestra 4 tarjetas con videos integrados.
 *
 * ─── CÓMO AGREGAR O CAMBIAR VIDEOS ───
 *
 * 1. Coloca tu archivo de video en la carpeta `src/assets/`
 *    (formatos recomendados: .mp4, .webm)
 *
 * 2. Importa el video al inicio de este archivo:
 *    import miVideo from "@/assets/mi-video.mp4";
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
 *   - buttonText: Texto del botón inferior
 *   - buttonLink: URL a la que redirige el botón
 *
 * =============================================================
 */

import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

/**
 * ─── IMPORTAR VIDEOS ───
 * Importa aquí los archivos de video que quieras usar.
 * Ejemplo:
 *   import video1 from "@/assets/video-taller-1.mp4";
 *
 * Por ahora se usa una cadena vacía como placeholder.
 * Cuando importes un video real, reemplaza "" con la variable importada.
 */
// import video1 from "@/assets/video-taller-1.mp4";
// import video2 from "@/assets/video-taller-2.mp4";
// import video3 from "@/assets/video-taller-3.mp4";
// import video4 from "@/assets/video-taller-4.mp4";

/**
 * ─── DATOS DE LAS TARJETAS ───
 * Modifica este array para cambiar el contenido de cada tarjeta.
 */
const videoCards = [
  {
    videoSrc: "", // Reemplazar con: video1
    title: "TÍTULO DEL VIDEO 1",
    description:
      "Aquí va la descripción del primer video. Reemplaza este texto con información sobre el contenido del taller o actividad mostrada.",
    gradientColors: "#01f0f0, #0047ca", // Degradado cian → azul
    buttonText: "Saber más",
    buttonLink: "#",
  },
  {
    videoSrc: "", // Reemplazar con: video2
    title: "TÍTULO DEL VIDEO 2",
    description:
      "Aquí va la descripción del segundo video. Explica qué se muestra en este video y por qué es relevante para la innovación juvenil.",
    gradientColors: "#fffb00, #e08300", // Degradado amarillo → naranja
    buttonText: "Saber más",
    buttonLink: "#",
  },
  {
    videoSrc: "", // Reemplazar con: video3
    title: "TÍTULO DEL VIDEO 3",
    description:
      "Aquí va la descripción del tercer video. Comparte detalles sobre la experiencia o el proyecto que se presenta.",
    gradientColors: "#de5bff, #4c00ff", // Degradado morado → violeta
    buttonText: "Saber más",
    buttonLink: "#",
  },
  {
    videoSrc: "", // Reemplazar con: video4
    title: "TÍTULO DEL VIDEO 4",
    description:
      "Aquí va la descripción del cuarto video. Describe el impacto o los resultados del taller o iniciativa presentada.",
    gradientColors: "#ff5b5b, #ff0066", // Degradado rojo → rosa
    buttonText: "Saber más",
    buttonLink: "#",
  },
];

const InnovacionJuvenil = () => {
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
        </div>

        {/* ─── GRID DE TARJETAS CON VIDEO ───
          Se usa un grid de 2 columnas en desktop y 1 en móvil.
          Para cambiar a 3 o 4 columnas, modifica `lg:grid-cols-2` por
          `lg:grid-cols-3` o `lg:grid-cols-4`.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {videoCards.map((card) => (
            <VideoCard
              key={card.title}
              videoSrc={card.videoSrc}
              title={card.title}
              description={card.description}
              gradientColors={card.gradientColors}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InnovacionJuvenil;
