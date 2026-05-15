'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Settings, Rocket, TrendingUp, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    title: "Audit & Strategy",
    description: "We analyze your business, competitors, and audience to create a winning Google Ads strategy.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/data-analysis-5662510-4715904.png" // Placeholder for 3D icon
  },
  {
    title: "Campaign Setup",
    description: "High-converting campaigns built with precise targeting, compelling ad copy, and optimized landing pages.",
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/google-ads-9261021-7543594.png"
  },
  {
    title: "Launch & Monitor",
    description: "We launch your campaigns and monitor performance in real-time to ensure every rupee works harder.",
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/monitoring-dashboard-5353140-4468641.png"
  },
  {
    title: "Optimize & Scale",
    description: "Continuous optimization, A/B testing, and scaling strategies to maximize ROI and business growth.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/business-growth-4706311-3916421.png"
  }
]

export default function OurProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-widest uppercase"
          >
            Our Process
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mt-6 mb-4"
          >
            How We Run Your Google Ads <br /> Campaigns
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            A data-driven process designed to maximize your ad performance, 
            generate quality leads, and grow your business.
          </motion.p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-8 rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Arrow Connector (Hidden on Mobile/Last Item) */}
              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 z-10 translate-x-1/2">
                   <ArrowRight className="text-gray-300 w-6 h-6 dashed-arrow" />
                </div>
              )}

              {/* Card */}
              <div className="bg-white rounded-[2rem] p-8 h-full border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center">
                
                {/* 3D-style Image Placeholder */}
                <div className="mb-8 w-full aspect-square flex items-center justify-center bg-[#F1F5FF] rounded-2xl p-4">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-auto pt-6">
                   <div className="w-8 h-1 bg-blue-100 rounded-full group-hover:w-16 group-hover:bg-blue-600 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-50/50 to-transparent -z-10 pointer-events-none" />
    </section>
  )
}