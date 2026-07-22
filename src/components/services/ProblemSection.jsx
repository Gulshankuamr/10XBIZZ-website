import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Budget Burns, Zero Leads",
    desc: "Your ad spend vanishes every day but qualified leads never show up — just empty clicks that drain your wallet and kill your monthly targets.",
    image: "/image1.png",
    borderColor: "#FEE2E2",
  },
  {
    id: 2,
    title: "High CPC, Low Conversions",
    desc: "You're paying a premium per click but visitors bounce without converting — costing you more for less every single day, with no clear path to scale.",
    image: "/image2.png",
    borderColor: "#F5F3FF",
  },
  {
    id: 3,
    title: "No Conversion Tracking",
    desc: "Running ads without tracking is like driving blindfolded. You have zero data to optimise and no way to scale what works — every rupee spent is a pure gamble.",
    image: "/image3.png",
    borderColor: "#FEF3C7",
  },
  {
    id: 4,
    title: "Wrong Audience Targeting",
    desc: "Your ads reach people who'll never buy — wrong demographics, wrong intent, wrong moment. Money wasted on the wrong crowd day after day.",
    image: "/image4.png",
    borderColor: "#DCFCE7",
  },
  {
    id: 5,
    title: "Zero ROI Visibility",
    desc: "You have no clue which campaigns make money and which burn it. Every month is a costly guess — not a data-backed strategy that compounds over time.",
    image: "/image5.png",
    borderColor: "#DBEAFE",
  },
  {
    id: 6,
    title: "Poor Campaign Structure",
    desc: "Messy ad groups and weak copy tank your Quality Score — pushing your costs up and performance down every single week. It's time for a cleanup.",
    image: "/image6.png",
    borderColor: "#EDE9FE",
  },
];

const ACCENT = "#6400A1";

const FloatingShape = ({ delay, duration, className }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] opacity-20 ${className}`}
    animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function ProblemSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif] bg-[#FAFBFF] py-12 px-6 relative overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');`}</style>

      {/* Bg Decor */}
      <FloatingShape delay={0} duration={8} className="w-96 h-96 bg-purple-200 -top-20 -left-20" />
      <FloatingShape delay={2} duration={10} className="w-96 h-96 bg-blue-100 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span className="text-[12px] font-bold tracking-[4px] text-red-500 uppercase mb-4 block">
            Critical Issues
          </motion.span>
          <motion.h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[-0.02em]">
            Why Most <span style={{ color: ACCENT }}>Google Ads</span> Fail
          </motion.h2>
          <motion.p className="text-lg text-gray-900 max-w-2xl mx-auto font-medium">
            Stop guessing with your budget. We identify the leaks in your funnel that are draining your profits.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, idx) => {
            const isHovered = hovered === card.id;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  borderRadius: 32,
                  overflow: "hidden",
                  border: `4px solid ${isHovered ? ACCENT : "#0f172a"}`,
                  background: "#ffffff",
                  boxShadow: isHovered ? "4px 4px 0 0 rgba(0,0,0,1)" : "8px 8px 0 0 rgba(0,0,0,1)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "default"
                }}
                className="hover:-translate-y-1 hover:translate-x-1"
              >
                {/* Image Section - No Blur/Overlay on Hover */}
                <div style={{ height: 260, overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(0%)", // Explicitly no grayscale or blur
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}
                  />
                </div>

                {/* Content Section - Hover Effect Happens Here */}
                <div 
                  style={{ 
                    padding: "32px", 
                    flex: 1, 
                    display: "flex", 
                    flexDirection: "column",
                    background: isHovered ? ACCENT : "#ffffff",
                    transition: "background 0.2s ease"
                  }}
                >
                  <h3 style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: isHovered ? "#ffffff" : "#111",
                    marginBottom: 16,
                    lineHeight: 1.2,
                    transition: "color 0.2s ease"
                  }}>
                    {card.title}
                  </h3>

                  <p style={{
                    fontSize: 15,
                    fontWeight: 600, // Modern Bold Look
                    color: isHovered ? "rgba(255,255,255,0.9)" : "#1f2937",
                    lineHeight: 1.7,
                    marginBottom: 24,
                    flex: 1,
                    transition: "color 0.2s ease"
                  }}>
                    {card.desc}
                  </p>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        color: isHovered ? "#ffffff" : ACCENT,
                        transition: "all 0.2s ease",
                      }}
                    >
                      Analyze My Campaign
                      <span style={{
                        fontSize: 18,
                        transform: isHovered ? "translateX(5px)" : "translateX(0)",
                        transition: "transform 0.2s ease"
                      }}>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}