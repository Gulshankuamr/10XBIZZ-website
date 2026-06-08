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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        .vs-section-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.5;
          pointer-events: none;
        }

        .vs-section-bg::after {
          content: '';
          position: absolute;
          top: -120px;
          right: -100px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(255,180,255,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        @keyframes pulse-ring {
          0%   { transform: scale(1);    opacity: 0.55; }
          100% { transform: scale(1.65); opacity: 0;    }
        }

        .vs-pulse-anim   { animation: pulse-ring 2.2s cubic-bezier(0.22,1,0.36,1) infinite; }
        .vs-pulse-anim-2 { animation: pulse-ring 2.2s cubic-bezier(0.22,1,0.36,1) infinite; animation-delay: 0.75s; opacity: 0.3; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .vs-blink { animation: blink 1.5s ease infinite; }

        .vs-frame-hover:hover .vs-thumb { transform: scale(1.03); }
        .vs-frame-hover:hover .vs-play-btn { transform: scale(1.12); background: rgba(255,255,255,0.28); }
      `}</style>

      <section
        className="vs-section-bg relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
        style={{ background: "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)" }}
      >
        {/* Bottom-left glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-80px",
            left: "-80px",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(255,100,100,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[920px] mx-auto text-center">

          {/* ── Heading ── */}
          <div className="max-w-[580px] mx-auto px-5 mb-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#ff8a8a]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/60 font-semibold">
                LIVE SYSTEM DEMO
              </span>
            </div>

            {/* Title */}
            <h2 className="m-0 text-white font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-[-0.03em]">
              See How We Turn
              <br />
              <span className="text-white">
                Leads Into Customers
              </span>
            </h2>

            {/* Sub */}
            <p className="mt-4 mx-auto max-w-[420px] leading-[1.7] text-white/70 text-[15px]">
              Watch our complete lead generation and automation system in action,
              from capturing leads to converting them into paying customers.
            </p>
          </div>

          {/* ── Video Frame ── */}
          <div
            className="relative rounded-[24px] p-[3px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.18) 100%)",
              boxShadow:
                "inset 0 2px 0 rgba(255,255,255,0.15), 0 32px 80px rgba(0,0,0,0.35), 0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <div
              ref={containerRef}
              className="vs-frame-hover relative w-full overflow-hidden rounded-[21px] bg-[#111827] cursor-pointer"
              style={{ paddingTop: "56.25%" }}
              onClick={!isPlaying ? handlePlay : undefined}
            >
              {/* Thumbnail */}
              {!isPlaying && (
                <img
                  className="vs-thumb absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] cubic-bezier(0.22,1,0.36,1)"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
                  alt="Service marketing demo"
                />
              )}

              {/* Thumbnail gradient */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 pointer-events-none z-[1]"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,17,23,0.65) 0%, rgba(13,17,23,0.1) 40%, transparent 70%)",
                  }}
                />
              )}

              {/* Top-left: Live CRM chip */}
              {!isPlaying && (
                <div
                  className="absolute top-[18px] left-[18px] z-[4] flex items-center gap-[6px] px-[11px] py-[5px] rounded-[8px] text-[0.68rem] font-semibold tracking-[0.07em] uppercase text-white/90 border border-white/22 backdrop-blur-[10px]"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <div
                    className="vs-blink w-[6px] h-[6px] rounded-full flex-shrink-0"
                    style={{
                      background: "#4ade80",
                      boxShadow: "0 0 0 3px rgba(74,222,128,0.25)",
                    }}
                  />
                  Live CRM Tracking
                </div>
              )}

              {/* Bottom-right: Automation Flow chip */}
              {/* {!isPlaying && (
                <div
                  className="absolute bottom-[18px] right-[18px] z-[4] flex items-center gap-[5px] px-[13px] py-[5px] pl-[9px] rounded-full text-[0.7rem] font-semibold text-white/92 border border-white/15 backdrop-blur-[10px]"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                >
                  <span className="text-[0.75rem]">⚡</span>
                  Automation Flow
                </div>
              )} */}

              {/* Video element */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-[21px] z-[2] transition-opacity duration-[350ms]"
                style={{ opacity: isPlaying ? 1 : 0 }}
                src={VIDEO_SRC}
                playsInline
                controls={isPlaying}
                preload="none"
              />

              {/* Play overlay */}
              <div
                className="absolute inset-0 z-[3] flex flex-col items-center justify-center transition-opacity duration-300"
                style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? "none" : "auto" }}
              >
                <div className="relative flex items-center justify-center">
                  {/* Pulse rings */}
                  <div
                    className="vs-pulse-anim absolute w-[80px] h-[80px] rounded-full border-2 border-white/45 pointer-events-none"
                  />
                  <div
                    className="vs-pulse-anim-2 absolute w-[80px] h-[80px] rounded-full border-2 border-white/45 pointer-events-none"
                  />
                  {/* Play button */}
                  <div
                    className="vs-play-btn relative z-[1] w-[80px] h-[80px] rounded-full flex items-center justify-center border-2 border-white/50 backdrop-blur-[16px] transition-all duration-[350ms] cubic-bezier(0.22,1,0.36,1)"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      className="ml-[5px]"
                      style={{
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "13px 0 13px 22px",
                        borderColor: "transparent transparent transparent #fff",
                      }}
                    />
                  </div>
                </div>
                {/* <span className="mt-4 text-white/88 text-[0.78rem] font-semibold tracking-[0.1em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                  Watch Now
                </span> */}
              </div>

              {/* Close / minimize button */}
              <div
                className="absolute top-[14px] right-[14px] z-[6] w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer border border-white/18 backdrop-blur-[8px] transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(0,0,0,0.45)",
                  opacity: isPlaying ? 1 : 0,
                  pointerEvents: isPlaying ? "auto" : "none",
                }}
                onClick={handleMinimize}
                title="Close video"
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(220,38,38,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
              >
                {/* X icon */}
                <div className="relative w-[14px] h-[14px]">
                  <span
                    className="absolute top-1/2 left-1/2 w-[14px] h-[2px] bg-white rounded-sm"
                    style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
                  />
                  <span
                    className="absolute top-1/2 left-1/2 w-[14px] h-[2px] bg-white rounded-sm"
                    style={{ transform: "translate(-50%, -50%) rotate(-45deg)" }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── Caption chips ── */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 flex-wrap">
            {[
              "Medically verified sources",
              "155,000+ compliant journals",
              "Specific to your business",
            ].map((t) => (
              <div key={t} className="flex items-center gap-[7px] text-[0.82rem] text-white/70 font-medium">
                <div className="w-[19px] h-[19px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
                  {/* Checkmark */}
                  <div
                    className="w-[8px] h-[5px] border-l-[1.8px] border-b-[1.8px] border-white/90"
                    style={{ transform: "rotate(-45deg) translateY(-1px)" }}
                  />
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