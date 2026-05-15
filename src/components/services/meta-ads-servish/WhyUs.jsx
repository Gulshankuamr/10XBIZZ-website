'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const adsData = {
  strategy: {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=560&q=80",
    title: "Audience Strategy",
    subtitle: "Custom Meta audiences built for conversion-ready buyers.",
  },
  optimization: {
    image: "https://images.unsplash.com/photo-1551836022-4b9d20e0f11d?w=560&q=80",
    title: "Creative Optimization",
    subtitle: "Improve ad performance with dynamic creative testing and scaling.",
  },
  reporting: {
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=560&q=80",
    title: "Insightful Reporting",
    subtitle: "Clear Meta Ads dashboards showing what drives your ROI.",
  },
}

export default function MetaAdsWhyUs() {
  const [activeKey, setActiveKey] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 20, y: e.clientY - 120 })
  }

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
        >
          <img
            src="https://images.unsplash.com/photo-1522204523234-8724b8f2eeaa?w=1000&q=80"
            alt="Meta Ads Strategy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </motion.div>

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
            Scale your Meta ads with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
              performance-led campaigns
            </span>
          </motion.h3>

          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              We don't just launch ads — we engineer{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-purple-200 hover:border-purple-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('strategy')}
                onMouseLeave={() => setActiveKey(null)}
              >
                Meta audience strategies
              </span>{' '}
              that deliver more qualified traffic.
            </p>

            <p>
              Focus on your business while we run{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-red-200 hover:border-red-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('optimization')}
                onMouseLeave={() => setActiveKey(null)}
              >
                creative optimization
              </span>{' '}
              for conversion-ready Facebook and Instagram audiences.
            </p>

            <p>
              Our transparent{' '}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-blue-200 hover:border-blue-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey('reporting')}
                onMouseLeave={() => setActiveKey(null)}
              >
                reporting and retargeting
              </span>{' '}
              keeps every campaign cost effective.
            </p>
          </div>
        </div>
      </div>

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
              <p className="text-xs text-gray-500">{adsData[activeKey].subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
