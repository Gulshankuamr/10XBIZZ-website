import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Linkedin,
  Twitter,
  Facebook,
  Sparkles,
  MessageSquare,
  Calendar,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import { getBlogById } from "../services/blogService";

/* ─────────────────────────────────────────────
   Tiny reusable primitives
───────────────────────────────────────────── */

function Tag({ children }) {
  return (
    <span className="inline-block bg-[#F3EDF9] text-[#6400A1] text-[11px] font-semibold px-3 py-1 rounded-md border border-[#6400A1]/10">
      {children}
    </span>
  );
}

function ShareButton({ icon: Icon }) {
  return (
    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-[#6400A1] hover:text-white transition-all duration-200">
      <Icon size={14} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   Content block renderer
───────────────────────────────────────────── */

const HIGHLIGHT_WORDS = new Set(["growth", "conversion", "strategy", "pipeline"]);

function ContentBlock({ block, idx }) {
  if (block.type === "html") {
    return (
      <div
        key={idx}
        className="text-[15px] sm:text-[16px] leading-[1.85] text-slate-600 [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-[#6400A1]"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }

  if (block.type === "heading") {
    return (
      <h2
        key={idx}
        className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-slate-900 pt-6 first:pt-0"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={idx}
        className="relative border-l-4 border-[#6400A1] bg-[#F9F5FF] rounded-r-2xl px-6 py-5 text-base sm:text-lg font-medium italic text-slate-800 my-2"
      >
        "{block.text}"
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={idx} className="my-4 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
        <img
          src={block.src}
          alt={block.alt || "Illustration"}
          className="w-full h-auto max-h-[360px] object-cover rounded-xl"
        />
        {block.alt && (
          <figcaption className="mt-2 text-center text-xs font-medium text-slate-400">
            {block.alt}
          </figcaption>
        )}
      </figure>
    );
  }

  /* Default: paragraph with keyword highlighting */
  return (
    <p key={idx} className="text-[15px] sm:text-[16px] leading-[1.85] text-slate-600">
      {block.text.split(" ").map((word, i, arr) => {
        const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        return (
          <span
            key={`${word}-${i}`}
            className={HIGHLIGHT_WORDS.has(clean) ? "font-bold text-[#6400A1]" : ""}
          >
            {word}
            {i < arr.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Not-found fallback
───────────────────────────────────────────── */

function NotFound() {
  return (
    <section className="bg-[#F7F5FF] mt-[86px] min-h-[60vh] flex items-center justify-center px-6 py-20 font-[Montserrat,sans-serif]">
      <div className="max-w-sm w-full bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#F3EDF9] flex items-center justify-center mx-auto mb-5">
          <MessageSquare size={24} className="text-[#6400A1]" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Post not found</h1>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          The article you're looking for may have been moved or archived.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6400A1] hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={15} /> Back to blog
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await getBlogById(id);
        setPost(res.success ? res.data : null);
        setError("");
      } catch (err) {
        setError("Unable to load this blog right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="bg-[#F7F5FF] mt-[86px] min-h-[60vh] flex items-center justify-center px-6 py-20 font-[Montserrat,sans-serif]">
        <p className="text-sm font-bold text-slate-500">Loading blog...</p>
      </section>
    );
  }

  if (error || !post) return <NotFound />;

  const contentBlocks = post.content
    ? [{ type: "html", html: post.content }]
    : [{ type: "paragraph", text: post.short_description || "" }];
  const displayDate = post.created_at
    ? new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : "";

  const inputBase =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#6400A1]/50 transition-colors";

  return (
    <article className="bg-[#F7F5FF] mt-[86px] min-h-screen pb-28 font-[Montserrat,sans-serif] selection:bg-[#6400A1]/10 selection:text-[#6400A1]">
      <div className="mx-auto max-w-[820px] px-4 py-10 sm:px-6">

        {/* ── Breadcrumb ── */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#6400A1] no-underline hover:opacity-75 transition-opacity group"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to blog
          </Link>
        </div>

        {/* ══════════════════════════════════════
            ARTICLE CARD
        ══════════════════════════════════════ */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 mb-6">

          {/* Header */}
          <header className="space-y-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#F3EDF9] border border-[#6400A1]/10 text-[#6400A1] text-[10px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full">
              <Sparkles size={9} /> {post.category}
            </span>

            <h1 className="text-2xl sm:text-[32px] font-extrabold leading-[1.2] tracking-[-0.02em] text-slate-900">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold">
              <span className="text-slate-800">{post.author}</span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Calendar size={12} /> {displayDate}
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MessageSquare size={12} /> 12 Comments
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock size={12} /> 5 min read
              </span>
            </div>
          </header>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 mb-8">
            <img
              src={post.featured_image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto max-h-[420px] object-cover"
            />
          </div>

          {/* Article body */}
          <section className="space-y-5">
            {contentBlocks.map((block, idx) => (
              <ContentBlock key={idx} block={block} idx={idx} />
            ))}
          </section>

          {/* Footer: tags + share */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-1">
                Tags:
              </span>
              {["Fashion", "Strategy", "Lifestyle"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ShareButton icon={Linkedin} />
              <ShareButton icon={Twitter} />
              <ShareButton icon={Facebook} />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            AUTHOR CARD
        ══════════════════════════════════════ */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 mb-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
            alt={post.author}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
          />
          <div className="flex-1 space-y-1.5">
            <h4 className="text-sm font-bold text-slate-900">{post.author}</h4>
            <p className="text-xs leading-relaxed text-slate-500 max-w-lg">
              Senior strategy content specialist and tech author. Writes implementation guides focusing on
              system performance and layout optimization metrics globally.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#6400A1] hover:underline mt-1"
            >
              View all posts <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════
            COMMENT FORM
        ══════════════════════════════════════ */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 mb-6 space-y-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">Write a comment</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className={inputBase}
            />
            <input
              type="email"
              placeholder="Email *"
              value={commentEmail}
              onChange={(e) => setCommentEmail(e.target.value)}
              className={inputBase}
            />
          </div>

          <textarea
            rows={4}
            placeholder="Type your message here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className={`${inputBase} resize-none`}
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 bg-[#6400A1] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all"
          >
            <Send size={12} /> Post comment
          </button>
        </div>

        {/* ══════════════════════════════════════
            PREV / NEXT NAV
        ══════════════════════════════════════ */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-100 rounded-2xl p-5 space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <ArrowLeft size={10} /> Previous post
            </span>
            <a
              href="#"
              className="block text-xs font-bold text-slate-800 hover:text-[#6400A1] transition-colors leading-snug line-clamp-2"
            >
              The evolutionary matrix of digital architecture design
            </a>
          </div>

          <div className="bg-[#6400A1] rounded-2xl p-5 space-y-1.5 text-right">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center justify-end gap-1">
              Next post <ArrowRight size={10} />
            </span>
            <a
              href="#"
              className="block text-xs font-bold text-white hover:underline leading-snug line-clamp-2"
            >
              Maximizing conversions with native micro-interactions layout
            </a>
          </div>
        </nav>

        {/* ══════════════════════════════════════
            RELATED POSTS
        ══════════════════════════════════════ */}
        <section>
          <h3 className="text-base font-bold text-slate-900 mb-4">
            Related <span className="text-[#6400A1]">posts</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "The modern creative system layout blueprint",
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
                cat: "Fashion",
              },
              {
                title: "Optimizing micro-infrastructure architecture",
                img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&auto=format&fit=crop",
                cat: "Strategy",
              },
              {
                title: "Strategic resource management realignment",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=300&auto=format&fit=crop",
                cat: "Business",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-3 space-y-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#6400A1]">
                    {item.cat}
                  </span>
                  <h5 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2 hover:text-[#6400A1] cursor-pointer transition-colors">
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
