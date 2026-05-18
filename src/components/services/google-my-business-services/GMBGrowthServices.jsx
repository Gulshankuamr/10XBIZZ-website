'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GMBGrowthServices() {
  const [showModal, setShowModal] = useState(false)

  // 6 Premium structured cards from your provided content mapping
  const services = [
    {
      num: "01",
      title: "Google Business Profile Optimization",
      desc: "We fully optimize your Google Business Profile with accurate business information, targeted keywords, categories, images, and conversion-focused updates to improve local search visibility and customer trust.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21v-2.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 18.75V21M9 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 01-2.25-2.25V4.5A2.25 2.25 0 015.25 2.25h9a2.25 2.25 0 012.25 2.25v1.5z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Local Keyword Research & Ranking Strategy",
      desc: "Our team researches high-intent local keywords your customers are actively searching for and strategically optimizes your profile to improve rankings in Google Maps and nearby search results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Reviews & Reputation Management",
      desc: "Build stronger credibility with professional review management strategies that help increase positive customer feedback, improve trust, and enhance your local business reputation online.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a15.943 15.943 0 003.37-9M12 21a15.947 15.947 0 01-3.37-9M12 3a15.943 15.943 0 003.37 9M12 3a15.947 15.947 0 01-3.37 9m0 0a19.53 19.53 0 01h6.741M12 12h6.742m-13.484 0H12m-3.37 9a19.53 19.53 0 01-6.742-9M12 3a19.53 19.53 0 00-6.742 9M12 12a19.53 19.53 0 006.742 9" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Google Posts & Customer Engagement",
      desc: "We create engaging Google posts, offers, updates, and business activities that keep your profile active, improve engagement, and encourage more customers to interact with your business.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "NAP & Local Citation Optimization",
      desc: "Maintain consistent business information across directories, maps, and platforms with accurate Name, Address, and Phone Number optimization for stronger local SEO performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Local Authority & Link Building",
      desc: "Increase your local search authority with powerful local SEO strategies, business citations, and trusted backlinks that help your business rank higher and attract more nearby customers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      )
    }
  ]

  return (
    <section 
      className="bg-slate-50 py-24 px-6 sm:px-12 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Background Soft Colorful Ambient Aura Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-purple-200/30 via-pink-100/10 to-blue-200/20 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Header Heading */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em]"
          >
            Our Comprehensive Google My Business Growth Services
          </motion.h2>
        </div>

        {/* 6-Card Layout Grid Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((item, index) => (
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
                boxShadow: "0 20px 40px rgba(100, 0, 161, 0.25)"
              }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg shadow-slate-200/60 border border-slate-100 flex flex-col justify-start relative group cursor-pointer overflow-hidden transition-all duration-300"
            >
              {/* Absolute Top-Right Counter Card Numbering for premium minimalism */}
              <div className="absolute top-6 right-8 text-3xl font-bold tracking-[-0.02em]er text-slate-100 group-hover:text-purple-800/40 transition-colors duration-300 pointer-events-none select-none">
                {item.num}
              </div>

              {/* Icon Container Graphic Box with Dynamic Brand Accent Line */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-50 to-pink-50 border border-purple-100/40 flex items-center justify-center text-[#6400A1] group-hover:from-white/10 group-hover:to-white/5 group-hover:border-white/20 group-hover:text-amber-400 transition-all duration-300">
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