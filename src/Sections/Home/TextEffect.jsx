import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TextEffect() {
  const sectionRef = useRef(null);

  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  // 1. RAW SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 2. SPRING PHYSICS SMOOTHER (Removes scroll lag & adds inertia)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001,
  });

  // Force video playback during active scrolling
  useEffect(() => {
    const playVideos = () => {
      [video1Ref, video2Ref, video3Ref].forEach((ref) => {
        if (ref.current && ref.current.paused) {
          ref.current.play().catch(() => {});
        }
      });
    };

    playVideos();
    window.addEventListener("scroll", playVideos, { passive: true });
    return () => window.removeEventListener("scroll", playVideos);
  }, []);

  // --- COVER IMAGE (Zoom In & Fade Out) ---
  const bgImageOpacity = useTransform(smoothProgress, [0, 0.08, 0.18], [1, 1, 0]);
  const bgImageScale = useTransform(smoothProgress, [0, 0.18], [0.95, 1.1]);

  // --- FLOATING TEXT OVERLAY (Zoom In & Out) ---
  const textY = useTransform(
    smoothProgress,
    [0, 0.12, 0.78, 0.9],
    ["-40px", "0px", "0px", "-60px"]
  );
  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const textScale = useTransform(
    smoothProgress,
    [0, 0.12, 0.82, 0.9],
    [0.85, 1, 1, 1.1]
  );

  // --- VIDEO 1: FULLSCREEN HERO (Zoom In -> Hold -> Zoom Out Fade) ---
  const video1Opacity = useTransform(
    smoothProgress,
    [0.12, 0.2, 0.32, 0.42],
    [0, 1, 1, 0]
  );
  const video1Scale = useTransform(
    smoothProgress,
    [0.12, 0.2, 0.32, 0.42],
    [0.92, 1, 1, 1.08]
  );

  // --- VIDEO 2: RIGHT FLOATING CARD (Zoom In -> Hold -> Zoom Out Fade) ---
  const video2Opacity = useTransform(
    smoothProgress,
    [0.4, 0.48, 0.62, 0.72],
    [0, 1, 1, 0]
  );
  const video2Scale = useTransform(
    smoothProgress,
    [0.4, 0.48, 0.62, 0.72],
    [0.88, 1, 1, 1.08]
  );
  const video2Y = useTransform(smoothProgress, [0.4, 0.5], ["60px", "0px"]);

  // --- VIDEO 3: SPOTLIGHT CENTER CARD (Zoom In -> Hold -> Zoom Out Fade) ---
  const video3Opacity = useTransform(
    smoothProgress,
    [0.7, 0.78, 0.9, 0.98],
    [0, 1, 1, 0]
  );
  const video3Scale = useTransform(
    smoothProgress,
    [0.7, 0.78, 0.9, 0.98],
    [0.88, 1, 1, 1.08]
  );
  const video3Y = useTransform(smoothProgress, [0.7, 0.8], ["70px", "0px"]);

  return (
    <section ref={sectionRef} className="relative h-[380vh] bg-black">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- COVER IMAGE WITH SMOOTH ZOOM --- */}
        <motion.div
          style={{
            opacity: bgImageOpacity,
            scale: bgImageScale,
          }}
          className="absolute inset-0 z-5 w-full h-full overflow-hidden transform-gpu will-change-transform"
        >
          <img
            src="https://cdn.phototourl.com/free/2026-07-26-8f5ba360-0be2-4230-8ff6-43cdb6bf4197.webp"
            alt="Cinematic Preview"
            className="w-full h-full object-cover filter brightness-95 contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
        </motion.div>

        {/* --- FLOATING TEXT OVERLAY WITH SMOOTH ZOOM --- */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
            scale: textScale,
          }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none px-4 text-center transform-gpu will-change-transform"
        >
          <div className="backdrop-blur-md bg-black/40 p-6 sm:p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-2 max-w-xl md:max-w-2xl w-full">
            <span className="text-amber-200/80 text-xs sm:text-sm uppercase tracking-[0.3em] font-mono block mb-2">
              CINEMATIC MEMORIES
            </span>
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl uppercase font-[t1] font-light tracking-tight leading-none">
              Every Wedding
            </h1>
            <h1 className="text-blue-400 text-3xl sm:text-5xl md:text-6xl uppercase font-[t5] italic font-normal tracking-tight leading-none">
              Deserves
            </h1>
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl uppercase font-[t1] font-light tracking-tight leading-none">
              A Story...
            </h1>
          </div>
        </motion.div>

        {/* --- VIDEO 1: FULLSCREEN BACKGROUND --- */}
        <motion.div
          style={{
            opacity: video1Opacity,
            scale: video1Scale,
          }}
          className="absolute inset-0 z-10 w-full h-full transform-gpu will-change-transform"
        >
          <video
            ref={video1Ref}
            src="/Videos/couple.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover grayscale opacity-90 contrast-[1.05]"
          />
        </motion.div>

        {/* --- VIDEO 2: RIGHT FLOATING EDITORIAL FRAME --- */}
        <motion.div
          style={{
            opacity: video2Opacity,
            scale: video2Scale,
            y: video2Y,
          }}
          className="absolute z-20 
                     bottom-6 right-4 w-[92%] h-[55vh] 
                     md:bottom-auto md:right-10 md:w-[42vw] md:h-[75vh] 
                     rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 transform-gpu will-change-transform"
        >
          <video
            ref={video2Ref}
            src="/Videos/couple2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* --- VIDEO 3: SPOTLIGHT CENTER FRAME --- */}
        <motion.div
          style={{
            opacity: video3Opacity,
            scale: video3Scale,
            y: video3Y,
          }}
          className="absolute z-30 
                     w-[90%] h-[60vh] 
                     md:w-[75vw] md:h-[80vh] 
                     rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-neutral-900 transform-gpu will-change-transform"
        >
          <video
            ref={video3Ref}
            src="/Videos/couple3.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* --- CINEMATIC GRADIENT OVERLAY --- */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/80 z-40 pointer-events-none" />

      </div>
    </section>
  );
}