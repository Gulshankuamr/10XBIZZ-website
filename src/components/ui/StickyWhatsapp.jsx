import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────
//  CONFIG — apna number aur message yahan badlo
// ─────────────────────────────────────────────
const PHONE   = "919999999999";          // country code + number, no +
const MESSAGE = "Hello, I want to know about your services";
const GIF_SRC = "/public/whatsappoopsticky.gif"; // apni GIF ka path

const CHAT_MESSAGES = [
  "👋 Hey! Welcome to *10XBIZZ*",
  "Need more leads, better conversions, and automated growth? 🚀",
  "Let’s talk! Get your *FREE Strategy Call* today. 📞"
];

// ─────────────────────────────────────────────
//  Styles (plain object — no external CSS needed)
// ─────────────────────────────────────────────
const S = {
  // Sticky button
  btn: {
    position: "fixed",
    bottom: 24,
    right: 24,
    width: 58,
    height: 58,
    borderRadius: "50%",
    overflow: "hidden",
    cursor: "pointer",
    zIndex: 9999,
    border: "none",
    background: "transparent",
    padding: 0,
    transition: "transform 0.2s ease",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  },
  btnImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
  },
  btnFallback: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Popup wrapper
  popup: (open) => ({
    position: "fixed",
    bottom: 92,
    right: 24,
    width: 270,
    background: "#fff",
    borderRadius: "16px 16px 4px 16px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    zIndex: 9998,
    transformOrigin: "bottom right",
    transition: "opacity 0.22s ease, transform 0.22s ease",
    opacity: open ? 1 : 0,
    transform: open ? "scale(1) translateY(0)" : "scale(0.88) translateY(14px)",
    pointerEvents: open ? "all" : "none",
  }),

  // Header
  header: {
    background: "#075E54",
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  name: { color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.2, margin: 0 },
  status: { color: "#9BE2D3", fontSize: 11, margin: 0 },
  closeBtn: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.7)",
    fontSize: 18,
    cursor: "pointer",
    lineHeight: 1,
    padding: "2px 4px",
  },

  // Chat body
  body: {
    background: "#ECE5DD",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ccc5bc' fill-opacity='0.25'%3E%3Ccircle cx='30' cy='30' r='12'/%3E%3C/g%3E%3C/svg%3E\")",
    padding: "12px 10px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 7,
    minHeight: 110,
  },

  // Bubble
  bubble: {
    background: "#fff",
    borderRadius: "8px 8px 8px 2px",
    padding: "7px 10px 5px",
    maxWidth: "90%",
    alignSelf: "flex-start",
  },
  bubbleText: { fontSize: 12.5, color: "#111", lineHeight: 1.45, margin: 0 },
  bubbleTime: { fontSize: 10, color: "#aaa", textAlign: "right", marginTop: 3 },

  // Typing dots
  typing: {
    background: "#fff",
    borderRadius: "8px 8px 8px 2px",
    padding: "9px 13px",
    alignSelf: "flex-start",
    display: "flex",
    gap: 4,
    alignItems: "center",
  },

  // CTA
  cta: {
    display: "block",
    textAlign: "center",
    background: "#25D366",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    padding: "11px",
    textDecoration: "none",
    border: "none",
    width: "100%",
    cursor: "pointer",
    letterSpacing: 0.2,
  },
};

// ─────────────────────────────────────────────
//  Typing Dots
// ─────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={S.typing}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#aaa",
            display: "inline-block",
            animation: `waTyping 1.2s ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Parse *bold* in message strings
function BubbleText({ text }) {
  const parts = text.split(/\*(.*?)\*/g);
  return (
    <p style={S.bubbleText}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "#075E54" }}>
            {p}
          </strong>
        ) : (
          p
        )
      )}
    </p>
  );
}

// WhatsApp SVG icon
function WaIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 5.98L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.52 18.4a9.88 9.88 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.59-.24-.37A9.86 9.86 0 0 1 2.13 12c0-5.45 4.43-9.88 9.87-9.88 2.64 0 5.12 1.03 6.98 2.89A9.82 9.82 0 0 1 21.88 12c0 5.44-4.43 9.88-9.88 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52H7.2c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4s1.02 2.78 1.17 2.98c.14.2 2.01 3.07 4.87 4.3.68.3 1.21.47 1.62.6.68.22 1.3.19 1.79.11.54-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.19-.57-.34z" />
    </svg>
  );
}

// Current time HH:MM
function nowTime() {
  return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

// ─────────────────────────────────────────────
//  Main Component
// ─────────────────────────────────────────────
export default function StickyWhatsapp() {
  const [open, setOpen]         = useState(false);
  const [gifError, setGifError] = useState(false);
  const [visibleMsgs, setVisibleMsgs] = useState([]);
  const [showTyping, setShowTyping]   = useState(false);
  const timersRef = useRef([]);

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const startAnimation = () => {
    setVisibleMsgs([]);
    setShowTyping(false);

    const schedule = (fn, delay) => {
      const t = setTimeout(fn, delay);
      timersRef.current.push(t);
    };

    // Show first message immediately
    setVisibleMsgs([0]);

    // Bubble 2
    schedule(() => setShowTyping(true), 500);
    schedule(() => {
      setShowTyping(false);
      setVisibleMsgs((p) => [...p, 1]);
    }, 1600);

    // Bubble 3
    schedule(() => setShowTyping(true), 2100);
    schedule(() => {
      setShowTyping(false);
      setVisibleMsgs((p) => [...p, 2]);
    }, 3200);
  };

  const handleMouseEnter = () => {
    setOpen(true);
    clearTimers();
    startAnimation();
  };

  const handleMouseLeave = () => {
    setOpen(false);
    clearTimers();
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
    clearTimers();
  };

  useEffect(() => () => clearTimers(), []);

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes waTyping {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        .wa-cta-hover:hover { background: #1ebe5a !important; }
        .wa-close-hover:hover { color: #fff !important; }
        .wa-btn-scale:hover { transform: scale(1.1) !important; }
      `}</style>

      {/* ── Popup ── */}
      <div
        style={S.popup(open)}
        onMouseEnter={() => { /* keep open if mouse moves to popup */ setOpen(true); }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header */}
        <div style={S.header}>
          <div style={S.avatar}>
            <WaIcon size={20} />
          </div>
          <div>
            <p style={S.name}>Sales Support</p>
            <p style={S.status}>● online</p>
          </div>
          <button style={S.closeBtn} className="wa-close-hover" onClick={handleClose}>
            ✕
          </button>
        </div>

        {/* Chat messages */}
        <div style={S.body}>
          {visibleMsgs.map((idx) => (
            <div key={idx} style={S.bubble}>
              <BubbleText text={CHAT_MESSAGES[idx]} />
              <p style={S.bubbleTime}>{nowTime()}</p>
            </div>
          ))}
          {showTyping && <TypingDots />}
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={S.cta}
          className="wa-cta-hover"
        >
          Chat on WhatsApp →
        </a>
      </div>

      {/* ── Sticky Button ── */}
      <div
        style={S.btn}
        className="wa-btn-scale"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (!open) { setOpen(true); startAnimation(); }
          else setOpen(false);
        }}
      >
        {!gifError ? (
          <img
            src="whatsappoopsticky.gif"
            alt="Chat on WhatsApp"
            style={S.btnImg}
            onError={() => setGifError(true)}
          />
        ) : (
          <div style={S.btnFallback}>
            <WaIcon size={28} />
          </div>
        )}
      </div>
    </>
  );
}