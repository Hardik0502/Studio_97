import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  IMAGES – put your files in /public/images and keep these names.   */
/*  Event photos: /public/images/events/navratri.jpg, diwali.jpg,      */
/*  new-year.jpg (a themed gradient shows until you add them).         */
/* ------------------------------------------------------------------ */
const IMG = {
  hero: "https://res.cloudinary.com/ddhh0a3an/image/upload/v1785582502/pexels-captian-jayu-819563-6532858_ur4hhv.jpg",
  /* real client photos are used when available, otherwise the emoji shows */
  avatars: [
    { src: "/images/avatar-1.jpg", bg: "#f5b82e", emoji: "👩🏻" },
    { src: "/images/avatar-2.jpg", bg: "#8fd0ee", emoji: "👨🏽" },
    { src: "/images/avatar-3.jpg", bg: "#f2a64a", emoji: "👧🏼" },
    { src: "/images/avatar-4.jpg", bg: "#c9a894", emoji: "🧔🏻" },
  ],
};

/* WhatsApp booking number (country code + number) and website text */
const WA_NUMBER = "917777988897";
const WEBSITE = "WWW.STUDIO97.COM";

const rupee = (n) => "₹" + n.toLocaleString("en-IN");

/* ------------------------------ CONTENT ---------------------------- */
/*  Numbers below are examples – replace with your real figures.       */
const CONTENT = {
  hero: {
    index: "05",
    eyebrow: "STUDIO97 EVENTS",
    titleLine1a: "FRAME",
    titleLine1b: "EVERY",
    titleLine2: "MOMENT",
    primary: "Book an Event",
    primaryHref: "/packages",
    secondary: "View Gallery",
    secondaryHref: "/blogs",
    statValue: "500",
    statUnit: "+",
    statLabel: "Events Photographed",
    trusted: "Loved by families & brands",
    trustedCount: "350+",
    description:
      "From intimate weddings to large corporate galas, Studio97 captures candid emotion, cinematic detail and every story in between.",
  },
  specialties: ["Weddings", "Pre-Wedding", "Maternity", "Newborn", "Festivals", "Birthdays", "Corporate", "Fashion"],

  /*  template: "poster"  -> multi-day offer with a short timeline
      template: "elegant" -> simple single-day layout (any number of perks)
      endDateText is optional – leave it out for one-day events.         */
  events: [
    {
      id: "navratri",
      template: "poster",
      startMonth: "OCT",
      startDate: "11",
      endDateText: "19 OCT",
      title: "Navratri Garba Nights",
      location: "Studio97 Photography Studio",
      time: "6:00 pm — 11:00 pm",
      description:
        "Nine nights, eighteen traditional themes. Festive portraits at just ₹200 per photo, Suggested Photo poses for solor and couples.",
      image: "https://res.cloudinary.com/ddhh0a3an/image/upload/v1791552180/test_dmfnwu.jpg",
      glyph: "💃",
      gradient: "linear-gradient(135deg,#7a1f3d 0%,#d9531e 55%,#f7a53b 100%)",
      lines: ["Navratri", "Garba Nights"],
      tag: "NAVRATRI OFFER",
      blurb:
        "Nine nights, eighteen traditional themes. Dress up, twirl and let Studio97 turn your Garba memories into timeless portraits.",
      dateNum: "11",
      dateText: ["OCT 2026", "TO 19 OCT"],
      place: ["STUDIO97 PHOTOGRAPHY", "STUDIO, YOUR CITY"],
      price: 200,
      mrp: 350,
      items: [
        ["9 DAYS", "Nine Nights, Eighteen Themes", "Visit any evening from 11 to 19 October and choose from two signature Garba looks every day — chaniya choli, kediyu, heritage, floral and neon dandiya sets."],
        ["₹200 / PIC", "Festive Photo Offer", "Pay just ₹200 per edited photo instead of the regular ₹350. Minimum 3 photos per booking."],
        ["1 DAY", "Booking & Delivery", "Edited photos arrive on that day or next. A small advance confirms your slot, with one free reschedule on 24 hours' notice."],
        ["No Raw Photos", "Edited Photos", "We provide only edited photos. Raw photos are not provided, Don't ask for raw photos."],
      ],
    },
    {
      id: "diwali",
      template: "elegant",
      startMonth: "NOV",
      startDate: "08",
      title: "Diwali Family Portraits",
      location: "Studio97 Photography Studio",
      time: "10:00 am — 7:00 pm",
      description:
        "One glowing day of diyas, rangoli and family portraits. ₹250 per photo with a free festive outfit for babies aged 1–3 years.",
      image: "https://res.cloudinary.com/ddhh0a3an/image/upload/v1791808599/jsd_ytybyy.jpg",
      glyph: "🪔",
      gradient: "linear-gradient(135deg,#3a1c06 0%,#a8590f 50%,#f5c451 100%)",
      lines: ["Diwali", "Family Portraits"],
      tag: "DIWALI SPECIAL",
      blurb:
        "A single golden day of diyas, rangoli and warm light — made for families who want one beautiful portrait to cherish.",
      dateNum: "08",
      dateText: ["NOV 2026", "SUNDAY"],
      place: ["STUDIO97 PHOTOGRAPHY", "STUDIO, YOUR CITY"],
      price: 250,
      mrp: 350,
      perks: [
        ["Free festive outfit", "Kurta or lehenga set for babies aged 1–3 years, provided free."],
        ["Free 5×7 print", "Included with every booking of 8 or more photos."],
        ["Safe, glowing set", "LED diyas and fresh rangoli — no open flames or firecrackers."],
      ],
    },
    {
      id: "new-year",
      template: "elegant",
      startMonth: "DEC",
      startDate: "31",
      title: "New Year's Eve Party",
      location: "Studio97 Photography Studio",
      time: "5:00 pm — 11:30 pm",
      description:
        "One night of confetti, balloons and midnight glow. ₹300 per photo, with free baby party outfits before 8 pm.",
      image: "https://res.cloudinary.com/ddhh0a3an/image/upload/v1791808591/Holiday_Romance_Wallpaper_bzltyl.jpg",
      glyph: "🎆",
      gradient: "linear-gradient(135deg,#0f1033 0%,#3b2a86 55%,#c48bff 100%)",
      lines: ["New Year's", "Eve Party"],
      tag: "NEW YEAR SPECIAL",
      blurb:
        "Welcome the new year with confetti, balloons and a midnight glow. A party-ready set for couples, friends and families.",
      dateNum: "31",
      dateText: ["DEC 2026", "THURSDAY"],
      place: ["STUDIO97 PHOTOGRAPHY", "STUDIO, YOUR CITY"],
      price: 300,
      mrp: 400,
      perks: [
        ["Baby party outfit", "Mini tux or sparkle dress for babies aged 1–3 years, free for slots before 8 pm."],
        ["Same-night preview", "Your top 3 shots are shared on WhatsApp before midnight."],
        ["Evening for adults", "Slots after 9 pm are open to guests aged 18 and above."],
      ],
    },
  ],
};

/* --------------------------- SMALL HELPERS ------------------------- */
function Img({ src, alt = "", className = "", style, fallback }) {
  const [ok, setOk] = useState(true);
  if (!ok) return fallback ?? <div className={className} style={style} />;
  return <img src={src} alt={alt} className={className} style={style} onError={() => setOk(false)} />;
}

/* Removes a near-white studio wall in the browser, so the grey band can
   sit strictly BEHIND the person (no line across the model).
   Flood-fills from the photo edges, so only the connected wall is removed.
   Tune whiteThreshold (lower = removes more) / maxSat if needed.
   If the canvas can't be read (CORS), onFail() is called and the
   page falls back to the blend-mode version. */
function CutoutImg({ src, alt = "", className = "", style, onFail, whiteThreshold = 195, maxSat = 22 }) {
  const [url, setUrl] = useState(null);
  const failRef = useRef(onFail);
  failRef.current = onFail;

  useEffect(() => {
    let dead = false;
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onerror = () => !dead && failRef.current?.();
    im.onload = () => {
      try {
        const scale = Math.min(1, 1600 / im.naturalWidth);
        const w = Math.round(im.naturalWidth * scale);
        const h = Math.round(im.naturalHeight * scale);
        const cv = document.createElement("canvas");
        cv.width = w;
        cv.height = h;
        const ctx = cv.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(im, 0, 0, w, h);
        const img = ctx.getImageData(0, 0, w, h); /* throws if tainted */
        const d = img.data;
        const N = w * h;
        const lum = (i) => Math.min(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]);
        const sat = (i) => Math.max(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]) - lum(i);
        const isBg = (i) => lum(i) >= whiteThreshold && sat(i) <= maxSat;

        const bg = new Uint8Array(N);
        const stack = new Int32Array(N);
        let sp = 0;
        const push = (i) => {
          if (!bg[i] && isBg(i)) {
            bg[i] = 1;
            stack[sp++] = i;
          }
        };
        for (let x = 0; x < w; x++) {
          push(x);
          push((h - 1) * w + x);
        }
        for (let y = 0; y < h; y++) {
          push(y * w);
          push(y * w + w - 1);
        }
        while (sp) {
          const i = stack[--sp];
          const x = i % w;
          if (x > 0) push(i - 1);
          if (x < w - 1) push(i + 1);
          if (i >= w) push(i - w);
          if (i < N - w) push(i + w);
        }

        /* de-fringe bright halo pixels touching the wall */
        for (let pass = 0; pass < 2; pass++) {
          const next = bg.slice();
          for (let y = 1; y < h - 1; y++)
            for (let x = 1; x < w - 1; x++) {
              const i = y * w + x;
              if (!bg[i] && (bg[i - 1] || bg[i + 1] || bg[i - w] || bg[i + w]) && lum(i) > whiteThreshold - 35) next[i] = 1;
            }
          bg.set(next);
        }

        /* soft alpha edge */
        let a = new Float32Array(N);
        for (let i = 0; i < N; i++) a[i] = bg[i] ? 0 : 255;
        for (let pass = 0; pass < 2; pass++) {
          const b = a.slice();
          for (let y = 1; y < h - 1; y++)
            for (let x = 1; x < w - 1; x++) {
              const i = y * w + x;
              b[i] = (a[i - w - 1] + a[i - w] + a[i - w + 1] + a[i - 1] + a[i] + a[i + 1] + a[i + w - 1] + a[i + w] + a[i + w + 1]) / 9;
            }
          a = b;
        }
        for (let i = 0; i < N; i++) d[i * 4 + 3] = a[i];
        ctx.putImageData(img, 0, 0);
        if (!dead) setUrl(cv.toDataURL("image/png"));
      } catch {
        if (!dead) failRef.current?.();
      }
    };
    im.src = src;
    return () => {
      dead = true;
    };
  }, [src, whiteThreshold, maxSat]);

  if (!url) return null;
  return <img src={url} alt={alt} className={className} style={style} />;
}

/* event photo with themed gradient fallback */
function EventArt({ evt, className = "", imgClass = "" }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: evt.gradient }}>
      <span className="absolute inset-0 grid select-none place-items-center text-6xl opacity-40">{evt.glyph}</span>
      {ok && (
        <img
          src={evt.image}
          alt={evt.title}
          loading="lazy"
          onError={() => setOk(false)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClass}`}
        />
      )}
    </div>
  );
}

const Squiggle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9c3-5 8-3 6 1s-5 6-3 8 7 0 9-6" />
    <path d="M14 12c2-3 5-2 4 1s-3 4-1 5" />
  </svg>
);

/* ------------------------------- HERO ------------------------------ */
function Avatar({ a }) {
  const base = "grid h-10 w-10 place-items-center rounded-full border-2 border-[#ededed] sm:h-[42px] sm:w-[42px]";
  return (
    <Img
      src={a.src}
      alt=""
      className={`${base} object-cover`}
      style={{ background: a.bg }}
      fallback={
        <div className={`${base} text-[20px] leading-none sm:text-[22px]`} style={{ background: a.bg }} aria-hidden="true">
          {a.emoji}
        </div>
      }
    />
  );
}

function Hero() {
  const c = CONTENT.hero;
  const [cutFailed, setCutFailed] = useState(false);
  /* only used if the automatic cut-out can't run: fade the band out before the model */
  const bandMask = cutFailed ? { WebkitMaskImage: "linear-gradient(to right,#000 52%,transparent 72%)", maskImage: "linear-gradient(to right,#000 52%,transparent 72%)" } : undefined;
  const heroImgClass =
    "pointer-events-none relative z-10 order-last mt-2 h-[330px] w-auto max-w-[90%] select-none self-end object-contain object-bottom sm:h-[440px] sm:max-w-[72%] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[108%] lg:max-w-none";

  return (
    <section className="relative isolate flex w-full flex-col overflow-hidden bg-[#ededed] bg-linear-to-b from-[#f7f5f1] via-[#ededed] to-[#e3e1dd] text-[#0d0d0d] lg:block lg:min-h-178 lg:bg-none">
      {/* Stepped grey band (desktop) */}
      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1452 712" preserveAspectRatio="none" aria-hidden="true" style={bandMask}>
        <path d="M0 466 H620 L792 340 H1452" fill="none" stroke="#dcdcdc" strokeWidth="28" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* simple band (mobile / tablet) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[22%] h-4 bg-[#dcdcdc]/80 sm:h-5 lg:hidden" aria-hidden="true" style={bandMask} />

      {/* Model: automatic cut-out (band stays behind), blend fallback if needed */}
      {cutFailed ? (
        <Img
          src={IMG.hero}
          alt="Studio97 event photography"
          className={heroImgClass}
          style={{
            mixBlendMode: "multiply",
            filter: "contrast(1.06) brightness(1.1)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 22%), linear-gradient(to bottom, transparent 0%, #000 8%)",
            WebkitMaskComposite: "source-in",
            maskImage: "linear-gradient(to right, transparent 0%, #000 22%), linear-gradient(to bottom, transparent 0%, #000 8%)",
            maskComposite: "intersect",
          }}
        />
      ) : (
        <CutoutImg src={IMG.hero} alt="Studio97 event photography" className={heroImgClass} onFail={() => setCutFailed(true)} />
      )}

      {/* Index number */}
      <span className="absolute left-[6%] top-5.5 z-20 text-xs font-light sm:left-[10.3%] sm:text-[15px] lg:top-[18%]">{c.index}</span>

      {/* Headline */}
      <div className="relative z-20 px-6 pt-14 sm:px-12 sm:pt-16 lg:px-0 lg:pl-[14.25%] lg:pt-18">
        <p className="text-[11px] font-light uppercase tracking-[0.28em] text-stone-700 sm:text-[13px]">{c.eyebrow}</p>

        <h1 className="mt-3 text-[clamp(46px,13vw,80px)] font-light leading-[1.12] tracking-[-0.02em] sm:mt-5 lg:text-[clamp(36px,5.8vw,84px)] lg:leading-[1.22]">
          <span className="block">
            {c.titleLine1a}{" "}
            <span className="relative inline-block">
              {c.titleLine1b}
              <svg className="pointer-events-none absolute left-[-4%] top-[-26%] h-[150%] w-[112%] overflow-visible" viewBox="0 0 280 120" fill="none" aria-hidden="true">
                <ellipse cx="140" cy="62" rx="136" ry="30" transform="rotate(-20 140 62)" stroke="#111" strokeWidth="1.3" pathLength="1" className="orbit-draw" />
              </svg>
            </span>
          </span>
          <span className="block">{c.titleLine2}</span>
        </h1>

        <div className="mt-7 flex items-center gap-6 sm:mt-11 sm:gap-10">
          <a href={c.primaryHref} className="rounded-md bg-[#262626] px-6 py-3 text-[13px] font-medium text-white shadow-sm transition hover:bg-black sm:px-6.5 sm:py-2.5">
            {c.primary}
          </a>
          <a href={c.secondaryHref} className="py-3 text-[13px] font-medium text-[#111] transition-opacity hover:opacity-60">
            {c.secondary}
          </a>
        </div>
      </div>

      {/* Desktop stat */}
      <div className="absolute left-[54.3%] top-[55%] z-20 hidden lg:block">
        <p className="text-[27px] font-light leading-none">
          {c.statValue}
          <span className="text-[18px]">{c.statUnit}</span>
        </p>
        <p className="mt-3 text-[16px] font-light text-[#555]">{c.statLabel}</p>
      </div>

      {/* Trusted by */}
      <div className="relative z-20 flex flex-col gap-6 px-6 pb-2 pt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:px-12 lg:absolute lg:bottom-25 lg:left-[14.25%] lg:block lg:p-0">
        <div className="flex items-baseline gap-3 lg:hidden">
          <span className="text-3xl font-light text-stone-900">{c.statValue}{c.statUnit}</span>
          <span className="text-xs font-light uppercase tracking-wider text-stone-500">{c.statLabel}</span>
        </div>

        <div>
          <p className="text-[11px] font-light uppercase tracking-wider text-[#555] sm:text-[12px] lg:normal-case lg:tracking-normal">{c.trusted}</p>
          <div className="mt-3 flex items-center sm:mt-4">
            <div className="flex -space-x-2.25">
              {IMG.avatars.map((a, i) => (
                <Avatar key={i} a={a} />
              ))}
            </div>
            <span className="ml-4 text-2xl font-light sm:ml-6 sm:text-[26px]">{c.trustedCount}</span>
          </div>
        </div>

        <p className="max-w-75 text-[12.5px] font-light leading-relaxed text-[#555] lg:hidden">{c.description}</p>
      </div>

      {/* Desktop description */}
      <div className="absolute bottom-24 left-[40%] z-20 hidden items-center gap-10 lg:flex">
        <div className="flex h-16.5 w-16.5 items-center justify-center rounded-full border border-[#bdbdbd]">
          <Squiggle />
        </div>
        <p className="max-w-65 text-[12.5px] font-light leading-5.75 text-[#555]">{c.description}</p>
      </div>

      {/* Black wedge (desktop only – never overlaps the model) */}
      <div className="absolute bottom-0 left-0 z-30 hidden h-9 w-full bg-[#0d0d0d] lg:block" style={{ clipPath: "polygon(0 0, 43.5% 0, 47.5% 100%, 0 100%)" }} />
    </section>
  );
}

/* ------------------------- SPECIALTIES MARQUEE --------------------- */
function Specialties() {
  const list = [...CONTENT.specialties, ...CONTENT.specialties];
  const mask = "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)";
  return (
    <section className="group flex h-22 items-center overflow-hidden bg-[#0d0d0d] sm:h-30" aria-label="What Studio97 photographs">
      <div className="w-full overflow-hidden" style={{ WebkitMaskImage: mask, maskImage: mask }}>
        <div className="marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          {list.map((s, i) => (
            <span key={i} className="flex items-center">
              <span className="font-['t8',serif] text-[28px] italic text-white/40 transition-colors duration-300 hover:text-white sm:text-[40px]">{s}</span>
              <span className="mx-6 text-[12px] text-[#a88679] sm:mx-10 sm:text-[14px]" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- EVENT DETAIL SHEET ---------------------- */
const INK = "#2b2523";
const ROSE = "#a88679";
const PAPER = "#faf6f1";
const SOFT = "#4a403b";
const lineStyle = { borderColor: `${ROSE}80` };

function BookLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group/book flex items-center justify-between gap-3">
      <span
        className="inline-flex min-h-12 items-center rounded-full px-6 text-[11px] tracking-[0.16em] transition duration-300 group-hover/book:-translate-y-0.5 group-active/book:scale-95"
        style={{ background: INK, color: PAPER }}
      >
        BOOK ON WHATSAPP
      </span>
      <span className="hidden text-[11px] tracking-[0.14em] sm:inline">{WEBSITE}</span>
      <span className="text-xl transition-transform duration-300 group-hover/book:-translate-y-1 group-hover/book:translate-x-1" style={{ color: ROSE }}>↗</span>
    </a>
  );
}

function SheetHeader({ evt }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <svg width="26" height="26" viewBox="0 0 24 24" fill={INK} aria-hidden="true">
          <path d="M3 4h13l-3 4H3zM3 10h18l-3 4H3zM8 16h13l-3 4H5z" />
        </svg>
        <p className="text-[10px] leading-[1.35] tracking-[0.18em] sm:text-[11px]">STUDIO97<br />PHOTOGRAPHY</p>
      </div>
      <p className="mr-12 border-b pb-3 text-[9.5px] tracking-[0.2em] sm:text-[11px]" style={lineStyle}>{evt.tag}</p>
    </div>
  );
}

function Fact({ label, children, className = "" }) {
  return (
    <div className={className}>
      <p className="mb-3 text-[10.5px] tracking-[0.25em]">{label}</p>
      {children}
    </div>
  );
}

function DateFact({ evt }) {
  return (
    <div className="flex items-end gap-2.5">
      <span className="font-['Cormorant_Garamond',serif] text-[40px] leading-[0.9]">{evt.dateNum}</span>
      <span className="text-[10.5px] leading-[1.35] tracking-[0.16em]">{evt.dateText[0]}<br />{evt.dateText[1]}</span>
    </div>
  );
}

/* ---- template 1: poster (multi-day offers) ---- */
function PosterBody({ evt, wa }) {
  return (
    <div className="relative px-6 pt-8 sm:px-10 sm:pt-10 md:px-14">
      <SheetHeader evt={evt} />

      <p className="absolute right-4 top-27 text-[9px] tracking-[0.38em] [writing-mode:vertical-rl] sm:right-7 sm:top-32.5 sm:text-[10.5px] md:top-40">
        CAPTURE • CELEBRATE • CHERISH •
      </p>

      <h2 className="mt-10 pr-7 font-['Cormorant_Garamond',serif] font-medium leading-[0.92] tracking-[-0.02em] sm:mt-14 sm:pr-10" style={{ fontSize: "clamp(46px,11.5vw,112px)" }}>
        {evt.lines.map((l) => (
          <span key={l} className="block">{l}</span>
        ))}
      </h2>
      <span className="mt-9 block h-0.5 w-7 sm:mt-12" style={{ background: ROSE }} />

      <div className="mt-10 flex flex-col gap-14 md:grid md:grid-cols-[minmax(0,36%)_minmax(0,1fr)] md:grid-rows-[auto_1fr_auto] md:gap-x-14 md:gap-y-0">
        {/* A */}
        <div className="md:col-start-1 md:row-start-1">
          <p className="max-w-85 text-[12.5px] leading-[1.9] md:max-w-55" style={{ color: SOFT }}>{evt.blurb}</p>
          <div className="mt-10">
            <div className="border-t py-6" style={lineStyle}><Fact label="DATE"><DateFact evt={evt} /></Fact></div>
            <div className="border-t py-6" style={lineStyle}>
              <Fact label="LOCATION"><p className="text-[11px] leading-[1.7] tracking-[0.14em]">{evt.place[0]}<br />{evt.place[1]}</p></Fact>
            </div>
            {evt.price && (
              <div className="border-y py-6" style={lineStyle}>
                <Fact label="OFFER"><p className="text-[11px] leading-[1.7] tracking-[0.14em]">{rupee(evt.price)} PER PHOTO<br />REGULAR {rupee(evt.mrp)}</p></Fact>
              </div>
            )}
          </div>
        </div>

        {/* B – timeline */}
        <ol className="relative md:col-start-2 md:row-span-2 md:row-start-1 md:pt-1">
          <span className="absolute bottom-12 left-23.75 top-2 w-px sm:left-32" style={{ background: ROSE }} aria-hidden="true" />
          {evt.items.map(([label, title, desc]) => (
            <li key={title} className="grid grid-cols-[88px_14px_minmax(0,1fr)] items-start sm:grid-cols-[120px_16px_minmax(0,1fr)]">
              <span className="pr-3 pt-px text-right text-[10px] leading-normal tracking-[0.12em] sm:text-[11px]">{label}</span>
              <span className="relative z-10 mx-auto mt-1 block h-2 w-2 rounded-full" style={{ background: ROSE }} />
              <div className="mb-7 border-b pb-7 pl-3 sm:pl-5" style={lineStyle}>
                <h4 className="text-[11px] font-medium uppercase leading-normal tracking-[0.12em] sm:text-[12px]">{title}</h4>
                <p className="mt-3 text-[12px] leading-[1.85] sm:text-[12.5px]" style={{ color: SOFT }}>{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* C – arch */}
        <div className="mx-auto w-[74%] max-w-75 md:col-start-1 md:row-span-2 md:row-start-2 md:-ml-14 md:mr-0 md:w-[calc(100%+56px)] md:max-w-none md:self-end md:pt-12">
          <div className="rounded-t-[999px] border-[1.5px] border-b-0 p-1.75 pb-0" style={{ borderColor: ROSE }}>
            <EventArt evt={evt} className="aspect-[4/4.7] rounded-t-[999px]" />
          </div>
        </div>

        {/* D – book */}
        <div
          className="sticky bottom-0 z-20 -mx-6 border-t px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10 md:static md:col-start-2 md:row-start-3 md:mx-0 md:px-0 md:py-8 md:backdrop-blur-none"
          style={{ ...lineStyle, background: `${PAPER}f2` }}
        >
          <BookLink href={wa} />
        </div>
      </div>
    </div>
  );
}

/* ---- template 2: elegant (simple, one-day, any perks) ---- */
function ElegantBody({ evt, wa }) {
  const [t1, t2] = evt.time.toUpperCase().split(" — ");
  return (
    <div className="px-6 pt-8 sm:px-10 sm:pt-10 md:px-14">
      <SheetHeader evt={evt} />

      <div className="mt-12 flex flex-col gap-14 md:mt-16 md:grid md:grid-cols-[minmax(0,40%)_minmax(0,1fr)] md:items-end md:gap-16">
        {/* arch photo */}
        <div className="mx-auto w-[68%] max-w-75 md:mx-0 md:-ml-14 md:w-[calc(100%+56px)] md:max-w-none">
          <div className="rounded-t-[999px] border-[1.5px] border-b-0 p-2 pb-0" style={{ borderColor: ROSE }}>
            <EventArt evt={evt} className="aspect-4/5 rounded-t-[999px]" />
          </div>
        </div>

        {/* content */}
        <div className="md:pb-12">
          <h2 className="font-['Cormorant_Garamond',serif] font-medium leading-[0.95] tracking-[-0.02em]" style={{ fontSize: "clamp(42px,9vw,78px)" }}>
            {evt.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h2>
          <span className="mt-9 block h-0.5 w-7" style={{ background: ROSE }} />
          <p className="mt-9 max-w-95 text-[13px] leading-[1.95]" style={{ color: SOFT }}>{evt.blurb}</p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 border-t pt-9 sm:grid-cols-3" style={lineStyle}>
            <Fact label="DATE"><DateFact evt={evt} /></Fact>
            <Fact label="TIME"><p className="text-[11px] leading-[1.7] tracking-[0.14em]">{t1}<br />TO {t2}</p></Fact>
            <Fact label="VENUE" className="col-span-2 sm:col-span-1">
              <p className="text-[11px] leading-[1.7] tracking-[0.14em]">{evt.place[0]}<br />{evt.place[1]}</p>
            </Fact>
          </div>

          {evt.price && (
            <div className="mt-10 flex items-end gap-5 border-y py-8" style={lineStyle}>
              <span className="font-['Cormorant_Garamond',serif] text-[52px] leading-[0.85]">{rupee(evt.price)}</span>
              <span className="pb-0.5 text-[11px] leading-[1.7] tracking-[0.16em]">PER PHOTO<br />REGULAR <s>{rupee(evt.mrp)}</s></span>
            </div>
          )}

          {evt.perks?.length > 0 && (
            <ul className="mt-10 space-y-7">
              {evt.perks.map(([t, d]) => (
                <li key={t} className="flex gap-5">
                  <span className="mt-1.75 h-1.75 w-1.75 shrink-0 rounded-full" style={{ background: ROSE }} />
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em]">{t}</p>
                    <p className="mt-2 text-[12.5px] leading-[1.85]" style={{ color: SOFT }}>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 hidden md:block"><BookLink href={wa} /></div>
        </div>
      </div>

      {/* mobile sticky CTA */}
      <div className="sticky bottom-0 z-20 -mx-6 mt-14 border-t px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10 md:hidden" style={{ ...lineStyle, background: `${PAPER}f2` }}>
        <BookLink href={wa} />
      </div>
    </div>
  );
}

function EventSheet({ evt, origin, onClosed }) {
  const [shown, setShown] = useState(false);
  const panelRef = useRef(null);
  const closing = useRef(false);

  /* open from the clicked row: transform-origin in panel coordinates */
  useLayoutEffect(() => {
    const p = panelRef.current;
    if (p && origin) p.style.transformOrigin = `${origin.x - p.offsetLeft}px ${origin.y - p.offsetTop}px`;
  }, [origin]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
    };
  }, []);

  const runClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    setShown(false);
    setTimeout(onClosed, 500);
  }, [onClosed]);

  const requestClose = useCallback(() => {
    if (window.history.state?.ev) window.history.back(); /* popstate -> runClose */
    else runClose();
  }, [runClose]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && requestClose();
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", runClose);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", runClose);
    };
  }, [requestClose, runClose]);

  const msg = `Hi Studio97! I'd like to book ${evt.title}${evt.price ? ` (${rupee(evt.price)} per photo)` : ""}.`;
  const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  const Body = evt.template === "poster" ? PosterBody : ElegantBody;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-6">
      {/* blurred (not black) backdrop */}
      <div
        onClick={requestClose}
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          backdropFilter: shown ? "blur(8px)" : "blur(0px)",
          WebkitBackdropFilter: shown ? "blur(8px)" : "blur(0px)",
          background: shown ? "rgba(13,13,13,0.18)" : "rgba(13,13,13,0)",
        }}
      />

      {/* panel: scales 0 -> 1 in 0.5s ok */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={evt.title}
        className={`relative max-h-[94dvh] w-full overflow-y-auto overscroll-contain rounded-[20px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)] scrollbar-none ${evt.template === "poster" ? "max-w-240" : "max-w-225"}`}
        style={{
          background: PAPER,
          color: INK,
          transform: shown ? "scale(1)" : "scale(0)",
          opacity: shown ? 1 : 0,
          transition: "transform 500ms cubic-bezier(.32,.72,0,1), opacity 500ms ease",
          willChange: "transform",
        }}
      >
        <div className="sticky top-0 z-30 h-0">
          <button
            onClick={requestClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border text-sm backdrop-blur transition duration-300 hover:rotate-90"
            style={{ borderColor: ROSE, background: `${PAPER}e6` }}
          >
            ✕
          </button>
        </div>
        <Body evt={evt} wa={wa} />
      </div>
    </div>
  );
}

/* ----------------------------- LIVE EVENTS ------------------------- */
function LiveEvents() {
  const [sheet, setSheet] = useState(null);

  const open = (evt, e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const origin = {
      x: Math.min(Math.max(r.left + r.width / 2, 0), window.innerWidth),
      y: Math.min(Math.max(r.top + r.height / 2, 0), window.innerHeight),
    };
    window.history.pushState({ ev: evt.id }, "");
    setSheet({ evt, origin });
  };

  return (
    <section className="border-t border-white/10 bg-[#0d0d0d] px-6 py-14 text-white sm:px-12 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <h2 className="text-xl font-light uppercase tracking-wide text-stone-200 sm:text-2xl">Live Events</h2>
        </div>

        <div className="divide-y divide-white/10">
          {CONTENT.events.map((evt) => (
            <article
              key={evt.id}
              onClick={(e) => open(evt, e)}
              className="group grid cursor-pointer grid-cols-1 items-center gap-6 py-8 sm:gap-8 sm:py-12 md:grid-cols-12"
            >
              {/* Date – single-day events show only the start date */}
              <div className="flex flex-row items-baseline justify-start gap-2 md:col-span-2 md:flex-col md:items-start md:gap-0">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 sm:text-xs">{evt.startMonth}</span>
                <span className="my-0.5 text-3xl font-light tracking-tight text-white sm:text-5xl">{evt.startDate}</span>
                {evt.endDateText && (
                  <>
                    <span className="text-stone-500 md:hidden" aria-hidden="true">—</span>
                    <div className="hidden py-0.5 text-xs font-light leading-none text-stone-500 md:block">|</div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400 sm:text-xs">{evt.endDateText}</span>
                  </>
                )}
              </div>

              <div className="aspect-16/10 w-full overflow-hidden rounded-lg border border-white/10 bg-stone-900 shadow-lg md:col-span-4">
                <EventArt evt={evt} className="h-full w-full" imgClass="transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>

              <div className="flex flex-col justify-center space-y-3 md:col-span-6 md:pl-2">
                <h3 className="text-xl font-normal text-stone-100 transition-colors group-hover:text-white sm:text-2xl">{evt.title}</h3>
                <p className="text-xs font-light leading-snug text-stone-400 sm:text-[13px]">
                  {evt.location} <br />
                  <span className="text-stone-500">{evt.time}</span>
                </p>
                <p className="max-w-lg text-xs font-light leading-relaxed text-stone-400 sm:text-[13px]">{evt.description}</p>
                <div className="border-t border-white/5 pt-2">
                  <button type="button" className="group/link inline-flex min-h-11 items-center gap-2 text-xs font-medium text-stone-300 transition-colors hover:text-white md:min-h-0">
                    <span>View Event Details</span>
                    <span className="text-sm transition-transform group-hover/link:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {sheet && <EventSheet key={sheet.evt.id} evt={sheet.evt} origin={sheet.origin} onClosed={() => setSheet(null)} />}
    </section>
  );
}

/* -------------------------------- PAGE ----------------------------- */
export default function EventPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] font-['DM_Sans',system-ui,sans-serif] text-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        .orbit-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: orbit 1.6s .3s ease-out forwards; }
        @keyframes orbit { to { stroke-dashoffset: 0; } }
        .marquee { animation: marquee 38s linear infinite; }
        @keyframes marquee { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .orbit-draw { animation: none; stroke-dashoffset: 0; }
          .marquee { animation: none; }
        }
      `}</style>
      <Hero />
      <Specialties />
      <LiveEvents />
    </main>
  );
}