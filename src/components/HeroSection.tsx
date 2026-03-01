const heroLinks = [
  "¿QUIÉNES SOMOS?",
  "NUESTRO OBJETIVO",
  "¿QUÉ PRETENDEMOS?",
  "¿CÓMO LO HACEMOS?",
  "IMPACTO",
];

/**
 * Hero section with looping background video.
 * To change the video, replace the `src` of the <source> element
 * or pass a video URL/import as needed.
 *
 * While no video file is provided, a placeholder message is shown.
 * Replace VIDEO_SRC below with your actual video path, e.g.:
 *   import heroVideo from "@/assets/hero-video.mp4";
 *   then set VIDEO_SRC = heroVideo;
 */
const VIDEO_SRC: string | null = null; // ← replace with your video import

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background video */}
      {VIDEO_SRC ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        /* Fallback while no video is set */
        <div className="absolute inset-0 bg-foreground/90" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.4)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24">
        <h1 className="text-primary-foreground font-black text-3xl md:text-5xl lg:text-6xl mb-8 tracking-wide drop-shadow-lg italic">
          WE THINK BIG, WE WANT CHANGES
        </h1>
        <nav className="flex flex-col gap-3">
          {heroLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-primary-foreground font-bold text-lg md:text-2xl tracking-wide hover:text-primary transition-colors drop-shadow-md w-fit"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
