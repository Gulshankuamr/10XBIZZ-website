import React from "react";
import { motion } from "framer-motion";

const content = {
  painPoints: [
    "Generate more qualified leads",
    "Never miss a follow-up",
    "Convert more customers",
    "Organize leads in CRM",
    "Automate WhatsApp follow-ups",
    "Track marketing ROI"
  ]
};

export default function LeadConversionSection() {
  return (
    <section className="bg-[#F8F9FF] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] py-16 md:py-24 px-6 overflow-hidden">
      {/* External Font Import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE - IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          {/* Abstract background glow */}
          <div className="absolute -left-10 top-10 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/10 rounded-full blur-[100px] z-0" />

          {/* Masked Image Container */}
          <div 
            className="relative z-10 w-full h-[400px] md:h-[580px] bg-cover bg-center shadow-2xl transition-all duration-500"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80')",
              clipPath: "path('M430.7,50.1c68.3,71.5,108.6,183,79.1,269.1c-29.4,86.1-128.5,146.9-224.2,165.7C189.9,503.7,97.7,485.4,47.4,420 c-50.2-65.5-58.4-178.1-16.7-251.3c41.8-73.2,133.5-106.9,223.1-122.9C343.3,29.9,384.9,18.6,430.7,50.1z')", 
            }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/15" />
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-[#111111] font-bold leading-[1.1] mb-6">
            Turn Your{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)]">
              Leads Into Customers
            </span>{" "}
            — Automatically
          </h2>

          <p className="text-gray-900 text-base md:text-[18px] leading-[1.7] mb-8 font-medium">
            We help businesses generate high-quality leads, organize them in CRM, and automate follow-ups — so you never miss a potential customer.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {content.painPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-sm md:text-[14px] font-bold text-[#111111]">
                <span className="text-[#00E5BC] text-lg">✔️</span>
                {point}
              </div>
            ))}
          </div>

          {/* Optional CTA Section (Uncomment if needed) */}
          {/* 
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] text-white font-bold rounded-full py-4 px-8 text-base shadow-[0_10px_25px_rgba(100,0,161,0.2)]"
            >
              Book Free Strategy Call
            </motion.button>
            <a href="#" className="text-[#111111] font-bold text-[15px] border-b-2 border-[#00E5BC] pb-1 hover:text-[#6400A1] transition-colors">
              Chat on WhatsApp →
            </a>
          </div> 
          */}

          <p className="mt-8 text-xs md:text-[13px] text-[#667085] font-medium italic">
            * Trusted by growing businesses looking for measurable results.
          </p>
        </motion.div>

      </div>
    </section>
  );
}