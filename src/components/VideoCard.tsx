/**
 * =============================================================
 * COMPONENTE: VideoCard
 * =============================================================
 *
 * Este componente renderiza una tarjeta con un reproductor de video
 * integrado con controles personalizados. Cada tarjeta tiene su
 * propio estado independiente (play/pause, volumen, progreso).
 *
 * ─── CÓMO FUNCIONA ───
 *
 * 1. Se usa un elemento <video> nativo de HTML5 con `ref` para
 *    controlarlo programáticamente (sin controles nativos del navegador).
 *
 * 2. Los controles personalizados (play/pause, volumen, barra de progreso)
 *    manipulan el video a través de la referencia `videoRef.current`.
 *
 * 3. Cada instancia de VideoCard tiene su PROPIO estado con useState,
 *    así que reproducir o pausar un video no afecta a los demás.
 *
 * ─── CÓMO MODIFICAR ───
 *
 * - Para cambiar el video: modifica la prop `videoSrc` al usar el componente.
 *   Ejemplo: <VideoCard videoSrc="/mi-video.mp4" ... />
 *
 * - Para añadir más controles (velocidad, pantalla completa, etc.):
 *   1. Añade un nuevo estado con useState
 *   2. Crea una función que modifique videoRef.current (ej: videoRef.current.playbackRate)
 *   3. Añade el botón/slider en la sección de controles
 *
 * - Para cambiar los colores del degradado:
 *   Modifica las props `gradientColors` y `buttonGradient`.
 *
 * =============================================================
 */

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

/**
 * ─── TIPOS DE PROPS ───
 * Define qué datos recibe cada tarjeta desde el componente padre.
 */
interface VideoCardProps {
  /** Ruta al archivo de video (local o URL) */
  videoSrc: string;
  /** Título que aparece en la barra superior de la tarjeta */
  title: string;
  /** Texto descriptivo debajo del video */
  description: string;
  /** Colores del degradado para la barra superior. Ejemplo: "#01f0f0, #0047ca" */
  gradientColors: string;
  /**
   * Imagen horizontal (ej: foto grupal). OPCIONAL.
   * Si se pasa, se renderiza con altura fija y object-cover.
   * Para modificar su tamaño, edita las clases en el bloque "IMAGEN HORIZONTAL".
   */
  horizontalImageSrc?: string;
  /** Texto que aparece debajo de la imagen horizontal */
  horizontalImageText?: string;
  /**
   * Imagen vertical (ej: foto de invento). OPCIONAL.
   * Si se pasa, se renderiza con w-auto y object-contain para no distorsionarse.
   * Para modificar su tamaño, edita las clases en el bloque "IMAGEN VERTICAL".
   */
  verticalImageSrc?: string;
  /** Texto que aparece debajo de la imagen vertical */
  verticalImageText?: string;
}

const VideoCard = ({
  videoSrc,
  title,
  description,
  gradientColors,
  horizontalImageSrc,
  horizontalImageText,
  verticalImageSrc,
  verticalImageText,
}: VideoCardProps) => {
  /**
   * ─── REFERENCIA AL ELEMENTO VIDEO ───
   * `videoRef` nos da acceso directo al elemento <video> del DOM.
   * Con esto podemos llamar métodos como .play(), .pause(),
   * y leer/modificar propiedades como .currentTime, .volume, .duration.
   */
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * ─── ESTADOS DEL REPRODUCTOR ───
   * Cada estado es independiente por instancia del componente.
   *
   * - isPlaying: si el video se está reproduciendo o no
   * - volume: nivel de volumen (0.0 a 1.0)
   * - isMuted: si el video está silenciado
   * - progress: porcentaje de progreso del video (0 a 100)
   * - duration: duración total del video en segundos
   * - currentTime: tiempo actual de reproducción en segundos
   * - showControls: si los controles se muestran (aparecen al pasar el cursor)
   */
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);

  /**
   * ─── PLAY / PAUSE ───
   * Alterna entre reproducir y pausar el video.
   * Usa los métodos nativos .play() y .pause() del elemento <video>.
   */
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  /**
   * ─── SILENCIAR / ACTIVAR SONIDO ───
   * Alterna el estado de mute del video.
   * La propiedad `video.muted` controla esto directamente.
   */
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  /**
   * ─── CAMBIAR VOLUMEN ───
   * Actualiza el volumen del video cuando el usuario mueve el slider.
   * `video.volume` acepta valores entre 0.0 (silencio) y 1.0 (máximo).
   *
   * Si el usuario sube el volumen desde 0, automáticamente desactiva mute.
   */
  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);

    // Si sube el volumen, quitar mute automáticamente
    if (newVolume > 0 && video.muted) {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  /**
   * ─── CAMBIAR POSICIÓN DEL VIDEO (SEEK) ───
   * Permite al usuario saltar a cualquier parte del video
   * haciendo clic en la barra de progreso.
   *
   * Calcula el nuevo tiempo basándose en el porcentaje del slider.
   */
  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  }, []);

  /**
   * ─── PANTALLA COMPLETA ───
   * Solicita pantalla completa sobre el elemento <video> directamente.
   * Usa la API nativa del navegador `requestFullscreen`.
   */
  const toggleFullscreen = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }, []);

  /**
   * ─── FORMATEAR TIEMPO ───
   * Convierte segundos a formato MM:SS para mostrar en la interfaz.
   * Ejemplo: 125 segundos → "02:05"
   */
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  /**
   * ─── EFECTO: ACTUALIZAR PROGRESO EN TIEMPO REAL ───
   * Este useEffect añade un event listener al video que se ejecuta
   * cada vez que el tiempo de reproducción cambia (~4 veces/segundo).
   *
   * Actualiza el estado de progreso y tiempo actual para reflejarlo
   * en la barra de progreso y el contador de tiempo.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Cuando los metadatos del video cargan, obtenemos la duración total
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    // Se ejecuta continuamente mientras el video se reproduce
    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    // Cuando el video termina, resetear el estado de reproducción
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    // Registrar los event listeners
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // Cleanup: remover listeners al desmontar el componente
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg">
      {/* ─── BARRA SUPERIOR CON DEGRADADO ─── */}
      <div
        className="py-5 px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${gradientColors})` }}
      >
        <h3 className="text-white font-bold text-2xl md:text-3xl tracking-wide">
          {title}
        </h3>
      </div>

      {/* ─── REPRODUCTOR DE VIDEO ───
        El contenedor tiene eventos onMouseEnter/onMouseLeave para
        mostrar/ocultar los controles al pasar el cursor.
      */}
      <div
        className="relative px-4 pt-4"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="rounded-lg overflow-hidden bg-black relative">
          {/*
            Elemento <video> nativo de HTML.
            - `ref={videoRef}`: referencia para controlar programáticamente
            - `preload="none"`: permitir que el navegador maneje la carga de forma óptima
            - NO usamos el atributo `controls` porque tenemos controles personalizados
            - `onClick={togglePlay}`: clic en el video = play/pause
          */}
          <video
            ref={videoRef}
            src={videoSrc}
            preload="none"
            crossOrigin="anonymous"
            className="w-full aspect-video object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* ─── OVERLAY DE CONTROLES ───
            Se muestra/oculta con una transición de opacidad.
            Contiene: barra de progreso, play/pause, tiempo, volumen.
          */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
              p-3 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
          >
            {/* Barra de progreso (seek) */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress || 0}
              onChange={handleSeek}
              className="w-full h-1 mb-2 cursor-pointer accent-white"
              style={{ accentColor: "white" }}
            />

            <div className="flex items-center justify-between gap-2">
              {/* Botón Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-white/80 transition-colors"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Contador de tiempo: actual / total */}
              <span className="text-white text-xs font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* Controles de volumen */}
              <div className="flex items-center gap-1 ml-auto">
                {/* Botón mute/unmute */}
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                {/*
                  Slider de volumen.
                  - min/max: rango de 0 a 1
                  - step: incrementos de 0.05 para un control suave
                */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 cursor-pointer accent-white"
                  style={{ accentColor: "white" }}
                />

                {/* Botón pantalla completa */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-white/80 transition-colors ml-1"
                  aria-label="Pantalla completa"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* ─── BOTÓN CENTRAL DE PLAY ───
            Aparece cuando el video está pausado para indicar que se puede reproducir.
          */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity hover:bg-black/20"
              aria-label="Reproducir video"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${gradientColors})` }}
              >
                <Play size={28} className="text-white ml-1" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* ─── DESCRIPCIÓN ─── */}
      <div className="px-6 pt-7 pb-7 flex-1">
        <p className="text-muted-foreground text-2xl text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* ─── IMAGEN HORIZONTAL ───
        Solo se renderiza si se pasa la prop `horizontalImageSrc`.
        PARA MODIFICAR ESTA IMAGEN INDIVIDUALMENTE:
        - Altura fija: cambia `h-48` (ej: h-40, h-56, h-64)
        - `object-cover` rellena el espacio recortando los bordes
        - Foco: `object-center` → puedes usar object-top, object-bottom
      */}
      {horizontalImageSrc && (
        <div className="px-6 py-4 pb-8 flex flex-col items-center gap-5 w-full">
          <img
            src={horizontalImageSrc}
            alt={horizontalImageText}
            className="w-full h-full object-cover object-[center_70%] rounded-2xl"
          />
          <p className="text-xl text-center text-muted-foreground">
            {horizontalImageText}
          </p>
        </div>
      )}

      {/* ─── IMAGEN VERTICAL ───
        Solo se renderiza si se pasa la prop `verticalImageSrc`.
        PARA MODIFICAR ESTA IMAGEN INDIVIDUALMENTE:
        - `w-auto` evita que se estire horizontalmente
        - Ancho máximo: cambia `max-w-xs` (ej: max-w-sm, max-w-md)
        - Alto máximo: cambia `max-h-80` (ej: max-h-64, max-h-96)
        - `object-contain` preserva la proporción sin recortar ni estirar
      */}
      {verticalImageSrc && (
        <div className="px-6 py-4 pb-8 flex flex-col items-center gap-5 w-full">
          <img
            src={verticalImageSrc}
            alt={verticalImageText}
            className="w-auto max-w-xs h-full object-contain rounded-2xl mx-auto"
          />
          <p className="text-xl text-center text-muted-foreground">
            {verticalImageText}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoCard;