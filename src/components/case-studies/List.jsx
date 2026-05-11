import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

export default function List() {
  return (
    <section className="bg-[#F8F9FF] font-['Montserrat']">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        variants={fadeUp}
        className="relative overflow-hidden"
        style={{ minHeight: 520 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/75 to-slate-950/90" />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center text-white md:py-28 mt-[86px]">
     

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-4xl text-[32px] font-extrabold leading-[1.1] text-white md:text-[42px] lg:text-[52px]"
          >
            Growth stories powered by <span className="highlight-span">marketing systems</span> that actually scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="body-copy mt-5 max-w-2xl text-white/85"
          >
            Real campaign journeys from performance marketing, content marketing, and full-funnel execution. Open any card to see
            strategy breakdowns, execution details, and measurable outcomes.
          </motion.p>

        </div>
      </motion.div>

      <div className="container-page px-6 py-25 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="heading-main text-[32px] md:text-[42px] lg:text-[52px]">Latest Blogs</h2>
              <p className="body-copy mt-2 max-w-xl">
                Actionable playbooks on paid growth, content distribution, conversion, and marketing operations.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <motion.article key={study.slug} variants={fadeUp} transition={{ duration: 0.45 }} className="group h-full">
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_48px_rgba(15,23,42,0.16)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={study.coverImage}
                      alt={study.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-xs font-bold text-[#6400A1]">
                      <span className="uppercase tracking-wide ">{study.category}</span>
                      <span className="font-semibold text-slate-400">{study.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-[24px] font-extrabold leading-[1.2] text-[#111111]">{study.title}</h3>
                    <p className="body-copy mt-3">{study.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-base font-bold text-white">
                      <span className="rounded-full bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] px-4 py-2">
                        Read details <ArrowUpRight size={16} className="ml-1 inline" />
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