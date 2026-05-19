import React from "react";
import { Award, Briefcase, ShieldCheck } from "lucide-react";

// ─── DATA ARRAYS ─────────────────────────────────────────────────────────────
const FEATURED_LOGOS = [
  { name: "KAROSTARTUP", src: "" },
  { name: "Jagran Josh", src: "" },
  { name: "NEWS 18", src: "" },
  { name: "ZEE NEWS", src: "" },
  { name: "dailyhunt", src: "" },
];

const B2B_LOGOS = [
  { name: "E2", src: "" },
  { name: "Futuristic Web Media", src: "" },
  { name: "di", src: "" },
  { name: "Expand My Business", src: "" },
  { name: "KAN IMAGINE", src: "" },
];

const LEADING_BRANDS = [
  { name: "SHOGHI" }, { name: "PR Nation" }, { name: "ZOFF" }, { name: "ALLIANCE" }, { name: "glow right" },
  { name: "Nurtureplus" }, { name: "Ghar Ka Khana" }, { name: "Wodreams" }, { name: "SHWETA GAURI" }, { name: "UpInvest" }
];

// ─── REUSABLE LOGO CARD COMPONENT ────────────────────────────────────────────
const LogoCard = ({ item }) => (
  <div className="logo-card w-full h-[75px] bg-white border-2 border-black rounded-xl flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-all duration-300 select-none cursor-pointer font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
    {item.src ? (
      <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain" />
    ) : (
      <div className="flex flex-col items-center justify-center">
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] leading-none mb-1">DN</span>
        <span className="text-black font-bold text-center text-[12px] tracking-wide uppercase break-words leading-tight">
          {item.name}
        </span>
      </div>
    )}
  </div>
);

export default function Trusted() {
  return (
    <>
      {/* Dynamic CSS Stylesheet for Animations and Premium Gradient Hover Border */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 25s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 25s linear infinite;
        }
        .hover\\:pause-scroll:hover {
          animation-play-state: paused !important;
        }
        
        /* Premium Gradient Hover Border Utility */
        .logo-card {
          border-color: #000000;
          transition: border-image 0.3s ease, border-color 0.3s ease;
        }
        .logo-card:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          border-radius: 12px; /* fallback boundary */
        }
      `}</style>

      <section className="bg-white  mb-12 px-4 overflow-hidden w-full select-none font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-[1200px] mx-auto space-y-16">

          {/* 1. FEATURED IN SECTION (Right to Left Scrolling) */}
          <div className="text-center space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-black">
                ─ ─ ─ Recognition ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <Award className="text-black w-8 h-8 flex-shrink-0" /> Featured in
              </h2>
            </div>
            
            <div className="relative w-full flex overflow-x-hidden py-2">
              <div className="animate-scroll-left hover:pause-scroll gap-6">
                {FEATURED_LOGOS.map((item, idx) => <div key={`f1-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f2-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f3-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
              </div>
            </div>
          </div>


          {/* 2. OUR B2B PARTNERS SECTION (Left to Right Scrolling) */}
          <div className="text-center space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-black">
                ─ ─ ─ Network ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <Briefcase className="text-black w-8 h-8 flex-shrink-0" /> Our B2B Partners
              </h2>
            </div>

            <div className="relative w-full flex overflow-x-hidden py-2">
              <div className="animate-scroll-right hover:pause-scroll gap-6">
                {B2B_LOGOS.map((item, idx) => <div key={`b1-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {B2B_LOGOS.map((item, idx) => <div key={`b2-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {B2B_LOGOS.map((item, idx) => <div key={`b3-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
              </div>
            </div>
          </div>


          {/* 3. LEADING BRANDS TRUST US SECTION (Static Layout - 2 Rows Only) */}
          <div className="text-center space-y-6 pt-4 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-black">
                ─ ─ ─ Trust ─ ─ ─
              </span>
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] text-black flex items-center gap-3 justify-center">
                <ShieldCheck className="text-black w-8 h-8 flex-shrink-0" /> Leading Brands Trust Us
              </h2>
            </div>

            {/* Premium Typography Standard Paragraph */}
            <div className="max-w-2xl mx-auto px-4 text-center">
              <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-900">
                We value the relationships we build with our clients and are dedicated to providing top-notch service and support. At <span className="inline-block font-bold tracking-[-0.02em] text-black">Digital Notebook</span>, we work closely with each partner to deliver exceptional results and customized solutions.
              </p>
            </div>

            {/* Image Exact Replica Grid (5 Columns - Limited to 2 Rows) */}
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