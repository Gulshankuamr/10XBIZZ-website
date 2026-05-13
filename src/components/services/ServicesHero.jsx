import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Zap, ArrowRight, PlayCircle, CheckCircle2, MessageCircle } from "lucide-react";
import  HeroActionButton  from "../ui/HeroActionButton";

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
        px-6 sm:px-10 pt-12 pb-0 my-20
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
        {/* ── Badge (Hook) ── */}
        <motion.button
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="
            my-4
            flex items-center gap-2
            border border-indigo-500/30 bg-indigo-50/50 text-indigo-600
            text-[11px] md:text-[12px] font-bold tracking-[0.05em] uppercase
            rounded-full px-4 py-1.5
          "
        >
          Scale Your Business ⚡
        </motion.button>

        {/* ── H1 Headline (Hook + Clarity) ── */}
     <motion.h1
  variants={fadeUp}
  transition={{ duration: 0.6 }}
  className="
    text-center text-[#111111]
    font-bold
    text-[34px] md:text-[50px] lg:text-[58px]
    leading-[1.05]
    tracking-[-0.02em]
    max-w-[900px]
    mx-auto
  "
>
  Turn Your Leads Into 
  Paying Customers
  <span className="relative block md:inline-block md:ml-3 bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] bg-clip-text text-transparent">
    — Automatically
  </span>
</motion.h1>

        {/* ── Subheadline ── */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="
            mt-6 text-center text-[#667085]
            max-w-2xl
            text-base md:text-[18px]
            leading-[1.7] font-medium
          "
        >
          We help businesses generate high-quality leads, organize them in CRM, and automate follow-ups — so you never miss a potential customer.
        </motion.p>

        {/* ── Benefits List (Value Props) ── */}
        <motion.div 
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            "Generate more qualified leads",
            "Never miss a follow-up",
            "Convert more customers"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[#111111] font-semibold text-sm md:text-base">
              <CheckCircle2 className="text-green-500 size-5" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div 
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4 px-4 w-full"
        >
          <HeroActionButton className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-base flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95">
            Book Free Strategy Call
            <ArrowRight size={20} />
          </HeroActionButton>
          
          <HeroActionButton className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-100 active:scale-95">
            <MessageCircle size={20} fill="currentColor" className="text-white" />
            Chat on WhatsApp
          </HeroActionButton>
        </motion.div>

        {/* ── Hero Image ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 w-full max-w-5xl relative"
        >
          {/* Subtle decoration behind image */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl" />
          
          <img
            className="rounded-[32px] rounded-b-none w-full h-[300px] md:h-[500px] object-cover relative z-0 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.15)] border-x border-t border-white"
            src="/googleservish.webp"
            alt="Lead generation automation dashboard"
          />
        </motion.div>

      </motion.main>
    </section>
  );
}