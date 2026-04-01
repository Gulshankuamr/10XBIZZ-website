import { useEffect, useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => window.scrollY > 40;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orbitIcons = [
    { id: 1, label: "Founder", angle: 330, radius: 200, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" },
    { id: 2, label: "Strategy", angle: 210, radius: 200, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" },
    { id: 3, label: "Creative", angle: 90, radius: 290, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200" },
    { id: 4, label: "Dev", angle: 150, radius: 290, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
    { id: 5, label: "Growth", angle: 30, radius: 290, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" },
    { id: 6, label: "Ops", angle: 270, radius: 145, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash { to { stroke-dashoffset: -36; } }
        @keyframes dash-rev { to { stroke-dashoffset: 36; } }
        @keyframes float-icon {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(26,78,166,0.2)); }
          50% { filter: drop-shadow(0 0 18px rgba(26,78,166,0.45)); }
        }
        @keyframes hub-pulse {
          0%, 100% { box-shadow: 0 0 0 3px #1a4ea6, 0 0 40px rgba(26,78,166,0.35), 0 0 80px rgba(26,78,166,0.12); }
          50% { box-shadow: 0 0 0 4px #1a4ea6, 0 0 60px rgba(26,78,166,0.55), 0 0 100px rgba(26,78,166,0.2); }
        }
        .animate-fade-up { animation: fadeUp 0.75s cubic-bezier(0.4,0,0.2,1) both; }
        .ring-animation { animation: spin-ring linear infinite; }
        .dash-line { stroke-dasharray: 5 4; animation: dash 2.5s linear infinite; }
        .dash-line-rev { stroke-dasharray: 5 4; animation: dash-rev 2.5s linear infinite; }
        .float-icon { animation: float-icon 4s ease-in-out infinite; }
        .hub-pulse { animation: hub-pulse 3s ease-in-out infinite; }
      `}</style>

      <div
        className={`fixed inset-0 z-[99] backdrop-blur-xl flex flex-col items-center justify-center gap-9 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "rgba(246,247,251,0.97)" }}
      >
        <button
          className="absolute top-6 right-6 bg-transparent border-none cursor-pointer"
          style={{ color: "#0d1326" }}
          onClick={() => setMenuOpen(false)}
          aria-label="close"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <section
        className="relative min-h-screen flex items-center py-[120px] px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ background: "#f6f7fb" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-140px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,78,166,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(235,138,128,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto relative z-5">
          <div className="flex-1 flex items-center justify-center min-h-[480px] animate-fade-up">
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              <div className="absolute rounded-full w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] ring-animation" style={{ border: "1px solid rgba(26,78,166,0.2)", animationDuration: "18s" }} />
              <div className="absolute rounded-full w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] ring-animation" style={{ border: "1px solid rgba(26,78,166,0.15)", animationDuration: "28s", animationDirection: "reverse" }} />
              <div className="absolute rounded-full w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] ring-animation" style={{ border: "1px solid rgba(26,78,166,0.1)", animationDuration: "40s" }} />

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[6]" viewBox="0 0 420 420">
                {orbitIcons.map((icon) => {
                  const rad = (icon.angle * Math.PI) / 180;
                  const cx = 210;
                  const cy = 210;
                  const x = cx + icon.radius * Math.cos(rad);
                  const y = cy + icon.radius * Math.sin(rad);
                  return (
                    <line
                      key={icon.id}
                      className={icon.id % 2 === 0 ? "dash-line" : "dash-line-rev"}
                      x1={cx}
                      y1={cy}
                      x2={x}
                      y2={y}
                      stroke="rgba(26,78,166,0.25)"
                      strokeWidth="1.2"
                    />
                  );
                })}
              </svg>

              <div className="absolute z-10 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden hub-pulse">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200" alt="Founder" className="w-full h-full object-cover block" />
              </div>

              {orbitIcons.map((icon) => {
                const rad = (icon.angle * Math.PI) / 180;
                const x = 50 + (icon.radius / 420) * 100 * Math.cos(rad);
                const y = 50 + (icon.radius / 420) * 100 * Math.sin(rad);
                return (
                  <div
                    key={icon.id}
                    className="absolute z-[8] w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[62px] lg:h-[62px] rounded-full overflow-hidden cursor-default transition-all duration-350 hover:!scale-110 hover:z-20 float-icon"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%,-50%)",
                      boxShadow: "0 4px 20px rgba(13,19,38,0.12), 0 0 0 2px rgba(26,78,166,0.25)",
                      animationDelay: `${icon.id * 0.5}s`,
                    }}
                  >
                    <img src={icon.img} alt={icon.label} className="w-full h-full object-cover block rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0 animate-fade-up">
            <h1 className="font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: "'Syne',sans-serif", color: "#0d1326" }}>
              Automation that
              <span className="block mt-2">
                delivers{" "}
                <span style={{ background: "linear-gradient(90deg,#1a4ea6,#3a6fd8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  real
                </span>{" "}
                <span style={{ background: "linear-gradient(90deg,#eb8a80,#d9534f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  results
                </span>
              </span>
            </h1>

            <div className="space-y-4 mb-6">
              <p className="text-base md:text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-0 font-light" style={{ fontFamily: "'DM Sans',sans-serif", color: "#4e556d" }}>
                We are a team of growth leads, creatives, creators and data scientists who help unlock rapid growth for impactful brands.
              </p>
              <div className="flex items-start gap-3 max-w-[480px] mx-auto lg:mx-0">
                <div className="w-0.5 h-12 rounded-full flex-shrink-0 mt-1" style={{ background: "linear-gradient(to bottom,#1a4ea6,#eb8a80)" }} />
                <p className="text-sm md:text-base leading-relaxed font-light italic" style={{ fontFamily: "'DM Sans',sans-serif", color: "#7a8199" }}>
                  "If you&apos;re looking for a traditional agency, we are <span style={{ color: "#eb8a80", fontWeight: 600, fontStyle: "normal" }}>10XBIZZ</span> for that."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
