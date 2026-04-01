import { Link, useParams } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a4ea6]">Blog Detail</p>
        <h1 className="mt-6 text-[clamp(2.4rem,5vw,4rem)] font-black tracking-[-0.03em] text-[#0d1326]" style={{ fontFamily: "'Syne', sans-serif" }}>
          {slug?.replace(/-/g, " ")}
        </h1>
        <p className="mt-6 text-base leading-8 text-[#4e556d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          This route is ready for a future dynamic CMS or markdown pipeline. For now, it proves the SEO-friendly detail URL structure and keeps the page layer clean.
        </p>
        <Link to="/blog" className="mt-8 inline-flex text-sm font-bold text-[#1a4ea6] no-underline">
          Back to blog
        </Link>
      </div>
    </section>
  );
}
