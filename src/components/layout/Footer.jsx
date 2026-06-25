import { Link } from "react-router-dom";

const Logo = ({ small }) => (
  <div
    className="inline-flex items-center justify-center rounded-full"
    style={{ backgroundColor: "#6B0AC9", padding: small ? "4px 6px" : "6px 10px" }}
  >
    <div
      className="rounded-full overflow-hidden flex items-center justify-center"
      style={{ width: small ? 48 : 85, height: small ? 28 : 50 }}
    >
      <img
        src="/logonew.png"
        alt="10XBIZZ"
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  </div>
);

const socialLinks = [
  {
    title: "Facebook",
    brand: "facebook",
    color: "#1877F2",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    brand: "whatsapp",
    color: "#25D366",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    brand: "linkedin",
    color: "#0A66C2",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "YouTube",
    brand: "youtube",
    color: "#FF0000",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    brand: "instagram",
    color: "#E1306C",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-[10px] mb-[14px]">
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-[1px]"
      style={{
        background: "rgba(212,160,23,0.1)",
        border: "1px solid rgba(212,160,23,0.2)",
      }}
    >
      {icon}
    </div>
    <div className="flex flex-col gap-[1px]">
      <span
        className="text-[0.7rem] tracking-[1px] uppercase"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        {label}
      </span>
      <span
        className="text-[0.88rem] font-light"
        style={{ color: "#ffffff" }}
      >
        {value}
      </span>
    </div>
  </div>
);

// ── Quick Links — all routes including policy pages ──
const quickLinks = [
  { name: "Home",                   path: "/" },
  { name: "Contact",                path: "/contact" },
  { name: "Blog",                   path: "/blog" },
  { name: "Privacy Policy",         path: "/privacy-policy" },
  { name: "Cancellation & Refund",  path: "/cancellation-refund" },
  { name: "Terms & Conditions",     path: "/terms-and-conditions" },
];

// ── Bottom bar policy links ──
const bottomLinks = [
  { name: "Privacy Policy",        path: "/privacy-policy" },
  { name: "Terms & Conditions",    path: "/terms-and-conditions" },
  { name: "Cancellation & Refund", path: "/cancellation-refund" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; }
        .font-dm  { font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif; }
        .footer-text-stroke {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.07);
        }
        .social-btn {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 14px rgba(0,0,0,0.4);
        }
        .nav-link {
          transition: color 0.2s, padding-left 0.2s;
          color: #ffffff !important;
        }
        .nav-link:hover {
          color: #ffffff !important;
          padding-left: 4px;
          font-weight: 500;
        }
        .bot-link {
          transition: color 0.2s;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
        }
        .bot-link:hover {
          color: rgba(255,255,255,0.7) !important;
        }
        .wordmark-glow {
          position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%);
          width: 60%; height: 100%;
          background: radial-gradient(ellipse at center bottom, rgba(230,50,50,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .footer-top { flex-direction: column !important; gap: 40px !important; }
          .footer-nav { gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .footer-wrap-inner { padding-left: 20px !important; padding-right: 20px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
          .footer-bottom-links { flex-wrap: wrap; gap: 16px !important; }
        }
      `}</style>

      <footer className="font-dm" style={{ background: "#090909", paddingTop: 60 }}>
        <div className="footer-wrap-inner max-w-[1280px] mx-auto" style={{ paddingLeft: 32, paddingRight: 32 }}>

          {/* ── TOP ROW ── */}
          <div
            className="footer-top flex flex-wrap gap-12 justify-between items-start pb-12"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >

            {/* Brand */}
            <div className="flex flex-col gap-[18px] max-w-[340px]">
              <Link to="/" className="flex items-center gap-3 flex-shrink-0 no-underline">
                <Logo />
              </Link>

              <p className="text-sm leading-7 font-light" style={{ color: "#ffffff" }}>
                Empowering growth with smart AI tools. At 10xbizz, we simplify processes and unlock potential—your goal, our AI-powered path to success.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="social-btn flex items-center justify-center w-[38px] h-[38px] rounded-[10px] no-underline"
                    style={{
                      border: `1px solid ${s.color}40`,
                      background: `${s.color}18`,
                      color: s.color,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav + Contact */}
            <div className="footer-nav flex flex-wrap gap-12">

              {/* Resources */}
              {/* <div className="min-w-[130px]">
                <p className="font-syne text-[0.78rem] font-bold tracking-[3px] uppercase mb-5" style={{ color: "#D4A017" }}>
                  Resources
                </p>
                <ul className="list-none flex flex-col gap-3">
                  {["Course", "Books", "Youtube"].map((item) => (
                    <li key={item}>
                      <a href="#" className="nav-link text-sm font-light inline-block no-underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Quick Links — now using React Router <Link> */}
              <div className="min-w-[180px]">
                <p className="font-syne text-[0.78rem] font-bold tracking-[3px] uppercase mb-5" style={{ color: "#D4A017" }}>
                  Quick Links
                </p>
                <ul className="list-none flex flex-col gap-3">
                  {quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="nav-link text-sm font-light inline-block no-underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get In Touch */}
              <div className="min-w-[200px]">
                <p className="font-syne text-[0.78rem] font-bold tracking-[3px] uppercase mb-5" style={{ color: "#D4A017" }}>
                  Get In Touch
                </p>

                <ContactItem
                  label="Email"
                  value="care.10xbizz@gmail.com"
                  icon={
                    <svg width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />

                <ContactItem
                  label="Phone"
                  value="+916291124216"
                  icon={
                    <svg width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.09 6.09l.98-.98a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                />

                <ContactItem
                  label="Hours"
                  value="Mon–Fri 9:00AM – 5:00PM"
                  icon={
                    <svg width="14" height="14" fill="none" stroke="#D4A017" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                />
              </div>

            </div>
          </div>

          {/* ── BOTTOM BAR — now using React Router <Link> ── */}
          <div className="footer-bottom flex flex-wrap gap-3 justify-between items-center pt-5 pb-4">
            <p className="text-[0.8rem] font-light" style={{ color: "rgba(255,255,255,0.35)" }}>
              © 2026 10xBizz. All rights reserved.
            </p>
            <div className="footer-bottom-links flex gap-6">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="bot-link text-[0.8rem] font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── WORDMARK ── */}
        <div className="relative overflow-hidden" style={{ lineHeight: 0, marginTop: 0 }}>
          <div className="wordmark-glow" />
          <span
            className="font-syne footer-text-stroke block w-full text-center font-bold tracking-[-2px] select-none"
            style={{
              fontSize: "clamp(3.5rem, 13vw, 12rem)",
              lineHeight: 0.82,
            }}
          >
            10xBizz
          </span>
        </div>
      </footer>
    </>
  );
}