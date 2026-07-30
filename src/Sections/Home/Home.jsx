import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ReviewsSection from './Effect';
import FrameSequence from './../../Components/FramesSequence/FrameSequence';
import StoryText from './Story';
import TextEffect from './TextEffect';
import BlogReference from './BlogReference';

const words = [
  "ANTI-CLICHÉ",
  "WEDDING",
  "PHOTOGRAPHY",
  "AND FILM",
];

// Animation Variant for the "Raining from Sky" Effect
const skyCardVariants = {
  hidden: { 
    opacity: 0, 
    y: -120, // Starts high up in the "sky"
    scale: 0.95 
  },
  visible: (i) => ({
    opacity: 1,
    y: 0, // Drops down smoothly into native grid layout
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.2, // 0.2s progressive stagger delay between cards
      ease: [0.25, 1, 0.5, 1], // Custom smooth cubic-bezier easing
    },
  }),
};

const Home = () => {
  const sectionRef = useRef(null);

  // 1. RAW SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // 2. SPRING PHYSICS SMOOTHER
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001,
  });

  const bg = useTransform(
    smoothProgress,
    [0, 0.5],
    ["#EBEBEB", "#111111"]
  );

  const y = useTransform(
    smoothProgress,
    [0, 1],
    ["50%", "0%"]
  );

  const textColor = useTransform(
    smoothProgress,
    [0, 1],
    ["#111111", "#111111"]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 1.35],
    [1.7, 0.5]
  );

  return (
    <>
      {/* SECTION 1: HERO VIDEO */}
      <div className="section1 p-2 sm:p-2 bg-[#EBEBEB]">
        <section className="relative h-[50vh] min-h-70 md:h-svh md:min-h-150 rounded-2xl sm:rounded-3xl bg-black/40 w-full overflow-hidden">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute h-full w-full left-0 top-0 object-cover"
          >
            <source
              src="https://res.cloudinary.com/ddhh0a3an/video/upload/v1782034451/videoplayback_1_ngvcby.mp4"
              media="(max-width: 767px)"
            />
            <source
              src="https://res.cloudinary.com/ddhh0a3an/video/upload/v1782034451/videoplayback_1_ngvcby.mp4"
              media="(min-width: 768px)"
            />
          </video>

          <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>

          <div className="sentences flex h-full">
            <div className="h-full relative z-10 px-4 sm:px-8 lg:px-10 pb-4 md:pb-8 flex flex-col justify-end w-full">
              <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-4 lg:gap-x-6 leading-[0.9] md:leading-none">
                <h1 className="text-white font-bold font-[t7] text-[36px] sm:text-[80px] md:text-[130px] lg:text-[160px] xl:text-[190px] tracking-tight">
                  Make
                </h1>

                <h1 className="text-white font-bold font-[t7] text-[22px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[85px]">
                  Your
                </h1>

                <h1 className="text-white font-bold font-[t7] text-[15px] sm:text-[25px] md:text-[35px] lg:text-[42px] xl:text-[48px]">
                  Memories
                </h1>
              </div>

              <div className="flex gap-2.5 sm:gap-4 mt-2 sm:mt-1 md:mt-2 lg:-mt-4 ml-1 sm:ml-3">
                <div className="w-0.5 bg-white/60 self-stretch"></div>

                <div className="text-white/80 font-[t4] text-[10px] sm:text-xs md:text-base leading-snug">
                  <p>Wedding Photography.</p>
                  <p>Pre-Wedding Stories.</p>
                  <p>Cinematic Memories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 2: PROJECTS GRID WITH RAINING IMAGE EFFECT */}
      <div className="section2">
        <section className="min-h-screen w-full bg-[#EBEBEB] py-20 px-6 md:px-12 lg:px-15">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-0">
            <div className="max-w-full lg:max-w-190">
              <h1 className="text-[26px] sm:text-[30px] md:text-[32px] leading-[1.1] font-[t8] tracking-[2px] text-black">
                More then one hundred projects
                <br className="hidden sm:block" />{" "}
                delivered. A selection of the work.
              </h1>

              <h2 className="text-[20px] sm:text-[23px] md:text-[25px] leading-[1.1] font-[t8] tracking-[2px] text-[#474343ad] opacity-40 ">
                we are most proud of, across
                <br className="hidden sm:block" />{" "}
                strategy, design, and technology.
              </h2>
            </div>

            <div className="max-w-full lg:max-w-82.5 pt-0 lg:pt-2">
              <p className="text-[#8F8F8F] text-[12px] sm:text-[13px] leading-[1.4] font-normal max-w-md lg:max-w-none">
                A curated collection of projects across brand strategy, visual
                identity, web design, development, and visual content. Each
                project here represents a specific brief, a specific challenge,
                and a specific outcome.
              </p>
            </div>
          </div>

          {/* Grid Container with dynamic raining animations */}
          <div className="grid grid-cols-1 mt-12 sm:mt-20 lg:mt-30 lg:grid-cols-2 gap-5 px-4 sm:px-6 lg:px-0">
            
            {/* Card 1 */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={skyCardVariants}
              className="group flex flex-col md:flex-row h-auto md:h-125 overflow-hidden rounded-[10px] cursor-pointer"
            >
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rxSZmvz/0/NGmt2m6g6p8B7kBHh3cDLLz8rjVHbdVsK9kKQGbHD/L/_DSC9773-L.jpg"
                alt=""
                className="h-80 sm:h-105 md:h-full w-full md:w-[70%] object-cover transition duration-700 group-hover:scale-101"
              />
              <div className="hidden md:flex flex-col items-center justify-center px-4 w-full md:w-[30%]">
                {"HALDI".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="text-black/70 font-[t1] text-[40px] sm:text-[60px] lg:text-[80px] leading-[1.2]"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={skyCardVariants}
              className="group overflow-hidden rounded-[10px] cursor-pointer h-80 sm:h-105 md:h-125"
            >
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/LLDRqbvb8DHjTxsHtdVvg42jpKkxnVhTqDhVhgrZ8/XL/JAYU-148-XL.jpg"
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-101"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={skyCardVariants}
              className="hidden md:block group overflow-hidden rounded-[10px] cursor-pointer h-80 sm:h-105 md:h-125"
            >
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-qFj8cL2/0/NTs64V4VZhJps4QkhHrvvqkcvKN8t8pVcrNT7nRKc/XL/JAYU-163-XL.jpg"
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-101"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={skyCardVariants}
              className="hidden md:block group overflow-hidden rounded-[10px] cursor-pointer h-80 sm:h-105 md:h-125"
            >
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rq77qtZ/0/MkjWqPdbs8bbW6m2qH2htN9RTdfzphNCD8mxQNMHM/XL/DSC09142-XL.jpg"
                alt=""
                className="w-full h-full object-cover transition duration-700 opacity-80 group-hover:scale-101"
              />
            </motion.div>

          </div>
        </section>
      </div>

      {/* SECTION 4: REVIEWS */}
      <div className="section4">
        <ReviewsSection />
      </div>

      {/* SECTION 5: SMOOTH SCROLL TRACKER */}
      <div className="section5">
        <section ref={sectionRef} className="relative h-[750vh]">
          <motion.div
            style={{
              backgroundColor: bg,
            }}
            className="sticky top-0 h-screen overflow-hidden transform-gpu will-change-transform"
          >
            <motion.div
              style={{ color: textColor, scale }}
              className="relative -z-10 md:h-[5vh] h-[20vh] sm:h-full flex mt-15 items-start justify-center transform-gpu will-change-transform"
            >
              <h1 className="md:text-[8vh] text-[5vh] sm:text-[10vh] font-bold uppercase">
                Studio 97
              </h1>
            </motion.div>

            <motion.div
              style={{ y }}
              className="absolute inset-0 bg-black overflow-hidden transform-gpu will-change-transform"
            >
              <FrameSequence />
              <StoryText target={sectionRef} />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* SECTION 7: BLOG REFERENCE */}
      <div className="section7 bg-black">
        <BlogReference />
      </div>

      {/* SECTION 6: TEXT & VIDEO SHOWCASE */}
      <div className="section6">
        <TextEffect />
      </div>
    </>
  );
};

export default Home;