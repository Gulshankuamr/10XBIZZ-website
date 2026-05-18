import React from "react";
import { Award, Briefcase, ShieldCheck } from "lucide-react";

// ─── DATA ARRAYS (आप यहाँ अपनी इमेज का src पाथ डाल सकते हैं) ──────────────────
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
  { name: "Nurtureplus" }, { name: "Ghar Ka Khana" }, { name: "Wodreams" }, { name: "SHWETA GAURI" }, { name: "UpInvest" },
  { name: "NCR INFRA" }, { name: "HC INTERIOR" }, { name: "Suman Jewels" }, { name: "CHIKARI" }, { name: "Kasturi" },
  { name: "lawnings" }, { name: "MadVik" }, { name: "Krafty" }, { name: "SET MY HOUSE" }, { name: "indyRaaga" },
  { name: "Vastu" }, { name: "SIRAA" }, { name: "PEAR" }, { name: "TREKKERS" }, { name: "Hari Darshan" }
];

// ─── REUSABLE LOGO CARD COMPONENT ────────────────────────────────────────────
const LogoCard = ({ item }) => (
  <div className="w-full h-[75px] bg-white border-2 border-sky-400 rounded-xl flex items-center justify-center p-3 shadow-sm hover:shadow-md hover:border-purple-600 transition-all duration-300 select-none cursor-pointer">
    {item.src ? (
      <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain" />
    ) : (
      <span className="text-gray-700 font-bold text-center text-[13px] tracking-wide uppercase break-words">
        {item.name}
      </span>
    )}
  </div>
);

export default function Trusted() {
  return (
    <>
      {/* CSS Stylesheet for Smooth Carousel Scrolling & Pause on Hover */}
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
      `}</style>

      <section className="bg-white py-16 px-4 overflow-hidden w-full select-none">
        <div className="max-w-[1200px] mx-auto space-y-16">

          {/* 1. FEATURED IN SECTION (Right to Left Scrolling) */}
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sky-400 font-bold tracking-widest text-lg">─ ─ ─</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#006699] flex items-center gap-2">
                <Award className="text-sky-500 w-6 h-6" /> Featured in
              </h2>
            </div>
            
            <div className="relative w-full flex overflow-x-hidden py-2">
              <div className="animate-scroll-left hover:pause-scroll gap-6">
                {/* Loops to ensure continuous scrolling text/images */}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f1-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f2-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
                {FEATURED_LOGOS.map((item, idx) => <div key={`f3-${idx}`} className="w-[180px]"><LogoCard item={item} /></div>)}
              </div>
            </div>
          </div>


          {/* 2. OUR B2B PARTNERS SECTION (Left to Right Scrolling) */}
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sky-400 font-bold tracking-widest text-lg">─ ─ ─</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#006699] flex items-center gap-2">
                <Briefcase className="text-sky-500 w-6 h-6" /> Our B2B Partners
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


          {/* 3. LEADING BRANDS TRUST US SECTION (Static Clean Layout - No Animation) */}
          <div className="text-center space-y-6 pt-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-sky-400 font-bold tracking-widest text-lg">─ ─ ─</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#006699] flex items-center gap-2 tracking-tight">
                <ShieldCheck className="text-sky-500 w-7 h-7" /> Leading Brands Trust Us
              </h2>
            </div>

            {/* Description Paragraphs */}
            <div className="max-w-4xl mx-auto px-4 space-y-3 text-center">
              <p className="text-gray-800 font-bold text-[14px] md:text-[15px] leading-relaxed">
                We value the relationships we build with our clients and are dedicated to providing top-notch service and support.
              </p>
              <p className="text-gray-500 text-[12px] leading-relaxed max-w-3xl mx-auto">
                At <span className="font-semibold text-gray-700">Digital Notebook</span>, we understand the importance of a successful partnership. Our team works closely with each client to understand their unique needs and goals, and provides customized solutions to help them achieve success.
              </p>
              <p className="text-gray-400 text-[11px] italic">
                We take pride in delivering exceptional results and exceeding our client's expectations. From start to finish, we are committed to providing a seamless and positive experience.
              </p>
            </div>

            {/* Image Exact Replica Grid (5 Columns Layered Layout) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-6 max-w-[1100px] mx-auto">
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