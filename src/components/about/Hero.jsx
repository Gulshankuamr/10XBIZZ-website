

import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Zap } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};


export default function AboutHero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]
        px-6 sm:px-10 pt-12 pb-0
        min-h-screen
        font-['Montserrat',ui-sans-serif,system-ui,sans-serif]
      "
    >

      {/* ── Background decorative blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-indigo-200/30 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-[90px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-100/50 blur-[80px]" />
      </div>

      {/* ── Main Content ── */}
      <motion.main
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full"
      >

        {/* ── Badge ── */}
        <motion.button
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          type="button"
          className="
            mt-10 mb-7
            flex items-center gap-2
            border border-indigo-500 text-indigo-600
            text-[11px] md:text-[12px] font-bold tracking-[0.04em]
            rounded-full px-4 pr-1.5 py-1.5
            hover:bg-indigo-50 transition-colors
          "
        >
          We Build Growth 
          <span className="flex items-center justify-center size-6 rounded-full bg-indigo-600 flex-shrink-0">
            <svg width="12" height="10" viewBox="0 0 16 13" fill="none">
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>

        {/* ── H1 Headline ── */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="
            text-center text-[#111111] font-extrabold
            text-[32px] md:text-[42px] lg:text-[52px]
            leading-[1.1] tracking-tight
            max-w-3xl
          "
        >
        Systems  Not Just 
{" "}
          <span className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] bg-clip-text text-transparent">
            Marketing Campaigns
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q50 1 100 4 Q150 7 200 3"
                stroke="#6366f1"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          in every industry
        </motion.h1>

        {/* ── Subheadline ── */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="
            mt-5 text-center text-[#667085]
            max-w-xl
            text-base md:text-[17px]
            leading-[1.8] font-normal
          "
        >
         At 10xBizz, we help businesses generate leads, automate follow-ups, and convert enquiries into real customers through strategy-driven systems.
        </motion.p>

  
     

        {/* ── Hero Image ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 w-full max-w-5xl relative"
        >
          {/* Glow under image */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-indigo-300/25 blur-2xl rounded-full" />

   

          <img
            className="rounded-[32px] rounded-b-none w-full h-72 sm:h-96 object-cover relative z-0"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop"
            alt="Marketing team collaborating"
          />
        </motion.div>

      </motion.main>
    </section>
  );
}