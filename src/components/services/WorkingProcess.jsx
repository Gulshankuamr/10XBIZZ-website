import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "DISCOVERY",
    desc: "Understand your business, goals, customers, and growth opportunities.",
    icon: "🔍",
    color: "#22C55E",
    lightBg: "rgba(34,197,94,0.1)",
  },

  {
    id: "02",
    title: "STRATEGY",
    desc: "Create a clear plan to attract better leads and improve conversions.",
    icon: "📋",
    color: "#FBBF24",
    lightBg: "rgba(251,191,36,0.1)",
  },

  {
    id: "03",
    title: "BUILD",
    desc: "Launch campaigns, landing pages, CRM systems, and automation workflows.",
    icon: "⚙️",
    color: "#3B82F6",
    lightBg: "rgba(59,130,246,0.1)",
  },

  {
    id: "04",
    title: "OPTIMIZE",
    desc: "Continuously improve performance through testing, tracking, and data.",
    icon: "📈",
    color: "#8B5CF6",
    lightBg: "rgba(139,92,246,0.1)",
  },

  {
    id: "05",
    title: "SCALE",
    desc: "Expand growth systems that consistently generate leads and improve business performance.",
    icon: "🚀",
    color: "#F43F5E",
    lightBg: "rgba(244,63,94,0.1)",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] overflow-hidden">
      {/* Background Decor */}

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header Section ── */}
        <div className="text-center mb-24">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 mb-8 tracking-[-0.02em]"
          >
            How Our{" "}
            <span className="bg-white text-[#6400A1] px-2 py-0.5 rounded-sm inline ml-2">
              Growth System
            </span>{" "}
            Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/85 max-w-4xl mx-auto font-medium leading-[1.8]"
          >
            We combine marketing, CRM, automation, and optimization into one
            growth system designed to generate better leads and improve conversions.
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
              {/* Icon Container */}
              <div
                className="relative z-10 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110"
                style={{ backgroundColor: step.color, boxShadow: `0 20px 40px -10px ${step.color}66` }}
              >
                <span className="text-4xl">{step.icon}</span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-bold text-[#fff] mb-4 uppercase tracking-[-0.02em]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[15px] text-white/75 font-medium leading-[1.7] group-hover:text-white transition-colors">
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
              <span className="absolute right-4 bottom-0 text-7xl font-bold text-gray-200/50">
                {step.id}
              </span>

              <div
                className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{ backgroundColor: step.color }}
              >
                {step.icon}
              </div>

              <div className="text-center sm:text-left relative z-10">
                <h3 className="text-xl font-bold text-[#111] mb-2 uppercase">{step.title}</h3>
                <p className="text-lg text-gray-700 font-medium leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Description ── */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <p className="text-lg md:text-xl text-white/80 leading-[1.8]">
            From lead generation to automation and conversion tracking,
            every step is focused on helping your business grow smarter.
          </p>
        </div>

      </div>
    </section>
  );
}