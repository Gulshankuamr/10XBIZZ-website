import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "google",
    title: "Google Ads Management",
    desc: "Generate high-intent leads from Google Search with campaigns designed to attract people actively searching for your services. We focus on better targeting and lower wasted spend.",
    bullets: ["Lead generation services", "Conversion optimization"],
    imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>),
  },
  {
    id: "meta",
    title: "Meta Ads (FB & Instagram)",
    desc: "Reach the right audience with scroll-stopping ad campaigns that increase brand visibility and improve lead generation.",
    bullets: ["Digital marketing services", "Meta Ads Expert"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>),
  },
  {
    id: "seo",
    title: "SEO Services",
    desc: "Improve Google rankings, increase organic traffic, and generate long-term leads through sustainable growth.",
    bullets: ["SEO services", "Organic Growth"],
    imageUrl: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    id: "crm",
    title: "CRM Automation",
    desc: "Organize enquiries in one system and manage your sales pipeline efficiently so no customer gets missed.",
    bullets: ["CRM automation", "Lead Management"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>),
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    desc: "Automate follow-ups and lead nurturing using smart WhatsApp systems that improve response speed.",
    bullets: ["WhatsApp automation", "Business automation"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  },
  {
    id: "funnel",
    title: "Landing Page Optimization",
    desc: "High-converting funnels designed to turn visitors into leads through optimized layouts.",
    bullets: ["Landing page optimization", "Conversion strategy"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>),
  },
  {
    id: "growth",
    title: "Business Automation",
    desc: "Scalable growth systems that drive measurable results and compound over time.",
    bullets: ["Business automation", "Lead gen services"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
];

const ACCENT = "#6400A1";

// Card Background Component Logic
function CardBg({ imageUrl, isHovered, forceImage }) {
  const showImage = forceImage || isHovered;
  return (
    <>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: showImage ? 1 : 0,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)", zIndex: 0,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}/>
      <div style={{
        position: "absolute", inset: 0,
        background: showImage 
          ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(100,0,161,0.4) 100%)" 
          : "transparent",
        opacity: showImage ? 1 : 0,
        transition: "opacity 0.6s ease", zIndex: 1,
      }}/>
      <div style={{
        position: "absolute", inset: 0, background: "#fff",
        opacity: showImage ? 0 : 1,
        transition: "opacity 0.6s ease", zIndex: 0,
      }}/>
    </>
  );
}

function ServiceCard({ service, isHovered, onEnter, onLeave, forceImage, height = 350 }) {
  return (
    <motion.div
      className="service-card"
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        position: "relative", borderRadius: 28, overflow: "hidden",
        cursor: "pointer", height: height,
        border: `1.5px solid ${isHovered || forceImage ? ACCENT : "#EEE"}`,
        boxShadow: isHovered ? "0 30px 60px rgba(100,0,161,0.15)" : "0 4px 20px rgba(0,0,0,0.03)",
        transition: "all 0.4s ease", background: "#fff",
      }}
    >
      <CardBg imageUrl={service.imageUrl} isHovered={isHovered} forceImage={forceImage} />

      <div style={{
        position: "relative", zIndex: 10, height: "100%",
        padding: "clamp(18px, 2.6vw, 32px)", display: "flex", flexDirection: "column", justifyContent: "flex-end",
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, marginBottom: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: (isHovered || forceImage) ? "rgba(255,255,255,0.15)" : "#F5F0FF",
          color: (isHovered || forceImage) ? "#fff" : ACCENT,
          backdropFilter: (isHovered || forceImage) ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}>
          {service.icon}
        </div>

        <h3 style={{
          fontSize: "clamp(18px, 1.7vw, 20px)", fontWeight: "800",
          color: (isHovered || forceImage) ? "#fff" : "#111",
          marginBottom: "10px", lineHeight: 1.2, transition: "color 0.3s",
        }}>{service.title}</h3>

        <p style={{
          fontSize: "clamp(13px, 1.2vw, 14px)", color: (isHovered || forceImage) ? "rgba(255,255,255,0.8)" : "#666",
          lineHeight: "1.6", margin: "0 0 16px", transition: "color 0.3s",
        }}>{service.desc}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {service.bullets.map((b, i) => (
            <span key={i} style={{
              fontSize: "clamp(10px, 1vw, 11px)", fontWeight: "700", textTransform: "uppercase",
              color: (isHovered || forceImage) ? "#fff" : ACCENT,
              background: (isHovered || forceImage) ? "rgba(255,255,255,0.1)" : "rgba(100,0,161,0.05)",
              padding: "4px 10px", borderRadius: "6px", transition: "all 0.3s",
            }}>{b}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function OurServices() {
  const [hovered, setHovered] = useState(null);
  
  return (
    <section style={{ fontFamily: "'Montserrat', sans-serif", background: "#F8F9FC", padding: "clamp(60px, 8vw, 100px) clamp(14px, 3vw, 24px)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

        .services-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .services-bottom-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .services-cta-wrap {
          text-align: center;
          margin-top: clamp(44px, 7vw, 80px);
        }

        @media (max-width: 1100px) {
          .services-top-grid {
            grid-template-columns: 1fr 1fr;
          }

          .services-top-grid .service-card:first-child {
            grid-column: span 2;
          }

          .services-bottom-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .services-top-grid,
          .services-bottom-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .services-top-grid {
            margin-bottom: 14px;
          }

          .services-top-grid .service-card:first-child {
            grid-column: span 1;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(34px, 5vw, 64px)" }}>
          <span style={{ fontSize: "clamp(10px, 1.4vw, 12px)", fontWeight: "800", color: ACCENT, letterSpacing: "2.4px", textTransform: "uppercase" }}>✦ GROWTH SYSTEMS</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: "900", color: "#0D0D1A", marginTop: "16px", letterSpacing: "clamp(-0.6px, -0.1vw, -1.5px)", lineHeight: 1.2 }}>
            Smart Lead Generation & <span style={{ color: ACCENT }}>Business Automation</span>
          </h2>
        </div>

        {/* TOP ROW: 3 Cards (1 Large with direct image + 2 small with hover) */}
        <div className="services-top-grid">
          <ServiceCard 
            service={services[0]} 
            forceImage={true} 
            isHovered={hovered === services[0].id}
            onEnter={() => setHovered(services[0].id)}
            onLeave={() => setHovered(null)}
            height="clamp(320px, 58vw, 420px)"
          />
          <ServiceCard 
            service={services[1]} 
            isHovered={hovered === services[1].id}
            onEnter={() => setHovered(services[1].id)}
            onLeave={() => setHovered(null)}
            height="clamp(300px, 56vw, 420px)"
          />
          <ServiceCard 
            service={services[2]} 
            isHovered={hovered === services[2].id}
            onEnter={() => setHovered(services[2].id)}
            onLeave={() => setHovered(null)}
            height="clamp(300px, 56vw, 420px)"
          />
        </div>

        {/* BOTTOM ROW: 4 Cards (All with hover image reveal) */}
        <div className="services-bottom-grid">
          {services.slice(3).map((s) => (
            <ServiceCard 
              key={s.id}
              service={s} 
              isHovered={hovered === s.id}
              onEnter={() => setHovered(s.id)}
              onLeave={() => setHovered(null)}
              height="clamp(300px, 54vw, 400px)"
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta-wrap">

  
  <a
    href="/services"
    className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full
    bg-[#6400A1] text-white font-extrabold text-[15px] sm:text-[16px]
    shadow-[0_12px_30px_rgba(100,0,161,0.28)]
    hover:scale-[1.04]
    hover:shadow-[0_18px_45px_rgba(100,0,161,0.38)]
    transition-all duration-300"
  >
    See All Services
    
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>



</div>
      </div>
    </section>
  );
}

