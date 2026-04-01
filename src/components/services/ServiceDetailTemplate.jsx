import { Link } from "react-router-dom";

export function ServiceHero({ eyebrow, title, description }) {
  return (
    <section className="bg-[#f6f7fb] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex rounded-full border border-[#dbe3f2] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1a4ea6]">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-black text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.03em] text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#4e556d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
      </div>
    </section>
  );
}

export function ServiceFeatures({ heading, items }) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.05] text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
          {heading}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#e2e6ef] bg-[#f8fafc] p-7 shadow-[0_18px_50px_rgba(13,19,38,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a4ea6]">{item.label}</p>
              <h3 className="mt-4 text-2xl font-bold text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#4e556d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA({ title, description }) {
  return (
    <section className="bg-[#0d1326] px-6 py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-extrabold leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-[#E8002A] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white no-underline shadow-[0_18px_40px_rgba(232,0,42,0.35)]"
        >
          Book A Strategy Call
        </Link>
      </div>
    </section>
  );
}
