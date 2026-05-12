import { useState, useEffect } from "react";
import { Megaphone, Users, Database, Bot, TrendingUp, ArrowRight, Zap, Target, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    key: "ads",
    label: "Ads",
    Icon: Megaphone,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.35)",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.3)",
    title: "Hyper-Targeted Ad Campaigns",
    description:
      "Run highly targeted ad campaigns across Facebook, Instagram, and Google to attract the perfect audience and generate quality traffic automatically.",
    stats: [
      { label: "Avg. ROAS", value: "4.8×" },
      { label: "CPL Reduced", value: "62%" },
      { label: "Reach", value: "2M+" },
    ],
    features: ["AI Audience Matching", "Multi-Platform Sync", "Auto Budget Optimizer"],
  },
  {
    id: 2,
    key: "leads",
    label: "Leads",
    Icon: Users,
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.35)",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.3)",
    title: "Smart Lead Capture System",
    description:
      "Capture and organize incoming leads with smart forms, landing pages, and automated data collection systems that work around the clock.",
    stats: [
      { label: "Conversion Rate", value: "38%" },
      { label: "Lead Quality", value: "9.1/10" },
      { label: "Auto-Tagged", value: "100%" },
    ],
    features: ["Smart Form Builder", "Real-Time Enrichment", "Instant Qualification"],
  },
  {
    id: 3,
    key: "crm",
    label: "CRM",
    Icon: Database,
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.3)",
    title: "Centralized CRM Intelligence",
    description:
      "Manage every customer interaction in one centralized CRM system with tracking, follow-ups, and full pipeline visibility to never miss a deal.",
    stats: [
      { label: "Pipeline Tracked", value: "100%" },
      { label: "Follow-up Rate", value: "97%" },
      { label: "Deal Velocity", value: "+41%" },
    ],
    features: ["360° Contact View", "Pipeline Automation", "Team Collaboration"],
  },
  {
    id: 4,
    key: "automation",
    label: "Automation",
    Icon: Bot,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
    title: "Full-Stack Automation Engine",
    description:
      "Automate email sequences, WhatsApp follow-ups, reminders, and lead nurturing workflows to save time and dramatically increase conversion rates.",
    stats: [
      { label: "Hours Saved/Mo", value: "120+" },
      { label: "Response Time", value: "<2 min" },
      { label: "Nurture Rate", value: "89%" },
    ],
    features: ["Email Sequences", "WhatsApp Flows", "Smart Reminders"],
  },
  {
    id: 5,
    key: "sales",
    label: "Sales",
    Icon: TrendingUp,
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.35)",
    bg: "rgba(244,63,94,0.08)",
    border: "rgba(244,63,94,0.3)",
    title: "AI-Powered Sales Conversion",
    description:
      "Convert warm leads into paying customers with optimized sales pipelines, automated booking systems, and AI-powered conversion strategies.",
    stats: [
      { label: "Close Rate", value: "34%" },
      { label: "Revenue Growth", value: "10×" },
      { label: "Avg Deal Size", value: "+55%" },
    ],
    features: ["AI Sales Scripts", "Auto Booking", "Revenue Forecasting"],
  },
];

export default function ServishProcese() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayedStep, setDisplayedStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      handleStepChange((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [autoplay, active]);

  const handleStepChange = (indexOrUpdater) => {
    const next = typeof indexOrUpdater === "function" ? indexOrUpdater(active) : indexOrUpdater;
    if (next === active) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayedStep(next);
      setActive(next);
      setAnimating(false);
    }, 320);
  };

  const step = steps[displayedStep];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 40%, #080811 100%)",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, width: "100%", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 24,
            }}
          >
            <Zap size={14} color="#a78bfa" />
            <span style={{ color: "#a78bfa", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em" }}>
              THE SYSTEM
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Introducing The{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              10x Growth System
            </span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A complete system that captures, nurtures, and converts leads automatically.
          </p>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "clamp(240px, 32%, 340px) 1fr",
            gap: 40,
            alignItems: "start",
          }}
          className="process-grid"
        >
          {/* LEFT — vertical timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                left: 22,
                top: 28,
                bottom: 28,
                width: 1,
                background: "linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(96,165,250,0.5))",
              }}
            />

            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.key}
                  onClick={() => {
                    setAutoplay(false);
                    handleStepChange(i);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px 16px 12px",
                    background: isActive ? s.bg : "transparent",
                    border: `1px solid ${isActive ? s.border : "transparent"}`,
                    borderRadius: 16,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    position: "relative",
                    marginBottom: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.border = "1px solid transparent";
                    }
                  }}
                >
                  {/* Step indicator */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: isActive ? s.color : "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: isActive ? `0 0 20px ${s.glow}` : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <s.Icon size={20} color={isActive ? "#fff" : "rgba(255,255,255,0.4)"} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                          transition: "color 0.3s",
                        }}
                      >
                        {s.label}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: isActive ? s.color : "rgba(255,255,255,0.25)",
                          fontWeight: 600,
                        }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div
                      style={{
                        height: 2,
                        background: "rgba(255,255,255,0.07)",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: isActive ? "100%" : "0%",
                          background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                          borderRadius: 99,
                          transition: "width 3.2s linear",
                        }}
                      />
                    </div>
                  </div>

                  {isActive && (
                    <ArrowRight size={16} color={s.color} style={{ flexShrink: 0 }} />
                  )}
                </button>
              );
            })}

            {/* Flow label */}
            <div
              style={{
                marginTop: 24,
                padding: "12px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                gap: 8,
                justifyContent: "center",
              }}
            >
              {steps.map((s, i) => (
                <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: active === i ? s.color : "rgba(255,255,255,0.25)",
                      letterSpacing: "0.04em",
                      transition: "color 0.3s",
                    }}
                  >
                    {s.label.toUpperCase()}
                  </span>
                  {i < steps.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — animated card */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(16px) scale(0.98)" : "translateY(0) scale(1)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${step.border}`,
                borderRadius: 28,
                padding: 40,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 300,
                  height: 300,
                  background: `radial-gradient(circle, ${step.glow} 0%, transparent 70%)`,
                  pointerEvents: "none",
                  transition: "all 0.4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -60,
                  left: -60,
                  width: 250,
                  height: 250,
                  background: `radial-gradient(circle, ${step.glow.replace("0.35", "0.15")} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 32,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: step.bg,
                        border: `1px solid ${step.border}`,
                        borderRadius: 8,
                        padding: "4px 12px",
                        marginBottom: 16,
                      }}
                    >
                      <step.Icon size={14} color={step.color} />
                      <span
                        style={{
                          color: step.color,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}
                      >
                        STEP 0{step.id} — {step.label.toUpperCase()}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 800,
                        color: "#fff",
                        margin: 0,
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Large icon */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 20,
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 0 40px ${step.glow}`,
                    }}
                  >
                    <step.Icon size={32} color={step.color} />
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 17,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                    margin: "0 0 36px",
                  }}
                >
                  {step.description}
                </p>

                {/* Stats row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                    marginBottom: 32,
                  }}
                >
                  {step.stats.map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 16,
                        padding: "20px 16px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 28,
                          fontWeight: 800,
                          color: step.color,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature chips */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {step.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 100,
                        padding: "8px 16px",
                      }}
                    >
                      <CheckCircle size={13} color={step.color} />
                      <span
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom step nav dots */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 32,
                    paddingTop: 24,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {steps.map((s, i) => (
                    <button
                      key={s.key}
                      onClick={() => {
                        setAutoplay(false);
                        handleStepChange(i);
                      }}
                      style={{
                        width: active === i ? 24 : 8,
                        height: 8,
                        borderRadius: 100,
                        background: active === i ? step.color : "rgba(255,255,255,0.15)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0,
                      }}
                    />
                  ))}
                  <div style={{ flex: 1 }} />
                  <button
                    onClick={() => setAutoplay((p) => !p)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 100,
                      padding: "6px 14px",
                      cursor: "pointer",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: autoplay ? "#34d399" : "rgba(255,255,255,0.3)",
                      }}
                    />
                    {autoplay ? "Auto" : "Manual"}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div
              style={{
                marginTop: 20,
                padding: "20px 28px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <BarChart3 size={20} color="#a78bfa" />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    Ready to 10× your revenue?
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                    Join 2,400+ businesses using this system
                  </div>
                </div>
              </div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 24px",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 0 24px rgba(124,58,237,0.4)",
                }}
              >
                Get Started <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap');
        * { box-sizing: border-box; }
        button { outline: none; }
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}