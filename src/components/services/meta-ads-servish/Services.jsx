'use client'

import React from 'react'

const SERVICE_CARDS = [
  {
    id: 's1',
    number: '01',
    tag: 'Lead Generation Campaigns',
    title: 'Generate High-Quality Enquiries',
    iconSrc: '/public_svg_icone/icons8-lead-50.png',
    desc: 'Generate high-quality enquiries through Facebook Lead Forms, WhatsApp Ads, and conversion-focused landing pages.',
    includes: ['Lead Forms', 'WhatsApp Leads', 'CRM Integration'],
  },
  {
    id: 's2',
    number: '02',
    tag: 'Instagram Reels Advertising',
    title: 'Capture Attention With Video',
    iconSrc: '/public_svg_icone/icons8-instagram-50.png',
    desc: 'Capture attention with high-performing short-form video campaigns designed to increase reach, engagement, and conversions.',
    includes: ['Reels Ads', 'Video Strategy', 'Creative Testing'],
  },
  {
    id: 's3',
    number: '03',
    tag: 'Retargeting Campaigns',
    title: 'Reconnect With Warm Prospects',
    iconSrc: '/public_svg_icone/icons8-retargeting-50.png',
    desc: 'Reconnect with website visitors, video viewers, and past leads to improve conversion rates and reduce acquisition costs.',
    includes: ['Website Retargeting', 'Dynamic Ads', 'Conversion Recovery'],
  },
  {
    id: 's4',
    number: '04',
    tag: 'Facebook Lead Ads',
    title: 'Capture Leads Instantly',
    iconSrc: '/public_svg_icone/icons8-facebook-50.png',
    desc: 'Capture qualified leads directly inside Facebook and instantly send them into your CRM or WhatsApp workflow.',
    includes: ['Instant Forms', 'Lead Qualification', 'Automation Setup'],
  },
  {
    id: 's5',
    number: '05',
    tag: 'eCommerce Growth Campaigns',
    title: 'Increase Online Sales',
    iconSrc: '/public_svg_icone/icons8-google-shopping-50.png',
    desc: 'Increase sales through catalog ads, dynamic product ads, and advanced conversion optimization.',
    includes: ['Catalog Ads', 'Product Feeds', 'ROAS Optimization'],
  },
  {
    id: 's6',
    number: '06',
    tag: 'Audience Research & Scaling',
    title: 'Find Highest-Converting Buyers',
    iconSrc: '/public_svg_icone/icons8-barchart-50.png',
    desc: 'Find your highest-converting audiences and scale winning campaigns using lookalikes, custom audiences, and behavioral targeting.',
    includes: ['Lookalike Audiences', 'Interest Research', 'Scaling Strategy'],
  },
]

export default function MetaAdsServices() {
  return (
    <main className="bg-white font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-slate-900 selection:bg-purple-200">
      <section className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header Module */}
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-[#6400A1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.05em]">
            Expert Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6 max-w-4xl mx-auto leading-tight tracking-tight">
            From Awareness To Conversion — We Manage Every <span className="text-[#6400A1]">Meta Campaign Type</span>
          </h2>
          <p className="text-slate-800 text-lg max-w-2xl mx-auto font-medium">
            Whether you're looking to generate leads, increase sales, or scale your business, our Meta Ads strategies are built to deliver measurable results.
          </p>
        </div>

        {/* Dynamic Service Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {SERVICE_CARDS.map((card) => (
    <div
      key={card.id}
      className="group relative p-8 rounded-[2.5rem] border-4 border-slate-950 bg-white hover:bg-[#6400A1] transition-all duration-500 cursor-pointer overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 flex flex-col justify-between"
    >
      <div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-50 group-hover:bg-white/10 transition-colors" />

        {/* Enlarged and Centered PNG Icon Module */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-24 h-24 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-300 shrink-0">
            <img 
              src={card.iconSrc} 
              alt={card.title} 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-[11px] md:text-xs font-bold tracking-[0.05em] uppercase bg-purple-50 text-[#6400A1] group-hover:bg-white/20 group-hover:text-white mb-4 transition-colors">
          {card.tag}
        </span>

        <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-white transition-colors tracking-tight leading-tight">
          {card.title}
        </h3>

        <p className="text-slate-600 text-base md:text-sm leading-[1.65] group-hover:text-purple-100 mb-6 transition-colors font-medium">
          {card.desc}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-200 group-hover:border-white/20 mt-auto">
        <ul className="space-y-2">
          {card.includes.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-white/90">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6400A1] group-hover:bg-white shrink-0" />
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