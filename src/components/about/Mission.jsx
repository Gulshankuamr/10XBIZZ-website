import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Rocket, Target, Cpu, TrendingUp, ShieldCheck, Layers, Zap, Handshake, Globe } from "lucide-react";

export default function Mission() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-white via-[#F9FAFC] to-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        
        {/* Background Decor */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* TOP SECTION: Mission & Vision Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* LEFT SIDE — Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-1/2 shrink-0"
            >
              <div className="relative shadow-[0_30px_90px_rgba(100,0,161,0.12)] rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-white">
                <img 
                  className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-1000"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
                  alt="Our Mission & Vision" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-bold">Future-Ready Infrastructure</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">Powered by intelligent automation & seamless CRM architectures.</p>
                </div>
              </div>

              {/* Decorative Icon Box */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#6400A1] to-[#BB000F] p-5 rounded-2xl shadow-xl hidden md:flex items-center justify-center">
                 <Rocket className="text-white size-7" />
              </div>
            </motion.div>

            {/* RIGHT SIDE — Mission & Vision Content */}
            <div className="flex-1 space-y-10">
              
              {/* Mission Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#6400A1] text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                  <Target className="size-3.5" /> Our Mission
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-900 leading-[1.15] mb-6">
                  Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6400A1] to-[#BB000F]">Predictable Systems</span> For Unstoppable Growth.
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-[1.8] font-normal mb-5">
                  To help businesses stop wasting money on disconnected marketing and start building predictable, scalable growth systems powered by automation, AI, and data.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-[1.7]">
                  We believe technology should remove complexity—not create it. That's why every solution we build is designed to be simple, measurable, and focused on helping businesses grow faster with less manual effort.
                </p>
              </motion.div>

              {/* Vision Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/70 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6400A1]/5 rounded-bl-full pointer-events-none" />
                <h4 className="text-[#6400A1] font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <Globe className="size-4" /> Our Vision
                </h4>
                <p className="text-slate-800 text-base sm:text-lg font-semibold leading-[1.6]">
                  To become India's most trusted AI-powered business growth partner by helping thousands of businesses automate their marketing, sales, and customer journeys through intelligent technology.
                </p>
              </motion.div>

            </div>

          </div>

          {/* MIDDLE SECTION: Core Values */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#6400A1] text-xs font-bold tracking-[0.2em] uppercase bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100">
                Core Principles
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
                Our Core Values
              </h3>
              <p className="text-slate-600 text-base mt-2">The foundation upon which every 10xBizz solution is engineered.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <TrendingUp className="size-6 text-[#6400A1]" />,
                  title: "Results Over Reports",
                  desc: "We measure success through revenue, qualified leads, and business growth—not vanity metrics."
                },
                {
                  icon: <Layers className="size-6 text-[#BB000F]" />,
                  title: "Systems Before Scale",
                  desc: "Growth becomes predictable only when every stage of the customer journey is connected."
                },
                {
                  icon: <Zap className="size-6 text-[#6400A1]" />,
                  title: "Automation With Purpose",
                  desc: "Technology should save time, improve customer experience, and increase conversions."
                },
                {
                  icon: <Handshake className="size-6 text-[#BB000F]" />,
                  title: "Long-Term Partnerships",
                  desc: "We don't believe in one-time projects. We build systems that continue creating value for years."
                },
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
                      {val.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400">
                    <span>0{idx + 1} // PRINCIPLE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BOTTOM SECTION: What We Build (Digital Growth Ecosystem Pipeline) */}
          <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6400A1]/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#BB000F]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase">
                  <Cpu className="size-3.5 text-purple-400" /> End-to-End Architecture
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  What We Build
                </h3>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                  We help businesses create a complete digital growth ecosystem where every component connects seamlessly:
                </p>
              </div>

              {/* Pipeline Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    phase: "Attract",
                    details: "Google Ads • Meta Ads • SEO",
                    desc: "Drive targeted high-intent traffic directly to your business assets."
                  },
                  {
                    step: "02",
                    phase: "Capture",
                    details: "Landing Pages • Websites • Lead Forms",
                    desc: "Convert high-intent visitors into structured prospect profiles."
                  },
                  {
                    step: "03",
                    phase: "Manage",
                    details: "CRM • Pipeline • Lead Tracking",
                    desc: "Keep complete operational visibility over every single opportunity."
                  },
                  {
                    step: "04",
                    phase: "Nurture",
                    details: "WhatsApp Automation • Email • AI Follow-ups",
                    desc: "Engage prospects instantly 24/7 without manual delay."
                  },
                  {
                    step: "05",
                    phase: "Convert",
                    details: "Sales Funnels • Appointments • Optimization",
                    desc: "Streamline bookings and checkout flows to close deals smoothly."
                  },
                  {
                    step: "06",
                    phase: "Scale",
                    details: "Analytics • Reporting • AI Insights",
                    desc: "Continuous loop optimization driven by exact performance metrics."
                  },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="p-7 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-purple-300">
                          STAGE {item.step}
                        </span>
                        <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {item.phase}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-purple-200 mb-2">{item.details}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary note inside bottom box */}
              <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
                <p className="text-slate-300 font-medium text-base">
                  Everything works together. <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">Nothing gets lost.</span>
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6400A1] to-[#BB000F] text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-purple-900/30"
                >
                  <span>Build Your Growth System</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}