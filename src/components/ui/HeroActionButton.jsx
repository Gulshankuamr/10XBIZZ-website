import { Link } from "react-router-dom";

export default function HeroActionButton({ to, variant = "primary", children }) {
  const base =
    "inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 ease-out hover:-translate-y-0.5";

  const styles =
    variant === "secondary"
      ? "border-2 border-[#6400A1] bg-transparent text-[#6400A1] hover:bg-purple-50"
      : "";

  if (variant === "primary") {
    return (
      <Link
        to={to}
        className={`${base}`}
        style={{
          background: "linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%)",
          color: "#fff",
          boxShadow: "0 4px 14px rgba(100,0,161,0.28)",
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "0.04em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(100,0,161,0.42)";
          e.currentTarget.style.filter = "brightness(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(100,0,161,0.28)";
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        {children}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    );
  }

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}