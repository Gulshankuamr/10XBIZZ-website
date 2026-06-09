
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { value: "1000+", label: "Leads Generated" },
  { value: "200+", label: "Campaigns Managed" },
  { value: "20+", label: "Businesses Automated" },
  { value: "24/7", label: "Tracking & Optimization" },
];

const faqs = [
  {
    q: "1. How long does it take to see results from Google Ads?",
    a: "Google Ads can start generating traffic immediately after launch. Most campaigns begin producing qualified leads within the first few weeks, while performance improves significantly as data is collected and optimized.",
  },
  {
    q: "2. What is the minimum ad budget required?",
    a: "The ideal budget depends on your industry and competition. For most businesses, we recommend starting with ₹20,000–₹50,000 per month to generate enough data for effective optimization and lead generation.",
  },
  {
    q: "3. Do I need a website to run Google Ads?",
    a: "Not necessarily. We can run campaigns using landing pages, lead forms, or WhatsApp funnels. However, a dedicated landing page typically delivers higher conversion rates and better lead quality.",
  },
  {
    q: "4. Will I own my Google Ads account and data?",
    a: "Yes. You always retain full ownership of your Google Ads account, conversion tracking, campaign data, and advertising assets.",
  },
  {
    q: "5. Can you manage my existing Google Ads account?",
    a: "Absolutely. We can audit, optimize, and manage your current campaigns or build a completely new Google Ads strategy from scratch.",
  },
  {
    q: "6. How do you track leads and campaign performance?",
    a: "We set up advanced conversion tracking to measure phone calls, form submissions, WhatsApp enquiries, appointments, and other valuable customer actions so you know exactly where your leads are coming from.",
  },
  {
    q: "7. Do you only run ads, or do you help with lead management too?",
    a: "At 10xBizz, we go beyond ad management. We help businesses improve lead capture, landing pages, CRM systems, automation, and follow-up processes to maximize conversions.",
  },
  {
    q: "8. Why choose 10xBizz for Google Ads management?",
    a: "We focus on generating qualified leads, not just clicks. Our data-driven approach combines Google Ads, conversion tracking, landing page optimization, and automation to help businesses achieve measurable growth and better ROI.",
  },
];

export default function GoogleAdsServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main
      className="min-h-screen font-['Montserrat',ui-sans-serif,system-ui,sans-serif] overflow-x-hidden py-24"
      style={{
        background: "linear-gradient(to bottom, #F5F7FF, #fffbee, #E6EFFF)",
      }}
    >
      {/* ───── STATS BANNER SECTION ───── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mb-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em]"
          >
            Performance You Can{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
              }}
            >
              Measure
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/50 shadow-[0_10px_40px_-15px_rgba(100,0,161,0.05)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div
                  className="text-4xl md:text-5xl font-black bg-clip-text text-transparent tracking-tight"
                  style={{
                    backgroundImage: "linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base tracking-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ───── FAQ SECTION ───── */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-12">
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#6400A1] text-xs font-bold tracking-[0.05em] uppercase"
          >
            QUESTIONS &amp; ANSWERS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-950 tracking-[-0.02em]"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 font-medium text-base md:text-lg max-w-3xl mx-auto leading-[1.7]"
          >
            Everything you need to know about our Google Ads management services, campaign strategy, lead generation process, and performance tracking.
          </motion.p>
        </div>

        {/* FAQ Accordion System */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-slate-200/80 rounded-2xl bg-white/70 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-purple-50/30 transition-colors"
              >
                <span className="font-bold text-gray-900 text-base md:text-[17px] tracking-tight">
                  {faq.q}
                </span>
                <span className="text-2xl font-semibold text-[#6400A1] select-none shrink-0">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === idx ? "auto" : 0,
                  opacity: openFaq === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-slate-600 text-sm md:text-base font-medium leading-[1.75] border-t border-slate-100 pt-4 bg-white/40布">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}