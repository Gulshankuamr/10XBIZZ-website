'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const adsData = {
  strategy: {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=560&q=80",
    title: "Qualified Lead Generation",
    subtitle: "Stop burning budget on fake clicks. Get filtered, high-intent enquiries ready to convert.",
  },
  optimization: {
    image: "https://images.unsplash.com/photo-1551836022-4b9d20e0f11d?w=560&q=80",
    title: "Precision Conversion Tracking",
    subtitle: "Track every single event precisely across Facebook Pixel and Meta Conversions API.",
  },
  reporting: {
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=560&q=80",
    title: "CRM & WhatsApp Integration",
    subtitle: "Route leads instantly into your sales pipeline and automate instant WhatsApp responses.",
  },
}

export default function MetaAdsWhyUs() {
  const [activeKey, setActiveKey] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 20, y: e.clientY - 120 })
  }

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden min-h-[600px] flex items-center font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Visual Media Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
        >
          <img
            src="/for section2.webp"
            alt="Meta Ads Strategy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </motion.div>

        {/* Text and Interactive Content Module */}
        <div onMouseMove={handleMouseMove} className="relative z-10 order-1 md:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-[#6400A1] uppercase mb-4"
          >
            WHY CHOOSE 10XBIZZ
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight"
          >
            More Leads. Better Conversions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6400A1] to-[#BB000F]">
              Higher ROI.
            </span>
          </motion.h3>

          <div className="space-y-6 text-xl text-gray-600 leading-[1.7]">
            <p>
              We design specialized workflows focused on{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-purple-200 hover:border-[#6400A1] transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('strategy')}
                onMouseLeave={() => setActiveKey(null)}
              >
                ✅ Qualified Lead Generation
              </span>{' '}
              to filter out casual clickers and attract actual buyers.
            </p>

            <p>
              Eliminate tracking blind spots with bulletproof{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-red-200 hover:border-[#BB000F] transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('optimization')}
                onMouseLeave={() => setActiveKey(null)}
              >
                ✅ Conversion Tracking
              </span>{' '}
              systems that measure your absolute data correctly.
            </p>

            <p>
              Close deals faster through real-time{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-blue-200 hover:border-blue-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('reporting')}
                onMouseLeave={() => setActiveKey(null)}
              >
                ✅ CRM & WhatsApp Integration
              </span>{' '}
              that connects campaigns directly to your sales team instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Dynamic Tooltip System */}
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
              zIndex: 100,
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
              <p className="text-xs text-gray-500 mt-1 leading-normal">{adsData[activeKey].subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}