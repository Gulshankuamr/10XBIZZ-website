'use client'

import React, { forwardRef } from "react"
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

// --- PROCESS DATA ---
const PROCESS_PHASES = [
  { 
    id: "p1", 
    title: "Research What Customers Are Searching For", 
    icon: <Layout />, 
    desc: "Find the exact keywords and opportunities driving high-intent enquiries." 
  },
  { 
    id: "p2", 
    title: "Build Campaigns That Convert", 
    icon: <Code />, 
    desc: "Create ads, landing pages, and tracking systems designed for lead generation." 
  },
  { 
    id: "p3", 
    title: "Capture Every Lead", 
    icon: <Rocket />, 
    desc: "Track calls, forms, WhatsApp enquiries, and customer actions in one place." 
  },
  { 
    id: "p4", 
    title: "Scale What Works", 
    icon: <CheckCircle2 />, 
    desc: "Increase budget on profitable campaigns while reducing wasted ad spend." 
  },
]

// --- SERVICES DATA WITH BRUTALIST RESTRUCTURING ---
const SERVICE_CARDS = [
  {
    id: "s1",
    tag: "Search Ads",
    title: "Capture Customers Ready To Buy",
    icon: <Search />,
    desc: "Appear at the top of Google when potential customers actively search for your products or services.",
    includes: ["High-Intent Keywords", "Competitor Targeting", "Conversion Optimization"]
  },
  {
    id: "s2",
    tag: "Remarketing",
    title: "Bring Lost Visitors Back",
    icon: <Monitor />,
    desc: "Reconnect with website visitors who didn't convert and turn missed opportunities into paying customers.",
    includes: ["Audience Segmentation", "Dynamic Remarketing", "Higher Conversion Rates"]
  },
  {
    id: "s3",
    tag: "Shopping Ads",
    title: "Show Products Before Competitors",
    icon: <ShoppingBag />,
    desc: "Display product images, prices, and reviews directly in Google search results to drive more ecommerce sales.",
    includes: ["Merchant Center Setup", "Product Feed Optimization", "ROAS-Focused Campaigns"]
  },
  {
    id: "s4",
    tag: "YouTube Ads",
    title: "Build Trust Through Video",
    icon: <Youtube />,
    desc: "Reach potential customers with engaging video campaigns that increase awareness, leads, and brand authority.",
    includes: ["In-Stream Ads", "Video Strategy", "Audience Targeting"]
  },
  {
    id: "s5",
    tag: "Performance Max",
    title: "Reach Customers Across Google",
    icon: <Zap />,
    desc: "Leverage Google's AI to show your ads across Search, YouTube, Gmail, Maps, and Display from a single campaign.",
    includes: ["Multi-Channel Reach", "AI Optimization", "Advanced Scaling"]
  },
  {
    id: "s6",
    tag: "Local Ads",
    title: "Drive Calls, Appointments & Store Visits",
    icon: <MapPin />,
    desc: "Connect with nearby customers searching for local businesses and increase foot traffic, enquiries, and bookings.",
    includes: ["Google Maps Visibility", "Call Campaigns", "Location Targeting"]
  }
]

export default function IntegratedStackPage() {
  return (
    <main className="bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-slate-900 selection:bg-purple-200">
      
      {/* 1. PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 border-b-4 border-slate-950">
        <div className="sticky top-0 pt-28 h-fit self-start">
          <span className="bg-purple-100 border-2 border-slate-950 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.05em] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
            OUR GROWTH PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-[1.1] tracking-[-0.02em] text-gray-900 max-w-md md:max-w-lg">
            The 4-Step System We Use To{' '}
            <span className="bg-gradient-to-br from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
              Generate Qualified Leads
            </span>
          </h2>
          <p className="text-slate-700 font-semibold text-base md:text-lg max-w-md mb-8 leading-[1.7]">
            We don't launch ads blindly. Every campaign follows a proven framework designed to attract high-intent customers, improve conversion rates, and maximize return on ad spend.
          </p>
          <HeroActionButton className="flex items-center gap-2 bg-[#6400A1] border-4 border-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-fit">
            Get Started <ArrowRight className="w-5 h-5" />
          </HeroActionButton>
        </div>

        <ContainerScroll className="min-h-[300vh] space-y-10">
          {PROCESS_PHASES.map((phase, i) => (
            <CardSticky 
              key={phase.id} 
              index={i + 1} 
              incrementY={110} 
              className="bg-white border-4 border-slate-950 rounded-[2.5rem] p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 bg-purple-50 border-2 border-slate-950 flex items-center justify-center rounded-2xl text-[#6400A1] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {React.cloneElement(phase.icon, { className: "w-7 h-7" })}
                </div>
                <span className="text-5xl font-bold text-slate-300/80 tracking-tight">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-gray-900">
                {phase.title}
              </h3>
              <p className="text-slate-700 font-semibold leading-[1.7] text-base">
                {phase.desc}
              </p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <span className="bg-purple-100 border-2 border-slate-950 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.05em] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
            EXPERT GOOGLE ADS SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] max-w-4xl mx-auto leading-tight">
            Google Ads Strategies Designed To{' '}
            <span className="bg-gradient-to-br from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
              Generate More Leads &amp; Sales
            </span>
          </h2>
          <p className="text-slate-600 font-semibold text-base md:text-lg max-w-3xl mx-auto leading-[1.7]">
            From Search Ads to Performance Max campaigns, we use the right Google advertising strategy to attract qualified customers, reduce wasted spend, and maximize your return on investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((card) => (
            <div 
              key={card.id}
              className="group relative p-8 rounded-[2rem] border-4 border-slate-950 bg-white hover:bg-[#6400A1] transition-colors duration-200 cursor-pointer overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-[#6400A1] flex flex-col justify-between"
            >
              <div>
                {/* Decorative Ambient Circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-50 group-hover:bg-white/10 transition-colors duration-200 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 border-2 border-slate-950 text-[#6400A1] group-hover:bg-white/20 group-hover:text-amber-400 group-hover:border-white/20 flex items-center justify-center rounded-xl transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {React.cloneElement(card.icon, { className: "w-6 h-6" })}
                  </div>
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.05em] uppercase bg-purple-50 border border-slate-950 text-[#6400A1] group-hover:bg-white/20 group-hover:border-white group-hover:text-white mb-4 transition-colors duration-200">
                  {card.tag}
                </span>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white tracking-tight transition-colors duration-200">
                  {card.title}
                </h3>
                
                <p className="text-slate-800 font-medium text-sm leading-[1.7] group-hover:text-purple-100 mb-6 transition-colors duration-200">
                  {card.desc}
                </p>
              </div>

              {/* Dynamic Features List Area */}
              <div className="pt-6 border-t-2 border-slate-950 group-hover:border-white/20 transition-colors duration-200">
                <ul className="space-y-2.5">
                  {card.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-white/90 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6400A1] border border-slate-950 group-hover:bg-amber-400 group-hover:border-white transition-colors duration-200 flex-shrink-0" />
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