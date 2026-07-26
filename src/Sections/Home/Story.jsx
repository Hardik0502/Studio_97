import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryText({ target }) {

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });

  // opacity for each text block

  const opacity1 = useTransform(
    scrollYProgress,
    [0.00,0.10,0.18,0.25],
    [0,1,1,0]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.23,0.32,0.42,0.50],
    [0,1,1,0]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.48,0.58,0.70,0.78],
    [0,1,1,0]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0.76,0.86,1],
    [0,1,1]
  );

  const y1 = useTransform(
    scrollYProgress,
    [0,0.10,0.18,0.25],
    [80,0,0,-80]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.23,0.32,0.42,0.50],
    [80,0,0,-80]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0.48,0.58,0.70,0.78],
    [80,0,0,-80]
  );

  const y4 = useTransform(
    scrollYProgress,
    [0.76,0.86,1],
    [80,0,0]
  );

  return (

    <div className="absolute inset-0 pointer-events-none z-30">

      {/* TEXT 1 */}

      <motion.div
        style={{
          opacity:opacity1,
          y:y1
        }}
        className="absolute left-20 top-10"
      >

        <h1 className="text-white/70 font-[t7] text-[60px] font-bold leading-none">
          We Believe in
        </h1>

        <h1 className="text-white font-[t7] text-[90px] font-bold leading-none">
          Perfection.
        </h1>

      </motion.div>


      {/* TEXT 2 */}

      <motion.div
        style={{
          opacity:opacity2,
          y:y2
        }}
        className="absolute right-8 bottom-50"
      >

        <h1 className="text-white/80 font-[t7] text-[90px] font-bold leading-none">
          WE FILM
        </h1>

        <h1 className="text-white font-[t7] text-[90px] font-bold leading-none">
          REAL
        </h1>

        <h1 className="text-white font-[t7] text-[90px] font-bold leading-none">
          EMOTIONS.
        </h1>

      </motion.div>



      {/* TEXT 3 */}

      <motion.div
        style={{
          opacity:opacity3,
          y:y3
        }}
        className="absolute left-20 top-28"
      >

        <h1 className="text-white/80 font-[t7] text-[50px] font-bold leading-none">
          EVERY FRAME
        </h1>

        <h1 className="text-white/80 font-[t7] text-[60px] font-bold leading-none">
          HAS
        </h1>

        <h1 className="text-white font-[t7] text-[70px] font-bold leading-none">
          A UNIQUE STORY.
        </h1>

      </motion.div>



      {/* TEXT 4 */}

      <motion.div
        style={{
          opacity:opacity4,
          y:y4
        }}
        className="absolute left-10 bottom-20"
      >

        <h1 className="text-white/80 font-[t7] text-[60px] font-bold leading-none">
          STUDIO 97
        </h1>

      </motion.div>

    </div>

  );
}