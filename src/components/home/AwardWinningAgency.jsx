import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import HeroActionButton from "../ui/HeroActionButton";
import { Link } from "react-router-dom";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";

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

  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      className="w-full py-20 lg:py-32 overflow-hidden font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
      style={{ background: "#F4F4F0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1.5px solid #E2E2DC;
          border-radius: 100px;
          padding: 8px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #1a1a1a;
          transition: all 0.3s ease;
          font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
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
          line-height: 1;
          transition: all 0.3s ease;
          font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
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
          color: #6400A1;
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
        

        <h1 className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-[34px] md:text-[50px] lg:text-[58px] font-bold leading-[1.05] tracking-[-0.02em] max-w-[900px] mb-8 text-[#1a1a1a]">
          We Build Systems That Help <br className="hidden md:block" />
          Businesses{" "}
          <span className="text-[#6400A1] inline-block font-bold tracking-[-0.02em]">
            Grow Smarter
          </span>
        </h1>

        <HeroActionButton
          // className="enq-btn"
          onClick={() => setOpenModal(true)}
        >
          Enquire Now
        </HeroActionButton>
      </FadeUp>
    </div>

    {/* RIGHT COLUMN: Description & Data */}
    <div className="lg:col-span-7 flex flex-col gap-10">

      <FadeUp delay={0.1}>
        <div className="space-y-6 text-[#444] font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">

          <p className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-[#1a1a1a]">
            Performance-driven systems built for scalable business growth.
          </p>

          <p className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl">
            At <strong className="font-bold text-black">10xBizz</strong>, we
            help businesses generate qualified leads, automate follow-ups, and
            improve conversions through performance-driven growth systems.
          </p>

          <p className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl">
            From Meta Ads and Google Ads to CRM setup, landing pages, and
            WhatsApp automation — we create scalable systems designed to
            simplify growth and improve customer acquisition.
          </p>

          <p className="text-base md:text-[18px] font-medium leading-[1.7] max-w-2xl">
            Whether you're looking to generate more leads, improve conversion
            rates, or build a stronger online presence, we help you create a
            foundation built for{" "}
            <strong className="font-bold text-black">
              long-term growth.
            </strong>
          </p>

        </div>
      </FadeUp>

      {/* Stats Grid */}
      <FadeUp delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[24px] overflow-hidden border-[1.5px] border-[#E2E2DC] shadow-sm">

          {[
            {
              value: "3+",
              label: "Years of Growth Experience",
            },
            {
              value: "50+",
              label: "Campaigns Managed",
            },
            {
              value: "1000+",
              label: "Qualified Leads Generated",
            },
            {
              value: "24/7",
              label: "Lead Capture Systems",
            },
          ].map((s, i) => (
            <div key={i} className="stat-card">

              <div className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] mb-2 highlight-yellow">
                {s.value}
              </div>

              <div className="text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase text-[#888] leading-tight whitespace-pre-line">
                {s.label}
              </div>

            </div>
          ))}

        </div>
      </FadeUp>

    </div>
  </div>
</div>
      {openModal && (
  <FreeMarketingPlan onClose={() => setOpenModal(false)} />
)}
    </section>
  );
}