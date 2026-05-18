import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "./data";

export default function Detail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <section className="bg-[#F8F9FF] mt-[86px] px-6 py-20 text-center font-[Montserrat,sans-serif]">
        <h1 className="text-4xl font-bold text-slate-900">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6400A1]">
          <ArrowLeft size={14} /> Back to case studies
        </Link>
      </section>
    );
  }

  return (
    <article className="bg-[#F8F9FF] mt-[86px] font-[Montserrat,sans-serif]">
      <div className="mx-auto max-w-[1180px] px-6 py-14 sm:px-10 lg:px-16">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-[#6400A1] no-underline">
          <ArrowLeft size={14} /> Back to case studies
        </Link>

        <header className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_20px_48px_rgba(15,23,42,0.1)]">
          <div className="h-[290px] sm:h-[380px]">
            <img src={study.coverImage} alt={study.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-7 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">{study.category}</p>
            <h1 className="mt-2 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900">{study.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-slate-500">
              <span>{study.industry}</span>
              <span>{study.readTime}</span>
              <span className="font-bold text-[#6400A1]">{study.resultPercent}</span>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <article className="rounded-3xl border border-white/60 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Problem</p>
            <p className="mt-3 text-[17px] leading-8 text-slate-700">{study.problem}</p>
          </article>

          <article className="rounded-3xl border border-white/60 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Strategy</p>
            <p className="mt-3 text-[17px] leading-8 text-slate-700">{study.strategy}</p>
          </article>
        </section>

        <section className="mt-6 rounded-3xl border border-white/60 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Execution Timeline</p>
          <div className="mt-5 space-y-3">
            {study.execution.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-[#F8F9FF] p-4">
                <p className="text-sm font-bold text-[#6400A1]">Phase {idx + 1}</p>
                <p className="mt-1 text-sm font-medium leading-[1.7] text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <article className="rounded-3xl border border-white/60 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Results</p>
            <p className="mt-3 text-[17px] leading-8 text-slate-700">{study.results}</p>
          </article>

          <article className="rounded-3xl border border-white/60 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Metrics</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[#6400A1]/15 bg-[linear-gradient(125.94deg,rgba(100,0,161,0.08)_0%,rgba(187,0,15,0.06)_100%)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#6400A1]">{metric.value}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 rounded-3xl border border-[#6400A1]/20 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Final Outcome</p>
          <p className="mt-3 text-[18px] font-semibold leading-8 text-slate-800">{study.finalOutcome}</p>
        </section>
      </div>
    </article>
  );
}
