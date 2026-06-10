import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Share2, User, Grid, Link2, ChevronRight, Trophy, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { caseStudies } from "./data";

export default function Detail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!study) {
    return (
      <section className="bg-white mt-[64px] px-6 py-20 text-center font-sans">
        <h1 className="text-3xl font-bold text-[#1a1c1c]">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-black no-underline">
          <ArrowLeft size={14} /> Back to case studies
        </Link>
      </section>
    );
  }

  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  const faqs = [
    {
      q: "How is citizen privacy maintained?",
      a: "All tracking layers utilize decentralized hashes. No raw biometric or identity records are synced back to secondary storage tiers."
    },
    {
      q: "What happens during a power fixture?",
      a: "Edge nodes utilize ultra-capacitor arrays capable of maintaining mesh routing operations for up to twelve hours autonomously."
    }
  ];

  return (
    <div className="bg-white font-sans text-black selection:bg-black selection:text-white antialiased">
      {/* Reading Progress Bar */}
    

      {/* Top Header/Navbar */}
    

      <main className="pt-14">
        {/* Full Image Banner Component */}
        <section className="w-full h-[320px] md:h-[420px] relative overflow-hidden">  
          <img
            src={study.coverImage}
            alt={study.title}
            className="w-full h-full object-cover filter grayscale brightness-75"
          />
        </section>

        {/* Floating Content Card Wrapper */}
       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative -mt-40 z-10">
  <div className="bg-white max-w-5xl pl-8 md:pl-12 lg:pl-16 pr-6 md:pr-10 lg:pr-14 py-10 shadow-sm">
    
    {/* Breadcrumb */}
    <nav className="flex items-center gap-1.5 mb-5 text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
      <Link to="/" className="hover:text-black transition-colors no-underline">
        Home
      </Link>

      <span className="text-gray-300">/</span>

      <Link
        to="/case-studies"
        className="hover:text-black transition-colors no-underline"
      >
        Case Studies
      </Link>

      <span className="text-gray-300">/</span>

      <span className="text-gray-900">
        {study.category}
      </span>
    </nav>

    {/* Category */}
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase mb-5">
      {study.category}
    </span>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.05] tracking-tight text-gray-900 mb-6 max-w-4xl">
      {study.title}
    </h1>

    {/* Subtitle */}
    {study.excerpt && (
      <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mb-8">
        {study.excerpt}
      </p>
    )}

    {/* Meta Info */}
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-5">
      <div className="flex items-center gap-3">
        <img
          src={study.clientImage}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />

        <div>
          <p className="font-semibold text-gray-900 leading-none">
            Alexandros Kouras
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Case Study Author
          </p>
        </div>
      </div>

      <span className="hidden md:block text-gray-300">•</span>

      <span>23 April 2024</span>

      <span className="hidden md:block text-gray-300">•</span>

      <span className="flex items-center gap-1">
        <Clock size={14} />
        {study.readTime || "12 min read"}
      </span>
    </div>
  </div>
</div>

        {/* Dynamic Inner Layout Grid */}
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 mb-24">
          
          {/* Exact Sticky Left Content Side Menu */}
          <aside className="col-span-1 md:col-span-3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 p-4 border border-gray-100">
                <h4 className="text-[11px] font-bold tracking-wider uppercase mb-1 text-gray-900">Case Study Menu</h4>
                <p className="text-[10px] text-gray-400 mb-4 font-mono">Analysis Artifact</p>
                <nav className="flex flex-col gap-1.5">
                  {[
                    { icon: <Grid size={13} />, label: "Table of Contents", href: "#toc", active: true },
                    { icon: <Share2 size={13} />, label: "Share Analysis", href: "#" },
                    { icon: <User size={13} />, label: "About Author", href: "#author" },
                    { icon: <Grid size={13} />, label: "Related Studies", href: "#related" },
                  ].map(({ icon, label, href, active }) => (
                    <a
                      key={label}
                      href={href}
                      className={`flex items-center gap-2 py-1 text-xs no-underline transition-colors ${
                        active ? "font-bold text-gray-900" : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Share block */}
              <div className="space-y-3 pl-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Share</p>
                <div className="flex gap-2">
                  {[
                    { icon: <Link2 size={14} /> },
                    {
                      icon: (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      )
                    },
                    {
                      icon: (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )
                    }
                  ].map((btn, i) => (
                    <button
                      key={i}
                      className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-all"
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article Main Text Section */}
          <article ref={articleRef} className="col-span-1 md:col-span-9 max-w-xl">
            <div className="space-y-6 text-[15px] leading-[1.65] text-gray-800 font-serif">

              {/* Accurate Drop cap implementation */}
              <p className="text-gray-900 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:leading-[0.85] first-letter:pt-1">
                {study.excerpt || "The evolution of metropolitan hubs is no longer merely a question of concrete and steel. In the modern era, the intelligence of a city is measured by the fidelity of its data and the responsiveness of its infrastructure to the needs of millions. As we move towards 2030, the integration of IoT sensors and real-time analytics is redefining what it means to live in an 'efficient' environment."}
              </p>

              <h2 id="toc" className="text-lg font-bold text-gray-900 pt-4 tracking-tight font-sans">
                Designing for Scale
              </h2>
              <p>
                When we initiated the "Project Aether" initiative in Copenhagen, the primary challenge wasn't just collecting data—it was creating a scalable architecture that could handle petabytes of environmental information without latency. We needed to ensure that every street light, every bus sensor, and every air quality monitor functioned as a single, cohesive nervous system.
              </p>

              {/* Exact Quote Box Layout */}
              <blockquote className="my-8 pl-5 border-l border-gray-900 py-2">
                <p className="text-[19px] leading-relaxed italic text-gray-900 font-serif">
                  "Data is the new asphalt; it's the foundation upon which every future city will be built."
                </p>
                <cite className="block mt-2 text-[9px] font-sans text-gray-400 not-italic uppercase tracking-widest font-semibold">
                  — ANNETTE THOMAS, HEAD OF URBAN INNOVATIONS
                </cite>
              </blockquote>

              {/* Twin Metrics Row */}
              <div className="grid grid-cols-2 gap-4 py-4 my-6 text-center">
                <div>
                  <span className="block text-3xl font-bold font-sans text-blue-600">45%</span>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400 font-sans block mt-1">Reduction in Traffic</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold font-sans text-blue-600">20%</span>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-gray-400 font-sans block mt-1">Energy Saved</span>
                </div>
              </div>

              <p>
                The results were immediate. By utilizing predictive modeling, we were able to reroute public transport in real-time based on pedestrian density, reducing commute times by nearly half in high-congestion zones.
              </p>

              {/* Micro-processor/Diagram Image component placeholder */}
              <figure className="my-6">
                <div className="bg-gray-100 overflow-hidden border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
                    alt="Infrastructure Node Processing Block"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-gray-400 font-sans flex justify-between items-start">
                  <span>Fig 1.2: Distributed Network Intelligence Node Dashboard.</span>
                  <span className="font-bold uppercase text-[9px] text-gray-300">INSIGHT GRAPHICS</span>
                </figcaption>
              </figure>

              {/* Column Flex: Challenge Text and Sidebar Card Component */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-8 items-start font-sans">
                <div className="sm:col-span-7 space-y-2">
                  <h3 className="text-sm font-bold text-gray-900">Interoperability Challenges</h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    The biggest hurdle remains the fragmentation of legacy platforms. Integrating 40-year-old power grids with cutting-edge edge computing requires an abstraction layer that handles raw execution sequences without failover leaks.
                  </p>
                </div>
                <div className="sm:col-span-5 bg-gray-50 p-4 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-[10px] tracking-wider uppercase">Key Insights</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Decentralized mesh management reduces failover points.",
                      "Primary flow encryption is non-negotiable for public trust.",
                      "Cloud-native caching allows sub-millisecond batch updates."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-[11px] text-gray-600 items-start">
                        <svg className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exact Timeline Structure */}
              <div className="my-8 space-y-4 font-sans">
                <h3 className="text-base font-bold text-gray-900 tracking-tight">Project Milestones</h3>
                <div className="relative pl-5 space-y-5 border-l border-gray-200">
                  {[
                    { title: "Q1 2023: Foundation", desc: "Installation of initial fiber opt-layers across the Central Business District." },
                    { title: "Q3 2023: Integration", desc: "First 500 edge nodes brought online linking public bus lines to telemetry hubs." },
                    { title: "Q1 2024: Optimization", desc: "Deployment of automated traffic-signal parameters for emergency vectors." },
                    { title: "Q4 2024: Review", desc: "Final performance analysis tracking grid-load efficiency across regions.", final: true }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-[24.5px] top-1.5 w-2 h-2 rounded-full ${
                          step.final ? "bg-emerald-600 ring-4 ring-emerald-50" : "bg-black ring-4 ring-white"
                        }`}
                      />
                      <h5 className={`font-bold text-xs ${step.final ? "text-emerald-700" : "text-gray-900"}`}>
                        {step.title}
                      </h5>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Micro Accordion Accorded FAQ Section */}
              <div className="my-8 bg-gray-50 p-4 border border-gray-100 font-sans">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-3">Frequently Asked Questions</p>
                <div className="space-y-2.5">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-200/60 pb-2.5 last:border-0 last:pb-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex justify-between items-center w-full text-left font-bold text-gray-800 text-xs hover:text-black"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={14}
                          className={`text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openFaq === i && (
                        <p className="mt-1.5 text-[11px] text-gray-500 leading-relaxed font-normal">{faq.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome summary card layout */}
              <div className="my-8 p-4 bg-blue-600 text-white font-sans">
                <div className="flex items-start gap-3">
                  <Trophy size={18} className="flex-shrink-0 mt-0.5 text-blue-200" />
                  <div>
                    <h4 className="font-bold text-xs tracking-wide uppercase text-blue-100">Outcome Summary</h4>
                    <p className="text-xs opacity-90 leading-relaxed mt-1">
                      {study.finalOutcome || "The network architecture achieved a massive 42% latency optimization reduction across IoT nodes and saved the municipal power budget upwards of $4M annually during testing parameters."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Segment */}
              <div id="author" className="mt-12 pt-6 border-t border-gray-100 font-sans">
                <div className="flex gap-4 items-start">
                  <img
                    src={study.clientImage}
                    alt="Alexandros Kouras"
                    className="w-12 h-12 rounded-full border border-gray-200 object-cover grayscale"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">Alexandros Kouras</h4>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                      Alexandros is a Senior Technology Editor at InsightJournal, researching intersectional computing networks and city management metrics. Has 12+ years documenting edge architecture structures.
                    </p>
                    <div className="flex gap-3 mt-2 text-[10px] font-bold text-gray-900">
                      <a href="#" className="hover:underline no-underline">View Profile</a>
                      <a href="#" className="hover:underline no-underline">Follow on Twitter</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Deep Dive Panel */}
              <div className="my-12 p-8 bg-black text-white text-center font-sans">
                <h3 className="text-xl font-serif font-bold tracking-tight mb-2">
                  Ready for the deep dive?
                </h3>
                <p className="mb-5 text-gray-400 max-w-sm mx-auto text-[11px] leading-relaxed">
                  Access the complete 160-page technical report, featuring raw data sets and implementation blueprints.
                </p>
                <button className="bg-white text-black px-6 py-2.5 font-bold hover:bg-gray-100 transition-colors text-xs rounded-none">
                  Download the Full Technical Report
                </button>
              </div>

              {/* Bottom Nav Links */}
              <nav className="flex justify-between border-t border-gray-100 pt-6 font-sans text-xs">
                <div className="max-w-[45%]">
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest block mb-1 font-semibold">Previous Analysis</span>
                  <Link to="/case-studies" className="font-bold text-black hover:text-blue-600 transition-colors no-underline">
                    Sustainable Concrete: The Bio-Enzymatic Revolution
                  </Link>
                </div>
                <div className="max-w-[45%] text-right">
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest block mb-1 font-semibold">Next Analysis</span>
                  <Link to="/case-studies" className="font-bold text-black hover:text-blue-600 transition-colors no-underline">
                    Quantum Encryption in Financial Networks
                  </Link>
                </div>
              </nav>

            </div>
          </article>
        </div>

        {/* Related Case Studies Section bottom block */}
        <section id="related" className="bg-gray-50 py-14 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-sm font-bold text-gray-900 tracking-tight uppercase">
                Related Case Studies
              </h3>
              <Link
                to="/case-studies"
                className="text-xs font-bold text-gray-500 hover:text-black flex items-center gap-0.5 no-underline"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { cat: "Energy", title: "Grid Autonomy: Rethinking Communities Storage", desc: "Independent array architectures deliver local fail-safes during brownouts.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop" },
                { cat: "Cybersecurity", title: "Fortifying the Edge: Municipal Security Protocols", desc: "Mesh structures defending localized systems from vector intrusion sets.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop" },
                { cat: "Mobility", title: "The Last Mile: Autonomous Micro-Transit", desc: "On-demand shuttle implementations reduce carbon metrics across grids.", img: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=400&auto=format&fit=crop" }
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/70 hover:border-gray-400 transition-all cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5 font-sans">
                    <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tight">{s.cat}</span>
                    <h4 className="font-bold text-gray-900 text-xs mt-1 leading-tight hover:underline">
                      {s.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Styled Clean Footer component */}
      <footer className="bg-gray-50 border-t border-gray-200/60 font-sans">
        <div className="w-full py-8 px-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-gray-900">InsightJournal</div>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Deep-focus analysis for the intellectually curious.
            </p>
          </div>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:text-black hover:underline no-underline">
                {item}
              </a>
            ))}
          </div>
          <div className="text-[10px]">© 2026 InsightJournal. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}