import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const words = [
  "ANTI-CLICHÉ",
  "WEDDING",
  "PHOTOGRAPHY",
  "AND FILM",
];



const Home = () => {


const container = useRef();


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


      <div className="section3">
              
      <section className="w-full h-full bg-[#EBEBEB] px-8 md:px-16 lg:px-12 py-12">

  <div className="grid lg:grid-cols-2  border-2 ">

    {/* LEFT SIDE */}
    <div>

      {/* Heading */}
      <div className="italic font-serif  leading-[0.92] tracking-[-4px]">

        <h1 className="text-[60px] font-[t6] rotate-[2deg] md:text-[85px] lg:text-[120px]">
          STUDIO 97
        </h1>

        <h1 className="text-[60px] bg-black/25 rotate-[1deg] font-[t1] md:text-[85px] lg:text-[45px]">
          WEDDING
        </h1>

        <h1 className="text-[60px] bg-black/15 -rotate-[1deg] font-[t1] md:text-[85px] lg:text-[45px]">
          PHOTOGRAPHY
        </h1>

        <h1 className="text-[60px] bg-black/15 -rotate-[3deg] font-[t1] md:text-[85px] lg:text-[45px]">
          AND FILM
        </h1>

      </div>

      {/* Bottom Left */}
      <div className="flex items-center justify-between gap-28 -mt-10 ">

        <p className="text-[38px] ml-4 leading-[1.1] font-[t4]">
          Photographer
          <br />
          of people
          <br />
          in love.
        </p>

        <img
          src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1783000195/DSC09787-X2-modified_cmjn46.jpg"
          alt=""
          className="w-[320px]  rotate-[12deg] lg:w-[250px] object-cover"
        />

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex  justify-end">

      <div className="max-w-[360px] mt-22">

        <h2 className="italic font-[t1]  text-[48px] leading-none">
          We're truly happy you're here.
        </h2>

        <p className="mt-8 text-[15px] font-[t7] mr-2  leading-7 tracking-[2px] text-neutral-900">
          Your goal is to throw the most epic party for your
          friends and family? Our goal is to capture these
          special moments for you. For us this is a big thing,
          as we always put a lot of effort in our work. For us
          this is not just a client / vendor thing. We need to
          connect and team up to get the best results
          possible.
        </p>

      </div>

    </div>

  </div>

</section>

      </div>

    </>
  )
}

export default Home
