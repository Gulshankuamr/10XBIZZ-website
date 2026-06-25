import { useState, useRef, useEffect } from "react";

const PHONE   = "916291124216";         
const MESSAGE = "Hello, I want to know about your services";

const CHAT_MESSAGES = [
  "👋 Hey! Welcome to *10XBIZZ*",
  "Need more leads, better conversions, and automated growth? 🚀",
  "Let’s talk! Get your *FREE Strategy Call* today. 📞"
];

function TypingDots() {
  return (
    <div className="bg-white rounded-t-lg rounded-bl-lg rounded-br-sm px-3.5 py-2.5 self-start flex gap-1 items-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.2}s` }}
          className="w-1.5 h-1.5 rounded-full bg-[#aaa] inline-block animate-bounce"
        />
      ))}
    </div>
  );
}

// Parse *bold* in message strings
function BubbleText({ text }) {
  const parts = text.split(/\*(.*?)\*/g);
  return (
    <p className="text-[12.5px] text-[#111] leading-[1.45] m-0">
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-[#075E54]">
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

  const handleToggleChat = () => {
    if (!open) {
      setOpen(true);
      clearTimers();
      startAnimation();
    } else {
      setOpen(false);
      clearTimers();
    }
  };

  useEffect(() => () => clearTimers(), []);

  return (
    <div className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      {/* ── Popup (Stays open persistently until closed manually) ── */}
      <div
        className={`fixed bottom-[92px] right-6 w-[270px] bg-white rounded-[16px_16px_4px_16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[9998] origin-bottom-right transition-all duration-220 ${
          open 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-95 translate-y-[14px] pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#075E54] p-[10px_12px] flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
            <WaIcon size={20} />
          </div>
          <div>
            <p className="text-white text-[13px] font-semibold leading-[1.2] m-0">Sales Support</p>
            <p className="text-[#9BE2D3] text-[11px] m-0">● online</p>
          </div>
          <button 
            className="ml-14  bg-transparent border-0 text-[rgba(255,255,255,0.7)] text-[18px] cursor-pointer leading-none p-[2px_4px] transition-colors hover:text-white" 
            onClick={handleToggleChat}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Chat messages */}
        <div 
          className="p-[12px_10px_10px] flex flex-col gap-[7px] min-h-[110px]"
          style={{
            background: "#ECE5DD",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ccc5bc' fill-opacity='0.25'%3E%3Ccircle cx='30' cy='30' r='12'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        >
          {visibleMsgs.map((idx) => (
            <div key={idx} className="bg-white rounded-[8px_8px_8px_2px] p-[7px_10px_5px] max-w-[90%] self-start shadow-sm">
              <BubbleText text={CHAT_MESSAGES[idx]} />
              <p className="text-[10px] text-[#aaa] text-right mt-[3px] m-0">{nowTime()}</p>
            </div>
          ))}
          {showTyping && <TypingDots />}
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#25D366] text-white text-[13px] font-semibold p-2.5 no-underline w-full cursor-pointer tracking-[0.2px] transition-colors hover:bg-[#1ebe5a]"
        >
          Chat on WhatsApp →
        </a>
      </div>

      {/* ── Sticky Button (Icon) ── */}
      <button
        className="fixed bottom-6 right-6 w-[58px] h-[58px] rounded-full overflow-hidden cursor-pointer z-[9999] border-0 bg-transparent p-0 shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-110"
        onClick={handleToggleChat}
        aria-label="Open WhatsApp chat"
      >
        {!gifError ? (
          <img
            src="/whatsappoopsticky.gif"
            alt="Chat on WhatsApp"
            className="w-full h-full object-cover rounded-full block"
            onError={() => setGifError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center">
            <WaIcon size={28} />
          </div>
        )}
      </button>
    </div>
  );
}