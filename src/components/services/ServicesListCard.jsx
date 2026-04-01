import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "CRM Automation",
    desc: "Automate your leads, follow-ups and sales process with smart CRM systems.",
    link: "/services/crm-automation",
    eyebrow: "Pipeline Systems",
    points: ["Lead capture", "Auto follow-ups", "Sales tracking"],
    accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 520 260" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="70" y="62" width="130" height="138" rx="20" fill="#F8FAFC" stroke="#6B7280" strokeWidth="4" />
        <rect x="94" y="88" width="82" height="10" rx="5" fill="#5F5242" opacity="0.85" />
        <rect x="94" y="110" width="64" height="8" rx="4" fill="#C8D4E3" />
        <rect x="94" y="126" width="76" height="8" rx="4" fill="#C8D4E3" />
        <rect x="94" y="142" width="56" height="8" rx="4" fill="#C8D4E3" />
        <circle cx="302" cy="70" r="28" fill="#D8E7F5" />
        <rect x="242" y="88" width="118" height="102" rx="18" fill="#EEF2F6" stroke="#6B7280" strokeWidth="4" />
        <rect x="260" y="104" width="82" height="44" rx="12" fill="#A9BDD6" />
        <circle cx="301" cy="126" r="12" fill="#E08A5B" />
        <path d="M295 126L300 131L309 121" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="260" y="156" width="40" height="10" rx="5" fill="#5F5242" />
        <rect x="308" y="156" width="34" height="10" rx="5" fill="#DDB892" />
        <rect x="388" y="98" width="66" height="108" rx="18" fill="#F7F7F5" stroke="#6B7280" strokeWidth="4" />
        <rect x="404" y="122" width="34" height="8" rx="4" fill="#5F5242" />
        <rect x="404" y="140" width="26" height="8" rx="4" fill="#C8D4E3" />
        <rect x="404" y="158" width="38" height="8" rx="4" fill="#C8D4E3" />
        <circle cx="152" cy="44" r="20" fill="#9CC4E4" />
        <path d="M152 36V52M144 44H160" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="112" cy="198" r="6" fill="#9CC4E4" />
        <circle cx="238" cy="202" r="8" fill="#DDB892" />
        <circle cx="368" cy="60" r="7" fill="#9CC4E4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Lead Generation",
    desc: "Get consistent high-quality leads using ads, funnels and landing pages.",
    link: "/services/lead-generation",
    eyebrow: "Growth Engine",
    points: ["Ads funnels", "Landing pages", "Qualified leads"],
    accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 420 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="125" cy="118" r="56" fill="#E8F4EA" stroke="#4D7C5F" strokeWidth="4" />
        <circle cx="125" cy="118" r="16" fill="#4D7C5F" />
        <path d="M125 48V68M125 168V188M55 118H75M175 118H195M75 68L90 83M160 153L175 168M75 168L90 153M160 83L175 68" stroke="#4D7C5F" strokeWidth="4" strokeLinecap="round" />
        <rect x="226" y="60" width="124" height="134" rx="22" fill="#F8FAFC" stroke="#6B7280" strokeWidth="4" />
        <rect x="250" y="88" width="76" height="10" rx="5" fill="#4D7C5F" />
        <rect x="250" y="110" width="90" height="8" rx="4" fill="#B8D2BE" />
        <rect x="250" y="128" width="64" height="8" rx="4" fill="#B8D2BE" />
        <rect x="250" y="150" width="58" height="24" rx="12" fill="#DDB892" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Facebook Ads",
    desc: "Run high-converting ad campaigns that bring real business results.",
    link: "/services/facebook-ads",
    eyebrow: "Paid Media",
    points: ["Audience targeting", "Creative testing", "Retargeting"],
    accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 420 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="52" y="70" width="178" height="110" rx="22" fill="#F8FAFC" stroke="#6B7280" strokeWidth="4" />
        <circle cx="92" cy="110" r="16" fill="#4A77B8" />
        <rect x="118" y="98" width="84" height="10" rx="5" fill="#4A77B8" />
        <rect x="118" y="120" width="66" height="8" rx="4" fill="#C7D8EE" />
        <rect x="76" y="146" width="130" height="8" rx="4" fill="#D9E6F5" />
        <rect x="260" y="56" width="112" height="134" rx="24" fill="#EAF2FB" stroke="#6B7280" strokeWidth="4" />
        <rect x="282" y="84" width="68" height="40" rx="12" fill="#A8C5E8" />
        <path d="M308 104H324M316 96V112" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <rect x="282" y="136" width="54" height="10" rx="5" fill="#4A77B8" />
        <rect x="282" y="154" width="72" height="8" rx="4" fill="#C7D8EE" />
        <circle cx="254" cy="200" r="10" fill="#DDB892" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sales Funnel",
    desc: "Convert visitors into customers with powerful funnel systems.",
    link: "/services/sales-funnel",
    eyebrow: "Conversion Flow",
    points: ["Offer journey", "Upsells", "Revenue steps"],
  accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 420 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M66 68H354L286 116H134L66 68Z" fill="#F7E7C8" stroke="#6B7280" strokeWidth="4" />
        <path d="M134 116H286L248 162H172L134 116Z" fill="#E7C07D" stroke="#6B7280" strokeWidth="4" />
        <path d="M172 162H248L224 198H196L172 162Z" fill="#B5862F" stroke="#6B7280" strokeWidth="4" />
        <circle cx="90" cy="196" r="11" fill="#9CC4E4" />
        <circle cx="334" cy="54" r="10" fill="#DDB892" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "WhatsApp Automation",
    desc: "Automate communication and follow-ups with WhatsApp systems.",
    link: "/services/whatsapp-automation",
    eyebrow: "Instant Replies",
    points: ["Auto replies", "Broadcast flows", "Lead nurturing"],
  accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 420 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="88" y="54" width="146" height="126" rx="30" fill="#F5FFFA" stroke="#6B7280" strokeWidth="4" />
        <path d="M120 166L106 196L142 178" fill="#2F9D67" opacity="0.9" />
        <rect x="122" y="92" width="78" height="10" rx="5" fill="#2F9D67" />
        <rect x="122" y="114" width="64" height="8" rx="4" fill="#B8E8CB" />
        <rect x="122" y="132" width="82" height="8" rx="4" fill="#B8E8CB" />
        <circle cx="298" cy="102" r="34" fill="#D8F1E3" stroke="#2F9D67" strokeWidth="4" />
        <path d="M286 103L296 113L314 92" stroke="#2F9D67" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Marketing Consultation",
    desc: "Get expert guidance to scale your business faster.",
    link: "/services/marketing-consultation",
    eyebrow: "Expert Direction",
    points: ["Strategy clarity", "ROI focus", "End-to-end support"],
   accent: "#5f5242",
    glow: "rgba(95,82,66,0.18)",
    visualBg: "linear-gradient(135deg,#ffffff 0%,#f4efe7 100%)",
    image: (
      <svg viewBox="0 0 420 240" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="130" cy="90" r="34" fill="#F8E2DE" stroke="#6B7280" strokeWidth="4" />
        <circle cx="130" cy="90" r="12" fill="#BF5D4F" />
        <path d="M74 184C74 152 186 152 186 184" fill="#F8E2DE" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />
        <rect x="224" y="66" width="130" height="108" rx="22" fill="#F8FAFC" stroke="#6B7280" strokeWidth="4" />
        <rect x="248" y="94" width="76" height="10" rx="5" fill="#BF5D4F" />
        <rect x="248" y="116" width="86" height="8" rx="4" fill="#EAC0BA" />
        <rect x="248" y="134" width="62" height="8" rx="4" fill="#EAC0BA" />
        <path d="M324 58L350 32" stroke="#BF5D4F" strokeWidth="5" strokeLinecap="round" />
        <path d="M338 32H350V44" stroke="#BF5D4F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const highlights = [
  "Proven systems",
  "Automation focused",
  "ROI-driven strategies",
  "End-to-end support",
];

const ServiceCard = ({ service, featured = false }) => (
  <Link
    to={service.link}
    aria-label={`${service.title} service page`}
    className={`group relative overflow-hidden rounded-[24px] border-[3px] border-[#8b94a5] bg-white/95 no-underline shadow-[8px_8px_0_rgba(134,144,160,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[10px_12px_0_rgba(77,124,95,0.22)]`}
    style={{ display: "block" }}
  >
    {/* Hover bg overlay — uses inline style so it doesn't affect text legibility */}
    <div
      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: service.accent }}
    />

    <div
      className={`relative z-10 grid h-[400px] items-center gap-5 p-5 sm:p-6 ${featured ? "md:grid-cols-[1.05fr_0.95fr]" : "md:grid-cols-[1fr_0.9fr]"}`}
    >
      {/* ── LEFT: text content ── */}
      <div className="space-y-4">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center rounded-full border border-[#d7dee7] bg-[#f7f8fa] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5e6b7d] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.eyebrow}
        </div>

        {/* Title */}
        <h3
          className={`text-[#0d1326] transition-colors duration-500 group-hover:text-white ${featured ? "text-[clamp(1.8rem,3vw,2.35rem)]" : "text-[clamp(1.45rem,2vw,1.8rem)]"}`}
          style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.08 }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="max-w-[54ch] text-[15px] leading-7 text-[#596579] transition-colors duration-500 group-hover:text-white/90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.desc}
        </p>

        {/* Feature pills */}
        <div className="grid gap-2 sm:grid-cols-3">
          {service.points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-[#e4e8ee] bg-[#f8fafc] px-3.5 py-3 text-sm font-semibold text-[#253046] transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/15 group-hover:text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="mr-2 text-[13px] group-hover:text-white">✓</span>
              {point}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#253046] transition-colors duration-500 group-hover:text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore Service
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d8dee7] bg-white text-base text-[#253046] transition-all duration-500 group-hover:translate-x-1 group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white">
            →
          </span>
        </div>
      </div>

      {/* ── RIGHT: illustration panel ── */}
      <div className="relative">
        <div
          className={`relative overflow-hidden rounded-[22px] border border-[#dfe4ea] p-4 transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/10 ${featured ? "min-h-[210px] sm:min-h-[230px]" : "min-h-[200px]"}`}
          style={{ background: service.visualBg }}
        >
          <div className="relative z-10 h-full w-full">{service.image}</div>
        </div>
      </div>
    </div>
  </Link>
);

const ServicesListCard = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      .no-underline { text-decoration: none !important; }
    `}</style>

    <section
      className="relative overflow-hidden  px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
      aria-labelledby="services-list-heading"
    >
      {/* Subtle radial bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(244,245,242,0.88)_38%,_rgba(232,236,240,0.9)_100%)]" />
      <div className="pointer-events-none absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-[#dce7f0] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] bottom-16 h-72 w-72 rounded-full bg-[#efe2d1] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px]">

        {/* ── Section heading ── */}
     <div className="mx-auto mb-14 max-w-[760px] text-center px-5">

  {/* Tag / Badge */}
  <span className="inline-flex items-center rounded-full border border-[#d9dde3] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#677487] font-sans">
    Services
  </span>

  {/* Heading */}
  <h2 className="mt-5 text-[#0d1326] font-extrabold tracking-[-0.04em] leading-[1.1] text-[clamp(2rem,4.5vw,3.6rem)] font-serif">
    Move Faster &amp; Win Bigger
    <br />
    With Specialized Teams for Every Channel
  </h2>

  {/* Subtitle */}
  <p className="mx-auto mt-4 max-w-[560px] text-[#3d4756] text-base leading-8 font-normal font-sans">
    Have all your marketing pull in the same direction,
    while capitalizing on every opportunity.
  </p>

</div>

        {/* ── Cards ── */}
        <div className="mx-auto flex max-w-[960px] flex-col gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={index === 0} />
          ))}
        </div>

        {/* ── Why choose us ── */}
        {/* <div className="mx-auto mt-10 max-w-[960px] rounded-[30px] border border-[#d8dde5] bg-white/80 p-6 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[360px]">
              <h3
                className="text-[clamp(1.3rem,2vw,1.75rem)] font-bold text-[#0d1326]"
                style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.1 }}
              >
                Why choose us
              </h3>
              <p
                className="mt-2 text-[14px] leading-7 text-[#5a6678]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Simple systems, stronger follow-ups, and a growth stack built to bring measurable ROI.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#e5e9ef] bg-[#f8f9fb] px-4 py-3.5 text-[#223046]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe3d4] text-[16px] font-bold text-[#5f5242]">
                    ✓
                  </span>
                  <span className="text-[13.5px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  </>
);

export default ServicesListCard;