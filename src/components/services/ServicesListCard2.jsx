import React from "react";

const SkagIllustration = () => (
  <svg viewBox="0 0 320 190" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="60" y="20" width="120" height="50" rx="10" fill="#AFA0F5" stroke="#56627E" strokeWidth="5" />
    <rect x="74" y="24" width="106" height="46" rx="8" fill="#C8BCFF" />
    <path d="M114 14C120 9 131 9 137 14" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <path d="M148 14C154 9 165 9 171 14" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <circle cx="136" cy="38" r="7" fill="#56627E" />
    <circle cx="160" cy="38" r="7" fill="#56627E" />
    <circle cx="133" cy="35" r="2.5" fill="white" />
    <circle cx="157" cy="35" r="2.5" fill="white" />
    <path d="M133 48C138 54 146 57 153 57C160 57 168 54 173 48" stroke="#56627E" strokeWidth="4.5" strokeLinecap="round" />
    <ellipse cx="152" cy="57" rx="14" ry="9" fill="#FA8A85" />
    <text x="112" y="62" fill="white" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">
      KEYWORD
    </text>

    <rect x="146" y="92" width="126" height="50" rx="10" fill="#F57F86" stroke="#56627E" strokeWidth="5" />
    <rect x="138" y="92" width="118" height="50" rx="10" fill="#FF9A7D" stroke="#56627E" strokeWidth="5" />
    <path d="M190 84C196 79 207 79 213 84" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <path d="M224 84C230 79 241 79 247 84" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <circle cx="210" cy="108" r="7" fill="#56627E" />
    <circle cx="234" cy="108" r="7" fill="#56627E" />
    <circle cx="207" cy="105" r="2.5" fill="white" />
    <circle cx="231" cy="105" r="2.5" fill="white" />
    <path d="M207 118C212 124 219 127 225 127C231 127 238 124 243 118" stroke="#56627E" strokeWidth="4.5" strokeLinecap="round" />
    <text x="176" y="132" fill="white" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">
      KEYWORD
    </text>

    <rect x="82" y="150" width="118" height="50" rx="10" fill="#28CB61" stroke="#56627E" strokeWidth="5" />
    <rect x="90" y="150" width="110" height="50" rx="10" fill="#79D890" />
    <path d="M132 142C138 137 149 137 155 142" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <path d="M166 142C172 137 183 137 189 142" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <circle cx="154" cy="166" r="7" fill="#56627E" />
    <circle cx="178" cy="166" r="7" fill="#56627E" />
    <circle cx="151" cy="163" r="2.5" fill="white" />
    <circle cx="175" cy="163" r="2.5" fill="white" />
    <path d="M151 176C156 182 164 185 171 185C178 185 186 182 191 176" stroke="#56627E" strokeWidth="4.5" strokeLinecap="round" />
    <ellipse cx="170" cy="185" rx="14" ry="9" fill="#FA8A85" />
    <text x="127" y="190" fill="white" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">
      KEYWORD
    </text>
  </svg>
);

const TaperIllustration = () => (
  <svg viewBox="0 0 320 190" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="78" y="52" width="142" height="64" rx="14" fill="#FFB23F" stroke="#56627E" strokeWidth="6" />
    <rect x="92" y="52" width="154" height="64" rx="14" fill="#FFD981" stroke="#56627E" strokeWidth="6" />
    <path d="M150 38C156 31 169 31 175 38" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <path d="M190 38C196 31 209 31 215 38" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <circle cx="180" cy="72" r="9" fill="#56627E" />
    <circle cx="214" cy="72" r="9" fill="#56627E" />
    <circle cx="177" cy="69" r="2.5" fill="white" />
    <circle cx="211" cy="69" r="2.5" fill="white" />
    <path d="M176 88C182 95 192 99 202 99C212 99 222 95 228 88" stroke="#56627E" strokeWidth="5" strokeLinecap="round" />
    <path d="M136 152L194 89" stroke="#95C0DB" strokeWidth="13" strokeLinecap="round" />
    <path d="M158 164L112 108" stroke="#95C0DB" strokeWidth="13" strokeLinecap="round" />
    <circle cx="128" cy="162" r="22" fill="#D8E5F1" stroke="#56627E" strokeWidth="6" />
    <circle cx="128" cy="162" r="9" fill="#56627E" />
    <circle cx="198" cy="162" r="22" fill="#D8E5F1" stroke="#56627E" strokeWidth="6" />
    <circle cx="198" cy="162" r="9" fill="#56627E" />
    <circle cx="160" cy="122" r="5" fill="#56627E" />
    <text x="165" y="104" fill="white" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">
      WORD
    </text>
  </svg>
);

const serviceCards = [
  { id: 1, title: "Single Keyword Ad Groups (SKAGs)", type: "skag" },
  { id: 2, title: "Keyword Tapering", type: "taper" },
  { id: 3, title: "Negative Keyword Research", type: "skag" },
  { id: 4, title: "Ad Copy Optimization", type: "taper" },
  { id: 5, title: "Search Intent Mapping", type: "skag" },
  { id: 6, title: "Budget Split Strategy", type: "taper" },
  { id: 7, title: "Conversion Keyword Flow", type: "skag" },
  { id: 8, title: "Traffic Waste Cleanup", type: "taper" },
  { id: 9, title: "High ROI Ad Structuring", type: "skag" },
  { id: 10, title: "PPC Funnel Refinement", type: "taper" },
];

const CardImage = ({ type }) => (type === "taper" ? <TaperIllustration /> : <SkagIllustration />);

const ServicesListCard2 = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Syne:wght@700;800&display=swap');`}</style>
<section className="relative overflow-hidden bg-[#f0f2f5] px-4 py-[80px] sm:px-6 lg:px-8">

  {/* Grid Background */}
 

  <div className="relative mx-auto max-w-[960px]">

    {/* Heading Section */}
<div className="mb-12 text-center px-5 w-full max-w-[800px] mx-auto">

  <h2 className="mt-5 text-[#0d1326] font-extrabold tracking-[-0.04em] leading-[1.1] text-[clamp(2rem,4.5vw,3.6rem)] font-serif">
    
    <span className="block">
      10+ Custom Built Marketing
    </span>

    <span className="block mt-1 whitespace-nowrap">
      Recipes & Tracking Systems
    </span>

  </h2>

  <p className="mx-auto mt-5 max-w-[600px] text-[#3d4756] text-base leading-8 font-normal font-sans">
    Complexity is the enemy of execution. See how we transform complicated
    marketing strategies into simple and powerful outcomes.
  </p>

</div>
    {/* Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-4">
      {serviceCards.map((service) => (
        <div
          key={service.id}
          className="group relative overflow-hidden rounded-[24px] border-[5px] border-[#5c6787] bg-white px-5 py-5 shadow-[8px_10px_0_rgba(111,124,156,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f5f7] hover:shadow-[10px_12px_0_rgba(111,124,156,0.20)] sm:px-6 sm:py-6"
        >
          <div className="flex min-h-[250px] flex-col items-center justify-start">

            <h3 className="text-center text-[clamp(1.02rem,1.6vw,1.3rem)] font-extrabold leading-[1.2] text-[#050c1d] mb-3 font-syne">
              {service.title}
            </h3>

            <div className="w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.02]">
              <CardImage type={service.type} />
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    </>
  );
};

export default ServicesListCard2;