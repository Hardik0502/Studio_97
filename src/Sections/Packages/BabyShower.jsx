import React, { useState, useEffect } from 'react';

// Unique images for Package 01
const package1Images = [
  'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1557182/pexels-photo-1557182.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=800'
];

// Unique images for Package 02
const package2Images = [
  'https://images.pexels.com/photos/7119102/pexels-photo-7119102.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7119089/pexels-photo-7119089.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg?auto=compress&cs=tinysrgb&w=800'
];

const babyShowerPackages = [
  {
    id: 'package-01',
    title: 'ESSENTIAL PACKAGE',
    price: '₹ 10,000/-',
    carouselImages: package1Images,
    modalBanner: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Beautiful traditional coverage designed to preserve every milestone moment of your baby shower celebration.',
    badge: 'PACKAGE 01',
    features: [
      '1 Traditional Photographer',
      '1 Traditional Videographer',
      '20 Minutes Video',
      '20 Edited Images'
    ]
  },
  {
    id: 'package-02',
    title: 'PREMIUM PACKAGE',
    price: '₹ 18,000/-',
    carouselImages: package2Images,
    modalBanner: 'https://images.pexels.com/photos/7119089/pexels-photo-7119089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Comprehensive photography and cinematic coverage with an added highlight film and double photographer perspective.',
    badge: 'PACKAGE 02',
    features: [
      '2 Traditional Photographers',
      '1 Traditional Videographer',
      '20 Minutes Video',
      '40 Edited Images',
      '1 Highlight Video'
    ]
  }
];

// Reusable Sub-component for Independent Auto-Looping Carousels
const NewbornCarousel = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-stone-800 shadow-xl relative">
      {images.map((imgUrl, index) => (
        <img
          key={index}
          src={imgUrl}
          alt={`Newborn Baby Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover brightness-90 transition-opacity duration-1000 ease-in-out ${
            index === currentIdx ? 'opacity-100 scale-105 transition-transform duration-4000' : 'opacity-0 scale-100'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const BabyShower = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

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
    <div className="w-full bg-[#0D0F0E] text-stone-100 font-serif min-h-screen py-12 px-4 sm:px-8 flex flex-col items-center justify-center selection:bg-[#E6C687]/30 selection:text-white">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-4xl bg-[#0D0F0E] border border-stone-800/80 rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
        
        {/* Luxury Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-light tracking-[0.18em] text-white uppercase mb-3">
            BABY SHOWER
          </h1>
          <p className="text-xs sm:text-sm font-sans tracking-[0.35em] text-[#E6C687] uppercase font-light">
            PHOTO PRICING SESSION
          </p>
        </div>

        {/* TWO-PACKAGE LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-stretch mb-12">
          {babyShowerPackages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className={`flex flex-col items-center px-4 sm:px-10 py-4 ${
                index === 0 ? 'md:border-r md:border-stone-800/80' : ''
              }`}
            >
              {/* Independent 3-second carousel */}
              <NewbornCarousel images={pkg.carouselImages} />

              {/* Package Title */}
              <h2 className="text-lg sm:text-xl font-light tracking-[0.2em] text-white uppercase text-center mb-2">
                {pkg.title}
              </h2>

              {/* Description */}
              <p className="text-xs font-sans font-light italic text-stone-400 text-center leading-relaxed mb-6 max-w-xs">
                {pkg.description}
              </p>

              {/* Bullet Features */}
              <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-stone-300 w-full mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6C687] shrink-0" />
                    <span className="tracking-wide">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Price & Premium CTA Button */}
              <div className="mt-auto w-full text-center border-t border-stone-800/60 pt-6">
                <div className="text-2xl sm:text-3xl font-[t4] font-light text-[#E6C687] tracking-wide mb-4">
                  {pkg.price}
                </div>
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-3.5 px-6 bg-stone-100 text-[#0D0F0E] font-sans text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#e3dccf] transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,198,135,0.3)] hover:scale-[1.02] cursor-pointer"
                >
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ABOUT OUR SERVICE */}
        <div className="border-t border-stone-800/80 pt-10 text-center">
          <h3 className="text-sm font-serif font-light tracking-[0.25em] text-stone-200 uppercase mb-3">
            ABOUT OUR SERVICE
          </h3>
          <p className="text-xs font-sans font-light text-stone-400 leading-relaxed max-w-2xl mx-auto mb-6">
            We specialize in capturing high-end, timeless imagery for your life’s most cherished celebrations. Every moment is crafted with cinematic depth and artistic precision by the Studio97 Photography.
          </p>
          <div className="w-32 h-px bg-stone-800 mx-auto" />
        </div>

      </div>

      {/* DETAILS OVERLAY MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden bg-[#0D0F0E] border border-stone-800/80 rounded-3xl shadow-2xl my-auto text-stone-100 font-serif">
            
            {/* Modal Close Button with Gold Hover */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="sticky top-4 left-[calc(100%-3.5rem)] z-30 text-stone-300 hover:text-[#0D0F0E] bg-stone-900/90 hover:bg-[#E6C687] rounded-full w-10 h-10 flex items-center justify-center text-sm font-sans transition-all duration-300 border border-stone-700/80 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(230,198,135,0.4)]"
            >
              ✕
            </button>

            <div className="p-6 sm:p-10 -mt-10">
              
              <div className="w-full h-44 sm:h-56 rounded-2xl overflow-hidden mb-6 relative border border-stone-800">
                <img 
                  src={selectedPackage.modalBanner} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover brightness-90" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D0F0E] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase px-3 py-1 bg-[#E6C687]/15 text-[#E6C687] rounded-full border border-[#E6C687]/30 backdrop-blur-sm">
                    {selectedPackage.badge}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                  {selectedPackage.title}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed mt-2">
                  {selectedPackage.description}
                </p>
              </div>

              {/* Inclusions List */}
              <div className="bg-stone-900/50 p-5 rounded-2xl border border-stone-800/80 mb-6">
                <h4 className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#E6C687] mb-4 font-medium">
                  PACKAGE INCLUSIONS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans font-light text-stone-200">
                  {selectedPackage.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 border-b border-stone-800/80 pb-2">
                      <span className="text-[#E6C687]">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* REFINED & WELCOMING CUSTOM SERVICES NOTE */}
              <div className="bg-[#131916] border border-[#D4AF37]/30 p-6 rounded-2xl mb-8 font-sans shadow-lg">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E6C687] shadow-[0_0_8px_#E6C687]" />
                  <h5 className="text-[#E6C687] text-[11px] tracking-[0.22em] uppercase font-medium">
                    CRAFT YOUR PERFECT MEMORY
                  </h5>
                </div>
                <p className="text-xs leading-relaxed font-light text-stone-300">
                  Every celebration is unique! Beyond digital coverage, we offer handcrafted flush-mount photobooks, premium wooden wall frames, and raw archival drives. These bespoke physical keepsakes can be customized and added to your package seamlessly upon request.
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800/80 pt-6">
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
                  className="w-full sm:w-auto px-8 py-3.5 bg-stone-100 text-[#0D0F0E] font-sans text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#f0debc] transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,198,135,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
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

export default BabyShower;