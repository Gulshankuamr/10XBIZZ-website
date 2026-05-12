import StickyWhatsapp from "../ui/StickyWhatsapp";

const links = [
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Free Marketing Plan", href: "#cta" },
];

export default function Footer() {
 return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .footer-root {
                    background: #090909;
                    padding: 60px 0 0 0;
                    font-family: 'DM Sans', sans-serif;
                }

                .footer-wrap {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 32px;
                }

                /* ── TOP: logo + tagline + social ── */
                .footer-top {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 48px;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding-bottom: 48px;
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }

                /* Logo */
                .brand-block { display: flex; flex-direction: column; gap: 18px; max-width: 340px; }

                .logo-mark {
                    display: flex;
                    align-items: flex-end;
                    gap: 6px;
                    line-height: 1;
                    font-family: 'Syne', sans-serif;
                }
                .logo-num {
                    font-size: 3.6rem;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -3px;
                }
                .logo-x {
                    font-size: 3.6rem;
                    font-weight: 800;
                    color: #E63232;
                    letter-spacing: -3px;
                    position: relative;
                    top: 0;
                }
                .logo-bizz {
                    font-size: 1rem;
                    font-weight: 700;
                    letter-spacing: 6px;
                    color: #D4A017;
                    text-transform: uppercase;
                    padding-bottom: 6px;
                }

                .brand-desc {
                    font-size: 0.875rem;
                    line-height: 1.75;
                    color: rgba(255,255,255,0.45);
                    font-weight: 300;
                }

                /* Social icons */
                .social-row { display: flex; gap: 12px; margin-top: 4px; }
                .social-btn {
                    width: 38px; height: 38px;
                    border-radius: 10px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.04);
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.55);
                    text-decoration: none;
                    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
                    cursor: pointer;
                }
                .social-btn:hover {
                    background: rgba(230,50,50,0.12);
                    border-color: #E63232;
                    color: #E63232;
                    transform: translateY(-2px);
                }

                /* ── NAV COLUMNS ── */
                .footer-nav {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 48px;
                }

                .nav-col { min-width: 130px; }
                .nav-col-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.78rem;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #D4A017;
                    margin-bottom: 20px;
                }
                .nav-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
                .nav-col ul li a {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.5);
                    text-decoration: none;
                    transition: color 0.2s, padding-left 0.2s;
                    display: inline-block;
                    font-weight: 300;
                }
                .nav-col ul li a:hover { color: #fff; padding-left: 4px; }

                /* ── CONTACT BLOCK ── */
                .contact-col { min-width: 200px; }
                .contact-col-title {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.78rem;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #D4A017;
                    margin-bottom: 20px;
                }
                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    margin-bottom: 14px;
                }
                .contact-icon {
                    width: 32px; height: 32px;
                    border-radius: 8px;
                    background: rgba(212,160,23,0.1);
                    border: 1px solid rgba(212,160,23,0.2);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                    margin-top: 1px;
                }
                .contact-icon svg { color: #D4A017; }
                .contact-text { display: flex; flex-direction: column; gap: 1px; }
                .contact-label { font-size: 0.7rem; color: rgba(255,255,255,0.3); letter-spacing: 1px; text-transform: uppercase; }
                .contact-value { font-size: 0.85rem; color: rgba(255,255,255,0.65); font-weight: 300; }

                /* ── DIVIDER ── */
                .footer-divider {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.07);
                    margin: 0;
                }

                /* ── BOTTOM BAR ── */
                .footer-bottom {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 0 0;
                }
                .footer-copy { font-size: 0.8rem; color: rgba(255,255,255,0.25); font-weight: 300; }
                .footer-bottom-links { display: flex; gap: 24px; }
                .footer-bottom-links a {
                    font-size: 0.8rem;
                    color: rgba(255,255,255,0.25);
                    text-decoration: none;
                    transition: color 0.2s;
                    font-weight: 300;
                }
                .footer-bottom-links a:hover { color: rgba(255,255,255,0.6); }

                /* ── WORDMARK ── */
                .footer-wordmark-wrap {
                    position: relative;
                    overflow: hidden;
                    margin-top: 0;
                    line-height: 0;
                }
                .footer-wordmark-glow {
                    position: absolute;
                    bottom: 0; left: 50%; transform: translateX(-50%);
                    width: 60%; height: 100%;
                    background: radial-gradient(ellipse at center bottom, rgba(230,50,50,0.18) 0%, transparent 70%);
                    pointer-events: none;
                }
                .footer-wordmark {
                    display: block;
                    width: 100%;
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(3.5rem, 13vw, 12rem);
                    font-weight: 800;
                    text-align: center;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.07);
                    letter-spacing: -2px;
                    line-height: 0.82;
                    padding-bottom: 0;
                    user-select: none;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .footer-top { flex-direction: column; gap: 40px; }
                    .footer-nav { gap: 32px; }
                }
                @media (max-width: 600px) {
                    .footer-wrap { padding: 0 20px; }
                    .footer-bottom { flex-direction: column; align-items: flex-start; }
                    .footer-bottom-links { flex-wrap: wrap; gap: 16px; }
                }
            `}</style>

            <footer className="footer-root">
                <div className="footer-wrap">

                    {/* ── TOP ROW ── */}
                    <div className="footer-top">

                        {/* Brand */}
                        <div className="brand-block">
                            <div className="logo-mark">
                                <span className="logo-num">1</span>
                                <span className="logo-num">0</span>
                                <span className="logo-x">✕</span>
                                <span className="logo-bizz">Bizz</span>
                            </div>
                            <p className="brand-desc">
                                Empowering growth with smart AI tools. At 10xbizz, we simplify processes and unlock potential—your goal, our AI-powered path to success.
                            </p>
                            <div className="social-row">
                                {/* Facebook */}
                                <a href="#" className="social-btn" title="Facebook">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </a>
                                {/* WhatsApp */}
                                <a href="#" className="social-btn" title="WhatsApp">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="social-btn" title="LinkedIn">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                                {/* YouTube */}
                                <a href="#" className="social-btn" title="YouTube">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Nav columns + contact */}
                        <div className="footer-nav">

                            {/* Resources */}
                            <div className="nav-col">
                                <p className="nav-col-title">Resources</p>
                                <ul>
                                    <li><a href="#">Course</a></li>
                                    <li><a href="#">Books</a></li>
                                    <li><a href="#">Youtube</a></li>
                                </ul>
                            </div>

                            {/* Quick Links */}
                            <div className="nav-col">
                                <p className="nav-col-title">Quick Links</p>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cancellation & Refund</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>

                            {/* Get In Touch */}
                            <div className="contact-col">
                                <p className="contact-col-title">Get In Touch</p>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Email</span>
                                        <span className="contact-value">care.10xbizz@gmail.com</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.09 6.09l.98-.98a2 2 0 0 1 2.1-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Phone</span>
                                        <span className="contact-value">+916291124216</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Hours</span>
                                        <span className="contact-value">Mon–Fri 9:00AM – 5:00PM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ── BOTTOM BAR ── */}
                    <div className="footer-bottom">
                        <p className="footer-copy">© 2026 10xBizz. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Refund Policy</a>
                        </div>
                    </div>
                </div>

                {/* ── WORDMARK ── */}
                <div className="footer-wordmark-wrap">
                    <div className="footer-wordmark-glow" />
                    <span className="footer-wordmark">10xBizz</span>
                </div>
            </footer>
        </>
    );
}
