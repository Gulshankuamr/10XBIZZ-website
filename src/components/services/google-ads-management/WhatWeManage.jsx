'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, BarChart3, Target, ArrowRight } from 'lucide-react'

const managementData = [
  {
    title: "Better audiences",
    description: "We take the time to truly understand your brand and analyze the entire market, including your competition. Our expertise lies in identifying your actual audience: the customers who don't just browse, but engage and convert into sales.",
    icon: <Users className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-50"
  },
  {
    title: "Better analytics",
    description: "We go beyond surface-level metrics. Our expertise lies in interpreting complex market data to build custom predictive models that reveal hidden trends and audience behaviors, giving you a powerful competitive advantage.",
    icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-50"
  },
  {
    title: "Better outcomes",
    description: "Every strategy we build is focused on a single goal: your success. By combining a deep understanding of your market with precise execution, we deliver tangible, measurable results that drive sustainable business growth.",
    icon: <Target className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-50"
  }
]

export default function WhatWeManage() {
  return (
    <section className="py-20 px-6 bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[-0.02em]er mb-4 text-black">
              WHAT WE MANAGE
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-[-0.02em] text-gray-900">
              We sniff out digital challenges
            </h2>
          </div>
          
          <div className="max-w-md md:pt-10">
            <p className="text-gray-600 leading-[1.7] mb-6">
              Focused on business outcomes, we help our clients achieve tangible, 
              measurable results. We're a different breed of marketers, and we bring a 
              unique set of expertise to the table to help your business grow.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-sm font-bold uppercase tracking-[0.05em] border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors"
            >
              MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all bg-white flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight max-w-[150px]">
                  {item.title}
                </h3>
                <div className={`p-4 rounded-full ${item.bgColor}`}>
                  {item.icon}
                </div>
              </div>
              
              <p className="text-gray-600 leading-[1.7] text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}