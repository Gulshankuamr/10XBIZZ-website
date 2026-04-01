import { useState, useEffect } from "react";

// ── Money bill SVG decoration ──────────────────────────────────
const Bill = ({ style, rotate = 0, scale = 1 }) => (
  <div
    className="pointer-events-none absolute"
    style={{ ...style, transform: `rotate(${rotate}deg) scale(${scale})`, zIndex: 0 }}
  >
    <svg width="64" height="42" viewBox="0 0 64 42" fill="none">
      <rect width="64" height="42" rx="6" fill="#4CAF72" />
      <rect x="4" y="4" width="56" height="34" rx="4" fill="none" stroke="#3d9960" strokeWidth="1.5" />
      <circle cx="32" cy="21" r="9" fill="#3d9960" />
      <text x="32" y="25.5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#a8f0c2" fontFamily="sans-serif">$</text>
      <rect x="6" y="9" width="10" height="6" rx="2" fill="#3d9960" />
      <rect x="48" y="27" width="10" height="6" rx="2" fill="#3d9960" />
    </svg>
  </div>
);

// ── Step configs matching the wireframe ────────────────────────
const STEPS = [
  {
    // 1st modal — multi-select pills
    heading: "What do you need help with?",
    sub: "Select all that apply",
    type: "multi",
    options: [
      "Paid Advertising",
      "Content Marketing",
      "Creative Work",
      "Search Engine Optimization (SEO)",
      "Conversion Rate Optimization (CRO)",
      "Paid Search",
      "Paid Social",
      "Other",
    ],
    btn: "START MY FREE MARKETING PLAN",
  },
  {
    // 2nd modal — goals, grid of pill-style buttons
    heading: "What are your goals?",
    sub: "Select all that apply",
    type: "multi-grid",
    options: [
      "Increase revenue",
      "Find more profit",
      "Get more conversions",
      "Lower my acquisition cost",
      "Improve my ROI",
      "All of the above",
      "Other",
    ],
    btn: "CONTINUE",
  },
  {
    // 3rd modal — budget range buttons in a grid
    heading: "What's your current monthly digital marketing budget?",
    sub: "Don't worry, we won't judge – an estimated guess is fine too",
    type: "budget",
    options: [
      "$0 – $1,000",
      "$1,001 – $5,000",
      "$5,001 – $10,000",
      "$10,001 – $25,000",
      "$25,001 – $100,000",
      "$100,001+",
    ],
    btn: "CONTINUE",
  },
  {
    // 4th modal — website URL input
    heading: "What's your company's website?",
    sub: "",
    type: "website",
    placeholder: "yoursite.com",
    btn: "LAST STEP",
  },
  {
    // 5th modal — final contact form
    heading: "We're putting your marketing plan & pricing options together. Who can we send them to?",
    sub: "",
    type: "contact",
    btn: "SEND MY FREE MARKETING PLAN",
  },
  {
    // Done screen
    heading: "🎉 Your Plan is Ready!",
    sub: "We'll review your answers and send your custom marketing plan shortly. Check your inbox!",
    type: "done",
    btn: "CLOSE",
  },
];

const TOTAL_STEPS = STEPS.length - 1;

// ── Component ──────────────────────────────────────────────────
export default function FreeMarketingPlan({ onClose }) {
  const [step, setStep] = useState(0);
  const [multiSel, setMultiSel] = useState([]);
  const [multiGridSel, setMultiGridSel] = useState([]);
  const [budgetSel, setBudgetSel] = useState(null);
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [bizEmail, setBizEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const current = STEPS[step];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const toggleMulti = (opt) =>
    setMultiSel((p) => p.includes(opt) ? p.filter((x) => x !== opt) : [...p, opt]);

  const toggleMultiGrid = (opt) =>
    setMultiGridSel((p) => p.includes(opt) ? p.filter((x) => x !== opt) : [...p, opt]);

  const canProceed = () => {
    if (current.type === "multi") return multiSel.length > 0;
    if (current.type === "multi-grid") return multiGridSel.length > 0;
    if (current.type === "budget") return !!budgetSel;
    if (current.type === "website") return website.trim().length > 0;
    if (current.type === "contact") return name.trim().length > 0 && bizEmail.trim().length > 0 && phone.trim().length > 0;
    return true;
  };

  const handleNext = () => {
    if (current.type === "done") { onClose?.(); return; }
    if (!canProceed()) return;
    setStep((s) => s + 1);
  };

  const isDone = current.type === "done";
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .fmp-wrap * { box-sizing: border-box; font-family: 'Inter', sans-serif; }

        /* ── Pill (multi-select, step 1) ── */
        .fmp-pill {
          cursor: pointer; user-select: none;
          border-radius: 12px; border: 2px solid #d0d7e2;
          padding: 10px 18px; font-size: 13.5px; font-weight: 500;
          background: #fff; color: #253046;
          box-shadow: 0 2px 6px -2px rgba(15,23,42,0.09);
          transition: all 0.15s ease;
        }
        .fmp-pill:hover:not(.fmp-pill-on) { border-color: #e8736e; color: #e8736e; }
        .fmp-pill-on { background: #e8736e !important; border-color: #e8736e !important; color: #fff !important; box-shadow: 0 4px 14px -4px rgba(232,115,110,0.40) !important; }

        /* ── Grid option (multi-grid, step 2) ── */
        .fmp-grid-opt {
          cursor: pointer; user-select: none;
          border-radius: 10px; border: 2px solid #d8dde6;
          padding: 12px 16px; font-size: 13.5px; font-weight: 500;
          background: #fff; color: #253046; text-align: center;
          transition: all 0.15s ease;
        }
        .fmp-grid-opt:hover:not(.fmp-grid-on) { border-color: #e8736e; color: #e8736e; background: #fff7f7; }
        .fmp-grid-on { border-color: #e8736e !important; background: #fff0ef !important; color: #e8736e !important; }

        /* ── Budget option (step 3) ── */
        .fmp-budget-opt {
          cursor: pointer; user-select: none;
          border-radius: 10px; border: 2px solid #d8dde6;
          padding: 14px 20px; font-size: 13.5px; font-weight: 600;
          background: #fff; color: #253046; text-align: center;
          transition: all 0.15s ease;
        }
        .fmp-budget-opt:hover:not(.fmp-budget-on) { border-color: #e8736e; color: #e8736e; background: #fff7f7; }
        .fmp-budget-on { border-color: #e8736e !important; background: #fff0ef !important; color: #e8736e !important; }

        /* ── Input ── */
        .fmp-input {
          width: 100%; border-radius: 10px; border: 2px solid #d8dde6;
          padding: 13px 18px; font-size: 14px; color: #0d1326;
          outline: none; background: #fff;
          transition: border-color 0.17s ease;
        }
        .fmp-input:focus { border-color: #e8736e; }
        .fmp-input::placeholder { color: #a0aab8; }

        /* ── Phone row ── */
        .fmp-phone-wrap { display: flex; gap: 10px; }
        .fmp-country-sel {
          border-radius: 10px; border: 2px solid #d8dde6;
          padding: 13px 12px; font-size: 14px; color: #0d1326;
          background: #fff; outline: none; cursor: pointer;
          min-width: 88px; transition: border-color 0.17s ease;
        }
        .fmp-country-sel:focus { border-color: #e8736e; }

        /* ── CTA button ── */
        .fmp-cta-btn {
          position: relative; z-index: 10;
          border-radius: 12px; border: none;
          padding: 16px 32px;
          font-size: 12.5px; font-weight: 800;
          letter-spacing: 0.16em; text-transform: uppercase; color: #fff;
          background: #e8736e; cursor: pointer;
          transition: filter 0.15s ease, transform 0.15s ease;
          min-width: 280px;
        }
        .fmp-cta-btn:hover:not(:disabled) { filter: brightness(1.08); transform: translateY(-1px); }
        .fmp-cta-btn:disabled { opacity: 0.38; cursor: not-allowed; }
        .fmp-cta-shadow {
          position: absolute; inset: 0; border-radius: 12px;
          background: #3d4756; transform: translate(5px, 5px); z-index: -1;
        }

        /* ── Progress ── */
        .fmp-progress { height: 4px; background: #eef0f4; border-radius: 99px; overflow: hidden; margin-bottom: 18px; }
        .fmp-progress-fill { height: 100%; background: #e8736e; border-radius: 99px; transition: width 0.35s ease; }

        /* ── Animation ── */
        .fmp-in { animation: fmpSlide 0.22s ease; }
        @keyframes fmpSlide {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Label ── */
        .fmp-label { font-size: 11.5px; font-weight: 600; color: #8a96a8; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 6px; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fmp-wrap"
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
          backgroundColor: "rgba(13,19,38,0.62)",
          backdropFilter: "blur(6px)",
        }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
      >
        {/* Modal */}
        <div
          className="fmp-in"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: step === 4 ? 620 : 660,
            background: "#fff",
            borderRadius: 20,
            border: "2.5px solid #c8d2e0",
            boxShadow: "0 32px 80px -20px rgba(15,23,42,0.38)",
            padding: "2rem 2.5rem 1.75rem",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              width: 30, height: 30, borderRadius: "50%",
              border: "none", background: "transparent",
              cursor: "pointer", color: "#8a96a8", fontSize: 14,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>

          {/* Progress bar */}
          {!isDone && (
            <div className="fmp-progress">
              <div className="fmp-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          )}

          {/* Step counter */}
          {!isDone && (
            <p className="fmp-label" style={{ marginBottom: 16 }}>
              STEP {step + 1} OF {TOTAL_STEPS}
            </p>
          )}

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: step === 4 ? "1.15rem" : "1.45rem", fontWeight: 800, color: "#0d1326", letterSpacing: "-0.02em", margin: 0 }}>
              {current.heading}
            </h2>
            {current.sub && (
              <p style={{ marginTop: 8, fontSize: 14, color: "#5e6574" }}>{current.sub}</p>
            )}
          </div>

          {/* ── STEP 1: Multi-select pills ── */}
          {current.type === "multi" && (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 32 }}>
              {current.options.map((opt) => (
                <button
                  key={opt}
                  className={`fmp-pill ${multiSel.includes(opt) ? "fmp-pill-on" : ""}`}
                  onClick={() => toggleMulti(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* ── STEP 2: Multi-grid goals ── */}
          {current.type === "multi-grid" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 28 }}>
              {current.options.map((opt) => (
                <button
                  key={opt}
                  className={`fmp-grid-opt ${multiGridSel.includes(opt) ? "fmp-grid-on" : ""}`}
                  onClick={() => toggleMultiGrid(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* ── STEP 3: Budget grid ── */}
          {current.type === "budget" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 28 }}>
              {current.options.map((opt) => (
                <button
                  key={opt}
                  className={`fmp-budget-opt ${budgetSel === opt ? "fmp-budget-on" : ""}`}
                  onClick={() => setBudgetSel(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* ── STEP 4: Website input ── */}
          {current.type === "website" && (
            <div style={{ marginBottom: 28 }}>
              <input
                className="fmp-input"
                type="text"
                placeholder={current.placeholder}
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          )}

          {/* ── STEP 5: Contact form ── */}
          {current.type === "contact" && (
            <div style={{ display: "grid", gap: 12, marginBottom: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <p className="fmp-label">Your Name *</p>
                  <input
                    className="fmp-input"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="fmp-label">Your Business Email *</p>
                  <input
                    className="fmp-input"
                    type="email"
                    placeholder="john@company.com"
                    value={bizEmail}
                    onChange={(e) => setBizEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <p className="fmp-label">Your Phone Number *</p>
                <div className="fmp-phone-wrap">
                  <select
                    className="fmp-country-sel"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <input
                    className="fmp-input"
                    style={{ flex: 1 }}
                    type="tel"
                    placeholder="+1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── Done ── */}
          {isDone && (
            <div style={{ textAlign: "center", padding: "12px 0 24px" }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
            </div>
          )}

          {/* ── CTA + bills ── */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", minHeight: 72, alignItems: "flex-end" }}>
            <Bill style={{ left: -12, bottom: 2 }} rotate={-20} scale={0.88} />
            <Bill style={{ left: 42, bottom: 14 }} rotate={-9} scale={0.70} />
            <Bill style={{ right: -12, bottom: 2 }} rotate={20} scale={0.88} />
            <Bill style={{ right: 42, bottom: 14 }} rotate={9} scale={0.70} />

            <button
              className="fmp-cta-btn"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              <span className="fmp-cta-shadow" />
              {current.btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}