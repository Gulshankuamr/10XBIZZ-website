import React from "react";
import { Award, Briefcase, ShieldCheck } from "lucide-react";

// ─── DATA ARRAYS WITH LOGOS & DESCRIPTIONS ──────────────────────────────────
const FEATURED_LOGOS = [
  { name: "KAROSTARTUP", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop", desc: "Media Coverage" },
  { name: "Jagran Josh", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&auto=format&fit=crop", desc: "Education News" },
  { name: "NEWS 18", src: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=200&auto=format&fit=crop", desc: "National Feature" },
  { name: "ZEE NEWS", src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=200&auto=format&fit=crop", desc: "Prime Time News" },
  { name: "dailyhunt", src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=200&auto=format&fit=crop", desc: "Digital Press" },
];

const B2B_LOGOS = [
  { name: "E2", src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop", desc: "Tech Partner" },
  { name: "Futuristic Media", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop", desc: "Growth Agency" },
  { name: "di", src: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=200&auto=format&fit=crop", desc: "Design Studio" },
  { name: "Expand My Biz", src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=200&auto=format&fit=crop", desc: "B2B Solutions" },
  { name: "KAN IMAGINE", src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=200&auto=format&fit=crop", desc: "Creative Team" },
];

const LEADING_BRANDS = [
  { name: "SHOGHI", src: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=200&auto=format&fit=crop", desc: "Enterprise Client" },
  { name: "PR Nation", src: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=200&auto=format&fit=crop", desc: "PR Network" },
  { name: "ZOFF", src: "https://images.unsplash.com/photo-1509721148460-6197a5d50c69?q=80&w=200&auto=format&fit=crop", desc: "FMCG Brand" },
  { name: "ALLIANCE", src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop", desc: "Global Ventures" },
  { name: "glow right", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=200&auto=format&fit=crop", desc: "Wellness Co." },
  { name: "Nurtureplus", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=200&auto=format&fit=crop", desc: "Healthcare Tech" },
  { name: "Ghar Ka Khana", src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop", desc: "Food Logistics" },
  { name: "Wodreams", src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=200&auto=format&fit=crop", desc: "E-Commerce" },
  { name: "SHWETA GAURI", src: "https://images.unsplash.com/photo-1534774592507-488885376ad3?q=80&w=200&auto=format&fit=crop", desc: "Luxury Fashion" },
  { name: "UpInvest", src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=200&auto=format&fit=crop", desc: "Fintech App" }
];

// ─── REUSABLE LOGO CARD COMPONENT WITH LOGO & DESCRIPTION ──────────────────
const LogoCard = ({ item }) => (
  <div className="group relative w-full h-[85px] bg-white rounded-xl flex items-center p-3 transition-all duration-300 cursor-pointer font-['Montserrat',ui-sans-serif,system-ui,sans-serif] shadow-sm hover:shadow-md overflow-hidden">
    
    {/* Base Black Border Layer */}
    <div className="absolute inset-0 border-2 border-black rounded-xl group-hover:opacity-0 transition-opacity duration-300 z-10" />

    {/* Premium Gradient Hover Border Layer */}
    <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-[#6400A1] to-[#BB000F] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-full bg-white rounded-[10px]" />
    </div>

    {/* Content Grid Layout inside Card */}
    <div className="relative z-20 flex items-center gap-3 w-full h-full">
      {/* Left Area: Logo Image */}
      <div className="w-[45px] h-[45px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center border border-gray-100">
        <img 
          src={item.src} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      {/* Right Area: Text & Dynamic Subtitle Description */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <span className="text-black font-extrabold text-[12px] tracking-tight truncate leading-tight group-hover:text-[#6400A1] transition-colors">
          {item.name}
        </span>
        <span className="text-[10px] text-gray-500 font-medium truncate mt-0.5 group-hover:text-gray-700 transition-colors">
          {item.desc}
        </span>
      </div>
    </div>
  </div>
);

export default function Trusted() {
  return (
    <>
      {/* Infinite Horizontal Marquee Styles using pure Tailwind Inject */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 30s linear infinite;
        }
      `}</style>

      {/* CHANGED: select-none removed, changed to select-text to allow text copying */}
      <section className="bg-white mb-12 py-12 px-4 overflow-hidden w-full select-text font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-[1200px] mx-auto space-y-16">

          {/* 1. FEATURED IN SECTION (Right to Left Scrolling) */}
          <div className="text-center space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-gray-400">
                ─ ─ ─ Recognition ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <Award className="text-black w-8 h-8 flex-shrink-0" /> Featured in
              </h2>
            </div>
            
            <div className="relative w-full flex overflow-x-hidden py-2">
              <div className="flex gap-6 min-w-full w-max animate-marquee-left hover:[animation-play-state:paused]">
                {FEATURED_LOGOS.map((item, idx) => <div key={`f1-${idx}`} className="w-[220px] flex-shrink-0"><LogoCard item={item} /></div>)}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f2-${idx}`} className="w-[220px] flex-shrink-0"><LogoCard item={item} /></div>)}
              </div>
            </div>
          </div>


          {/* 2. OUR B2B PARTNERS SECTION (Left to Right Scrolling) */}
          <div className="text-center space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-gray-400">
                ─ ─ ─ Network ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <Briefcase className="text-black w-8 h-8 flex-shrink-0" /> Our B2B Partners
              </h2>
            </div>

            <div className="relative w-full flex overflow-x-hidden py-2">
              <div className="flex gap-6 min-w-full w-max animate-marquee-right hover:[animation-play-state:paused]">
                {B2B_LOGOS.map((item, idx) => <div key={`b1-${idx}`} className="w-[220px] flex-shrink-0"><LogoCard item={item} /></div>)}
                {B2B_LOGOS.map((item, idx) => <div key={`b2-${idx}`} className="w-[220px] flex-shrink-0"><LogoCard item={item} /></div>)}
              </div>
            </div>
          </div>


          {/* 3. LEADING BRANDS TRUST US SECTION (Static Layout - Perfect 2 Rows) */}
          <div className="text-center space-y-6 pt-4 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-gray-400">
                ─ ─ ─ Trust ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <ShieldCheck className="text-black w-8 h-8 flex-shrink-0" /> Leading Brands Trust Us
              </h2>
            </div>

            <div className="max-w-2xl mx-auto px-4 text-center">
              <p className="text-base md:text-[17px] font-medium leading-[1.7] text-gray-600">
                We value the relationships we build with our clients and are dedicated to providing top-notch service and support. At <span className="font-bold text-black">Digital Notebook</span>, we work closely with each partner to deliver exceptional results.
              </p>
            </div>

            {/* Static 2 Rows Grid Setup (5 Columns on Desktop, Perfect Grid Alignment) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-6 w-full max-w-[1100px] mx-auto">
              {LEADING_BRANDS.map((item, idx) => (
                <LogoCard key={`grid-${idx}`} item={item} />
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}