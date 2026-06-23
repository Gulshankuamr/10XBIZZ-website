import { useState, useEffect } from "react";

const STEPS = [
  {
    heading: "Let's Build Your Lead Generation & Conversion System",
    sub: "Choose one or multiple services, and we'll build the right growth strategy for your business.",
    type: "multi",
    options: [
      "Google Ads",
      "Meta Ads",
      "Search Engine Optimization (SEO)",
      "Google My Business Optimization",
      "CRM Setup & Lead Management",
      "WhatsApp Automation",
      "Business Automation",
      "Funnel & Landing Pages",
      "Complete Growth System",
    ],
    btn: "Get My Custom Strategy",
  },
  {
    heading: "What Do You Want to Improve in Your Business?",
    sub: "Select all that apply — this helps us build the right system for you.",
    type: "multi-grid",
    options: [
      "Get more qualified leads",
      "Improve lead conversion",
      "Reduce cost per lead (CPL)",
      "Fix follow-up & response system",
      "Track and manage all enquiries",
      "Automate my lead handling",
      "Build a complete growth system",
      "Scale my existing campaigns",
      "Not sure — need expert guidance",
    ],
    btn: "Build My Custom Strategy",
  },
  {
    heading: "What's Your Approx Monthly Marketing Budget?",
    sub: "No worries — just an estimate helps us suggest the right strategy for you.",
    type: "budget",
    options: [
      "₹5,000 – ₹10,000",
      "₹10,000 – ₹25,000",
      "₹25,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000+",
      "Not sure",
    ],
    btn: "Get My Custom Plan",
  },
  {
    heading: "Do You Have a Website or Online Presence?",
    sub: "This helps us understand your current setup and suggest the right strategy.",
    type: "website",
    options: [
      "I have a website",
      "I don't have a website yet",
      "I only use WhatsApp / Social media",
      "Not sure",
    ],
    btn: "Get My Custom Growth Plan",
  },
  {
    heading: "Let's Build Your Custom Growth Plan",
    sub: "We've understood your requirements — now let's connect and create the right strategy for your business.",
    type: "contact",
    btn: "SEND MY FREE MARKETING PLAN",
  },
  {
    heading: "Your Growth Plan Is Ready 🚀",
    sub: "We've reviewed your inputs and prepared the next step to help you grow your business.",
    type: "done",
    btn: "CLOSE",
  },
];

const TRUST_TEXT = {
  0: "🔒 No spam. No pressure. Just a strategy built for your business goals.",
  1: "📊 No spam. No pressure. Just a strategy tailored for your business.",
  2: "💰 Tailored strategy, zero pressure, and built purely around your business goals.",
  3: "🌐 Tell us your setup — we'll build the right system for you.",
  4: "✔️ No spam. No unnecessary calls &nbsp; ✔️ 100% tailored strategy &nbsp; ✔️ Quick response within 24 hours",
};

const TOTAL_STEPS = STEPS.length - 1;
const GRAD = "linear-gradient(104.17deg, #6400A1 0%, #FF1920 100%)";
const DEFAULT_BORDER = "#6b0ac9";

export default function FreeMarketingPlan({ onClose }) {
  const [step, setStep] = useState(0);
  const [multiSel, setMultiSel] = useState([]);
  const [multiGridSel, setMultiGridSel] = useState([]);
  const [budgetSel, setBudgetSel] = useState(null);
  const [websiteOption, setWebsiteOption] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsappPref, setWhatsappPref] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const current = STEPS[step];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMulti = (opt) =>
    setMultiSel((p) =>
      p.includes(opt) ? p.filter((x) => x !== opt) : [...p, opt]
    );

  const toggleMultiGrid = (opt) =>
    setMultiGridSel((p) =>
      p.includes(opt) ? p.filter((x) => x !== opt) : [...p, opt]
    );

  const canProceed = () => {
    if (current.type === "multi") return multiSel.length > 0;
    if (current.type === "multi-grid") return multiGridSel.length > 0;
    if (current.type === "budget") return !!budgetSel;
    if (current.type === "website") {
      if (!websiteOption) return false;
      if (websiteOption === "I have a website")
        return websiteInput.trim().length > 0;
      return true;
    }
    if (current.type === "contact")
      return name.trim().length > 0 && phone.trim().length > 0;
    if (current.type === "done") return true;
    return false;
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    const websiteValue =
      websiteOption === "I have a website" ||
      websiteOption === "I only use WhatsApp / Social media"
        ? websiteInput.trim()
        : websiteOption;

    const payload = {
      option1: multiSel,
      option2: multiGridSel,
      option3: budgetSel ? [budgetSel] : [],
      website: websiteValue,
      name: name.trim(),
      email: email.trim(),
      phone: `${countryCode}${phone.trim()}`,
    };

    try {
      const res = await fetch("https://10x.fctesting.shop/api/submit-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("API response:", data);
      setStep((s) => s + 1);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (current.type === "done") {
      onClose?.();
      return;
    }
    if (!canProceed()) return;
    if (current.type === "contact") {
      submitForm();
      return;
    }
    setStep((s) => s + 1);
  };

  const isDone = current.type === "done";
  const progress = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .fmp-root * {
          font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
          box-sizing: border-box;
        }

        /* ── SCROLL CONTAINER ── */
        .fmp-scroll {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          max-height: calc(100dvh - 32px);
          border-radius: 22px;
        }
        .fmp-scroll::-webkit-scrollbar { width: 4px; }
        .fmp-scroll::-webkit-scrollbar-thumb {
          background: rgba(100,0,161,0.25);
          border-radius: 9999px;
        }

        /* ── STEP ANIMATION ── */
        .fmp-step { animation: fmpIn 0.22s ease; }
        @keyframes fmpIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── TOP ACCENT LINE ── */
        .fmp-modal::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: ${GRAD};
          border-radius: 22px 22px 0 0;
          z-index: 1;
        }

        /* ── CLOSE BUTTON ── */
        .fmp-close {
          position: sticky;
          top: 0;
          float: right;
          margin-left: 8px;
          z-index: 100;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #94a3b8;
          font-size: 13px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .fmp-close:hover {
          background: #fff1f2;
          border-color: #fca5a5;
          color: #ef4444;
        }

        /* ── DEFAULT BORDER: all selection buttons ── */
        .fmp-pill {
          cursor: pointer;
          select: none;
          border-radius: 9999px;
          border: 2px solid ${DEFAULT_BORDER};
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          background: white;
          color: #4b5563;
          transition: all 0.15s;
        }
        .fmp-pill:hover:not(.fmp-pill-active) {
          background: #f5f0ff;
          color: #6b0ac9;
        }
        .fmp-pill-active {
          background: ${GRAD} !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(100,0,161,0.35) !important;
        }

        .fmp-opt {
          cursor: pointer;
          border-radius: 12px;
          border: 2px solid ${DEFAULT_BORDER};
          padding: 10px 12px;
          font-size: 12px;
          font-weight: 600;
          background: white;
          color: #4b5563;
          text-align: center;
          transition: all 0.15s;
          line-height: 1.35;
          word-break: break-word;
        }
        .fmp-opt:hover:not(.fmp-opt-active) {
          background: #f5f0ff;
          color: #6b0ac9;
        }
        .fmp-opt-active {
          background: ${GRAD} !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(100,0,161,0.28) !important;
        }

        /* website full-width opts */
        .fmp-opt-row {
          display: block;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-radius: 12px;
          border: 2px solid ${DEFAULT_BORDER};
          padding: 12px 16px;
          font-size: 13px;
          font-weight: 600;
          background: white;
          color: #4b5563;
          transition: all 0.15s;
        }
        .fmp-opt-row:hover:not(.fmp-opt-active) {
          background: #f5f0ff;
          color: #6b0ac9;
        }

        /* ── FIELDS ── */
        .fmp-field {
          width: 100%;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          padding: 12px 14px;
          font-size: 14px;
          color: #0d1326;
          background: #fdfdff;
          transition: all 0.15s;
          font-family: 'Montserrat', sans-serif;
          appearance: none;
          -webkit-appearance: none;
        }
        .fmp-field::placeholder { color: #cbd5e1; }
        .fmp-field:focus {
          outline: none;
          border-color: #6400A1;
          box-shadow: 0 0 0 3px rgba(100,0,161,0.12);
        }

        /* ── CTA BUTTON ── */
        .fmp-cta {
          background: ${GRAD};
          box-shadow:
            0 5px 0px #3d006a,
            0 8px 24px rgba(100,0,161,0.4),
            inset 0 1px 0 rgba(255,255,255,0.2);
          transition: transform 0.13s ease, box-shadow 0.13s ease;
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .fmp-cta::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.16) 0%, transparent 55%);
          pointer-events: none;
        }
        .fmp-cta:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 0px #3d006a, 0 14px 32px rgba(100,0,161,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .fmp-cta:active:not(:disabled) {
          transform: translateY(3px);
          box-shadow: 0 2px 0px #3d006a, 0 4px 10px rgba(100,0,161,0.3);
        }
        .fmp-cta:disabled { opacity: 0.38; cursor: not-allowed; }
        .fmp-cta:hover .fmp-arrow { transform: translateX(4px); }
        .fmp-arrow { transition: transform 0.2s; }

        /* ── PROGRESS BAR ── */
        .fmp-progress-bar {
          height: 4px;
          border-radius: 9999px;
          background: #f0f0f0;
          overflow: hidden;
          margin-bottom: 16px;
        }

        /* ── CHECKBOX ── */
        .fmp-checkbox {
          width: 18px; height: 18px;
          border-radius: 4px;
          border: 2px solid #ccc;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          transition: all 0.15s;
          flex-shrink: 0;
          position: relative;
        }
        .fmp-checkbox:checked {
          background: ${GRAD};
          border-color: transparent;
        }
        .fmp-checkbox:checked::after {
          content: '✓';
          position: absolute; top: -1px; left: 2px;
          font-size: 12px; color: white; font-weight: 700;
        }

        /* ── WHATSAPP & CALENDAR BUTTONS ── */
        .fmp-wa-btn {
          background: #25D366;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 13px 24px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.13s, box-shadow 0.13s;
          box-shadow: 0 5px 0px #1a9e4a, 0 8px 20px rgba(37,211,102,0.3);
          text-shadow: 0 1px 2px rgba(0,0,0,0.15);
          font-family: 'Montserrat', sans-serif;
        }
        .fmp-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 0px #1a9e4a, 0 12px 28px rgba(37,211,102,0.4);
        }

        .fmp-cal-btn {
          background: white;
          color: #6400A1;
          border: 2px solid #6400A1;
          border-radius: 9999px;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.13s;
          font-family: 'Montserrat', sans-serif;
        }
        .fmp-cal-btn:hover {
          background: #6400A1;
          color: white;
          transform: translateY(-2px);
        }

        /* ── DONE CHECK ICON ── */
        .fmp-done-check {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: ${GRAD};
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 12px;
          font-size: 22px;
          box-shadow: 0 8px 24px rgba(100,0,161,0.3);
        }

        /* ── SPINNER ── */
        @keyframes spin { to { transform: rotate(360deg); } }
        .fmp-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* ── MOBILE RESPONSIVE ── */
        @media (max-width: 540px) {
          .fmp-modal-inner {
            padding: 14px 14px 18px !important;
          }
          .fmp-heading {
            font-size: 1rem !important;
          }
          .fmp-sub {
            font-size: 12px !important;
          }
          .fmp-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .fmp-grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .fmp-cta {
            font-size: 11px !important;
            padding: 13px 16px !important;
            min-width: unset !important;
            width: 100% !important;
          }
          .fmp-pills-wrap {
            gap: 8px !important;
          }
          .fmp-pill {
            font-size: 12px !important;
            padding: 7px 13px !important;
          }
          .fmp-opt {
            font-size: 11px !important;
            padding: 9px 8px !important;
          }
          .fmp-field {
            font-size: 13px !important;
            padding: 10px 12px !important;
          }
          .fmp-wa-btn, .fmp-cal-btn {
            font-size: 12px !important;
            padding: 11px 16px !important;
            width: 100%;
            justify-content: center;
          }
          .fmp-done-ctas {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .fmp-phone-row {
            flex-direction: column !important;
          }
          .fmp-phone-row select {
            width: 100% !important;
          }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fmp-root"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          backgroundColor: "rgba(13,19,38,0.65)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose?.();
        }}
      >
        {/* Gradient border shell */}
        <div
          style={{
            width: "100%",
            maxWidth: 620,
            padding: "2.5px",
            background: GRAD,
            borderRadius: 24,
            boxShadow:
              "0 32px 80px -10px rgba(100,0,161,0.45), 0 8px 32px rgba(255,25,32,0.15)",
            maxHeight: "calc(100dvh - 32px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Scrollable white modal */}
          <div className="fmp-scroll" style={{ borderRadius: 22 }}>
            <div
              className="fmp-modal fmp-step bg-white relative"
              key={step}
              style={{ borderRadius: 22, position: "relative" }}
            >
              <div
                className="fmp-modal-inner"
                style={{ padding: "20px 24px 24px" }}
              >
                {/* Close button — sticky top-right */}
                <button
                  className="fmp-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Progress bar */}
                {!isDone && (
                  <div className="fmp-progress-bar" style={{ marginTop: 4, marginBottom: 14 }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: GRAD,
                        borderRadius: 9999,
                        transition: "width 0.35s ease",
                      }}
                    />
                  </div>
                )}

                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: 18 }}>
                  <h2
                    className="fmp-heading"
                    style={{
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#0d1326",
                      margin: 0,
                      fontSize: step === 4 ? "1.05rem" : "1.2rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {current.heading}
                  </h2>
                  {current.sub && (
                    <p
                      className="fmp-sub"
                      style={{
                        marginTop: 6,
                        fontSize: 13,
                        color: "#374151",
                        fontWeight: 600,
                      }}
                    >
                      {current.sub}
                    </p>
                  )}
                </div>

                {/* ── STEP 1: Multi-select pills ── */}
                {current.type === "multi" && (
                  <div
                    className="fmp-pills-wrap"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    {current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => toggleMulti(opt)}
                        className={`fmp-pill ${multiSel.includes(opt) ? "fmp-pill-active" : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* ── STEP 2: Goals 3-col grid ── */}
                {current.type === "multi-grid" && (
                  <div
                    className="fmp-grid-3"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 9,
                      marginBottom: 18,
                    }}
                  >
                    {current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => toggleMultiGrid(opt)}
                        className={`fmp-opt ${multiGridSel.includes(opt) ? "fmp-opt-active" : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* ── STEP 3: Budget 2-col grid ── */}
                {current.type === "budget" && (
                  <div
                    className="fmp-grid-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 9,
                      marginBottom: 18,
                    }}
                  >
                    {current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setBudgetSel(opt)}
                        className={`fmp-opt ${budgetSel === opt ? "fmp-opt-active" : ""}`}
                        style={{ padding: "14px 10px", fontSize: 13 }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* ── STEP 4: Website ── */}
                {current.type === "website" && (
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {current.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setWebsiteOption(opt);
                            setWebsiteInput("");
                          }}
                          className={`fmp-opt-row ${websiteOption === opt ? "fmp-opt-active" : ""}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {websiteOption === "I have a website" && (
                      <input
                        type="text"
                        className="fmp-field"
                        placeholder="Enter your website URL (example: yourwebsite.com)"
                        value={websiteInput}
                        onChange={(e) => setWebsiteInput(e.target.value)}
                        style={{ marginTop: 12 }}
                      />
                    )}

                    {websiteOption === "I don't have a website yet" && (
                      <div
                        style={{
                          marginTop: 12,
                          background: "#f5f0ff",
                          border: "1px solid #e9d5ff",
                          borderRadius: 12,
                          padding: "12px 14px",
                        }}
                      >
                        <p style={{ fontSize: 13, color: "#6d28d9", fontWeight: 600, margin: 0 }}>
                          👉 No problem — we can help you build a high-converting landing page
                        </p>
                      </div>
                    )}

                    {websiteOption === "I only use WhatsApp / Social media" && (
                      <input
                        type="text"
                        className="fmp-field"
                        placeholder="Share your Instagram / Facebook / WhatsApp link (optional)"
                        value={websiteInput}
                        onChange={(e) => setWebsiteInput(e.target.value)}
                        style={{ marginTop: 12 }}
                      />
                    )}

                    <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", marginTop: 10 }}>
                      ✔️ No website? No problem. We build complete systems from scratch.
                    </p>
                    <p style={{ fontSize: 12, color: "#374151", textAlign: "center", fontWeight: 600, marginTop: 4 }}>
                      We don't just run ads — we build the complete system your business needs.
                    </p>
                  </div>
                )}

                {/* ── STEP 5: Contact form ── */}
                {current.type === "contact" && (
                  <div style={{ display: "grid", gap: 12, marginBottom: 16 }}>
                    {/* Name */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#94a3b8",
                          marginBottom: 6,
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        className="fmp-field"
                        type="text"
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#94a3b8",
                          marginBottom: 6,
                        }}
                      >
                        Phone Number *
                      </label>
                      <div className="fmp-phone-row" style={{ display: "flex", gap: 8 }}>
                        <select
                          className="fmp-field"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          style={{ minWidth: 90, width: "auto", flexShrink: 0 }}
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+65">🇸🇬 +65</option>
                        </select>
                        <div style={{ position: "relative", flex: 1 }}>
                          <span
                            style={{
                              position: "absolute",
                              left: 14,
                              top: "50%",
                              transform: "translateY(-50%)",
                              fontSize: 15,
                              pointerEvents: "none",
                            }}
                          >
                            📱
                          </span>
                          <input
                            className="fmp-field"
                            type="tel"
                            placeholder="98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ paddingLeft: 38 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#94a3b8",
                          marginBottom: 6,
                        }}
                      >
                        Email{" "}
                        <span style={{ textTransform: "none", fontWeight: 400, color: "#cbd5e1" }}>
                          (optional)
                        </span>
                      </label>
                      <input
                        className="fmp-field"
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* WhatsApp preference */}
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        cursor: "pointer",
                        background: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: 12,
                        padding: "11px 14px",
                      }}
                    >
                      <input
                        type="checkbox"
                        className="fmp-checkbox"
                        checked={whatsappPref}
                        onChange={(e) => setWhatsappPref(e.target.checked)}
                      />
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                        💬 Prefer WhatsApp communication
                      </span>
                    </label>

                    {submitError && (
                      <div
                        style={{
                          background: "#fef2f2",
                          border: "1px solid #fecaca",
                          borderRadius: 12,
                          padding: "11px 14px",
                        }}
                      >
                        <p style={{ fontSize: 13, color: "#dc2626", fontWeight: 600, margin: 0 }}>
                          ⚠️ {submitError}
                        </p>
                      </div>
                    )}

                    <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", fontStyle: "italic", margin: 0 }}>
                      "We'll personally review your business and suggest the best growth system."
                    </p>
                  </div>
                )}

                {/* ── DONE SCREEN ── */}
                {isDone && (
                  <div style={{ textAlign: "center", paddingBottom: 8 }}>
                    <div className="fmp-done-check">🚀</div>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
                      {current.sub}
                    </p>

                    <div
                      className="fmp-done-ctas"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#374151", margin: 0 }}>
                        👉 Want faster response?
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          flexWrap: "wrap",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <button
                          className="fmp-wa-btn"
                          onClick={() => window.open("https://wa.me/919999999999", "_blank")}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Chat on WhatsApp
                        </button>

                        <button className="fmp-cal-btn">
                          📅 Book Free Strategy Call
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: 18,
                        background: "#f8fafc",
                        borderRadius: 16,
                        padding: "14px 18px",
                        textAlign: "left",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#94a3b8",
                          marginBottom: 10,
                        }}
                      >
                        In this call, we will:
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {[
                          "Understand your business",
                          "Identify growth opportunities",
                          "Suggest the right system",
                        ].map((item) => (
                          <p
                            key={item}
                            style={{
                              fontSize: 13,
                              color: "#374151",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              margin: 0,
                            }}
                          >
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                color: "white",
                                fontSize: 11,
                                fontWeight: 700,
                                flexShrink: 0,
                                background: GRAD,
                              }}
                            >
                              ✓
                            </span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── CTA BUTTON ── */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 12,
                    gap: 8,
                  }}
                >
                  {!isDone && (
                    <>
                      <button
                        onClick={handleNext}
                        disabled={!canProceed() || isSubmitting}
                        className="fmp-cta"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 10,
                          borderRadius: 9999,
                          padding: "14px 32px",
                          fontSize: 12,
                          fontWeight: 800,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                          minWidth: 240,
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="fmp-spinner" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            {current.btn}
                            <span
                              className="fmp-arrow"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.2)",
                                fontSize: 13,
                              }}
                            >
                              →
                            </span>
                          </>
                        )}
                      </button>

                      {TRUST_TEXT[step] && (
                        <p
                          style={{
                            fontSize: 11,
                            color: "#4b5563",
                            textAlign: "center",
                            maxWidth: 300,
                            fontWeight: 600,
                            margin: 0,
                          }}
                          dangerouslySetInnerHTML={{ __html: TRUST_TEXT[step] }}
                        />
                      )}
                    </>
                  )}

                  {isDone && (
                    <button
                      onClick={onClose}
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        color: "#94a3b8",
                        textDecoration: "underline",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Close this window
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}