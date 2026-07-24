import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "Real Estate Businesses",
    description: "Generate qualified property enquiries and turn more leads into site visits and sales.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    icon: "🏢",
    tag: "PROPERTY ENQUIRIES",
    cardTitle: "Turn Property Enquiries Into Site Visits",
    cardDesc: "Lead generation, CRM and automated follow-ups built around your property buyers.",
  },
  {
    id: "02",
    title: "Coaches & Trainers",
    description: "Attract the right audience, automate follow-ups and convert prospects into clients.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
    icon: "🎯",
    tag: "CLIENT ACQUISITION",
    cardTitle: "Turn Prospects Into High-Paying Clients",
    cardDesc: "Build your personal brand and automated sales funnels to scale your programs effortlessly.",
  },
  {
    id: "03",
    title: "Local Service Businesses",
    description: "Generate local enquiries and turn them into appointments, bookings and repeat customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    icon: "📍",
    tag: "LOCAL BOOKINGS",
    cardTitle: "Turn Local Enquiries Into Bookings",
    cardDesc: "Make sure local clients find you first and book your services instantly.",
  },
  {
    id: "04",
    title: "Clinics & Healthcare",
    description: "Build a predictable patient enquiry and appointment system with smarter follow-ups.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    icon: "🏥",
    tag: "PATIENT APPOINTMENTS",
    cardTitle: "Turn Patient Enquiries Into Appointments",
    cardDesc: "Smart scheduling and automated reminders to keep your clinic fully booked.",
  },
  {
    id: "05",
    title: "Education & Institutes",
    description: "Drive student enquiries, automate counselling follow-ups and increase enrolments.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
    icon: "🎓",
    tag: "ENROLMENT GROWTH SYSTEM",
    cardTitle: "Turn Student Enquiries Into Enrolments",
    cardDesc: "Lead generation, CRM and automated follow-ups built around your admission journey.",
  },
  {
    id: "06",
    title: "Small & Growing Brands",
    description: "Build a scalable customer acquisition system combining marketing, CRM and automation.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
    icon: "🚀",
    tag: "SCALABLE GROWTH",
    cardTitle: "Build A Scalable Growth Engine",
    cardDesc: "Combine performance marketing, CRM, and automation for continuous business expansion.",
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function WhoWeHelp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const currentService = SERVICES[activeIndex];

  return (
    <section className="relative w-full min-h-screen py-20 flex items-center overflow-hidden font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-white bg-gradient-to-br from-[#6400A1] to-[#BB000F]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Area (Span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Who We Help
              </div>

              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.08] tracking-[-1px] text-white mb-5">
                Who We <span className="italic opacity-80 underline decoration-white/30">Help Grow</span>
              </h2>

              <p className="text-white/80 text-sm md:text-[16px] leading-[1.8] max-w-[520px] font-medium">
                We partner with ambitious businesses that want more than leads. We build the marketing, automation and sales systems that turn opportunities into measurable growth.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="space-y-1.5">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }}
                  className="group relative w-full flex items-start gap-4 p-3.5 sm:p-4 text-left transition-all duration-300 rounded-xl hover:bg-white/5"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/10 rounded-full overflow-hidden">
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: "100%" }} 
                        transition={{ duration: AUTO_PLAY_DURATION/1000, ease: "linear" }}
                        className="bg-white w-full"
                      />
                    )}
                  </div>

                  <span className={`text-xl transition-transform duration-300 ${activeIndex === index ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-70'}`}>
                    {service.icon}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${activeIndex === index ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                      {service.title}
                    </h3>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs sm:text-sm text-white/70 mt-1.5 overflow-hidden leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Vertical Centered Image Container (Span 6) */}
          <div 
            className="lg:col-span-6 relative flex items-center justify-center py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] w-full rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-md">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  className="absolute inset-0 w-full h-full flex flex-col"
                >
                  {/* Full Display Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
                    />
                    {/* Deep multi-stop gradient for clear text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  </div>
                  
                  {/* Card Content Overlay */}
                  <div className="relative z-10 mt-auto p-6 sm:p-8 lg:p-10">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mb-3 text-white shadow-sm">
                      {currentService.tag}
                    </span>
                    <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-2">
                      {currentService.cardTitle}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                      {currentService.cardDesc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls Overlay */}
              <div className="absolute top-6 right-6 flex gap-2 z-25">
                <NavButton onClick={handlePrev} label="←" />
                <NavButton onClick={handleNext} label="→" />
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-6 right-8 sm:right-10 flex gap-1.5 z-25">
                {SERVICES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function NavButton({ onClick, label }) {
  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      aria-label="Navigation button"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-all active:scale-95 shadow-lg"
    >
      <span className="text-lg font-bold">{label}</span>
    </button>
  );
}