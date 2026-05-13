import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogCategories, blogPosts } from "./data";

const INITIAL_VISIBLE = 6;
const LOAD_MORE_STEP = 3;

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section className="bg-[#F8F9FF] mt-[86px] font-[Montserrat,sans-serif]">
      <div className="relative overflow-hidden border-b border-black/5 bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_44%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-white sm:px-10 lg:px-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-white/70">Blog</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-tight">
            Insights & Growth Stories
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/85 sm:text-base">
            Practical ideas on marketing, branding, SEO, and growth systems designed for consistent business outcomes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-16">
        <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
          {blogCategories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(INITIAL_VISIBLE);
                }}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200"
                style={{
                  borderColor: active ? "rgba(100,0,161,0.2)" : "rgba(100,0,161,0.2)",
                  color: hoveredCategory === category || active ? "#000000" : "#6400A1",
                  background: active
                    ? "linear-gradient(125.94deg,rgba(100,0,161,0.12)_0%,rgba(187,0,15,0.1)_100%)"
                    : "rgba(255,255,255,0.92)",
                  boxShadow: active ? "0 8px 22px rgba(100,0,161,0.16)" : "none",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_rgba(100,0,161,0.16)]"
            >
              <Link to={`/blog/${post.slug}`} className="no-underline">
                <div className="overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-[#6400A1]/20 bg-[#6400A1]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6400A1]">
                    {post.category}
                  </span>
                  <h2 className="mt-4 text-[22px] font-black leading-[1.2] tracking-tight text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 group-hover:gap-3">
                    Read More <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((count) => count + LOAD_MORE_STEP)}
            disabled={!hasMore}
            className="rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)",
              boxShadow: hasMore ? "0 10px 25px rgba(100,0,161,0.28)" : "none",
              opacity: hasMore ? 1 : 0.55,
              cursor: hasMore ? "pointer" : "not-allowed",
            }}
          >
            {hasMore ? "Load More" : "More blogs coming soon"}
          </button>
        </div>
      </div>
    </section>
  );
}
