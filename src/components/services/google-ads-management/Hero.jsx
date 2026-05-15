
import { motion } from 'framer-motion'
// import DemoPopModal from '../../views/demo/DemoPopModal'
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
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{
            background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Expert Management
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-10 text-gray-900"
        >
          Google Ads Management Services For{' '}
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            High-Intent Lead Generation
          </span>
        </motion.h1>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            <p className="mb-5">
              We create and manage Google Ads campaigns that help businesses{' '}
              <span
                className="font-semibold"
                style={{
                  background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                attract qualified leads &amp; improve conversions
              </span>{' '}
              to maximize your return on investment.
            </p>
            <p className="mb-6">
              Our data-driven approach focuses on targeting the right audience, 
              optimizing your bidding strategy, and significantly reducing wasted ad spend.
            </p>

            {/* Optional CTA Button */}
       
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            {/* Update this src to your Ads-related illustration */}
            <img
              src="/AA.webp" 
              alt="Google Ads Lead Generation"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {/* {showModal && <DemoPopModal onClose={() => setShowModal(false)} />} */}
    </section>
  )
}