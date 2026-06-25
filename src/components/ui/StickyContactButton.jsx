import { Link } from "react-router-dom";

export default function StickyContactButton() {
  return (
    <Link
      to="/contact"
      aria-label="Open contact page"
      className="fixed z-[70] right-0 top-1/2 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 max-md:bottom-24 max-md:right-0 max-md:top-auto max-md:translate-y-0 no-underline"
    >
      <div 
        style={{
          padding: "3px", 
          background: "linear-gradient(125.94deg, #6400A1 0%, #FF1920 100%)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span
          className="inline-flex items-center px-3.5 py-7 text-[14px] tracking-[0.05em] font-bold uppercase text-white min-h-[90px] md:min-h-[110px]"
          style={{
            background: "linear-gradient(125.94deg, #7B00C2 0%, #BB000F 100%)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.1em",
            display: "block",
            textAlign: "center"
          }}
        >
          Contact Us
        </span>
      </div>
    </Link>
  );
}