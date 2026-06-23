import React from 'react'
import { motion } from 'framer-motion'

const ImageCardSection = () => {
  return (
    <section 
      className="w-full flex items-center justify-center px-4 sm:px-10  md:py-8 bg-white"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-white/5 rounded-[2rem] blur-2xl group-hover:bg-white/10 transition duration-500"></div>

          <div className="relative bg-black/20 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-[21/9] lg:aspect-[25/9]">
            <img
              src="/fpor section 3.png"
              alt="Meta Ads Creative"
              className="w-full h-full object-cover display-block transform transition duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-white/40 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">
              Meta Ads • Retargeting • Lead Generation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImageCardSection
