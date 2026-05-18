import { useState } from "react";
import { motion } from "framer-motion";

const whatsIncluded = [
  {
    id: 1,
    title: "Keyword Research",
    desc: "Identify high-intent search terms and audiences that are most likely to convert into qualified leads for your business.",
    highlights: [
      "Audience Research",
      "Competitor Analysis",
      "Search Intent Mapping",
      "High-Intent Keywords",
      "Lead Targeting Strategy",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 2,
    title: "Campaign Setup",
    desc: "Build and launch optimized ad campaigns designed to generate leads, improve conversions, and reduce wasted spend.",
    highlights: [
      "Google Ads Setup",
      "Meta Ads Campaigns",
      "Conversion Tracking",
      "Audience Targeting",
      "Ad Structure Optimization",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 3,
    title: "Landing Page Review",
    desc: "Optimize landing pages and funnels to improve lead quality, user experience, and conversion performance.",
    highlights: [
      "Landing Page Optimization",
      "Conversion Improvements",
      "CTA Optimization",
      "Mobile Responsive Design",
      "Lead Capture Setup",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 4,
    title: "Conversion Tracking",
    desc: "Track leads, enquiries, and customer actions with proper analytics and CRM integrations for better decision-making.",
    highlights: [
      "Lead Tracking",
      "CRM Integration",
      "Analytics Setup",
      "Performance Monitoring",
      "ROI Visibility",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991104.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 5,
    title: "Ongoing Optimization",
    desc: "Continuously improve campaigns, funnels, and lead systems to reduce CPL and increase overall business growth.",
    highlights: [
      "Campaign Optimization",
      "Reduce Cost Per Lead",
      "Performance Scaling",
      "Lead Quality Improvement",
      "Growth Strategy Updates",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    iconBg: "#EFE5FF",
  },

  {
    id: 6,
    title: "Reporting Dashboard",
    desc: "Get clear visibility into your marketing performance, leads, conversions, and business growth through detailed reporting systems.",
    highlights: [
      "Performance Dashboard",
      "Lead Reports",
      "Campaign Insights",
      "Conversion Reports",
      "Growth Analytics",
    ],
    accent: "#6400A1",
    lightBg: "#F6F0FF",
    borderColor: "#E9D5FF",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    iconBg: "#EFE5FF",
  },
];

const ServiceHighlightItem = ({ text, accent, isHovered }) => (
  <div className="flex items-center gap-2 py-1.5">
    <div
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{
        background: isHovered ? "rgba(255,255,255,0.7)" : accent,
      }}
    />

    <span
      className="text-[13px] font-medium"
      style={{
        color: isHovered ? "rgba(255,255,255,0.85)" : "#475569",
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
              WHAT’S INCLUDED
            </span>
          </div>

          <h2 className="text-[clamp(32px,5vw,54px)] font-bold leading-tight tracking-[-2px] text-[#111]">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-[#6400A1] to-[#FF1920] bg-clip-text text-transparent">
              Generate & Convert Leads
            </span>
          </h2>

          <p className="mt-5 text-[17px] leading-[1.8] text-[#667085] max-w-[760px] mx-auto">
            We build a complete lead generation and conversion system —
            from attracting qualified traffic to automating follow-ups
            and improving conversions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {whatsIncluded.map((service, idx) => {

            const isHovered = hovered === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden rounded-[28px] transition-all duration-300"
                style={{

                  /* 🔥 THIS IS THE HOVER BACKGROUND */
                  background: isHovered ? "#6400A1" : service.lightBg,

                  border: `1.5px solid ${
                    isHovered ? "#6400A1" : service.borderColor
                  }`,

                  /* 🔥 THIS IS THE HOVER SHADOW */
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(100,0,161,0.25)"
                    : "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >

                {/* Glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                  style={{
                    background: isHovered
                      ? "rgba(255,255,255,0.08)"
                      : "#6400A110",
                  }}
                />

                <div className="relative p-7 min-h-[390px] flex flex-col">

                  {/* Icon */}
                  <div className="flex justify-center mb-6">

                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
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
    transition: "0.3s ease",
  }}
/>
                      
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[24px] font-bold text-center leading-tight mb-3"
                    style={{
                      color: isHovered ? "#fff" : "#111827",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[14px] leading-[1.8] text-center mb-6"
                    style={{
                      color: isHovered
                        ? "rgba(255,255,255,0.82)"
                        : "#667085",
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-5"
                    style={{
                      background: isHovered
                        ? "rgba(255,255,255,0.15)"
                        : "#E2E8F0",
                    }}
                  />

                  {/* Highlights */}
                  <div className="space-y-1">

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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                      style={{
                        background: isHovered
                          ? "rgba(255,255,255,0.12)"
                          : "#6400A110",

                        color: isHovered
                          ? "#fff"
                          : "#6400A1",
                      }}
                    >
                      ✓ Included In Growth System
                    </div>
                  </div>
                </div>

                {/* Bottom Border */}
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
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}