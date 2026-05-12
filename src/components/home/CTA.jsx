import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section style={{ fontFamily: "'Poppins', sans-serif", padding: "20px 16px" }}>
      <div style={{
        position: "relative", borderRadius: "28px", overflow: "hidden",
        background: "linear-gradient(135deg, #4C0083 0%, #2A0060 40%, #180047 100%)",
        padding: "60px 52px", display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "32px"
      }}>

        {/* Dot grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />

        {/* Glow blobs */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "340px", height: "340px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(180,80,255,0.22) 0%, transparent 70%)"
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "10%",
          width: "260px", height: "260px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(100,0,161,0.3) 0%, transparent 70%)"
        }} />

        {/* LEFT: text */}
        <div style={{ position: "relative", zIndex: 2, flex: 1, minWidth: "240px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "100px", padding: "5px 14px",
            fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.85)",
            marginBottom: "18px"
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#b97bff", display: "inline-block" }} />
            AI-Powered Growth System
          </div>

          <h2 style={{
            fontSize: "clamp(1.55rem, 3.5vw, 2.4rem)", fontWeight: 700,
            lineHeight: 1.22, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.5px"
          }}>
            Ready to{" "}
            <span style={{
              background: "linear-gradient(90deg,#fff 0%,#CAABFF 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              10x your business
            </span>
            <br />with smart AI tools?
          </h2>

          <p style={{ fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: 0, maxWidth: "420px" }}>
            Stop losing leads to chaos. Join 50+ businesses scaling with our automated
            high-intent acquisition systems — built for DTC &amp; B2B brands.
          </p>
        </div>

        {/* RIGHT: buttons */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#fff", color: "#1a0035", fontSize: "14px", fontWeight: 600,
            padding: "14px 28px", borderRadius: "14px", border: "none", cursor: "pointer",
            boxShadow: "0 6px 24px rgba(120,0,255,0.18)", whiteSpace: "nowrap"
          }}>
            📅 Book Strategy Call
          </button>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff", fontSize: "14px", fontWeight: 500,
            padding: "13px 28px", borderRadius: "14px", cursor: "pointer", whiteSpace: "nowrap"
          }}>
            💬 WhatsApp Us
          </button>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", margin: 0 }}>
            Trusted by High-Growth Brands
          </p>
        </div>

        {/* BOTTOM: stats bar */}
        <div style={{
          position: "relative", zIndex: 2, width: "100%",
          display: "flex", flexWrap: "wrap", gap: 0,
          borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "28px"
        }}>
          {[
            { num: "50+", label: "Businesses scaled" },
            { num: "3×", label: "Avg lead growth" },
            { num: "24h", label: "Setup time" },
            { num: "9AM", label: "Mon–Fri support" },
          ].map((s, i, arr) => (
            <div key={i} style={{
              flex: 1, minWidth: "120px", padding: "0 24px",
              borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              paddingLeft: i === 0 ? 0 : undefined
            }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>{s.num}</div>
              <div style={{ fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;