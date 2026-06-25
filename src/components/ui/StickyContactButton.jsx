import { Link } from "react-router-dom";

export default function StickyContactButton() {
  return (
    <Link
      to="/contact"
      aria-label="Open contact page"
      className="
        fixed z-[9999]
        right-0 top-1/2 -translate-y-1/2
        max-md:top-auto
        max-md:bottom-[calc(6rem+env(safe-area-inset-bottom))]
        max-md:translate-y-0
      "
    >
      <div
        className="overflow-hidden rounded-l-lg shadow-lg"
        style={{
          padding: "3px",
          background:
            "linear-gradient(125.94deg, #6400A1 0%, #FF1920 100%)",
        }}
      >
        <div
          className="
            px-3 py-7
            text-white
            text-sm
            font-bold
            uppercase
            tracking-wider
            text-center
          "
          style={{
            background:
              "linear-gradient(125.94deg, #7B00C2 0%, #BB000F 100%)",
            writingMode: "vertical-rl",
            WebkitWritingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Contact Us
        </div>
      </div>
    </Link>
  );
}