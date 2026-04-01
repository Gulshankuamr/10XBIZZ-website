import { Link } from "react-router-dom";

const posts = [
  { slug: "marketing-ops-playbook", title: "The Marketing Ops Playbook for Fast-Growing Teams", excerpt: "A practical system for aligning CRM, ads, and reporting as you scale." },
  { slug: "lead-response-speed", title: "Why Lead Response Speed Still Wins in 2026", excerpt: "The gap between inquiry and first touch often decides whether pipeline gets created." },
  { slug: "creative-testing-systems", title: "Creative Testing Systems That Prevent Ad Fatigue", excerpt: "A repeatable cadence for shipping better hooks, offers, and landing page angles." },
];

export default function BlogList() {
  return (
    <section className="bg-[#f6f7fb] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-[clamp(2.6rem,5vw,4.5rem)] font-black tracking-[-0.03em] text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
          Insights for teams building scalable growth systems.
        </h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-[28px] border border-[#e2e6ef] bg-white p-8 shadow-[0_18px_40px_rgba(13,19,38,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a4ea6]">Blog</p>
              <h2 className="mt-4 text-2xl font-extrabold text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#4e556d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-bold text-[#1a4ea6] no-underline">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
