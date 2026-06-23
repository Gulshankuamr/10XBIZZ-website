'use client'

import React from 'react'
import { motion } from 'framer-motion'

const managementData = [
  {
    title: "Generate Qualified Leads",
    description: "Reach the right audience with targeted campaigns designed to attract customers actively searching for your products or services.",
    iconSrc: "/public_svg_icone/icons8-lead-50.png"
  },
  {
    title: "Automate Customer Follow-Ups",
    description: "Convert more leads with CRM automation, WhatsApp workflows, email sequences, and intelligent nurturing systems.",
    iconSrc: "/public_svg_icone/icons8-settings-50.png"
  },
  {
    title: "Scale With Confidence",
    description: "Track every lead, measure every campaign, and make data-backed decisions that help your business grow sustainably.",
    iconSrc: "/public_svg_icone/icons8-barchart-50.png"
  }
]

export default function WhatWeManage() {
  return (
    <section className="py-24 px-6 bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section Component Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#6400A1]">
              WHY BUSINESSES CHOOSE 10XBIZZ
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em] text-gray-900">
              We Build Marketing Systems That Drive Revenue
            </h2>
          </div>
          
          <div className="max-w-md lg:pt-12">
            <p className="text-gray-600 font-medium leading-[1.75] text-base md:text-[17px]">
              Most agencies focus on clicks and impressions. We focus on generating qualified leads, automating follow-ups, and helping businesses turn marketing into measurable growth.
            </p>
          </div>
        </div>

        {/* Dynamic 3-Cards Grid System with Instant Pure CSS Brutalist Hover Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="p-8 md:p-10 rounded-[2.5rem] border-4 border-slate-950 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-[#6400A1] flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Clean, Borderless & Center-Aligned Large PNG Icon Container */}
                  <div className="w-16 h-16 flex items-center justify-center p-1 shrink-0 mb-6">
                    <img 
                      src={item.iconSrc} 
                      alt={item.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                
                {/* Text description updated to highly legible slate-800 */}
                <p className="text-slate-800 leading-[1.7] text-base font-medium text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}