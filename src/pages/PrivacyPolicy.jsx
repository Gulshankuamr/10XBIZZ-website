import React, { useState } from "react";
import { Mail, Clock, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Overview" },
    { id: "collection", label: "1. Information We Collect" },
    { id: "usage", label: "2. How We Use Data" },
    { id: "cookies", label: "3. Cookies & Tracking" },
    { id: "security", label: "4. Data Security" },
    { id: "sharing", label: "5. Sharing of Information" },
    { id: "rights", label: "6. Your Rights" },
    { id: "retention", label: "7. Data Retention" },
    { id: "third-party", label: "8. Third-Party Links" },
    { id: "children", label: "9. Children’s Privacy" },
    { id: "changes", label: "10. Policy Changes" },
    { id: "contact", label: "11. Contact Us" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset added for sticky headers if any
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#F8F9FF] mt-[86px] font-[Montserrat,sans-serif]">
      {/* Matching Case Study Gradient Hero Banner */}
      <div className="relative overflow-hidden bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.17),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 text-white sm:px-10 lg:px-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-white/75">
            Legal & Compliance
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Privacy Policy – 10xbizz
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
              <Clock size={13} /> Last Updated: May 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
              <ShieldCheck size={13} /> Data Protected
            </span>
          </div>
        </div>
      </div>

      {/* Main Container Layout */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16 flex flex-col lg:flex-row gap-10">
        
        {/* Sticky Left Sidebar Navigation */}
        <aside className="lg:w-1/4 lg:sticky lg:top-[110px] h-fit hidden lg:block bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.03)]">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
            Table of Contents
          </p>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-[#6400A1]/5 text-[#6400A1] border-l-4 border-[#6400A1] pl-2"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Dynamic Right Side Content Area */}
        <main className="flex-1 bg-white p-6 sm:p-12 rounded-3xl border border-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.06)] space-y-12 text-slate-700 leading-[1.75] text-[15px]">
          
          {/* Overview / Introduction */}
          <section id="intro" className="scroll-mt-24">
            <p className="text-base text-slate-600 font-medium leading-[1.8]">
              At <strong className="text-[#6400A1]">10xbizz</strong>, we value your privacy and are fully committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit or interact with our website. By using our website, you agree to the practices described in this policy.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 1. Information We Collect */}
          <section id="collection" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">1.</span> Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you voluntarily provide when you interact with our website. This may include your <span className="font-semibold text-slate-900">name, email address, phone number</span>, and any other details you submit through contact forms, signup forms, or service inquiries.
            </p>
            <p className="mb-4">
              In addition, we automatically collect certain technical information when you browse our website. This may include your <span className="font-semibold text-slate-900">IP address, browser type, device information, operating system, referring URLs</span>, and pages you visit. This information helps us understand user behavior and improve website performance.
            </p>
            <div className="bg-[#6400A1]/5 border border-[#6400A1]/10 rounded-2xl p-4 text-sm text-slate-800 mt-4">
              <span className="font-bold text-[#6400A1]">Tracking Note:</span> We may also collect data using cookies and similar tracking technologies to enhance user experience and analyze traffic patterns.
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section id="usage" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">2.</span> How We Use Your Information
            </h2>
            <p className="mb-5">We ensure that your personal data is used only for legitimate business purposes:</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "To respond to your inquiries & provide support",
                "To deliver our services effectively",
                "To improve design and user experience",
                "To send updates & offers (if opted-in)",
                "To analyze behavior & marketing strategies",
                "To ensure security & prevent fraud"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-sm font-medium text-slate-800">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#BB000F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Cookies and Tracking Technologies */}
          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">3.</span> Cookies and Tracking Technologies
            </h2>
            <p className="mb-3">
              Our website uses cookies, pixels, and similar technologies to improve functionality and personalize your experience. Cookies help us remember your preferences, understand user behavior, and improve overall performance.
            </p>
            <p>
              You can choose to disable cookies through your browser settings. However, disabling cookies may affect certain features of the website and reduce your browsing experience.
            </p>
          </section>

          {/* 4. Data Protection and Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">4.</span> Data Protection and Security
            </h2>
            <p className="mb-4">
              We take appropriate technical and organizational security measures to protect your personal data from unauthorized access, misuse, loss, alteration, or disclosure.
            </p>
            <div className="border-l-4 border-amber-500 bg-amber-50/60 p-4 rounded-r-2xl text-xs font-medium text-amber-900 leading-relaxed">
              <strong className="block text-sm mb-1 font-bold text-amber-950">Security Disclaimer:</strong> 
              While we strive to protect your information, no method of internet transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security, but we continuously work to implement strong security practices.
            </div>
          </section>

          {/* 5. Sharing of Information */}
          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">5.</span> Sharing of Information
            </h2>
            <p className="mb-4">
              We respect your privacy and <span className="font-bold text-slate-900">do not sell, rent, or trade</span> your personal information to third parties.
            </p>
            <p className="mb-4">
              However, we may share your data with trusted third-party service providers who assist us in operating our website:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs font-semibold text-slate-600">
              <div className="p-3 border border-slate-100 bg-slate-50 rounded-xl">✓ Hosting & Cloud Service Providers</div>
              <div className="p-3 border border-slate-100 bg-slate-50 rounded-xl">✓ Analytics & Performance Tracking</div>
              <div className="p-3 border border-slate-100 bg-slate-50 rounded-xl">✓ Email & Communication Services</div>
              <div className="p-3 border border-slate-100 bg-slate-50 rounded-xl">✓ Legal or Regulatory Authorities (If Required)</div>
            </div>
            <p className="text-xs text-slate-400 italic mt-3">
              *All third-party partners are required to maintain strict confidentiality and data protection standards.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section id="rights" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">6.</span> Your Rights
            </h2>
            <p className="mb-4">Depending on applicable laws, you have full control over your personal data:</p>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600 pl-1">
              <li className="flex gap-2"><span>•</span> Access the personal data we hold about you</li>
              <li className="flex gap-2"><span>•</span> Request correction of inaccurate information</li>
              <li className="flex gap-2"><span>•</span> Request deletion of your personal data</li>
              <li className="flex gap-2"><span>•</span> Withdraw consent for marketing communications</li>
              <li className="flex gap-2"><span>•</span> Restrict or object to certain data processing activities</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section id="retention" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">7.</span> Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws and regulations. Once the data is no longer required, we take appropriate steps to securely delete or anonymize it.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section id="third-party" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">8.</span> Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites or services that are not operated by us. Please note that we are not responsible for the privacy practices or content of such third-party websites. We encourage users to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* 9. Children’s Privacy */}
          <section id="children" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">9.</span> Children’s Privacy
            </h2>
            <p>
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have unintentionally collected data from a child, we will take immediate steps to delete such information.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#6400A1]">10.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any updates will be posted on this page with a revised “Last Updated” date. We encourage users to review this page periodically.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section id="contact" className="scroll-mt-24 bg-[linear-gradient(125.94deg,#6400A1_0%,#BB000F_100%)] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">11. Contact Us</h2>
              <p className="text-white/80 text-sm mb-6 max-w-xl">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, you can contact us at any time.
              </p>
              <a
                href="mailto:care@10xbizz.com"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#6400A1] shadow-md hover:bg-slate-50 transition-all duration-200 group"
              >
                <Mail size={14} className="text-[#BB000F]" />
                care@10xbizz.com
              </a>
            </div>
          </section>

        </main>
      </div>
    </section>
  );
}