import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-16 overflow-hidden bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Eyebrow Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 bg-slate-50/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#6400A1] animate-pulse" />
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em] text-slate-700 uppercase">Why We Started 10xBizz</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold leading-[1.15] tracking-[-0.02em] mb-16 text-[#0d1326] max-w-4xl text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]"
        >
          Built to Turn{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6400A1] to-[#BB000F]">
            Marketing Into
          </span>{" "}
          <span className="italic underline decoration-[#BB000F]/20 text-slate-900">Growth.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-14 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-lg sm:text-xl text-slate-800 leading-[1.7] font-normal">
              We saw businesses generating leads but losing opportunities because marketing, follow-ups, and sales were disconnected.
            </p>

            <div className="border-l-4 border-[#6400A1] pl-6 py-3 bg-gradient-to-r from-purple-50/50 to-transparent rounded-r-2xl">
              <p className="text-base sm:text-lg text-slate-900 font-semibold leading-[1.7]">
                The problem wasn't getting leads. It was converting them consistently.
              </p>
            </div>

            <div className="space-y-5 text-[16px] sm:text-[17px] text-slate-700 leading-[1.8]">
              <p>
                Leads were getting lost in WhatsApp chats, spreadsheets, and delayed follow-ups. Businesses needed more than advertising—they needed a <span className="text-[#6400A1] font-semibold">connected system</span>.
              </p>
              
              <p>
                So we built 10xBizz to connect Ads, CRM, Automation & Sales into one growth ecosystem focused on <strong className="text-slate-900 font-semibold">measurable results</strong>.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0d1326] tracking-tight">End-to-End</h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 font-bold uppercase tracking-[0.06em] mt-1.5">Growth System</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0d1326] tracking-tight">24/7</h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 font-bold uppercase tracking-[0.06em] mt-1.5">Automation Engine</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Wrap */}
            <div className="relative z-10 w-full h-[450px] sm:h-[520px] lg:h-[580px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(13,19,38,0.12)] group border border-slate-200/80 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                alt="10xBizz Strategy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Accent Circle */}
            <div className="absolute -top-8 -right-8 w-36 h-36 border-[16px] border-slate-100 rounded-full z-0 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-red-200/40 rounded-full blur-xl z-0 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}