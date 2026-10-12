import React, { useState, useEffect } from 'react';

const initialPackages = [
  {
    id: 'silver',
    title: 'Silver Package',
    subtitle: 'Wedding Package #1',
    price: '₹ 90,000 /-',
    image: 'https://images.pexels.com/photos/17354875/pexels-photo-17354875.jpeg',
    modalBanner: 'https://images.pexels.com/photos/17354875/pexels-photo-17354875.jpeg',
    description: 'Studio97 — timeless wedding stories, artfully captured.',
    badge: 'ESSENTIAL COLLECTION',
    features: [
      '1 Traditional Photographer',
      '1 Cinematographer',
      '250 Photos Album (12 x 36)',
      '2:00 Hour Full Length HD Video',
      '4 Edited Images',
      'Lifetime access link for all photos'
    ]
  },
  {
    id: 'gold',
    title: 'Gold Package',
    subtitle: 'Wedding Package #2',
    price: '₹ 1,50,000 /-',
    image: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=800',
    modalBanner: 'https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Elevated cinematic coverage for your special day.',
    badge: 'SIGNATURE COLLECTION',
    features: [
      '1 Traditional Photographer',
      '1 Cinematographer',
      '250 Photos Album (12 x 36)',
      '1 Highlight Video',
      '2:00 Hour Full Length HD Video',
      '2 Photo Frame (12 x 18)',
      'Lifetime access link for all photos'
    ]
  },
  {
    id: 'platinum',
    title: 'Platinum Package',
    subtitle: 'Wedding Package #3',
    price: '₹ 2,30,000 /-',
    image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HQmsKvw/0/LMPZnGJxNdWCBNT8dkHzf4vrTvzvKF7nr3Bm72kfd/5K/DSC09298-5K.jpg',
    modalBanner: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HQmsKvw/0/LMPZnGJxNdWCBNT8dkHzf4vrTvzvKF7nr3Bm72kfd/5K/DSC09298-5K.jpg',
    description: 'The ultimate royal wedding experience with full multi-crew coverage.',
    badge: 'ROYAL COLLECTION',
    features: [
      '1 Traditional Photographer',
      '1 Candid Photographer',
      '1 Cinematographer',
      '1 Candid Cinematographer',
      '1 Day Drone Coverage',
      '300 Photos Album (12 x 36)',
      '2:00 Hour Full Length HD Video',
      '3 Photo Frame (12 x 18)',
      '2-3 Minutes Wedding Highlight Film',
      'Lifetime Photo Access Link'
    ]
  }
];

const WeddingPkg = () => {
  const [packages] = useState(initialPackages);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // Prevent outer background scroll when modal is open
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
    alert(`Booking initiated for ${pkg.title}. Booking form logic will be connected here!`);
  };

  return (
    <div id="packages-section" className="w-full bg-[#0D0F0E] text-stone-200 font-serif overflow-x-hidden selection:bg-amber-200 selection:text-black">
      {/* PACKAGES HEADER */}
      <div className="w-full bg-[#0D0F0E] pt-16 sm:pt-24 pb-8 px-6 text-center border-t border-amber-900/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-light tracking-[0.2em] uppercase mb-3 text-[#E3DAC9]">
            WEDDING PACKAGES
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.35em] text-amber-200/70 uppercase font-sans mb-4">
            STUDIO97 — TIMELESS WEDDING STORIES, ARTFULLY CAPTURED
          </p>
        </div>
      </div>

      {/* HALF-CAPSULE PACKAGES SELECTION GRID */}
      <div className="relative w-full bg-[#0D0F0E] pb-20 sm:pb-32 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="flex items-center justify-between mb-12 border-b border-stone-800 pb-4">
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.3em] text-amber-200/60">
              WHAT WE OFFER +
            </span>
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.3em] text-amber-200/60">
              STUDIO97 LUXURY COLLECTION
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 items-stretch justify-items-center">
            
            {/* 1. SILVER PACKAGE */}
            {packages[0] && (
              <div 
                onMouseEnter={() => setHoveredId(packages[0].id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex flex-col items-center w-full max-w-60 transition-all duration-500 ${
                  hoveredId && hoveredId !== packages[0].id 
                    ? 'opacity-40 filter blur-[1px] scale-95' 
                    : 'opacity-100 scale-100 z-10'
                }`}
              >
                <div 
                  onClick={() => setSelectedPackage(packages[0])}
                  className="group cursor-pointer w-full flex flex-col h-80 sm:h-95 rounded-t-full border border-amber-500/30 hover:border-amber-300 transition-all duration-500 shadow-xl overflow-hidden bg-[#141816]"
                >
                  <div className="h-1/2 p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-[#171B19]">
                    <h3 className="text-base sm:text-xl font-light text-stone-100 tracking-wider mb-1">
                      {packages[0].title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-sans text-amber-200/70 tracking-widest uppercase mb-2">
                      {packages[0].subtitle}
                    </p>
                    <p className="text-xs text-stone-400 font-sans tracking-wide">
                      {packages[0].price}
                    </p>
                  </div>
                  <div className="h-1/2 relative overflow-hidden">
                    <img
                      src={packages[0].image}
                      alt={packages[0].title}
                      className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPackage(packages[0])}
                  className="mt-4 sm:mt-5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-amber-200/40 bg-stone-900/80 text-amber-100 hover:bg-[#E3DAC9] hover:text-black text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View Inclusions
                </button>
              </div>
            )}

            {/* 2. GOLD PACKAGE */}
            {packages[1] && (
              <div 
                onMouseEnter={() => setHoveredId(packages[1].id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex flex-col items-center w-full max-w-60 transition-all duration-500 ${
                  hoveredId && hoveredId !== packages[1].id 
                    ? 'opacity-40 filter blur-[1px] scale-95' 
                    : 'opacity-100 scale-100 z-10'
                }`}
              >
                <div 
                  onClick={() => setSelectedPackage(packages[1])}
                  className="group cursor-pointer w-full flex flex-col h-80 sm:h-95 rounded-t-full rounded-b-full border-2 border-amber-400/50 hover:border-amber-300 transition-all duration-500 shadow-xl overflow-hidden bg-[#141816]"
                >
                  <div className="h-1/2 relative overflow-hidden rounded-t-full">
                    <img
                      src={packages[1].image}
                      alt={packages[1].title}
                      className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="h-1/2 p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-[#191F1C] rounded-b-full">
                    <h3 className="text-base sm:text-xl font-light text-amber-200 tracking-wider mb-1">
                      {packages[1].title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-sans text-stone-300 tracking-widest uppercase mb-2">
                      {packages[1].subtitle}
                    </p>
                    <p className="text-xs text-amber-200/90 font-sans tracking-wide">
                      {packages[1].price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPackage(packages[1])}
                  className="mt-4 sm:mt-5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-amber-300/60 bg-amber-200/10 text-amber-200 hover:bg-amber-200 hover:text-black text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View Inclusions
                </button>
              </div>
            )}

            {/* 3. PLATINUM PACKAGE */}
            {packages[2] && (
              <div 
                onMouseEnter={() => setHoveredId(packages[2].id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`col-span-2 justify-self-center md:col-span-1 flex flex-col items-center w-full max-w-60 transition-all duration-500 ${
                  hoveredId && hoveredId !== packages[2].id 
                    ? 'opacity-40 filter blur-[1px] scale-95' 
                    : 'opacity-100 scale-100 z-10'
                }`}
              >
                <div 
                  onClick={() => setSelectedPackage(packages[2])}
                  className="group cursor-pointer w-full flex flex-col h-80 sm:h-95 rounded-t-full border border-amber-500/30 hover:border-amber-300 transition-all duration-500 shadow-xl overflow-hidden bg-[#141816]"
                >
                  <div className="h-1/2 p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-[#171B19]">
                    <h3 className="text-base sm:text-xl font-light text-stone-100 tracking-wider mb-1">
                      {packages[2].title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-sans text-amber-200/70 tracking-widest uppercase mb-2">
                      {packages[2].subtitle}
                    </p>
                    <p className="text-xs text-stone-400 font-sans tracking-wide">
                      {packages[2].price}
                    </p>
                  </div>
                  <div className="h-1/2 relative overflow-hidden">
                    <img
                      src={packages[2].image}
                      alt={packages[2].title}
                      className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPackage(packages[2])}
                  className="mt-4 sm:mt-5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-amber-200/40 bg-stone-900/80 text-amber-100 hover:bg-[#E3DAC9] hover:text-black text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View Inclusions
                </button>
              </div>
            )}

          </div>

          <div className="mt-12 text-center">
            <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-amber-200/50">
              Hover over cards to focus • Click to view package inclusions
            </p>
          </div>

        </div>
      </div>

      {/* UNIFIED PREMIUM OVERLAY MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden bg-[#121614] border border-amber-500/20 rounded-2xl shadow-2xl my-auto text-stone-200 font-serif">
            
            <button
              onClick={() => setSelectedPackage(null)}
              className="sticky top-4 left-[calc(100%-3rem)] z-30 text-stone-300 hover:text-white bg-black/70 hover:bg-black/90 rounded-full w-9 h-9 flex items-center justify-center text-sm font-sans transition border border-white/20 cursor-pointer shadow-lg"
            >
              ✕
            </button>

            <div className="p-6 sm:p-10 -mt-8">
              <div className="w-full h-36 sm:h-52 rounded-lg overflow-hidden mb-6 relative">
                <img 
                  src={selectedPackage.modalBanner || selectedPackage.image} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover brightness-75" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121614] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-4">
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-amber-300">
                    {selectedPackage.badge}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h2 className="text-3xl sm:text-5xl font-light text-stone-100 tracking-wide">
                    {selectedPackage.title}
                  </h2>
                  <span className="text-xs font-sans text-amber-200/70 tracking-widest uppercase">
                    {selectedPackage.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-400 font-sans font-light leading-relaxed mt-2 max-w-xl">
                  {selectedPackage.description}
                </p>
              </div>

              <div className="bg-stone-900/60 p-4 sm:p-6 rounded-xl border border-amber-500/20 mb-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.3em] text-amber-200/70 mb-4">
                  COMPLETE {selectedPackage.title.toUpperCase()} INCLUSIONS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans font-light text-stone-300">
                  {selectedPackage.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 border-b border-stone-800/80 pb-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800 pt-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-stone-400 block">
                    TOTAL INVESTMENT
                  </span>
                  <span className="text-2xl sm:text-3xl font-sans font-light text-amber-200 tracking-wider">
                    {selectedPackage.price}
                  </span>
                </div>
                <button
                  onClick={() => handleBookNow(selectedPackage)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#E3DAC9] text-black font-sans text-xs uppercase tracking-[0.25em] font-medium rounded hover:bg-amber-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
                >
                  BOOK {selectedPackage.title.toUpperCase()}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingPkg;