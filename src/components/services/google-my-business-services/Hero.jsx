'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SEOHero() {
  const [showModal, setShowModal] = useState(false)

  // Infinite ticker marquee text content items
  const highlights = [
    "Rank Higher On Google Maps",
    "Increase Calls & Enquiries",
    "Build Local Trust",
    "Drive More Walk-In Customers"
  ]

  return (
    <section
      className="relative overflow-hidden px-6 sm:px-10 pt-20 pb-0 mb-12 min-h-screen flex flex-col justify-between font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
      style={{
        background: 'linear-gradient(to bottom, #F5F7FF, #fffbee, #E6EFFF)',
      }}
    >
      {/* Structural layout content wrapping row */}
      <div className="max-w-7xl mt-6 mx-auto w-full flex-grow flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center py-6">

          {/* LEFT SIDE CONTENT PANEL */}
          <div className="relative z-10">
            {/* Minimalist Top Segment Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-5"
              style={{
                background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dominate Local Search
            </motion.p>

            {/* Clean Anti-aliased Action Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.15] text-gray-900 mb-8"
            >
              Turn Nearby Google <br />Searches Into <br />
              <span
                style={{
                  background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Customers & Local Leads
              </span>
            </motion.h1>

            {/* Structured Explanatory Prose Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base md:text-[18px] space-y-6 leading-[1.7] max-w-xl"
            >
              <p>
                At <span className="font-bold text-gray-900">10xBizz</span>, we optimize your Google My Business profile to help your business appear where customers are already searching. From Google Maps rankings and local SEO optimization to reviews, profile engagement, and lead-focused visibility — we help you attract more calls, enquiries, walk-ins, and high-intent local customers.
              </p>
              <p>
                Build stronger trust, increase local reach, and grow your business with a Google presence designed to convert nearby searches into real revenue.
              </p>

              {/* Conversion Optimized Call-to-Action Component Link */}
            
            </motion.div>
          </div>

          {/* RIGHT SIDE GRAPHIC BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=80"
              alt="Google Maps Local Business Dashboard Data Visualization"
              className="w-full max-w-lg md:max-w-xl object-contain mix-blend-multiply"
            />
          </motion.div>

        </div>
      </div>

      {/* CONTINUOUS LOOPING BOTTOM BANNER COMPONENT */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-gray-900 py-6 overflow-hidden mt-12 border-t border-gray-800 z-20">
        <div className="flex whitespace-nowrap min-w-full">
          <motion.div 
            className="flex space-x-16 px-8 text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
            animate={{ x: [0, -1200] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity
            }}
          >
            {/* Primary array block mapping output iteration */}
            {highlights.map((text, i) => (
              <div key={i} className="flex items-center space-x-4 shrink-0">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6400A1] to-[#BB000F]" />
                <span>{text}</span>
              </div>
            ))}
            {/* Cloned safety redundancy stream sequence alpha */}
            {highlights.map((text, i) => (
              <div key={`clone-a-${i}`} className="flex items-center space-x-4 shrink-0">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6400A1] to-[#BB000F]" />
                <span>{text}</span>
              </div>
            ))}
            {/* Cloned safety redundancy stream sequence beta */}
            {highlights.map((text, i) => (
              <div key={`clone-b-${i}`} className="flex items-center space-x-4 shrink-0">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6400A1] to-[#BB000F]" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal execution space placeholder */}
      {/* {showModal && <DemoPopModal onClose={() => setShowModal(false)} />} */}
    </section>
  )
}