import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import HeroActionButton from "../ui/HeroActionButton";

const stats = [
  { value: "10+", label: "Years Of Industry\nExperience" },
  { value: "250+", label: "Businesses &\nBrands Supported" },
  { value: "500+", label: "Campaigns &\nAutomation Systems" },
  { value: "24/7", label: "Lead Capture &\nFollow-Up Systems" },
];

// const badges = [
//   "High-Intent Lead Generation",
//   "CRM & Lead Management",
//   "WhatsApp Automation",
//   "SEO & Local Search Growth",
//   "Funnel & Landing Page Systems",
//   "Conversion-Focused Strategy",
// ];

function CountUp({ target, duration = 1800 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isSpecial = target === "24/7";
    if (isSpecial) {
      setDisplay("24/7");
      return;
    }
    const numericPart = parseInt(target);
    const suffix = target.replace(/[0-9]/g, "");
    let start = 0;
    const step = numericPart / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        setDisplay(target);
        clearInterval(timer);
      } else setDisplay(Math.floor(start) + suffix);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      className="w-full py-20 lg:py-32 overflow-hidden"
      style={{ background: "#F4F4F0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Epilogue:wght@700;800;900&display=swap');

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1.5px solid #E2E2DC;
          border-radius: 100px;
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          transition: all 0.3s ease;
          font-family: 'Sora', sans-serif;
        }
        .badge-pill:hover {
          border-color: #FED303;
          background: #FED303;
          transform: translateY(-2px);
        }
        .enq-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1a1a1a;
          color: #fff;
          border-radius: 100px;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 700;
          transition: all 0.3s ease;
          font-family: 'Sora', sans-serif;
        }
        .enq-btn:hover {
          background: #FED303;
          color: #1a1a1a;
          box-shadow: 0 10px 20px rgba(254, 211, 3, 0.2);
        }
        .stat-card {
          position: relative;
          background: #fff;
          padding: 32px 24px;
          border-right: 1.5px solid #F4F4F0;
        }
        .stat-card:last-child { border-right: none; }
        .highlight-yellow {
          color: #6400A1;; /* Slightly deeper yellow for readability on light bg */
        }
        @media (max-width: 1023px) {
          .stat-card { border-right: none; border-bottom: 1.5px solid #F4F4F0; }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT COLUMN: Heading & CTA */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="w-12 h-1 bg-black mb-8" />
              <h1 className="font-['Epilogue',sans-serif] font-black leading-tight tracking-tight text-[20px] md:text-[44px] max-w-[620px] mb-8 text-[#1a1a1a]">
                Trusted Growth Partner <br className="hidden md:block" />
                For Businesses{" "}
                <span className="text-[#6400A1]">Ready To Scale</span>
              </h1>

              <HeroActionButton className="enq-btn">
                Enquire Now <span>→</span>
              </HeroActionButton>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN: Description & Data */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeUp delay={0.1}>
              <div className="space-y-6 text-[#444] font-['Sora',sans-serif]">
                <p className="text-xl font-bold text-[#1a1a1a] leading-snug">
                  We deliver—results that speak for themselves.
                </p>
                <p className="text-lg leading-[1.8]">
                  At <strong className="text-black">10xBizz</strong>, we help
                  businesses build complete lead generation and conversion
                  systems designed to attract qualified leads, automate
                  follow-ups, and improve sales performance.
                </p>
                <p className="text-lg leading-[1.8]">
                  From Google Ads and Meta Ads to CRM setup and WhatsApp
                  automation, we create systems that help businesses grow with{" "}
                  <strong className="text-black">
                    clarity instead of guesswork.
                  </strong>
                </p>
                <p className="text-lg leading-[1.8]">
                  Whether you want to generate more leads or build a complete
                  business growth system — we help you create a{" "}
                  <strong className="text-black">scalable foundation</strong>{" "}
                  for long-term success.
                </p>
              </div>
            </FadeUp>

            {/* Stats Grid */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[24px] overflow-hidden border-[1.5px] border-[#E2E2DC] shadow-sm">
                {stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="font-['Epilogue',sans-serif] font-black text-4xl mb-2 highlight-yellow">
                      <CountUp target={s.value} />
                    </div>
                    <div className="text-[12px] uppercase tracking-wider font-bold text-[#888] leading-tight whitespace-pre-line">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Badges */}
            {/* <FadeUp delay={0.3}>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999]">
                  Growth Built On Systems
                </p>
                <div className="flex flex-wrap gap-3">
                  {badges.map((b, i) => (
                    <span key={i} className="badge-pill">
                      <span className="text-[#6400A1;]">✔</span> {b}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp> */}

            {/* Final Quote Bar */}
          </div>
        </div>
      </div>
    </section>
  );
}
