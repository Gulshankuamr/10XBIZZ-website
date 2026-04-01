import { useState } from "react";

/* ─── Dollar Bill SVG ─────────────────────────────────────── */
function DollarBill({ width = 50, height = 50 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 56 32" fill="none">
      <rect width="56" height="32" rx="5" fill="#3daa5c" />
      <rect x="2" y="2" width="52" height="28" rx="4" fill="none" stroke="#5dc97a" strokeWidth="1.2" />
      <ellipse cx="28" cy="16" rx="10" ry="10" fill="#2e8f4e" />
      <ellipse cx="28" cy="16" rx="7" ry="7" fill="#3daa5c" />
      <text x="28" y="21" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Georgia,serif">$</text>
      <rect x="4"  y="11" width="9"  height="10" rx="2" fill="#2e8f4e" />
      <rect x="43" y="11" width="9"  height="10" rx="2" fill="#2e8f4e" />
      <rect x="17" y="5"  width="22" height="4"  rx="1" fill="#2e8f4e" opacity="0.6" />
      <rect x="17" y="23" width="22" height="4"  rx="1" fill="#2e8f4e" opacity="0.6" />
    </svg>
  );
}

/* ─── Fly positions ───────────────────────────────────────── */
const FLY_NOTES = [
  { tx: "-148px", ty: "-18px",  rot: "-32deg", delay: "0s"    },
  { tx: "-128px", ty: "-55px",  rot:  "12deg", delay: "0.05s" },
  { tx:  "-92px", ty: "-86px",  rot: "-16deg", delay: "0.09s" },
  { tx:  "-52px", ty:"-104px",  rot:  "26deg", delay: "0.13s" },
  { tx:  "148px", ty: "-18px",  rot:  "32deg", delay: "0s"    },
  { tx:  "128px", ty: "-55px",  rot: "-12deg", delay: "0.05s" },
  { tx:   "92px", ty: "-86px",  rot:  "16deg", delay: "0.09s" },
  { tx:   "52px", ty:"-104px",  rot: "-26deg", delay: "0.13s" },
];

/* ─── MoneyFlyButton ──────────────────────────────────────── */
export default function MoneyFlyButton({
  text = "GET YOUR FREE MARKETING PLAN",
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .mfb-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .mfb-note {
          position: absolute;
          pointer-events: none;
          z-index: 25;
          top: 50%; left: 50%;
          margin-top: -16px; margin-left: -28px;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .mfb-btn {
          border: none;
          cursor: pointer;
          color: #fff;
          background: #f3877f;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          letter-spacing: 0.04em;
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          padding: 16px 40px;
          box-shadow: 8px 8px 0 #596184;
          position: relative;
          z-index: 30;
          transition: transform 0.12s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.12s;
          white-space: nowrap;
        }

        .mfb-btn:hover {
          transform: translate(3px, 3px);
          box-shadow: 5px 5px 0 #596184;
        }

        .mfb-btn:active {
          transform: translate(8px, 8px);
          box-shadow: 0px 0px 0 #596184;
        }
      `}</style>

      <div
        className="mfb-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {FLY_NOTES.map((n, i) => (
          <div
            key={i}
            className="mfb-note"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered
                ? `translate(${n.tx},${n.ty}) rotate(${n.rot}) scale(1)`
                : `translate(0,0) rotate(${n.rot}) scale(0.15)`,
              transitionDelay: n.delay,
            }}
          >
            <DollarBill />
          </div>
        ))}

        <button className="mfb-btn" onClick={onClick}>
          {text}
        </button>
      </div>
    </>
  );
}