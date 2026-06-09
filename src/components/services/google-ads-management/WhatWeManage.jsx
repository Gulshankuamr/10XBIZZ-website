'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Bot, BarChart3 } from 'lucide-react'

const managementData = [
  {
    title: "Generate Qualified Leads",
    description: "Reach the right audience with targeted campaigns designed to attract customers actively searching for your products or services.",
    icon: <Users className="w-6 h-6 text-[#6400A1]" />,
    bgColor: "bg-purple-50"
  },
  {
    title: "Automate Customer Follow-Ups",
    description: "Convert more leads with CRM automation, WhatsApp workflows, email sequences, and intelligent nurturing systems.",
    icon: <Bot className="w-6 h-6 text-[#6400A1]" />,
    bgColor: "bg-purple-50"
  },
  {
    title: "Scale With Confidence",
    description: "Track every lead, measure every campaign, and make data-backed decisions that help your business grow sustainably.",
    icon: <BarChart3 className="w-6 h-6 text-[#6400A1]" />,
    bgColor: "bg-purple-50"
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

        {/* Dynamic 3-Cards Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(100, 0, 161, 0.08)",
                borderColor: "rgba(100, 0, 161, 0.15)"
              }}
              className="p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all bg-white flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex justify-between items-start mb-8 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <div className={`p-4 rounded-2xl ${item.bgColor} flex-shrink-0 transition-colors duration-300 group-hover:bg-purple-100`}>
                    {item.icon}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-[1.7] text-base font-medium">
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