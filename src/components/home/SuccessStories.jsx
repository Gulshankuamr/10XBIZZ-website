import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    title: "Integration of Salesforce Development to Unleash Operational Efficiency",
    desc: "Our client and global e-commerce giant sought to streamline its operations through Salesforce integration. Resulting in a centralized platform for efficient order processing and real-time inventory management.",
    stat: "20% increase in efficiency",
    tag: "CRM & Automation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    accent: "#F97316",
  },
  {
    id: 2,
    title: "AI-Powered Lead Generation System for B2B SaaS Company",
    desc: "We built an AI-powered multi-channel funnel combining Google Ads and SEO-optimized landing pages. Reducing manual sales effort by 60% and cutting cost-per-lead in half.",
    stat: "60% less manual effort",
    tag: "Lead Generation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    accent: "#6366F1",
  },
  {
    id: 3,
    title: "WhatsApp Automation That Tripled Conversion Rate",
    desc: "Built a full WhatsApp automation flow — from abandoned cart recovery to post-purchase upsells. Conversion rates tripled within 45 days.",
    stat: "3x conversion rate",
    tag: "WhatsApp Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    accent: "#10B981",
  },
  {
    id: 4,
    title: "Google Ads Campaign That Delivered 329% ROAS",
    desc: "We rebuilt the entire Google Ads structure from keyword research to dynamic remarketing. Achieved 329% return on ad spend while reducing CPC by 44% in 60 days.",
    stat: "329% return on ad spend",
    tag: "Google Ads",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    accent: "#FBBF24",
  },
  {
    id: 5,
    title: "Custom Mobile App Scaled Logistics Startup 10x",
    desc: "We designed a cross-platform app with live GPS tracking, automated dispatching, and a client portal — enabling scale from 50 to 500+ daily deliveries in 6 months.",
    stat: "10x operational scale",
    tag: "Mobile App Dev",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    accent: "#60A5FA",
  },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const vh = container.clientHeight;
      const idx = Math.round(scrollTop / vh);
      setActive(Math.max(0, Math.min(stories.length - 1, idx)));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToStory = (idx) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: idx * container.clientHeight, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] font-['Montserrat',ui-sans-serif,system-ui,sans-serif] antialiased overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center pt-10 pb-4 px-4">
        <p className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase mb-1">
          ✦ Client Success
        </p>
        <h2 className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-[clamp(1.7rem,3vw,2.5rem)] font-bold text-white tracking-[-0.02em] mb-2">
          Explore our Success Stories
        </h2>
        <div className="w-16 h-[2px] bg-white/20 rounded-full mx-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* ── Left Side Dot Navigation ── */}
        <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-30 gap-3">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToStory(i)}
              className={`transition-all duration-500 rounded-full ${
                active === i 
                ? "h-8 w-1.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" 
                : "h-2 w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* ── Top/Bottom Blur Overlays ── */}
  

        {/* ── Main Scroll Container ── */}
        <div
          ref={containerRef}
          className="h-[75vh] md:h-[80vh] overflow-y-scroll snap-y snap-mandatory no-scrollbar relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, idx) => (
            <section
              key={story.id}
              className="h-full snap-start flex items-center justify-center px-8 md:px-16 lg:px-20"
            >
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left side: Content */}
                <div className="order-2 lg:order-1">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.05em] uppercase mb-4"
                    style={{ 
                      backgroundColor: `${story.accent}15`, 
                      border: `1px solid ${story.accent}40`,
                      color: story.accent 
                    }}
                  >
                    <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: story.accent }} />
                    {story.tag}
                  </div>

                  <h3 className="font-['Montserrat',ui-sans-serif,system-ui,sans-serif] text-white font-bold text-xl md:text-3xl leading-tight mb-4">
                    {story.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm md:text-base leading-[1.7] mb-6 max-w-xl">
                    {story.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                      <span className="text-lg">🚀</span>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-white/40 uppercase tracking-[-0.02em]er">Result</span>
                        <span className="text-xs md:text-sm font-bold text-white">{story.stat}</span>
                      </div>
                    </div>

                    <button
                      className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs text-white transition-all overflow-hidden"
                      style={{ backgroundColor: story.accent }}
                    >
                      <span className="relative z-10">Case Study</span>
                      <svg className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Right side: Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[16/10] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 text-[10px] font-bold text-white/50 tracking-[0.05em]">
                      REF / 0{idx + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>

      {/* ── Minimal Footer ── */}
      <div className="h-12 flex items-center justify-center">
         <div className="w-1 h-1 rounded-full bg-white/10" />
      </div>
    </div>
  );
}