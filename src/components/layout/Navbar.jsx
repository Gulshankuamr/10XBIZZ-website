import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Headphones, 
  Database, 
  Facebook, 
  UserPlus, 
  Search, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

// --- Logo Component ---
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

// --- Navigation Data with Icons ---
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { 
        label: "Meta Ads Services", 
        path: "/services/marketing-meta-ads-servish",
        icon: <Headphones size={20} className="text-blue-600" />
      },
      { 
        label: "CRM Automation", 
        path: "/services/crm-automation",
        icon: <Database size={20} className="text-blue-600" />
      },
      { 
        label: "Facebook Ads", 
        path: "/services/facebook-ads",
        icon: <Facebook size={20} className="text-blue-600" />
      },
      { 
        label: "Lead Generation", 
        path: "/services/lead-generation",
        icon: <UserPlus size={20} className="text-blue-600" />
      },
      { 
        label: "Google Ads Management", 
        path: "/services/google-ads-management",
        icon: <Search size={20} className="text-blue-600" />
      },
      { 
        label: "WhatsApp Automation", 
        path: "/services/whatsapp-automation",
        icon: <MessageSquare size={20} className="text-blue-600" />
      },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

// --- Helper Components ---
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
    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 transition-all duration-300 ${
      visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
    }`}
  >
    <div className="grid grid-cols-2 p-3 gap-x-2">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          className="group flex items-center gap-4 px-4 py-4 hover:bg-purple-50 transition-all duration-200 border-b border-gray-50 no-underline"
        >
          {/* Icon Box */}
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300">
            {item.icon}
          </div>
          
          <span className="text-[14px] font-bold text-gray-700 group-hover:text-purple-700 transition-colors">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
    <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
        <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Growth Focused Solutions</span>
        <div className="h-1.5 w-12 bg-purple-200 rounded-full"></div>
    </div>
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
        <span className="font-black text-purple-700 text-sm tracking-widest">MENU</span>
        <button onClick={onClose} className="p-2 bg-purple-50 rounded-full text-purple-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="w-full">
            <div
              onClick={() => item.dropdown ? setOpenMenu(openMenu === item.label ? null : item.label) : (onClose(), window.location.href=item.path)}
              className={`flex items-center justify-between p-4 rounded-xl transition-all ${openMenu === item.label ? "bg-purple-50" : "bg-transparent"}`}
            >
              <span className={`text-[15px] font-extrabold uppercase tracking-wide ${openMenu === item.label ? "text-purple-700" : "text-gray-800"}`}>
                {item.label}
              </span>
              {item.dropdown && <ChevronDown open={openMenu === item.label} />}
            </div>
            {item.dropdown && (
              <div className={`overflow-hidden transition-all duration-300 ${openMenu === item.label ? "max-h-[500px] mt-1" : "max-h-0"}`}>
                <div className="ml-6 border-l-2 border-purple-200 pl-4 flex flex-col gap-1">
                  {item.dropdown.map((sub, i) => (
                    <Link key={i} to={sub.path} onClick={onClose} className="py-3 text-[14px] font-semibold text-gray-500 hover:text-purple-700 no-underline block">
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
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-xs text-white no-underline shadow-lg"
          style={{ background: "linear-gradient(101.78deg, #6400A1 0%, #FF1920 100%)" }}
        >
          BOOK FREE STRATEGY CALL
          <ArrowRight size={16} strokeWidth={3} />
        </Link>
      </div>
    </div>
  </>
);

// --- Main Navbar Component ---
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

  const handleMouseEnter = (label) => { 
    clearTimeout(closeTimer.current); 
    setOpenMenu(label); 
  };
  
  const handleMouseLeave = () => { 
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150); 
  };

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
          padding: 8px 0;
        }

        .nav-link:hover, .nav-link.active-link {
          color: #000 !important;
          font-weight: 800 !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0;
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
          <div className="promo-shimmer relative hidden w-full items-center justify-center gap-4 overflow-hidden bg-[#090909] px-10 py-2.5 md:flex">
            <div className="relative z-10 flex items-center gap-2">
              <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-black text-white uppercase">Hot</span>
              <p className="m-0 text-sm font-extrabold tracking-wide bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] bg-clip-text text-transparent">
                Limited Offer: Get Free CRM Setup Worth Rs 9,999
              </p>
            </div>
            <a href="#" className="relative z-10 rounded-full bg-[#6400A1] px-5 py-2 text-[11px] font-black uppercase tracking-wide text-white no-underline transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(100,0,161,0.6)]">
              Claim Now
            </a>
            <button onClick={() => setBannerVisible(false)} className="absolute right-4 z-10 text-lg font-bold text-white/70 transition hover:text-white">✕</button>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <nav className={`w-full transition-all duration-300 border-b border-gray-100 bg-white ${scrolled ? "shadow-xl py-2" : "py-4"}`}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
            
            <Link to="/" className="flex-shrink-0 no-underline">
              <Logo small={scrolled} />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 list-none m-0 p-0">
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

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-full text-white font-extrabold text-sm no-underline transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #7B00C2 0%, #FF1920 100%)",
                  boxShadow: "0 10px 20px -10px rgba(123, 0, 194, 0.5)",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Book Strategy Call
                <div className="bg-white/20 p-1 rounded-full">
                   <ArrowRight size={14} strokeWidth={3} />
                </div>
              </Link>

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