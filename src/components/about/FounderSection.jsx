import { useState, useEffect, useRef } from "react";

export default function FounderSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const checks = [
    "Built 50+ Revenue Systems from scratch",
    "Specializes in Ads, CRM & Automation",
    "Measurable Growth — No Guesswork",
  ];

  const brands = ["Meta Ads", "Google Ads", "WhatsApp Flows", "Zoho CRM"];

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(125.94deg, #4c007a 0%, #8b000b 100%)",
        minHeight: "80vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;800;900&family=Bebas+Neue&display=swap');
        *{box-sizing:border-box;}
        .fu{opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease;}
        .fu.in{opacity:1;transform:translateY(0);}
        .d1{transition-delay:.05s} .d2{transition-delay:.15s} .d3{transition-delay:.25s}
        .d4{transition-delay:.35s} .d5{transition-delay:.45s} .d6{transition-delay:.55s}
        
        .cta-btn{
          display:inline-flex;align-items:center;gap:10px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.3);
          color:#fff;padding:12px 24px;
          font-size:11px;font-weight:700;letter-spacing:.15em;
          cursor:pointer; transition:all .25s;
        }
        .cta-btn:hover{background:#fff;color:#6400A1;}
        
        .bp{
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:4px;padding:4px 10px;
          font-size:10px; color:rgba(255,255,255,0.6);
        }

        @media(max-width:900px){
          .fg{flex-direction:column-reverse !important;}
          .fc{padding:60px 24px !important; max-width:100% !important; text-align:center;}
          .fi{height:350px !important; width:100% !important;}
          .bn{font-size:80px !important;}
          .check-container{align-items: center !important; display: flex; flex-direction: column;}
        }
      `}</style>

      <div className="fg" style={{display:"flex", width:"100%", maxWidth:"1300px", margin:"0 auto", position:"relative", zIndex:2}}>
        
        {/* ── LEFT CONTENT ── */}
        <div className="fc" style={{
          flex:"0 0 50%", padding:"80px 40px",
          display:"flex", flexDirection:"column", justifyContent:"center",
        }}>
         <div className={`fu d1${visible ? " in" : ""}`} style={{ marginBottom: 10 }}>
  <span style={{
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: ".3em",
    color: "#e879f9",
    textTransform: "uppercase",
    padding: "6px 14px",
    background: "rgba(232, 121, 249, 0.1)",
    border: "1px solid rgba(232, 121, 249, 0.3)",
    borderRadius: "20px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 0 15px rgba(232, 121, 249, 0.2)",
    display: "inline-block"
  }}>FOUNDER</span>
</div>

       <div className={`fu d2${visible ? " in" : ""}`}>
  <h1 className="bn" style={{
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(60px, 8vw, 100px)",
    color: "#ffffff",
    lineHeight: 0.9,
    marginBottom: 20,
    letterSpacing: "3px",
    textTransform: "uppercase",
    textShadow: `
      0 1px 0 #cccccc,
      0 2px 0 #b3b3b3,
      0 3px 0 #999999,
      0 4px 0 #808080,
      0 5px 0 #666666,
      0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(65, 0, 119, 0.4),
      0 10px 20px rgba(65, 0, 119, 0.3)
    `
  }}>ARNAB</h1>
</div>

          <div className={`fu d3${visible?" in":""}`} style={{marginBottom:20}}>
            <h3 style={{fontSize:16, fontWeight:700, color:"#fff", marginBottom:8}}>
              Ready to Build a Business That Grows on Autopilot?
            </h3>
            <p style={{fontSize:14, color:"rgba(255,255,255,0.8)", lineHeight:1.6, maxWidth:440}}>
              Whether you're launching your first campaign or scaling an established business, we'll help you build a complete system that turns marketing into measurable growth.
            </p>
          </div>

          <div className={`fu d4${visible?" in":""} check-container`} style={{marginBottom:30}}>
            {checks.map((c,i)=>(
              <div key={i} style={{display:"flex", alignItems:"center", gap:10, marginBottom:8}}>
                <div style={{color:"#e879f9"}}>✔</div>
                <span style={{fontSize:13, color:"rgba(255,255,255,0.7)"}}>{c}</span>
              </div>
            ))}
          </div>

      <div className={`fu d5${visible ? " in" : ""}`}>
  <button 
    className="cta-btn" 
    style={{ 
      backgroundColor: "#410077", 
      fontWeight: "800",
      letterSpacing: "1px",
      border: "2px solid #5a00a3",
      borderRadius: "8px",
      padding: "14px 28px",
      color: "#ffffff",
      boxShadow: "0 4px 15px rgba(65, 0, 119, 0.4)",
      cursor: "pointer",
      transition: "all 0.3s ease"
    }}
  >
    LET'S TALK BUSINESS
  </button>
</div>
        </div>

        {/* ── RIGHT — BLENDED IMAGE ── */}
        <div className="fi" style={{
          flex:1, position:"relative", 
          display:"flex", alignItems:"center", justifyContent:"center"
        }}>
          {/* Subtle Glow behind image */}
          <div style={{
             position:"absolute", width:"80%", height:"80%",
             background:"radial-gradient(circle, rgba(232,121,249,0.2) 0%, transparent 70%)",
             filter:"blur(40px)"
          }}/>

          <img
            src="/founder.webp"
            alt="Founder"
            style={{
              width:"100%", height:"100%",
              maxHeight:"550px",
              objectFit:"contain",
              zIndex:2,
              opacity: visible ? 1 : 0,
              transition: "opacity 1.5s ease",
              maskImage: "radial-gradient(circle, black 50%, rgba(0,0,0,0.5) 70%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(circle, black 40%, rgba(0,0,0,0.3) 70%, transparent 95%)",
            }}
            className="mt-20"
          />
        </div>

      </div>

      {/* Decorative background text */}
      <div style={{
        position:"absolute", bottom:"-5%", left:"2%", 
        fontSize:"15vw", fontFamily:"'Bebas Neue'", 
        color:"rgba(255,255,255,0.03)", pointerEvents:"none", zIndex:1
      }}>
        STRATEGIST
      </div>
    </section>
  );
}