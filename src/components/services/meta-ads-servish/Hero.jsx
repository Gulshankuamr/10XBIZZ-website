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
          Meta Ads Growth
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-10 text-gray-900"
        >
          Facebook & Instagram Ads{' '}
          <span
            style={{
              background: 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Designed To Generate More Leads & Sales
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
            {/* Subheadline acted as a powerful intro paragraph */}
            <p className="mb-5 font-medium text-gray-800 text-lg md:text-[20px] leading-relaxed">
              We create data-driven Meta advertising campaigns that help businesses reach the right audience, generate qualified enquiries, and turn social media attention into measurable revenue.
            </p>
            
            {/* Paragraph 1 */}
            <p className="mb-5">
              From Facebook Feed Ads to Instagram Reels and Lead Generation Campaigns, we build conversion-focused strategies designed to attract high-quality prospects and maximize return on ad spend.
            </p>
            
            {/* Paragraph 2 */}
            <p className="mb-6">
              Our team continuously tests creatives, audiences, placements, and campaign structures to improve lead quality, reduce acquisition costs, and scale profitable campaigns.
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
              src="/for the first section.webp"
              alt="Meta Ads Campaigns"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
            />
          </motion.div>
        </div>
      </div>

     
      {showModal && <DemoPopModal onClose={() => setShowModal(false)} />}
    </section>
  )
}