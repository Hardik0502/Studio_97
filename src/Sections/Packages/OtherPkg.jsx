import React from 'react';

const packages = [
  {
    id: 'pkg-1',
    line1: 'BIRTHDAY',
    line2: 'SHOOT',
    title: 'BIRTHDAY SHOOT',
    price: '₹350',
    image: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_1_tdr3hn.jpg',
    features: [
      'EDITED PHOTOS',
      'CAPTURED PICS ARE NOT PROVIDED',
      'CAKE CELEBRATION IS NOT ALLOWED (ONLY FOR PHOTOS PURPOSE)',
      'THEME PROVIDED',
      'INDOOR / OUTDOOR'
    ]
  },
  {
    id: 'pkg-2',
    line1: 'BABY',
    line2: 'SHOOT',
    title: 'BABY SHOOT',
    price: '₹500',
    image: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1791630486/3212_ne5gp6.webp',
    features: [
      'EDITED PHOTOS',
      'CAPTURED PICS NOT PROVIDED',
      'WITH SETUP (THEME)',
      'INDOOR / OUTDOOR'
    ]
  },
  {
    id: 'pkg-3',
    line1: 'PERSONAL',
    line2: 'SHOOT',
    title: 'PERSONAL SHOOT',
    price: '₹150',
    image: 'https://res.cloudinary.com/ddhh0a3an/image/upload/v1791641953/download_2_edyccv.jpg',
    features: [
      'EDITED PHOTOS',
      'CAPTURED PICS NOT PROVIDED',
      'WITHOUT SETUP',
      'INDOOR / OUTDOOR'
    ]
  }
];

const PHONE_NUMBER = '7777988897';

const OtherPkg = () => {
  const handleCallNow = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div className="w-full bg-[#1C201D] text-white font-sans min-h-screen flex flex-col items-center justify-center py-10 px-3 sm:px-8 selection:bg-[#E6C687]/30 selection:text-white">
      
      {/* 3D ELEVATED CARD WRAPPER */}
      <div className="w-full max-w-3xl bg-[#1C201D] border border-stone-700/60 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden transform hover:scale-[1.005] transition-transform duration-500 relative">
        
        {/* Top Edge Light Reflection for 3D Feel */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-stone-400/30 to-transparent pointer-events-none" />

        {/* HEADER SECTION */}
        <div className="text-center pt-8 pb-6 px-4 border-b border-stone-800 bg-[#141715]">
          <h1 className="text-2xl sm:text-4xl font-light tracking-[0.25em] text-white uppercase mb-1">
            CASUAL SHOOT
          </h1>
          <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#E6C687] uppercase font-light">
            STUDIO 97
          </p>
        </div>

        {/* ALTERNATING 2-COLUMN GRID (STAYS 2-COLUMNS ON ALL MOBILE & DESKTOP SCREENS) */}
        <div className="divide-y divide-stone-800 border-b border-stone-800">
          {packages.map((pkg, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={pkg.id} 
                className="grid grid-cols-2 divide-x divide-stone-800"
              >
                {/* TEXT PANEL - PURE BLACK BACKGROUND */}
                <div 
                  className={`p-4 sm:p-10 flex flex-col justify-between min-h-65 sm:min-h-85 bg-[#1b1f1c] ${
                    isEven ? 'order-1' : 'order-2'
                  }`}
                >
                  <div>
                    <h2 className="text-base sm:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase leading-tight mb-0.5 sm:mb-1">
                      {pkg.line1}
                    </h2>
                    <h2 className="text-base sm:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase leading-tight mb-4 sm:mb-8">
                      {pkg.line2}
                    </h2>
                  </div>

                  <div className="text-right mt-auto">
                    <ul className="space-y-1 sm:space-y-1.5 text-[8px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.18em] text-stone-300 font-light uppercase mb-3 sm:mb-6 leading-tight">
                      {pkg.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                    <div className="text-sm sm:text-2xl font-normal tracking-[0.15em] text-white mb-2 sm:mb-4">
                      {pkg.price}
                    </div>
                    <button
                      onClick={handleCallNow}
                      className="inline-block py-1.5 px-3 sm:py-2 sm:px-6 bg-white text-black text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase hover:bg-[#E6C687] transition-colors cursor-pointer rounded-sm"
                    >
                      CALL NOW
                    </button>
                  </div>
                </div>

                {/* IMAGE PANEL */}
                <div 
                  className={`relative min-h-65 sm:min-h-85 w-full overflow-hidden ${
                    isEven ? 'order-2' : 'order-1'
                  }`}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM TERMS & SERVICE BANNER */}
        <div className="p-5 sm:p-8 bg-[#121513] text-center font-sans space-y-2 sm:space-y-3">
          <div className="text-[10px] sm:text-xs tracking-[0.18em] text-[#E6C687] uppercase font-light leading-relaxed">
            ANY PIC WITH SETUP (THEME) - ₹ 350 &nbsp;|&nbsp; WITHOUT SETUP (THEME) - ₹ 150
          </div>
          
          <p className="text-[9px] sm:text-[11px] tracking-[0.15em] text-stone-300 uppercase font-light">
            CAPTURED / UNEDITED PHOTOS ARE NOT PROVIDED.
          </p>

          <p className="text-[9px] sm:text-[11px] tracking-[0.15em] text-stone-400 uppercase font-light">
            YOU HAVE TO PAY FULL PAYMENT FIRST.{' '}
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="text-white underline cursor-pointer hover:text-[#E6C687] transition"
            >
              CONTACT US FOR MORE INFO
            </a>.
          </p>
        </div>

      </div>

    </div>
  );
};

export default OtherPkg;