'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MonthlyReports() {
  // Active Tab State — By default, the first tab is selected
  const [activeTab, setActiveTab] = useState(0)

  // Complete data mapping matching your UI screenshot specification
  const reportData = [
    {
      id: 0,
      tabTitle: "Keyword Research Report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      intro: "To present an analysis of high-value industry terms, search intent, and structural keyword opportunities based on direct data insights.",
      metrics: [
        { label: "Search Volume Analysis", value: "Comprehensive breakdown of monthly search metrics and seasonal fluctuations across core target terms." },
        { label: "Keyword Difficulty Mapping", value: "Evaluation of ranking competitiveness to prioritize low-hanging, high-converting organic targets." },
        { label: "Search Intent Classification", value: "Categorization of keywords into Informational, Navigational, and Transactional buckets for content planning." },
        { label: "Competitor Keyword Gaps", value: "Identification of premium high-traffic phrases currently driven by competitors that your site can capture." }
      ]
    },
    {
      id: 1,
      tabTitle: "Keywords Ranking Report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      intro: "To monitor historical performance and daily position movements of your primary, secondary, and transactional keywords across core search engine results.",
      metrics: [
        { label: "SERP Position Tracking", value: "Real-time auditing of your website's positions on Google Desktop and Mobile search result pages." },
        { label: "Ranking Distribution", value: "Visual tracking of how many core keywords sit securely within the Top 3, Top 10, and Top 20 ranking spots." },
        { label: "Featured Snippet Ownership", value: "Monitoring SERP features captured by your domain, including Instant Answers, Maps, and People Also Ask targets." },
        { label: "Visibility Index Growth", value: "An aggregated market share percentage calculating your absolute authority inside your primary search vertical." }
      ]
    },
    {
      id: 2,
      tabTitle: "On-Page Recommendation Sheet",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6a2.25 2.25 0 01-2.25-2.25V4.5A2.25 2.25 0 015.25 2.25h9a2.25 2.25 0 012.25 2.25v1.5z" />
        </svg>
      ),
      intro: "Actionable, architectural adjustments deployed to refine page speed, meta tags, and internal keyword context for seamless crawlability.",
      metrics: [
        { label: "Meta Tags Optimization", value: "Tailoring click-optimized Titles and Descriptions containing target keyphrases to increase organic CTR." },
        { label: "Content Architecture & Hx tags", value: "Structuring header hierarchies (H1-H4) to emphasize semantic intent for Google search algorithms." },
        { label: "Internal Linking Map", value: "Strategic cross-linking recommendations to distribute link juice and establish clean topical authority hubs." },
        { label: "Image Alt Text & UX Auditing", value: "Optimizing asset sizes and descriptive labels to capture prominent visibility across Google Image Search panels." }
      ]
    },
    {
      id: 3,
      tabTitle: "Monthly Activity Report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      intro: "A completely transparent summary documenting every specific optimization task executed by our technical SEO squad during the billing cycle.",
      metrics: [
        { label: "Technical Fixes Logged", value: "Full summary of resolved 404 errors, structural schema validation modifications, and indexing optimization." },
        { label: "Content Assets Published", value: "Detailed audit of newly created or refreshed blog assets, dynamic landing environments, and informational copy." },
        { label: "Link Building Tasks", value: "Tracking toxic outbound link deprecations alongside safe premium contextual mentions acquired naturally." },
        { label: "Core Web Vitals Adjustments", value: "Action items implemented to reduce Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) scores." }
      ]
    },
    {
      id: 4,
      tabTitle: "Monthly Google Analytics Report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      intro: "To present an analysis of the website's performance based on data from Google Analytics.",
      metrics: [
        { label: "Traffic Overview", value: "Total visits, unique visitors, page views, and other key traffic metrics." },
        { label: "Traffic Sources", value: "Breakdown of traffic by source (organic, direct, referral, social, etc.)." },
        { label: "User Behavior", value: "Insights into how users interact with the website, including bounce rate, average session duration, and pages per session." },
        { label: "Conversion Data", value: "Analysis of goal completions, conversion rates, and user journeys." },
        { label: "Audience Insights", value: "Demographic and geographic data about the website's visitors." },
        { label: "Content Performance", value: "Performance metrics for top-performing pages and content." },
        { label: "Recommendations", value: "Strategic recommendations based on the data to improve traffic, user engagement, and conversions." }
      ]
    }
  ]

  return (
    <section 
      className="bg-slate-50 py-10 px-4 sm:px-8 relative overflow-hidden" 
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em]">
            Monthly SEO Deliveries And Reports
          </h2>
        </div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Vertical Interactive Tabs Panel (5 Columns wide on desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-3 w-full">
            {reportData.map((tab, idx) => {
              const isSelected = activeTab === idx
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center text-left px-6 py-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    isSelected 
                      ? "bg-white border-purple-200 shadow-xl shadow-purple-100/40" 
                      : "bg-slate-100/70 border-transparent hover:bg-slate-200/50"
                  }`}
                >
                  {/* Selected Indicator Accent Stripe (Left Boundary line) */}
                  {isSelected && (
                    <motion.div 
                      layoutId="verticalLine"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-600 to-pink-600"
                    />
                  )}

                  {/* Icon Dynamic Styling Context */}
                  <div className={`mr-4 shrink-0 transition-colors duration-300 ${
                    isSelected ? "text-purple-600" : "text-gray-400 group-hover:text-gray-600"
                  }`}>
                    {tab.icon}
                  </div>

                  {/* Button Label Text */}
                  <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                    isSelected ? "text-purple-900" : "text-gray-600 group-hover:text-gray-900"
                  }`}>
                    {tab.tabTitle}
                  </span>
                </button>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Dynamic Data Content Container Box (7 Columns wide on desktop) */}
          <div className="lg:col-span-7 w-full h-full">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 min-h-[510px] relative flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Top Intro Summary String (Light Gray Meta Description Style) */}
                  <p className="text-sm md:text-base text-gray-500 font-medium leading-[1.7] pb-4 border-b border-slate-100">
                    {reportData[activeTab].intro}
                  </p>

                  {/* Main Metric Key/Value Stack Mapping */}
                  <div className="space-y-5 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                    {reportData[activeTab].metrics.map((item, mIdx) => (
                      <div key={mIdx} className="group/item">
                        <p className="text-sm md:text-base text-gray-700 leading-[1.7] font-medium">
                          <strong className="text-gray-900 font-bold block sm:inline mr-1 transition-colors duration-200 group-hover/item:text-purple-700">
                            {item.label}:
                          </strong>
                          <span> {item.value}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      {/* Embedded CSS style inject specifically for cleaner right-side viewport scrolling */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  )
}