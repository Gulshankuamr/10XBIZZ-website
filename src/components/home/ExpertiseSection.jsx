import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: 1,
    label: "LEAD GENERATION SYSTEMS",
    title: "Generate High-Intent Leads That Actually Convert",
    description:
      "We build Meta Ads, Google Ads, and conversion-focused campaigns designed to attract qualified enquiries and improve lead quality.",
    cta: "👉 More than traffic — we build predictable lead generation systems.",
    image:
      "/LEAD GENERATION SYSTEMS.webp",
  },

  {
    id: 2,
    label: "CRM & LEAD MANAGEMENT",
    title: "Organize Every Enquiry With A Smarter CRM Workflow",
    description:
      "Track, manage, and monitor every lead inside a centralized CRM system designed to improve follow-ups and conversions.",
    cta: "👉 No more lost leads or scattered customer conversations.",
    image:
      "/CRM & LEAD MANAGEMENT.webp",
  },

  {
    id: 3,
    label: "WHATSAPP & AUTOMATION",
    title: "Automate Follow-Ups & Customer Communication",
    description:
      "We create automated workflows for WhatsApp, reminders, lead nurturing, and instant responses to improve customer engagement.",
    cta: "👉 Faster responses lead to better conversions.",
    image:
      "/WHATSAPP & AUTOMATION.webp",
  },

  {
    id: 4,
    label: "FUNNELS & LANDING PAGES",
    title:
      "Build Landing Pages Designed To Convert Visitors Into Leads",
    description:
      "We create high-converting funnels and landing pages optimized for lead generation, user experience, and business growth.",
    cta: "👉 Every page is built with conversion strategy in mind.",
    image:
      "/FUNNELS & LANDING PAGES.webp",
  },

  {
    id: 5,
    label: "SEO & LOCAL GROWTH",
    title:
      "Improve Your Visibility & Generate Organic Business Growth",
    description:
      "From SEO optimization to Google My Business management, we help businesses get discovered by the right audience online.",
    cta: "👉 Long-term visibility starts with strong search presence.",
    image:
      "/SEO & LOCAL GROWTH.webp",
  },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState(3);
  const activeService = services[active];

  return (
    <section
      className="min-h-screen w-full py-12 lg:py-[72px] pb-16 lg:pb-20 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
      style={{ background: "#6400A1" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Top Header ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-10 lg:mb-[72px]">

          {/* Left: Heading */}
   <div className="flex-none w-full lg:max-w-[560px]">
  <div className="flex items-center gap-[10px] mb-[18px]">
    <div
      className="w-9 h-[2px]"
      style={{ background: "#000" }}
    />

    <span
      className="text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase"
      style={{ color: "#000" }}
    >
      Our Expertise
    </span>
  </div>

  <h2
    className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px]"
    style={{ color: "#fff" }}
  >
    Growth Systems Designed To{" "}
    <span
      className="inline-block font-bold tracking-[-0.02em]"
      style={{ color: "#000" }}
    >
      Generate & Convert
    </span>{" "}
    Leads
  </h2>
</div>

{/* Right: Body copy */}
<div className="w-full lg:flex-1 lg:max-w-[480px] lg:pt-2">
  <p
    className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl"
    style={{ color: "#fff" }}
  >
    We combine{" "}
    <span
      className="font-bold"
      style={{ color: "#000" }}
    >
      lead generation
    </span>
    ,{" "}
    <span
      className="font-bold"
      style={{ color: "#000" }}
    >
      CRM
    </span>
    ,{" "}
    <span
      className="font-bold"
      style={{ color: "#000" }}
    >
      automation
    </span>
    , and{" "}
    <span
      className="font-bold"
      style={{ color: "#000" }}
    >
      conversion strategy
    </span>{" "}
    to help businesses grow more efficiently.
  </p>
</div>
        </div>

        {/* ── Main Layout ── */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[480px_1fr] gap-6 lg:gap-8 items-stretch lg:min-h-[520px]">

          {/* LEFT: Service Tabs */}
          <div className="flex flex-col gap-2 lg:gap-3 lg:justify-center">
            {services.map((service, idx) => {
              const isActive = active === idx;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActive(idx)}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.background = "rgba(254, 211, 3, 1)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = "#FFFFFF";
                  }}
                  className="relative w-full px-4 lg:px-6 py-4 lg:py-5 rounded-2xl cursor-pointer flex items-center justify-between outline-none overflow-hidden transition-all duration-300"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg,#6400A1 0%,#BB000F 100%)"
                      : "#FFFFFF",
                    border: isActive
                      ? "1.5px solid transparent"
                      : "1.5px solid #E5E7EB",
                    boxShadow: isActive
                      ? "0 8px 28px rgba(100,0,161,0.22)"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  <span
                    className="text-sm md:text-base leading-[1.5] transition-all duration-300 text-left"
                    style={{
                      color: isActive ? "#FFFFFF" : "#374151",
                      fontWeight: isActive ? 700 : 600,
                    }}
                  >
                    {service.label}
                  </span>

                  <motion.div
                    animate={{
                      background: isActive ? "rgba(255,255,255,0.2)" : "#F3F4F6",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke={isActive ? "#fff" : "#6400A1"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Image + Overlay */}
          <div
            className="relative rounded-[20px] overflow-hidden min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]"
            style={{ background: "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)" }}
          >
            {/* Full cover image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.08) 100%)",
              }}
            />

            {/* Bottom Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeService.id}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 px-5 lg:px-8 pb-5 lg:pb-8 pt-4 lg:pt-6"
              >
                <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-[1.3] mb-2">
                  {activeService.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base font-semibold leading-[1.5] mb-3 max-w-[650px]">
                  {activeService.description}
                </p>
                <p className="text-amber-400 text-sm md:text-base font-semibold leading-[1.5]">
                  {activeService.cta}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}