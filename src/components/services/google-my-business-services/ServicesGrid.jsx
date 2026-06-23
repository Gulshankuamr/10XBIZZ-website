'use client'

import React from "react"
import { motion } from "framer-motion"

export default function GMBBenefits() {
  // 6 Premium structured outcome-focused cards
  const benefits = [
    {
      num: "01",
      title: "Rank Higher On Google Maps",
      desc: "Appear in local search results when nearby customers are actively searching for your products or services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Build Trust With Reviews",
      desc: "Showcase positive customer reviews, ratings, photos, and business information that encourage people to choose you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.312.592-.312.743 0l2.193 4.537a.5.5 0 00.377.275l5.006.54c.346.037.484.463.228.706l-3.692 3.5a.5.5 0 00-.144.442l.966 4.89c.067.339-.294.601-.593.429l-4.43-2.43a.5.5 0 00-.466 0l-4.43 2.43c-.299.172-.66-.09-.593-.429l.967-4.89a.5.5 0 00-.144-.442l-3.692-3.5c-.256-.243-.118-.669.229-.706l5.006-.54a.5.5 0 00.377-.275l2.193-4.537z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Generate More Calls & Enquiries",
      desc: "Make it easy for customers to call, message, visit your website, or request directions directly from Google.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.554-5.154-3.883-6.7-6.7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Increase Store Visits",
      desc: "Drive more foot traffic and local enquiries by improving your visibility in nearby searches.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75 7.5 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Stay Active & Engaging",
      desc: "Keep customers engaged with regular updates, offers, posts, photos, and business announcements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M3 12a48.654 48.654 0 01.138-3.662m0 3.662a4.006 4.006 0 013.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 013.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3 3" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Turn Searches Into Sales",
      desc: "Convert local search traffic into real customers, appointments, bookings, and revenue.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75zm0 0h16.5M3.75 4.5v14.25m16.5-14.25v14.25m0-14.25H21a.75.75 0 01.75.75V6a.75.75 0 01-.75.75h-.75m0 0v12.75m0 0v.75a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-.75m16.5 0H3.75" />
        </svg>
      )
    }
  ]

  return (
    <section 
      className="bg-[#FCFCFD] py-12 px-6 sm:px-12 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Background Soft Subtle Ambient Aura Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-purple-100/30 via-slate-50/10 to-blue-100/20 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Header Heading */}
        <div className="text-center mb-20 space-y-4 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-purple-600/90">
            Growth Outcomes
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-[-0.02a] leading-tight"
          >
            What You Get With Our Google Business Profile Optimization
          </motion.h2>
        </div>

        {/* 6-Card Clean Layout Grid Pattern with Brutalist Border/Shadow Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border-4 border-slate-950 flex flex-col justify-start relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Top Row: Icon Container and Card Counter Side-by-Side */}
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-xl border-2 border-slate-900 bg-purple-50 flex items-center justify-center text-[#6400A1]">
                  {item.icon}
                </div>
                {/* <span className="text-sm font-bold tracking-wider text-slate-400 font-mono">
                  {item.num}
                </span> */}
              </div>

              {/* Dynamic Title Headline Heading */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-[-0.01em] leading-snug">
                {item.title}
              </h3>

              {/* Dynamic Paragraph Description Content Copy updated to slate-800 */}
              <p className="text-sm md:text-[15px] text-slate-800 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}