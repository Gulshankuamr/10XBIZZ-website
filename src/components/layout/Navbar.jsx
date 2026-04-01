import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Logo = ({ small }) => (
  <svg
    width={small ? 48 : 58}
    height={small ? 48 : 58}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300"
    style={{ borderRadius: 16 }}
  >
    <rect width="120" height="120" rx="24" fill="#6B0AC9" />
    <text x="10" y="72" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="52" fontWeight="900" fill="white">10</text>
    <line x1="62" y1="18" x2="110" y2="80" stroke="#E8002A" strokeWidth="14" strokeLinecap="round"/>
    <line x1="110" y1="18" x2="62" y2="80" stroke="#E8002A" strokeWidth="14" strokeLinecap="round"/>
    <text x="14" y="108" fontFamily="'Plus Jakarta Sans',sans-serif" fontSize="22" fontWeight="900" fill="#FFD700" letterSpacing="3">BIZZ</text>
  </svg>
);

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Consultation", path: "/services/marketing-consultation" },
      { label: "CRM", path: "/services/crm-automation" },
      { label: "Facebook Ads", path: "/services/facebook-ads" },
      { label: "Lead Generation", path: "/services/lead-generation" },
      { label: "Sales Funnel", path: "/services/sales-funnel" },
      { label: "WhatsApp Automation", path: "/services/whatsapp-automation" },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
];

const ChevronDown = ({ open }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="inline-block ml-1 transition-transform duration-200"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const DropdownMenu = ({ items, visible }) => (
  <div
    className={`absolute top-full left-0 mt-3 w-52 bg-white border border-purple-100 rounded-xl overflow-hidden shadow-2xl shadow-purple-100/60 z-50 transition-all duration-200 ${
      visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.path}
        className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-150 border-b border-gray-100 last:border-0 no-underline"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-purple-600 transition-colors flex-shrink-0" />
        {item.label}
      </Link>
    ))}
  </div>
);

const MobileDrawer = ({ open, onClose, openMenu, setOpenMenu }) => (
  <>
    <div
      onClick={onClose}
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
    />
    <div
      className="lg:hidden fixed top-0 right-0 h-full z-50 flex flex-col bg-white"
      style={{
        width: "82%", maxWidth: 300,
        borderLeft: "1px solid rgba(107,10,201,0.2)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        willChange: "transform",
      }}
    >
      <div className="flex items-center justify-end p-3.5 border-b border-purple-100">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors duration-200"
          style={{ background: "rgba(107,10,201,0.08)", border: "1px solid rgba(107,10,201,0.25)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B0AC9" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <div
              onClick={() => {
                if (item.dropdown) setOpenMenu(openMenu === item.label ? null : item.label);
                else onClose();
              }}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: openMenu === item.label ? "rgba(107,10,201,0.08)" : "transparent",
                border: openMenu === item.label ? "1px solid rgba(107,10,201,0.2)" : "1px solid transparent",
              }}
            >
              <Link
                to={item.path || "#"}
                onClick={(e) => { if (item.dropdown) e.preventDefault(); else onClose(); }}
                className="flex-1 text-sm font-bold uppercase tracking-wider no-underline transition-colors duration-150"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: openMenu === item.label ? "#6B0AC9" : "#333" }}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div
                  className="flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 transition-all duration-200"
                  style={{
                    background: openMenu === item.label ? "rgba(107,10,201,0.12)" : "rgba(107,10,201,0.06)",
                    border: "1px solid rgba(107,10,201,0.2)",
                  }}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke={openMenu === item.label ? "#6B0AC9" : "#999"}
                    strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-200"
                    style={{ transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              )}
            </div>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: openMenu === item.label ? `${(item.dropdown?.length || 0) * 48}px` : "0px" }}
            >
              <div className="ml-3 mt-1 mb-1 pl-3.5 flex flex-col gap-0.5" style={{ borderLeft: "2px solid rgba(107,10,201,0.3)" }}>
                {item.dropdown?.map((sub, i) => (
                  <Link key={i} to={sub.path} onClick={onClose} className="no-underline">
                    <div className="flex items-center gap-2.5 py-2 text-sm text-gray-500 rounded-lg transition-colors duration-150 hover:text-purple-700">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 opacity-70">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {sub.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 pb-5" style={{ borderTop: "1px solid rgba(107,10,201,0.15)" }}>
        <Link
          to="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 no-underline w-full py-4 rounded-xl font-extrabold text-sm text-white transition-opacity duration-200 hover:opacity-90"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: "linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%)",
            letterSpacing: "0.05em",
          }}
        >
          Book Free Strategy Call
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  </>
);

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [openMenu, setOpenMenu]           = useState(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const closeTimer                        = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label); };
  const handleMouseLeave = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { font-family: 'Plus Jakarta Sans', sans-serif; }

        .nav-link {
          position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 14px;
          font-style: normal;
          letter-spacing: 0.01em;
          color: #333;
          transition: color 0.2s;
          padding-bottom: 2px;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%);
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .nav-link:hover { color: #6400A1; }
        .nav-link:hover::after,
        .nav-link.active-link::after { width: 100%; }
        .nav-link.active-link { color: #6400A1; }

        /* ✅ Remove hover bg on nav items */
        .nav-link-wrap:hover { background: transparent !important; }

        @keyframes shimmer {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        .promo-shimmer::after {
          content: '';
          position: absolute; top: 0; left: -60%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.32) 50%, transparent 100%);
          animation: shimmer 3.2s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">

        {/* PROMO BANNER */}
        {bannerVisible && (
          <div
            className="promo-shimmer relative w-full flex items-center justify-center gap-3 overflow-hidden"
            style={{ background: "#FED303", minHeight: 44, padding: "8px 44px 8px 16px" }}
          >
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <span className="text-base">🔥</span>
              <span
                className="text-sm text-gray-900"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                <strong className="font-extrabold">Limited Offer:</strong> Get Free CRM Setup Worth ₹9,999
              </span>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center flex-shrink-0 font-extrabold uppercase text-white transition-all duration-150"
              style={{
                padding: "5px 18px",
                fontSize: 12,
                letterSpacing: "0.6px",
                borderRadius: 9999,
                background: "linear-gradient(104.34deg, #FF1920 0%, #FED303 100%)",
                boxShadow: "0 2px 8px rgba(255,25,32,0.35)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,25,32,0.48)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(255,25,32,0.35)";
              }}
            >
              Claim Now
            </a>

            <button
              onClick={() => setBannerVisible(false)}
              aria-label="Close banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer text-black/50 hover:text-black/90 transition-colors text-base leading-none p-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* ✅ NAVBAR — no rounding, no side padding, always full width, pure white */}
        <nav
          className="w-full transition-all duration-300"
          style={{
            background: "#ffffff",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            borderRadius: 0,
            boxShadow: scrolled
              ? "0 2px 16px rgba(0,0,0,0.08)"
              : "none",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <div
            className="mx-auto flex items-center justify-between"
            style={{
              maxWidth: 1280,
              padding: scrolled ? "10px 28px" : "12px 28px",
            }}
          >

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 no-underline">
              <Logo small={scrolled} />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* ✅ nav-link-wrap removes hover bg */}
                  <Link
                    to={item.path || "#"}
                    className={`nav-link nav-link-wrap flex items-center px-3 py-2 rounded-lg transition-all duration-150 ${
                      openMenu === item.label ? "active-link" : ""
                    }`}
                    style={{ background: "transparent" }}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown open={openMenu === item.label} />}
                  </Link>
                  {item.dropdown && <DropdownMenu items={item.dropdown} visible={openMenu === item.label} />}
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-2 lg:gap-3">

              {/* WhatsApp — desktop */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 no-underline font-bold transition-all duration-150"
                style={{
                  color: "#6400A1",
                  border: "1.5px solid #6400A1",
                  borderRadius: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: scrolled ? "7px 14px" : "9px 18px",
                  background: "transparent",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(100,0,161,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <svg width="15" height="15" viewBox="0 0 32 32" fill="#6400A1">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.666 4.785 1.82 6.774L2 30l7.418-1.794A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.836-1.596l-.418-.248-4.404 1.065 1.1-4.282-.272-.44A11.47 11.47 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.345-.172-2.04-1.006-2.356-1.12-.316-.115-.547-.172-.777.172s-.892 1.12-1.093 1.351c-.2.23-.402.259-.747.086-.345-.173-1.455-.537-2.771-1.71-1.024-.912-1.715-2.04-1.916-2.385-.2-.345-.021-.532.15-.703.155-.154.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.603-.086-.172-.777-1.873-1.064-2.564-.28-.672-.565-.58-.777-.59l-.661-.012c-.23 0-.603.086-.92.43s-1.208 1.18-1.208 2.876 1.237 3.337 1.41 3.567c.172.23 2.434 3.716 5.898 5.21.824.356 1.468.568 1.968.728.827.263 1.58.226 2.174.137.663-.1 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.085-.144-.316-.23-.66-.402z"/>
                </svg>
                WhatsApp
              </a>

              {/* Book Strategy Call — desktop */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 no-underline font-bold text-white transition-all duration-150"
                style={{
                  background: "linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%)",
                  borderRadius: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                  padding: scrolled ? "7px 16px" : "9px 20px",
                  boxShadow: "0 4px 14px rgba(100,0,161,0.28)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(100,0,161,0.38)";
                  e.currentTarget.style.filter = "brightness(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(100,0,161,0.28)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                Book Strategy Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              {/* Hamburger — mobile */}
              <button
                className="lg:hidden flex flex-col justify-center items-center gap-[5px] cursor-pointer flex-shrink-0"
                style={{
                  width: 42, height: 42,
                  background: "rgba(100,0,161,0.08)",
                  border: "1.5px solid rgba(100,0,161,0.3)",
                  borderRadius: 9,
                }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="block rounded-sm" style={{ width: 20, height: 2, background: "#6400A1" }} />
                <span className="block rounded-sm" style={{ width: 20, height: 2, background: "#6400A1" }} />
                <span className="block rounded-sm self-end" style={{ width: 13, height: 2, background: "#6400A1", marginRight: 3 }} />
              </button>
            </div>

          </div>
        </nav>
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => { setMobileOpen(false); setOpenMenu(null); }}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
    </>
  );
}