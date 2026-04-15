import { useState, useRef, useEffect } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const VIDEO_SRC = "/your-video.mp4";

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        enterFullscreen();
      }
    }, 50);
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    exitFullscreen();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const enterFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    else if (videoRef.current?.webkitEnterFullscreen) {
      videoRef.current.webkitEnterFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  useEffect(() => {
    const handleFSChange = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
      if (!fsEl && isPlaying) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFSChange);
    document.addEventListener("webkitfullscreenchange", handleFSChange);
    document.addEventListener("mozfullscreenchange", handleFSChange);
    document.addEventListener("msfullscreenchange", handleFSChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFSChange);
      document.removeEventListener("webkitfullscreenchange", handleFSChange);
      document.removeEventListener("mozfullscreenchange", handleFSChange);
      document.removeEventListener("msfullscreenchange", handleFSChange);
    };
  }, [isPlaying]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        .vs-section {
          /* ✅ FIXED: exact gradient from image */
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          padding: 5.5rem 1.5rem 5rem;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle noise/texture overlay to match image depth */
        .vs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.5;
          pointer-events: none;
        }

        /* Top-right soft light bloom */
        .vs-section::after {
          content: '';
          position: absolute;
          top: -120px;
          right: -100px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(255,180,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Bottom-left soft glow */
        .vs-glow-left {
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,100,100,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .vs-inner {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .vs-frame-outer {
          position: relative;
          border-radius: 24px;
          padding: 3px;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.18) 100%);
          box-shadow:
            0 2px 0 rgba(255,255,255,0.15) inset,
            0 32px 80px rgba(0,0,0,0.35),
            0 4px 20px rgba(0,0,0,0.2);
        }

        .vs-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          border-radius: 21px;
          overflow: hidden;
          background: #111827;
          cursor: pointer;
        }

        .vs-frame:fullscreen,
        .vs-frame:-webkit-full-screen,
        .vs-frame:-moz-full-screen {
          border-radius: 0;
          padding-top: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .vs-thumb {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .vs-frame:hover .vs-thumb { transform: scale(1.03); }

        .vs-thumb-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,17,23,0.65) 0%, rgba(13,17,23,0.1) 40%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .vs-video-tag {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 4;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 8px;
          padding: 5px 11px;
          font-size: 0.68rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.07em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .vs-rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 3px rgba(74,222,128,0.25);
          animation: blink 1.5s ease infinite;
          flex-shrink: 0;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }

        .vs-duration {
          position: absolute;
          bottom: 18px;
          right: 18px;
          z-index: 4;
          background: rgba(0,0,0,0.52);
          backdrop-filter: blur(8px);
          border-radius: 7px;
          padding: 4px 10px;
          font-size: 0.73rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }

        /* Automation Flow chip — bottom right on video */
        .vs-auto-chip {
          position: absolute;
          bottom: 18px;
          right: 18px;
          z-index: 4;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          padding: 5px 13px 5px 9px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.92);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .vs-auto-icon {
          font-size: 0.75rem;
        }

        .vs-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 21px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.35s;
        }

        .vs-video.show { opacity: 1; }

        .vs-play-layer {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: opacity 0.3s;
        }

        .vs-play-layer.gone { opacity: 0; pointer-events: none; }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.65); opacity: 0; }
        }

        .vs-pulse {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.45);
          animation: pulse-ring 2.2s cubic-bezier(0.22,1,0.36,1) infinite;
          pointer-events: none;
        }

        .vs-pulse-2 { animation-delay: 0.75s; opacity: 0.3; }

        .vs-play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s;
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1;
        }

        .vs-frame:hover .vs-play-btn {
          transform: scale(1.12);
          background: rgba(255,255,255,0.28);
        }

        .vs-triangle {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 13px 0 13px 22px;
          border-color: transparent transparent transparent #fff;
          margin-left: 5px;
        }

        .vs-play-text {
          margin-top: 16px;
          color: rgba(255,255,255,0.88);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-shadow: 0 1px 8px rgba(0,0,0,0.5);
        }

        .vs-minimize-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 6;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          opacity: 0;
          pointer-events: none;
        }

        .vs-minimize-btn.show {
          opacity: 1;
          pointer-events: auto;
        }

        .vs-minimize-btn:hover {
          background: rgba(220,38,38,0.7);
          transform: scale(1.1);
        }

        .vs-x::before,
        .vs-x::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
        }

        .vs-x::before { transform: translate(-50%, -50%) rotate(45deg); }
        .vs-x::after  { transform: translate(-50%, -50%) rotate(-45deg); }
        .vs-x { position: relative; width: 14px; height: 14px; }

        .vs-caption-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.8rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .vs-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        .vs-chip-icon {
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vs-check {
          width: 8px;
          height: 5px;
          border-left: 1.8px solid rgba(255,255,255,0.9);
          border-bottom: 1.8px solid rgba(255,255,255,0.9);
          transform: rotate(-45deg) translateY(-1px);
        }

        @media (max-width: 640px) {
          .vs-section { padding: 3.5rem 1rem 3rem; }
          .vs-play-btn, .vs-pulse { width: 64px; height: 64px; }
          .vs-triangle { border-width: 10px 0 10px 18px; }
          .vs-caption-row { gap: 1rem; }
        }
      `}</style>

      <section className="vs-section ">
        <div className="vs-glow-left" />

        <div className="vs-inner">

          {/* ── Heading ── */}
          <div className="text-center max-w-2xl mx-auto px-5 mb-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#ff8a8a]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/60 font-semibold">
                Service Marketing · Watch Demo
              </span>
            </div>

            {/* Title */}
            <h2 className="m-0 text-white font-extrabold text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.3] tracking-tight">
              Leads that{" "}
              <span className="bg-white text-[#6400A1] px-2 py-0.5 rounded-sm inline">
                convert
              </span>
              <br />
              <span className="block whitespace-nowrap">
                Growth you can measure.
              </span>
            </h2>

            {/* Sub */}
            <p className="mt-3.5 mx-auto max-w-[480px] leading-relaxed text-white/70 text-[clamp(0.9rem,1.5vw,1rem)]">
              See exactly how our marketing system generates qualified leads,
              reduces cost-per-acquisition, and scales your business — all in under{" "}
              <span className="text-[#ffaaaa] font-semibold">3 minutes.</span>
            </p>
          </div>

          {/* ── Video ── */}
          <div className="vs-frame-outer">
            <div
              ref={containerRef}
              className="vs-frame"
              onClick={!isPlaying ? handlePlay : undefined}
            >
              {/* Thumbnail */}
              <img
                className="vs-thumb"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
                alt="Service marketing demo"
                style={{ display: isPlaying ? "none" : "block" }}
              />

              <div
                className="vs-thumb-grad"
                style={{ display: isPlaying ? "none" : "block" }}
              />

              {/* Live CRM Tracking chip — top left */}
              {!isPlaying && (
                <div className="vs-video-tag">
                  <div className="vs-rec-dot" />
                  Live CRM Tracking
                </div>
              )}

              {/* Automation Flow chip — bottom right */}
              {!isPlaying && (
                <div className="vs-auto-chip">
                  <span className="vs-auto-icon">⚡</span>
                  Automation Flow
                </div>
              )}

              {/* Video element */}
              <video
                ref={videoRef}
                className={`vs-video${isPlaying ? " show" : ""}`}
                src={VIDEO_SRC}
                playsInline
                controls={isPlaying}
                preload="none"
              />

              {/* Play overlay */}
              <div className={`vs-play-layer${isPlaying ? " gone" : ""}`}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="vs-pulse" />
                  <div className="vs-pulse vs-pulse-2" />
                  <div className="vs-play-btn">
                    <div className="vs-triangle" />
                  </div>
                </div>
                <span className="vs-play-text">Watch Now</span>
              </div>

              {/* Minimize / close button */}
              <div
                className={`vs-minimize-btn${isPlaying ? " show" : ""}`}
                onClick={handleMinimize}
                title="Close video"
              >
                <div className="vs-x" />
              </div>
            </div>
          </div>

          {/* ── Caption chips ── */}
          <div className="vs-caption-row">
            {[
              "Medically verified sources",
              "155,000+ compliant journals",
              "Specific to your business",
            ].map((t) => (
              <div className="vs-chip" key={t}>
                <div className="vs-chip-icon">
                  <div className="vs-check" />
                </div>
                {t}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}