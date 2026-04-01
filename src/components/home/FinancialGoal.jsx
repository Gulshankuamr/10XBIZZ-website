import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "CRM Automation",
    desc: "Replace manual data entry with intelligent, triggered workflows that move leads through your pipe instantly.",
    bg: "bg-[#44007008] hover:bg-[#44007014]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(68,0,112,0.13)]",
    corner: "bg-[#44007018]",
    iconBg: "bg-[#44007018]",
    iconStroke: "#6400A1",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>
      </svg>
    ),
    footer: (
      <div className="flex gap-2 items-center mt-5">
        <div className="h-[5px] flex-1 bg-[#44007015] rounded-full"><div className="h-[5px] w-[70%] bg-[#6400A1] rounded-full"/></div>
        <div className="h-[5px] flex-1 bg-[#44007015] rounded-full"><div className="h-[5px] w-[45%] bg-[#9B40CC] rounded-full"/></div>
        <div className="h-[5px] flex-1 bg-[#44007015] rounded-full"><div className="h-[5px] w-[85%] bg-[#6400A1] rounded-full"/></div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Lead Gen",
    desc: "Targeted multi-channel acquisition that fills your funnel with high-intent prospects daily.",
    bg: "bg-[#BB000F0D] hover:bg-[#BB000F18]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(187,0,15,0.13)]",
    corner: "bg-[#BB000F1A]",
    iconBg: "bg-[#BB000F18]",
    iconStroke: "#BB000F",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    footer: (
      <div className="flex gap-2 items-center mt-5">
        {["#BB000F26","#BB000F40","#BB000F59"].map((bg, i) => (
          <div key={i} className="w-[30px] h-[30px] rounded-full flex items-center justify-center" style={{ background: bg }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2"><circle cx="12" cy="12" r="9"/></svg>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    title: "WhatsApp Flow",
    desc: "Interactive AI-driven chat sequences that qualify and convert customers where they already live.",
    bg: "bg-[#F0FDF4] hover:bg-[#dcfce7]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(34,197,94,0.13)]",
    corner: "bg-[#22C55E22]",
    iconBg: "bg-[#bbf7d0]",
    iconStroke: "#16a34a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    footer: (
      <div className="mt-5">
        <div className="bg-white rounded-xl px-3 py-2 inline-block border border-[#dcfce7]">
          <p className="text-xs text-[#667085] m-0">I need a quote...</p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Funnel Design",
    desc: "Psychology-backed conversion paths designed to reduce friction and maximize average order value.",
    bg: "bg-[#FEFCE8] hover:bg-[#fef9c3]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(234,179,8,0.13)]",
    corner: "bg-[#EAB30822]",
    iconBg: "bg-[#fde68a]",
    iconStroke: "#b45309",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
      </svg>
    ),
    footer: (
      <div className="flex gap-[5px] items-end h-8 mt-5">
        {[16,24,32,20,28].map((h,i) => (
          <div key={i} className="w-[11px] rounded-t-sm" style={{ height: h, background: ["#fde68a","#fbbf24","#f59e0b","#fbbf24","#d97706"][i] }}/>
        ))}
      </div>
    ),
  },
  {
    id: 5,
    title: "Ad Management",
    desc: "Data-driven performance marketing across Meta, Google, and LinkedIn for maximum ROI.",
    bg: "bg-[#EFF6FF] hover:bg-[#dbeafe]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(59,130,246,0.13)]",
    corner: "bg-[#3B82F622]",
    iconBg: "bg-[#bfdbfe]",
    iconStroke: "#1d4ed8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    footer: (
      <div className="flex gap-[5px] items-end h-8 mt-5">
        {[18,26,32,22,29].map((h,i) => (
          <div key={i} className="w-[13px] rounded-t-sm" style={{ height: h, background: ["#bfdbfe","#93c5fd","#60a5fa","#93c5fd","#3b82f6"][i] }}/>
        ))}
      </div>
    ),
  },
  {
    id: 6,
    title: "Custom Architecture",
    desc: "Bespoke software integrations and tailored stack development for enterprise-scale operations.",
    bg: "bg-[#F5F3FF] hover:bg-[#ede9fe]",
    hoverShadow: "hover:shadow-[0_20px_48px_rgba(124,58,237,0.13)]",
    corner: "bg-[#7C3AED22]",
    iconBg: "bg-[#ddd6fe]",
    iconStroke: "#7c3aed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
        <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
        <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
        <line x1="17" y1="16" x2="23" y2="16"/>
      </svg>
    ),
    footer: (
      <div className="flex gap-[6px] items-center mt-5">
        <div className="h-[5px] flex-1 bg-[#ddd6fe] rounded-full"/>
        <div className="h-[5px] flex-[2] bg-[#c4b5fd] rounded-full"/>
        <div className="h-[5px] flex-1 bg-[#a78bfa] rounded-full"/>
      </div>
    ),
  },
];

export default function CoreArchitecture() {
  const [hovered, setHovered] = useState(null);

  return (
    // ✅ FIX 1: bg white
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1216px]">

        {/* ✅ Header — minHeight 116, space-between */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10"
          style={{ minHeight: 116 }}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#111] tracking-tight mb-2 leading-tight text-left">
              Core Architecture
            </h2>
            {/* ✅ FIX 3: text-justify + textAlignLast left */}
            <p
              className="text-sm text-[#667085] max-w-[480px] leading-relaxed text-justify"
              style={{ textAlignLast: "left" }}
            >
              Each module is built to integrate flawlessly, creating a singular,
              cohesive revenue generation engine.
            </p>
          </div>

          {/* ✅ FIX 2: <a> tag properly closed */}
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#6400A1] border border-[#6400A130] bg-white hover:bg-[#6400A108] transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Explore Technical Specs
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              {"→"}
            </span>
          </a>
        </div>

        {/* ✅ FIX 4: gap-5 for better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative rounded-[20px] p-7 overflow-hidden flex flex-col min-h-[230px]
                transition-all duration-[220ms] ease-out cursor-pointer
                ${card.bg} ${card.hoverShadow}
                hover:-translate-y-[6px] hover:scale-[1.01]
              `}
            >
              {/* Corner blob */}
              <div
                className={`absolute w-[120px] h-[120px] rounded-full -top-8 -right-8 pointer-events-none transition-all duration-300 ${card.corner}`}
                style={{
                  transform: hovered === card.id ? "scale(1.2)" : "scale(1)",
                  opacity: hovered === card.id ? 0.85 : 1,
                }}
              />

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-[18px] flex-shrink-0 transition-transform duration-200 ${card.iconBg}`}
                style={{
                  color: card.iconStroke,
                  transform: hovered === card.id ? "scale(1.1)" : "scale(1)",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-[#111] mb-2 tracking-[-0.2px] text-left">
                {card.title}
              </h3>

              {/* ✅ FIX 3: description justify */}
              <p
                className="text-[13px] text-[#667085] leading-[1.65] flex-1 text-justify"
                style={{ textAlignLast: "left" }}
              >
                {card.desc}
              </p>

              {card.footer}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}