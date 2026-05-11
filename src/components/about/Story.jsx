import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, CheckCircle } from "lucide-react";

export default function Story() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-16 overflow-hidden bg-white font-['DM_Sans',sans-serif]">
      {/* Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
      `}</style>

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
          className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6400A1] animate-pulse" />
          <span className="text-[12px] font-bold tracking-widest text-slate-600 uppercase">Our Origin Story</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-extrabold leading-[1.1] tracking-tight mb-16 text-[#0d1326] font-['Syne']"
          style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}
        >
          Why We Started <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6400A1] to-[#BB000F]">
            10xBizz
          </span> — A Mission <br />
          Built on <span className="italic underline decoration-[#BB000F]/20 text-slate-800">Real Results.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              We didn't just start another agency. We started a movement to end the cycle of wasted marketing budgets and missed opportunities.
            </p>

            <div className="border-l-4 border-[#6400A1] pl-6 py-2 bg-slate-50/50 rounded-r-xl">
              <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                We saw businesses burning money on ads without a system to capture and convert. Leads were getting lost, and growth was left to chance.
              </p>
            </div>

            <div className="space-y-6 text-[17px] text-slate-600 leading-[1.8]">
              <p>
                Leads were drowning in WhatsApp chats and forgotten spreadsheets. Follow-ups depended on busy owners' memories. We realized the problem wasn't traffic—it was the <span className="text-[#6400A1] font-bold">Leaky Bucket</span>.
              </p>
              
              <p>
                10xBizz was born to provide the <strong>Plug</strong>. We build complete lead generation and conversion ecosystems that work 24/7. Not just clicks, but real, measurable revenue.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-3xl font-extrabold text-[#0d1326] font-['Syne']">10x</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Growth Scaling</p>
              </div>
              <div className="w-px h-full bg-slate-100" />
              <div>
                <h4 className="text-3xl font-extrabold text-[#0d1326] font-['Syne']">98%</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Client Retention</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Wrap - Increased Size */}
            <div className="relative z-10 w-full h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(13,19,38,0.15)] group border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                alt="10xBizz Strategy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Solution Card */}
          

            {/* Accent Circle */}
            <div className="absolute -top-10 -right-10 size-40 border-[20px] border-slate-50 rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}