import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FinalSection = () => {
  // Container refs for section-specific parallax tracking
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  // --- Scroll Progress Hooks ---
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: portfolioProgress } = useScroll({
    target: portfolioRef,
    offset: ['start end', 'end start'],
  });

  // --- Parallax Transformations ---
  const servicesTitleX = useTransform(servicesProgress, [0, 1], ['-10%', '5%']);
  const serviceImg1X = useTransform(servicesProgress, [0, 1], ['10%', '-2%']);
  const serviceImg2X = useTransform(servicesProgress, [0, 1], ['-8%', '3%']);
  const serviceImg3X = useTransform(servicesProgress, [0, 1], ['12%', '-5%']);

  const aboutTitleX = useTransform(aboutProgress, [0, 1], ['8%', '-10%']);
  const aboutWatermarkY = useTransform(aboutProgress, [0, 1], ['-15%', '15%']);
  const aboutImgLeftY = useTransform(aboutProgress, [0, 1], ['8%', '-8%']);
  const aboutImgRightY = useTransform(aboutProgress, [0, 1], ['-8%', '8%']);

  const portfolioTitleX = useTransform(portfolioProgress, [0, 1], ['-8%', '5%']);
  const portfolioGrid1X = useTransform(portfolioProgress, [0, 1], ['8%', '-3%']);
  const portfolioGrid2X = useTransform(portfolioProgress, [0, 1], ['-8%', '3%']);

  return (
    <div className="bg-[#FAF9F5] text-[#1A1A1A] font-sans selection:bg-amber-200 overflow-x-hidden w-full">

      {/* ========================================================= */}
      {/* 1. HERO / LAPTOP IMAGE SECTION (HALF SCREEN HEIGHT)       */}
      {/* ========================================================= */}
      <div className="relative w-full min-h-[50vh]">
        
        {/* FIXED BACKGROUND IMAGE (Occupies 50vh height) */}
        <div 
          className="sticky top-0 left-0 w-full h-[50vh] min-h-87.5 md:min-h-100 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630487/2_uoncl6.webp')`,
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Subtle Overlay to make text card pop */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* SCROLLING CREAM CARD CONTENT (Positioned relative to 50vh hero) */}
        <div className="relative z-10 mt-[-50vh] min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-16 pointer-events-none">
          
          <div className="pointer-events-auto w-full max-w-3xl bg-[#FAF8F3] text-[#1A1817] p-6 sm:p-12 md:p-16 rounded-none shadow-2xl border border-white/60 text-center my-auto transition-all duration-300">
            
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-zinc-500 font-medium mb-3 sm:mb-6">
              LUXURY EDITORIAL &amp; BRAND DESIGN
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.2] md:leading-[1.15] text-[#1C1A19] tracking-tight">
              Let’s Make Your <span className="italic font-serif font-light text-[#3A3430]">Dream Clients</span> Become <span className="italic font-serif font-light text-[#3A3430]">Obsessed</span> With You
            </h1>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-zinc-600 font-light leading-relaxed max-w-xl mx-auto">
              If you are ready for luxury branding, strategic design, and a custom website that finally reflects the caliber of your work; let’s create something extraordinary together.
            </p>

            <div className="mt-6 sm:mt-10">
              <a
                href="#contact"
                className="inline-block bg-[#2E2824] hover:bg-[#12100E] text-[#FAF8F3] text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] font-medium uppercase px-6 sm:px-10 py-3.5 sm:py-4 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                WORK WITH US
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. BOTTOM COVERING SECTION (SLIDES OVER HERO SECTION)     */}
      {/* ========================================================= */}
      <section className="relative z-20 bg-[#FAF9F5] shadow-[0_-20px_50px_rgba(0,0,0,0.12)]">
        
        {/* Sub-Header bar */}
        <div className="w-full bg-[#EFECE6] border-y border-zinc-300 py-4 sm:py-6 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-xs tracking-[0.2em] uppercase text-zinc-700 gap-3 text-center md:text-left">
          <span className="font-serif font-bold tracking-widest text-xs sm:text-sm text-zinc-900">STUDIO 97</span>
          <span className="hidden md:inline text-zinc-500 max-w-md lg:max-w-none">WEBSITES &amp; BRANDS DESIGNED WITH PASSION, INTENTION &amp; STRATEGY</span>
          <span className="font-medium flex items-center gap-1">EXPLORE SERVICES <span className="text-sm">&darr;</span></span>
        </div>

        {/* SERVICES SECTION CONTENT */}
        <div ref={servicesRef} id="services" className="w-full min-h-screen py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 flex flex-col justify-between overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-300 pb-4 md:pb-8 mb-10 md:mb-16">
            <div className="w-full md:w-auto">
              <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-400 uppercase mb-2">
                CRAFTING TIMELESS VISUAL STORIES
              </p>
              <motion.h2
                style={{ x: servicesTitleX }}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-[0.03em] uppercase text-zinc-900 whitespace-nowrap leading-none"
              >
                OUR SERVICES
              </motion.h2>
            </div>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-400 mt-4 md:mt-0 self-end md:self-auto">STUDIO 97</span>
          </div>

          {/* Service 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mb-12 sm:mb-20 md:mb-24">
            <div className="md:col-span-5 space-y-2 sm:space-y-4 md:pr-8">
              <span className="text-3xl sm:text-4xl md:text-5xl font-[t4] text-zinc-300 block">01</span>
              <h3 className="text-base sm:text-lg md:text-xl tracking-[0.2em] font-bold uppercase text-zinc-800">
                EDITORIAL &amp; FASHION
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                High-concept visual storytelling designed for luxury publications, designer lookbooks, and fashion houses. We bring dynamic lighting and meticulous art direction to every frame.
              </p>
            </div>
            <motion.div style={{ x: serviceImg1X }} className="md:col-span-7 aspect-4/3 sm:aspect-16/10 overflow-hidden bg-zinc-200 shadow-xl relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630487/3_g7arxd.webp"
                alt="Editorial Photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Service 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mb-12 sm:mb-20 md:mb-24">
            <motion.div style={{ x: serviceImg2X }} className="md:col-span-7 order-2 md:order-1 aspect-4/3 sm:aspect-16/10 overflow-hidden bg-zinc-200 shadow-xl relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791637239/k_xancg3.jpg"
                alt="Commercial Campaigns"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="md:col-span-5 order-1 md:order-2 space-y-2 sm:space-y-4 md:pl-8">
              <span className="text-3xl sm:text-4xl md:text-5xl font-[t4] text-zinc-300 block">02</span>
              <h3 className="text-base sm:text-lg md:text-xl tracking-[0.2em] font-bold uppercase text-zinc-800">
                COMMERCIAL CAMPAIGNS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                Tailored visual branding for world-class products. From pre-production mood boards to end-to-end post-processing, we craft cinematic imagery that boosts brand presence.
              </p>
            </div>
          </div>

          {/* Service 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-5 space-y-2 sm:space-y-4 md:pr-8">
              <span className="text-3xl sm:text-4xl md:text-5xl font-[t4] text-zinc-300 block">03</span>
              <h3 className="text-base sm:text-lg md:text-xl tracking-[0.2em] font-bold uppercase text-zinc-800">
                PORTRAITURE &amp; FINE ART
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                Intimate, expressive studio portraits designed to capture raw character. We combine classic studio lighting techniques with modern digital finishing.
              </p>
            </div>
            <motion.div style={{ x: serviceImg3X }} className="md:col-span-7 aspect-4/3 sm:aspect-16/10 overflow-hidden bg-zinc-200 shadow-xl relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630487/1_r9cevk.webp"
                alt="Portraiture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE STUDIO SECTION                                     */}
      {/* ========================================================= */}
      <section ref={aboutRef} id="about" className="relative z-20 w-full min-h-screen py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 overflow-hidden bg-[#FAF9F5]">
        
        {/* Background Watermark Text */}
        <motion.div
          style={{ y: aboutWatermarkY }}
          className="absolute left-[-15vw] sm:left-[-8vw] top-1/4 -rotate-90 select-none opacity-[0.03] text-[35vw] sm:text-[25vw] md:text-[20vw] font-bold tracking-widest pointer-events-none font-serif leading-none"
        >
          
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-300 pb-4 md:pb-8 mb-10 md:mb-16 relative z-10">
          <div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-400 uppercase mb-2">
              BEHIND THE LENS
            </p>
            <motion.h2
              style={{ x: aboutTitleX }}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-[0.03em] uppercase text-zinc-900 whitespace-nowrap leading-none"
            >
              THE STUDIO
            </motion.h2>
          </div>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-400 mt-4 md:mt-0 self-end md:self-auto">STUDIO 97</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          
          {/* Images Grid */}
          <div className="md:col-span-6 grid grid-cols-12 gap-3 sm:gap-6">
            <motion.div style={{ y: aboutImgLeftY }} className="col-span-7 aspect-3/4 overflow-hidden bg-zinc-200 shadow-xl relative">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791640563/download_gerlsn.jpg"
                alt="Studio Set"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div style={{ y: aboutImgRightY }} className="col-span-5 aspect-3/5 overflow-hidden bg-zinc-200 shadow-xl mt-6 sm:mt-12 relative">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791640563/%D0%A4%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%96%D1%8F_ozwjc4.jpg"
                alt="Camera Gear"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Stats & Description */}
          <div className="md:col-span-6 space-y-6 sm:space-y-8 md:space-y-12 md:pl-8 mt-4 md:mt-0">
            <div className="border-b border-zinc-300 pb-4 sm:pb-6">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-[t4] font-light text-zinc-900">120+</h3>
              <h4 className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-800 mt-1 sm:mt-2">
                COVER STORIES &amp; EDITORIALS
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 sm:mt-2 leading-relaxed font-light">
                Published across international fashion and lifestyle magazines. We manage every detail from lighting setups to color grading.
              </p>
            </div>

            <div className="border-b border-zinc-300 pb-4 sm:pb-6">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-[t4] font-light text-zinc-900">15+</h3>
              <h4 className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-800 mt-1 sm:mt-2">
                CREATIVE SPECIALISTS
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 sm:mt-2 leading-relaxed font-light">
                Our in-house team includes art directors, lighting technicians, retouchers, and set designers ready to execute grand creative concepts.
              </p>
            </div>

            <div className="pb-2">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-[t4] font-light text-zinc-900">500+</h3>
              <h4 className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-800 mt-1 sm:mt-2">
                DELIVERED CAMPAIGNS
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 sm:mt-2 leading-relaxed font-light">
                Trusted by luxury labels, independent designers, and global advertising agencies for high-impact visual assets.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ARCHIVE / PORTFOLIO SECTION                            */}
      {/* ========================================================= */}
      <section ref={portfolioRef} id="portfolio" className="relative z-20 w-full min-h-screen py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 bg-[#FAF9F5] overflow-hidden">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-300 pb-4 md:pb-8 mb-10 md:mb-16">
          <motion.h2
            style={{ x: portfolioTitleX }}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-[0.03em] uppercase text-zinc-900 whitespace-nowrap leading-none"
          >
            SELECTED ARCHIVE
          </motion.h2>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-bold uppercase text-zinc-400 mt-4 md:mt-0 self-end md:self-auto">STUDIO 97</span>
        </div>

        {/* Project 01 */}
        <motion.div style={{ x: portfolioGrid1X }} className="mb-14 sm:mb-20 md:mb-28">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-zinc-300 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-0">
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-zinc-300 mr-3">01</span>
              <h3 className="text-base sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase text-zinc-800">
                SOLITUDE // HIGH FASHION
              </h3>
            </div>
            <div className="text-left sm:text-right text-[9px] sm:text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase">
              <span className="mr-4 sm:mr-6">CLIENT: <strong className="text-zinc-900">EDITORIAL</strong></span>
              <span>YEAR: <strong className="text-zinc-900">2026</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-12 md:grid-cols-3 gap-3 md:gap-4 items-center">
            <div className="col-span-12 sm:col-span-6 md:col-span-1 aspect-4/3 sm:aspect-4/5 md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_1_tdr3hn.jpg"
                alt="Editorial Shot 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-7 sm:col-span-6 md:col-span-1 aspect-square sm:aspect-4/5 md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md sm:mt-0 z-10 relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/Taupe_Brown_Co-ord_Set_zcxneg.jpg"
                alt="Editorial Shot 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-5 sm:col-span-12 md:col-span-1 aspect-3/4 sm:aspect-video md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/%D0%A4%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%96%D1%8F_grutni.jpg"
                alt="Editorial Shot 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Project 02 */}
        <motion.div style={{ x: portfolioGrid2X }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-zinc-300 pb-3 sm:pb-4 mb-4 sm:mb-6 gap-2 sm:gap-0">
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif text-zinc-300 mr-3">02</span>
              <h3 className="text-base sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase text-zinc-800">
                MONOCHROME // ESSENCE
              </h3>
            </div>
            <div className="text-left sm:text-right text-[9px] sm:text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase">
              <span className="mr-4 sm:mr-6">CATEGORY: <strong className="text-zinc-900">FINE ART</strong></span>
              <span>LOCATION: <strong className="text-zinc-900">STUDIO 97</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-12 md:grid-cols-3 gap-3 md:gap-4 items-center">
            <div className="col-span-6 md:col-span-1 aspect-3/4 md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_2_edyccv.jpg"
                alt="Portrait 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-6 md:col-span-1 aspect-3/4 md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md relative group md:translate-y-4">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_3_zkxjvq.jpg"
                alt="Portrait 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-12 md:col-span-1 aspect-video md:aspect-4/3 bg-zinc-200 overflow-hidden shadow-md relative group">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_4_zc1lfo.jpg"
                alt="Portrait 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </section>

    </div>
  );
};

export default FinalSection;