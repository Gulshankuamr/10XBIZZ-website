import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

import HeroActionButton from "../ui/HeroActionButton";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";
import PromoBanner from "./PromoBanner";

// ─── Logo ────────────────────────────────────────────────────────────────────
const Logo = ({ small }) => (
  <div
    className={`bg-[#6B0AC9] rounded-full inline-flex items-center justify-center transition-all duration-300 ${
      small ? "px-1.5 py-0.5" : "px-2.5 py-1"
    }`}
  >
    <div
      className={`rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
        small
          ? "w-12 h-6"
          : "w-[90px] h-[48px] md:w-[95px] md:h-[52px]"
      }`}
    >
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
      { label: "Meta Ads Services",     path: "/services/marketing-meta-ads-servish",  iconSrc: "/public_svg_icone/icons8-meta-50.png" },
      { label: "CRM Automation",        path: "/services/crm-automation",              iconSrc: "/public_svg_icone/icons8-crm-50.png" },
      { label: "SEO Services",          path: "/services/seo-services",                iconSrc: "/public_svg_icone/icons8-seo-50.png" },
      { label: "Google My Business",    path: "/services/google-my-business-services", iconSrc: "/public_svg_icone/icons8-google-shopping-50.png" },
      { label: "Google Ads Management", path: "/services/google-ads-management",       iconSrc: "/public_svg_icone/icons8-google-ads-50.png" },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog",         path: "/blog" },
  { label: "About",        path: "/about" },
];

// ─── Desktop Chevron (same as before) ────────────────────────────────────────
const ChevronDown = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`ml-1.5 inline-block transition-transform duration-300 ${
      open ? "rotate-180" : "rotate-0"
    }`}
  >
    <polyline points="18 6 12 12 6 6" />
  </svg>
);

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────
const DropdownMenu = ({ items, visible, onClose }) => (
  <div
    className={`absolute top-[calc(100%)] left-1/2 -translate-x-1/2 w-[580px] z-50 transition-all duration-200 ${
      visible
        ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none -translate-y-1"
    }`}
    style={{ paddingTop: "8px" }}
  >
    <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="grid grid-cols-2 gap-1 p-2">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline text-gray-700 text-[14px] font-semibold hover:bg-purple-50 transition-colors duration-150"
          >
            <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center shrink-0 overflow-hidden">
              <img src={item.iconSrc} alt={item.label} className="w-6 h-6 object-contain" />
            </div>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="bg-gray-50 border-t border-gray-200 px-5 py-2 flex justify-between items-center">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          Growth Focused Solutions
        </span>
        <div className="w-10 h-1 bg-purple-200 rounded-full" />
      </div>
    </div>
  </div>
);

// ─── Mobile 3D Chevron Arrow ──────────────────────────────────────────────────
const MobileChevron = ({ open }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      borderRadius: "10px",
      flexShrink: 0,
      transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      background: open
        ? "linear-gradient(145deg, #5500cc, #8800ff)"
        : "linear-gradient(145deg, #ffffff, #ede8ff)",
      boxShadow: open
        ? "0 2px 0 #3a008a, 0 4px 12px rgba(100,0,161,0.45), inset 0 1px 0 rgba(255,255,255,0.15)"
        : "0 3px 0 #c4a8e8, 0 5px 14px rgba(100,0,161,0.18), inset 0 1px 0 rgba(255,255,255,1)",
      transform: open ? "translateY(3px)" : "translateY(0px)",
    }}
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={open ? "#ffffff" : "#6400A1"}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </span>
);

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
const MobileDrawer = ({ open, onClose, openMobileMenu, setOpenMobileMenu, onBookCall }) => (
  <>
    {/* Backdrop */}
    <div
      onClick={onClose}
      className={`lg:hidden fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    />

    {/* Drawer Panel */}
    <div
      className={`lg:hidden fixed top-0 right-0 z-[10000] shadow-2xl transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{
        width: "85%",
        maxWidth: 320,
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#faf8ff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #ede8ff",
          background: "linear-gradient(135deg, #6400A1 0%, #9000e0 100%)",
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 800, color: "rgba(255,255,255,0.85)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Menu
        </span>
        <button
          onClick={onClose}
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <X size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Nav Links */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px" }}>
        {NAV_ITEMS.map((item) => {
          const isOpen = openMobileMenu === item.label;
          return (
            <div key={item.label} style={{ marginBottom: "6px" }}>

              {/* ── Row ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "14px",
                  transition: "all 0.22s ease",
                  background: isOpen
                    ? "linear-gradient(135deg, #6400A1 0%, #9000e0 100%)"
                    : "linear-gradient(145deg, #ffffff, #f5f0ff)",
                  boxShadow: isOpen
                    ? "0 4px 0 #3a0070, 0 8px 20px rgba(100,0,161,0.38), inset 0 1px 0 rgba(255,255,255,0.15)"
                    : "0 3px 0 #d4bef5, 0 6px 16px rgba(100,0,161,0.1), inset 0 1px 0 rgba(255,255,255,1)",
                  transform: isOpen ? "translateY(4px)" : "translateY(0px)",
                  border: isOpen
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "1px solid rgba(180,140,240,0.3)",
                }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  style={{
                    flex: 1,
                    padding: "14px 16px",
                    fontSize: "13px",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: isOpen ? "#ffffff" : "#3d0080",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenMobileMenu(isOpen ? null : item.label);
                    }}
                    aria-label={`Toggle ${item.label} submenu`}
                    style={{
                      padding: "10px 12px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <MobileChevron open={isOpen} />
                  </button>
                )}
              </div>

              {/* ── Submenu ── */}
              {item.dropdown && (
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.35s ease, opacity 0.25s ease",
                    marginTop: isOpen ? "6px" : "0px",
                    marginBottom: isOpen ? "4px" : "0px",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "8px",
                      paddingLeft: "14px",
                      borderLeft: "3px solid #9000e0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      paddingTop: "4px",
                      paddingBottom: "4px",
                    }}
                  >
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        onClick={onClose}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 12px",
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "#4a0090",
                          textDecoration: "none",
                          borderRadius: "10px",
                          background: "linear-gradient(145deg,#ffffff,#f2ebff)",
                          boxShadow: "0 2px 0 #d8c2f8, 0 4px 10px rgba(100,0,161,0.1), inset 0 1px 0 rgba(255,255,255,1)",
                          border: "1px solid rgba(160,100,240,0.2)",
                          transition: "all 0.18s ease",
                        }}
                      >
                        {/* 3D icon pill */}
                        <span
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: "linear-gradient(145deg,#ffffff,#ede0ff)",
                            boxShadow: "0 2px 0 #c4a0e8, 0 4px 10px rgba(100,0,161,0.14), inset 0 1px 0 rgba(255,255,255,1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={sub.iconSrc}
                            alt={sub.label}
                            style={{ width: "20px", height: "20px", objectFit: "contain" }}
                          />
                        </span>
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {sub.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div
        style={{
          flexShrink: 0,
          padding: "16px",
          borderTop: "1px solid #ede8ff",
          background: "#f5f0ff",
        }}
      >
        <button
          onClick={() => { onClose(); onBookCall(); }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "15px 0",
            borderRadius: "14px",
            fontWeight: 800,
            fontSize: "13px",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(101deg, #6400A1 0%, #FF1920 100%)",
            boxShadow: "0 4px 0 #3a0060, 0 8px 20px rgba(100,0,161,0.35)",
            transition: "all 0.18s ease",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(4px)";
            e.currentTarget.style.boxShadow = "0 1px 0 #3a0060, 0 2px 8px rgba(100,0,161,0.3)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 0 #3a0060, 0 8px 20px rgba(100,0,161,0.35)";
          }}
        >
          Book Free Strategy Call
          <ArrowRight size={15} strokeWidth={3} />
        </button>
      </div>
    </div>
  </>
);

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled]             = useState(false);
  const [openMenu, setOpenMenu]             = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [bannerVisible, setBannerVisible]   = useState(true);
  const [openModal, setOpenModal]           = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth < 1024) return;
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setOpenMobileMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

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

      <div className="fixed top-0 left-0 right-0 z-50 w-full" ref={navRef}>

        {bannerVisible && <PromoBanner onHide={() => setBannerVisible(false)} />}

        <nav
          className={`w-full bg-white border-b border-gray-100 transition-all duration-300 ${
            scrolled ? "py-2 shadow-lg" : "py-3 md:py-4"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">

            <Link to="/" className="no-underline shrink-0" onClick={() => setOpenMenu(null)}>
              <Logo small={scrolled} />
            </Link>

            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);
                return (
                  <li
                    key={item.label}
                    className="relative py-4"
                    onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
                    onMouseLeave={() => item.dropdown && setOpenMenu(null)}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpenMenu(null)}
                      className={`flex items-center text-[14px] font-bold no-underline cursor-pointer p-0 m-0 ${
                        isActive || openMenu === item.label ? "text-[#6400A1]" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown open={openMenu === item.label} />}
                    </Link>
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

            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <HeroActionButton
                  onClick={() => setOpenModal(true)}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white font-bold text-[14px] no-underline border-0 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #7B00C2 0%, #FF1920 100%)",
                    boxShadow: "0 6px 18px -6px rgba(123,0,194,0.4)",
                  }}
                >
                  Book Strategy Call
                </HeroActionButton>
              </div>

              <button
                className="lg:hidden flex items-center justify-center p-2.5 bg-purple-50 border border-purple-100 rounded-xl cursor-pointer text-purple-700 hover:bg-purple-100 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={26} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => { setMobileOpen(false); setOpenMobileMenu(null); }}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        onBookCall={() => setOpenModal(true)}
      />

      {openModal && <FreeMarketingPlan onClose={() => setOpenModal(false)} />}
    </>
  );
}