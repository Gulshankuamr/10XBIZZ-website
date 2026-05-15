"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const services = [
  {
    icon: "🎯",
    title: "Search Ads",
    desc: "Capture high-intent buyers exactly when they search for your product or service on Google.",
  },
  {
    icon: "🖼️",
    title: "Display & Remarketing",
    desc: "Re-engage past visitors and build brand awareness across millions of websites.",
  },
  {
    icon: "🛒",
    title: "Shopping Campaigns",
    desc: "Showcase your products with images, prices, and reviews directly in search results.",
  },
  {
    icon: "📹",
    title: "YouTube Video Ads",
    desc: "Drive awareness and conversions with targeted video ads on the world's biggest video platform.",
  },
  {
    icon: "📊",
    title: "Performance Max",
    desc: "AI-powered campaigns that run across all Google channels for maximum ROI.",
  },
  {
    icon: "📍",
    title: "Local & Call Ads",
    desc: "Drive foot traffic and phone calls from nearby customers who are ready to act.",
  },
];

const stats = [
  { value: "3.5x", label: "Avg. ROAS Delivered" },
  { value: "60%", label: "Reduction in Wasted Spend" },
  { value: "200+", label: "Campaigns Managed" },
  { value: "48hr", label: "Campaign Launch Time" },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "We analyse your current ads, competitors, and keywords to build a winning roadmap.",
  },
  {
    step: "02",
    title: "Campaign Setup",
    desc: "Precision targeting, compelling ad copy, and conversion-optimised landing pages.",
  },
  {
    step: "03",
    title: "Launch & Monitor",
    desc: "Live campaigns tracked in real-time with daily performance monitoring.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    desc: "Continuous A/B testing, bid adjustments, and scaling what works.",
  },
];

const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Most clients see initial data within the first 48–72 hours of launch. Meaningful optimisation results typically appear within 30 days.",
  },
  {
    q: "What is the minimum ad budget required?",
    a: "We recommend a minimum monthly ad spend of ₹30,000–₹50,000 to gather enough data for effective optimisation.",
  },
  {
    q: "Do you manage campaigns on my existing account?",
    a: "Yes. We can take over and audit existing Google Ads accounts or set up a brand new one from scratch.",
  },
  {
    q: "How do you reduce wasted ad spend?",
    a: "Through negative keyword lists, search term audits, audience exclusions, and smart bidding strategies tailored to your goals.",
  },
];

export default function GoogleAdsServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main
      className="min-h-screen font-['Montserrat',ui-sans-serif,system-ui,sans-serif] overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #F5F7FF, #fffbee, #E6EFFF)",
      }}
    >
      {/* ───── STATS BANNER ───── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div
                  className="text-3xl md:text-4xl font-black bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ───── WHY US ───── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3 bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Don't Just Run Ads —{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We Drive Revenue
              </span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Most agencies set and forget. We obsess over every rupee of your
              budget — testing, refining, and scaling only what delivers real
              business results.
            </p>
            <ul className="space-y-4">
              {[
                "Certified Google Ads specialists",
                "Transparent weekly reporting",
                "Dedicated account manager",
                "No long-term lock-in contracts",
                "ROI-first strategy, always",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Get Your Free Google Ads Audit
            </h3>
            <div className="space-y-4">
              {[
                "Your Name",
                "Business Name",
                "Email Address",
                "Monthly Ad Budget (₹)",
              ].map((label, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={label}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
                </div>
              ))}
              <button
                className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 mt-2"
                style={{
                  background:
                    "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                }}
              >
                Request Free Audit →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3 bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got Questions? We've Got Answers.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.q}</span>
                <span className="text-2xl text-[#6400A1] transition-transform duration-300">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === idx ? "auto" : 0,
                  opacity: openFaq === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
    </main>
  );
}
