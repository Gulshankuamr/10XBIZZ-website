import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
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
          CRM & Lead Automation
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-10 text-gray-900"
        >
          CRM Setup & Lead Management Services For{' '}
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Business Growth
          </span>
        </motion.h1>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-[18px] leading-[1.7]"
          >
            <p className="mb-5">
              Manage, track, and convert your leads more efficiently with{' '}
              <span
                className="font-semibold"
                style={{
                  background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                customized CRM systems and automated follow-ups.
              </span>{' '}
              We streamline your entire process to ensure no prospect falls through the cracks.
            </p>
            <p className="mb-6">
              Our sales pipeline management and lead tracking solutions are meticulously designed for growing businesses looking to optimize conversion rates and maximize team productivity.
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
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80"
              alt="CRM Setup and Lead Management Dashboard"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain rounded-2xl shadow-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {/* {showModal && <DemoPopModal onClose={() => setShowModal(false)} />} */}
    </section>
  )
}