import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getAllCaseStudies } from "../services/caseStudyService";

export default function List() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        const res = await getAllCaseStudies();
        setCaseStudies(res.success && Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError("Unable to load case studies right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <section className="bg-[#F8F9FF] mt-[86px] font-[Montserrat,sans-serif]">
      <div className="relative overflow-hidden bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.17),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-white sm:px-10 lg:px-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-white/75">Case Studies</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Real Client Growth Stories
          </h1>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-[1.7] text-white/85 sm:text-base">
            Practical breakdowns of strategy, execution, and measurable outcomes across industries.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {loading && (
            <div className="col-span-full rounded-3xl border border-white/60 bg-white p-8 text-center text-sm font-bold text-slate-500">
              Loading case studies...
            </div>
          )}

          {!loading && error && (
            <div className="col-span-full rounded-3xl border border-red-100 bg-white p-8 text-center text-sm font-bold text-red-500">
              {error}
            </div>
          )}

          {!loading && !error && caseStudies.map((study, index) => (
            <motion.article
              key={study.case_study_id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_56px_rgba(100,0,161,0.15)]"
            >
              <Link to={`/case-studies/${study.case_study_id}`} className="no-underline">
                <div className="relative h-48 overflow-hidden">
                  <img src={study.featured_image || "/placeholder.svg"} alt={study.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                    {study.industry}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-[#6400A1]">{study.client_name || "Client Growth"}</p>
                  <h2 className="mt-2 text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-slate-900">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-sm font-medium leading-[1.7] text-slate-600">{study.short_description}</p>

                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 group-hover:gap-3">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
