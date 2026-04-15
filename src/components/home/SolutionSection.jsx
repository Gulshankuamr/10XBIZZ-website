import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  BarChart3,
  Database,
  MessageSquare,
  MousePointerClick,
  Sparkles,
  Target
} from 'lucide-react';

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const steps = useMemo(
    () => [
      {
        id: '01',
        title: 'Attract High-Intent Leads',
        icon: Target,
        color: '#7c2a9b',
        tint: 'bg-[#f3e8ff]',
        cardBg: 'bg-[#f4f0f8]',
        orb: 'bg-[#d8c5e8]',
        description:
          'We bring in people who are actively looking for your services - not just random clicks, but real potential customers ready to take action.',
        micro: 'Qualified traffic only'
      },
      {
        id: '02',
        title: 'Capture & Organize',
        icon: Database,
        color: '#dc2626',
        tint: 'bg-[#fef2f2]',
        cardBg: 'bg-[#f8f1f2]',
        orb: 'bg-[#f1c9d0]',
        description:
          'Every lead is automatically captured and stored in a structured system, so nothing gets lost and everything stays easy to manage.',
        micro: 'Zero lead leakage'
      },
      {
        id: '03',
        title: 'Automate Follow-Ups',
        icon: MessageSquare,
        color: '#059669',
        tint: 'bg-[#ecfdf5]',
        cardBg: 'bg-[#ecf7f1]',
        orb: 'bg-[#bae7cf]',
        description:
          "Instant responses through WhatsApp, SMS, or email ensure every enquiry is handled quickly - even when you're busy.",
        micro: 'Replies in seconds'
      },
      {
        id: '04',
        title: 'Convert & Optimize',
        icon: BarChart3,
        color: '#4f46e5',
        tint: 'bg-[#eef2ff]',
        cardBg: 'bg-[#edf0fb]',
        orb: 'bg-[#c8d1f6]',
        description:
          'We help you turn leads into paying customers while continuously improving performance for better results and higher ROI.',
        micro: 'Continuous scaling'
      }
    ],
    []
  );

  const flowItems = [
    { label: 'Attract', icon: MousePointerClick },
    { label: 'Capture', icon: Database },
    { label: 'Automate', icon: MessageSquare },
    { label: 'Optimize', icon: BarChart3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f5f7ff] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-14 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#6f007a]/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-[#6f007a]" />
            <span className="text-sm font-semibold tracking-wide text-[#6f007a]">CORE FEATURES</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
          >
            Introducing The{' '}
            <span className="bg-gradient-to-r from-[#6f007a] to-[#9b1d9b] bg-clip-text text-transparent">
              10x Growth System
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            A streamlined lead engine that attracts, captures, follows up, and converts automatically.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
          className="relative mb-14 overflow-hidden rounded-3xl border border-[#e4e6ef] bg-[#f4f5fa] px-6 py-10 shadow-[0_16px_44px_rgba(15,23,42,0.09)] sm:px-10"
        >
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#2c2d42]">
            Main Conversion Flow
          </p>

          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 pt-2 md:grid-cols-4 md:gap-x-8">
            {flowItems.map((item, idx) => {
              const FlowIcon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ y: 22, opacity: 0 }}
                  animate={controls}
                  variants={itemVariants}
                  transition={{ delay: idx * 0.08 }}
                  className="relative text-center"
                >
                  {idx < flowItems.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0.9 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.65, delay: 0.25 + idx * 0.12 }}
                      className="pointer-events-none absolute left-[58%] top-[6px] hidden h-24 w-[86%] rounded-[90px] border-[3px] border-[#dddded] border-b-0 md:block"
                    />
                  )}

                  <div className="mx-auto mb-4 flex h-36 w-36 items-center justify-center rounded-full border-[4px] border-[#dddeec]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[#7a138f] bg-white shadow-[0_12px_24px_rgba(122,19,143,0.17)]"
                    >
                      <FlowIcon className="h-10 w-10 text-[#7a138f]" strokeWidth={1.9} />
                    </motion.div>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#777792]">Step {idx + 1}</div>
                  <div className="mt-1 text-lg font-semibold text-[#1f2034]">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <motion.article
                key={step.id}
                variants={itemVariants}
                onHoverStart={() => setActiveStep(idx)}
                onHoverEnd={() => setActiveStep(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative overflow-hidden rounded-[28px] border border-slate-100 p-7 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-300 ${step.cardBg}`}
              >
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-90 ${step.orb}`} />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.tint}`}>
                      <Icon className="h-7 w-7" style={{ color: step.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Step {step.id}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-slate-600">{step.description}</p>

                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.75 }}
                    className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Outcome</div>
                    <div className="mt-1 font-semibold" style={{ color: step.color }}>
                      {step.micro}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ width: '24%' }}
                  animate={{ width: isActive ? '100%' : '24%' }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-0 left-0 h-1.5 rounded-r-full"
                  style={{ backgroundColor: step.color }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
