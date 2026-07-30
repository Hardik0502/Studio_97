import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryText({ target }) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });

  // --- Smooth Scroll Opacity & Y Offsets (No Blurs) ---
  const opacity1 = useTransform(scrollYProgress, [0.00, 0.08, 0.18, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.00, 0.08, 0.18, 0.25], [30, 0, 0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.33, 0.43, 0.50], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.33, 0.43, 0.50], [30, 0, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.75], [30, 0, 0, -30]);

  const opacity4 = useTransform(scrollYProgress, [0.75, 0.83, 1.0], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.83, 1.0], [30, 0, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 select-none overflow-hidden">

      {/* --- TEXT 1 --- */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute left-6 sm:left-12 lg:left-20 top-20 sm:top-24 lg:top-28 max-w-[90vw]"
      >
        <span className="block text-white/80 font-[t7] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight mb-1">
          We Believe in
        </span>
        <h1 className="text-white font-[t7] text-6xl sm:text-7xl md:text-8xl lg:text-[90px] font-black leading-none tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          Perfection.
        </h1>
      </motion.div>


      {/* --- TEXT 2 --- */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute right-6 sm:right-12 lg:right-16 bottom-24 sm:bottom-28 lg:bottom-32 text-right max-w-[90vw]"
      >
        <span className="block text-white/90 font-[t7] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-none tracking-tight">
          WE FILM
        </span>
        <span className="block text-white font-[t7] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold leading-none tracking-tight">
          REAL
        </span>
        <h1 className="text-white font-[t7] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-black leading-none tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          EMOTIONS.
        </h1>
      </motion.div>


      {/* --- TEXT 3 --- */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute left-6 sm:left-12 lg:left-20 top-24 sm:top-28 lg:top-32 max-w-[90vw]"
      >
        <span className="block text-white/90 font-[t7] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-none tracking-wider uppercase mb-1">
          EVERY FRAME
        </span>
        <span className="block text-white/90 font-[t7] text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold leading-none tracking-wider uppercase mb-1">
          HAS
        </span>
        <h1 className="text-white font-[t7] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black leading-none tracking-tight uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          A UNIQUE STORY.
        </h1>
      </motion.div>


      {/* --- TEXT 4 (STUDIO 97) --- */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute left-6 sm:left-12 lg:left-16 bottom-20 sm:bottom-24 lg:bottom-28 max-w-[90vw]"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-10 sm:w-12 h-0.5 bg-white/70" />
          <span className="text-white/80 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
            Storytelling Redefined
          </span>
        </div>
        <h1 className="text-white font-[t7] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-none tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          STUDIO 97
        </h1>
      </motion.div>

    </div>
  );
}