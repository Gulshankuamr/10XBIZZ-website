import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const seoData = {
  strategy: {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=560&q=80",
    title: "SEO Strategy",
    subtitle: "Custom SEO strategies designed to improve rankings and attract high-intent organic traffic.",
  },
  optimization: {
    image: "https://images.unsplash.com/photo-1551836022-4b9d20e0f11d?w=560&q=80",
    title: "On-Page Optimization",
    subtitle: "Optimize content, keywords, website speed, and structure for better Google visibility and user experience.",
  },
  reporting: {
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=560&q=80",
    title: "SEO Reporting",
    subtitle: "Track keyword rankings, organic growth, website performance, and SEO ROI with clear reporting insights.",
  },
}

export default function WhyChooseUs() {
  const [activeKey, setActiveKey] = useState(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 20, y: e.clientY - 120 })
  }

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <img
            src="/New-Project-36.webp"
            alt="SEO Strategy"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent" />
        </motion.div>

        {/* Right — Content */}
        <div onMouseMove={handleMouseMove} className="relative z-10 order-1 md:order-2">

          {/* Label */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase mb-4"
          >
            Why Choose Us
          </motion.h2>

          {/* Main Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Grow your business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">
              result-driven SEO strategies
            </span>
          </motion.h3>

          {/* Paragraphs with Hover Triggers */}
          <div className="space-y-6 text-xl text-gray-600 leading-[1.7]">

            {/* Para 1 */}
            <p>
              We don't just improve rankings — we create powerful{" "}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-purple-200 hover:border-purple-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey("strategy")}
                onMouseLeave={() => setActiveKey(null)}
              >
                SEO growth strategies
              </span>{" "}
              that help your business attract qualified organic traffic, increase online visibility, and generate long-term leads from Google search.
            </p>

            {/* Para 2 */}
            <p>
              Focus on growing your brand while our SEO experts handle{" "}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-red-200 hover:border-red-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey("optimization")}
                onMouseLeave={() => setActiveKey(null)}
              >
                on-page optimization
              </span>{" "}
              — technical fixes, keyword targeting, content strategy, and improvements designed to boost search performance and conversions.
            </p>

            {/* Para 3 */}
            <p>
              Our transparent{" "}
              <span
                className="font-bold text-gray-900 cursor-help border-b-2 border-blue-200 hover:border-blue-600 transition-all mx-1 px-1"
                onMouseEnter={() => setActiveKey("reporting")}
                onMouseLeave={() => setActiveKey(null)}
              >
                SEO reporting and tracking
              </span>{" "}
              help you monitor keyword rankings, organic traffic growth, and measurable ROI while building sustainable search authority for your business.
            </p>

          </div>
        </div>
      </div>

      {/* Hover Floating Card */}
      <AnimatePresence>
        {activeKey && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            style={{
              position: "fixed",
              left: position.x,
              top: position.y,
              pointerEvents: "none",
              zIndex: 100,
            }}
            className="w-72 bg-white rounded-xl shadow-2xl p-2 border border-gray-100"
          >
            <img
              src={seoData[activeKey].image}
              className="w-full h-40 object-cover rounded-lg mb-3"
              alt="preview"
            />
            <div className="px-2 pb-2">
              <h4 className="font-bold text-gray-900">{seoData[activeKey].title}</h4>
              <p className="text-xs text-gray-500">{seoData[activeKey].subtitle}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}