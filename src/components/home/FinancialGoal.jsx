import { useState } from "react";

const cards = [
  {
    id: 1,
    image: "/metafacbook.wepb",
    alt: "Meta Facebook Ads",
    title: "Meta / Facebook Ads",
    category: "Targeted Social Campaigns",
    services: ["Audience Targeting", "Ad Creatives"],
    stack: ["Meta Ads", "Pixel Tracking"],
    description: "High-engagement Meta Ads campaigns designed to reach click-ready audiences.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/marketing-meta-ads-servish",
  },
  {
    id: 2,
    image: "/googleads.webp",
    alt: "Google Ads",
    title: "Google Ads",
    category: "High-Intent Traffic",
    services: ["Search Ads", "Performance Bidding"],
    stack: ["Google Ads", "Analytics"],
    description: "Conversion-first Google Ads strategies that capture demand from ready-to-buy searchers.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/google-ads-management",
  },
  {
    id: 3,
    image: "/CRM AUTOMATION.webp",
    alt: "CRM Automation",
    title: "CRM Automation",
    category: "Pipeline & Lead Management",
    services: ["Lead Scoring", "Workflow Alerts"],
    stack: ["HubSpot", "Zapier"],
    description: "Automated CRM workflows that move leads faster through the funnel.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/crm-automation",
  },
  {
    id: 4,
    image: "/whtsapp automation.webp",
    alt: "WhatsApp Automation",
    title: "WhatsApp Automation",
    category: "Automated Customer Messaging",
    services: ["Chat Funnels", "Follow-up Bots"],
    stack: ["WhatsApp API", "CRM Sync"],
    description: "WhatsApp automation that delivers fast, personalized replies automatically.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/seo-services",
  },
  {
    id: 5,
    image: "/Generated Image May 13, 2026 - 1_05PM.png",
    alt: "Website Design",
    title: "Website & Landing Page",
    category: "Conversion-Focused Design",
    services: ["Landing Pages", "UX Optimization"],
    stack: ["Webflow", "Figma"],
    description: "Landing pages built to capture attention and increase lead volume.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/google-my-business-services",
  },
  {
    id: 6,
    image: "/futuristic_marketing_strategy_illustration_glowing_neon_target_with_arrow.png",
    alt: "Consultation",
    title: "Marketing Consultation",
    category: "Expert Growth Guidance",
    services: ["Strategy", "Roadmap"],
    stack: ["Growth Audit", "Campaign Planning"],
    description: "Strategic consultation that aligns your roadmap with revenue goals.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "http://localhost:3000/services/marketing-meta-ads-servish",
  },
];

function ModernCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => (window.location.href = card.path)}
      className={`relative flex flex-col h-[520px] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] bg-white rounded-[8px] border-[3px] border-[#6400A1] overflow-hidden cursor-pointer transition-all duration-500 ${
        hovered
          ? "shadow-[0_24px_56px_rgba(100,0,161,0.15),0_4px_12px_rgba(0,0,0,0.06)] -translate-y-2 scale-[1.01]"
          : "shadow-[0_6px_32px_rgba(100,0,161,0.05),0_1px_4px_rgba(0,0,0,0.03)] translate-y-0 scale-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Illustration Area — Edge-to-edge with 1px border clearance */}
      <div className="relative flex items-center justify-center h-[210px] w-full px-1.5 py-4 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 border-b border-[#6400A1]/10">
        {/* Subtle radial glow behind image */}
        <div className="absolute w-[160px] h-[100px] rounded-full bg-[#6400A1]/8 blur-[32px] bottom-3 left-1/2 -translate-x-1/2" />

        {/* Floating shadow ellipse */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-2.5 rounded-full bg-[#6400A1]/12 blur-[4px]" />

        <img
          src={card.image}
          alt={card.alt}
          className={`relative z-10 h-[170px] w-full max-w-[calc(100%-12px)] object-contain drop-shadow-[0_12px_24px_rgba(100,0,161,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            hovered
              ? "-translate-y-1.5 scale-[1.02] rotate-[0.5deg]"
              : "translate-y-0 scale-100 rotate-0"
          }`}
        />
      </div>

      {/* Bottom Content Area */}
      <div
        className={`flex flex-col justify-between flex-1 px-6 pt-5 pb-6 transition-colors duration-500 ${
          hovered ? "bg-[#6400A1]" : "bg-white"
        }`}
      >
        {/* Title */}
        <h3
          className={`text-[20px] font-extrabold leading-[1.25] text-center tracking-[-0.01em] transition-colors duration-500 ${
            hovered ? "text-white" : "text-gray-900"
          }`}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[14px] font-semibold leading-[1.55] text-center transition-colors duration-500 ${
            hovered ? "text-fuchsia-100" : "text-gray-800"
          }`}
        >
          {card.description}
        </p>

        {/* Tags — Styled with black tabs/text when unhovered and inverted to white on hover */}
        <div className="flex flex-wrap justify-center gap-2">
          {card.services.map((s) => (
            <span
              key={s}
              className={`px-3.5 py-1 rounded-full text-[11px] font-bold border transition-all duration-500 ${
                hovered
                  ? "bg-white/15 text-white border-white/25"
                  : "bg-black text-white border-gray-800"
              }`}
            >
              {s}
            </span>
          ))}
          {card.stack.map((t) => (
            <span
              key={t}
              className={`px-3.5 py-1 rounded-full text-[11px] font-bold border transition-all duration-500 ${
                hovered
                  ? "bg-white/10 text-white border-white/15"
                  : "bg-black text-white border-gray-800"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Unified Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = card.path;
          }}
          className={`w-full py-3.5 rounded-[14px] text-[14px] font-extrabold tracking-[0.02em] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            hovered
              ? "bg-white text-[#6400A1] shadow-[0_6px_20px_rgba(0,0,0,0.12)] scale-[1.015]"
              : "bg-gradient-to-br from-[#6400A1] via-[#7b1fa2] to-[#8e24aa] text-white shadow-[0_4px_14px_rgba(100,0,161,0.3)] scale-100"
          }`}
        >
          {card.buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default function HoverRevealSection() {
  return (
    <div className="min-h-screen bg-[#fdfaff] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap');
      `}</style>

      <section className="max-w-7xl mx-auto py-12 px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase text-[#6400A1]">
              Marketing Services
            </span>
          </div>

          <h2 className="text-[30px] md:text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] max-w-[850px] text-gray-900">
            Smarter Growth Systems Built To{" "}
            <span className="bg-gradient-to-r from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent inline-block font-bold tracking-[-0.02em]">
              Generate, Convert & Scale
            </span>
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-[17px] font-medium leading-[1.6] max-w-3xl">
            From lead generation and CRM automation to high-converting
            funnels, we build systems designed to help businesses grow more
            efficiently.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ModernCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}