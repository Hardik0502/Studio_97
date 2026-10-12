import { useCallback, useEffect, useState } from "react";

/* ================================================================== */
/*  Studio97 door intro                                                */
/*  Dark room -> light leaks under the door -> door swings open ->     */
/*  camera moves into the light -> white fades into your website.      */
/*  Pure CSS (no video file), sized with vh/vw so it fits every screen.*/
/* ================================================================== */

/* ---- tweak these ------------------------------------------------- */
const INTRO_MODE = "first-visit"; /* "first-visit" | "session" | "always" */
const STORAGE_KEY = "studio97_door_intro_seen";
const TOTAL_MS = 4600; /* length of the whole animation (door + camera)   */
/* ------------------------------------------------------------------ */

const EXIT_DELAY = Math.round(TOTAL_MS * 0.86); /* white starts fading to the site */
const EXIT_MS = 800;
const FALLBACK_MS = EXIT_DELAY + EXIT_MS + 700; /* safety unmount */

const store = () => (INTRO_MODE === "session" ? window.sessionStorage : window.localStorage);

function canPlay() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  if (INTRO_MODE === "always") return true;
  try {
    return !store().getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

export default function DoorIntro() {
  const [show, setShow] = useState(canPlay);
  const [leaving, setLeaving] = useState(false);
  const done = useCallback(() => setShow(false), []);

  useEffect(() => {
    if (!show) return;
    try {
      if (INTRO_MODE !== "always") store().setItem(STORAGE_KEY, "1");
    } catch {
      /* storage blocked – the intro simply plays every time */
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(done, FALLBACK_MS);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [show, done]);

  if (!show) return null;

  const T = `${TOTAL_MS}ms`;

  return (
    <div
      className={`di-root ${leaving ? "di-leaving" : ""}`}
      aria-label="Studio97 intro"
      onAnimationEnd={(e) => e.target === e.currentTarget && done()}
    >
      <style>{`
        .di-root{position:fixed;inset:0;z-index:10000;overflow:hidden;background:#050302;
          --H:clamp(180px,48vh,600px);--W:calc(var(--H)*.46);--zoom:9;
          animation:diExit ${EXIT_MS}ms ease ${EXIT_DELAY}ms both}
        @supports (height:1svh){.di-root{--H:clamp(180px,48svh,600px)}}
        .di-root.di-leaving{animation:diExitFast .35s ease 0s both}
        .di-root.di-leaving .di-skip{opacity:0!important;pointer-events:none}

        .di-scene{position:absolute;inset:0;transform-origin:50% 50%;will-change:transform;
          animation:diDolly ${T} cubic-bezier(.55,0,.25,1) both}
        .di-warm{position:absolute;inset:0;opacity:0;animation:diWarm ${T} ease both;
          background:radial-gradient(ellipse 62% 72% at 50% 50%,rgba(255,196,120,.6),rgba(120,70,30,.28) 55%,transparent 82%)}
        .di-vignette{position:absolute;inset:0;pointer-events:none;
          background:radial-gradient(ellipse at 50% 50%,transparent 38%,rgba(0,0,0,.85) 100%)}

        .di-floor{position:absolute;left:-30%;right:-30%;top:calc(50% + var(--H)/2 - 8px);bottom:-10%;
          perspective:380px;perspective-origin:50% 0;
          -webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 20%);mask-image:linear-gradient(to bottom,transparent 0,#000 20%)}
        .di-plane{position:absolute;left:0;right:0;top:0;height:300%;transform-origin:50% 0;transform:rotateX(62deg);
          background:
            repeating-linear-gradient(90deg,rgba(0,0,0,.6) 0 2px,transparent 2px 54px),
            repeating-linear-gradient(0deg,rgba(0,0,0,.28) 0 1px,transparent 1px 210px),
            linear-gradient(to bottom,#3d2413,#160c06)}
        .di-spill{position:absolute;left:calc(50% - var(--W)*1.3);width:calc(var(--W)*2.6);top:calc(50% + var(--H)/2 - 4px);
          height:calc(var(--H)*.55);opacity:0;filter:blur(6px);animation:diSpill ${T} ease both;
          background:linear-gradient(to bottom,rgba(255,205,130,.95),rgba(255,160,70,0));
          clip-path:polygon(32% 0,68% 0,100% 100%,0 100%)}

        .di-door{position:absolute;left:50%;top:50%;width:var(--W);height:var(--H);transform:translate(-50%,-50%);perspective:1300px}
        .di-casing{position:absolute;inset:-3.5% -10% 0 -10%;background:#1c100a;box-shadow:0 0 0 1px #000,inset 0 0 0 2px rgba(255,255,255,.03)}
        .di-light{position:absolute;inset:0;background:linear-gradient(to bottom,#fffaee,#ffe3b3 70%,#ffd08a)}
        .di-halo{position:absolute;inset:0;opacity:0;animation:diHalo ${T} ease both;
          box-shadow:0 0 calc(var(--W)*.9) calc(var(--W)*.25) rgba(255,190,110,.85)}
        .di-leaf{position:absolute;inset:0;transform-origin:100% 50%;animation:diLeaf ${T} cubic-bezier(.4,.02,.25,1) both;
          background:linear-gradient(90deg,#24140d,#3b2219 45%,#2a1810);box-shadow:inset 0 0 0 1px rgba(0,0,0,.65)}
        .di-rim{position:absolute;inset:0;opacity:0;animation:diRim ${T} ease both;
          background:linear-gradient(90deg,rgba(255,200,120,.35),transparent 28%)}
        .di-panel{position:absolute;left:15%;right:15%;border-radius:2px;background:rgba(255,255,255,.015);
          box-shadow:inset 0 0 0 2px rgba(0,0,0,.45),inset 0 0 0 4px rgba(255,255,255,.04),inset 3px 4px 10px rgba(0,0,0,.5)}
        .di-knob{position:absolute;left:8%;top:54%;width:clamp(6px,calc(var(--W)*.055),12px);aspect-ratio:1;border-radius:50%;
          background:radial-gradient(circle at 35% 30%,#d9b66b,#5a4220)}
        .di-seam{position:absolute;left:2%;right:2%;bottom:-2px;height:3px;border-radius:2px;background:#ffd9a0;opacity:0;
          box-shadow:0 0 14px 4px rgba(255,190,100,.8);animation:diSeam ${T} ease both}

        .di-flash{position:absolute;inset:0;background:#fffaf0;opacity:0;animation:diFlash ${T} ease-in both}
        .di-skip{position:absolute;right:max(16px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));
          min-height:44px;padding:0 18px;border:1px solid rgba(255,255,255,.25);border-radius:999px;color:rgba(255,255,255,.8);
          background:rgba(0,0,0,.25);font:500 12px/1 'DM Sans',system-ui,sans-serif;letter-spacing:.18em;backdrop-filter:blur(6px);
          opacity:0;animation:diSkipIn .5s ease .8s both;cursor:pointer;z-index:3}
        .di-skip:hover{background:rgba(255,255,255,.15);color:#fff}

        @keyframes diLeaf{
          0%,8%{transform:rotateY(0)} 10%{transform:rotateY(2.2deg)} 12.5%{transform:rotateY(.4deg)}
          25%{transform:rotateY(16deg)} 55%,100%{transform:rotateY(104deg)}}
        @keyframes diDolly{0%,36%{transform:scale(1)} 80%,100%{transform:scale(var(--zoom))}}
        @keyframes diWarm{0%,10%{opacity:0} 50%,100%{opacity:.9}}
        @keyframes diHalo{0%,12%{opacity:0} 40%{opacity:.7} 55%,100%{opacity:1}}
        @keyframes diSpill{0%,6%{opacity:0} 16%{opacity:.5} 30%{opacity:.8} 60%,100%{opacity:1}}
        @keyframes diSeam{0%,5%{opacity:0} 14%{opacity:1} 38%{opacity:.9} 52%,100%{opacity:0}}
        @keyframes diRim{0%,12%{opacity:0} 45%,100%{opacity:1}}
        @keyframes diFlash{0%,60%{opacity:0} 80%,100%{opacity:1}}
        @keyframes diExit{from{opacity:1} to{opacity:0}}
        @keyframes diExitFast{from{opacity:1} to{opacity:0}}
        @keyframes diSkipIn{from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none}}
      `}</style>

      <div className="di-scene">
        <div className="di-warm" />
        <div className="di-floor"><div className="di-plane" /></div>
        <div className="di-spill" />

        <div className="di-door">
          <div className="di-casing" />
          <div className="di-light" />
          <div className="di-halo" />
          <div className="di-leaf">
            <span className="di-panel" style={{ top: "7%", height: "46%" }} />
            <span className="di-panel" style={{ top: "58%", height: "15%" }} />
            <span className="di-panel" style={{ top: "77%", height: "15%" }} />
            <span className="di-knob" />
            <span className="di-rim" />
          </div>
          <div className="di-seam" />
        </div>
      </div>

      <div className="di-vignette" />
      <div className="di-flash" />

      <button type="button" className="di-skip" onClick={() => setLeaving(true)}>
        SKIP ›
      </button>
    </div>
  );
}