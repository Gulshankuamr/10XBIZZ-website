import { useEffect, useState } from "react";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";

/* ROTATING TEXT */
const ROTATING_TEXTS = [
  "Generates High Quality Leads",
  "Automates Your Sales Process",
  "Increases Your Conversions",
  "Scales Your Business Faster",
];

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIdx((i) => (i + 1) % ROTATING_TEXTS.length);
        setFade(true);
      }, 260);
    }, 2600);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        .hero-rotate {
          background: linear-gradient(104deg, #6400A1, #FF1920);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          transition: opacity 0.3s, transform 0.3s;
          display: inline-block;
        }

        .fade-in { opacity: 1; transform: translateY(0); }
        .fade-out { opacity: 0; transform: translateY(10px); }

        /* ✅ FIX: justify paragraph — left straight, right justified */
        .hero-paragraph {
          text-align: justify;
          text-align-last: left;
          -webkit-hyphens: auto;
          hyphens: auto;
          word-spacing: -0.01em;
          hanging-punctuation: first last;
        }

        /* Mobile: normal left align */
        @media (max-width: 640px) {
          .hero-paragraph {
            text-align: left;
            text-align-last: left;
          }
        }

        /* Glowing border container */
        .hero-image-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 32px;
          padding: 3px;
          background: linear-gradient(135deg, #6400A1 0%, #a855f7 40%, #FF1920 100%);
          box-shadow:
            0 0 40px rgba(100, 0, 161, 0.45),
            0 0 80px rgba(168, 85, 247, 0.25),
            0 0 120px rgba(255, 25, 32, 0.15);
          animation: glowPulse 4s ease-in-out infinite;
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 34px;
          background: linear-gradient(135deg, #6400A1, #a855f7, #FF1920, #6400A1);
          background-size: 300% 300%;
          animation: borderRotate 6s linear infinite;
          z-index: -1;
          filter: blur(8px);
          opacity: 0.7;
        }

        .hero-image-wrapper img {
          display: block;
          border-radius: 30px;
          width: 100%;
          max-width: 580px;
          height: auto;
          position: relative;
          z-index: 1;
        }

        .hero-image-mask {
          border-radius: 30px;
          overflow: hidden;
          position: relative;
        }

        .hero-image-mask::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: radial-gradient(
            ellipse at center,
            transparent 55%,
            rgba(255,255,255,0.18) 80%,
            rgba(255,255,255,0.55) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 40px rgba(100, 0, 161, 0.45),
              0 0 80px rgba(168, 85, 247, 0.25),
              0 0 120px rgba(255, 25, 32, 0.15);
          }
          50% {
            box-shadow:
              0 0 60px rgba(100, 0, 161, 0.65),
              0 0 110px rgba(168, 85, 247, 0.40),
              0 0 160px rgba(255, 25, 32, 0.25);
          }
        }

        @keyframes borderRotate {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        /* ✅ FIX: animation property was missing 'animation:' keyword */
        .hero-image-float {
          animation: floatImage 6s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-left { margin-left: 0 !important; max-width: 100% !important; }
          .hero-image-wrapper img { max-width: 100%; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-white">
       <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-14 lg:py-16 items-center">

          {/* LEFT SECTION */}
         <div className="hero-left max-w-[520px] lg:-ml-8 xl:-ml-20 mt-6 lg:mt-40">

            <div className="inline-flex rounded-full bg-[#F7E9FF] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#8A1AC8]">
              CRM Growth System
            </div>

            <h1 className="mt-6 text-[38px] sm:text-[42px] font-bold leading-[1.15] text-[#111]">
              Grow Your Business<br />
              with CRM Automation That{" "}
              <span className={`hero-rotate ${fade ? "fade-in" : "fade-out"}`}>
                {ROTATING_TEXTS[textIdx]}
              </span>
            </h1>

            {/* ✅ FIXED: hero-paragraph class applied */}
            <p className="mt-6 text-lg text-[#667085] leading-[1.75] hero-paragraph">
              We help businesses generate high-quality leads and automate
              their sales process using CRM systems, paid ads and conversion
              funnels.
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="mt-8 rounded-full px-7 py-3 text-white font-semibold shadow-lg hover:-translate-y-1 transition"
              style={{
                background: "linear-gradient(104deg,#6400A1 0%,#FF1920 100%)",
              }}
            >
              Get Free Marketing Plan →
            </button>
          </div>

          {/* RIGHT SECTION — Hero Image */}
          <div className="flex items-center justify-center lg:justify-end mt-40">
            <div className="hero-image-float">
              <div className="hero-image-wrapper">
                <div className="hero-image-mask">
                  <img
                    src="/heroimage.webp"
                    alt="10xBizz Growth System"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {openModal && <FreeMarketingPlan onClose={() => setOpenModal(false)} />}
    </>
  );
}