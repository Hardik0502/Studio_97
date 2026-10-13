import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ReviewsSection from './Effect';
import FrameSequence from './../../Components/FramesSequence/FrameSequence';
import StoryText from './Story';
import TextEffect from './TextEffect';
import BlogReference from './BlogReference';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube,
  FaMapMarkerAlt
} from 'react-icons/fa';
import FinalSection from './FinalSection';
import { Helmet } from 'react-helmet-async';





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
    y: -120, 
    scale: 0.95 
  },
  visible: (i) => ({
    opacity: 1,
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.2, 
      ease: [0.25, 1, 0.5, 1], 
    },
  }),
};

// -------------------------------------------------------------
// CAROUSEL IMAGES (Desktop & Mobile Arrays)
// -------------------------------------------------------------
const desktopCarouselImages = [
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HSSsh2B/0/MCf4Ct7xwz6sLSwfCfnHZqbMFPCb5k4dx7CHRpFjX/X3/_DSC8501-X3.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-t6gWKZH/0/LFSFCVLsFvfh47mcgTcMxj7Zxbc9QsGkJ37RGb6DL/X2/DSC00439-X2.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-6pVvBsP/0/KgGwCs5BWdT2LMt3XwGxLmX6FPRP3RJQMZ96Gqt7M/X2/untitled-381-X2.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-PvKSb89/0/LQsBjqvPcWLPtrVWDj7JNtJD6w8tMKbS7bjR5jzhL/X2/JAYU-111-X2.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-5cVkG9n/0/M95xZJv4mDg7RVQ6JhXKdKFBnpdkJXV7gB4BkbpvK/X2/untitled-284-X2.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-57GVkPJ/0/Mjt5CDQp4tm79JMwmD4NHQFrj5bdNh3tBhKqz2Svf/X2/DSC00460-X2.jpg",
];

// Add mobile-optimized (vertical portrait) image URLs here:
const mobileCarouselImages = [
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rk9n83d/0/KrH8wF8MQDGzdq5sTWw9LGTJ3SZWnq26x9x2sdv25/XL/DSC00091-XL.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-7T882x5/0/NG3M4JkqM6dDdWQWD2bjSNGGxsfZmgwSphJjPxTDX/XL/_DSC1480-XL.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rxSZmvz/0/MnWRJdmgSHd3bn5fhZQxcspNM9hkRDSgrwSjTZtCk/5K/_DSC9773-5K.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-SjxMW3Q/0/K7DwCMcD2vzsZW2KVbRMvZzHQZtVzxNxN6MPmLMJF/XL/DSC00468-XL.jpg",
  "https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-mx2Fwv6/0/NVd3dZ6MsT3HF3q45Tqfr2zKPxvQhw8g6smJrGWFX/XL/04-XL.jpg",
];

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

  // Detect mobile viewport (< 640px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Select current active image list dynamically based on screen width
  const activeCarouselImages = isMobile ? mobileCarouselImages : desktopCarouselImages;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset index if switching device sizes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [isMobile]);

  // Automatic fade transition every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeCarouselImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeCarouselImages]);

  return (
    <>
    <Helmet>
<title>Studio97 | Creative Studio & Experiences</title>

    <meta
      name="description"
      content="Discover Studio97, explore our packages, events, creative experiences, and latest updates."
    />

    <link
      rel="canonical"
      href="https://studio97.in/"
    />
  </Helmet>
  
      <div className="w-full font-serif antialiased bg-[#FAF9F6] text-[#1C1C1C]">
        
        {/* SECTION 1: HERO */}
        <div className="w-full font-serif bg-[#181716] text-white">
        
          <section className="sticky top-0 z-0 w-full h-screen min-h-150 flex flex-col justify-center items-center overflow-hidden bg-[#181716] text-white">
          
            {/* ------------------------------------------------------------- */}
            {/* AUTOMATIC CROSSFADE CAROUSEL (Black & White & Responsive)     */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {activeCarouselImages.map((imgUrl, index) => (
                <div
                  key={imgUrl}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Hero Slide ${index + 1}`}
                    className="w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
                  />
                </div>
              ))}
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/25 z-10" />
            </div>

            {/* ------------------------------------------------------------- */}
            {/* LEFT SIDEBAR: Social Media Icons (Insta, FB, YT, Maps)        */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-6 text-white/80">
              <div className="flex flex-col items-center gap-5 text-sm sm:text-base">
                <a 
                  href="#instagram" 
                  aria-label="Instagram" 
                  className="hover:text-white transition-opacity opacity-80 hover:opacity-100"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="#facebook" 
                  aria-label="Facebook" 
                  className="hover:text-white transition-opacity opacity-80 hover:opacity-100"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="#youtube" 
                  aria-label="YouTube" 
                  className="hover:text-white transition-opacity opacity-80 hover:opacity-100"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="#map" 
                  aria-label="Location Map" 
                  className="hover:text-white transition-opacity opacity-80 hover:opacity-100"
                >
                  <FaMapMarkerAlt />
                </a>
              </div>
              
              {/* Vertical Accent Line */}
              <div className="w-px h-20 sm:h-28 bg-white/40 mt-1" />
            </div>

            {/* ------------------------------------------------------------- */}
            {/* BOTTOM-LEFT CAPTION & CAROUSEL INDICATOR                      */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 z-20 max-w-70 sm:max-w-xs text-left">
              <p className="font-sans text-[10px] sm:text-[11px] leading-[1.4] tracking-[0.18em] font-light uppercase text-white/90 mb-4">
                WILD HEARTS & AUTHENTIC LOVE<br />
                PHOTOGRAPHER, LOOKING FOR LOVERS,<br />
                DREAMERS & FREE SOULS
              </p>

              {/* Minimalist Carousel Progress Indicators */}
              <div className="flex items-center gap-2">
                {activeCarouselImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-0.5 transition-all duration-500 ${
                      idx === currentImageIndex 
                        ? 'w-6 bg-white' 
                        : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

          </section>

          {/* OVERLAYING CONTENT SECTION */}
          <div className="relative z-10 w-full bg-[#FAF8F5] text-[#22201D] shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
            
            {/* Ticker / Banner Bar */}
            <div className="w-full bg-[#ECE7E1] py-5 border-b border-[#D6CFC7] overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-xs tracking-[0.25em] font-sans uppercase font-medium text-center px-4">
                <span>CINEMATIC NARRATIVES</span>
                <span className="text-[8px] opacity-60">•</span>
                <span>HIGH-END EVENT PHOTOGRAPHY</span>
                <span className="text-[8px] opacity-60">•</span>
                <span>CBESPOKE VISUAL ARCHIVES</span>
                <span className="text-[8px] opacity-60">•</span>
                <span>ARCHIVAL-GRADE PRESERVATION</span>
              </div>
            </div>

            {/* SECTION 2: SERVICES */}
            <section className="w-full bg-[#FAF9F6] py-20 px-6 sm:px-12 lg:px-20">
              <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Header Title */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-[0.15em] uppercase text-zinc-800">
                    <span className="italic font-normal lowercase pr-1">The</span>SERVICES
                  </h2>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl">
                  {/* Card 1 */}
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full aspect-3/4 overflow-hidden border border-zinc-200 mb-6">
                      <img
                        src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1782999599/samples/woman-on-a-football-field.jpg"
                        alt="Coaching"
                        className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xs tracking-[0.3em] font-sans font-medium uppercase text-zinc-800">
                      Heritage Cinema
                    </h3>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full aspect-3/4 overflow-hidden border border-zinc-200 mb-6">
                      <img
                        src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630486/9_h6bf5a.webp"
                        alt="Branding"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xs tracking-[0.3em] font-sans font-medium uppercase text-zinc-800">
                      Ambient Motion
                    </h3>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full aspect-3/4 overflow-hidden border border-zinc-200 mb-6">
                      <img
                        src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630486/8_irfdkd.webp"
                        alt="Social Media"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xs tracking-[0.3em] font-sans font-medium uppercase text-zinc-800">
                      Editorial Identity
                    </h3>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* BANNER: BOOKING NOTICE */}
        <div className="w-full bg-[#E5DDD0] py-4 px-4 text-center">
          <p className="text-xs sm:text-sm tracking-[0.25em] font-sans font-normal uppercase text-zinc-700">
            NOW BOOKING CLIENT WORK FOR APRIL 2025
          </p>
        </div>

        {/* SECTION 3: ABOUT THE FOUNDER */}
        <section className="w-full bg-[#FAF9F6] py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Text Box */}
            <div className="flex flex-col items-start order-2 lg:order-1">
              <h2 className="flex flex-col mb-8 text-left leading-none">
                <span className="font-serif italic text-4xl sm:text-5xl font-normal text-zinc-800">
                  About
                </span>
                <span className="font-serif uppercase text-3xl sm:text-4xl tracking-[0.2em] font-light text-zinc-800 -mt-1">
                  The FOUNDER
                </span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-600 font-sans font-light leading-relaxed mb-8 max-w-md">
                <p>
                  At the forefront of Studio97 is a Gen Z visionary redefining modern visual storytelling. Driven by an innate understanding of contemporary aesthetics, digital trends, and high-energy creative direction, he brings a fresh, unconventional perspective to event and commercial photography. Fusing cinematic flair with candid, authentic emotion, his approach breaks away from traditional, rigid poses to capture real, electric moments as they unfold.
                </p>
                <p>
                  With over five years of dedicated industry experience and a portfolio spanning thousands of satisfied clients, he has established Studio97 as a premier destination for those seeking a luxury visual identity. His proven track record reflects a rare balance of youthful creative innovation and technical mastery—consistently delivering editorial-grade imagery, high-speed ambient coverage, and timeless visual archives tailored to every event.
                </p>
              </div>

              <a
                href="/about"
                className="inline-block bg-[#E5DDD0] hover:bg-[#d8cebe] text-zinc-800 text-[11px] tracking-[0.25em] uppercase font-sans px-8 py-3.5 transition-colors duration-300"
              >
                READ MORE
              </a>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 w-full aspect-4/5 overflow-hidden border border-zinc-200">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1785582502/pexels-captian-jayu-819563-6532858_ur4hhv.jpg"
                alt="Founder"
                className="w-full h-full object-cover grayscale-25 "
              />
            </div>

          </div>
        </section>

        {/* SECTION 4: SOCIAL MEDIA & BRANDING */}
        <section className="w-full bg-[#1C1C1C] text-white py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full aspect-4/3 overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddhh0a3an/image/upload/v1791637239/k_xancg3.jpg"
                alt="Social Media and Branding"
                className="w-full h-full object-cover grayscale brightness-90"
              />
            </div>

            {/* Right Text Box */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="flex flex-col mb-8 leading-none">
                <span className="font-serif uppercase text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] font-light text-zinc-500">
                  CANDID
                </span>
                <span className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-400 -mt-2">
                  MOMENTS &
                </span>
                <span className="font-serif uppercase text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] font-light text-zinc-400 -mt-2">
                  ARCHIVES
                </span>
              </h2>

              <a
                href="/blogs"
                className="inline-block border border-zinc-500 rounded-full px-8 py-3 text-[11px] tracking-[0.25em] uppercase font-sans font-light text-zinc-200 hover:bg-white hover:text-black transition-all duration-300"
              >
                VIEW WORK
              </a>
            </div>

          </div>
        </section>

      </div>

      {/* SECTION 2: PROJECTS GRID WITH RAINING IMAGE EFFECT */}
      <div className="section2">
        <section className="min-h-screen w-full bg-[#EBEBEB] py-20 px-6 md:px-12 lg:px-15">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-0">
            <div className="max-w-full lg:max-w-190">
              <h1 className="text-[26px] sm:text-[30px] md:text-[22px] leading-[1.1] font-[t8] tracking-[2px] text-black">
                More then one hundred projects
                <br className="hidden sm:block" />{" "}
                delivered. A selection of the work.
              </h1>

              <h2 className="text-[20px] sm:text-[23px] md:text-[22px] leading-[1.1] font-[t8] tracking-[2px] text-[#474343ad] opacity-40 ">
                we are most proud of, across
                <br className="hidden sm:block" />{" "}
                strategy, design, and technology.
              </h2>
            </div>

            <div className="max-w-full lg:max-w-82.5 pt-0 lg:pt-2">
              <p className="text-[#8F8F8F] text-[12px] sm:text-[13px] leading-[1.4] font-normal max-w-md lg:max-w-none">
                A curated showcase of visual stories, candid celebrations, and cinematic archives. Each collection represents a unique moment in time, an authentic emotion, and an unrepeatable narrative captured with precision.
              </p>
            </div>
          </div>

          {/* SECTION 2: PORTFOLIO & JOURNAL SECTION */}
          <div className="section2 bg-[#EBEBEB] py-16 text-zinc-800">
            {/* Top Heading Block */}
            <div className="max-w-2xl mx-auto text-center px-4 mb-16 flex flex-col items-center">
              <div className="w-px h-12 bg-zinc-400 mb-8" />
              <h2 className="text-2xl md:text-3xl tracking-[0.25em] font-light uppercase text-zinc-800 mb-4">
                YOU'VE GOT THE LOVE
              </h2>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed max-w-xl">
                Love is the art of seeing someone clearly and holding onto every moment spent in their light. It is a continuous journey of shared laughter, quiet comfort, and deep connection—a story told not in words, but in the unforgettable frames created along the way.
              </p>
            </div>

            {/* 2-Column Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-7xl mx-auto px-0 md:px-4">
              {/* Card 1 */}
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={skyCardVariants}
                className="relative group h-112.5 md:h-137.5 overflow-hidden cursor-pointer"
              >
                <img
                  src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-rxSZmvz/0/NGmt2m6g6p8B7kBHh3cDLLz8rjVHbdVsK9kKQGbHD/L/_DSC9773-L.jpg"
                  alt="Portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-2xl md:text-3xl tracking-[0.2em] font-light uppercase mb-2">
                    PORTFOLIO
                  </h3>
                  <p className="text-xs tracking-[0.25em] font-light uppercase opacity-90 mb-4">
                    FEATURED COUPLE
                  </p>
                  <div className="w-10 h-px bg-white/80" />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={skyCardVariants}
                className="relative group h-112.5 md:h-137.5 overflow-hidden cursor-pointer"
              >
                <img
                  src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/LLDRqbvb8DHjTxsHtdVvg42jpKkxnVhTqDhVhgrZ8/XL/JAYU-148-XL.jpg"
                  alt="Portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-2xl md:text-3xl tracking-[0.2em] font-light uppercase mb-2">
                    PORTFOLIO
                  </h3>
                  <p className="text-xs tracking-[0.25em] font-light uppercase opacity-90 mb-4">
                    FEATURED COUPLE
                  </p>
                  <div className="w-10 h-px bg-white/80" />
                </div>
              </motion.div>
            </div>

            {/* Category Filter Navigation Bar */}
            <div className="py-8 my-4 border-y border-zinc-200/60 max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs tracking-[0.2em] font-medium text-zinc-600 uppercase">
                <span className="text-zinc-800 font-semibold">BROWSE THE FULL COLLECTION:</span>
                <a href="/blogs" className="hover:text-black transition-colors">WEDDINGS</a>
                <a href="/blogs" className="hover:text-black transition-colors">COUPLES</a>
                <a href="/blogs" className="hover:text-black transition-colors">LIFESTYLE</a>
              </div>
            </div>

            {/* Bottom Journal Feature Hero Block */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={skyCardVariants}
              className="relative w-full max-w-7xl mx-auto h-125 md:h-150 overflow-hidden px-0 md:px-4"
            >
              <img
                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-qFj8cL2/0/NTs64V4VZhJps4QkhHrvvqkcvKN8t8pVcrNT7nRKc/XL/JAYU-163-XL.jpg"
                alt="Journal feature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />

              {/* Floating White Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-xl w-full text-center shadow-lg border border-zinc-100 flex flex-col items-center">
                  <span className="text-[11px] tracking-[0.3em] font-medium uppercase text-zinc-500 mb-3">
                    JOURNAL
                  </span>
                  <h3 className="text-xl md:text-2xl tracking-[0.2em] font-light uppercase text-zinc-800 mb-4">
                    ONE MORE BLOG POST
                  </h3>
                  <div className="w-8 h-px bg-zinc-400 mb-6" />
                  <p className="text-xs text-zinc-500 leading-relaxed mb-8 max-w-md">
                    For every couple, love is a collection of quiet glances, unscripted laughter, and shared moments.
We capture the raw, electric connection between lovers, dreamers, and free spirits.
Your unique romance, preserved as a timeless, cinematic archive of frames to treasure forever.
                  </p>
                  <button className="bg-zinc-800 hover:bg-black text-white text-[11px] tracking-[0.25em] uppercase px-8 py-3 transition-colors duration-300">
                    VIEW
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>


                < FinalSection />

      {/* SECTION 4: REVIEWS */}
      <div className="section4">
        <ReviewsSection />
      </div>

      {/* SECTION 5: SMOOTH SCROLL TRACKER */}
      {/* <div className="section5">
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
      </div> */}

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