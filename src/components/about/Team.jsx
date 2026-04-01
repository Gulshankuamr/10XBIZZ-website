const testimonials = [
  {
    id: 1,
    quote: "Our lead cost dropped by 40% and conversion rate tripled within the first month of implementation.",
    name: "Vikram Sethi",
    role: "CEO, TechGrowth India",
    badge: "3x Leads",
    badgeBg: "#6400A115",
    badgeText: "#6400A1",
    topBar: "linear-gradient(90deg, #6400A1, #9B40CC)",
    avatar: "VS",
    avatarBg: "#6400A120",
    avatarColor: "#6400A1",
  },
  {
    id: 2,
    quote: "The WhatsApp automation is magical. It handles 80% of our initial queries without my team touching the phone.",
    name: "Ananya Roy",
    role: "Founder, LuxeLiving",
    badge: "50% Automation",
    badgeBg: "#BB000F12",
    badgeText: "#BB000F",
    topBar: "linear-gradient(90deg, #BB000F, #FF6B6B)",
    avatar: "AR",
    avatarBg: "#BB000F15",
    avatarColor: "#BB000F",
  },
  {
    id: 3,
    quote: "Finally, a system that doesn't just collect data but actually moves the needle on sales. Highly recommended.",
    name: "Rohan Mehta",
    role: "Sales Director, FinEdge",
    badge: "ROI 12x",
    badgeBg: "#85650015",
    badgeText: "#856500",
    topBar: "linear-gradient(90deg, #856500, #C4A000)",
    avatar: "RM",
    avatarBg: "#85650015",
    avatarColor: "#856500",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5f6fa] w-full">
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
        {/* Header — center aligned */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#111] tracking-tight mb-3">
            Architecture That Works
          </h2>
          <p className="text-[15px] text-[#667085]">
            Join 500+ businesses who switched to Kinetic Automation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[20px] flex flex-col justify-between overflow-hidden transition-all duration-250 hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] cursor-pointer"
              style={{ minHeight: 260 }}
            >
              {/* Top color bar */}
              <div
                className="h-[5px] w-full flex-shrink-0"
                style={{ background: t.topBar }}
              />

              <div className="p-7 flex flex-col justify-between flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A000" strokeWidth="1.8">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-[14px] text-[#333] leading-[1.7] mb-6 flex-1 text-justify"
                  style={{ textAlignLast: "left" }}
                >
                  {`"${t.quote}"`}
                </p>

                {/* Footer — avatar + badge */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Avatar circle */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                      style={{ background: t.avatarBg, color: t.avatarColor }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#111] leading-tight">{t.name}</p>
                      <p className="text-[11px] text-[#667085] leading-tight">{t.role}</p>
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: t.badgeBg, color: t.badgeText }}
                  >
                    {t.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}