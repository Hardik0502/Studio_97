import React from 'react'

const Footer = () => {
  // SVG Data URL for the dot-matrix pattern inside the text
  const dotPatternSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6"><circle cx="2" cy="2" r="1" fill="white" fill-opacity="0.3"/></svg>`

  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-12 pb-6 border-t border-white/10 font-sans overflow-hidden">
      <div className="max-w-350 mx-auto space-y-12">
        
        {/* --- TOP ROW: PHOTOGRAPHY CERTIFICATES & TRUST BADGES --- */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 pb-8 border-b border-white/10 opacity-80">
          
          {/* Daboo Ratnani Style Badge */}
          <div className="flex items-center gap-2 border border-white/40 px-3 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
            <span className="font-bold text-xs border border-white rounded-full w-5 h-5 flex items-center justify-center font-serif">DR</span>
            <span>Daboo Ratnani Certified</span>
          </div>

          {/* 1000+ Happy Clients */}
          <div className="border border-white/40 rounded-full px-3 py-1.5 text-center text-[9px] uppercase font-medium leading-none">
            1000+ Happy<br />
            <span className="font-bold text-[10px]">Clients</span>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center gap-1 border border-white/40 rounded-full px-3 py-1.5 text-xs font-bold">
            <span className="text-white">★★★★★</span>
            <span className="text-[8px] font-normal uppercase leading-tight ml-1">5.0 Rated<br />Studio</span>
          </div>

          {/* ISO Certified Badge Card */}
          <div className="border border-white/30 p-2 rounded-md flex items-center gap-2 text-[10px] bg-neutral-950">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            <div>
              <p className="font-bold uppercase tracking-wider text-[9px] text-white">ISO Certified</p>
              <p className="text-neutral-400 text-[8px]">Quality Assured Studio</p>
            </div>
          </div>

        </div>

        {/* --- MIDDLE SECTION: CONTACT (LEFT) + NAV (RIGHT WITH GAP) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Owner & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">Get In Touch</span>
              <h3 className="text-2xl sm:text-3xl font-[t9] font-semibold text-blue-200 tracking-tight">
                Jayesh Prajapati
              </h3>
              <p className="text-neutral-300 text-sm md:text-base font-light">
                Mobile: <a href="tel:7777988897" className=" font-[t5] text-blue-200 hover:text-white transition-colors">77779 88897</a>
              </p>
              <p className="text-neutral-200 text-xs sm:text-sm max-w-sm leading-relaxed pt-1">
                Near T-Squre Hospital, Nani Khodiyaar, Besides Raghuveer Society, Anand, Gujarat, India - 388001
              </p>
              <div className="pt-6">
  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
    <iframe
      title="Studio97 Location"
      src="https://maps.google.com/maps?q=22.5674121,72.9501892&z=18&output=embed"
      width="100%"
      height="260"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full grayscale hover:grayscale-0 transition duration-500"
    />
  </div>

  <a
    href="https://www.google.com/maps/place/Studio+97/@22.5674121,72.9501892,18z/data=!4m6!3m5!1s0x395e4fef404a5c35:0xcd5d647a8627ed86!8m2!3d22.5674121!4d72.9501892!16s%2Fg%2F11fb0jpsqx?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-flex items-center gap-2 text-xs text-blue-300 hover:text-white transition"
  >
    Open in Google Maps ↗
  </a>
</div>
            </div>

            <div className="pt-2">
              <a
                href="tel:7777988897"
                className="inline-block bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors text-xs uppercase tracking-wider"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Navigation Links (Spaced away from contact) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
            
            {/* Nav Column 1 */}
            <div className="space-y-3 text-sm">
              <ul className="space-y-2.5 underline underline-offset-4  text-neutral-300 font-light">
                <li><a href="#home" className="hover:text-white transition-colors">Home </a></li>
                <li><a href="#our-work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#latest-films" className="hover:text-white transition-colors">Packages</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Help & Support</a></li>
              </ul>
            </div>

            {/* Nav Column 2 */}
            <div className="space-y-3 text-sm">
              <ul className="space-y-2.5 text-neutral-300 font-light">
                <li>
                  <a href="#whatsapp" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    WhatsApp <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#instagram" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    Instagram <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#youtube" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    YouTube <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- BRAND GIANT FULL-WIDTH TYPOGRAPHY --- */}
        <div className="pt-6 relative select-none w-full text-center">
          <div className="relative inline-block w-full">
            
            {/* Base Text with Gradient Animation */}
            <h1 className="text-[17.5vw] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-r from-neutral-200 via-white to-neutral-400 animate-text-shine w-full text-center block">
              STUDIO97
            </h1>

            {/* Dot-Matrix Micro Texture Overlay inside Text */}
            <h1
              className="text-[17.5vw] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text text-center absolute inset-0 pointer-events-none z-20 mix-blend-overlay block"
              style={{
                backgroundImage: `url('${dotPatternSvg}')`,
                backgroundRepeat: 'repeat',
              }}
            >
              STUDIO97
            </h1>

          </div>
        </div>

        {/* --- BOTTOM SUB-FOOTER METADATA --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-400 pt-4 border-t border-white/10">
          <div className="max-w-md leading-relaxed text-[11px]">
            This website has been built following low-carbon principles of web design and digital craftsmanship.
          </div>
          <div className="text-left sm:text-right text-[11px] space-y-0.5">
            <p className="text-neutral-300">Copyright © STUDIO 97®</p>
            <p className="text-neutral-500">Every Wedding Deserves A Story™</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer