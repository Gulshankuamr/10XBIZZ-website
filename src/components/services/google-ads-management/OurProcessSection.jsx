'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, Target, Rocket, BarChart3 } from 'lucide-react'

const processSteps = [
  {
    title: "Research & Strategy",
    description: "We analyze your business, competitors, customer journey, and keyword opportunities to identify the highest-value growth opportunities.",
    icon: <Search className="w-6 h-6 text-[#6400A1] group-hover:text-white transition-colors duration-300" />,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", // Premium Abstract 3D Analytics Asset
    insideStep: ["Competitor Analysis", "Keyword Research", "Audience Research", "Offer Positioning"]
  },
  {
    title: "Campaign & Funnel Setup",
    description: "We build high-converting campaigns, compelling ad creatives, conversion tracking, and optimized landing pages designed to generate quality leads.",
    icon: <Target className="w-6 h-6 text-[#6400A1] group-hover:text-white transition-colors duration-300" />,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80", // Premium Abstract 3D UI Mesh Shape
    insideStep: ["Campaign Structure", "Ad Copy Creation", "Landing Page Optimization", "Conversion Tracking Setup"]
  },
  {
    title: "Launch & Lead Tracking",
    description: "Once launched, every click, call, form submission, and WhatsApp enquiry is tracked to measure campaign performance accurately.",
    icon: <Rocket className="w-6 h-6 text-[#6400A1] group-hover:text-white transition-colors duration-300" />,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80", // Premium Tech Motion Network Fluid Asset
    insideStep: ["Campaign Launch", "Lead Tracking", "Call Tracking", "Real-Time Monitoring"]
  },
  {
    title: "Optimize & Scale",
    description: "We continuously test, optimize, and scale winning campaigns to reduce CPL, improve lead quality, and increase overall return on investment.",
    icon: <BarChart3 className="w-6 h-6 text-[#6400A1] group-hover:text-white transition-colors duration-300" />,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80", // Premium Abstract 3D Scale Growth Structure
    insideStep: ["A/B Testing", "Bid Optimization", "Audience Refinement", "Budget Scaling"]
  }
]

export default function OurProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#FDFEFE] overflow-hidden font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#6400A1] text-xs font-bold tracking-[0.05em] uppercase"
          >
            OUR GOOGLE ADS PROCESS
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-950 tracking-[-0.02em] max-w-4xl mx-auto leading-[1.15]"
          >
            The Proven Process We Use To <br />
            <span className="bg-gradient-to-r from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
              Generate Qualified Leads
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-medium text-base md:text-lg max-w-3xl mx-auto leading-[1.7]"
          >
            Every campaign follows a data-driven framework designed to attract high-intent customers, reduce wasted ad spend, and maximize ROI.
          </motion.p>
        </div>

        {/* Dynamic Process Steps Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Arrow Connector Layout (Visible on desktop screens) */}
              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[28%] -right-4 z-10 translate-x-1/2">
                  <ArrowRight className="text-purple-200 w-5 h-5 group-hover:text-[#6400A1] transition-colors duration-300" />
                </div>
              )}

              {/* Step Card Framework */}
              <div className="bg-white rounded-[2.5rem] border border-slate-100 p-6 shadow-[0_10px_40px_-15px_rgba(100,0,161,0.03)] hover:shadow-[0_24px_60px_-15px_rgba(100,0,161,0.09)] hover:border-purple-100 transition-all duration-300 flex flex-col h-full">
                
                {/* Image Dynamic System */}
                <div className="mb-6 w-full aspect-[4/3] flex items-center justify-center bg-purple-50/50 rounded-3xl overflow-hidden p-0 relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Absolute Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-3 bg-white rounded-2xl group-hover:bg-[#6400A1] shadow-md transition-colors duration-300 flex items-center justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Badge Counter */}
                  <span className="absolute top-4 right-5 text-sm font-black text-white/90 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Text Layout System */}
                <div className="px-1 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-[1.65] mb-6">
                    {step.description}
                  </p>
                  
                  {/* Inside This Step Render Module */}
                  <div className="mt-auto pt-5 border-t border-slate-50">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#6400A1] mb-3">
                      Inside This Step
                    </p>
                    <ul className="space-y-2">
                      {step.insideStep.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}