import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";
import HeroActionButton from "../ui/HeroActionButton";
import { CheckCircle2, ShieldCheck, Cpu, Database, TrendingUp, Users, ArrowRight } from "lucide-react";

const TRUST_POINTS = [
  { title: "Complete growth ecosystem under one roof", icon: <CheckCircle2 className="size-5 text-[#6400A1]" /> },
  { title: "AI-powered automation that works 24/7", icon: <Cpu className="size-5 text-[#BB000F]" /> },
  { title: "Marketing backed by measurable data", icon: <TrendingUp className="size-5 text-[#6400A1]" /> },
  { title: "CRM-driven sales processes", icon: <Database className="size-5 text-[#BB000F]" /> },
  { title: "Scalable solutions for growing businesses", icon: <ShieldCheck className="size-5 text-[#6400A1]" /> },
  { title: "Long-term strategic partnership—not just another agency", icon: <Users className="size-5 text-[#BB000F]" /> },
];

export default function WhyChooseUs() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#6400A1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#BB000F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[11px] uppercase tracking-[0.2em] font-bold mb-5 text-[#6400A1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB000F] animate-pulse" />
            Authority & Trust
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
            Why Businesses <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6400A1] to-[#BB000F]">Choose 10xBizz</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-[18px] leading-[1.7] max-w-2xl mx-auto">
            We don't just run ads or build scattered pages. We engineer predictable, high-converting growth systems designed to scale your revenue on autopilot.
          </p>
        </div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl mb-16 border border-slate-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000" 
            alt="Team collaborating on growth strategies"
            className="w-full h-full object-cover"
          />
          {/* Multi-stop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12 text-white">
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-3 inline-block font-bold">
              Engineering Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">Built for Founders Who Want Measurable Impact</h3>
          </div>
        </motion.div>

        {/* Content & Trust Points Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Eliminating Guesswork From Your Scale Strategy
            </h3>
            
            <p className="text-slate-600 leading-[1.8] text-base">
              Most businesses struggle because their marketing, CRM, and sales follow-ups live in silos. We connect every touchpoint into a unified ecosystem—ensuring every rupee spent converts into high-intent pipeline value.
            </p>
            
            <div className="pt-2">
              <HeroActionButton 
                onClick={() => setOpenModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#6400A1] to-[#BB000F] text-white rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3 cursor-pointer group shadow-lg shadow-purple-900/20"
              >
                <span>Get Your Custom Growth Plan</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </HeroActionButton>
            </div>
          </div>

          {/* Right Trust Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_POINTS.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-[#6400A1]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0 mt-0.5 p-2 rounded-xl bg-white shadow-sm border border-slate-100">
                  {point.icon}
                </div>
                <span className="font-semibold text-slate-800 text-sm md:text-[15px] leading-snug">
                  {point.title}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <AnimatePresence>
        {openModal && <FreeMarketingPlan onClose={() => setOpenModal(false)} />}
      </AnimatePresence>
    </section>
  );
}