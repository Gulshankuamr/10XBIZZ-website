import { useState } from "react";

export default function App() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-8 -mt-20"
      style={{ backgroundColor: "#F8F9FF" }}
    >
      {/* CTC Card — exact Figma specs */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{
          background: "linear-gradient(109.31deg, #6400A1 0%, #BB000F 100%)",
          width: "1216px",
          maxWidth: "1280px",
          height: "426px",
          borderRadius: "48px",
          padding: "64px",
          opacity: 1,
          boxShadow:
            "0 24px 60px rgba(100,0,161,0.25), 0 8px 24px rgba(187,0,15,0.18)",
        }}
      >
        {/* Heading */}
        <h2
          className="text-white font-extrabold leading-tight mb-4"
          style={{
            fontSize: "42px",
            letterSpacing: "-0.5px",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}
        >
          Ready to Build Your <br /> Kinetic Engine?
        </h2>

        {/* Subtext */}
        <p
          className="font-normal mb-9"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "15px",
            letterSpacing: "0.1px",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}
        >
          Stop losing leads to chaos. Start building your automated future today.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Book Strategy Call — White Button */}
          <button
            onMouseEnter={() => setHoveredBtn("book")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="font-bold cursor-pointer"
            style={{
              backgroundColor: hoveredBtn === "book" ? "#6400A1" : "#ffffff",
              color: hoveredBtn === "book" ? "#ffffff" : "#1a1a1a",
              border: hoveredBtn === "book"
                ? "2px solid #ffffff"
                : "2px solid transparent",
              borderRadius: "8px",
              padding: "14px 32px",
              fontSize: "15px",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "0.1px",
              minWidth: "180px",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredBtn === "book" ? "translateY(-2px)" : "translateY(0)",
              boxShadow:
                hoveredBtn === "book"
                  ? "0 8px 24px rgba(100,0,161,0.4)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            Book Strategy Call
          </button>

          {/* WhatsApp Us — Frosted Outlined Button */}
          <button
            onMouseEnter={() => setHoveredBtn("whatsapp")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="font-bold cursor-pointer"
            style={{
              backgroundColor:
                hoveredBtn === "whatsapp" ? "#ffffff" : "rgba(255,255,255,0.12)",
              color: hoveredBtn === "whatsapp" ? "#BB000F" : "#ffffff",
              border: "2px solid",
              borderColor:
                hoveredBtn === "whatsapp" ? "#ffffff" : "rgba(255,255,255,0.5)",
              borderRadius: "8px",
              padding: "14px 32px",
              fontSize: "15px",
              fontFamily: "'Segoe UI', system-ui, sans-serif",
              letterSpacing: "0.1px",
              minWidth: "180px",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              transform:
                hoveredBtn === "whatsapp" ? "translateY(-2px)" : "translateY(0)",
              boxShadow:
                hoveredBtn === "whatsapp"
                  ? "0 8px 24px rgba(255,255,255,0.25)"
                  : "none",
              backdropFilter: "blur(4px)",
            }}
          >
            WhatsApp Us
          </button>
        </div>
      </div>
    </div>
  );
}