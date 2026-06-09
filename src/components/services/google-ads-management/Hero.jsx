'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GoogleAdsHero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      className="relative overflow-hidden px-6 sm:px-10 pt-12 pb-0 my-24 min-h-screen font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
      style={{
        background: 'linear-gradient(to bottom, #F5F7FF, #fffbee, #E6EFFF)',
      }}
    >
      <div className="max-w-7xl mt-9 mx-auto">

        {/* Dynamic Typography Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-6 text-gray-900"
        >
          Get More Calls, Enquiries &amp; Customers With{' '}
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Google Ads
          </span>
        </motion.h1>

        {/* Subheadline Layer */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-2xl text-gray-700 font-semibold mb-12 max-w-4xl leading-snug"
        >
          Reach people who are already searching for your products or services and turn their intent into real business opportunities.
        </motion.p>

        {/* Content Row Grid Ecosystem */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT COLUMN: REWRITTEN CONTENT COPY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-[18px] leading-[1.75] font-medium"
          >
            <p className="mb-5">
              Whether you're a local business, service provider, clinic, educator, consultant, or agency, our Google Ads management service helps you attract{' '}
              <span
                className="font-bold"
                style={{
                  background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                high-quality leads
              </span>{' '}
              while reducing wasted ad spend.
            </p>
            <p className="mb-6">
              Through continuous optimization and performance tracking, we monitor your search behavior patterns to ensure your ad budget works efficiently to scale conversions.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: ADS GRAPHIC VECTOR */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/for section 3.png" 
              alt="Google Ads Leads and Enquiries Management"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}