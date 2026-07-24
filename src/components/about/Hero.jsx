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

        {/* ── H1 Headline ── */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="
            text-center text-[#111111] font-bold
            text-[32px] md:text-[42px] lg:text-[52px]
            leading-[1.1] tracking-[-0.02em]
            max-w-3xl mt-28 mb-7
          "
        >
          Marketing Gets Attention. <br />
          <span className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] bg-clip-text text-transparent relative">
            Systems Build Businesses.
          
          </span>
        </motion.h1>

        {/* ── Subheadline ── */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="
            mt-2 text-center text-gray-900
            max-w-2xl
            text-base md:text-[17px]
            leading-[1.8] font-normal
          "
        >
          We connect ads, leads, CRM, automation and sales into one intelligent growth system—turning more opportunities into customers and creating a clear path to scalable growth.
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