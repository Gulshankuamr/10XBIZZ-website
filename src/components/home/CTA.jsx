// import React from "react";
// import { motion } from "framer-motion";
// import HeroActionButton from "../ui/HeroActionButton"; 

// const CallToAction = () => {
//   const stats = [
//     { num: "50+", label: "Businesses scaled" },
//     { num: "3×", label: "Avg lead growth" },
//     { num: "24h", label: "Setup time" },
//     { num: "9AM", label: "Mon–Fri support" },
//   ];

//   return (
//     <section className="my-20 px-4 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
//       <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4C0083] via-[#2A0060] to-[#180047] px-8 py-12 md:px-14 md:py-16 flex flex-wrap items-center justify-between gap-8">
        
//         {/* Dot grid overlay */}
//         <div 
//           className="absolute inset-0 pointer-events-none opacity-40" 
//           style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
//         />

//         {/* Glow blobs */}
//         <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(180,80,255,0.22)_0%,transparent_70%)]" />
//         <div className="absolute -bottom-20 left-[10%] w-[260px] h-[260px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(100,0,161,0.3)_0%,transparent_70%)]" />

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 flex-1 min-w-[280px]">
//           <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3.5 py-1 text-[12px] font-medium text-white/90 mb-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#b97bff] animate-pulse" />
//             AI-Powered Growth System
//           </div>

//           <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] text-white mb-3 tracking-[-0.02em]">
//             Ready to <span className="bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-transparent">10x your business</span> <br className="hidden md:block" /> with smart AI tools?
//           </h2>

//           <p className="text-sm md:text-[15px] font-light leading-[1.7] text-white/50 max-w-[420px]">
//             Stop losing leads to chaos. Join 50+ businesses scaling with our automated high-intent acquisition systems.
//           </p>
//         </div>

//         {/* RIGHT BUTTONS */}
//         <div className="relative z-10 flex flex-col items-start gap-3">
//           <HeroActionButton variant="primary">
//             📅 Book Strategy Call
//           </HeroActionButton>
//        <HeroActionButton className="bg-white text-[#1a0035] hover:bg-white/90 border-none my-2">
//   💬 WhatsApp Us
// </HeroActionButton>
//           <p className="text-[10px] tracking-[1.5px] text-white/30 uppercase mt-1">
//             Trusted by High-Growth Brands
//           </p>
//         </div>

//         {/* BOTTOM STATS BAR */}
//         <div className="relative z-10 w-full flex flex-wrap gap-y-6 border-t border-white/10 pt-8 mt-4">
//           {stats.map((s, i) => (
//             <div 
//               key={i} 
//               className={`flex-1 min-w-[140px] px-6 ${i !== stats.length - 1 ? 'md:border-r border-white/10' : ''} first:pl-0`}
//             >
//               <div className="text-2xl font-bold text-white">{s.num}</div>
//               <div className="text-[11px] font-light text-white/40 mt-1 uppercase tracking-wider">{s.label}</div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CallToAction;



import React from "react";
import { motion } from "framer-motion";
import HeroActionButton from "../ui/HeroActionButton"; 

const CallToAction = () => {
  // const stats = [
  //   { num: "50+", label: "Businesses scaled" },
  //   { num: "3×", label: "Avg lead growth" },
  //   { num: "24h", label: "Setup time" },
  //   { num: "9AM", label: "Mon–Fri support" },
  // ];

  return (
    <section className="my-20 px-4 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      {/* Main Container: Centered layout with flex-col */}
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4C0083] via-[#2A0060] to-[#180047] px-6 py-12 md:px-14 md:py-16 flex flex-col items-center text-center gap-10">
        
        {/* Dot grid overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40" 
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(180,80,255,0.22)_0%,transparent_70%)]" />
        <div className="absolute -bottom-20 left-[10%] w-[260px] h-[260px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(100,0,161,0.3)_0%,transparent_70%)]" />

        {/* CENTERED CONTENT SECTION */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-medium text-white/90 mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b97bff] animate-pulse" />
            AI-Powered Growth System
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.25] text-white mb-4 tracking-[-0.02em]">
            Ready to <span className="bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-transparent">10x your business</span> <br className="hidden md:block" /> with smart AI tools?
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-light leading-[1.7] text-white/70 max-w-xl mb-8">
            Stop losing leads to chaos. Join 50+ businesses scaling with our automated high-intent acquisition systems.
          </p>
        </div>

        {/* CENTERED & FOCUSED BUTTONS SECTION */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          {/* Primary Button with increased height (py-4 / h-14 equivalent) */}
          <HeroActionButton 
            variant="primary" 
            className="w-full sm:w-auto py-4 px-8 min-h-[56px] flex items-center justify-center text-center font-semibold shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02]"
          >
            📅 Book Strategy Call
          </HeroActionButton>
          
          {/* Secondary Button with increased height */}
          <HeroActionButton 
            className="w-full sm:w-auto bg-white text-[#1a0035] hover:bg-white/90 border-none py-4 px-8 min-h-[56px] flex items-center justify-center text-center font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            💬 WhatsApp Us
          </HeroActionButton>
        </div>

        {/* Small Caption below buttons */}
        <p className="relative z-10 text-[10px] tracking-[2px] text-white/40 uppercase -mt-4 mb-2">
          Trusted by High-Growth Brands
        </p>

        {/* EQUAL & SYMMETRICAL BOTTOM STATS BAR */}
        {/* <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/10 pt-8 mt-2 text-center">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className={`px-4 ${i !== stats.length - 1 ? 'md:border-r border-white/10' : ''}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.num}</div>
              <div className="text-[11px] font-medium text-white/50 mt-1.5 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default CallToAction;