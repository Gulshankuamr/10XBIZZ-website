import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: 1, key: "ads", label: "Ads",
    color: "#c084fc", dark: "#4c1d95", glow: "rgba(192,132,252,0.45)",
    bg: "rgba(192,132,252,0.1)", border: "rgba(192,132,252,0.35)",
    title: "Hyper-Targeted\nAd Campaigns",
    description: "Run highly targeted ad campaigns across Facebook, Instagram, and Google to attract the perfect audience and generate quality traffic automatically.",
    stats: [{ label: "Avg. ROAS", value: "4.8×" }, { label: "CPL Reduced", value: "62%" }, { label: "Reach", value: "2M+" }],
    features: ["AI Audience Matching", "Multi-Platform Sync", "Auto Budget Optimizer"],
    pageColor: "#f8f9ff", accentColor: "#c084fc", emoji: "📣",
    iconSvg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="{{color}}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  },
  {
    id: 2, key: "leads", label: "Leads",
    color: "#60a5fa", dark: "#1e3a8a", glow: "rgba(96,165,250,0.45)",
    bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.35)",
    title: "Smart Lead\nCapture System",
    description: "Capture and organize incoming leads with smart forms, landing pages, and automated data collection systems that work around the clock.",
    stats: [{ label: "Conversion", value: "38%" }, { label: "Lead Quality", value: "9.1/10" }, { label: "Auto-Tagged", value: "100%" }],
    features: ["Smart Form Builder", "Real-Time Enrichment", "Instant Qualification"],
    pageColor: "#ffffff", accentColor: "#60a5fa", emoji: "🎯",
    iconSvg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="{{color}}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    id: 3, key: "crm", label: "CRM",
    color: "#34d399", dark: "#064e3b", glow: "rgba(52,211,153,0.45)",
    bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.35)",
    title: "Centralized CRM\nIntelligence",
    description: "Manage every customer interaction in one centralized CRM system with tracking, follow-ups, and full pipeline visibility to never miss a deal.",
    stats: [{ label: "Pipeline", value: "100%" }, { label: "Follow-up", value: "97%" }, { label: "Velocity", value: "+41%" }],
    features: ["360° Contact View", "Pipeline Automation", "Team Collaboration"],
    pageColor: "#f0fdf4", accentColor: "#34d399", emoji: "🗄️",
    iconSvg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="{{color}}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  },
  {
    id: 4, key: "automation", label: "Automation",
    color: "#fbbf24", dark: "#78350f", glow: "rgba(251,191,36,0.45)",
    bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.35)",
    title: "Full-Stack\nAutomation Engine",
    description: "Automate email sequences, WhatsApp follow-ups, reminders, and lead nurturing workflows to save time and dramatically increase conversions.",
    stats: [{ label: "Hours/Mo Saved", value: "120+" }, { label: "Response Time", value: "<2min" }, { label: "Nurture Rate", value: "89%" }],
    features: ["Email Sequences", "WhatsApp Flows", "Smart Reminders"],
    pageColor: "#fffbeb", accentColor: "#fbbf24", emoji: "⚡",
    iconSvg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="{{color}}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="15" x2="8.01" y2="15"/><line x1="16" y1="15" x2="16.01" y2="15"/></svg>`,
  },
  {
    id: 5, key: "sales", label: "Sales",
    color: "#f87171", dark: "#7f1d1d", glow: "rgba(248,113,113,0.45)",
    bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.35)",
    title: "AI-Powered\nSales Conversion",
    description: "Convert warm leads into paying customers with optimized sales pipelines, automated booking systems, and AI-powered conversion strategies.",
    stats: [{ label: "Close Rate", value: "34%" }, { label: "Revenue Growth", value: "10×" }, { label: "Avg Deal Size", value: "+55%" }],
    features: ["AI Sales Scripts", "Auto Booking", "Revenue Forecasting"],
    pageColor: "#fef2f2", accentColor: "#f87171", emoji: "🚀",
    iconSvg: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="{{color}}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  },
];

function BookPageContent({ step, isBackFace }) {
  const s = step;
  if (isBackFace) {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: "#f0f2f8",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 16, position: "relative", overflow: "hidden",
      }}>
        <div style={{ fontSize: 72, opacity: 0.08, userSelect: "none", color: "#9ca3af" }}>⬡</div>
        <div style={{ fontSize: 10, color: "rgba(0,0,0,0.25)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>10× Growth</div>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: 20, right: 20, top: 40 + i * 28, height: 1, background: "rgba(0,0,0,0.04)" }} />
        ))}
      </div>
    );
  }
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `linear-gradient(135deg, ${s.pageColor} 0%, #ffffff 100%)`,
      padding: "20px 16px", // Reduced padding for mobile
      display: "flex", flexDirection: "column",
      justifyContent: "space-between",
      position: "relative", overflow: "hidden",
      boxSizing: "border-box",
    }}>
      <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: s.bg, border: `1px solid ${s.border}`, borderRadius: 100, padding: "3px 11px", marginBottom: 10 }}>
          <span style={{ fontSize: 12 }}>{s.emoji}</span>
          <span style={{ fontSize: 9, fontWeight: 700, color: s.color, letterSpacing: "0.07em" }}>STEP 0{s.id}</span>
        </div>
        <div style={{ marginBottom: 8, color: s.color }} dangerouslySetInnerHTML={{ __html: s.iconSvg.replace(/\{\{color\}\}/g, s.color) }} />
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 8, whiteSpace: "pre-line" }}>{s.title}</h3>
        <p style={{ fontSize: 10.5, color: "#4b5563", lineHeight: 1.5, margin: 0 }}>{s.description}</p>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5, marginBottom: 10 }}>
          {s.stats.map(st => (
            <div key={st.label} style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)", borderRadius: 8, padding: "6px 2px", textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: s.color, lineHeight: 1 }}>{st.value}</div>
              <div style={{ fontSize: 7, color: "#6b7280", marginTop: 2 }}>{st.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {s.features.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: s.bg, border: `1px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span style={{ fontSize: 10, color: "#4b5563", fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeProcese() {
  const [active, setActive] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("forward");
  const [angle, setAngle] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  const doFlip = (to, dir) => {
    if (flipping || to === active) return;
    setFlipping(true);
    setFlipDir(dir);
    setNextIdx(to);
    setAngle(0);

    let start = null;
    const dur = 700;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setAngle(180 * e);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setAngle(0);
        setActive(to);
        setFlipping(false);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => { cancelAnimationFrame(rafRef.current); clearInterval(timerRef.current); }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      if (!flipping) doFlip((active + 1) % steps.length, "forward");
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [autoplay, active, flipping]);

  const goTo = (i) => { setAutoplay(false); doFlip(i, i > active ? "forward" : "backward"); };

  const cur = steps[active];
  const nxt = steps[nextIdx];

  const leafRotate = flipDir === "forward"
    ? `perspective(1100px) rotateY(${-angle}deg)`
    : `perspective(1100px) rotateY(${angle}deg)`;

  return (
    <section style={{
      background: "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
      minHeight: "100vh", width: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 15px",
      fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif",
      position: "relative", overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;800&display=swap');
        * { box-sizing: border-box; }
        .hp-step-btn { transition: all 0.25s; }
        
        /* Mobile Specific Styles */
        @media (max-width: 900px) {
          .hp-grid { 
            grid-template-columns: 1fr !important; 
            gap: 30px !important;
          }
          .book-scene { 
            width: 100% !important;
            max-width: 500px !important;
            height: 340px !important;
            transform: scale(0.9);
          }
          .controls-container {
            width: 100% !important;
          }
          .step-list {
            order: 2;
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 8px !important;
          }
          .step-list-line { display: none !important; }
        }

        @media (max-width: 500px) {
          .book-scene { 
            height: 280px !important;
            transform: scale(0.85);
            margin: -20px 0;
          }
          .nav-text { display: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1160, width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(192,132,252,0.1)", border: "1px solid rgba(192,132,252,0.28)", borderRadius: 100, padding: "5px 16px", marginBottom: 15 }}>
            <span style={{ color: "#c084fc", fontSize: 10, fontWeight: 700 }}>THE 10X SYSTEM</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 8vw, 48px)", fontWeight: 800, color: "#fff", margin: "0 0 10px", lineHeight: 1.2 }}>
            The <span style={{ background: "linear-gradient(90deg,#c084fc,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>10x Growth</span>
          </h2>
        </div>

        <div className="hp-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 40, alignItems: "center" }}>
          {/* Step Buttons */}
          <div className="step-list" style={{ display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
            <div className="step-list-line" style={{ position: "absolute", left: 20, top: 28, bottom: 28, width: 1, background: "linear-gradient(to bottom,rgba(192,132,252,0.4),rgba(96,165,250,0.4))" }} />
            {steps.map((s, i) => {
              const isAct = active === i;
              return (
                <button key={s.key} className="hp-step-btn" onClick={() => goTo(i)} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "10px",
                  background: isAct ? s.bg : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isAct ? s.border : "transparent"}`,
                  borderRadius: 12, cursor: "pointer", textAlign: "left",
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: isAct ? s.color : "rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}>{s.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: isAct ? "#fff" : "rgba(255,255,255,0.4)" }}>{s.label}</div>
                    {isAct && <div style={{ height: 2, background: s.color, width: "100%", marginTop: 4, borderRadius: 2 }} />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Book Scene */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <div
              className="book-scene"
              style={{
                position: "relative",
                width: 580, height: 400,
                filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 20px ${cur.glow})`,
                transition: "filter 0.5s",
              }}
            >
              {/* Spine */}
              <div style={{ position: "absolute", left: "calc(50% - 4px)", top: 4, bottom: 4, width: 8, background: "rgba(0,0,0,0.8)", zIndex: 15, borderRadius: 2 }} />

              {/* Left Page (Fixed Static Background) */}
              <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", borderRadius: "8px 0 0 8px", overflow: "hidden", zIndex: 1 }}>
                <BookPageContent step={cur} isBackFace={true} />
              </div>

              {/* Right Page (The one underneath) */}
              <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", borderRadius: "0 8px 8px 0", overflow: "hidden", zIndex: flipping ? 1 : 4 }}>
                <BookPageContent step={flipping ? nxt : cur} isBackFace={false} />
              </div>

              {/* Flipping Leaf */}
              {flipping && (
                <div style={{
                  position: "absolute", right: 0, top: 0, width: "50%", height: "100%",
                  transformOrigin: "left center", transform: leafRotate,
                  transformStyle: "preserve-3d", zIndex: 20,
                }}>
                  <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: "0 8px 8px 0", overflow: "hidden" }}>
                    <BookPageContent step={cur} isBackFace={false} />
                  </div>
                  <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: "8px 0 0 8px", overflow: "hidden" }}>
                    <BookPageContent step={nxt} isBackFace={true} />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="controls-container" style={{ display: "flex", alignItems: "center", gap: 10, width: 580, justifyContent: "space-between" }}>
              <button onClick={() => goTo((active - 1 + steps.length) % steps.length)} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "8px 15px", cursor: "pointer", color: "#fff", fontSize: 13, display: "flex", alignItems: "center", gap: 5
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
                <span className="nav-text">Prev</span>
              </button>

              <div style={{ display: "flex", gap: 6 }}>
                {steps.map((_, i) => (
                  <div key={i} style={{ width: active === i ? 16 : 6, height: 6, borderRadius: 10, background: active === i ? cur.color : "rgba(255,255,255,0.2)", transition: "0.3s" }} />
                ))}
              </div>

              <button onClick={() => doFlip((active + 1) % steps.length, "forward")} style={{
                background: cur.color, border: "none", borderRadius: 10, padding: "8px 15px", cursor: "pointer", color: "#000", fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", gap: 5
              }}>
                <span className="nav-text">Next</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>

            <button onClick={() => setAutoplay(p => !p)} style={{
              background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100, padding: "6px 15px", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontSize: 11
            }}>
              {autoplay ? "● Auto-playing" : "○ Manual Mode"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}