'use client'

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const adsData = {
  strategy: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&h=320&fit=crop",
    title: "Data-Driven Strategy",
    subtitle: "Precise keyword targeting for high-intent leads.",
  },
  optimization: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=320&fit=crop",
    title: "ROI Optimization",
    subtitle: "Reducing wasted ad spend by up to 40%.",
  },
  reporting: {
    image: "https://images.unsplash.com/photo-1543286386-713bcd534007?w=560&h=320&fit=crop",
    title: "Transparent Reporting",
    subtitle: "Real-time dashboards showing your actual growth.",
  },
}

export default function GoogleAdsWhyChooseUs() {
  const [activeKey, setActiveKey] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    // Card ko cursor ke thoda side mein dikhane ke liye offset
    setPosition({ x: e.clientX + 20, y: e.clientY - 120 })
  }

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000" 
            alt="Google Ads Management" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </motion.div>

        {/* RIGHT: CONTENT SECTION */}
        <div onMouseMove={handleMouseMove} className="relative z-10 order-1 md:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase mb-4"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Elevate your ROI with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
              Expert Ad Management
            </span>
          </motion.h3>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              Hum sirf ads nahi chalate; hum engineer karte hain 
              <span 
                className="font-bold text-gray-900 cursor-help border-b-2 border-purple-200 hover:border-purple-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('strategy')}
                onMouseLeave={() => setActiveKey(null)}
              >
                Data-Driven Strategies
              </span> 
              jo high-intent leads generate karti hain.
            </p>

            <p>
              Aap apne business par focus karein, jabki hum aapki 
              <span 
                className="font-bold text-gray-900 cursor-help border-b-2 border-red-200 hover:border-red-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('optimization')}
                onMouseLeave={() => setActiveKey(null)}
              >
                Continuous Optimization
              </span> 
              handle karte hain taaki ad spend kam ho sake.
            </p>

            <p>
              Hamari 
              <span 
                className="font-bold text-gray-900 cursor-help border-b-2 border-blue-200 hover:border-blue-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('reporting')}
                onMouseLeave={() => setActiveKey(null)}
              >
                Transparent Reporting
              </span> 
              ke saath har kharch ka hisaab aapke saamne hota hai.
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING PREVIEW CARD (Hover karne par dikhega) */}
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
              alt="preview" 
            />
            <div className="px-2 pb-2">
              <h4 className="font-bold text-gray-900">{adsData[activeKey].title}</h4>
              <p className="text-xs text-gray-500">{adsData[activeKey].subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}