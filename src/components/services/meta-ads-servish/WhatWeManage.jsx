'use client'

import React from 'react'
import { motion } from 'framer-motion'

const managementData = [
  {
    title: 'Creative Strategy & Ad Production',
    description: 'We design scroll-stopping ad creatives, videos, and messaging that capture attention and drive action across Facebook and Instagram.',
    iconSrc: '/public_svg_icone/icons8-clock-50.png', // Aapki requirement ke mutabik appropriate PNG path
  },
  {
    title: 'Audience Targeting & Retargeting',
    description: 'We identify high-intent audiences, build custom segments, and retarget visitors to maximize lead quality and conversion rates.',
    iconSrc: '/public_svg_icone/icons8-barchart-50.png',
  },
  {
    title: 'Conversion Tracking & Scaling',
    description: 'We monitor every click, lead, and conversion while continuously optimizing campaigns to increase ROI and scale profitable results.',
    iconSrc: '/public_svg_icone/icons8-target-50.png',
  },
]

export default function WhatWeManage() {
  return (
    <section className="py-20 px-6 bg-[#F7F5FB] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] relative overflow-hidden">
      {/* Background soft glow decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: '#6400A1', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.03]" style={{ background: '#BB000F', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] mb-4 text-[#6400A1] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6400A1]" />
              WHAT WE MANAGE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-[1.15] tracking-[-0.03em] text-gray-900">
              From Creative To Conversion, <br />
              We Handle Everything
            </h2>
          </div>

          <div className="max-w-md md:pt-6">
            <p className="text-slate-700 leading-[1.75] mb-6 font-semibold text-[15px]">
              We create, optimize, and scale Facebook & Instagram campaigns designed to generate qualified leads, lower acquisition costs, and increase revenue.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-xs font-black uppercase tracking-[0.1em] border-b-2 border-[#6400A1] pb-1 text-[#6400A1] hover:text-[#BB000F] hover:border-[#BB000F] transition-all duration-300"
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-8 md:p-10 rounded-[2.5rem] border-4 border-slate-950 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-8 gap-4">
          <h3 className="text-[22px] font-black text-gray-900 leading-[1.25] tracking-[-0.02em]">
            {item.title}
          </h3>
          
          {/* Modern Borderless Large PNG Icon Wrapper */}
          <div className="w-14 h-14 rounded-2xl bg-[#6400A1]/10 flex items-center justify-center p-3 shrink-0">
            <img 
              src={item.iconSrc} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>

      <p className="text-gray-950 font-bold leading-[1.7] text-[15px] mt-auto">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  )
}