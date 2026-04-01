import React, { useState } from "react";



const kpis = ["Profit", "Revenue", "SQL Volume", "MQL Volume", "Lead", "ROAS"];

const dataByKpi = {
  Revenue: [
    { p: "#1", gain: "+$23,500/mo", sub: "(738% Revenue ROI)", what: "Onsite CRO = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+$11,500/mo", sub: "(383% Revenue ROI)", what: "2 landing pages = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+$9,750/mo", sub: "(195% Revenue ROI)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+$8,250/mo", sub: "(137% Revenue ROI*)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months", note: "*20% CPA Bleed Up" },
    { p: "#5", gain: "+$8,000/mo", sub: "(107% Revenue ROI*)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months", note: "*20% CPA Bleed Up" },
  ],
  ROAS: [
    { p: "#1", gain: "+7.38", sub: "(738% ROAS)", what: "Onsite CRO = ~20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+3.83", sub: "(383% ROAS)", what: "2 landing pages = ~20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+1.95", sub: "(195% ROAS)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+1.37", sub: "(137% ROAS*)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months", note: "*20% CPA Bleed Up" },
    { p: "#5", gain: "+1.07", sub: "(107% ROAS*)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months", note: "*20% CPA Bleed Up" },
  ],
  Profit: [
    { p: "#1", gain: "+$18,000/mo", sub: "(600% Profit ROI)", what: "Onsite CRO = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+$9,000/mo", sub: "(300% Profit ROI)", what: "2 landing pages = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+$7,500/mo", sub: "(150% Profit ROI)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+$6,000/mo", sub: "(100% Profit ROI*)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months" },
    { p: "#5", gain: "+$5,500/mo", sub: "(73% Profit ROI*)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months" },
  ],
  "SQL Volume": [
    { p: "#1", gain: "+120 SQLs/mo", sub: "(High Intent)", what: "Onsite CRO = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+80 SQLs/mo", sub: "(Med Intent)", what: "2 landing pages = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+60 SQLs/mo", sub: "(Organic)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+50 SQLs/mo", sub: "(Paid)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months" },
    { p: "#5", gain: "+40 SQLs/mo", sub: "(Social)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months" },
  ],
  "MQL Volume": [
    { p: "#1", gain: "+200 MQLs/mo", sub: "(Top Funnel)", what: "Onsite CRO = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+160 MQLs/mo", sub: "(Mid Funnel)", what: "2 landing pages = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+130 MQLs/mo", sub: "(Organic)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+110 MQLs/mo", sub: "(Paid)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months" },
    { p: "#5", gain: "+90 MQLs/mo", sub: "(Social)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months" },
  ],
  Lead: [
    { p: "#1", gain: "+350 Leads/mo", sub: "(738% Lead ROI)", what: "Onsite CRO = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#2", gain: "+220 Leads/mo", sub: "(383% Lead ROI)", what: "2 landing pages = +20% CVR", inv: "$3,000/mo", speed: "<= 3 Months" },
    { p: "#3", gain: "+180 Leads/mo", sub: "(195% Lead ROI)", what: "SEO = 20% organic traffic/lift", inv: "$5,000/mo", speed: "<= 3 Months" },
    { p: "#4", gain: "+150 Leads/mo", sub: "(137% Lead ROI*)", what: "Google Ad Spend Increase", inv: "$6,000/mo", speed: "<= 3 Months" },
    { p: "#5", gain: "+120 Leads/mo", sub: "(107% Lead ROI*)", what: "LinkedIn Ad Spend Increase", inv: "$7,500/mo", speed: "<= 3 Months" },
  ],
};

const gainLabel = {
  Revenue: "Revenue Gain", ROAS: "ROAS Gain", Profit: "Profit Gain",
  "SQL Volume": "SQL Gain", "MQL Volume": "MQL Gain", Lead: "Lead Gain",
};


function GrowthGridSection() {
  const [active, setActive] = useState("Revenue");
  const rows = dataByKpi[active] || dataByKpi["Revenue"];
  const cols = ["Priority", gainLabel[active], "What", "Investment", "Speed"];

  return (
    <section className="border-b border-[#dde1e8] bg-[#ececef] px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-[1060px]">

        {/* Heading */}
        <div className="relative text-center">
          <div className="absolute left-4 top-0 hidden -translate-x-[70%] lg:block">
            <div className="flex items-center gap-3">
              <img src="/images/left-note.png" alt="note" className="w-[140px] object-contain" />
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                <path d="M2 2 C40 20, 40 40, 75 55" stroke="#111827" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <circle cx="75" cy="55" r="3" fill="#111827" />
              </svg>
            </div>
          </div>

          <h2 className="heading-main mx-auto max-w-[720px] text-[clamp(2rem,5vw,3.2rem)] font-extrabold text-[#050b1b] leading-tight flex flex-col items-center gap-1">
            <span className="md:whitespace-nowrap">
              <span className="bg-[#020711] text-white px-2 py-0.5 rounded-sm">Financial Acumen</span>{" "}
              So High, We Already
            </span>
            <span className="md:whitespace-nowrap">Know What&apos;s Next For Your Growth</span>
          </h2>

          <p className="body-copy mx-auto mt-4 max-w-[820px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-[#1f2740]">
            Meet our "Growth Grid" that takes your financial business metrics & attribution models to find where your current & next best dollars are spent.
            We do the math in{" "}
            <span className="text-[#eb8a80]">your free marketing plan.</span>
          </p>

          <div className="absolute right-4 top-24 hidden translate-x-[70%] lg:block">
            <div className="flex items-center gap-3 flex-row-reverse">
              <img src="/images/right-note.png" alt="note" className="w-[150px] object-contain" />
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                <path d="M78 2 C40 20, 40 40, 5 55" stroke="#111827" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <circle cx="5" cy="55" r="3" fill="#111827" />
              </svg>
            </div>
          </div>
        </div>

        {/* KPI Tabs */}
        <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {kpis.map((k) => {
            const selected = k === active;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`rounded-xl border px-2 py-2.5 text-sm font-medium shadow-sm transition-all ${
                  selected
                    ? "border-[#ef8f83] bg-white text-[#ef8f83]"
                    : "border-[#c9ced9] bg-[#f9fafc] text-[#10182f] hover:border-[#adb3c0]"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>

        {/* ── DESKTOP TABLE (md+) ── */}
        <div className="mt-6 hidden md:block">
          <div className="grid grid-cols-[0.8fr_1.9fr_2.4fr_1.2fr_1.1fr] rounded-xl border-[3px] border-[#596184] bg-[#62c4e2] overflow-hidden shadow-[5px_5px_0_#c8ced8]">
            {cols.map((h, i, arr) => (
              <div key={h} className={`px-4 py-3 text-center text-[0.9rem] font-extrabold text-white tracking-wide ${i < arr.length - 1 ? "border-r-[3px] border-[#596184]" : ""}`}>
                {h}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {rows.map((r) => (
              <div key={r.p} className="grid grid-cols-[0.8fr_1.9fr_2.4fr_1.2fr_1.1fr] rounded-xl border-[3px] border-[#596184] bg-white overflow-hidden shadow-[5px_5px_0_#d0d5df]">
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-3 py-5 text-[1rem] font-extrabold text-[#445178]">{r.p}</div>
                <div className="flex flex-col items-center justify-center border-r-[3px] border-[#596184] px-3 py-5 text-center">
                  <p className="m-0 text-[1rem] font-extrabold text-[#445178]">{r.gain}</p>
                  <p className="m-0 text-[0.76rem] font-semibold text-[#6878a0] mt-0.5">{r.sub}</p>
                  {r.note && <p className="m-0 text-[0.7rem] text-[#8892b0] mt-0.5">{r.note}</p>}
                </div>
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-4 py-5 text-center text-[0.92rem] font-bold text-[#445178]">{r.what}</div>
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-3 py-5 text-[0.92rem] font-bold text-[#445178]">{r.inv}</div>
                <div className="flex items-center justify-center px-3 py-5 text-[0.9rem] font-bold text-[#445178]">{r.speed}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE TABLE (< md) — image jaisa full grid ── */}
        <div className="md:hidden mt-6">

          {/* Mobile Header */}
          <div className="grid grid-cols-[0.6fr_1.4fr_1.5fr_1fr_0.8fr] rounded-xl border-[3px] border-[#596184] bg-[#62c4e2] overflow-hidden shadow-[4px_4px_0_#c8ced8]">
            {cols.map((h, i, arr) => (
              <div key={h} className={`px-1.5 py-2.5 text-center text-[0.62rem] font-extrabold text-white leading-tight ${i < arr.length - 1 ? "border-r-[3px] border-[#596184]" : ""}`}>
                {h}
              </div>
            ))}
          </div>

          {/* Mobile Rows */}
          <div className="mt-2.5 flex flex-col gap-2.5">
            {rows.map((r) => (
              <div key={r.p} className="grid grid-cols-[0.6fr_1.4fr_1.5fr_1fr_0.8fr] rounded-xl border-[3px] border-[#596184] bg-white overflow-hidden shadow-[4px_4px_0_#d0d5df]">
                {/* Priority */}
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-1 py-4 text-[0.82rem] font-extrabold text-[#445178]">
                  {r.p}
                </div>
                {/* Gain */}
                <div className="flex flex-col items-center justify-center border-r-[3px] border-[#596184] px-1.5 py-4 text-center">
                  <p className="m-0 text-[0.75rem] font-extrabold text-[#445178] leading-tight">{r.gain}</p>
                  <p className="m-0 text-[0.6rem] font-semibold text-[#6878a0] mt-0.5 leading-tight">{r.sub}</p>
                  {r.note && <p className="m-0 text-[0.55rem] text-[#8892b0] mt-0.5 leading-tight">{r.note}</p>}
                </div>
                {/* What */}
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-2 py-4 text-center text-[0.7rem] font-bold text-[#445178] leading-tight">
                  {r.what}
                </div>
                {/* Investment */}
                <div className="flex items-center justify-center border-r-[3px] border-[#596184] px-1 py-4 text-[0.7rem] font-bold text-[#445178] text-center leading-tight">
                  {r.inv}
                </div>
                {/* Speed */}
                <div className="flex items-center justify-center px-1 py-4 text-[0.68rem] font-bold text-[#445178] text-center leading-tight">
                  {r.speed}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



function SoftwareSection() {
  return (
    <section className="bg-[#ececef] px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-[1060px]">
        <div className="text-center">
          <h2 className="heading-main text-[clamp(2rem,5vw,3.2rem)] text-[#050b1b]">
            Our Software (Kite) Tracks, Alerts
            <br />
            <span className="highlight-span">&amp; Helps Achieve All Your Goals</span>
          </h2>
          <p className="body-copy mx-auto mt-4 max-w-[760px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-[#1f2740]">
            Meet Kite, our home-built software that tracks anomalies, performance bleeds, growth opportunities, and much much more, 24/7.
            We&apos;ll show you in <span className="text-[#eb8a80]">your free marketing plan.</span>
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute -right-6 -top-24 z-20 hidden lg:block">
            <div className="relative">
              <KiteBadge />
              <div className="absolute -left-10 -top-1 grid gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-md bg-[#f4df8a] text-center text-xl leading-8 text-[#2a846f] shadow-sm">?</div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border-4 border-[#596184] bg-white shadow-[8px_8px_0_#cfd4de]">
            <img src="/servishherosection.webp" alt="Kite software dashboard" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FinancialPlan = () => {
  return (
    <>
      <div className="body-copy">
        <GrowthGridSection />
        {/* <MarketingPlanSection /> */}
        {/* <SoftwareSection /> */}
      </div>
    </>
  );
};

export default FinancialPlan;
