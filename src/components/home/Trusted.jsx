import React from "react";

const LEADING_BRANDS = [
  {
    name: "Yoyomiles",
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=300&auto=format&fit=crop",
    bg: "#FFD700",
  },
  {
    name: "BharatiyAstro",
    src: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "FinanceKaart.com",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "HealthCRAD",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "AMSwasthya",
    src: "https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "Kartozi",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "KVS Bandhan",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=300&auto=format&fit=crop",
    bg: "#c0392b",
  },
  {
    name: "Redutech",
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "Q-Play 15",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop",
    bg: "#e74c3c",
  },
  {
    name: "SSCBS Innovation",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "Divine 10X",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=300&auto=format&fit=crop",
    bg: "#fff",
  },
  {
    name: "Game Samraat",
    src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=300&auto=format&fit=crop",
    bg: "#1a1a1a",
  },
];

const BrandCard = ({ item }) => (
  <div className="flex flex-col items-center gap-2 flex-shrink-0 w-[160px] sm:w-[180px]">
    <div
      className="group relative flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
      style={{
        background: "#fff",
        border: "1.5px solid #e5e7eb",
        height: "120px",
      }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "linear-gradient(135deg, #6400A1 0%, #BB000F 100%)",
          padding: "2px",
        }}
      />
      <div className="absolute inset-[2px] bg-white rounded-[14px] z-[1] group-hover:bg-gray-50 transition-colors duration-300" />

      {/* Logo Image */}
      <div className="relative z-[2] flex items-center justify-center w-full h-full px-4 py-3">
        <img
          src={item.src}
          alt={item.name}
          className="max-h-[72px] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
          style={{ filter: "none" }}
        />
      </div>
    </div>
    
    {/* Always visible brand name below the logo card */}
    <span className="text-gray-700 text-xs font-bold tracking-wide truncate block text-center w-full">
      {item.name}
    </span>
  </div>
);

export default function Trusted() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        .trusted-section * { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className="trusted-section bg-white py-4 px-4 w-full overflow-hidden"
        style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="text-center mb-4">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
              style={{ color: "#9ca3af" }}
            >
              ─ ─ ─ &nbsp; Trust &nbsp; ─ ─ ─
            </span>
            <h2
              className="text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-black"
            >
              Leading Brands Trust Us
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-[600px] mx-auto text-center mb-12">
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-gray-900 font-medium">
              We value the relationships we build with our clients and are dedicated to providing
              top-notch service and support. At{" "}
              <span className="font-bold text-black">Digital Notebook</span>, we work closely
              with each partner to deliver exceptional results.
            </p>
          </div>

          {/* Divider line */}
          <div className="flex items-center gap-4 mb-14 px-2">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-gray-200" />
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #6400A1, #BB000F)" }}
            />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-gray-200" />
          </div>

          {/* Continuous Scrolling Marquee Row */}
          <div className="flex overflow-hidden relative w-full py-4">
            <div className="flex shrink-0 gap-6 animate-marquee w-max items-start">
              {/* Original Set */}
              {LEADING_BRANDS.map((item, idx) => (
                <BrandCard key={`orig-${idx}`} item={item} />
              ))}
              {/* Duplicate Set for Seamless Infinite Loop */}
              {LEADING_BRANDS.map((item, idx) => (
                <BrandCard key={`dup-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}