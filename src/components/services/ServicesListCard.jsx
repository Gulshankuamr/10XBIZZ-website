import { useState } from "react";
import { motion } from "framer-motion";

const whatsIncluded = [
  {
    id: 1,
    title: "Audience & Market Research",
    desc: "Understand your ideal customers, competitors, and market opportunities before spending a single rupee on advertising.",
    highlights: [
      "Customer Research",
      "Competitor Analysis",
      "Market Insights",
      "Audience Targeting",
      "Growth Opportunities",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 2,
    title: "Lead Generation Campaigns",
    desc: "Launch high-converting Google and Meta campaigns designed to attract qualified enquiries and generate consistent leads.",
    highlights: [
      "Google Ads",
      "Meta Ads",
      "Audience Targeting",
      "Conversion Tracking",
      "Campaign Structure",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 3,
    title: "Landing Pages & Funnels",
    desc: "Convert more visitors into leads with optimized landing pages built for engagement and conversion.",
    highlights: [
      "Landing Pages",
      "Funnel Design",
      "CTA Optimization",
      "Mobile Experience",
      "Lead Capture Forms",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 4,
    title: "Lead Tracking & Analytics",
    desc: "Know exactly where your leads come from and measure the real performance of your marketing efforts.",
    highlights: [
      "Lead Tracking",
      "Analytics Setup",
      "CRM Integration",
      "ROI Monitoring",
      "Conversion Reports",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991104.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 5,
    title: "Performance Optimization",
    desc: "Continuously improve campaigns and conversion systems to reduce costs and increase lead quality.",
    highlights: [
      "CPL Reduction",
      "Campaign Optimization",
      "Lead Quality Improvement",
      "Scaling Strategies",
      "Performance Reviews",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    iconBg: "#EFE5FF",
  },
];

const ServiceHighlightItem = ({ text, accent, isHovered }) => (
  <div className="flex items-center gap-2 py-1.5">
    <div
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{
        background: isHovered ? "#FFFFFF" : accent,
      }}
    />

    <span
      className="text-[14px] font-semibold tracking-wide"
      style={{
        color: isHovered ? "#FFFFFF" : "#334155",
      }}
    >
      {text}
    </span>
  </div>
);

export default function WhatsIncluded() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-[#F8F9FF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#6400A1]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6400A1]">
              WHAT'S INCLUDED
            </span>
          </div>

          <h2 className="text-[clamp(32px,5vw,54px)] font-bold leading-tight tracking-[-2px] text-[#111]">
            From Lead Generation To
            <span className="block bg-gradient-to-r from-[#6400A1] to-[#FF1920] bg-clip-text text-transparent">
              Customer Conversion
            </span>
          </h2>

          <p className="mt-5 text-[17px] leading-[1.8] text-gray-900 max-w-[760px] mx-auto">
            We combine advertising, automation, CRM, and conversion optimization to help businesses generate more qualified leads and turn them into paying customers.
          </p>
        </div>

  {/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {whatsIncluded.map((service, idx) => {
    const isHovered = hovered === service.id;

    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.08 }}
        onMouseEnter={() => setHovered(service.id)}
        onMouseLeave={() => setHovered(null)}
        className="relative overflow-hidden rounded-[32px] transition-all duration-200 border-4 border-slate-950 hover:-translate-y-1 hover:translate-x-1"
        style={{
          background: isHovered ? "#6400A1" : service.lightBg,
          boxShadow: isHovered
            ? "4px 4px 0px 0px rgba(0,0,0,1)"
            : "8px 8px 0px 0px rgba(0,0,0,1)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: isHovered
              ? "rgba(255,255,255,0.08)"
              : "#6400A110",
          }}
        />

        <div className="relative p-8 min-h-[420px] flex flex-col">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-2xl border-2 border-slate-950 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: isHovered
                  ? "rgba(255,255,255,0.12)"
                  : service.iconBg,
              }}
            >
              <img
                src={service.iconUrl}
                alt={service.title}
                width={42}
                height={42}
                style={{
                  transition: "0.2s ease",
                }}
              />
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-[24px] font-bold text-center leading-tight mb-4 tracking-tight"
            style={{
              color: isHovered ? "#fff" : "#111827",
            }}
          >
            {service.title}
          </h3>

          {/* Description - Optimized for bold, clean brutalist readability */}
          <p
            className="text-[15px] leading-[1.8] text-center mb-6 font-semibold"
            style={{
              color: isHovered
                ? "#FFFFFF"
                : "#1f2937",
            }}
          >
            {service.desc}
          </p>

          {/* Divider */}
          <div
            className="h-0.5 w-full mb-5 opacity-40"
            style={{
              background: isHovered
                ? "rgba(255,255,255,0.5)"
                : "#94a3b8",
            }}
          />

          {/* Highlights */}
          <div className="space-y-2">
            {service.highlights.map((highlight, i) => (
              <ServiceHighlightItem
                key={i}
                text={highlight}
                accent={service.accent}
                isHovered={isHovered}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border border-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: isHovered
                  ? "rgba(255,255,255,0.18)"
                  : "#6400A110",
                color: isHovered
                  ? "#fff"
                  : "#6400A1",
                borderColor: isHovered
                  ? "rgba(255,255,255,0.3)"
                  : "#cbd5e1"
              }}
            >
              ✓ Included In Growth System
            </div>
          </div>
        </div>

        {/* Bottom Accent Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-1"
          style={{
            background:
              "linear-gradient(90deg,#6400A1 0%,#FF1920 100%)",
          }}
          initial={{ width: 0 }}
          animate={{
            width: isHovered ? "100%" : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}