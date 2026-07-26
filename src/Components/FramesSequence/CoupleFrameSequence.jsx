import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 177;


export const CoupleFrameSequence = ()=>{

     const canvasRef = useRef(null);
     const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const images = [];
    const imageSeq = {
      frame: 0,
    };

    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drawFrame(imageSeq.frame);
    }

    
    // Load all frames
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      
      img.src = `/frames2/frame_${String(i).padStart(4, "0")}.jpg`;
      
      images.push(img);
    }

    resizeCanvas();
    
    // Draw frame
    function drawFrame(index) {
  const img = images[index];

  if (!img || !img.complete) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // -------- Object-Fit: Cover --------

  const hRatio = canvasWidth / img.width;
  const vRatio = canvasHeight / img.height;

  const ratio = Math.max(hRatio, vRatio);

  const newWidth = img.width * ratio;
  const newHeight = img.height * ratio;

  const x = (canvasWidth - newWidth) / 2;
  const y = (canvasHeight - newHeight) / 2;

  context.imageSmoothingEnabled = true;
context.imageSmoothingQuality = "high";

  context.drawImage(
    img,
    x,
    y,
    newWidth,
    newHeight
  );
}

   let loaded = 0;

images.forEach((img)=>{

img.onload=()=>{

loaded++;

if(loaded===1){

drawFrame(0);

}

}

})

    gsap.to(imageSeq, {
  frame: FRAME_COUNT - 0.001,

  snap: "frame",

  ease: "none",

  onUpdate: () => {
    drawFrame(Math.floor(imageSeq.frame));
  },

  scrollTrigger:{
trigger:wrapperRef.current,

start:"top top",

end:"+=1870",

scrub:0.5,

invalidateOnRefresh:true
},
});

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

    return(
        <>

             <div
ref={wrapperRef}
className="absolute inset-0"
>

<canvas
ref={canvasRef}
className="w-full h-full"
/>

</div>
        
        </>
    )
}

export default CoupleFrameSequence
