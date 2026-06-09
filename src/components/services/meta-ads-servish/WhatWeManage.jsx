'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Palette, UserCheck, Rocket } from 'lucide-react'

const managementData = [
  {
    title: 'Creative Strategy & Ad Production',
    description: 'We design scroll-stopping ad creatives, videos, and messaging that capture attention and drive action across Facebook and Instagram.',
    icon: <Palette className="w-6 h-6 text-[#6400A1]" />,
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Audience Targeting & Retargeting',
    description: 'We identify high-intent audiences, build custom segments, and retarget visitors to maximize lead quality and conversion rates.',
    icon: <UserCheck className="w-6 h-6 text-[#6400A1]" />,
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Conversion Tracking & Scaling',
    description: 'We monitor every click, lead, and conversion while continuously optimizing campaigns to increase ROI and scale profitable results.',
    icon: <Rocket className="w-6 h-6 text-[#6400A1]" />,
    bgColor: 'bg-purple-50',
  },
]

export default function WhatWeManage() {
  return (
    <section className="py-20 px-6 bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.05em] mb-4 text-[#6400A1]">
              WHAT WE MANAGE
            </p>
            {/* Font size reduced and forced into 2 lines */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.02em] text-gray-900">
              From Creative To Conversion, <br />
              We Handle Everything
            </h2>
          </div>

          <div className="max-w-md md:pt-6">
            <p className="text-slate-600 leading-[1.7] mb-6 font-medium">
              We create, optimize, and scale Facebook & Instagram campaigns designed to generate qualified leads, lower acquisition costs, and increase revenue.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-bold uppercase tracking-[0.05em] border-b-2 border-[#6400A1] pb-1 text-[#6400A1] hover:text-[#BB000F] hover:border-[#BB000F] transition-colors"
            >
              MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Features Management Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managementData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(100,0,161,0.02)] hover:shadow-[0_20px_50px_-15px_rgba(100,0,161,0.08)] hover:border-purple-100 transition-all bg-white flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8 gap-4">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <div className={`p-4 rounded-full shrink-0 ${item.bgColor}`}>
                  {item.icon}
                </div>
              </div>

              <p className="text-slate-500 font-medium leading-[1.65] text-base md:text-[17px] mt-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}