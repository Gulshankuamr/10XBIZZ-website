import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FiAlertTriangle,
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiMessageCircle,
  FiRepeat,
  FiTarget,
  FiBarChart2,
  FiClock,
  FiCheckCircle,
  FiSettings,
} from 'react-icons/fi';

// ── Data ──────────────────────────────────────────────────────────────
const chaosItems = [
  {
    id: 1,
    title: "Leads Come In, But Nobody Responds Fast",
    desc: "Potential customers lose interest when responses are delayed.",
    icon: FiClock,
    cardTitle: "Slow Responses Kill Conversions",
    cardDesc: "Most leads choose the business that responds first. Delayed follow-ups reduce trust, lower engagement, and increase customer drop-offs.",
    impact: "⚠️ Lost Leads & Missed Revenue",
  },
  {
    id: 2,
    title: "No System To Track Enquiries",
    desc: "Leads are scattered across calls, WhatsApp, forms, and spreadsheets.",
    icon: FiBarChart2,
    cardTitle: "Disorganized Leads Create Revenue Leakage",
    cardDesc: "Without a centralized system, businesses lose visibility on follow-ups, customer history, and conversion progress.",
    impact: "⚠️ Poor Follow-Up Tracking",
  },
  {
    id: 3,
    title: "Ad Spend But No ROI Visibility",
    desc: "Running campaigns without proper tracking wastes marketing budget.",
    icon: FiTarget,
    cardTitle: "No Tracking Means No Growth Clarity",
    cardDesc: "Without conversion tracking and analytics, businesses struggle to identify what's working and where leads actually come from.",
    impact: "⚠️ Wasted Marketing Budget",
  },
  {
    id: 4,
    title: "WhatsApp Chats Get Lost",
    desc: "Important conversations disappear inside crowded inboxes.",
    icon: FiMessageCircle,
    cardTitle: "Missed Conversations Reduce Conversions",
    cardDesc: "When customer chats are unmanaged, businesses miss follow-ups, delay responses, and lose sales opportunities.",
    impact: "⚠️ Low Customer Retention",
  },
  {
    id: 5,
    title: "Manual Follow-Ups Waste Time",
    desc: "Teams spend hours manually replying, reminding, and updating leads.",
    icon: FiRepeat,
    cardTitle: "Manual Work Slows Business Growth",
    cardDesc: "Without automation, businesses struggle to scale lead management efficiently while maintaining consistent customer communication.",
    impact: "⚠️ Reduced Team Productivity",
  },
];

const edgeItems = [
  {
    id: 1,
    title: "Instant Lead Response System",
    desc: "Automatically engage leads the moment they enquire.",
    icon: FiZap,
    cardTitle: "Faster Responses Improve Conversions",
    cardDesc: "Automated follow-ups and instant notifications help businesses respond quickly and engage leads before competitors do.",
    impact: "✅ Faster Lead Engagement",
  },
  {
    id: 2,
    title: "Centralized CRM Management",
    desc: "Manage all enquiries from one organized dashboard.",
    icon: FiTrendingUp,
    cardTitle: "Every Lead Tracked In One Place",
    cardDesc: "A structured CRM system keeps conversations, customer history, and follow-up progress fully organized.",
    impact: "✅ Better Lead Visibility",
  },
  {
    id: 3,
    title: "Conversion Tracking & Analytics",
    desc: "Understand which campaigns generate real business results.",
    icon: FiTarget,
    cardTitle: "Smarter Decisions With Real Data",
    cardDesc: "Track lead sources, customer journeys, and campaign performance to optimize growth strategies.",
    impact: "✅ Better ROI Clarity",
  },
  {
    id: 4,
    title: "Automated WhatsApp Workflows",
    desc: "Nurture leads automatically through smart messaging systems.",
    icon: FiMessageCircle,
    cardTitle: "Consistent Communication At Scale",
    cardDesc: "Automated workflows help businesses follow up consistently without missing customer interactions.",
    impact: "✅ Improved Customer Experience",
  },
  {
    id: 5,
    title: "Scalable Automation Systems",
    desc: "Reduce manual work and improve operational efficiency.",
    icon: FiSettings,
    cardTitle: "Grow Without Growing Your Team",
    cardDesc: "Smart automation handles repetitive tasks so your team focuses on high-value work that actually drives revenue.",
    impact: "✅ Operational Efficiency",
  },
];

// ── Component ─────────────────────────────────────────────────────────
export default function ChaosVsEdge() {
  const [activeTab, setActiveTab] = useState('chaos');
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const isChaos = activeTab === 'chaos';
  const currentItems = isChaos ? chaosItems : edgeItems;
  const currentItem = currentItems[activeIndex];

  // ── Auto-progress ──
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 100 : p + 1.5));
      }, 30);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((p) => (p + 1) % currentItems.length);
        setProgress(0);
      }, 200);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [progress, currentItems.length]);

  useEffect(() => { setProgress(0); }, [activeIndex, activeTab]);
  useEffect(() => () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const handleManualSelect = (idx) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  // ── Colors ──
  const accent = isChaos ? '#BB000F' : '#6400A1';
  const accentLight = isChaos ? 'rgba(187,0,15,0.08)' : 'rgba(100,0,161,0.08)';
  const accentMid = isChaos ? 'rgba(187,0,15,0.15)' : 'rgba(100,0,161,0.15)';
  const grad = isChaos
    ? 'linear-gradient(135deg,#BB000F 0%,#6400A1 100%)'
    : 'linear-gradient(135deg,#6400A1 0%,#BB000F 100%)';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap');
        .cvs-root { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; }
        .cvs-scroll::-webkit-scrollbar { width: 3px; }
        .cvs-scroll::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 8px; }
        .cvs-scroll::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#6400A1,#BB000F); border-radius: 8px; }
        .cvs-tab-chaos.active  { background: #fff; color: #BB000F; box-shadow: 0 4px 20px rgba(187,0,15,0.18); }
        .cvs-tab-edge.active   { background: #fff; color: #6400A1; box-shadow: 0 4px 20px rgba(100,0,161,0.18); }
        .cvs-tab-chaos:not(.active):hover { background: rgba(187,0,15,0.06); }
        .cvs-tab-edge:not(.active):hover  { background: rgba(100,0,161,0.06); }
      `}</style>

      <section className="cvs-root w-full bg-[#F7F5FB] py-20 md:py-28 overflow-hidden relative">

        {/* Subtle bg decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: '#6400A1', filter: 'blur(80px)' }} />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: '#BB000F', filter: 'blur(80px)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div className="text-center mb-14 md:mb-18">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6400A1]/20 bg-white text-[#6400A1] text-[11px] font-bold tracking-[0.12em] uppercase mb-5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6400A1] animate-pulse" />
              Lead Conversion System
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-black text-gray-900 leading-[1.08] tracking-[-0.03em] mb-5"
            >
              Still Losing Leads Before They{" "}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg,#6400A1 0%,#BB000F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Become Customers?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-gray-500 text-base md:text-[17px] font-medium max-w-[560px] mx-auto leading-[1.7]"
            >
              Most businesses generate enquiries — but without the right systems,
              follow-ups get delayed, leads go cold, and conversions get lost.
            </motion.p>
          </div>

          {/* ── Main Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[2rem] overflow-hidden"
            style={{ boxShadow: '0 8px 60px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)' }}
          >
            {/* Top gradient bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#6400A1 0%,#BB000F 50%,#6400A1 100%)' }} />

            {/* ── Tab Switcher ── */}
            <div className="flex justify-center pt-8 pb-2 px-4">
              <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl gap-1">
                <button
                  onClick={() => handleTabChange('chaos')}
                  className={`cvs-tab-chaos flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm md:text-[15px] text-gray-400 ${activeTab === 'chaos' ? 'active' : ''}`}
                >
                  <FiAlertTriangle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  Traditional Workflow
                </button>
                <button
                  onClick={() => handleTabChange('edge')}
                  className={`cvs-tab-edge flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm md:text-[15px] text-gray-400 ${activeTab === 'edge' ? 'active' : ''}`}
                >
                  <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  Smart Growth System
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">

                {/* LEFT: Item List */}
                <div className="cvs-scroll space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
                  {currentItems.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <motion.div
                        key={`${activeTab}-${item.id}`}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.28, delay: idx * 0.04 }}
                        onClick={() => handleManualSelect(idx)}
                        className="relative cursor-pointer rounded-2xl transition-all duration-400 select-none"
                        style={{
                          background: isActive ? '#fff' : 'rgba(247,245,251,0.7)',
                          border: isActive ? `1.5px solid ${accent}` : '1.5px solid transparent',
                          boxShadow: isActive ? `0 6px 28px ${accentMid}` : 'none',
                        }}
                      >
                        <div className="p-4 md:p-5">
                          <div className="flex items-start gap-3 md:gap-4">
                            {/* Icon bubble */}
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                              style={{
                                background: isActive ? accentLight : 'rgba(0,0,0,0.04)',
                                color: isActive ? accent : '#9CA3AF',
                              }}
                            >
                              <item.icon className="w-5 h-5" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3
                                className="text-[14px] md:text-[15px] font-bold leading-snug mb-1 transition-colors duration-300"
                                style={{ color: isActive ? '#111827' : '#374151' }}
                              >
                                {item.title}
                              </h3>
                              <p className="text-[13px] md:text-[14px] text-gray-400 font-medium leading-[1.6] line-clamp-2">
                                {item.desc}
                              </p>
                            </div>

                            {/* Active chevron */}
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{ background: accentLight, color: accent }}
                              >
                                <FiArrowRight className="w-3.5 h-3.5" />
                              </motion.div>
                            )}
                          </div>

                          {/* Progress bar */}
                          {isActive && (
                            <div className="mt-3.5 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: progress / 100 }}
                                transition={{ duration: 0.05, ease: 'linear' }}
                                style={{ originX: 0, height: '100%', borderRadius: '9999px', background: grad }}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Autoplay toggle */}
                  <div className="flex justify-end mt-3 pt-1">
                    <button
                      onClick={() => { setIsAutoPlaying(p => !p); if (!isAutoPlaying) setProgress(0); }}
                      className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <div
                        className="w-8 h-4 rounded-full relative transition-colors duration-300"
                        style={{ background: isAutoPlaying ? accent : '#D1D5DB' }}
                      >
                        <div
                          className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-300 shadow-sm"
                          style={{ transform: isAutoPlaying ? 'translateX(16px)' : 'translateX(2px)' }}
                        />
                      </div>
                      {isAutoPlaying ? 'Auto-rotating' : 'Paused'}
                    </button>
                  </div>
                </div>

                {/* RIGHT: Detail Card */}
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeTab}-${activeIndex}`}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16, scale: 0.98 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        background: isChaos
                          ? 'linear-gradient(145deg, #1a0005 0%, #2d0012 40%, #0d0022 100%)'
                          : 'linear-gradient(145deg, #0d0022 0%, #1a0038 40%, #1a0005 100%)',
                        boxShadow: `0 20px 60px ${isChaos ? 'rgba(187,0,15,0.25)' : 'rgba(100,0,161,0.25)'}`,
                      }}
                    >
                      {/* Decorative mesh */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div
                          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                          style={{ background: grad, filter: 'blur(40px)' }}
                        />
                        <div
                          className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-15"
                          style={{ background: isChaos ? '#6400A1' : '#BB000F', filter: 'blur(40px)' }}
                        />
                        {/* Subtle dot grid */}
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                          }}
                        />
                      </div>

                      <div className="relative z-10 p-7 md:p-9">
                        {/* Icon + number */}
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                          >
                            <currentItem.icon className="w-6 h-6 text-white" />
                          </div>
                          <div
                            className="text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                          >
                            {isChaos ? 'Problem' : 'Solution'} {String(activeIndex + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Card headline */}
                        <h3 className="text-white text-[22px] md:text-[26px] font-black leading-[1.2] tracking-[-0.025em] mb-4">
                          {currentItem.cardTitle}
                        </h3>

                        {/* Description */}
                        <p className="text-white/65 text-[14px] md:text-[15px] font-medium leading-[1.75] mb-7">
                          {currentItem.cardDesc}
                        </p>

                        {/* Impact tag */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.22, duration: 0.3 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-[13px] font-bold"
                          style={{
                            background: isChaos ? 'rgba(187,0,15,0.25)' : 'rgba(100,0,161,0.25)',
                            color: isChaos ? '#FCA5A5' : '#D8B4FE',
                            border: `1px solid ${isChaos ? 'rgba(187,0,15,0.4)' : 'rgba(100,0,161,0.4)'}`,
                          }}
                        >
                          {currentItem.impact}
                        </motion.div>

                        {/* Divider */}
                        <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

                        {/* CTA */}
                        <button
                          className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-white text-[14px] transition-all duration-300 hover:gap-3.5 hover:shadow-2xl"
                          style={{ background: grad, boxShadow: `0 6px 24px ${isChaos ? 'rgba(187,0,15,0.4)' : 'rgba(100,0,161,0.4)'}` }}
                        >
                          {isChaos ? 'Fix This Problem' : 'Get This System'}
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dot nav */}
                  <div className="flex justify-center items-center gap-2 mt-5">
                    {currentItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleManualSelect(idx)}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: activeIndex === idx ? '28px' : '8px',
                          background: activeIndex === idx ? grad : '#D1D5DB',
                        }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Bottom note ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <p className="text-gray-400 text-[13px] md:text-sm font-medium">
              The problem is not your ads.{" "}
              <span className="font-black text-gray-800">The problem is your system.</span>
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}