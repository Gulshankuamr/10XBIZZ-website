import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerDownRight } from "lucide-react"; // सुंदर बेंडिंग एरो आइकॉन के लिए

const services = [
  {
    id: 1,
    label: "LEAD GENERATION SYSTEMS",
    title: "Generate High-Intent Leads That Actually Convert",
    description:
      "We build Meta Ads, Google Ads, and conversion-focused campaigns designed to attract qualified enquiries and improve lead quality.",
    cta: "More than traffic — we build predictable lead generation systems.",
    image: "/LEAD GENERATION SYSTEMS.webp",
  },
  {
    id: 2,
    label: "CRM & LEAD MANAGEMENT",
    title: "Organize Every Enquiry With A Smarter CRM Workflow",
    description:
      "Track, manage, and monitor every lead inside a centralized CRM system designed to improve follow-ups and conversions.",
    cta: "No more lost leads or scattered customer conversations.",
    image: "/CRM & LEAD MANAGEMENT.webp",
  },
  {
    id: 3,
    label: "WHATSAPP & AUTOMATION",
    title: "Automate Follow-Ups & Customer Communication",
    description:
      "We create automated workflows for WhatsApp, reminders, lead nurturing, and instant responses to improve customer engagement.",
    cta: "Faster responses lead to better conversions.",
    image: "/WHATSAPP & AUTOMATION.webp",
  },
  {
    id: 4,
    label: "FUNNELS & LANDING PAGES",
    title: "Build Landing Pages Designed To Convert Visitors Into Leads",
    description:
      "We create high-converting funnels and landing pages optimized for lead generation, user experience, and business growth.",
    cta: "Every page is built with conversion strategy in mind.",
    image: "/FUNNELS & LANDING PAGES.webp",
  },
  {
    id: 5,
    label: "SEO & LOCAL GROWTH",
    title: "Improve Your Visibility & Generate Organic Business Growth",
    description:
      "From SEO optimization to Google My Business management, we help businesses get discovered by the right audience online.",
    cta: "Long-term visibility starts with strong search presence.",
    image: "/SEO & LOCAL GROWTH.webp",
  },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const activeService = services[active];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % services.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

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
          <div className="flex-none w-full lg:max-w-[560px]">
            <div className="flex items-center gap-[10px] mb-[18px]">
              <div className="w-9 h-[2px]" style={{ background: "#fff" }} />
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase" style={{ color: "#fff" }}>
                Our Expertise
              </span>
            </div>
            <h2
              className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px]"
              style={{ color: "#fff" }}
            >
              Growth Systems Designed To{" "}
              <span className="inline-block font-bold tracking-[-0.02em]" style={{ color: "#FFD600" }}>
                Generate & Convert
              </span>{" "}
              Leads
            </h2>
          </div>

          <div className="w-full lg:flex-1 lg:max-w-[480px] lg:pt-2">
            <p className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl" style={{ color: "#ffffffcc" }}>
              We combine{" "}
              <span className="font-bold" style={{ color: "#FFD600" }}>lead generation</span>,{" "}
              <span className="font-bold" style={{ color: "#FFD600" }}>CRM</span>,{" "}
              <span className="font-bold" style={{ color: "#FFD600" }}>automation</span>, and{" "}
              <span className="font-bold" style={{ color: "#FFD600" }}>conversion strategy</span>{" "}
              to help businesses grow more efficiently.
            </p>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div
          className="flex flex-col-reverse lg:grid lg:grid-cols-[480px_1fr] gap-6 lg:gap-8 items-stretch lg:min-h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* LEFT: Service Tabs */}
          <div className="flex flex-col gap-2 lg:gap-3 lg:justify-center">
            {services.map((service, idx) => {
              const isActive = active === idx;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActive(idx)}
                  whileTap={{ scale: 0.98 }}
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
                      color: isActive ? "#FFFFFF" : "#000000",
                      fontWeight: 700,
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

          {/* RIGHT: Image Container with Text Content */}
          <div className="relative rounded-[20px] overflow-hidden min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">

            {/* Image Switcher */}
            <AnimatePresence mode="sync">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Bottom Text Overlay with Custom Gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                paddingTop: "100px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeService.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="px-5 lg:px-8 pb-5 lg:pb-8 pt-4 lg:pt-6"
                >
                  {/* Label Badge */}
                  <span
                    className="inline-block text-[10px] md:text-[11px] font-black uppercase tracking-[0.12em] px-3 py-1 rounded-full mb-3"
                    style={{ background: "#FFD600", color: "#000" }}
                  >
                    {activeService.label}
                  </span>

                  {/* Title (Fix: text-black removed, changed to text-white) */}
                  <h3
                    className="text-white text-[20px] md:text-[26px] font-black leading-[1.25] mb-2"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                  >
                    {activeService.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/85 text-sm md:text-[15px] font-semibold leading-[1.6] mb-4 max-w-[620px]">
                    {activeService.description}
                  </p>

                  {/* CTA Area with Corner Down Right Arrow Icon */}
                  <div className="flex items-start gap-2.5">
                    <div 
                      className="flex items-center justify-center rounded-lg p-1 shrink-0 mt-0.5"
                      style={{ background: "rgba(255, 214, 0, 0.15)" }}
                    >
                      {/* Custom Arrow Icon */}
                      <CornerDownRight size={18} style={{ color: "#FFD600" }} strokeWidth={2.5} />
                    </div>
                    <p
                      className="text-sm md:text-[15px] font-bold leading-[1.5]"
                      style={{ color: "#FFD600" }}
                    >
                      {activeService.cta}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}