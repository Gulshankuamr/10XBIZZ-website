import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "Real Estate Businesses",
    description: "We help real estate agents, brokers, and developers generate qualified buyer & seller leads through targeted campaigns.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    icon: "🏢",
    tag: "Lead Generation",
  },
  {
    id: "02",
    title: "Coaches & Trainers",
    description: "Whether you're a fitness coach, business mentor, or life trainer — we build your personal brand online.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
    icon: "🎯",
    tag: "Personal Branding",
  },
  {
    id: "03",
    title: "Local Service Businesses",
    description: "Plumbers, electricians, salons, restaurants — we make sure locals find you first on Google and social media.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    icon: "📍",
    tag: "Local Growth",
  },
  {
    id: "04",
    title: "Clinics & Healthcare",
    description: "Doctors and diagnostic centres — we help you attract the right patients and automate appointment follow-ups.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    icon: "🏥",
    tag: "Patient Acquisition",
  },
  {
    id: "05",
    title: "Education & Institutes",
    description: "Schools and coaching centres — we drive enrolment through strategic digital campaigns and admission funnels.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
    icon: "🎓",
    tag: "Enrolment Campaigns",
  },
  {
    id: "06",
    title: "Small & Growing Brands",
    description: "Scaling up? We build your complete digital presence — from SEO to paid ads and conversion systems.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
    icon: "🚀",
    tag: "Full-Stack Growth",
  },
];

const AUTO_PLAY_DURATION = 4500;

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
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section className="relative w-full min-h-screen py-16 flex items-center overflow-hidden font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-white bg-gradient-to-br from-[#6400A1] to-[#BB000F]">
      {/* Noise Texture */}
    

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content Area */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Who We Help
              </div>

              <h2 className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-bold leading-[1.05] tracking-[-2px] text-white mb-5 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
                Who We <span className="italic opacity-70">Work With</span>
              </h2>

              <p className="text-white/70 text-sm md:text-[16px] leading-[1.8] max-w-[520px] font-medium font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
                We partner with businesses ready to stop guessing and start growing.
                Choose your category to see how we help scale brands through
                strategy and automation.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="space-y-1">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }}
                  className="group relative w-full flex items-start gap-4 p-4 text-left transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10">
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: "100%" }} 
                        transition={{ duration: AUTO_PLAY_DURATION/1000, ease: "linear" }}
                        className="bg-white w-full"
                      />
                    )}
                  </div>

                  <span className={`text-xl transition-opacity ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}>
                    {service.icon}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                      {service.title}
                    </h3>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-sm text-white/50 mt-2 overflow-hidden"
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

          {/* Right: Vertical Centered Image Container */}
          <div 
            className="relative flex items-center justify-center py-10 lg:py-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Reduced Height: lg:h-[580px] */}
            <div className="relative h-[450px] lg:h-[580px] w-full rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={SERVICES[activeIndex].image}
                    alt={SERVICES[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10px] font-bold uppercase tracking-wider mb-3">
                      {SERVICES[activeIndex].tag}
                    </span>
                    <h4 className="text-3xl font-['Montserrat',ui-sans-serif,system-ui,sans-serif] font-bold">{SERVICES[activeIndex].title}</h4>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls Overlay */}
              <div className="absolute top-6 right-6 flex gap-2 z-20">
                <NavButton onClick={handlePrev} label="←" />
                <NavButton onClick={handleNext} label="→" />
              </div>

              <div className="absolute bottom-6 right-10 flex gap-2 z-20">
                {SERVICES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
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
      className="w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-purple-900 transition-all active:scale-95"
    >
      {label}
    </button>
  );
}