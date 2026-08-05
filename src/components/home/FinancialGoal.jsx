import { useState } from "react";

const cards = [
  {
    id: 1,
    image: "/Meta  and facebook ads_new.png",
    alt: "Meta Facebook Ads",
    title: "Meta / Facebook Ads",
    category: "Targeted Social Campaigns",
    services: ["Audience Targeting", "Ad Creatives"],
    stack: ["Meta Ads", "Pixel Tracking"],
    description: "High-engagement Meta Ads campaigns designed to reach click-ready audiences.",
    stackColor: "bg-black",
    stackTextColor: "text-white",
    buttonLabel: "Read More",
    path: "https://www.10xbizz.com/services/marketing-meta-ads-servish",
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
    path: "https://www.10xbizz.com/services/google-ads-management",
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
    path: "https://www.10xbizz.com/services/crm-automation",
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
    path: "https://www.10xbizz.com/services/seo-services",
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
    path: "https://www.10xbizz.com/services/google-my-business-services",
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
    path: "https://www.10xbizz.com/services/marketing-meta-ads-servish",
  },
];

function ModernCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => (window.location.href = card.path)}
      className={`relative flex flex-col h-[550px] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] bg-white rounded-[16px] border border-[#6400A1]/20 overflow-hidden cursor-pointer transition-all duration-400 ${
        hovered
          ? "shadow-[0_20px_50px_rgba(100,0,161,0.18)] -translate-y-1.5"
          : "shadow-[0_4px_20px_rgba(100,0,161,0.04)] translate-y-0"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Illustration Area — Clean, stable frame with zero zoom/scale motion */}
      <div className="relative flex items-center justify-center h-[240px] w-full overflow-hidden bg-gradient-to-br from-purple-50/70 via-white to-fuchsia-50/50 border-b border-[#6400A1]/10">
        <img
          src={card.image}
          alt={card.alt}
          className="relative z-10 w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Bottom Content Area */}
      <div
        className={`flex flex-col justify-between flex-1 px-6 pt-5 pb-6 transition-colors duration-400 ${
          hovered ? "bg-[#6400A1]" : "bg-white"
        }`}
      >
        {/* Title */}
        <h3
          className={`text-[20px] font-extrabold leading-[1.25] text-center tracking-[-0.01em] transition-colors duration-400 ${
            hovered ? "text-white" : "text-gray-900"
          }`}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[14px] font-medium leading-[1.55] text-center transition-colors duration-400 ${
            hovered ? "text-fuchsia-100" : "text-gray-600"
          }`}
        >
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {card.services.map((s) => (
            <span
              key={s}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all duration-400 ${
                hovered
                  ? "bg-white/15 text-white border-white/20"
                  : "bg-gray-100 text-gray-800 border-gray-200"
              }`}
            >
              {s}
            </span>
          ))}
          {card.stack.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all duration-400 ${
                hovered
                  ? "bg-white/10 text-white border-white/15"
                  : "bg-gray-100 text-gray-800 border-gray-200"
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
          className={`w-full py-3.5 rounded-[12px] text-[14px] font-bold tracking-[0.01em] transition-all duration-300 ${
            hovered
              ? "bg-white text-[#6400A1] shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              : "bg-[#6400A1] text-white shadow-[0_4px_12px_rgba(100,0,161,0.25)] hover:bg-[#520084]"
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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
      `}</style>

      <section className="max-w-7xl mx-auto py-16 px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[11px] md:text-[12px] font-bold tracking-[0.08em] uppercase text-[#6400A1] bg-[#6400A1]/10 px-3 py-1 rounded-full">
              Marketing Services
            </span>
          </div>

          <h2 className="text-[30px] md:text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] max-w-[850px] text-gray-900">
            Smarter Growth Systems Built To{" "}
            <span className="bg-gradient-to-r from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent inline-block font-extrabold">
              Generate, Convert & Scale
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-[17px] font-medium leading-[1.6] max-w-3xl">
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
