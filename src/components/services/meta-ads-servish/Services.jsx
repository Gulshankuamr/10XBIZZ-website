'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Monitor, ShoppingBag, Youtube, Zap, MapPin } from 'lucide-react'

const SERVICE_CARDS = [
  {
    id: 's1',
    number: '01',
    tag: 'Facebook Ads',
    title: 'Lift High-Intent Traffic',
    icon: <Search />,
    desc: 'Convert Facebook audiences with ads that are built to drive clicks, leads, and purchases.',
    includes: ['Audience Targeting', 'Creative Testing', 'Budget Optimization'],
  },
  {
    id: 's2',
    number: '02',
    tag: 'Instagram Reels',
    title: 'Engage with Video',
    icon: <Youtube />,
    desc: 'Drive attention and leads using short-form Reels ads optimized for mobile engagement.',
    includes: ['Reels Story Ads', 'Mobile-First Creatives', 'Performance Scaling'],
  },
  {
    id: 's3',
    number: '03',
    tag: 'Retargeting',
    title: 'Capture Warm Audiences',
    icon: <Monitor />,
    desc: 'Reconnect with visitors using dynamic retargeting ads across Meta platforms.',
    includes: ['Dynamic Audiences', 'Cross-Platform Reach', 'Conversion Funnels'],
  },
  {
    id: 's4',
    number: '04',
    tag: 'Lead Generation',
    title: 'Fill Your Funnel',
    icon: <Zap />,
    desc: 'Generate qualified leads with lead form ads, messaging, and conversion-focused campaigns.',
    includes: ['Form Ads', 'CRM Sync', 'Follow-Up Sequences'],
  },
  {
    id: 's5',
    number: '05',
    tag: 'Ecommerce',
    title: 'Boost Online Sales',
    icon: <ShoppingBag />,
    desc: 'Increase sales with catalog ads, shop experiences, and product-focused performance campaigns.',
    includes: ['Catalog Setup', 'Shop Ads', 'ROAS Optimization'],
  },
  {
    id: 's6',
    number: '06',
    tag: 'Audience Targeting',
    title: 'Find Your Best Buyers',
    icon: <MapPin />,
    desc: 'Reach the exact buyers most likely to convert through lookalikes, interests, and behavior signals.',
    includes: ['Lookalike Lists', 'Interest Mapping', 'Custom Audiences'],
  },
]

export default function MetaAdsServices() {
  return (
    <main className="bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-slate-900 selection:bg-purple-200">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.05em]">
            Expert Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
            High-Performance Meta <span className="text-[#6400A1]">Campaigns</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Designed to attract the right audience and maximize ROI across Facebook and Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative p-8 rounded-[2rem] border border-slate-200 bg-white hover:bg-[#6400A1] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-400 hover:-translate-y-2"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-50 group-hover:bg-white/10 transition-colors" />

              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 text-[#6400A1] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center rounded-xl transition-colors">
                  {React.cloneElement(card.icon, { className: 'w-6 h-6' })}
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-[11px] md:text-xs font-bold tracking-[0.05em] uppercase bg-purple-50 text-[#6400A1] group-hover:bg-white/20 group-hover:text-white mb-4 transition-colors">
                {card.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif] transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-500 text-base md:text-sm leading-[1.7] group-hover:text-purple-100 mb-6 transition-colors">
                {card.desc}
              </p>

              <div className="pt-6 border-t border-slate-100 group-hover:border-white/20">
                <ul className="space-y-2">
                  {card.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6400A1] group-hover:bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
