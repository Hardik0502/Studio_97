import React, { useState, useEffect } from 'react';

const prewedPackages = [
  {
    id: 'package-one',
    title: 'PACKAGE ONE',
    duration: '1 Day Shoot',
    price: '₹ 30,000 /-',
    image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-SGPv54F/0/Nff2T4nZwm6FQ8XD5B6nxZ45Gb77GMkjHvSLHzCrw/X2/163-X2.jpg',
    modalBanner: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-SGPv54F/0/Nff2T4nZwm6FQ8XD5B6nxZ45Gb77GMkjHvSLHzCrw/X2/163-X2.jpg',
    description: 'Essential pre-wedding coverage to capture your romantic chemistry in a single day.',
    badge: 'ESSENTIAL COLLECTION',
    features: [
      '1 Day Shoot',
      '1 Highlight Video',
      '10 Days Countdown Images',
      'Mini-Album (40 Photos)'
    ]
  },
  {
    id: 'package-two',
    title: 'PACKAGE TWO',
    duration: '1 Day Shoot',
    price: '₹ 50,000 /-',
    image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/MkBmj2D3QFFN9Z6X7v4qZQdnKxx2XZ3kqgtSsknM5/X3/JAYU-148-X3.jpg',
    modalBanner: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/MkBmj2D3QFFN9Z6X7v4qZQdnKxx2XZ3kqgtSsknM5/X3/JAYU-148-X3.jpg',
    description: 'Elevated full-day cinematic shoot with aerial drone visuals and social media reels.',
    badge: 'SIGNATURE COLLECTION',
    features: [
      '1 Day Shoot',
      '1 Highlight Video',
      '2 Reels',
      '10 Days Countdown Images',
      'Mini-Album (80 Photos)',
      'Drone Coverage'
    ]
  }
];

const Prewed = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPackage]);

  const handleBookNow = (pkg) => {
    alert(`Booking initiated for ${pkg.title}. Connect booking logic here!`);
  };

  return (
    <div className="w-full bg-[#1D211E] text-white font-serif min-h-screen py-12 px-4 sm:px-8 overflow-x-hidden selection:bg-white selection:text-[#1D211E]">
      
      {/* 1. BRAND HEADER */}
      <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-white text-[#1D211E] text-[10px] font-sans tracking-[0.2em] font-semibold uppercase rounded-full">
            STUDIO97
          </span>
          <span className="text-xs tracking-[0.25em] text-stone-400 font-sans uppercase font-medium">
            VISUALS
          </span>
        </div>
        
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-stone-400 mt-4 mb-1">
          Outdoor
        </p>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
          Pre-Wedding <br />
          <span className="font-semibold text-white/80 ">Packages</span>
        </h1>
      </div>

      {/* 2. PACKAGES CONTAINER */}
      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-20 pb-12">
        
        {/* PACKAGE ONE */}
        <div 
          onMouseEnter={() => setHoveredId(prewedPackages[0].id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`transition-all duration-500 ${
            hoveredId && hoveredId !== prewedPackages[0].id ? 'opacity-40 blur-[1px]' : 'opacity-100'
          }`}
        >
          {/* Mobile Single Card Layout */}
          <div 
            onClick={() => setSelectedPackage(prewedPackages[0])}
            className="flex md:hidden flex-col bg-[#F7F7F5] text-[#1D211E] rounded-4xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="h-52 w-full relative">
              <img 
                src={prewedPackages[0].image} 
                alt={prewedPackages[0].title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#F7F7F5] via-transparent to-transparent" />
            </div>
            <div className="p-6 pt-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-stone-500 uppercase block mb-1">
                  {prewedPackages[0].duration}
                </span>
                <h2 className="text-2xl font-light tracking-wider uppercase mb-2 text-[#1D211E]">
                  {prewedPackages[0].title}
                </h2>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-stone-300 pt-4">
                <span className="text-xl font-sans font-medium text-[#1D211E]">
                  {prewedPackages[0].price}
                </span>
                <span className="text-xs font-sans tracking-widest text-stone-600 underline underline-offset-4">
                  VIEW DETAILS →
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Overlapping Asymmetric Layout */}
          <div className="hidden md:flex items-center justify-end relative h-72">
            {/* Contrasting Light Capsule Pill */}
            <div 
              onClick={() => setSelectedPackage(prewedPackages[0])}
              className="absolute left-[10%] z-20 w-[55%] bg-[#F7F7F5] text-[#1D211E] p-8 sm:p-10 rounded-[40px] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 border border-white/20 flex flex-col justify-between h-56"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-wider uppercase mb-1">
                  {prewedPackages[0].title}
                </h2>
                <p className="text-xs font-sans text-stone-500 tracking-widest uppercase">
                  {prewedPackages[0].duration}
                </p>
              </div>
              <div className="flex items-baseline justify-between mt-4">
                <span className="text-2xl font-sans font-medium text-[#1D211E]">
                  {prewedPackages[0].price}
                </span>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-stone-600 underline underline-offset-4 hover:text-stone-900">
                  View Details →
                </span>
              </div>
            </div>

            {/* Arched Image Visual */}
            <div 
              onClick={() => setSelectedPackage(prewedPackages[0])}
              className="w-[50%] h-full rounded-r-[120px] rounded-l-[40px] overflow-hidden shadow-2xl cursor-pointer group z-10 border border-stone-800"
            >
              <img 
                src={prewedPackages[0].image} 
                alt={prewedPackages[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95" 
              />
            </div>
          </div>
        </div>

        {/* PACKAGE TWO */}
        <div 
          onMouseEnter={() => setHoveredId(prewedPackages[1].id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`transition-all duration-500 ${
            hoveredId && hoveredId !== prewedPackages[1].id ? 'opacity-40 blur-[1px]' : 'opacity-100'
          }`}
        >
          {/* Mobile Single Card Layout */}
          <div 
            onClick={() => setSelectedPackage(prewedPackages[1])}
            className="flex md:hidden flex-col bg-[#F7F7F5] text-[#1D211E] rounded-4xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="h-52 w-full relative">
              <img 
                src={prewedPackages[1].image} 
                alt={prewedPackages[1].title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#F7F7F5] via-transparent to-transparent" />
            </div>
            <div className="p-6 pt-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-stone-500 uppercase block mb-1">
                  {prewedPackages[1].duration}
                </span>
                <h2 className="text-2xl font-light tracking-wider uppercase mb-2 text-[#1D211E]">
                  {prewedPackages[1].title}
                </h2>
              </div>
              <div className="flex items-center justify-between mt-4 border-t border-stone-300 pt-4">
                <span className="text-xl font-sans font-medium text-[#1D211E]">
                  {prewedPackages[1].price}
                </span>
                <span className="text-xs font-sans tracking-widest text-stone-600 underline underline-offset-4">
                  VIEW DETAILS →
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Overlapping Asymmetric Layout (Inverted) */}
          <div className="hidden md:flex items-center justify-start relative h-72">
            {/* Arched Image Visual */}
            <div 
              onClick={() => setSelectedPackage(prewedPackages[1])}
              className="w-[50%] h-full rounded-l-[120px] rounded-r-[40px] overflow-hidden shadow-2xl cursor-pointer group z-10 border border-stone-800"
            >
              <img 
                src={prewedPackages[1].image} 
                alt={prewedPackages[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95" 
              />
            </div>

            {/* Contrasting Light Capsule Pill */}
            <div 
              onClick={() => setSelectedPackage(prewedPackages[1])}
              className="absolute right-[10%] z-20 w-[55%] bg-[#F7F7F5] text-[#1D211E] p-8 sm:p-10 rounded-[40px] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 border border-white/20 flex flex-col justify-between h-56"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-light tracking-wider uppercase mb-1">
                  {prewedPackages[1].title}
                </h2>
                <p className="text-xs font-sans text-stone-500 tracking-widest uppercase">
                  {prewedPackages[1].duration}
                </p>
              </div>
              <div className="flex items-baseline justify-between mt-4">
                <span className="text-2xl font-sans font-medium text-[#1D211E]">
                  {prewedPackages[1].price}
                </span>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-stone-600 underline underline-offset-4 hover:text-stone-900">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. DETAILS OVERLAY MODAL (#1D211E BACKGROUND) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden bg-[#1D211E] border border-stone-700/70 rounded-3xl shadow-2xl my-auto text-stone-100 font-serif">
            
            <button
              onClick={() => setSelectedPackage(null)}
              className="sticky top-4 left-[calc(100%-3.5rem)] z-30 text-stone-300 hover:text-white bg-black/60 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center text-sm font-sans transition border border-white/10 cursor-pointer shadow-lg"
            >
              ✕
            </button>

            <div className="p-6 sm:p-10 -mt-10">
              
              <div className="w-full h-40 sm:h-52 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={selectedPackage.modalBanner || selectedPackage.image} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover brightness-90" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1D211E] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase px-3 py-1 bg-white/10 text-stone-200 rounded-full border border-white/20 backdrop-blur-sm">
                    {selectedPackage.badge}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                    {selectedPackage.title}
                  </h2>
                  <span className="text-xs font-sans text-stone-400 tracking-widest uppercase">
                    {selectedPackage.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed mt-2">
                  {selectedPackage.description}
                </p>
              </div>

              {/* Inclusions List */}
              <div className="bg-black/30 p-5 rounded-2xl border border-stone-800 mb-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.3em] text-stone-400 mb-4 font-semibold">
                  PACKAGE INCLUSIONS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans font-light text-stone-200">
                  {selectedPackage.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 border-b border-stone-800 pb-2">
                      <span className="text-stone-400">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrated Travel & Accommodation Terms */}
              <div className="bg-stone-900/80 p-5 rounded-2xl mb-6 font-sans border border-stone-800">
                <h5 className="text-stone-300 text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold">
                  TRAVEL & ACCOMMODATION TERMS
                </h5>
                <p className="text-xs leading-relaxed font-light text-stone-400">
                  Travel expenses for the photography team—including entry tickets, food, and fuel/petrol (if team vehicle is utilized)—must be directly covered by the client. A separate private room for crew accommodation must be provided for outstation shoots.
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800 pt-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-stone-400 block font-medium">
                    TOTAL INVESTMENT
                  </span>
                  <span className="text-2xl sm:text-3xl font-sans font-light text-white tracking-wider">
                    {selectedPackage.price}
                  </span>
                </div>
                <button
                  onClick={() => handleBookNow(selectedPackage)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1D211E] font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-stone-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
                >
                  BOOK {selectedPackage.title}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Prewed;