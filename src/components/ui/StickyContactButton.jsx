import { Link } from "react-router-dom";

export default function StickyContactButton() {
  return (
    <Link
      to="/contact"
      aria-label="Open contact page"
      className="fixed right-0 top-1/2 z-[70] -translate-y-1/2 no-underline"
    >
      <div 
        style={{
          // Ekdam chipka hua aur bina rounded corner wala box
          padding: "2px", 
          background: "linear-gradient(125.94deg, #6400A1 0%, #FF1920 100%)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span
          className="inline-flex items-center px-3 py-6 text-[13px] tracking-widest font-black uppercase text-white"
          style={{
            // Inner content bhi flat rakha hai
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