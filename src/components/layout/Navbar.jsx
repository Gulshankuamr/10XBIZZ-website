import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = ({ small }) => (
  <div
    style={{
      backgroundColor: "#6B0AC9",
      borderRadius: "999px",
      padding: small ? "4px 6px" : "6px 10px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: small ? 48 : 85,
        height: small ? 28 : 50,
        borderRadius: "999px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/logonew.png"
        alt="10XBIZZ"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "999px",
        }}
      />
    </div>
  </div>
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
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

const ChevronDown = ({ open }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={`inline-block ml-1 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const DropdownMenu = ({ items, visible }) => (
  <div
    className={`absolute top-full left-0 mt-3 w-60 bg-white border border-purple-100 rounded-xl overflow-hidden shadow-2xl z-50 transition-all duration-200 ${
      visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >
    {items.map((item, i) => (
      <Link
        key={i}
        to={item.path}
        className="group flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-all duration-150 border-b border-gray-50 last:border-0 no-underline"
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
      className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    />
    <div
      className="lg:hidden fixed top-0 right-0 h-full z-[70] flex flex-col bg-white shadow-2xl"
      style={{
        width: "85%", maxWidth: 320,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <span className="font-bold text-purple-700">MENU</span>
        <button onClick={onClose} className="p-2 bg-purple-50 rounded-full text-purple-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="w-full">
            <div
              onClick={() => item.dropdown ? setOpenMenu(openMenu === item.label ? null : item.label) : onClose()}
              className={`flex items-center justify-between p-4 rounded-xl transition-all ${openMenu === item.label ? "bg-purple-50" : "bg-transparent"}`}
            >
              <Link
                to={item.path || "#"}
                onClick={(e) => item.dropdown && e.preventDefault()}
                className={`text-[15px] font-extrabold uppercase tracking-wide no-underline ${openMenu === item.label ? "text-purple-700" : "text-gray-800"}`}
              >
                {item.label}
              </Link>
              {item.dropdown && <ChevronDown open={openMenu === item.label} />}
            </div>
            {item.dropdown && (
              <div className={`overflow-hidden transition-all duration-300 ${openMenu === item.label ? "max-h-[400px] mt-1" : "max-h-0"}`}>
                <div className="ml-6 border-l-2 border-purple-200 pl-4 flex flex-col gap-1">
                  {item.dropdown.map((sub, i) => (
                    <Link key={i} to={sub.path} onClick={onClose} className="py-3 text-[14px] font-medium text-gray-500 hover:text-purple-700 no-underline block">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-gray-100">
        <Link
          to="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-sm text-white no-underline shadow-lg"
          style={{ background: "linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%)" }}
        >
          BOOK FREE STRATEGY CALL
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
      </div>
    </div>
  </>
);

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label); };
  const handleMouseLeave = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }

        .nav-link {
          position: relative;
          font-weight: 700;
          font-size: 14px;
          color: #444;
          transition: all 0.2s ease-in-out;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        /* Hover: Color Black and Extra Bold */
        .nav-link:hover, .nav-link.active-link {
          color: #000 !important;
          font-weight: 800 !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2.5px;
          background: linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after, .nav-link.active-link::after { width: 100%; }

        @keyframes shimmer { 0% { left: -60%; } 100% { left: 160%; } }
        .promo-shimmer::after {
          content: ''; position: absolute; top: 0; left: -60%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
          animation: shimmer 3s infinite linear;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">
        {/* PROMO BANNER */}
        {bannerVisible && (
          <div className="promo-shimmer relative w-full hidden md:flex items-center justify-center gap-4 overflow-hidden bg-[#FED303] py-2.5 px-10">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">HOT</span>
              <p className="m-0 text-sm font-bold text-gray-900">
                Limited Offer: Get Free CRM Setup Worth Rs 9,999
              </p>
            </div>
            <a href="#" className="bg-black text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-full no-underline hover:scale-105 transition-transform">
              Claim Now
            </a>
            <button onClick={() => setBannerVisible(false)} className="absolute right-4 text-gray-800 font-bold">✕</button>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <nav className={`w-full transition-all duration-300 border-b border-gray-100 bg-white ${scrolled ? "shadow-lg py-2" : "py-4"}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 no-underline">
              <Logo small={scrolled} />
            </Link>

            {/* Desktop Nav - Added more gap here */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-10 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive = item.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.path);

                return (
                  <li
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path || "#"}
                      className={`nav-link ${openMenu === item.label || isActive ? "active-link" : ""}`}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown open={openMenu === item.label} />}
                    </Link>
                    {item.dropdown && <DropdownMenu items={item.dropdown} visible={openMenu === item.label} />}
                  </li>
                );
              })}
            </ul>

            {/* Right Action Button */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full text-white font-extrabold text-sm no-underline transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #7B00C2 0%, #FF1920 100%)",
                  boxShadow: "0 10px 20px -10px rgba(123, 0, 194, 0.5)",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Book Strategy Call
                <div className="bg-white/20 p-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-2.5 bg-purple-50 border border-purple-200 rounded-xl"
                onClick={() => setMobileOpen(true)}
              >
                <span className="w-6 h-0.5 bg-purple-700 rounded-full"></span>
                <span className="w-6 h-0.5 bg-purple-700 rounded-full"></span>
                <span className="w-4 h-0.5 bg-purple-700 rounded-full self-end"></span>
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