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

  return (
    <section className="py-20 px-6 sm:px-10 overflow-hidden bg-[#f8fafc] font-['Montserrat']">
      
      {/* Flip card CSS Effect */}
      <style>{`
        .seo-card-wrap {
          perspective: 1000px;
          min-height: 280px;
          cursor: pointer;
        }
        .seo-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 280px;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .seo-card-wrap:hover .seo-card-inner {
          transform: rotateY(-180deg);
        }
        .seo-card-front,
        .seo-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .seo-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] max-w-3xl mx-auto leading-tight">
            A Trusted Modern SEO Service Company to Overcome Your SEO Challenges!
          </h2>
        </div>

        {/* Outer Container (No Outer Borders applied here) */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#6400A1]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => {
              
           
              const isLastInRow = (index + 1) % 3 === 0;
              
              const isInLastRow = index >= services.length - 3;

              return (
                <div
                  key={index}
                  className={`seo-card-wrap overflow-hidden
                    ${!isLastInRow ? 'md:border-r-[2px] md:border-black/30' : 'md:border-r-0'} 
                    ${!isInLastRow ? 'border-b-[2px] border-black/30' : 'border-b-0'}
                    ${isInLastRow && !isLastInRow ? 'max-md:border-b-[2px] max-md:border-black/30' : ''}
                  `}
                >
                  <div className="seo-card-inner">

                    {/* FRONT SIDE */}
                    <div className="seo-card-front flex flex-col items-center justify-center text-center p-8 sm:p-10 bg-[#6400A1]">
                      <div className="mb-5">
                        {service.icon}
                      </div>
                      <h3 className="font-bold tracking-wide mb-3 text-[1.05rem] text-white">
                        {service.title}
                      </h3>
                      <p className="leading-[1.7] font-medium text-[0.85rem] text-[rgba(220,180,255,0.85)] max-w-[260px]">
                        {service.desc}
                      </p>
                    </div>

                    {/* BACK SIDE */}
                    <div className="seo-card-back overflow-hidden flex items-center justify-center bg-[#6400A1]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-90 absolute inset-0"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/35 to-transparent" />
                      
                      {/* Back text */}
                      <div className="absolute bottom-5 left-0 right-0 px-4 text-center">
                        <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1 drop-shadow-md">
                          {service.title}
                        </h4>
                        <span className="inline-block text-[11px] font-bold text-[#fbbf24] tracking-[0.08em] uppercase border border-amber-400/40 bg-amber-950/40 px-2.5 py-1 rounded">
                          View Strategy →
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="flex justify-center mt-12">
          <button className="px-9 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[0.8rem] tracking-wider uppercase border-none rounded-xl cursor-pointer shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-transform duration-200 hover:scale-[1.02]">
            Our SEO Packages
          </button>
        </div>

      </div>
    </section>
  )
}