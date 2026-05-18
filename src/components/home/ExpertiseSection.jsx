import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: 1,
    label: "Web & Mobile Development",
    title: "Build Fast, Modern & Conversion-Focused Digital Experiences",
    description:
      "We create high-performance websites, landing pages, and mobile applications designed to help businesses generate leads, improve user experience, and grow faster online.",
    cta: "👉 From websites to full business platforms — we build systems that perform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    id: 2,
    label: "Branding & Design",
    title: "Create A Brand People Remember & Trust",
    description:
      "We help businesses build strong visual identities through strategic branding, modern UI/UX design, social creatives, and conversion-focused marketing assets.",
    cta: "👉 Strong branding creates trust before the first conversation even starts.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
  },
  {
    id: 3,
    label: "Video Content Production",
    title: "Video Content That Captures Attention & Drives Action",
    description:
      "From reels and ad creatives to promotional videos and brand storytelling, we create engaging content designed to increase visibility, engagement, and conversions.",
    cta: "👉 Attention is the new currency — video helps your brand win it.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
  },
  {
    id: 4,
    label: "Social Media Marketing",
    title: "Grow Your Brand With Performance-Driven Social Media Marketing",
    description:
      "We help businesses generate quality leads, improve engagement, and scale revenue using Meta Ads, content strategy, audience targeting, and automated follow-up systems.",
    cta: "👉 We don't just post content — we build growth systems.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
  },
  {
    id: 5,
    label: "CRM & Automation Systems",
    title: "Automate Lead Management & Never Miss A Customer",
    description:
      "We set up CRM systems, WhatsApp automation, lead tracking, and follow-up workflows that help businesses organize enquiries and convert more leads into paying customers.",
    cta: "👉 No missed leads. No manual chaos. Just smarter business growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
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
                style={{ background: "linear-gradient(90deg,#6400A1,#BB000F)" }}
              />
              <span
                className="text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase"
                style={{
                  background: "linear-gradient(90deg,#6400A1,#BB000F)",
                  color: "black",
                }}
              >
                Our Expertise
              </span>
            </div>
            <h2
              className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px]"
              style={{ color: "#fff" }}
            >
              Assuring seamless{" "}
              <span
                className="inline-block font-bold tracking-[-0.02em]"
                style={{
                  background: "linear-gradient(90deg,#6400A1,#BB000F)",
                  color: "black",
                }}
              >
                Digital Marketing
              </span>{" "}
              /Brand Building solutions
            </h2>
          </div>

          {/* Right: Body copy */}
          <div className="w-full lg:flex-1 lg:max-w-[480px] lg:pt-2">
            <p className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl" style={{ color: "#fff" }}>
              With over a decade of experience. We have served over{" "}
              <span className="inline-block font-bold tracking-[-0.02em]" style={{ background: "linear-gradient(90deg,#6400A1,#BB000F)" }}>
                250+ brands
              </span>{" "}
              across{" "}
              <span className="inline-block font-bold tracking-[-0.02em]" style={{ background: "linear-gradient(90deg,#6400A1,#BB000F)" }}>
                10+ countries
              </span>{" "}
              and delivered over{" "}
              <span className="inline-block font-bold tracking-[-0.02em]" style={{ background: "linear-gradient(90deg,#6400A1,#BB000F)" }}>
                350+ projects
              </span>{" "}
              for successfully achieving our clients brand marketing goals
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