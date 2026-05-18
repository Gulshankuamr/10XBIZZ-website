
import React from "react"
import { motion } from "framer-motion"

export default function NextGenSEO() {
  // 3 Next-Gen SEO Cards based on your uploaded image layout and data
  const seoCards = [
    {
      title: "Structure For Smarter Search",
      bullets: [
        "Implement advanced schema markup and structured data",
        "Optimize headings, FAQs, and snippets for Answer Engine Optimization (AEO)",
        "Make every page easy for Google, Gemini, and ChatGPT to interpret and recommend"
      ]
    },
    {
      title: "Optimize For Generative Search (GEO)",
      bullets: [
        "Align content tone and format for Generative Engine Optimization (GEO)",
        "Use semantic SEO and contextual NLP cues that AI models understand",
        "Craft conversational, authoritative responses that get referenced in LLMs"
      ]
    },
    {
      title: "Dominate AI & Voice Ecosystems",
      bullets: [
        "Optimize for voice search and mobile-first discovery",
        "Strengthen your visibility in AI Overviews, featured snippets & 'People Also Ask'",
        "Continuously track LLM signals to maintain visibility across new AI platforms"
      ]
    }
  ]

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden bg-slate-50"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Background soft colorful ambient glow matching your UI screenshot style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-purple-300/20 via-pink-200/10 to-blue-300/20 blur-[140px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Content Area */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-[-0.02em]"
          >
            Next-Gen SEO
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-base md:text-[18px] text-gray-600 leading-[1.7] font-medium text-justify md:text-center"
          >
            <p>
              Search is evolving and Tangence ensures your brand evolves with it. At Tangence, we integrate AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) into our core SEO services to ensure your brand stands out in both search and <span className="text-blue-600 font-semibold cursor-pointer hover:underline">AI-driven results</span>. Our process begins with deep content structuring using schema markup, FAQ optimization, and contextual NLP (Natural Language Processing) alignment making your website easily interpretable by AI systems and search crawlers.
            </p>
            <p>
              We craft concise, authoritative answers for high-value queries, enabling your brand to appear in Google AI Overviews, People Also Ask, and voice results. Through <span className="text-blue-600 font-semibold cursor-pointer hover:underline">GEO strategies</span>, we train content for Large Language Models (LLMs) like ChatGPT, Gemini, and Perplexity, ensuring your brand is referenced in AI-generated responses.
            </p>
            <p className="font-semibold text-gray-800">
              With Tangence, your website doesn’t just rank, it becomes part of the conversation shaping the future of search in India.
            </p>
          </motion.div>
        </div>

        {/* Interactive 3-Card Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {seoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                backgroundColor: "#6400A1",
                scale: 1.02,
                y: -5
              }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-start transition-all duration-300 group cursor-pointer"
            >
              {/* Card Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h3>

              {/* Card Bullet Points List */}
              <ul className="space-y-4 flex-grow">
                {card.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx} 
                    className="flex items-start text-sm md:text-base text-gray-600 font-medium leading-[1.7] transition-colors duration-300 group-hover:text-purple-100"
                  >
                    {/* Minimalist Modern Custom Bullet Dot */}
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-900 mt-2 mr-3 shrink-0 transition-colors duration-300 group-hover:bg-amber-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}