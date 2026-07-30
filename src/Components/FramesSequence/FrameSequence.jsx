import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoryText from "../../Sections/Home/Story";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 332;

export const FrameSequence = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });

    const images = [];
    const imageSeq = { frame: 0 };
    let targetFrame = 0;
    let currentFrame = 0;
    let animFrameId = null;
    let isComponentMounted = true;

    // Smooth Canvas Renderer with RequestAnimationFrame & Lerp
    function render() {
      // Lerp (Linear Interpolation) for buttery-smooth motion across frames
      currentFrame += (targetFrame - currentFrame) * 0.15;
      const frameIndex = Math.round(currentFrame);

      const img = images[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const canvasWidth = canvas.width / dpr;
        const canvasHeight = canvas.height / dpr;

        // Object-Fit: Cover with mobile viewport scaling safeguard
        const hRatio = canvasWidth / img.naturalWidth;
        const vRatio = canvasHeight / img.naturalHeight;
        
        // Dynamically compute ratio for portrait/mobile screen balance
        const ratio = Math.max(hRatio, vRatio);

        const newWidth = img.naturalWidth * ratio;
        const newHeight = img.naturalHeight * ratio;

        const x = (canvasWidth - newWidth) / 2;
        const y = (canvasHeight - newHeight) / 2;

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        context.drawImage(
          img,
          x * dpr,
          y * dpr,
          newWidth * dpr,
          newHeight * dpr
        );
      }

      animFrameId = requestAnimationFrame(render);
    }

    // High DPI Canvas Resizer
    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    // Preload Logic
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

      img.onload = () => {
        if (!isComponentMounted) return;
        loadedCount++;

        setLoadProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));

        if (loadedCount === 1) {
          resizeCanvas();
          targetFrame = 0;
          currentFrame = 0;
        }

        // Trigger view ready after initial critical burst is loaded
        if (loadedCount === 25) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    resizeCanvas();
    animFrameId = requestAnimationFrame(render);

    // GSAP Timeline mapped to total section scroll distance
    const tween = gsap.to(imageSeq, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        targetFrame = imageSeq.frame;
      },
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8, // Slightly higher scrub smooths out trackpad friction
        fastScrollEnd: true,
        invalidateOnRefresh: true,
      },
    });

    const handleResize = () => {
      resizeCanvas();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isComponentMounted = false;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-[600vh] bg-black">
      {/* Preloader */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-700">
          <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mb-4" />
          <p className="text-white/80 font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase">
            Loading Cinematic Experience
          </p>
          <span className="text-neutral-500 font-mono text-xs mt-2">
            {loadProgress}%
          </span>
        </div>
      )}

      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Canvas Background Frame Sequence */}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover pointer-events-none transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0.1 }}
        />

        {/* Synchronized Text Overlays */}
        <StoryText target={wrapperRef} />
      </div>
    </div>
  );
};

export default FrameSequence;