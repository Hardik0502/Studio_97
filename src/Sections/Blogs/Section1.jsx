import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogData = [
  {
    id: '01',
    type: 'image',
    category: 'ENGAGEMENT · ROMANCE',
    title: 'FOREVER BEGINS',
    description: 'Intimate moments and timeless promises captured as two souls embark on their new journey together.',
    src: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg',
    mobileSrc: 'https://images.pexels.com/photos/17354875/pexels-photo-17354875.jpeg'
  },
  {
    id: '02',
    type: 'video',
    category: 'BEHIND THE LENS · PREVIEW',
    title: 'THE REVEAL',
    description: 'A candid glimpse behind the camera as unforgettable frames are shared directly from screen to heart.',
    src: '/Videos/v1.mp4',
    mobileSrc: '/Videos/v1.mp4'
  },
  {
    id: '03',
    type: 'image',
    category: 'MONOCHROME · PORTRAIT',
    title: 'SILENT ELEGANCE',
    description: 'A soulful black and white portrait capturing classic grace, posture, and quiet contemplation.',
    src: 'https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1600',
    mobileSrc: 'https://images.pexels.com/photos/24712941/pexels-photo-24712941.jpeg'
  },
  {
    id: '04',
    type: 'video',
    category: 'INDIAN WEDDING · TRADITION',
    title: 'ROYAL SYMPHONY',
    description: 'Vibrant cultural rituals, rich colors, and grand celebrations captured in cinematic detail.',
    src: '/Videos/v2.mp4',
    mobileSrc: '/Videos/v2.mp4'
  },
  {
    id: '05',
    type: 'image',
    category: 'NEWBORN · BABY SHOOT',
    title: 'PURE INNOCENCE',
    description: 'Gentle, heartwarming newborn portraits celebrating the peaceful beauty of early beginnings.',
    src: 'https://images.pexels.com/photos/4445857/pexels-photo-4445857.jpeg',
    mobileSrc: 'https://images.pexels.com/photos/4445857/pexels-photo-4445857.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '06',
    type: 'video',
    category: 'FAMILY · BONDING',
    title: 'JOYFUL CONNECTIONS',
    description: 'Heartfelt playful laughter and tender unconditional love shared between mother and child.',
    src: '/Videos/v3.mp4',
    mobileSrc: '/Videos/v3.mp4'
  }
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogData.length) % blogData.length);
  };

  const activeItem = blogData[currentIndex];

  const getActiveSource = (item) => {
    return isMobile && item.mobileSrc ? item.mobileSrc : item.src;
  };

  const visibleCards = [];
  for (let i = 1; i <= 3; i++) {
    visibleCards.push(blogData[(currentIndex + i) % blogData.length]);
  }

  const progressPercentage = ((currentIndex + 1) / blogData.length) * 100;

  return (
    <div className="relative w-full h-dvh overflow-hidden bg-black text-white font-sans select-none rounded-2xl sm:rounded-3xl">
      
      {/* 1. FULLSCREEN MEDIA */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          key={activeItem.id + (isMobile ? '-mobile' : '-desktop')}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full z-0 transform-gpu overflow-hidden bg-neutral-950"
        >
          {activeItem.type === 'video' ? (
            <video
              key={getActiveSource(activeItem)}
              src={getActiveSource(activeItem)}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              key={getActiveSource(activeItem)}
              src={getActiveSource(activeItem)}
              alt={activeItem.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-black/30 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* 2. OVERLAY LAYOUT */}
      <div className="relative z-20 w-full h-full flex flex-col md:flex-row md:items-end justify-between p-5 sm:p-10 md:p-12 pb-6 sm:pb-10 pointer-events-none gap-6">
        
        {/* Top Spacer for Mobile vertically centered layout */}
        <div className="w-full pt-2 md:hidden" />

        {/* ACTIVE BLOG DATA */}
        <div className="w-full md:max-w-md pointer-events-auto my-auto md:my-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Category */}
              <p className="text-[10px] sm:text-xs font-medium tracking-[3px] text-amber-400 mb-1.5">
                {activeItem.category}
              </p>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.98] mb-2 text-white drop-shadow-md">
                {activeItem.title}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-72.5 sm:max-w-sm line-clamp-2 sm:line-clamp-3 mb-3">
                {activeItem.description}
              </p>

              {/* STUDIO 97 Branding */}
              <div className="pt-2 border-t border-white/20 inline-block">
                <span className="text-[10px] sm:text-xs font-bold tracking-[3.5px] text-white/90 uppercase block">
                  STUDIO 97
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[2px] text-white/50 uppercase block">
                  Photography & Film
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM BAR: Cards + Navigation Controls */}
        <div className="w-full md:w-auto flex flex-col items-start sm:items-end gap-3 pointer-events-auto">
          
          {/* Queue Cards Container (Scrollbar Removed) */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full justify-end overflow-hidden py-1">
            {visibleCards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const targetIndex = blogData.findIndex(item => item.id === card.id);
                  setCurrentIndex(targetIndex);
                }}
                className="relative w-20 h-28 sm:w-24 sm:h-36 md:w-28 md:h-40 rounded-lg overflow-hidden cursor-pointer group shrink-0 border border-white/20 shadow-xl bg-neutral-900 transform-gpu"
              >
                {card.type === 'video' ? (
                  <video
                    key={getActiveSource(card)}
                    src={getActiveSource(card)}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none"
                  />
                ) : (
                  <img
                    src={getActiveSource(card)}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none"
                  />
                )}
                
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-2 pointer-events-none">
                  <p className="text-[6px] sm:text-[7px] font-medium text-amber-400 tracking-wider mb-0.5 truncate">
                    {card.category}
                  </p>
                  <h3 className="text-[8px] sm:text-[9px] font-bold uppercase tracking-tight text-white leading-tight line-clamp-1">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls + Progress Bar */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full">
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center active:scale-95 hover:bg-white hover:text-black transition duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center active:scale-95 hover:bg-white hover:text-black transition duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-20 sm:w-32 h-0.5 bg-white/20 relative overflow-hidden rounded-full">
              <motion.div
                initial={false}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-amber-400 rounded-full"
              />
            </div>

            {/* Slide Counter */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-white/90 min-w-7 text-right">
              {activeItem.id}<span className="text-white/40 text-[10px]">/0{blogData.length}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Section1;