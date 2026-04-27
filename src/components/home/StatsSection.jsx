import { useState } from "react";

const chaosItems = [
  {
    id: 1,
    title: "Leads Come In, No Fast Response",
    desc: "Every minute of delay kills the deal. By the time you reply, the prospect has moved on to your competitor.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "No System to Track Enquiries",
    desc: "Spreadsheets, WhatsApp, and Emails in different silos. Nothing talks to each other — leads fall through the cracks daily.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ads Spend but No ROI Clarity",
    desc: "You're burning budget on campaigns but can't trace which lead came from where, or what actually converted.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/>
        <rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "WhatsApp Chats Get Lost",
    desc: "Hot leads buried under unread messages. No context, no history, no way to pick up where you left off.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "No Proper Follow-up Process",
    desc: "Manual follow-ups depend on memory. Most leads get one message and then nothing — you're losing 60% of potential revenue.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
];

const edgeItems = [
  {
    id: 1,
    title: "Instant Lead Response",
    desc: "AI-powered engagement within 5 seconds of capture. You talk to them while they're still hot — before any competitor can.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6400A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Unified Lead Tracking System",
    desc: "One central source of truth. Every enquiry, interaction, and conversion synced in real-time — nothing lost, everything visible.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6400A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Full ROI Clarity on Ad Spend",
    desc: "Know exactly which campaign, ad, or channel brought each lead. Smart lead scoring shows you where to double down.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6400A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "WhatsApp + All Channels, Unified",
    desc: "Every WhatsApp, email, and SMS thread in one place. Full conversation history. Never lose context on a lead again.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6400A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Automated Follow-up Sequences",
    desc: "Multi-channel nurturing that runs 24/7 — email, WhatsApp, SMS — all on autopilot. No lead goes cold ever again.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6400A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
];

export default function ChaosVsEdge() {
  const [activeBar, setActiveBar] = useState(true);

  return (
    <section className="bg-white w-full">
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: 1280,
          paddingTop: 128,
          paddingBottom: 128,
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {/* Section Header */}
        <div className="text-center  -mt-12">
          <h2 className="text-[34px] sm:text-[40px] font-extrabold text-[#111] leading-[1.12] tracking-tight mb-4">
            Still Struggling to Turn Leads Into Customers?
          </h2>
          <p className="text-[16px] text-[#667085] max-w-xl mx-auto leading-relaxed">
            You're getting enquiries… but conversions are not happening.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          style={{ minHeight: 660 }}
        >

          {/* ── LEFT: THE CHAOS ── */}
          <div
            className="relative bg-[#fafafa] rounded-[24px] flex flex-col justify-between overflow-hidden border border-[#f0f0f0]"
            style={{ padding: "48px 48px 40px 48px" }}
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#BB000F08] pointer-events-none" />

            <div>
              <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-[#BB000F] uppercase mb-6">
                The Chaos (Old Way)
              </span>

              <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#111] leading-[1.12] tracking-tight mb-10">
                Manually chasing leads<br /> is a death sentence.
              </h2>

              <div className="flex flex-col gap-6">
                {chaosItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#BB000F0D] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111] mb-1">{item.title}</h4>
                      <p
                        className="text-[13px] text-[#667085] leading-[1.65] text-justify"
                        style={{ textAlignLast: "left" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom broken pipeline card */}
            <div className="mt-10 rounded-2xl bg-white border border-[#BB000F20] p-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#BB000F] rounded-l-2xl" />
              <div className="flex items-center gap-3 mb-4 pl-3">
                <div className="w-8 h-8 rounded-lg bg-[#BB000F0D] flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BB000F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-[#BB000F]">Disconnected Pipeline</span>
              </div>
              <div className="pl-3 flex flex-col gap-2">
                <div className="h-2 bg-[#BB000F15] rounded-full w-full" />
                <div className="h-2 bg-[#BB000F0D] rounded-full w-3/4" />
                <div className="h-2 bg-[#BB000F08] rounded-full w-1/2" />
              </div>
            </div>

            {/* Bottom line */}
            <div className="mt-4 rounded-xl bg-[#BB000F08] border border-[#BB000F15] px-5 py-3 flex items-center gap-3">
              <span className="text-[#BB000F] font-bold text-[15px]">→</span>
              <span className="text-[13px] font-semibold text-[#111]">Every missed lead is lost revenue.</span>
            </div>
          </div>

          {/* ── RIGHT: THE KINETIC EDGE ── */}
          <div
            className="relative bg-white rounded-[24px] flex flex-col justify-between overflow-hidden border border-[#f0f0f0] shadow-[0_8px_48px_rgba(100,0,161,0.09)]"
            style={{ padding: "48px 48px 40px 48px" }}
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#6400A10C] pointer-events-none" />
            <div className="absolute top-16 right-16 w-36 h-36 rounded-full bg-[#FF192008] pointer-events-none" />

            <div>
              <span className="inline-block text-[11px] font-bold tracking-[0.18em] text-[#6400A1] uppercase mb-6">
                The Kinetic Edge (10xBizz)
              </span>

              <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#111] leading-[1.12] tracking-tight mb-10">
                Predictable, automated,<br /> and relentless growth.
              </h2>

              <div className="flex flex-col gap-6">
                {edgeItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#6400A10D] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111] mb-1">{item.title}</h4>
                      <p
                        className="text-[13px] text-[#667085] leading-[1.65] text-justify"
                        style={{ textAlignLast: "left" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom active pipeline card */}
            <div
              className="mt-10 rounded-2xl p-5 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.01]"
              style={{ background: "linear-gradient(135deg, #6400A1 0%, #9B1DC8 60%, #FF1920 100%)" }}
              onMouseEnter={() => setActiveBar(false)}
              onMouseLeave={() => setActiveBar(true)}
            >
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[64px] font-black text-white opacity-[0.06] select-none pointer-events-none leading-none">
                10x
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-white">Kinetic Pipeline Active</span>
              </div>

              <div className="flex gap-2 items-center mb-3">
                {[
                  { w: activeBar ? "45%" : "58%", opacity: "bg-white/90" },
                  { w: activeBar ? "25%" : "32%", opacity: "bg-white/60" },
                  { w: activeBar ? "20%" : "28%", opacity: "bg-white/40" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 h-[6px] bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${bar.opacity} rounded-full transition-all duration-700`}
                      style={{ width: bar.w }}
                    />
                  </div>
                ))}
              </div>

              <span className="text-[12px] text-white/70 font-medium">
                Conversion Velocity: +340%
              </span>
            </div>

            {/* Transition callout */}
            <div className="mt-4 rounded-xl bg-[#6400A10A] border border-[#6400A118] px-5 py-3 text-center">
              <span className="text-[13px] font-bold text-[#6400A1]">
                The problem is not your ads. The problem is your system.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}