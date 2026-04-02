import { useState } from "react";
// import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";

import MoneyFlyButton from "../ui/Moneyflybutton";
import marketingImg from "../../assets/servishmarketing.png";

/* ─── Social Nodes Data ──────────────────────────────────── */
const SOCIAL_NODES = [
    {
        id: "tiktok",
        label: "TikTok",
        color: "#69C9D0",
        icon: (
            <svg viewBox="0 0 24 24" fill="#69C9D0" width="26" height="26">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
            </svg>
        ),
        pos: { top: "6%", left: "2%" }, delay: "0s", size: 76,
    },
    {
        id: "youtube",
        label: "YouTube",
        color: "#FF0000",
        icon: (
            <svg viewBox="0 0 24 24" fill="#FF0000" width="26" height="26">
                <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.81 3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
            </svg>
        ),
        pos: { top: "42%", left: "12%" }, delay: "1.1s", size: 66,
    },
    {
        id: "reddit",
        label: "Reddit",
        color: "#FF4500",
        icon: (
            <svg viewBox="0 0 24 24" fill="#FF4500" width="24" height="24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
        ),
        pos: { bottom: "5%", left: "1%" }, delay: "0.6s", size: 70,
    },
    {
        id: "instagram",
        label: "Instagram",
        color: "#E1306C",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26">
                <defs>
                    <linearGradient id="igGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                </defs>
                <path fill="url(#igGrad2)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        pos: { top: "4%", right: "2%" }, delay: "0.3s", size: 76,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        color: "#0A66C2",
        icon: (
            <svg viewBox="0 0 24 24" fill="#0A66C2" width="26" height="26">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        pos: { top: "40%", right: "13%" }, delay: "1.4s", size: 66,
    },
    {
        id: "google",
        label: "Google Ads",
        color: "#4285F4",
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
        ),
        pos: { bottom: "3%", right: "1%" }, delay: "0.9s", size: 70,
    },
];

/* ─── Social Node Component ──────────────────────────────── */
function SocialNode({ node }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                position: "absolute",
                ...node.pos,
                animation: `pzFloat 4.5s ease-in-out ${node.delay} infinite`,
                zIndex: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
            }}
        >
            <div style={{
                width: node.size,
                height: node.size,
                borderRadius: "50%",
                background: "#ffffff",
                border: `2.5px solid ${hov ? node.color : "rgba(81,89,121,0.4)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                boxShadow: hov
                    ? `0 6px 24px ${node.color}55, 0 2px 8px rgba(0,0,0,0.14)`
                    : "0 4px 14px rgba(0,0,0,0.12)",
                transform: hov ? "scale(1.1)" : "scale(1)",
            }}>
                {node.icon}
            </div>
            <span style={{
                fontSize: 10, fontWeight: 900,
                color: hov ? "#ffffff" : "rgba(255,255,255,0.65)",
                fontFamily: "'Nunito', sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                textShadow: "0 1px 4px rgba(0,0,0,0.18)",
                whiteSpace: "nowrap",
            }}>
                {node.label}
            </span>
        </div>
    );
}

/* ════ MAIN PAGE ═════════════════════════════════════════════ */
export default function ServicesPages() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600&display=swap');

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pzFloat {
                    0%,100% { transform: translateY(0)    rotate(0deg); }
                    33%     { transform: translateY(-12px) rotate(2deg); }
                    66%     { transform: translateY(-6px)  rotate(-1.5deg); }
                }
                @keyframes imgFloat {
                    0%,100% { transform: translateY(0); }
                    50%     { transform: translateY(-16px); }
                }
                @keyframes centerPulse {
                    0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.45; }
                    50%     { transform: translate(-50%,-50%) scale(1.15);  opacity: 0.85; }
                }
                @keyframes dashMove { to { stroke-dashoffset: 0; } }
                @keyframes scrollBounce {
                    0%,100% { transform: translateY(0);  opacity: 0.3; }
                    50%     { transform: translateY(6px); opacity: 0.7; }
                }

                .svc-fu1 { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.10s both; }
                .svc-fu2 { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
                .svc-fu3 { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.34s both; }
                .svc-fu4 { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.48s both; }
                .svc-fu5 { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.60s both; }

                .svc-dash {
                    fill: none;
                    stroke-dasharray: 5 8;
                    stroke-dashoffset: 200;
                    animation: dashMove 2s linear infinite;
                }
            `}</style>

            {/* <Navbar /> */}

            {/* ══ HERO — exact same BG as Hero.jsx ══ */}
            <section style={{
                background: "linear-gradient(175deg,#14c8e0 0%,#1db8e6 35%,#2aace0 65%,#40b8e8 100%)",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: 88,
                fontFamily: "'Poppins', sans-serif",
            }}>

                {/* Dot grid — exact same as Hero.jsx */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px)",
                    backgroundSize: "38px 38px",
                }} />

                {/* Bottom white fade */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
                    background: "linear-gradient(to bottom,transparent 0%,rgba(246,247,251,0.10) 55%,rgba(246,247,251,0.82) 100%)",
                    pointerEvents: "none", zIndex: 1,
                }} />

                <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px 110px", position: "relative", zIndex: 10 }}>

                    {/* ── Text center ── */}
                    <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>

                        {/* Badge */}
                        <div className="svc-fu1" style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                padding: "6px 18px", borderRadius: 999,
                                background: "rgba(255,255,255,0.18)",
                                border: "1px solid rgba(255,255,255,0.38)",
                                fontSize: 11, fontWeight: 900, letterSpacing: "0.08em",
                                textTransform: "uppercase", color: "#fff",
                                fontFamily: "'Nunito', sans-serif",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
                            }}>
                                <span style={{
                                    width: 7, height: 7, borderRadius: "50%",
                                    background: "#fff", display: "inline-block",
                                    boxShadow: "0 0 8px rgba(255,255,255,0.9)",
                                }} />
                                Digital Marketing &amp; Automation
                            </span>
                        </div>

                        {/* H1 */}
                        <h1 className="svc-fu2" style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(1.75rem, 4vw, 3.1rem)",
                            color: "#ffffff",
                            lineHeight: 1.2,
                            margin: "0 auto",
                            textShadow: "0 2px 14px rgba(0,0,0,0.13)",
                        }}>
                            Our Digital Marketing &amp;{" "}
                            <span style={{
                                background: "#1b2c50",
                                color: "#fff",
                                padding: "2px 16px 6px",
                                borderRadius: 8,
                                display: "inline-block",
                            }}>
                                Automation Services
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="svc-fu3" style={{
                            color: "rgba(255,255,255,0.90)",
                            fontSize: "clamp(14px,1.6vw,17px)",
                            lineHeight: 1.65,
                            maxWidth: 540,
                            margin: "18px auto 0",
                        }}>
                            We help businesses generate{" "}
                            <span style={{ fontWeight: 600, color: "#F3877F" }}>high-quality leads</span>{" "}
                            and automate{" "}
                            <span style={{ fontWeight: 600, color: "#F3877F" }}>sales processes</span>{" "}
                            using <span style={{ fontWeight: 600 }}>CRM, ads and funnels</span>.
                        </p>

                        {/* CTA — same MoneyFlyButton as Hero.jsx */}
                        <div className="svc-fu4" style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
                            <MoneyFlyButton />
                        </div>

                        <p className="svc-fu4" style={{
                            color: "rgba(255,255,255,0.50)",
                            fontSize: 12, marginTop: 12, letterSpacing: "0.02em",
                        }}>
                            No commitment needed · Free 30-min call
                        </p>
                    </div>

                    {/* ── Illustration area ── */}
                    <div className="svc-fu5" style={{ position: "relative", height: 420, marginTop: 52 }}>

                        {/* Connector lines */}
                        <svg
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 6, overflow: "visible" }}
                            viewBox="0 0 1200 420"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <marker id="svc-ah" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                                    <path d="M0,0 L0,6 L6,3 Z" fill="#515979" />
                                </marker>
                            </defs>
                            <path d="M 140 50  C 320 110 480 170 580 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" markerEnd="url(#svc-ah)" opacity="0.55" />
                            <path d="M 215 200 C 360 208 490 210 580 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" style={{ animationDelay: "0.35s" }} markerEnd="url(#svc-ah)" opacity="0.50" />
                            <path d="M 140 360 C 320 300 480 250 580 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" style={{ animationDelay: "0.70s" }} markerEnd="url(#svc-ah)" opacity="0.45" />
                            <path d="M 1060 45  C 880 110 720 170 625 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" style={{ animationDelay: "0.15s" }} markerEnd="url(#svc-ah)" opacity="0.55" />
                            <path d="M 1000 200 C 860 207 730 210 625 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" style={{ animationDelay: "0.50s" }} markerEnd="url(#svc-ah)" opacity="0.50" />
                            <path d="M 1060 365 C 880 305 720 252 625 210" stroke="#515979" strokeWidth="2.5" className="svc-dash" style={{ animationDelay: "0.85s" }} markerEnd="url(#svc-ah)" opacity="0.45" />
                        </svg>

                        {/* Center image */}
                        <div style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%,-50%)", zIndex: 7,
                        }}>
                            <img
                                src={marketingImg}
                                alt="Services Hero"
                                style={{
                                    width: 320, height: 320,
                                    objectFit: "contain",
                                    animation: "imgFloat 3.4s ease-in-out infinite",
                                    filter: "drop-shadow(0 10px 32px rgba(0,0,0,0.16))",
                                }}
                            />
                            <div style={{
                                position: "absolute", top: "50%", left: "50%",
                                transform: "translate(-50%,-50%)",
                                width: 360, height: 360, borderRadius: "50%",
                                background: "radial-gradient(circle,rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.04) 45%,transparent 70%)",
                                zIndex: -1,
                                animation: "centerPulse 3s ease-in-out infinite",
                            }} />
                        </div>

                        {/* Social nodes */}
                        {SOCIAL_NODES.map(node => <SocialNode key={node.id} node={node} />)}
                    </div>

                    {/* Scroll indicator */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginTop: 28 }}>
                        <div style={{
                            width: 20, height: 32,
                            border: "2px solid rgba(255,255,255,0.35)",
                            borderRadius: 10, display: "flex", justifyContent: "center",
                        }}>
                            <div style={{
                                width: 4, height: 8,
                                background: "rgba(255,255,255,0.80)",
                                borderRadius: 2, marginTop: 4,
                                animation: "scrollBounce 1.6s ease-in-out infinite",
                            }} />
                        </div>
                        <span style={{
                            fontSize: 10, letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.45)",
                            textTransform: "uppercase",
                        }}>Scroll</span>
                    </div>

                </div>
            </section>

            
          
        </>
    );
}