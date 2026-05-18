import { motion } from 'framer-motion'

export default function SEOWorkByIndustry() {
  // 8 Industries data based on your image with matching background gradients and premium Unsplash placeholders
  const industries = [
    {
      name: 'TECHNOLOGY',
      bgGradient: 'from-[#1e293b] to-[#0f172a]', // Dark Slate/Blue
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    },
    {
      name: 'HEALTHCARE',
      bgGradient: 'from-[#580022] to-[#300012]', // Maroon/Deep Wine
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80',
    },
    {
      name: 'REAL ESTATE',
      bgGradient: 'from-[#2563eb] to-[#1d4ed8]', // Royal Blue
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    },
    {
      name: 'FINANCE',
      bgGradient: 'from-[#a16207] to-[#78350f]', // Golden/Amber Earth
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
    },
    {
      name: 'EDUCATION',
      bgGradient: 'from-[#4c1d95] to-[#2e1065]', // Deep Purple
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    },
    {
      name: 'ECOMMERCE',
      bgGradient: 'from-[#0369a1] to-[#0c4a6e]', // Ocean Teal/Blue
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&q=80',
    },
    {
      name: 'AUTOMOBILE',
      bgGradient: 'from-[#7c2d12] to-[#431407]', // Terracotta/Brown
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    },
    {
      name: 'MANUFACTURING',
      bgGradient: 'from-[#043e7d] to-[#022347]', // Industrial Dark Blue
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    },
  ]

  // Parent container animation for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="bg-slate-50 py-20 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.02em] text-gray-800 uppercase"
          >
            SEO Work By Industry
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6400A1] to-[#BB000F] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid Layout (exactly 4 columns on large screens, 2 on tablet, 1 on mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative overflow-hidden rounded-2xl p-6 h-64 flex flex-col justify-between shadow-lg shadow-slate-300/50 group cursor-pointer bg-gradient-to-br ${item.bgGradient}`}
            >
              {/* Overlay inside grid items for standard mockup look */}
              <div className="absolute inset-0 bg-black/10 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Central Mockup/Image Presentation Block */}
              <div className="relative z-10 flex-1 flex items-center justify-center pt-2">
                <div className="w-full h-32 rounded-lg overflow-hidden shadow-2xl border border-white/10 relative group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={`${item.name} SEO Case Study`}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Glassmorphism Device effect simulator */}
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-gray-800 tracking-wider">
                    LIVE PREVIEW
                  </div>
                </div>
              </div>

              {/* Bottom Industry Label */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.05em] text-white uppercase group-hover:text-yellow-300 transition-colors duration-300">
                  {item.name}
                </span>
                {/* Arrow Icon indicator that appears on hover */}
                <svg 
                  className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Ambient Background Glow Effect on Card Hover */}
              <div className="absolute -inset-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-white/0 to-white/10 w-full h-full rotate-45 scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}