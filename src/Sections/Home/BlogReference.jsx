import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

// Selected Editorial Photography Projects (Asymmetrical aspect ratios)
const PROJECTS = [
  {
    id: '01',
    title: 'SILENT MONOLITH',
    category: 'Pre-WEDDING / ELOPEMENT',
    location: 'Udaypur, IN',
    aspect: 'aspect-[16/10]',
    image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-2Ld58SF/0/L93HzVdCJrHMg4DdSdzM3ZQDdcM5qxmfdxZJ4z6Wc/X2/untitled-294-X2.jpg',
    specs: 'SONY ALPHA-III • 30MM',
  },
  {
    id: '02',
    title: 'NOCTURNE VOGUE',
    category: 'HIGH FASHION',
    location: 'Studio 97, IN',
    aspect: 'aspect-[4/5]',
    image: 'https://cdn.phototourl.com/free/2026-07-26-c10a5081-11b0-4a80-8f92-07561a5d27bb.webp',
    specs: 'SONY ALPHA-IV • 40MM',
  },
  {
    id: '03',
    title: 'ECHOES OF MIST',
    category: 'FINE ART LANDSCAPE',
    location: 'Rasalpur, IN',
    aspect: 'aspect-[4/5]',
    image: 'https://cdn.phototourl.com/free/2026-07-26-49551e5a-5699-42f6-9e56-98e5736fb810.webp',
    specs: 'SONY ALPHA-III • 30MM',
  },
  {
    id: '04',
    title: 'RAW PORTRAIT',
    category: 'DOCUMENTARY',
    location: 'Bangkok, TH',
    aspect: 'aspect-[16/9]',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
    specs: 'SONY ALPHA-III • 30MM',
  },
];

export default function BlogReference() {
  const containerRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeProject, setActiveProject] = useState(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Staggered column scroll speeds for asymmetrical feel
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [40, -120]);

  // Smooth custom cursor following
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToBlog = () => {
    const blogSection = document.getElementById('studio-journal');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/journal';
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#080808] text-[#ECEAE5] min-h-screen relative font-sans selection:bg-[#ECEAE5] selection:text-black overflow-x-hidden"
    >
      {/* Organic Subtle Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Custom Dynamic Floating Cursor Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 hidden lg:flex items-center justify-center px-4 py-2 bg-white text-black text-[10px] font-mono tracking-widest uppercase rounded-full shadow-2xl transition-opacity duration-300"
        animate={{
          x: cursorPos.x - 40,
          y: cursorPos.y - 20,
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        <span>VIEW / {activeProject}</span>
      </motion.div>

      <main className="max-w-350 mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-32">
        {/* Editorial Top Header */}
        <header className="mb-24 md:mb-36 border-b border-neutral-800/80 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-4">
                [ STUDIO ARCHIVE // 2025—2026 ]
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.95] text-[#F3F1ED]">
                Selected <br />
                <span className="italic font-normal font-serif text-neutral-400 pl-4 sm:pl-12">Works</span>
              </h1>
            </div>

            <div className="max-w-xs space-y-4">
              <p className="text-xs text-neutral-400 leading-relaxed font-mono uppercase tracking-wider">
                Capturing raw atmosphere, architectural form, and modern fine art storytelling.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                AVAILABLE FOR GLOBAL COMMISSIONS
              </div>
            </div>
          </div>
        </header>

        {/* Asymmetrical 4-Project Grid with Independent Parallax Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Slightly Faster Parallax) */}
          <motion.div style={{ y: yLeft }} className="space-y-20 md:space-y-32">
            {[PROJECTS[0], PROJECTS[2]].map((project) => (
              <article
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className={`relative ${project.aspect} overflow-hidden bg-neutral-900 border border-neutral-800/60`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.9] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Subtle top index badge */}
                  <div className="absolute top-4 left-4 font-mono text-[11px] text-white/70 bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    {project.id}
                  </div>
                </div>

                {/* Technical Meta & Title Below Image */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-col space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-serif tracking-wide text-[#F3F1ED] group-hover:text-amber-200 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 tracking-wider">
                    {project.specs}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Right Column (Offset Downward with Slower Parallax) */}
          <motion.div style={{ y: yRight }} className="space-y-20 md:space-y-32 md:pt-28">
            {[PROJECTS[1], PROJECTS[3]].map((project) => (
              <article
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className={`relative ${project.aspect} overflow-hidden bg-neutral-900 border border-neutral-800/60`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.9] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Subtle top index badge */}
                  <div className="absolute top-4 left-4 font-mono text-[11px] text-white/70 bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    {project.id}
                  </div>
                </div>

                {/* Technical Meta & Title Below Image */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-col space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-serif tracking-wide text-[#F3F1ED] group-hover:text-amber-200 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 tracking-wider">
                    {project.specs}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>

        </div>

        {/* High-End Editorial Journal / Blog Redirect Section */}
        <section className="mt-40 md:mt-56 pt-20 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <Plus className="w-4 h-4 text-neutral-400" />
              <span>THE STUDIO JOURNAL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#F3F1ED] leading-[1.1]">
              Essays on Light, Darkrooms & Medium Format
            </h2>
            <p className="text-neutral-400 text-sm font-mono leading-relaxed">
              In-depth visual articles exploring atmospheric lighting, film grain alchemy, and editorial field notes.
            </p>
          </div>

          <button
            onClick={handleScrollToBlog}
            className="group relative inline-flex items-center gap-6 px-8 py-5 border border-neutral-700 hover:border-white transition-colors duration-500 font-mono text-xs uppercase tracking-[0.25em] text-neutral-200 overflow-hidden bg-neutral-950"
          >
            {/* Hover Background Slide Effect */}
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              EXPLORE JOURNAL
            </span>
            <ArrowUpRight className="relative z-10 w-4 h-4 text-neutral-400 group-hover:text-black transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </section>

        {/* Scroll Target Anchor */}
        <div id="studio-journal" className="pt-20" />
      </main>
    </div>
  );
}