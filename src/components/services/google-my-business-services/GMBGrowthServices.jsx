'use client'

import { motion } from 'framer-motion'

export default function GMBGrowthServices() {
  // 6 Premium structured cards with their description and outcomes mapping
  const services = [
    {
      num: "01",
      title: "Google Business Profile Optimization",
      desc: "We optimize every part of your profile to improve visibility, trust, and local search rankings.",
      outcomes: ["Better rankings", "More profile views", "More customer actions"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21v-2.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 18.75V21M9 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 01-2.25-2.25V4.5A2.25 2.25 0 015.25 2.25h9a2.25 2.25 0 012.25 2.25v1.5z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Local Keyword & Maps Ranking Strategy",
      desc: "We identify what your customers are searching for and optimize your profile to rank for those searches.",
      outcomes: ["Appear in more \"Near Me\" searches", "Better Google Maps visibility", "More local traffic"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Review & Reputation Growth",
      desc: "Build trust with more positive reviews and a stronger online reputation.",
      outcomes: ["Higher customer trust", "Better conversion rates", "Increased enquiries"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.316.606-.316.757 0l2.209 4.618 5.023.411c.348.029.488.463.224.69l-3.69 3.193.993 4.965c.069.344-.3.614-.594.437L12 15.353l-4.403 2.45c-.294.177-.663-.093-.594-.437l.993-4.965-3.69-3.193c-.264-.227-.124-.661.224-.69l5.023-.411 2.209-4.618z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Google Posts & Profile Activity",
      desc: "Keep your profile active with regular updates, offers, events, and announcements.",
      outcomes: ["Higher engagement", "Improved profile performance", "More customer interaction"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Citation & Business Information Management",
      desc: "Ensure your business information remains accurate and consistent across the web.",
      outcomes: ["Stronger local SEO signals", "Improved trust with Google", "Better ranking stability"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Competitor Analysis & Growth Strategy",
      desc: "We analyze your local competitors and identify opportunities to outperform them.",
      outcomes: ["Competitive advantage", "Faster growth opportunities", "Stronger local presence"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    }
  ]

  return (
    <section 
      className="bg-slate-50 py-12 px-6 sm:px-12 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Background Soft Colorful Ambient Aura Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-purple-200/30 via-pink-100/10 to-blue-200/20 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Header Heading & Subheadline */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em]"
          >
            Complete Google Business Profile Growth System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed"
          >
            We optimize, manage, and grow your Google Business Profile so more local customers can find, trust, and contact your business.
          </motion.p>
        </div>

        {/* 6-Card Layout Grid Pattern with Snappy Pure CSS Brutalist Hover Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#6400A1] rounded-[2rem] p-8 md:p-10 border-4 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative group cursor-pointer overflow-hidden transition-colors duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div>
                {/* Absolute Top-Right Counter Card Numbering */}
                <div className="absolute top-6 right-8 text-3xl font-bold tracking-[-0.02em] text-slate-100 group-hover:text-purple-800/40 transition-colors duration-200 pointer-events-none select-none">
                  {item.num}
                </div>

                {/* Icon Container Graphic Box with Dynamic Brand Accent Line */}
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-50 to-pink-50 border-2 border-slate-950 flex items-center justify-center text-[#6400A1] group-hover:from-white/10 group-hover:to-white/5 group-hover:border-white/20 group-hover:text-amber-400 transition-colors duration-200">
                  {item.icon}
                </div>

                {/* Dynamic Title Headline Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-[-0.02em] leading-snug transition-colors duration-200 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Dynamic Paragraph Description Content Copy */}
                <p className="text-sm md:text-base text-gray-900 font-medium leading-[1.7] transition-colors duration-200 group-hover:text-purple-100 mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Outcomes Section Configured inside each card */}
              <div className="border-t border-slate-300/60 pt-4 group-hover:border-white/10 transition-colors duration-200">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-amber-400 transition-colors duration-200 block mb-3">
                  Expected Outcome:
                </span>
                <ul className="space-y-2.5">
                  {item.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-600 group-hover:text-amber-400 mt-0.5 flex-shrink-0 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-white transition-colors duration-200">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}