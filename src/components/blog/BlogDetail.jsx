import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "./data";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-[#F8F9FF] mt-[86px] px-6 py-20 text-center font-[Montserrat,sans-serif]">
        <h1 className="text-4xl font-bold text-slate-900">Blog not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6400A1]">
          <ArrowLeft size={14} /> Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="bg-[#F8F9FF] mt-[86px] font-[Montserrat,sans-serif]">
      <div className="mx-auto max-w-[1120px] px-6 py-14 sm:px-10 lg:px-14">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#6400A1] no-underline">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <header className="mt-6">
          <span className="inline-flex rounded-full border border-[#6400A1]/20 bg-[#6400A1]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6400A1]">
            {post.category}
          </span>
          <h1 className="mt-4 text-[clamp(2rem,4.2vw,3.6rem)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-slate-500">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/70 shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
          <img src={post.thumbnail} alt={post.title} className="h-[320px] w-full object-cover sm:h-[420px]" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,250px]">
          <section className="space-y-6 text-[17px] leading-8 text-slate-700">
            {post.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2 key={idx} className="text-3xl font-bold leading-tight tracking-[-0.02em] text-slate-900">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="rounded-2xl border-l-4 border-[#6400A1] bg-white p-6 text-xl font-semibold italic text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.07)]"
                  >
                    {block.text}
                  </blockquote>
                );
              }

              if (block.type === "image") {
                return (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-black/5">
                    <img src={block.src} alt={block.alt} className="h-[280px] w-full object-cover sm:h-[360px]" />
                  </div>
                );
              }

              return (
                <p key={idx}>
                  {block.text.split(" ").map((word, index) => {
                    const trimmed = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
                    const highlight = ["growth", "conversion", "strategy", "pipeline"].includes(trimmed);
                    return (
                      <span key={`${word}-${index}`} className={highlight ? "font-bold text-[#6400A1]" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </section>

          <aside className="h-fit rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] lg:sticky lg:top-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">Share</p>
            <p className="mt-2 text-sm font-medium text-slate-600">Save this article and share with your team.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700">
              <span className="rounded-xl border border-slate-200 px-2 py-2">LI</span>
              <span className="rounded-xl border border-slate-200 px-2 py-2">X</span>
              <span className="rounded-xl border border-slate-200 px-2 py-2">FB</span>
            </div>
            <blockquote className="mt-5 rounded-xl bg-[#6400A1]/5 p-4 text-sm font-semibold leading-[1.7] text-slate-700">
              {post.highlightQuote}
            </blockquote>
          </aside>
        </div>
      </div>
    </article>
  );
}
