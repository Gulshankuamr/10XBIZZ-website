import React, { useState } from "react";
import { motion } from "framer-motion";

import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan"; 
import HeroActionButton from "../ui/HeroActionButton";

const tags = [
  "✅ Lead Generation",
  "✅ CRM Automation",
  "✅ Google Ads",
  "✅ Meta Ads",
  "✅ WhatsApp Automation",
  "✅ SEO & Local Growth"
];

export default function OneStopService() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="bg-[#F8F9FF] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] py-16 md:py-24 px-6 overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');`}</style>

      {/* SVG Responsive Mask Definition */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.83,0.11 C0.96,0.25,1,0.47,0.94,0.64 C0.89,0.81,0.7,0.93,0.51,0.97 C0.33,1,0.15,0.96,0.06,0.83 C-0.03,0.7,-0.05,0.48,-0.03,0.34 C-0.01,0.2,0.17,0.13,0.34,0.1 C0.51,0.06,0.69,0.04,0.83,0.11 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-[#111111] font-bold leading-[1.1] mb-6">
            Smarter Marketing
            <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)]">
              Systems For Modern Businesses
            </span>
          </h2>

          <div className="w-[60px] h-1 bg-[#6400A1] mb-8 mx-auto lg:ml-0" />

          <p className="text-[#667085] text-base md:text-[17px] leading-[1.8] mb-10 max-w-[580px] mx-auto lg:ml-0">
            We help businesses generate leads, improve conversions, and automate
            customer follow-ups through performance-driven marketing and CRM solutions.
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

          <HeroActionButton 
            onClick={() => setOpenModal(true)}
            className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] text-white font-bold rounded-full py-4 px-10 text-base shadow-[0_10px_25px_rgba(100,0,161,0.25)] transition-transform duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            Build My Growth System
          </HeroActionButton>
        </motion.div>

        {/* RIGHT IMAGE (RESPONSIVE MASK) — same as before */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-[500px] mx-auto lg:mr-0 aspect-[4/5] sm:aspect-square lg:h-[550px]"
        >
          {/* Abstract Purple Glow */}
          <div className="absolute -right-5 -bottom-5 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#6400A1] rounded-full z-0 blur-[80px] opacity-20" />

          {/* Masked Container */}
          <div 
            className="relative z-10 w-full h-full -rotate-[3deg] md:-rotate-[5deg] shadow-2xl overflow-hidden"
            style={{ clipPath: "url(#blob-mask)" }}
          >
            <img 
              src="/new_image.png" 
              alt="Team collaborating on digital marketing" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6400A1]/20 pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {openModal && <FreeMarketingPlan onClose={() => setOpenModal(false)} />}
    </section>
  );
}