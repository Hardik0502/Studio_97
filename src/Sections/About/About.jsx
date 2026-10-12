import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  CONTENT & ASSETS                                                 */
/* ------------------------------------------------------------------ */
const PHONE_NUMBER = '7777988897';

const IMAGES = {
  heroDesktop: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785582502/pexels-captian-jayu-819563-6532858_ur4hhv.jpg',
  heroMobile: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1791547010/ChatGPT_Image_Oct_9_2026_05_26_32_PM_larcpn.png',

  cards: [
    'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785582516/pexels-captian-jayu-819563-6532860_h8izps.jpg',
    'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785581824/pexels-captian-jayu-819563-6532859_gitvw0.jpg',
    'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785584519/Stylish_Sunglasses_het_RelaxingVibes_Chilling_Fashion_CoolLook_studio97_anand_model_umj1jt.webp'
  ],
  thumbs: [
    { 
      src: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785581050/Jaan_%EF%B8%8F_captianjayu_captian_jayu_captian_jayu_official_studio97_photo_%C4%B1nstagood_picofthed-modified_lrsm8t.webp', 
      label: 'Personal Portraits',
      isColor: false
    },
    { 
      src: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785581050/Jaan_%EF%B8%8F_captianjayu_captian_jayu_captian_jayu_official_studio97_photo_%C4%B1nstagood_picofthed_xbdzdd.webp', 
      label: 'Baby & Kids',
      isColor: true
    },
    { 
      src: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1785581050/Jaan_%EF%B8%8F_captianjayu_captian_jayu_captian_jayu_official_studio97_photo_%C4%B1nstagood_picofthed-modified_lrsm8t.webp', 
      label: 'Birthday & Thematic',
      isColor: false
    },
  ],
};

const reviews = [
  {
    id: 1,
    quote: "Working with Jayesh Prajapati was the best decision we made for our wedding. The photos are more than we ever imagined — they truly tell our story.",
    client: "EMILY & JAMES"
  },
  {
    id: 2,
    quote: "Jayesh has an extraordinary eye for detail and natural light. Our portrait session felt so relaxed, and the final gallery left us speechless.",
    client: "SOPHIA & RYAN"
  },
  {
    id: 3,
    quote: "The elegance and mood captured in every frame is unmatched. Studio 97 delivered a timeless collection of memories we will treasure forever.",
    client: "PRIYA & ANAND"
  },
  {
    id: 4,
    quote: "The elegance and mood captured in every frame is unmatched. Studio 97 delivered a timeless collection of memories we will treasure forever.",
    client: "JIYA & PRINCE"
  },
  {
    id: 5,
    quote: "The elegance and mood captured in every frame is unmatched. Studio 97 delivered a timeless collection of memories we will treasure forever.",
    client: "RINKY & RAJ"
  },
];

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap');
html { scroll-behavior: auto; }
body { margin: 0; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
`;

const EASE_SPRING = { stiffness: 110, damping: 26, mass: 0.5 };

/* ------------------------------------------------------------------ */
/*  SMOOTH INERTIA SCROLL HOOK                                        */
/* ------------------------------------------------------------------ */
function useSmoothScroll({ damping = 9 } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduce || coarse) return undefined;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const clamp = (v) => Math.min(Math.max(v, 0), maxScroll());

    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let last = 0;

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      current += (target - current) * (1 - Math.exp(-damping * dt));
      if (Math.abs(target - current) < 0.08) {
        current = target;
        window.scrollTo(0, current);
        raf = 0;
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? window.innerHeight : 1;
      target = clamp(target + e.deltaY * unit);
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      if (!raf) {
        target = window.scrollY;
        current = target;
      }
    };

    const onResize = () => {
      target = clamp(target);
      current = clamp(current);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [damping]);
}

/* ------------------------------------------------------------------ */
/*  FLOATING CARD WITH SCALE ANIMATION                                */
/* ------------------------------------------------------------------ */
function FloatingCard({ src, alt, className = '', drift = 0.5 }) {
  const ref = useRef(null);

  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.55'],
  });
  const { scrollYProgress: pass } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const e = useSpring(enter, EASE_SPRING);
  const p = useSpring(pass, EASE_SPRING);

  const opacity = useTransform(e, [0, 1], [0, 1]);
  const cardScale = useTransform(e, [0, 1], [0.65, 1]);
  const y = useTransform(p, [0, 1], [`${drift * 14}vh`, `${drift * -14}vh`]);
  const innerScale = useTransform(e, [0, 1], [1.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale: cardScale, y }}
      className={`absolute z-30 overflow-hidden bg-[#d8c7ae] shadow-2xl border border-white/20 will-change-transform ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        style={{ scale: innerScale }}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN ABOUT COMPONENT                                              */
/* ------------------------------------------------------------------ */
export default function About() {
  useSmoothScroll();

  const heroRef = useRef(null);
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-play review carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentReview]);

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  
  const imgY = useTransform(heroProgress, [0, 1], ['0%', '-7%']);

  const { scrollYProgress: exit } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  });
  const exitSmooth = useSpring(exit, EASE_SPRING);
  const textOpacity = useTransform(exitSmooth, [0, 0.6], [1, 0]);

  return (
    <main
      className="bg-[#ECE4D9] text-[#0b0b0b]"
      style={{
        fontFamily: "'Archivo', system-ui, sans-serif",
        fontStretch: '125%',
        fontVariationSettings: "'wdth' 125",
      }}
    >
      <style>{FONT_CSS}</style>

      {/* ============================ HERO SECTION ============================ */}
      <section ref={heroRef} className="relative h-[320svh] md:h-[380svh] w-full overflow-clip bg-[#EEE0CE]">
        
        {/* Desktop Hero Image */}
        <motion.img
          src={IMAGES.heroDesktop}
          alt="Jayesh Prajapati — Studio 97"
          style={{ y: imgY }}
          className="hidden md:block absolute inset-x-0 top-0 z-0 h-[108%] w-full object-cover object-top"
        />

        {/* Mobile Hero Image */}
        <motion.img
          src={IMAGES.heroMobile}
          alt="Jayesh Prajapati — Studio 97 Mobile"
          style={{ y: imgY }}
          className="block md:hidden absolute inset-x-0 top-0 z-0 h-[108%] w-full object-cover object-[center_top]"
        />

        {/* Dark Gradient Overlay for Mobile */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/30 md:hidden pointer-events-none" />

        {/* Pinned Text Layer */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <motion.div
            style={{ opacity: textOpacity }}
            className="sticky top-0 flex h-svh w-full flex-col justify-start pt-[14svh] px-[6vw] md:px-[5vw] md:flex-row md:items-start md:justify-between md:pt-[30vh]"
          >
            {/* Left Block: Title, Price, CTA */}
            <div className="pointer-events-auto text-white md:text-[#0b0b0b]">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-stone-200 md:text-[#1a1a1a]/70 md:mb-4 md:text-[0.65rem]">
                Studio 97
              </span>
              <h1 className="text-[clamp(2.2rem,8.5vw,3.5rem)] font-extrabold leading-[1.0] tracking-[-0.02em] md:text-[clamp(1.9rem,3.2vw,3.8rem)]">
                Jayesh
                <br />
                Prajapati
              </h1>
              <p className="mt-2 text-[clamp(0.85rem,1.1vw,1.1rem)] font-bold md:mt-4">
                ₹15,000 / Session
              </p>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-4 flex w-[clamp(11rem,22vw,17rem)] items-center justify-between bg-white text-black md:bg-black md:text-white px-5 py-3 text-[clamp(0.65rem,0.8vw,0.85rem)] font-bold transition-all duration-300 hover:bg-stone-200 md:hover:bg-[#2a2a2a] md:mt-9 md:px-5 md:py-[clamp(0.7rem,1.3vw,1.2rem)] shadow-lg"
              >
                <span>Book Session</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Right Block: Editorial Copy */}
            <div className="pointer-events-auto hidden w-[24vw] max-w-[22rem] md:block md:mt-12">
              <p className="text-[clamp(0.6rem,0.85vw,0.9rem)] font-medium leading-[2.1] tracking-tight">
                Specializing in portraiture, outdoor aesthetics and thematic photography sessions
                across Anand &amp; Gujarat.
              </p>
              <p className="mt-3 text-[clamp(0.5rem,0.65vw,0.7rem)] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/60">
                Natural Light &amp; Shadow
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards Mobile Sequence: Left -> Right -> Left */}
        <FloatingCard
          src={IMAGES.cards[0]}
          alt="Portrait — Arms Crossed"
          drift={0.6}
          className="left-[4vw] top-[105svh] aspect-[4/5] w-[46vw] md:left-auto md:right-[3vw] md:top-[112svh] md:w-[22vw]"
        />

        <FloatingCard
          src={IMAGES.cards[1]}
          alt="Portrait — Seated"
          drift={0.35}
          className="right-[4vw] top-[180svh] aspect-[7/8] w-[52vw] md:right-[5vw] md:top-[205svh] md:w-[28vw]"
        />

        <FloatingCard
          src={IMAGES.cards[2]}
          alt="Portrait — Studio Chair"
          drift={0.5}
          className="left-[4vw] top-[245svh] aspect-[5/3] w-[75vw] md:left-auto md:right-0 md:top-[292svh] md:w-[38vw]"
        />
      </section>

      {/* ========================================== */}
      {/* SECTION: KIND WORDS (AUTO-CAROUSEL)        */}
      {/* ========================================== */}
      <section className="relative z-30 bg-[#ECE4D9] py-16 md:top-20 max-w-3xl mx-auto px-6 text-center space-y-4">
        <p className="text-[9px] tracking-[0.35em] text-stone-500 uppercase font-sans font-medium">
          KIND WORDS
        </p>
        <h2 className="text-xl sm:text-2xl font-normal tracking-wider uppercase font-serif text-stone-900">
          WHAT MY CLIENTS SAY
        </h2>

        {/* Carousel Container */}
        <div className="flex items-center justify-between gap-4 pt-4 min-h-[140px]">
          {/* Previous Arrow */}
          <button 
            onClick={handlePrevReview}
            className="text-stone-400 hover:text-stone-800 text-sm sm:text-base transition-colors p-2 cursor-pointer select-none"
            aria-label="Previous Review"
          >
            &larr;
          </button>
          
          {/* Dynamic Review Quote */}
          <div className="max-w-lg space-y-2 transition-opacity duration-500">
            <p className="text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed font-light">
              "{reviews[currentReview].quote}"
            </p>
            <p className="text-[9px] tracking-[0.25em] uppercase font-sans text-stone-500">
              — {reviews[currentReview].client}
            </p>
          </div>

          {/* Next Arrow */}
          <button 
            onClick={handleNextReview}
            className="text-stone-400 hover:text-stone-800 text-sm sm:text-base transition-colors p-2 cursor-pointer select-none"
            aria-label="Next Review"
          >
            &rarr;
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 pt-2">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentReview(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentReview === idx 
                  ? 'w-1.5 h-1.5 bg-stone-800' 
                  : 'w-1 h-1 bg-stone-400 hover:bg-stone-600'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ======================= RECENTLY VIEWED & SIGNATURE ======================= */}
      <section className="relative z-30 bg-[#ECE4D9] md:top-44 pb-[16vh] pt-[2vh]">

        {/* Single Row Container (Mobile + Desktop) */}
        <div className="flex flex-row items-end gap-2.5 sm:gap-4 px-[4vw] md:px-[8.5vw]">
          {IMAGES.thumbs.map((t, i) => (
            <motion.figure
              key={t.label}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`m-0 ${t.isColor ? 'flex-[2.2]' : 'flex-1'}`}
            >
              <div 
                className={`overflow-hidden bg-[#d8c7ae] shadow-md transition-all duration-300 ${
                  t.isColor 
                    ? 'h-[220px] sm:h-[340px] md:h-[clamp(14rem,58vh,38rem)] ring-1 ring-black/10' 
                    : 'h-[170px] sm:h-[270px] md:h-[clamp(11rem,46vh,30rem)]'
                }`}
              >
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  draggable={false}
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
                    t.isColor ? 'contrast-105' : 'grayscale contrast-125 opacity-85'
                  }`}
                />
              </div>
              <figcaption 
                className={`mt-2 text-center uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold ${
                  t.isColor ? 'text-[0.55rem] sm:text-[0.7rem] text-black' : 'text-[0.45rem] sm:text-[0.6rem] text-stone-600'
                }`}
              >
                {t.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* PREMIUM SIGNATURE: J a y u (WITH SPACING & SUB-3S ANIMATION)      */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-16 flex flex-col items-end px-[6vw] md:px-[10vw]">
          <div className="w-64 sm:w-72 md:w-80 h-32 relative select-none pointer-events-none">
            <svg 
  viewBox="0 0 280 140" 
  className="w-full h-auto overflow-visible"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* 1. Top horizontal stroke of "J" (0.3s) */}
  <motion.path
    d="M 60,24 L 125,24"
    fill="none"
    stroke="#0b0b0b"
    strokeWidth="1.7"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  />

  {/* 2. Large Calligraphic J Stem & Loop (0.6s) */}
  <motion.path
    d="
      M 98,25 
      C 94,39 86,53 77,66 
      C 68,79 57,90 46,97 
      C 37,103 29,103 26,98 
      C 23,93 26,85 31,78 
      C 34,74 38,70 42,68
    "
    fill="none"
    stroke="#0b0b0b"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
  />

  {/* 3. Letter "a" (0.4s) - Pulled closer to J */}
  <motion.path
    d="
      M 112,60 
      C 107,59 102,63 102,68 
      C 102,73 106,76 111,75 
      C 116,74 119,68 118,62 
      C 117,67 117,72 120,75
    "
    fill="none"
    stroke="#0b0b0b"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: 0.9, ease: "easeInOut" }}
  />

  {/* 4. Letter "y" (0.5s) - Tightened gap with "a" */}
  <motion.path
    d="
      M 134,61 
      C 135,67 136,73 139,73 
      C 142,73 145,65 147,61 
      M 147,61 
      C 144,72 139,84 135,92 
      C 131,101 128,107 125,112
    "
    fill="none"
    stroke="#0b0b0b"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
  />

  {/* 5. Letter "u" (0.4s) - Pulled closer to "y" */}
  <motion.path
    d="
      M 162,61 
      C 160,68 159,73 162,75 
      C 166,77 172,69 176,61 
      C 174,68 174,73 177,75 
      C 181,77 187,71 190,66
    "
    fill="none"
    stroke="#0b0b0b"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: 1.8, ease: "easeOut" }}
  />
</svg>
          </div>

          {/* Sub-caption below signature with generous top spacing */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="text-[0.65rem] sm:text-[0.75rem] font-semibold tracking-[0.25em] uppercase text-stone-700 mt-6 mr-6"
          >
            Jayesh Prajapati ( Owner )
          </motion.p>
        </div>

      </section>
    </main>
  );
}