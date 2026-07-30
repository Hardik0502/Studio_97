import React from 'react';
import WeddingPkg from './WeddingPkg'; // Make sure the path matches your project structure
import Prewed from './PrewedPkg';
import BabyShower from './BabyShower';
import OtherPkg from './OtherPkg';

const Section1 = () => {
  return (
    <section className="w-full bg-[#0D0F0E] text-stone-200 font-serif overflow-x-hidden selection:bg-amber-200 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[85vh] min-h-137.5 bg-neutral-900 flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38531667/pexels-photo-38531667.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Studio97 Fine Art Photography"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-6 max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-xs sm:text-sm tracking-[0.35em] text-stone-200 uppercase mb-2 font-sans font-light">
            STUDIO97 FINE ART
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] text-white uppercase font-light mb-8">
            WEDDING & PORTRAIT PHOTOGRAPHY
          </h1>
          <a
            href="#packages-section"
            className="inline-block px-8 py-3 bg-[#E3DAC9]/90 hover:bg-[#E3DAC9] text-[#121816] text-xs uppercase tracking-[0.25em] font-sans font-medium transition duration-300 backdrop-blur-sm rounded-full"
          >
            VIEW PACKAGES
          </a>
        </div>
      </div>

      {/* 2. SLOGAN BANNER */}
      <div className="w-full bg-[#141816] py-5 px-6 text-center border-t border-b border-amber-900/20">
        <p className="text-stone-300 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light font-sans">
          CAPTURING TIMELESS ELEGANCE & UNSCRIPTED EMOTIONS
        </p>
      </div>

      {/* 3. FEATURED PILL PORTRAIT SECTION */}
      <div className="relative w-full bg-[#232825] pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center min-h-100 sm:min-h-120">
          <div className="md:absolute md:left-4 lg:left-12 top-10 md:top-1/3 text-center md:text-left -mb-5 md:mb-0 z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-stone-100 tracking-wider font-light uppercase leading-tight drop-shadow-lg">
              FOR LOVERS <br className="hidden sm:inline" /> WHO ARE
            </h2>
          </div>

          <div className="relative w-60 sm:w-72 md:w-[320px] h-95 sm:h-105 rounded-t-full rounded-b-full overflow-hidden border-2 border-amber-200/30 shadow-2xl z-10 mx-auto my-2 md:my-0">
            <img
              src="https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wildly in love couple"
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
          </div>

          <div className="md:absolute md:right-4 lg:right-12 bottom-10 md:bottom-1/3 text-center md:text-right -mt-5 md:mt-0 z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-stone-100 tracking-wider font-light uppercase leading-tight drop-shadow-lg">
              WILDLY <br className="hidden sm:inline" /> IN LOVE
            </h2>
          </div>
        </div>
      </div>

      {/* 4. SEPARATE WEDDING PACKAGES COMPONENT */}
      <WeddingPkg />

      <Prewed />

      <BabyShower />

      <OtherPkg />
    </section>
  );
};

export default Section1;