import { useRef, useState } from "react";


/* ─────────────────────────────────────────────
   SECTION 1 — Client Logos "Success Stories"
───────────────────────────────────────────── */
const logos = [
  // row 1
  [
    { name: "airbnb",       svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="30" y="28" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">✦ airbnb</text></svg> },
    { name: "care.",        svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="18" y="28" fontSize="20" fontWeight="700" fill="currentColor" fontFamily="serif">care.</text></svg> },
    { name: "Stanford",     svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="10" y="22" fontSize="13" fontWeight="600" fill="currentColor" fontFamily="serif">Stanford</text><text x="18" y="36" fontSize="11" fill="#c9cdd8" fontFamily="serif">University</text></svg> },
    { name: "SAP",          svg: <svg viewBox="0 0 120 40" className="w-full h-8"><rect x="8" y="6" width="54" height="28" rx="3" fill="currentColor"/><text x="16" y="27" fontSize="18" fontWeight="900" fill="#fff" fontFamily="sans-serif">SAP</text></svg> },
    { name: "segment",      svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="8" y="26" fontSize="11" fill="currentColor" fontFamily="sans-serif">⇌ twilio</text><text x="8" y="38" fontSize="13" fontWeight="700" fill="#c9cdd8" fontFamily="sans-serif">segment</text></svg> },
  ],
  // row 2
  [
    { name: "BRINKS",       svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="6" y="28" fontSize="14" fontWeight="800" fill="currentColor" letterSpacing="2" fontFamily="sans-serif">|||BRINKS</text></svg> },
    { name: "FASHIONPHILE",  svg: <svg viewBox="0 0 130 40" className="w-full h-8"><text x="4" y="27" fontSize="12" fontWeight="700" fill="currentColor" letterSpacing="1" fontFamily="sans-serif">FASHIONPHILE</text></svg> },
    { name: "Juniper",      svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="6" y="28" fontSize="17" fontWeight="500" fill="currentColor" fontFamily="serif" fontStyle="italic">Juniper</text><text x="62" y="28" fontSize="9" fill="#c9cdd8" fontFamily="sans-serif">networks</text></svg> },
    { name: "hotjar",       svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="8" y="28" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">⟋ hotjar</text></svg> },
    { name: "upwork",       svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="8" y="29" fontSize="20" fontWeight="900" fill="currentColor" fontFamily="sans-serif">upwork</text></svg> },
  ],
  // row 3
  [
    { name: "AdEspresso",   svg: <svg viewBox="0 0 130 40" className="w-full h-8"><text x="4" y="26" fontSize="13" fontWeight="600" fill="currentColor" fontFamily="serif" fontStyle="italic">AdEspresso</text><text x="4" y="37" fontSize="8" fill="#c9cdd8" fontFamily="sans-serif">by Hootsuite</text></svg> },
    { name: "lytx",         svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="14" y="28" fontSize="20" fontWeight="300" fill="currentColor" fontFamily="sans-serif">lytx</text></svg> },
    { name: "Wunderkind",   svg: <svg viewBox="0 0 130 40" className="w-full h-8"><rect x="4" y="8" width="118" height="24" rx="2" fill="currentColor"/><text x="14" y="26" fontSize="13" fontWeight="700" fill="#fff" fontFamily="sans-serif">Wunderkind</text></svg> },
    { name: "Justworks",    svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="6" y="28" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="sans-serif">Justworks</text></svg> },
    { name: "owning",       svg: <svg viewBox="0 0 120 40" className="w-full h-8"><text x="8" y="28" fontSize="17" fontWeight="400" fill="currentColor" fontFamily="sans-serif" letterSpacing="2">owning</text></svg> },
  ],
];

function SuccessStoriesSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

  <h2 className="heading-main text-[clamp(1.6rem,4vw,2.4rem)] text-[#0d1326] leading-tight flex flex-col items-center gap-1">

  <span className="md:whitespace-nowrap">
    We Have More <span className="highlight-span">Success Stories</span>
  </span>

  <span className="md:whitespace-nowrap">
    Than Other Agencies Have Clients
  </span>

</h2>

  <p className="body-copy text-[#444b5e] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed max-w-xl mx-auto mb-14">
    We help scrappy startups to massive brands, from straightforward products
    to ultra-complex services. See more case studies in{" "}
    <span className="text-[#eb8a80] font-medium">your free marketing plan.</span>
  </p>

  <div className="flex flex-col gap-10">
    {logos.map((row, ri) => (
      <div key={ri} className="grid grid-cols-5 gap-6 items-center justify-items-center">
        {row.map((logo) => (
          <div
            key={logo.name}
            className="w-full max-w-[120px] opacity-80 hover:opacity-100 transition-all duration-200 text-[#1a1a1a]"
          >
            {logo.svg}
          </div>
        ))}
      </div>
    ))}
  </div>

</div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 — Video Testimonials (Polaroid fan)
───────────────────────────────────────────── */
const videoSlots = [
  {
    id: 1,
    src: "/videos/testimonial-1.mp4",   // ← replace with your video path
    poster: "",                          // ← optional thumbnail image path
    name: "Alex M.",
    company: "Segment",
    rotate: "-5deg",
    zIndex: 10,
  },
  {
    id: 2,
    src: "/videos/testimonial-2.mp4",   // ← replace with your video path
    poster: "",
    name: "Sarah K.",
    company: "Care.com",
    rotate: "-2deg",
    zIndex: 20,
  },
  {
    id: 3,
    src: "/videos/testimonial-3.mp4",   // ← replace with your video path
    poster: "",
    name: "Priya N.",
    company: "Hotjar",
    rotate: "0deg",
    zIndex: 30,                          // front / active card
  },
  {
    id: 4,
    src: "/videos/testimonial-4.mp4",   // ← replace with your video path
    poster: "",
    name: "Lin W.",
    company: "SAP",
    rotate: "2deg",
    zIndex: 20,
  },
  {
    id: 5,
    src: "/videos/testimonial-5.mp4",   // ← replace with your video path
    poster: "",
    name: "Jake R.",
    company: "Upwork",
    rotate: "5deg",
    zIndex: 10,
  },
];

function VideoCard({ slot, isActive, onClick }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transition-all duration-300"
      style={{
        transform: `rotate(${slot.rotate}) ${isActive ? "scale(1.07)" : "scale(0.96)"}`,
        zIndex: isActive ? 40 : slot.zIndex,
        position: "relative",
      }}
    >
      {/* Polaroid frame */}
      <div
        className="overflow-hidden rounded-[3px] bg-white"
        style={{
          padding: "7px 7px 36px",
          boxShadow: isActive
            ? "0 20px 48px rgba(0,0,0,0.22)"
            : "0 4px 18px rgba(0,0,0,0.12)",
          width: "100%",
        }}
      >
        {/* Video container */}
        <div className="relative overflow-hidden rounded-[2px] bg-[#1a1d37]" style={{ aspectRatio: "3/4" }}>
          {/* ── VIDEO TAG ── src is set from videoSlots array above ── */}
          <video
            ref={videoRef}
            src={slot.src}
            poster={slot.poster || undefined}
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            onEnded={() => setPlaying(false)}
          />

          {/* dark overlay when not playing */}
          {!playing && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* play/pause button */}
          <button
            onClick={togglePlay}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-white/20 backdrop-blur-sm transition-transform hover:scale-110"
          >
            {playing ? (
              /* pause icon */
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              /* play icon */
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* polaroid caption */}
        <p
          className="mt-1 truncate text-center text-[10px] font-semibold text-[#596184]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {slot.name} · {slot.company}
        </p>
      </div>
    </div>
  );
}

function TestimonialsWallSection() {
  const [activeId, setActiveId] = useState(3);

  return (
    <section className="border-t border-[#dfe2e8] bg-[#ececef] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1120px]">

        {/* desktop fan layout */}
        <div className="hidden lg:flex items-end justify-center gap-[-12px] relative" style={{ height: 420 }}>
          {videoSlots.map((slot) => (
            <div
              key={slot.id}
              onClick={() => setActiveId(slot.id)}
              style={{
                width: 230,
                marginLeft: slot.id === 1 ? 0 : -16,
                position: "relative",
                zIndex: activeId === slot.id ? 40 : slot.zIndex,
                alignSelf: "center",
              }}
            >
              <VideoCard
                slot={slot}
                isActive={activeId === slot.id}
                onClick={() => setActiveId(slot.id)}
              />
            </div>
          ))}

          {/* handwritten note */}
          {/* <div
            className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[170px] text-right leading-snug text-[#2a2f45] ml-8"
            style={{ fontFamily: "Caveat, cursive", fontSize: "1.15rem" }}
          >
            We got unlimited references <br/> for you to talk to too 
            <br />
            <span style={{ fontSize: "1.4rem" }}>↙</span>
          </div> */}

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 ml-8 pl-6">

  {/* 🖼 Image */}
  <img
    src="/note.png"   // 👈 apni image
    alt="note"
    className="w-[140px] object-contain"
  />

  {/* ✏️ Editable Text */}
  <p
    contentEditable
    suppressContentEditableWarning
    className="text-right text-[#2a2f45] max-w-[180px] outline-none"
    style={{ fontFamily: "Caveat, cursive", fontSize: "1.1rem" }}
  >
    We got unlimited references for you to talk to too ↙
  </p>

</div>
        </div>

        {/* mobile grid layout */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {videoSlots.map((slot) => (
            <VideoCard
              key={slot.id}
              slot={{ ...slot, rotate: "0deg" }}
              isActive={false}
              onClick={() => {}}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   SECTION 3 — G2 Grid Chart
───────────────────────────────────────────── */
const competitors = [
  { x: 12, y: 72 }, { x: 24, y: 58 }, { x: 32, y: 65 }, { x: 18, y: 42 },
  { x: 28, y: 50 }, { x: 55, y: 70 }, { x: 42, y: 55 }, { x: 60, y: 62 },
  { x: 15, y: 28 }, { x: 38, y: 35 }, { x: 22, y: 18 }, { x: 48, y: 42 },
  { x: 65, y: 50 }, { x: 72, y: 38 }, { x: 50, y: 22 }, { x: 35, y: 15 },
];

function ImageSectionn() {
  return (
    <section className="bg-[#f4f5f7] py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 🔥 Main Image */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm">
          <img
            src="/secusse.svg"
            alt="Case Study"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔥 Logos below image */}
        <div className="flex items-center justify-center gap-6 mt-6">

          <img
            src="/logo1.png"   // 👈 logo 1
            alt="logo1"
            className="h-10 sm:h-12 object-contain opacity-70 hover:opacity-100 transition"
          />

          <img
            src="/logo2.png"   // 👈 logo 2
            alt="logo2"
            className="h-10 sm:h-12 object-contain opacity-70 hover:opacity-100 transition"
          />

        </div>

        {/* 🔥 Content */}
      

      </div>
    </section>
  );
}





/* ─── KPI CHART SVG ─────────────────────────────────────────── */
// Animated area chart matching the reference image
function KpiChart() {
  // Data points for KPI% (blue) and Time% (coral/red)
  // x: 0–100%, y: 0–100% (bottom=0, top=100)
  const months = ["Month 1", "Month 2", "Month 3"];

  // KPI% values per tick: 9,9,11,21,33,53,60,76,81,99,109,118
  const kpiPts = [
    [0,9],[8,9],[16,11],[25,21],[33,33],[42,53],
    [50,60],[58,76],[66,81],[75,99],[83,109],[100,118],
  ];
  // Time% values: 9,17,25,33,40,48,56,64,72,80,89,96,100
  const timePts = [
    [0,9],[8,17],[16,25],[25,33],[33,40],[42,48],
    [50,56],[58,64],[66,72],[75,80],[83,89],[91,96],[100,100],
  ];

  const W = 460, H = 280, PL = 46, PR = 10, PT = 20, PB = 40;
  const cw = W - PL - PR, ch = H - PT - PB;
  const maxY = 130;

  const toX = (pct) => PL + (pct / 100) * cw;
  const toY = (val) => PT + ch - (val / maxY) * ch;

  const kpiPath = kpiPts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${toX(x)},${toY(y)}`).join(" ");
  const timePath = timePts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${toX(x)},${toY(y)}`).join(" ");

  // Area fills
  const kpiArea = `${kpiPath} L${toX(100)},${toY(0)} L${toX(0)},${toY(0)} Z`;
  const timeArea = `${timePath} L${toX(100)},${toY(0)} L${toX(0)},${toY(0)} Z`;

  // Y-axis ticks
  const yTicks = [0, 25, 50, 75, 100, 125];

  // Labels on data points (every other)
  const kpiLabels = kpiPts.filter((_, i) => i % 2 === 0);
  const timeLabels = timePts.filter((_, i) => i % 2 === 0 && i > 0);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="kpiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5bb5d5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5bb5d5" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="timeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8a898" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#e8a898" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* y-axis grid lines + labels */}
      {yTicks.map((v) => (
        <g key={v}>
          <line
            x1={PL} y1={toY(v)} x2={W - PR} y2={toY(v)}
            stroke="#dde0e8" strokeWidth="1" strokeDasharray={v === 0 ? "0" : "3 3"}
          />
          <text
            x={PL - 6} y={toY(v) + 4}
            textAnchor="end" fontSize="9" fill="#9098b0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {v}%
          </text>
        </g>
      ))}

      {/* month dividers */}
      {[33, 66].map((pct) => (
        <line
          key={pct}
          x1={toX(pct)} y1={PT} x2={toX(pct)} y2={PT + ch}
          stroke="#dde0e8" strokeWidth="1" strokeDasharray="3 3"
        />
      ))}

      {/* Time area (behind) */}
      <path d={timeArea} fill="url(#timeGrad)" />
      {/* KPI area (front) */}
      <path d={kpiArea} fill="url(#kpiGrad)" />

      {/* Time line */}
      <path d={timePath} fill="none" stroke="#e07060" strokeWidth="2.5" strokeLinejoin="round" />
      {/* KPI line */}
      <path d={kpiPath} fill="none" stroke="#3da0c8" strokeWidth="2.5" strokeLinejoin="round" />

      {/* KPI labels (blue bubbles) */}
      {kpiLabels.map(([x, y], i) => (
        <g key={i}>
          <rect
            x={toX(x) - 14} y={toY(y) - 18}
            width="28" height="14" rx="3"
            fill="#3da0c8"
          />
          <text
            x={toX(x)} y={toY(y) - 8}
            textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {y}%
          </text>
          <line x1={toX(x)} y1={toY(y) - 4} x2={toX(x)} y2={toY(y)} stroke="#3da0c8" strokeWidth="1" />
          <circle cx={toX(x)} cy={toY(y)} r="3" fill="#3da0c8" />
        </g>
      ))}

      {/* Time labels (coral bubbles) */}
      {timeLabels.map(([x, y], i) => (
        <g key={i}>
          <rect
            x={toX(x) - 14} y={toY(y) + 6}
            width="28" height="14" rx="3"
            fill="#e07060"
          />
          <text
            x={toX(x)} y={toY(y) + 16}
            textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {y}%
          </text>
          <line x1={toX(x)} y1={toY(y)} x2={toX(x)} y2={toY(y) + 6} stroke="#e07060" strokeWidth="1" />
          <circle cx={toX(x)} cy={toY(y)} r="3" fill="#e07060" />
        </g>
      ))}

      {/* Month labels */}
      {months.map((m, i) => (
        <text
          key={m}
          x={toX(i === 0 ? 16 : i === 1 ? 50 : 83)}
          y={PT + ch + 28}
          textAnchor="middle" fontSize="9" fill="#7a82a0"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {m}
        </text>
      ))}

      {/* Legend */}
      <rect x={PL + 10} y={PT + 4} width="10" height="10" rx="2" fill="#3da0c8" />
      <text x={PL + 24} y={PT + 13} fontSize="9" fill="#596184" style={{ fontFamily: "Inter, sans-serif" }}>KPI %</text>
      <rect x={PL + 68} y={PT + 4} width="10" height="10" rx="2" fill="#e07060" />
      <text x={PL + 82} y={PT + 13} fontSize="9" fill="#596184" style={{ fontFamily: "Inter, sans-serif" }}>Time %</text>

      {/* Handwritten annotation */}
      <text
        x={toX(38)} y={toY(64)}
        fontSize="9" fill="#596184" textAnchor="middle"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        The KPI % should always
      </text>
      <text
        x={toX(38)} y={toY(55)}
        fontSize="9" fill="#596184" textAnchor="middle"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        be above the Time %
      </text>
      <path
        d={`M${toX(46)},${toY(50)} C${toX(48)},${toY(45)} ${toX(50)},${toY(43)} ${toX(51)},${toY(47)}`}
        fill="none" stroke="#596184" strokeWidth="1.2"
        markerEnd="url(#arrow)"
      />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#596184" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── GOALS / KPI SECTION ────────────────────────────────────── */
const infoCards = [
  {
    title: "KPI % vs Time %",
    desc: "Goals dictate action. Tracking goal pace against time is the best way to see what type of action (big or small) to take.",
  },
  {
    title: "True Performance",
    desc: "If a service doesn't hit your goals, we'll remove it, no questions asked. We keep a healthy pressure on ourselves to do what's best for you. Always.",
  },
  {
    title: "Goals Hit = Time To Scale",
    desc: "Let's figure out where additional budget is best spent. Good thing we're super proactive & already have the financial math ready for you.",
  },
];

function GoalsSection() {
  return (
    <section className="border-t border-[#dfe2e8] bg-[#ececef] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">

        {/* Top: handwritten note + headline */}
        <div className="relative mb-10 flex flex-col items-center text-center">
          {/* Handwritten side note — desktop only */}
   <div className="absolute left-0 top-0 -translate-x-full hidden lg:flex flex-col items-start">

  <img
    src="/heading-doodle-text-desktop.b6a67da0.svg"
    alt="note"
    className="w-[180px] drop-shadow-md rotate-[-3deg] ml-20 mt-6"
  />

</div>
       <h2 className="heading-main text-[clamp(2rem,5vw,3.2rem)] text-[#0d1326] leading-tight flex flex-col items-center gap-1">

  <span className="md:whitespace-nowrap">
    Does Your Marketing Agency
  </span>

  <span className="md:whitespace-nowrap">
    <span className="bg-[#020711] text-white px-2 py-0.5 rounded-sm">
      Hit Goals
    </span>
    , Consistently? Didn&apos;t Think So
  </span>

</h2>

<p
  className="body-copy mx-auto mt-4 max-w-[620px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-[#3a4257]"
  style={{ fontWeight: 500 }}
>
  All our clients & all our services have business goals, and we'll add more resources for
  free if we're pacing behind. See how in{" "}
  <span className="font-semibold text-[#eb8a80]">your free marketing plan.</span>
</p>
        </div>

        {/* Bottom: chart left + info cards right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">

          {/* LEFT — chart box */}
          <div
            className="flex-1 rounded-2xl border-2 border-[#d0d4e0] bg-white p-5 shadow-sm"
            style={{ minWidth: 0 }}
          >
            {/*
             * ── IMAGE SLOT ──
             * Agar aap apna khud ka chart image lagana chahte ho toh
             * neeche wali <KpiChart /> component ko comment out karke
             * apna <img> tag yahan paste kar do:
             *
             * <img src="/images/kpi-chart.png" alt="KPI Chart"
             *      className="w-full h-full object-contain" />
             *
             * Filhaal SVG chart dikh raha hai jab tak image nahi lagaate.
             */}
            <KpiChart />
          </div>

          {/* RIGHT — 3 info cards */}
          <div className="flex flex-col gap-4 lg:w-[300px] lg:shrink-0">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border-2 border-[#d0d4e0] bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <p
                  className="mb-2 text-sm font-extrabold text-[#0d1326]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {card.title}
                </p>
                <p
                  className="text-xs leading-relaxed text-[#4a5168]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── MARKETING INNOVATION SECTION ───────────────────────────── */
const marketingEpisodes = [
  {
    title: "Stop Wasting Budget on B2B Ads in 2026 (This Strategy That Actually Drives Pipeline)",
    desc: "Most B2B SaaS companies are burn cash on their paid...",
    time: "29:37",
  },
  {
    title: "Hit Impossible Pipeline Targets with Segmented LinkedIn Ads Campaigns",
    desc: "Q4 has arrived with impossible pipeline targets and...",
    time: "20:45",
  },
  {
    title: "How to Track Traffic That Actually Predicts Pipeline | Episode 019",
    desc: "Most B2B marketers obsess over website traffic...",
    time: "13:31",
  },
   {
    title: "How to Track Traffic That Actually Predicts Pipeline | Episode 019",
    desc: "Most B2B marketers obsess over website traffic...",
    time: "17:31",
  },
];

function MarketingInnovationSection() {
  return (
    <section className="border-t border-[#dfe2e8] bg-[#ececef] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative mb-10 text-center">
          {/* <div className="absolute right-0 top-0 hidden translate-x-[10%] -translate-y-[10%] lg:block">
            <img
              src="/heading-doodle-text-desktop.b6a67da0.svg"
              alt="marketing note"
              className="w-[220px]"
            />
          </div> */}

         <h2 className="heading-main text-[clamp(2rem,5vw,3.2rem)] text-[#0d1326] leading-tight flex flex-col items-center gap-1">

  <span className="md:whitespace-nowrap">
    We Published The Recipe Book
  </span>

  <span className="md:whitespace-nowrap">
    Around{" "}
    <span className="bg-[#020711] text-white px-2 py-0.5 rounded-sm">
      Marketing Innovation
    </span>
  </span>

</h2>

<p
  className="body-copy mx-auto mt-4 max-w-[700px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-[#3a4257]"
  style={{ fontWeight: 500 }}
>
  The only marketing kitchen that keeps producing the freshest, most innovate marketing recipes.
  See the latest recipes in{" "}
  <span className="font-semibold text-[#eb8a80]">your free marketing plan.</span>
</p>
        </div>

        <div className="rounded-2xl border border-[#d9dde6] bg-[#f8f9fb] p-4 shadow-sm sm:p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Left media area */}
            <div className="overflow-hidden rounded-xl border border-[#d7dbe4] bg-white">
              <img
  src="/klientboost-kitchen-podcast-cover_1500x1500.webp"
  alt="Marketing Innovation"
  className="h-full min-h-[200px] w-full object-cover"
/>
            </div>

            {/* Right playlist cards */}
            <div className="flex flex-col gap-3">
              {marketingEpisodes.map((ep) => (
                <div
                  key={ep.title}
                  className="rounded-xl border border-[#dde1ea] bg-[#f2f4f8] p-3"
                >
                  <p className="text-[clamp(.88rem,1vw,.98rem)] font-extrabold leading-snug text-[#0d1326]">
                    {ep.title}
                  </p>
                  <p className="mt-1 text-[0.84rem] text-[#4e556d]">
                    {ep.desc} <span className="text-[#eb8a80]">(Read more)</span>
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0d1326] text-white">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="h-[2px] flex-1 bg-[#c8cfdb]" />
                    <span className="text-[0.72rem] text-[#9aa2b5]">{ep.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* platform logos/buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white">LISTEN ON Apple Podcasts</div>
            <div className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white">LISTEN ON Spotify</div>
            <div className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white">WATCH ON YouTube</div>
          </div>
        </div>
      </div>
    </section>
  );
}








/* ─────────────────────────────────────────────
   ROOT EXPORT — all 4 sections together
───────────────────────────────────────────── */
export default function MarketingSections() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@700;800&family=Caveat:wght@500;700&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        * { box-sizing: border-box; }
      `}</style>
      <div className="body-copy">
        <SuccessStoriesSection />
        <TestimonialsWallSection />
        <ImageSectionn />
          <GoalsSection/>
        <MarketingInnovationSection />
        {/* <ImageSection /> */}
      </div>
    </>
  );
}
