import React from "react";
import { motion } from "framer-motion";

const tags = ["CONVERSION", "OPTIMIZATION", "ECOMMERCE", "ANALYTIC", "LINK BUILDING", "STRATEGY"];

export default function OneStopService() {
  return (
    <section className="bg-[#F8F9FF] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] py-16 md:py-24 px-6 overflow-hidden">
      {/* External Font Import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');`}</style>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-[#111111] font-bold leading-[1.1] mb-6">
            One-stop <span className="bg-clip-text text-transparent bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)]">digital marketing</span> services 🎯
          </h2>

          <div className="w-[60px] h-1 bg-[#6400A1] mb-8 mx-auto lg:ml-0" />

          <p className="text-[#667085] text-base md:text-[17px] leading-[1.8] mb-10 max-w-[520px] mx-auto lg:ml-0">
            An online business is nothing without a proper digital marketing strategy. 
            The process helps businesses get more recognition worldwide. Our company 
            is your one-stop solution for promoting your online business. Our process starts with:
          </p>

          {/* Tag Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-12">
            {tags.map((tag, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-[#E5E7EB] py-3 px-2 rounded-full text-center text-[11px] md:text-[12px] font-bold text-[#111111] shadow-sm cursor-default border-b-[3px] border-b-[#6400A1]"
              >
                {tag}
              </motion.div>
            ))}
          </div>

          <button className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] text-white font-bold rounded-full py-4 px-10 text-base shadow-[0_10px_25px_rgba(100,0,161,0.25)] transition-transform duration-300 hover:-translate-y-1 active:scale-95">
            Explore All Services →
          </button>
        </motion.div>

        {/* RIGHT IMAGE (MODERN MASK) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[550px] mx-auto lg:mr-0"
        >
          {/* Abstract Purple Glow */}
          <div className="absolute -right-5 -bottom-5 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#6400A1] rounded-full z-0 blur-[80px] opacity-20" />

          {/* Masked Image Container */}
          <div 
            className="relative z-10 w-full h-[400px] md:h-[550px] bg-cover bg-center -rotate-[3deg] md:-rotate-[5deg] shadow-2xl transition-all"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')",
              clipPath: "path('M430.7,50.1c68.3,71.5,108.6,183,79.1,269.1c-29.4,86.1-128.5,146.9-224.2,165.7C189.9,503.7,97.7,485.4,47.4,420 c-50.2-65.5-58.4-178.1-16.7-251.3c41.8-73.2,133.5-106.9,223.1-122.9C343.3,29.9,384.9,18.6,430.7,50.1z')", 
            }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6400A1]/20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}