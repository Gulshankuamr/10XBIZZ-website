import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Headphones,
  Database,
  Facebook,
  UserPlus,
  Search,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

// ─── Logo ────────────────────────────────────────────────────────────────────
const Logo = ({ small }) => (
  <div className={`bg-[#6B0AC9] rounded-full inline-flex items-center justify-center ${small ? "px-1.5 py-1" : "px-2.5 py-1.5"}`}>
    <div className={`rounded-full overflow-hidden flex items-center justify-center ${small ? "w-12 h-7" : "w-[85px] h-[50px]"}`}>
      <img src="/logonew.png" alt="10XBIZZ" className="w-full h-full object-contain" />
    </div>
  </div>
);

// ─── Nav Items ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Meta Ads Services",     path: "/services/marketing-meta-ads-servish",  icon: <Headphones size={18} /> },
      { label: "CRM Automation",        path: "/services/crm-automation",              icon: <Database size={18} /> },
      { label: "SEO Services",          path: "/services/seo-services",                icon: <Facebook size={18} /> },
      { label: "Google My Business",    path: "/services/google-my-business-services", icon: <UserPlus size={18} /> },
      { label: "Google Ads Management", path: "/services/google-ads-management",       icon: <Search size={18} /> },
      { label: "WhatsApp Automation",   path: "/services/whatsapp-automation",         icon: <MessageSquare size={18} /> },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog",         path: "/blog" },
  { label: "About",        path: "/about" },
];

// ─── Chevron ─────────────────────────────────────────────────────────────────
const ChevronDown = ({ open }) => (
  <svg
    width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
    className={`ml-1 inline-block transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Dropdown ────────────────────────────────────────────────────────────────
const DropdownMenu = ({ items, visible, onClose }) => (
  <div
    className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[580px] bg-white border border-gray-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-50 transition-opacity duration-200 ${
      visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="grid grid-cols-2 gap-1 p-3">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-3 rounded-xl no-underline text-gray-700 text-[13px] font-semibold hover:bg-purple-50 transition-colors duration-150"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            {item.icon}
          </div>
          {item.label}
        </Link>
      ))}
    </div>
    <div className="bg-gray-50 border-t border-gray-200 rounded-b-2xl px-5 py-2.5 flex justify-between items-center">
      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
        Growth Focused Solutions
      </span>
      <div className="w-10 h-1 bg-purple-200 rounded-full" />
    </div>
  </div>
);

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
const MobileDrawer = ({ open, onClose, openMenu, setOpenMenu }) => (
  <>
    <div
      onClick={onClose}
      className={`lg:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    />
    <div
      className={`lg:hidden fixed top-0 right-0 h-full z-[70] flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "85%", maxWidth: 310 }}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <span className="text-[11px] font-bold text-purple-700 uppercase tracking-widest">Menu</span>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 border-none cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <div
              onClick={() => {
                if (item.dropdown) {
                  setOpenMenu(openMenu === item.label ? null : item.label);
                } else {
                  onClose();
                  window.location.href = item.path;
                }
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer ${
                openMenu === item.label ? "bg-purple-50 text-purple-700" : "text-gray-800"
              }`}
            >
              <span className="text-[14px] font-bold uppercase tracking-wide">{item.label}</span>
              {item.dropdown && <ChevronDown open={openMenu === item.label} />}
            </div>

            {item.dropdown && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openMenu === item.label ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="ml-5 pl-4 border-l-2 border-purple-200 flex flex-col gap-0.5 py-1">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      onClick={onClose}
                      className="block py-2.5 text-[13px] font-semibold text-gray-500 no-underline"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <Link
          to="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[14px] text-white no-underline"
          style={{ background: "linear-gradient(101deg, #6400A1 0%, #FF1920 100%)" }}
        >
          Book Free Strategy Call
          <ArrowRight size={15} strokeWidth={3} />
        </Link>
      </div>
    </div>
  </>
);

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled]           = useState(false);
  const [openMenu, setOpenMenu]           = useState(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        * { font-family: 'Montserrat', sans-serif !important; }

        @keyframes shimmer {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        .promo-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -60%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmer 3s infinite linear;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50" ref={navRef}>

        {/* Promo Banner */}
        {bannerVisible && (
          <div className="promo-shimmer relative hidden md:flex items-center justify-center gap-4 overflow-hidden bg-[#0a0a0a] px-10 py-2.5">
            <div className="relative z-10 flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                Hot
              </span>
              <p
                className="m-0 text-[13px] font-semibold"
                style={{
                  background: "linear-gradient(125deg,#6400A1,#BB000F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Limited Offer: Get Free CRM Setup Worth Rs 9,999
              </p>
            </div>
            <a
              href="#"
              className="relative z-10 bg-[#6400A1] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full no-underline"
            >
              Claim Now
            </a>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-4 z-10 bg-transparent border-none cursor-pointer text-white/60 text-lg leading-none"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Nav */}
        <nav
          className={`w-full bg-white border-b border-gray-100 transition-all duration-300 ${
            scrolled ? "py-2 shadow-lg" : "py-4"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="no-underline shrink-0" onClick={() => setOpenMenu(null)}>
              <Logo small={scrolled} />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);

                return (
                  <li key={item.label} className="relative py-2">
                    {item.dropdown ? (
                      <button
                        onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                        className={`flex items-center text-[13px] font-bold bg-transparent border-none outline-none cursor-pointer p-0 m-0 ${
                          isActive || openMenu === item.label ? "text-[#6400A1]" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                        <ChevronDown open={openMenu === item.label} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setOpenMenu(null)}
                        className={`text-[13px] font-bold no-underline ${
                          isActive ? "text-[#6400A1]" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {item.dropdown && (
                      <DropdownMenu
                        items={item.dropdown}
                        visible={openMenu === item.label}
                        onClose={() => setOpenMenu(null)}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                onClick={() => setOpenMenu(null)}
                className="hidden lg:flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white font-bold text-[13px] no-underline"
                style={{
                  background: "linear-gradient(135deg, #7B00C2 0%, #FF1920 100%)",
                  boxShadow: "0 6px 18px -6px rgba(123,0,194,0.4)",
                }}
              >
                Book Strategy Call
                <ArrowRight size={14} strokeWidth={3} />
              </Link>

              <button
                className="lg:hidden flex flex-col gap-1.5 px-2.5 py-2 bg-purple-50 border border-purple-200 rounded-xl cursor-pointer"
                onClick={() => setMobileOpen(true)}
              >
                <span className="w-5 h-0.5 bg-purple-700 rounded-full block" />
                <span className="w-5 h-0.5 bg-purple-700 rounded-full block" />
                <span className="w-3.5 h-0.5 bg-purple-700 rounded-full block self-end" />
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