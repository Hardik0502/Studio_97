import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ReviewsSection from './Effect';

const words = [
  "ANTI-CLICHÉ",
  "WEDDING",
  "PHOTOGRAPHY",
  "AND FILM",
];



const Home = () => {

  
const container = useRef();
const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end end"],
});

const bg = useTransform(
  scrollYProgress,
  [0, 1],
  ["#EBEBEB", "#111111"]
);

const y = useTransform(
  scrollYProgress,
  [0, 1],
  ["100%", "0%"]
);

const textColor = useTransform(
  scrollYProgress,
  [0, 1],
  ["#111111", "#FFFFFF"]
);




  return (
    <>
      <div className="section1 p-2 bg-[#EBEBEB] ">

        <section className=' relative h-screen rounded-3xl bg-black/40 w-full overflow-hidden ' >

          <video
            autoPlay
            loop
            muted
            playsInline
            className=' absolute h-full w-full left-0 top-0 object-cover '
          >
            <source src='https://res.cloudinary.com/ddhh0a3an/video/upload/v1782034451/videoplayback_1_ngvcby.mp4' />
          </video>

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="sentences flex  ">
            <div className='h-svh relative z-10 px-10 pb-6 flex flex-col justify-end'>

              {/* Heading */}
              <div className='flex items-end '>
                <h1 className='text-white font-bold font-[t7] text-[200px]'>
                  Make
                </h1>

                <h1 className='text-white font-bold font-[t7] text-[90px]'>
                  Your
                </h1>

                <h1 className='text-white font-bold font-[t7] text-[50px]'>
                  Memories
                </h1>
              </div>

              {/* Text below heading */}
              <div className="flex gap-4 -mt-17 ml-3">

                <div className="w-0.5 bg-white/60"></div>

                <div className="text-white/80 font-[t4] ">
                  <p>Wedding Photography.</p>
                  <p>Pre-Wedding Stories.</p>
                  <p>Cinematic Memories.</p>
                </div>

              </div>

            </div>

            {/* <div className="card h-svh absolute z-10 pb-5 right-5 flex items-end ">
              <Carousel
                baseWidth={270}
                autoplay
                autoplayDelay={2000}
                pauseOnHover
                loop
                round={false}
              />

            </div> */}

          </div>

        </section>

      </div>


      <div className="section2">
        <section className="min-h-screen w-full bg-[#EBEBEB] py-20 px-6 md:px-12 lg:px-15">

          {/* Top Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">

      {/* Left Side */}
      <div className="max-w-190">

        <h1 className="text-[32px] md:text-[26px] leading-[1.1] font-[t8] tracking-[2px] text-black">
          More then one hundred projects
          <br />
          delivered. A selection of the work
        </h1>

        <h2 className="text-[42px] md:text-[25px] leading-[0.95] font-[t8]  tracking-[2px] text-[#474343ad] opacity-30 ">
          we are most proud of, across
          <br />
          strategy, design, and technology.
        </h2>

      </div>

      {/* Right Side */}
      <div className="max-w-82.5 pt-2">

        <p className="text-[#8F8F8F] text-[12px] leading-[1.3] font-normal">
          A curated collection of projects across brand
          strategy, visual identity, web design,
          development, and visual content. Each project
          here represents a specific brief, a specific
          challenge, and a specific outcome
        </p>

      </div>

    </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 mt-30 lg:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="group flex h-125 overflow-hidden rounded-[10px] cursor-pointer">
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rxSZmvz/0/NGmt2m6g6p8B7kBHh3cDLLz8rjVHbdVsK9kKQGbHD/L/_DSC9773-L.jpg"
                alt=""
                className=" h-full w-[70%]  object-cover transition duration-700 group-hover:scale-101"
              />
              <div className="hidden md:flex flex-col items-center justify-center px-4">
              {"HALDI".split("").map((letter, index) => (
                <span
                  key={index}
                  className="text-black/70 font-[t1] text-[90px] lg:text-[80px] leading-[1.2]"
                >
                  {letter}
                </span>
              ))}
            </div>

            
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-[10px] cursor-pointer ">
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/LLDRqbvb8DHjTxsHtdVvg42jpKkxnVhTqDhVhgrZ8/XL/JAYU-148-XL.jpg"
                alt=""
                className=" h-full object-cover transition duration-700 group-hover:scale-101"
              />
            </div>

            {/* Card 3 */}
            <div className="group overflow-hidden rounded-[10px] cursor-pointer">
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-qFj8cL2/0/NTs64V4VZhJps4QkhHrvvqkcvKN8t8pVcrNT7nRKc/XL/JAYU-163-XL.jpg"
                alt=""
                className=" object-cover transition duration-700 group-hover:scale-101"
              />
            </div>

            {/* Card 4 */}
            <div className="group overflow-hidden rounded-[10px] cursor-pointer ">
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rq77qtZ/0/MkjWqPdbs8bbW6m2qH2htN9RTdfzphNCD8mxQNMHM/XL/DSC09142-XL.jpg"
                alt=""
                className=" object-cover transition duration-700 opacity-80 group-hover:scale-101"
              />
            </div>

          </div>

        </section>
      </div>




      <div className="section4" >

        <ReviewsSection  />

      </div>



      <div className="section5">

          <section
            ref={sectionRef}
            className="relative h-[300vh]"
          >

            <motion.div
              style={{
                backgroundColor: bg,
              }}
              className="sticky top-0 h-screen overflow-hidden"
            >

         {/* Cover Panel */}

            <motion.div
              style={{ y }}
              className="absolute inset-0 bg-black"
            />

          {/* Text */}

              <motion.div
                style={{ color: textColor }}
                className="relative z-10 h-full flex items-center justify-center"
              >
                <h1 className="text-[140px] font-bold uppercase">
                  Studio 97
                </h1>
              </motion.div>

            </motion.div>

          </section>

      </div>

    </>
  )
}

export default Home
