import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';

import {
  FiAlertTriangle,
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiMessageCircle,
  FiRepeat,
  FiTarget,
  FiBarChart2,
  FiClock
} from 'react-icons/fi';

// Chaos (Problem) Items
const chaosItems = [
  {
    id: 1,
    title: "Leads Come In, No Fast Response",
    desc: "Every minute of delay kills the deal. By the time you reply, the prospect has moved on to your competitor.",
    icon: FiClock,
    color: "#BB000F"
  },
  {
    id: 2,
    title: "No System to Track Enquiries",
    desc: "Spreadsheets, WhatsApp, and Emails in different silos. Nothing talks to each other — leads fall through the cracks daily.",
    icon: FiBarChart2,
    color: "#BB000F"
  },
  {
    id: 3,
    title: "Ads Spend but No ROI Clarity",
    desc: "You're burning budget on campaigns but can't trace which lead came from where, or what actually converted.",
    icon: FiTarget,
    color: "#BB000F"
  },
  {
    id: 4,
    title: "WhatsApp Chats Get Lost",
    desc: "Hot leads buried under unread messages. No context, no history, no way to pick up where you left off.",
    icon: FiMessageCircle,
    color: "#BB000F"
  },
  {
    id: 5,
    title: "No Proper Follow-up Process",
    desc: "Manual follow-ups depend on memory. Most leads get one message and then nothing — you're losing 60% of potential revenue.",
    icon: FiRepeat,
    color: "#BB000F"
  },
];

// Edge (Solution) Items
const edgeItems = [
  {
    id: 1,
    title: "Instant Lead Response",
    desc: "AI-powered engagement within 5 seconds of capture. You talk to them while they're still hot — before any competitor can.",
    icon: FiZap,
    color: "#6400A1"
  },
  {
    id: 2,
    title: "Unified Lead Tracking System",
    desc: "One central source of truth. Every enquiry, interaction, and conversion synced in real-time — nothing lost, everything visible.",
    icon: FiTrendingUp,
    color: "#6400A1"
  },
  {
    id: 3,
    title: "Full ROI Clarity on Ad Spend",
    desc: "Know exactly which campaign, ad, or channel brought each lead. Smart lead scoring shows you where to double down.",
    icon: FiTarget,
    color: "#6400A1"
  },
  {
    id: 4,
    title: "WhatsApp + All Channels, Unified",
    desc: "Every WhatsApp, email, and SMS thread in one place. Full conversation history. Never lose context on a lead again.",
    icon: FiMessageCircle,
    color: "#6400A1"
  },
  {
    id: 5,
    title: "Automated Follow-up Sequences",
    desc: "Multi-channel nurturing that runs 24/7 — email, WhatsApp, SMS — all on autopilot. No lead goes cold ever again.",
    icon: FiRepeat,
    color: "#6400A1"
  },
];

export default function ChaosVsEdge() {
  const [activeTab, setActiveTab] = useState('chaos');
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const currentItems = activeTab === 'chaos' ? chaosItems : edgeItems;
  const currentItem = currentItems[activeIndex];
  const gradientColor = activeTab === 'chaos'
    ? 'linear-gradient(125.94deg, #BB000F 0%, #6400A1 100%)'
    : 'linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%)';

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + 1.5;
        });
      }, 30);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % currentItems.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, currentItems.length]);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex, activeTab]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const handleManualSelect = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
    if (!isAutoPlaying) setProgress(0);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            Still Struggling to Turn{" "}
            <span className="bg-gradient-to-r from-[#6400A1] to-[#BB000F] bg-clip-text text-transparent">
              Leads Into Customers?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-[18px] text-gray-600 max-w-2xl mx-auto"
          >
            You're getting enquiries… but conversions are not happening.
          </motion.p>
        </div>

        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Gradient Border Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6400A1] via-[#BB000F] to-[#6400A1]" />

          {/* Tab Selector */}
          <div className="flex justify-center pt-8 pb-4 px-4">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => handleTabChange('chaos')}
                className={`flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'chaos'
                    ? 'bg-white text-[#BB000F] shadow-md'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <FiAlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                <span>The Chaos (Old Way)</span>
              </button>
              <button
                onClick={() => handleTabChange('edge')}
                className={`flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeTab === 'edge'
                    ? 'bg-white text-[#6400A1] shadow-md'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>The Kinetic Edge (10xBizz)</span>
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Left Column - Feature List */}
              <div className="space-y-3 max-h-[500px] lg:max-h-[540px] overflow-y-auto pr-2 custom-scrollbar">
                {currentItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => handleManualSelect(idx)}
                    className={`group relative cursor-pointer rounded-2xl transition-all duration-500 ${
                      activeIndex === idx
                        ? 'bg-white shadow-xl border border-gray-200'
                        : 'bg-gray-50/50 hover:bg-gray-100 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="p-4 md:p-5">
                      <div className="flex items-start gap-3 md:gap-4">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeIndex === idx
                              ? activeTab === 'chaos'
                                ? 'bg-red-100 text-red-600'
                                : 'bg-purple-100 text-purple-700'
                              : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300 group-hover:text-gray-600'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Title — bold & black always */}
                          <h3 className="text-base md:text-[18px] font-bold text-gray-900 mb-1 leading-snug">
                            {item.title}
                          </h3>
                          {/* Description — bold black, larger */}
                          <p className="text-sm md:text-[15px] font-bold text-gray-500 leading-[1.7] line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: progress / 100 }}
                          transition={{ duration: 0.05, ease: 'linear' }}
                          style={{ originX: 0 }}
                          className={`h-1 rounded-full mt-3 ${
                            activeTab === 'chaos'
                              ? 'bg-gradient-to-r from-[#BB000F] to-[#6400A1]'
                              : 'bg-gradient-to-r from-[#6400A1] to-[#BB000F]'
                          }`}
                        />
                      )}
                    </div>

                    {/* Active indicator border */}
                    {activeIndex === idx && (
                      <motion.div
                        layoutId="activeBorder"
                        className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                        style={{
                          borderColor: activeTab === 'chaos' ? '#BB000F' : '#6400A1',
                        }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Auto-play Toggle */}
                <div className="flex justify-end mt-4 pt-2">
                  <button
                    onClick={toggleAutoPlay}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <div className={`w-8 h-4 rounded-full transition-colors ${isAutoPlaying ? 'bg-[#6400A1]' : 'bg-gray-300'} relative`}>
                      <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${isAutoPlaying ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </div>
                    <span>{isAutoPlaying ? 'Auto-rotating' : 'Paused'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Dynamic Detail Card */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 overflow-hidden"
                  >
                    {/* Decorative gradient circle */}
                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
                      style={{ background: gradientColor }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: activeTab === 'chaos' ? '#BB000F18' : '#6400A118' }}
                        >
                          <currentItem.icon
                            className="w-6 h-6"
                            style={{ color: activeTab === 'chaos' ? '#BB000F' : '#6400A1' }}
                          />
                        </div>
                        {/* Card headline — bolder, bigger, black */}
                        <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-tight tracking-[-0.02em]">
                          {currentItem.title}
                        </h3>
                      </div>

                      {/* Description — bold black */}
                      <p className="text-gray-900 text-base md:text-[17px] font-bold leading-[1.7] mb-8">
                        {currentItem.desc}
                      </p>

                      {/* Impact Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm font-bold"
                      >
                        {activeTab === 'chaos' ? (
                          <>
                            <FiAlertTriangle className="w-4 h-4 text-[#BB000F]" />
                            <span>Revenue Leakage: 60%+</span>
                          </>
                        ) : (
                          <>
                            <FiTrendingUp className="w-4 h-4 text-[#6400A1]" />
                            <span>Conversion Uplift: 3.4x</span>
                          </>
                        )}
                      </motion.div>

                      {/* Bottom CTA */}
                      <div className="mt-8 pt-4 border-t border-gray-100">
                        <button
                          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:gap-3 text-white"
                          style={{ background: gradientColor }}
                        >
                          <span>{activeTab === 'chaos' ? 'Fix This Now' : 'Get The Edge'}</span>
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {currentItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleManualSelect(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx
                          ? 'w-8 bg-gradient-to-r from-[#6400A1] to-[#BB000F]'
                          : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            The problem is not your ads.{" "}
            <span className="font-bold text-gray-900">The problem is your system.</span>
          </p>
        </motion.div>
      </div>

      {/* Custom Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6400A1;
        }
      `}</style>
    </section>
  );
}