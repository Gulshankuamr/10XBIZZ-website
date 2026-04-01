export default function Story() {
  return (
    <section
      className="relative py-[60px] md:py-[100px] px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "#e2e6ef" }} />
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,78,166,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto">
        <h2
          className="font-extrabold leading-[1.08] tracking-[-1.5px] mb-16"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", color: "#0d1326" }}
        >
          Our Story in a Nutshell:
          <br />
          We Show Up <span style={{ color: "#eb8a80" }}>When It</span> <span style={{ color: "#1a4ea6" }}>Matters</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 space-y-7">
            <p className="text-[15px] leading-[1.9] font-light" style={{ fontFamily: "'DM Sans',sans-serif", color: "#4e556d" }}>
              Our growth practice is built around financial clarity, operational discipline, and campaigns that translate into measurable business outcomes.
            </p>

            <div style={{ width: "48px", height: "2px", borderRadius: "9999px", background: "linear-gradient(to right,#1a4ea6,transparent)" }} />

            <p className="text-[15px] leading-[1.9] font-light" style={{ fontFamily: "'DM Sans',sans-serif", color: "#4e556d" }}>
              We partner closely with founders and teams to replace guesswork with systems that scale.
            </p>

            <p className="text-[15px] leading-[1.9] font-light" style={{ fontFamily: "'DM Sans',sans-serif", color: "#4e556d" }}>
              Today, 10XBIZZ stands as a <span style={{ color: "#1a4ea6", fontWeight: 500 }}>hub for innovation, growth, and impact</span>, with a team focused on long-term brand momentum.
            </p>
          </div>

          <div className="flex-1 relative h-[360px] md:h-[500px]">
            <div
              className="absolute top-0 left-0 right-0 bottom-[90px] rounded-2xl overflow-hidden group"
              style={{
                border: "1px solid #e2e6ef",
                boxShadow: "0 24px 60px rgba(13,19,38,0.08), 0 0 0 1px rgba(13,19,38,0.03)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
                alt="Team at work"
                className="w-full h-full object-cover block transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(26,78,166,0.12) 0%, transparent 50%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
