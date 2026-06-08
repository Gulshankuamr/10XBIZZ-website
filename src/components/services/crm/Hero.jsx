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
          CRM & AUTOMATION SYSTEMS
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-10 text-gray-900"
        >
          Never Lose A Lead Again.
          <br />
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Turn More Enquiries Into Customers
          </span>
          <br />
          With CRM & Automation Systems
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
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-6">
              Capture every lead, automate follow-ups, and manage your sales
              pipeline from one centralized system designed to improve conversions
              and business growth.
            </p>

            <p className="mb-5">
              Your marketing generates leads—but growth happens when those leads
              are managed properly. We help businesses streamline their sales
              process with CRM systems, automated follow-ups, lead tracking,
              and customer journey automation.
            </p>

            <p className="mb-6">
              With everything organized in one place, your team can focus on
              closing more deals instead of chasing spreadsheets and missed
              enquiries.
            </p>
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