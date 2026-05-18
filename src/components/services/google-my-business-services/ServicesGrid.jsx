'use client'

import React from "react"
import { motion } from "framer-motion"

export default function GMBBenefits() {
  // 6 Premium structured cards from your provided content mapping
  const benefits = [
    {
      num: "01",
      title: "Increase Local Search Visibility",
      desc: "Optimize your Google My Business profile to appear in nearby searches, Google Maps results, and local business listings where customers are actively searching for your services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Build Strong Customer Trust",
      desc: "A professionally optimized GMB profile with accurate business information, reviews, photos, and updates helps build credibility and trust with potential customers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Generate More Calls & Enquiries",
      desc: "Make it easier for customers to contact your business directly through call buttons, enquiry actions, website clicks, and location directions from Google search results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.554-5.154-3.883-6.7-6.7l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Drive More Website & Store Visits",
      desc: "Attract both online and offline customers by improving local visibility and providing quick access to your business information, offers, and services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75 7.5 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Improve Customer Engagement",
      desc: "Engage your audience using Google posts, Q&A, customer reviews, messaging, and regular profile activity to keep your business active and trusted.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.33.018.642.154.877.385v0c.39.39.39 1.023 0 1.414l-7.386 7.386a2.156 2.156 0 01-1.01.554l-3.111.777a.534.534 0 01-.645-.645l.777-3.11c.108-.432.3-.83.554-1.01l7.386-7.386a1 1 0 011.414 0l1.414 1.414z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.432 17.568H21" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Boost Local Conversions & Sales",
      desc: "Turn local searches into real customers with a fully optimized Google My Business profile designed to increase conversions, walk-ins, bookings, and revenue.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75zm0 0h16.5M3.75 4.5v14.25m16.5-14.25v14.25m0-14.25H21a.75.75 0 01.75.75V6a.75.75 0 01-.75.75h-.75m0 0v12.75m0 0v.75a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-.75m16.5 0H3.75" />
        </svg>
      )
    }
  ]

  return (
    <section 
      className="bg-white py-24 px-6 sm:px-12 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Background Soft Subtle Ambient Aura Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-purple-100/40 via-pink-50/20 to-blue-100/30 blur-[130px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Header Heading */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-400">
            GMB Services
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em]"
          >
            Benefits of Google My Business SEO
          </motion.h2>
        </div>

        {/* 6-Card Layout Grid Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                backgroundColor: "#6400A1",
                scale: 1.02,
                y: -6,
                boxShadow: "0 20px 40px rgba(100, 0, 161, 0.22)"
              }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-md shadow-slate-100/80 border border-slate-100 flex flex-col justify-start relative group cursor-pointer overflow-hidden transition-all duration-300"
            >
              {/* Absolute Top-Right Counter Card Numbering */}
              <div className="absolute top-6 right-8 text-3xl font-bold tracking-[-0.02em]er text-slate-100 group-hover:text-purple-900/30 transition-colors duration-300 pointer-events-none select-none">
                {item.num}
              </div>

              {/* Icon Container Graphic Box */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-purple-50/60 border border-purple-100/30 flex items-center justify-center text-[#6400A1] group-hover:from-white/10 group-hover:to-white/5 group-hover:border-white/20 group-hover:text-amber-400 transition-all duration-300">
                {item.icon}
              </div>

              {/* Dynamic Title Headline Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-[-0.02em] leading-snug transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>

              {/* Dynamic Paragraph Description Content Copy */}
              <p className="text-sm md:text-base text-gray-600 font-medium leading-[1.7] transition-colors duration-300 group-hover:text-purple-100">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}