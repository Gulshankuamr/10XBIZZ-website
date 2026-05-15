"use client"

import React, { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle2, Rocket, Layout, Code, ArrowRight, 
  Search, Monitor, ShoppingBag, Youtube, Zap, MapPin 
} from "lucide-react"

import HeroActionButton from "../../ui/HeroActionButton"

const cn = (...classes) => classes.filter(Boolean).join(" ")

// --- UI COMPONENTS ---
const ContainerScroll = forwardRef(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("relative w-full", className)} style={{ perspective: "1000px" }} {...props}>
    {children}
  </div>
))
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = forwardRef(({ index, incrementY = 40, children, className, ...props }, ref) => (
  <motion.div
    ref={ref}
    layout="position"
    style={{ top: `${index * incrementY}px`, zIndex: index }}
    className={cn("sticky transition-all duration-500", className)}
    {...props}
  >
    {children}
  </motion.div>
))
CardSticky.displayName = "CardSticky"

// --- DATA ---
const PROCESS_PHASES = [
  { id: "p1", title: "Audit & Strategy", icon: <Layout />, desc: "Analyzing competitors and keywords to build your growth roadmap." },
  { id: "p2", title: "Campaign Setup", icon: <Code />, desc: "Precision targeting with high-converting copy and landing pages." },
  { id: "p3", title: "Launch & Monitor", icon: <Rocket />, desc: "Real-time tracking with daily performance monitoring." },
  { id: "p4", title: "Optimise & Scale", icon: <CheckCircle2 />, desc: "Continuous A/B testing and scaling what actually works." },
]

const SERVICE_CARDS = [
  {
    id: "s1", number: "01", tag: "Search Ads", title: "Capture High Intent", icon: <Search />,
    desc: "Appear at the top when customers actively search for your services. We drive qualified leads through smart targeting.",
    includes: ["Keyword Targeting", "Competitor Analysis", "Bid Optimization"]
  },
  {
    id: "s2", number: "02", tag: "Remarketing", title: "Re-Engage Visitors", icon: <Monitor />,
    desc: "Stay visible to users who visited but didn't convert. We keep your brand front-and-center across the web.",
    includes: ["Audience Segments", "Dynamic Ads", "Brand Awareness"]
  },
  {
    id: "s3", number: "03", tag: "Shopping", title: "Visual Product Ads", icon: <ShoppingBag />,
    desc: "Boost eCommerce sales with optimized product listings, pricing, and images directly in search results.",
    includes: ["Merchant Center", "Feed Optimization", "ROAS Focus"]
  },
  {
    id: "s4", number: "04", tag: "YouTube", title: "Video Advertising", icon: <Youtube />,
    desc: "Turn views into customers. Strategic targeting designed to increase brand authority and generate leads.",
    includes: ["In-stream Ads", "Video Strategy", "Performance Optimization"]
  },
  {
    id: "s5", number: "05", tag: "P-Max", title: "AI-Powered Reach", icon: <Zap />,
    desc: "Leverage machine learning to run ads across Search, Gmail, Maps, and Discover from one optimized campaign.",
    includes: ["Multi-channel Setup", "AI Optimization", "Advanced Scaling"]
  },
  {
    id: "s6", number: "06", tag: "Local Ads", title: "Drive Store Visits", icon: <MapPin />,
    desc: "Attract nearby customers ready to visit. Perfect for increasing calls, appointments, and walk-in traffic.",
    includes: ["Google Maps Visibility", "Call Campaigns", "Local Targeting"]
  }
]

export default function IntegratedStackPage() {
  return (
    <main className="bg-white font-sans text-slate-900 selection:bg-purple-200">
      
      {/* 1. PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 border-b border-slate-100">
        {/* Added pt-28 so text doesn't stick to the very top edge */}
        <div className="sticky top-0 pt-28 h-fit self-start">
          <span className="bg-purple-100 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Workflow
          </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mt-6 mb-6 leading-[1.05] tracking-tight font-serif max-w-md md:max-w-lg">
  How we scale <span className="bg-gradient-to-br from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
  your business
</span>
</h2>
          <p className="text-slate-500 text-lg max-w-sm mb-8 leading-relaxed">
            A systematic approach to Google Ads ensuring every rupee spent is a calculated investment.
          </p>
          <HeroActionButton className="flex items-center gap-2 bg-[#6400A1] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-purple-200">
            Get Started <ArrowRight className="w-5 h-5" />
          </HeroActionButton>
        </div>

        <ContainerScroll className="min-h-[300vh] space-y-10">
          {PROCESS_PHASES.map((phase, i) => (
            <CardSticky 
              key={phase.id} 
              index={i + 1} 
              incrementY={110} // Increased so cards "stack" with more visibility
              className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-100"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 bg-purple-50 flex items-center justify-center rounded-2xl text-[#6400A1]">
                  {React.cloneElement(phase.icon, { className: "w-7 h-7" })}
                </div>
                {/* <span className="text-6xl font-black text-slate-100 font-serif">0{i+1}</span> */}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{phase.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{phase.desc}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Expert Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6 font-serif">
            High-Performance <span className="text-[#6400A1]">Campaigns</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Designed to attract the right audience and maximize ROI across every Google channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card) => (
            <div 
              key={card.id}
              className="group relative p-8 rounded-[2rem] border border-slate-200 bg-white hover:bg-[#6400A1] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-400 hover:-translate-y-2"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-50 group-hover:bg-white/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 text-[#6400A1] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center rounded-xl transition-colors">
                  {React.cloneElement(card.icon, { className: "w-6 h-6" })}
                </div>
                {/* <span className="text-5xl font-black text-slate-50 group-hover:text-white/10 font-serif transition-colors">
                  {card.number}
                </span> */}
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-purple-50 text-[#6400A1] group-hover:bg-white/20 group-hover:text-white mb-4 transition-colors">
                {card.tag}
              </span>

              <h3 className="text-xl font-bold mb-3 group-hover:text-white font-serif transition-colors">
                {card.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-purple-100 mb-6 transition-colors">
                {card.desc}
              </p>

              <div className="pt-6 border-t border-slate-100 group-hover:border-white/20">
                <ul className="space-y-2">
                  {card.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600 group-hover:text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6400A1] group-hover:bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}