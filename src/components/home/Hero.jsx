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

        .hero-paragraph {
          text-align: justify;
          text-align-last: left;
          -webkit-hyphens: auto;
          hyphens: auto;
          word-spacing: -0.01em;
          hanging-punctuation: first last;
        }

        @media (max-width: 640px) {
          .hero-paragraph {
            text-align: left;
            text-align-last: left;
          }
        }

        /* Glowing border container */
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 560px;
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
          max-width: 100%;
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

        .hero-image-float {
          animation: floatImage 6s ease-in-out infinite;
          width: 100%;
          max-width: 560px;
        }

        /* Buttons */
        .btn-primary {
          background: linear-gradient(104deg, #6400A1 0%, #FF1920 100%);
          color: #fff;
          font-weight: 600;
          border-radius: 9999px;
          padding: 12px 28px;
          box-shadow: 0 4px 20px rgba(100,0,161,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
          font-size: 15px;
          white-space: nowrap;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(100,0,161,0.35);
        }

        .btn-whatsapp {
          background: #fff;
          color: #25D366;
          font-weight: 600;
          border-radius: 9999px;
          padding: 12px 28px;
          border: 2px solid #25D366;
          cursor: pointer;
          font-size: 15px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, background 0.2s, color 0.2s;
        }
        .btn-whatsapp:hover {
          background: #25D366;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Trust indicators */
        .trust-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 16px;
          margin-top: 18px;
          align-items: center;
        }
        .trust-item {
          font-size: 13px;
          color: #667085;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .trust-dot {
          color: #c0c0c0;
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .hero-left { max-width: 100% !important; }
          .hero-image-float { max-width: 100%; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 px-6 py-14 lg:py-16 items-center">

          {/* LEFT SECTION */}
          <div className="hero-left max-w-[520px] mt-6 lg:mt-24">

            <div className="inline-flex rounded-full bg-[#F7E9FF] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#8A1AC8]">
              CRM Growth System
            </div>

            <h1 className="mt-6 text-[38px] sm:text-[42px] font-bold leading-[1.15] text-[#111]">
              Generate More Leads and Automate Your Sales Process With CRM Automation That{" "}
              <span className={`hero-rotate ${fade ? "fade-in" : "fade-out"}`}>
                {ROTATING_TEXTS[textIdx]}
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#667085] leading-[1.75] hero-paragraph">
              We help small businesses, coaches, tutors, and service providers
              grow using CRM automation, paid ads, funnels, and WhatsApp
              follow-up systems.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setOpenModal(true)}
                className="btn-primary"
              >
                Book Free Strategy Call →
              </button>

              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="trust-bar">
              <span className="trust-item">⚡ Faster lead response</span>
              <span className="trust-dot">•</span>
              <span className="trust-item">🔁 Better follow-up</span>
              <span className="trust-dot">•</span>
              <span className="trust-item">🎯 More qualified enquiries</span>
            </div>

          </div>

          {/* RIGHT SECTION — Hero Image */}
          <div className="flex items-center justify-center lg:justify-end mt-12 lg:mt-0 w-full">
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