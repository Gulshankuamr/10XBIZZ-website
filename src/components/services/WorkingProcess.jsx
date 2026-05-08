import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Understanding Requirement",
    desc: "Deep dive into your business goals, target audience, and market landscape to identify growth opportunities.",
    icon: "🎯",
    color: "#22C55E",
    lightBg: "rgba(34, 197, 94, 0.1)",
  },
  {
    id: "02",
    title: "Analyzing & Planning",
    desc: "Data-driven strategy development with competitor analysis, keyword research, and funnel architecture planning.",
    icon: "📊",
    color: "#FBBF24",
    lightBg: "rgba(251, 191, 36, 0.1)",
  },
  {
    id: "03",
    title: "Design & Develop",
    desc: "Building high-converting landing pages, creative assets, and multi-channel campaign structures.",
    icon: "⚙️",
    color: "#3B82F6",
    lightBg: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: "04",
    title: "Evaluate & Testing",
    desc: "Rigorous A/B testing, quality assurance, and performance validation before full-scale launch.",
    icon: "🧪",
    color: "#8B5CF6",
    lightBg: "rgba(139, 92, 246, 0.1)",
  },
  {
    id: "05",
    title: "Final Deliver",
    desc: "Continuous optimization, real-time reporting, and scalable growth systems that deliver results.",
    icon: "🚀",
    color: "#F43F5E",
    lightBg: "rgba(244, 63, 94, 0.1)",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white font-['Outfit'] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-24 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-purple-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header Section ── */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm"
          >
            Our Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-8 tracking-tight"
          >
            How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Performance System</span> Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            We build a complete performance system — <span className="text-gray-900 font-bold">not just campaigns.</span> From audience targeting to conversion tracking, every step is optimized for lead quality and business growth.
          </motion.p>
        </div>

        {/* ── Desktop Process Flow ── */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group flex flex-col items-center text-center px-4"
            >
              {/* Massive Background Number */}
              <span className="absolute -top-12 text-8xl font-black text-gray-50 z-0 select-none transition-colors group-hover:text-gray-100">
                {step.id}
              </span>

              {/* Icon Container */}
              <div 
                className="relative z-10 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                style={{ backgroundColor: step.color, boxShadow: `0 20px 40px -10px ${step.color}66` }}
              >
                <span className="text-4xl">{step.icon}</span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-black text-gray-900 mb-4 uppercase tracking-tighter">
                {step.title}
              </h3>

              {/* BOLD Description */}
              <p className="relative z-10 text-[15px] text-gray-800 font-bold leading-[1.6] group-hover:text-gray-900 transition-colors">
                {step.desc}
              </p>

              {/* Connector Line (Dotted) */}
              {idx !== steps.length - 1 && (
                <div className="absolute top-12 -right-2 text-gray-200 hidden xl:block">
                   <svg width="40" height="10" viewBox="0 0 40 10">
                     <path d="M0 5H35" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                     <path d="M33 1L39 5L33 9" fill="currentColor" />
                   </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Mobile/Tablet Process Flow ── */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden"
            >
              {/* Background ID for Mobile */}
              <span className="absolute right-4 bottom-0 text-7xl font-black text-gray-200/50">
                {step.id}
              </span>

              <div 
                className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{ backgroundColor: step.color }}
              >
                {step.icon}
              </div>

              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase">{step.title}</h3>
                <p className="text-lg text-gray-800 font-bold leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Callout ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            <button className="px-10 py-4 bg-white rounded-full text-gray-900 font-black text-lg hover:bg-transparent hover:text-white transition-all duration-300">
              Let's Start Your System 🚀
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}