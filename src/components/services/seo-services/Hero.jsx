import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SEOHero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section
      className="relative overflow-hidden px-6 sm:px-10 pt-12 pb-0 my-24 min-h-screen font-['Montserrat',ui-sans-serif,system-ui,sans-serif]"
      style={{
        background: 'linear-gradient(to bottom, #F5F7FF, #fffbee, #E6EFFF)',
      }}
    >
      <div className="max-w-7xl mt-9 mx-auto">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.05em] uppercase mb-4"
          style={{
            background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Organic Search Growth & Visibility
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-10 text-gray-900"
        >
          SEO Services That Increase Visibility &{' '}
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Organic Leads For 10x Business Growth
          </span>
        </motion.h1>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-900 text-base md:text-[18px] leading-[1.7]"
          >
            <p className="mb-5 text-gray-800">
              Improve your Google rankings, attract targeted traffic, and generate long-term business growth through data-driven SEO strategy. We help brands{' '}
              <span
                className="font-semibold"
                style={{
                  background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                dominate search results, outrank competitors,
              </span>{' '}
              and turn high-intent search queries into recurring revenue.
            </p>
            <p className="mb-6 text-gray-800">
              From advanced keyword intelligence and on-page optimization to authoritative link building and local SEO, our technical expertise focuses on delivering sustainable 10x business scaling and measurable ROI.
            </p>

            {/* Optional CTA Button (Uncomment if needed) */}
            {/* <button 
              onClick={() => setShowModal(true)}
              className="mt-2 px-8 py-3 bg-gradient-to-r from-[#6400A1] to-[#BB000F] text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Get Free SEO Audit
            </button> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="SEO Dashboard and Business Growth Analytics"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {/* {showModal && <DemoPopModal onClose={() => setShowModal(false)} />} */}
    </section>
  )
}