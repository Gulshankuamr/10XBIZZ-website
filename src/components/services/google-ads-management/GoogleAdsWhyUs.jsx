'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const adsData = {
  leads: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&h=320&fit=crop",
    title: "Qualified Leads",
    subtitle: "Targeting high-intent buyers ready to purchase.",
  },
  cost: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=320&fit=crop",
    title: "Lower Cost Per Lead",
    subtitle: "Eliminating wasted ad spend to cut acquisition costs.",
  },
  conversions: {
    image: "https://images.unsplash.com/photo-1543286386-713bcd534007?w=560&h=320&fit=crop",
    title: "Conversion Optimization",
    subtitle: "Landing page setup built to drive actual responses.",
  },
  roas: {
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=560&h=320&fit=crop",
    title: "Higher Return On ROAS",
    subtitle: "Scalable tracking systems tied directly to business growth.",
  },
}

export default function GoogleAdsWhyChooseUs() {
  const [activeKey, setActiveKey] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
  
    setPosition({ x: e.clientX + 20, y: e.clientY - 120 })
  }

  return (
    <section className="relative bg-white py-12 px-6 overflow-hidden min-h-[600px] flex items-center font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: PREMIUM ILLUSTRATION / IMAGE LAYER */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
        >
          <img 
            src="/for 2nd section left hand image.png" 
            alt="Google Ads Lead Generation Systems" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </motion.div>

        {/* RIGHT: UPDATED CONTENT COPY LAYER */}
        <div onMouseMove={handleMouseMove} className="relative z-10 order-1 md:order-2">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-[-0.02em]"
          >
            More Than Google Ads<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
              We Build Systems That Generate Leads
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base md:text-[18px] leading-[1.75] font-medium mb-8"
          >
            We help businesses attract high-intent customers through strategic Google Ads campaigns backed by landing page optimization, conversion tracking, and CRM integration.
          </motion.div>

          {/* Subheadline & Interactive Bullet Points */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block mb-2">
              Our focus is simple:
            </span>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span 
                  className="font-bold text-gray-800 text-base md:text-lg cursor-help border-b border-dashed border-gray-300 hover:border-purple-600 transition-colors py-0.5"
                  onMouseEnter={() => setActiveKey('leads')}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  More Qualified Leads
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span 
                  className="font-bold text-gray-800 text-base md:text-lg cursor-help border-b border-dashed border-gray-300 hover:border-red-600 transition-colors py-0.5"
                  onMouseEnter={() => setActiveKey('cost')}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  Lower Cost Per Lead
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span 
                  className="font-bold text-gray-800 text-base md:text-lg cursor-help border-b border-dashed border-gray-300 hover:border-purple-600 transition-colors py-0.5"
                  onMouseEnter={() => setActiveKey('conversions')}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  Better Conversion Rates
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span 
                  className="font-bold text-gray-800 text-base md:text-lg cursor-help border-b border-dashed border-gray-300 hover:border-blue-600 transition-colors py-0.5"
                  onMouseEnter={() => setActiveKey('roas')}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  Higher Return On Ad Spend
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* FLOATING PREVIEW CARD TOOLTIP LAYER */}
      <AnimatePresence>
        {activeKey && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            style={{ 
                position: 'fixed', 
                left: position.x, 
                top: position.y,
                pointerEvents: 'none',
                zIndex: 100 
            }}
            className="w-72 bg-white rounded-xl shadow-2xl p-2 border border-gray-100"
          >
            <img 
              src={adsData[activeKey].image} 
              className="w-full h-40 object-cover rounded-lg mb-3" 
              alt="system performance summary preview" 
            />
            <div className="px-2 pb-2">
              <h4 className="font-bold text-gray-900 text-sm">{adsData[activeKey].title}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{adsData[activeKey].subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}