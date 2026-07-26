import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextEffect() {
  const sectionRef = useRef(null);

  // Scroll Progress tied to the tall scrollable track
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // --- TEXT ANIMATIONS ---
  // Text slides down, stays centered, then exits upward smoothly
  const textY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 0.95],
    ["-80%", "0%", "0%", "-120%"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.82, 0.95],
    [0, 1, 1, 0]
  );

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 0.95],
    [0.9, 1, 1, 0.95]
  );

  // --- VIDEO 1 ANIMATIONS (Full Screen Background) ---
  const video1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.12, 0.28, 0.35],
    [0, 1, 1, 0]
  );
  const video1Scale = useTransform(
    scrollYProgress,
    [0.1, 0.35],
    [1, 1.08]
  );

  // --- VIDEO 2 ANIMATIONS (Right Floating Card) ---
  const video2Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.42, 0.58, 0.65],
    [0, 1, 1, 0]
  );
  const video2Scale = useTransform(
    scrollYProgress,
    [0.38, 0.65],
    [0.92, 1.05]
  );
  const video2Y = useTransform(
    scrollYProgress,
    [0.35, 0.45],
    ["60px", "0px"]
  );

  // --- VIDEO 3 ANIMATIONS (Centered Showcase Card) ---
  const video3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.72, 0.92, 1],
    [0, 1, 1, 1]
  );
  const video3Scale = useTransform(
    scrollYProgress,
    [0.68, 1],
    [0.95, 1.05]
  );
  const video3Y = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["80px", "0px"]
  );

  return (
    // Tall container acting as the scroll timeline
    <section ref={sectionRef} className="relative h-[350vh] bg-black">
      
      {/* Sticky Viewport Container pinned while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- ELEGANT FLOATING TEXT OVERLAY --- */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
            scale: textScale,
          }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none px-4 text-center"
        >
          <div className="backdrop-blur-md bg-black/30 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-2 max-w-2xl w-full">
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

        {/* --- VIDEO 1: Fullscreen Hero Background --- */}
        <motion.div
          style={{
            opacity: video1Opacity,
            scale: video1Scale,
          }}
          className="absolute inset-0 z-10 w-full h-full"
        >
          <video
            src="/Videos/couple.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale opacity-90 contrast-[1.05]"
          />
        </motion.div>

        {/* --- VIDEO 2: Right Floating Editorial Frame --- */}
        <motion.div
          style={{
            opacity: video2Opacity,
            scale: video2Scale,
            y: video2Y,
          }}
          className="absolute z-20 
                     bottom-6 right-4 w-[92%] h-[60vh] 
                     md:bottom-auto md:right-10 md:w-[42vw] md:h-[80vh] 
                     rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900"
        >
          <video
            src="/Videos/couple2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
         
        </motion.div>

        {/* --- VIDEO 3: Main Spotlight Frame --- */}
        <motion.div
          style={{
            opacity: video3Opacity,
            scale: video3Scale,
            y: video3Y,
          }}
          className="absolute z-30 
                     w-[90%] h-[65vh] 
                     md:w-[75vw] md:h-[82vh] 
                     rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-neutral-900"
        >
          <video
            src="/Videos/couple3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* --- CINEMATIC AMBIENT GRADIENT OVERLAY --- */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/80 z-40 pointer-events-none" />

      </div>
    </section>
  );
}