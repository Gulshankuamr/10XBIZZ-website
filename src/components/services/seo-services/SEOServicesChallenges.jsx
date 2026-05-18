import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SEOServicesChallenges() {
  const services = [
    {
      title: 'Enterprise SEO',
      desc: 'We can help large organizations devise comprehensive SEO strategies that leverage their corporate structure.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'International SEO',
      desc: 'We devise strategies that help businesses reach a global audience and maximize their reach.',
      image: 'https://images.unsplash.com/photo-1521056787326-a0785c6c958c?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
        </svg>
      )
    },
    {
      title: 'Local SEO',
      desc: 'We help businesses localize their online marketing efforts to attract customers from a specific area.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'National SEO',
      desc: 'Our experts help businesses optimize their content for a nationwide audience to reach more potential customers.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
        </svg>
      )
    },
    {
      title: 'Ecommerce SEO',
      desc: 'We specialize in optimizing content for e-commerce websites to improve their visibility and increase sales.',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Technical SEO',
      desc: 'We can help with technical aspects of SEO, such as sitemaps, indexing, and server configurations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Pay For Performance',
      desc: 'We offer customized pay-for-performance models to help businesses capitalize on the success of their SEO campaigns.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Multilingual SEO',
      desc: 'Our experts can help businesses reach a global audience by optimizing content for multiple languages.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.006 2.16-.542 4.257-1.55 6.136" />
        </svg>
      )
    },
    {
      title: 'SEO Copywriting Services',
      desc: 'Our expert team of writers craft content that is optimized for SEO.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80',
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ]

  const rows = [
    services.slice(0, 3),
    services.slice(3, 6),
    services.slice(6, 9),
  ]

  return (
    <section
      className="py-20 px-6 sm:px-10 overflow-hidden"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif", backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] max-w-3xl mx-auto leading-tight">
            A Trusted Modern SEO Service Company to Overcome Your SEO Challenges!
          </h2>
        </div>

        {/* Outer Box */}
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#6400A1', border: '1px solid #4a007a' }}
        >
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                borderBottom: rowIndex < rows.length - 1 ? '2px solid #000' : 'none',
              }}
            >
              {row.map((service, colIndex) => {
                // Keep unique hover state logic handled dynamically via framer's whileHover
                return (
                  <div
                    key={colIndex}
                    className="relative w-full min-h-[280px] bg-transparent [perspective:1000px] group"
                    style={{
                      borderRight: colIndex < row.length - 1 ? '2px solid #000' : 'none',
                    }}
                  >
                    {/* Inner 3D Flipping Card Wrapper */}
                    <motion.div
                      className="relative w-full h-full [transform-style:preserve-3d] transition-all duration-700 ease-out"
                      whileHover={{ rotateY: -180 }}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: colIndex * 0.05 }}
                    >
                      
                      {/* FRONT SIDE (Original UI Text) */}
                      <div 
                        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-8 sm:p-10 [backface-visibility:hidden]"
                        style={{ backgroundColor: '#6400A1' }}
                      >
                        {/* Icon */}
                        <div className="mb-5 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className="font-bold tracking-wide mb-3"
                          style={{ fontSize: '1.05rem', color: '#fff' }}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="leading-[1.7] font-medium"
                          style={{
                            color: 'rgba(220,180,255,0.85)',
                            fontSize: '0.85rem',
                            maxWidth: '260px',
                          }}
                        >
                          {service.desc}
                        </p>
                      </div>

                      {/* BACK SIDE (Full Image UI View on Flip) */}
                      <div 
                        className="absolute inset-0 w-full h-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center"
                        style={{ backgroundColor: '#4a007a' }}
                      >
                        {/* Background Image */}
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover opacity-90 transition-transform duration-500 scale-100 group-hover:scale-105" 
                        />
                        {/* Dark Gradient Overlay for text over images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Back-side Text Layer */}
                        <div className="absolute bottom-5 left-0 right-0 px-4 text-center">
                          <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1 drop-shadow-md">
                            {service.title}
                          </h4>
                          <span className="inline-block text-[11px] font-bold text-amber-400 tracking-wider uppercase border border-amber-400/40 bg-amber-950/40 px-2.5 py-1 rounded">
                            View Strategy →
                          </span>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            style={{
              padding: '0.85rem 2.2rem',
              background: 'linear-gradient(to right, #f59e0b, #f97316)',
              color: '#fff',
              fontWeight: '700',
              fontSize: '0.8rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
            }}
          >
            Our SEO Packages
          </button>
        </div>

      </div>
    </section>
  )
}