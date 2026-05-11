import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Detail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap'); .detail-section * { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; }`}</style>
        <section className="detail-section bg-[#F8F9FF]">
          <div className="container-page px-6 py-16 text-center md:py-24">
            <h1 className="text-[32px] font-black md:text-[42px] text-slate-900">Case study not found</h1>
            <p className="mt-4 text-slate-500 font-medium">The requested page does not exist in the current static dataset.</p>
            <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#6400A1]">
              <ArrowLeft size={16} /> Back to case studies
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

        .detail-section * {
          font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
        }

        .hero-gradient {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        /* Dot grid texture over gradient */
        .hero-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        /* Glow blob top-right */
        .hero-blob-1 {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          filter: blur(90px);
          top: -130px;
          right: -100px;
          pointer-events: none;
        }

        /* Glow blob bottom-left */
        .hero-blob-2 {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          filter: blur(70px);
          bottom: -80px;
          left: 4%;
          pointer-events: none;
        }

        .strategy-item {
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .strategy-item:hover {
          border-color: rgba(100, 0, 161, 0.3);
          background: #fff;
        }

        .result-item {
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .result-item:hover {
          transform: translateY(-2px);
          border-color: rgba(100, 0, 161, 0.22);
        }

        .back-btn {
          transition: border-color 0.2s, background 0.2s;
        }
        .back-btn:hover {
          border-color: #94a3b8;
          background: #f8fafc;
        }
      `}</style>

      <section className="detail-section bg-[#F8F9FF] mt-[86px]">

        {/* ── Full-Width Gradient Hero (no bg image) ── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="hero-gradient"
        >
          {/* Decorative blobs */}
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />

          {/* Hero Content */}
          <div
            className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 md:px-16 lg:px-24"
            style={{ minHeight: 280 }}
          >
            {/* Badges row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                {study.category}
              </span>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                {study.readTime}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-4xl text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-white"
            >
              {study.title}
            </motion.h1>

            {/* Sub description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-4 max-w-2xl text-sm sm:text-[15px] leading-relaxed font-medium"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Deep-dive execution notes, campaign architecture, and measurable outcomes from real marketing growth projects.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Content Cards ── */}
        <div className="container-page px-6 py-12 md:py-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {/* Challenge */}
            <motion.article
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_28px_rgba(15,23,42,0.07)] lg:col-span-1"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">
                Context
              </p>
              <h2 className="mt-2 text-[22px] sm:text-[26px] font-black leading-[1.15] text-slate-900 tracking-tight">
                The Challenge
              </h2>
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600 font-medium">
                {study.problem}
              </p>
            </motion.article>

            {/* Execution Strategy */}
            <motion.article
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_28px_rgba(15,23,42,0.07)] lg:col-span-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">
                Approach
              </p>
              <h2 className="mt-2 text-[22px] sm:text-[26px] font-black leading-[1.15] text-slate-900 tracking-tight">
                Execution Strategy
              </h2>
              <div className="mt-5 space-y-3">
                {study.strategy.map((item) => (
                  <div
                    key={item}
                    className="strategy-item flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#fcfcff] p-4"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#6400A1]" />
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Outcomes */}
            <motion.article
              variants={fadeUp}
              className="rounded-3xl border border-[#6400A1]/15 bg-white p-6 sm:p-8 shadow-[0_10px_28px_rgba(15,23,42,0.07)] lg:col-span-3"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#6400A1]">
                Impact
              </p>
              <h2 className="mt-2 text-[22px] sm:text-[26px] font-black leading-[1.15] text-slate-900 tracking-tight">
                Outcomes
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {study.results.map((item) => (
                  <div
                    key={item}
                    className="result-item rounded-2xl border border-slate-200 bg-[#F8F9FF] p-4"
                  >
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="mt-10"
          >
            <Link
              to="/case-studies"
              className="back-btn inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-800"
            >
              <ArrowLeft size={16} /> Back to all blogs
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}