import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#6400A1]">
            Ready to scale
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Launch Facebook & Instagram ads that move revenue and lower CPA.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Work with a team that builds attention-getting creatives, multiplatform funnels, and retargeting flows for high-value conversions.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl bg-[#F5F7FF] p-8 border border-gray-200">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6400A1] mb-3">
              Strategic + creative
            </p>
            <p className="text-gray-700 leading-relaxed">
              Reels ads, lookalike targeting, pixel optimization, and conversion-first campaigns designed to grow your business.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#6400A1] to-[#BB000F] px-8 py-4 text-white font-bold text-sm shadow-xl shadow-purple-200 hover:-translate-y-1 transition-transform"
          >
            Book a Meta Ads Audit <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
