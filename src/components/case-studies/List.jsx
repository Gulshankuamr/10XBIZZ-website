import { Link } from "react-router-dom";

const studies = [
  { slug: "crm-rebuild", title: "CRM Rebuild for a High-Velocity Sales Team", excerpt: "A lifecycle automation project that improved response speed and pipeline hygiene." },
  { slug: "meta-funnel-scale", title: "Meta + Funnel Scale for a Service Brand", excerpt: "A paid social system that connected creative testing to booked calls." },
];

export default function List() {
  return (
    <section className="bg-[#f6f7fb] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-[clamp(2.6rem,5vw,4.5rem)] font-black tracking-[-0.03em] text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
          Case studies that show how strategy turns into pipeline.
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {studies.map((study) => (
            <article key={study.slug} className="rounded-[28px] border border-[#e2e6ef] bg-white p-8 shadow-[0_18px_40px_rgba(13,19,38,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a4ea6]">Case Study</p>
              <h2 className="mt-4 text-2xl font-extrabold text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
                {study.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#4e556d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {study.excerpt}
              </p>
              <Link to={`/case-studies/${study.slug}`} className="mt-6 inline-flex text-sm font-bold text-[#1a4ea6] no-underline">
                Open case study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
