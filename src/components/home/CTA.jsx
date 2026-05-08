import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-12 bg-[#F8F9FF] font-['Montserrat',sans-serif]">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-[1216px] overflow-hidden rounded-[48px] shadow-[0_24px_60px_rgba(100,0,161,0.2)]"
        style={{
          background: "linear-gradient(109.31deg, #6400A1 0%, #BB000F 100%)",
        }}
      >
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-12">
          
          {/* Top Label */}
    

          {/* Heading - Now exactly matches your font specs and 1-line requirement */}
          <h2 
            className="text-white mb-6 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              whiteSpace: "normal" // Allows wrap on mobile, but font-size makes it 1 line on desktop
            }}
          >
            Ready to Build Your Kinetic Engine?
          </h2>

          {/* Subtext */}
          <p
            className="mx-auto mb-10 max-w-2xl leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "16px",
              fontWeight: 400
            }}
          >
            Stop losing leads to chaos. Join 50+ businesses scaling with our <br className="hidden md:block" /> automated high-intent acquisition systems.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            
            {/* White Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-white text-[#111111] font-bold py-4 px-10 rounded-xl shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-[15px]">Book Strategy Call</span>
            </motion.button>

            {/* Frosted Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-white/10 text-white font-bold py-4 px-10 rounded-xl border-2 border-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-[15px]">WhatsApp Us</span>
            </motion.button>

          </div>

          {/* Minimal Trust Badge */}
          <div className="mt-10 text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">
            Trusted by High-Growth DTC & B2B Brands
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;