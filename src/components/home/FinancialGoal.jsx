import { useState } from "react";

const cards = [
  {
    id: 1,
    image: "/magnific_futuristic-3d-meta-facebo_2972572110.png", // Meta 3D style
    alt: "Meta Facebook Ads",
    title: "Meta / Facebook Ads",
    category: "Targeted Social Campaigns",
    services: ["Audience Targeting", "Ad Creatives"],
    stack: ["Meta Ads", "Pixel Tracking"],
    description: "High-engagement Meta Ads campaigns designed to reach click-ready audiences.",
    stackColor: "rgba(0, 122, 255, 0.2)",
    stackTextColor: "#007AFF",
  },
  {
    id: 2,
    image: "/magnific_glowing-google-logo-and-a_2972577706.png", // Google G style
    alt: "Google Ads",
    title: "Google Ads",
    category: "High-Intent Traffic",
    services: ["Search Ads", "Performance Bidding"],
    stack: ["Google Ads", "Analytics"],
    description: "Conversion-first Google Ads strategies that capture demand from ready-to-buy searchers.",
    stackColor: "rgba(234, 67, 53, 0.2)",
    stackTextColor: "#EA4335",
  },
  {
    id: 3,
    image: "/magnific_futuristic-crm-automation_2972586956.png", // CRM/Growth
    alt: "CRM Automation",
    title: "CRM Automation",
    category: "Pipeline & Lead Management",
    services: ["Lead Scoring", "Workflow Alerts"],
    stack: ["HubSpot", "Zapier"],
    description: "Automated CRM workflows that move leads faster through the funnel.",
    stackColor: "rgba(255, 122, 0, 0.2)",
    stackTextColor: "#FF7A00",
  },
  {
    id: 4,
 image: "/magnific_glowing-green-whatsapp-lo_2972604451.png",
    title: "WhatsApp Automation",
    category: "Automated Customer Messaging",
    services: ["Chat Funnels", "Follow-up Bots"],
    stack: ["WhatsApp API", "CRM Sync"],
    description: "WhatsApp automation that delivers fast, personalized replies automatically.",
    stackColor: "rgba(37, 211, 102, 0.2)",
    stackTextColor: "#25D366",
  },
  {
    id: 5,
    image: "/Generated Image May 13, 2026 - 1_05PM.png", // Web Design/UI
    alt: "Website Design",
    title: "Website & Landing Page",
    category: "Conversion-Focused Design",
    services: ["Landing Pages", "UX Optimization"],
    stack: ["Webflow", "Figma"],
    description: "Landing pages built to capture attention and increase lead volume.",
    stackColor: "rgba(168, 85, 247, 0.2)",
    stackTextColor: "#A855F7",
  },
  {
    id: 6,
    image: "/futuristic_marketing_strategy_illustration_glowing_neon_target_with_arrow.png", // Strategy/Target
    alt: "Consultation",
    title: "Marketing Consultation",
    category: "Expert Growth Guidance",
    services: ["Strategy", "Roadmap"],
    stack: ["Growth Audit", "Campaign Planning"],
    description: "Strategic consultation that aligns your roadmap with revenue goals.",
    stackColor: "rgba(244, 63, 94, 0.2)",
    stackTextColor: "#F43F5E",
  },
];

function HoverCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-[440px] overflow-hidden rounded-[2.5rem] cursor-pointer bg-[#0a0a0a] border border-white/5 shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image with Zoom effect */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: hovered ? "scale(1.15)" : "scale(1)" }}
      >
        <img 
          src={card.image} 
          alt={card.alt} 
          className="w-full h-full object-cover opacity-60" 
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Top Label - Always visible or fades out on hover if preferred */}
      <div className={`absolute top-6 left-6 z-10 transition-opacity duration-300 ${hovered ? 'opacity-40' : 'opacity-100'}`}>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full bg-white/5 text-white/80 backdrop-blur-md border border-white/10 font-syne">
          {card.category}
        </span>
      </div>

      {/* Content Container - Slides Up */}
      <div
        className="absolute left-0 right-0 p-8 z-20 transition-all duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)]"
        style={{ 
          bottom: hovered ? "0px" : "-160px",
          background: hovered ? "linear-gradient(to top, rgba(0,0,0,0.95), transparent)" : "transparent"
        }}
      >
        <h3 className="text-white font-extrabold text-2xl mb-4 tracking-tight font-syne">
          {card.title}
        </h3>

        {/* Hover-only content */}
        <div className={`transition-all duration-500 delay-75 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap gap-2 mb-6">
            {card.services.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-xl text-[0.75rem] bg-white/10 text-white/90 border border-white/5 font-sans font-medium backdrop-blur-sm">
                {s}
              </span>
            ))}
            {card.stack.map((t) => (
              <span 
                key={t} 
                className="px-3 py-1.5 rounded-xl text-[0.75rem] font-bold border border-white/5"
                style={{ background: card.stackColor, color: card.stackTextColor }}
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-[0.95rem] text-white/60 leading-relaxed font-sans font-normal">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HoverRevealSection() {
  return (
    <div className="bg-[#fdfaff] min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .text-gradient {
          background: linear-gradient(135deg, #2D1B69 0%, #5B53FF 50%, #FF2D55 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section className="max-w-7xl mx-auto py-8 px-8">
        {/* Header Section from image_566258.jpg */}
        
        {/* Header Section */}
<div className="mb-8 flex flex-col items-center text-center">
  
  {/* Top Label */}
  <div className="flex items-center justify-center gap-3 mb-4">
    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.28em] uppercase text-[#5B53FF] font-syne">
      Marketing Services
    </span>
  </div>

  {/* Heading */}
  <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3.1rem)] leading-[1.04] tracking-[-0.06em] text-[#111827] max-w-[760px]">
    Growth-driven campaigns for every funnel stage,
    <br />
    <span className="bg-gradient-to-r from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
      from traffic to conversion.
    </span>
  </h2>

  {/* Description */}
  <p className="mt-5 text-[#111827]/55 text-[0.98rem] md:text-[1.05rem] max-w-[620px] leading-relaxed font-medium">
    Scalable performance marketing, AI-driven automation, and
    conversion-optimized design to 10x your business.
  </p>

</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <HoverCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}