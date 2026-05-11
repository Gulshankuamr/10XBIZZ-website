import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "./data";

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const imageContainerVariants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// ─── FeatureHighlightCard ─────────────────────────────────────────────────────

const FeatureHighlightCard = React.forwardRef(
  (
    { imageSrc, imageAlt = "Feature image", title, description, buttonText, buttonHref, className },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={`relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-[0_20px_48px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_56px_rgba(100,0,161,0.13)] ${className ?? ""}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Glow behind */}
        <div className="absolute left-1/2 top-0 -z-10 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[linear-gradient(125.94deg,rgba(100,0,161,0.13)_0%,rgba(187,0,15,0.08)_100%)]" />

        {/* Image */}
        <motion.div variants={imageContainerVariants} className="mb-5 flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-48 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-[20px] font-black leading-snug tracking-tight text-slate-900 md:text-[23px]"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-3 text-sm font-medium leading-relaxed text-slate-500"
        >
          {description}
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants} className="mt-6">
          {buttonHref ? (
            <Link to={buttonHref}>
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
                {buttonText} <ArrowUpRight size={15} />
              </button>
            </Link>
          ) : (
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
              {buttonText} <ArrowUpRight size={15} />
            </button>
          )}
        </motion.div>
      </motion.div>
    );
  }
);
FeatureHighlightCard.displayName = "FeatureHighlightCard";

// ─── List Page ────────────────────────────────────────────────────────────────

export default function List() {
  return (
    <section className="bg-[#F8F9FF] font-[Montserrat,ui-sans-serif,system-ui,sans-serif]">

      {/* ── Full-Width Hero with BG Image ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        variants={fadeUp}
        className="relative overflow-hidden min-h-[480px]"
      >
        {/* BG photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.58)_0%,rgba(2,6,23,0.76)_55%,rgba(2,6,23,0.94)_100%)]" />

        {/* Grain texture */}
     

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center text-white md:py-32 mt-[86px]">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200 backdrop-blur-sm"
          >
            Case Study Insights
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-white"
          >
            Growth stories powered by{" "}
            <span className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] bg-clip-text text-transparent">
              marketing systems
            </span>{" "}
            that actually scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/80 sm:text-base"
          >
            Real campaign journeys from performance marketing, content marketing, and
            full-funnel execution. Open any card to see strategy breakdowns, execution
            details, and measurable outcomes.
          </motion.p>
        </div>
      </motion.div>

      {/* ── Featured Highlights Section ── */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 sm:px-10 lg:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6400A1]">
            Featured Highlights
          </p>
          <h2 className="mt-1 text-[26px] font-black tracking-tight text-slate-900 sm:text-[32px]">
            Top Case Studies
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13 } },
          }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.slug} variants={fadeUp} transition={{ duration: 0.45 }}>
              <FeatureHighlightCard
                imageSrc={study.coverImage}
                imageAlt={study.title}
                title={study.title}
                description={study.excerpt}
                buttonText="Read Case Study"
                buttonHref={`/case-studies/${study.slug}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Latest Case Studies Grid ── */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Header */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6400A1]">
                All Articles
              </p>
              <h2 className="mt-1 text-[26px] font-black leading-tight tracking-tight text-slate-900 sm:text-[34px] lg:text-[40px]">
                Latest Case Studies
              </h2>
              <p className="mt-2 max-w-xl text-sm font-medium text-slate-500 sm:text-[15px]">
                Actionable playbooks on paid growth, content distribution, conversion, and
                marketing operations.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <motion.article
                key={study.slug}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="group h-full rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_56px_rgba(15,23,42,0.16)]"
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                >
                  {/* Cover image */}
                  <div className="overflow-hidden">
                    <img
                      src={study.coverImage}
                      alt={study.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between text-xs font-bold text-[#6400A1]">
                      <span className="uppercase tracking-wide">{study.category}</span>
                      <span className="font-semibold text-slate-400">{study.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-[21px] font-extrabold leading-snug tracking-tight text-slate-900">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                      {study.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold text-white bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] transition-all duration-200 group-hover:gap-2.5">
                        Read details <ArrowUpRight size={15} />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}