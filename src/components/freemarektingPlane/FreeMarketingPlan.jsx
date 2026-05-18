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

  const handleNext = () => {
    if (current.type === "done") {
      onClose?.();
      return;
    }
    if (!canProceed()) return;
    setStep((s) => s + 1);
  };

  const isDone = current.type === "done";
  const progress = Math.round(((step + 1) / TOTAL_STEPS) * 100);

  const GRAD = "linear-gradient(104.17deg, #6400A1 0%, #FF1920 100%)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .fmp-root * { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; }

        .fmp-step { animation: fmpIn 0.22s ease; }
        @keyframes fmpIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .fmp-modal::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: ${GRAD};
        }

        .fmp-pill-active {
          background: ${GRAD} !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(100,0,161,0.35) !important;
        }

        .fmp-opt-active {
          background: ${GRAD} !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 4px 14px rgba(100,0,161,0.28) !important;
        }

        .fmp-field:focus {
          outline: none;
          border-color: #6400A1 !important;
          box-shadow: 0 0 0 3px rgba(100,0,161,0.12) !important;
        }

        .fmp-cta {
          background: ${GRAD};
          box-shadow:
            0 6px 0px #3d006a,
            0 10px 28px rgba(100,0,161,0.45),
            0 0 40px rgba(255,25,32,0.18),
            inset 0 1px 0 rgba(255,255,255,0.22);
          transition: transform 0.13s ease, box-shadow 0.13s ease;
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }
        .fmp-cta::before {
          content: '';
          position: absolute; inset: 0; border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.16) 0%, transparent 55%);
          pointer-events: none;
        }
        .fmp-cta:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow:
            0 9px 0px #3d006a,
            0 16px 36px rgba(100,0,161,0.55),
            0 0 60px rgba(255,25,32,0.28),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }
        .fmp-cta:active:not(:disabled) {
          transform: translateY(4px);
          box-shadow:
            0 2px 0px #3d006a,
            0 4px 10px rgba(100,0,161,0.3);
        }
        .fmp-cta:disabled { opacity: 0.38; cursor: not-allowed; }
        .fmp-cta:hover .fmp-arrow { transform: translateX(4px); }
        .fmp-arrow { transition: transform 0.2s; }

        .fmp-progress-bar {
          height: 4px;
          border-radius: 9999px;
          background: #f0f0f0;
          overflow: hidden;
          margin-bottom: 20px;
        }
        

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

        .fmp-wa-btn {
          background: #25D366;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.13s, box-shadow 0.13s;
          box-shadow: 0 6px 0px #1a9e4a, 0 10px 24px rgba(37,211,102,0.35);
          text-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }
        .fmp-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 0px #1a9e4a, 0 14px 30px rgba(37,211,102,0.45);
        }

        .fmp-cal-btn {
          background: white;
          color: #6400A1;
          border: 2px solid #6400A1;
          border-radius: 9999px;
          padding: 13px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.13s;
        }
        .fmp-cal-btn:hover {
          background: #6400A1;
          color: white;
          transform: translateY(-2px);
        }

        .fmp-done-check {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: ${GRAD};
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 12px;
          font-size: 24px;
          box-shadow: 0 8px 24px rgba(100,0,161,0.3);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fmp-root fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{
          backgroundColor: "rgba(13,19,38,0.65)",
          backdropFilter: "blur(8px)",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose?.();
        }}
      >
        {/* Gradient Border Shell */}
        <div
          className="w-full rounded-3xl"
          style={{
            maxWidth: 660,
            padding: "2.5px",
            background: GRAD,
            boxShadow:
              "0 32px 80px -10px rgba(100,0,161,0.45), 0 8px 32px rgba(255,25,32,0.15)",
          }}
        >
          {/* White Modal */}
          <div
            className="fmp-modal fmp-step relative bg-white rounded-[22px] overflow-hidden px-10 pt-8 pb-7"
            key={step}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-xs flex items-center justify-center cursor-pointer transition-all hover:bg-red-50 hover:border-red-300 hover:text-red-500"
            >
              ✕
            </button>

            {/* Progress Bar */}
           

            {/* Heading */}
            <div className="text-center mb-6">
              <h2
                className="font-bold tracking-[-0.02em] text-[#0d1326] m-0"
                style={{ fontSize: step === 4 ? "1.15rem" : "1.35rem", lineHeight: 1.25 }}
              >
                {current.heading}
              </h2>
              {current.sub && (
                <p className="mt-2 text-sm text-gray-400">{current.sub}</p>
              )}
            </div>

            {/* STEP 1: Multi-select pills */}
            {current.type === "multi" && (
              <div className="flex flex-wrap justify-center gap-2.5 mb-7">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleMulti(opt)}
                    className={`fmp-pill cursor-pointer select-none rounded-full border-2 border-slate-200 px-5 py-2 text-sm font-semibold bg-white text-gray-600 transition-all hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 ${
                      multiSel.includes(opt) ? "fmp-pill-active" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 2: Goals 3-col grid */}
            {current.type === "multi-grid" && (
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleMultiGrid(opt)}
                    className={`fmp-opt cursor-pointer select-none rounded-xl border-2 border-slate-200 px-3 py-3 text-sm font-semibold bg-white text-gray-600 text-center transition-all hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 ${
                      multiGridSel.includes(opt) ? "fmp-opt-active" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 3: Budget 2-col grid */}
            {current.type === "budget" && (
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setBudgetSel(opt)}
                    className={`fmp-opt cursor-pointer select-none rounded-xl border-2 border-slate-200 px-4 py-4 text-sm font-semibold bg-white text-gray-600 text-center transition-all hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 ${
                      budgetSel === opt ? "fmp-opt-active" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 4: Website */}
            {current.type === "website" && (
              <div className="mb-7 space-y-4">
                {/* Options first */}
                <div className="space-y-2">
                  {current.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setWebsiteOption(opt);
                        setWebsiteInput("");
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer ${
                        websiteOption === opt
                          ? "fmp-opt-active"
                          : "border-slate-200 text-gray-600 bg-white hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {/* Conditional UI */}
                {websiteOption === "I have a website" && (
                  <input
                    type="text"
                    placeholder="Enter your website URL (example: yourwebsite.com)"
                    value={websiteInput}
                    onChange={(e) => setWebsiteInput(e.target.value)}
                    className="fmp-field w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm text-[#0d1326] bg-[#fdfdff] placeholder-slate-300 transition-all"
                  />
                )}

                {websiteOption === "I don't have a website yet" && (
                  <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-3">
                    <p className="text-sm text-purple-700 font-medium">
                      👉 No problem — we can help you build a high-converting landing page
                    </p>
                  </div>
                )}

                {websiteOption === "I only use WhatsApp / Social media" && (
                  <input
                    type="text"
                    placeholder="Share your Instagram / Facebook / WhatsApp link (optional)"
                    value={websiteInput}
                    onChange={(e) => setWebsiteInput(e.target.value)}
                    className="fmp-field w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm text-[#0d1326] bg-[#fdfdff] placeholder-slate-300 transition-all"
                  />
                )}

                <p className="text-[12px] text-gray-400 text-center">
                  ✔️ No website? No problem. We build complete systems from scratch.
                </p>
                <p className="text-[13px] text-gray-700 text-center font-semibold">
                  We don't just run ads — we build the complete system your business needs.
                </p>
              </div>
            )}

            {/* STEP 5: Contact form */}
            {current.type === "contact" && (
              <div className="grid gap-3.5 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    className="fmp-field w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 text-sm text-[#0d1326] bg-[#fdfdff] placeholder-slate-300 transition-all"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-400 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      className="fmp-field rounded-xl border-2 border-slate-200 px-3 py-3.5 text-sm text-[#0d1326] bg-[#fdfdff] cursor-pointer transition-all min-w-[90px]"
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
                    <div className="relative flex-1">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">📱</span>
                      <input
                        className="fmp-field w-full rounded-xl border-2 border-slate-200 pl-10 pr-4 py-3.5 text-sm text-[#0d1326] bg-[#fdfdff] placeholder-slate-300 transition-all"
                        type="tel"
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Email - optional */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.05em] text-slate-400 mb-1.5">
                    Email <span className="text-slate-300 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    className="fmp-field w-full rounded-xl border-2 border-slate-200 px-4 py-3.5 text-sm text-[#0d1326] bg-[#fdfdff] placeholder-slate-300 transition-all"
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* WhatsApp preference */}
                <label className="flex items-center gap-3 cursor-pointer select-none bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                  <input
                    type="checkbox"
                    className="fmp-checkbox"
                    checked={whatsappPref}
                    onChange={(e) => setWhatsappPref(e.target.checked)}
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    💬 Prefer WhatsApp communication
                  </span>
                </label>

                {/* Positioning line */}
                <p className="text-[12.5px] text-gray-500 text-center italic">
                  "We'll personally review your business and suggest the best growth system."
                </p>
              </div>
            )}

            {/* Done Screen */}
            {isDone && (
              <div className="text-center py-2 pb-4">
                <div className="fmp-done-check">🚀</div>

                <p className="text-[15px] text-gray-500 leading-[1.7] mb-6">
                  {current.sub}
                </p>

                {/* WhatsApp CTA */}
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm font-semibold text-gray-700">
                    👉 Want faster response?
                  </p>

                  <button
                    className="fmp-wa-btn"
                    onClick={() =>
                      window.open("https://wa.me/919999999999", "_blank")
                    }
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </button>

                  <span className="text-xs text-gray-400">OR</span>

                  <button className="fmp-cal-btn">
                    📅 Book Your Free Strategy Call
                  </button>
                </div>

                {/* What we'll do */}
                <div className="mt-5 bg-slate-50 rounded-2xl px-5 py-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-400 mb-2">In this call, we will:</p>
                  <div className="space-y-1.5">
                    {[
                      "Understand your business",
                      "Identify growth opportunities",
                      "Suggest the right system",
                    ].map((item) => (
                      <p key={item} className="text-sm text-gray-700 font-medium flex items-center gap-2">
                        <span
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold flex-shrink-0"
                          style={{ background: GRAD }}
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

            {/* CTA Button */}
            <div className="flex flex-col items-center pt-2 gap-2">
              {!isDone && (
                <>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="fmp-cta relative inline-flex items-center justify-center gap-2.5 rounded-full px-10 py-4 text-[13px] font-bold tracking-[0.05em] uppercase text-white border-none cursor-pointer"
                    style={{ minWidth: 260 }}
                  >
                    {current.btn}
                    <span
                      className="fmp-arrow inline-flex items-center justify-center w-6 h-6 rounded-full text-sm"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    >
                      →
                    </span>
                  </button>

                  {TRUST_TEXT[step] && (
                    <p
                      className="text-[12px] text-gray-400 text-center max-w-xs my-1"
                      dangerouslySetInnerHTML={{ __html: TRUST_TEXT[step] }}
                    />
                  )}
                </>
              )}

              {isDone && (
                <button
                  onClick={onClose}
                  className="mt-3 text-xs text-gray-400 underline cursor-pointer bg-transparent border-none"
                >
                  Close this window
                </button>
              )}
            </div>
          </div>
          {/* end white modal */}
        </div>
        {/* end gradient border */}
      </div>
    </>
  );
}