import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ChevronRight, Mail, MessageCircle } from "lucide-react";

const sections = [
  {
    id: "nature-of-products",
    title: "1. Nature of Products",
    content: [
      {
        subtitle: "Digital Products Only",
        text: "All products sold on this website or through Razorpay payment links are digital in nature, including but not limited to: online video courses, digital templates (Canva, Notion, Google Docs, PDFs), ChatGPT prompt libraries, marketing swipe files, workshop recordings, and bonus downloads.",
      },
      {
        subtitle: "Access Delivery",
        text: "You will receive access to these products either instantly upon payment or within 24 hours via email or WhatsApp.",
      },
    ],
  },
  {
    id: "pricing-payments",
    title: "2. Pricing & Payments",
    content: [
      {
        subtitle: "Currency & Pricing",
        text: "All prices are listed in Indian Rupees (INR). We accept payments via Razorpay and reserve the right to change pricing at any time without prior notice.",
      },
      {
        subtitle: "Secure Processing",
        text: "Your payment is processed securely by Razorpay's payment gateway system. 10xBizz does not store your card or payment details on our servers.",
      },
    ],
  },
  {
    id: "access-usage",
    title: "3. Access & Usage",
    content: [
      {
        subtitle: "Personal License",
        text: "Access is granted only to the registered user — the email or WhatsApp number used during purchase. This is a non-transferable, personal-use license.",
      },
      {
        subtitle: "Prohibited Actions",
        text: "You may not resell, redistribute, or publicly share any part of the digital product without written consent from 10xBizz. Sharing login or access links with others is strictly prohibited and may result in immediate account suspension.",
      },
    ],
  },
  {
    id: "refund-policy",
    title: "4. Refund Policy",
    content: [
      {
        subtitle: "Digital Templates & Downloads",
        text: "Refunds are not applicable to digital templates, prompt kits, or downloads once accessed. These are instantly delivered assets and cannot be returned.",
      },
      {
        subtitle: "Courses & Bootcamps",
        text: "For courses or bootcamps, a conditional refund may be offered within 7 days of purchase if less than 20% of the course has been consumed and proper justification is provided.",
      },
      {
        subtitle: "Refund Requests",
        text: "For any refund concerns, please email us at care@10xbizz.com with your Order ID, full name, and reason. Requests are reviewed within 3–5 business days.",
      },
    ],
  },
  {
    id: "user-conduct",
    title: "5. User Conduct",
    content: [
      {
        subtitle: "You Agree Not To",
        text: "Misuse, duplicate, or sell any part of the content; upload the content to third-party websites or platforms; or use our brand, logo, or visuals without explicit written permission from 10xBizz.",
      },
      {
        subtitle: "Consequences",
        text: "Any violation may lead to legal action under applicable Indian law and permanent revocation of access to all 10xBizz products without refund.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer",
    content: [
      {
        subtitle: "No Income Guarantee",
        text: "We do not guarantee income or business success from our trainings or templates. Results depend entirely on individual effort, niche selection, and execution. The information provided is for educational purposes only.",
      },
    ],
  },
  {
    id: "limitation-liability",
    title: "7. Limitation of Liability",
    content: [
      {
        subtitle: "Scope of Liability",
        text: "10xBizz and its instructors shall not be held liable for any business loss, revenue loss, or indirect damages arising from use of our content.",
      },
      {
        subtitle: "Third-Party Platforms",
        text: "We are not responsible for technical delays in access due to third-party platforms like WhatsApp, Gmail, Google Drive, or any other external service.",
      },
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy Policy",
    content: [
      {
        subtitle: "Your Data",
        text: "We respect your data and will never sell your contact details to third parties. You may receive follow-up emails or WhatsApp messages related to your purchase or new offers from 10xBizz.",
      },
    ],
    link: { label: "Read our full Privacy Policy →", to: "/privacy-policy" },
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      {
        subtitle: "Support & Queries",
        text: "For queries, support, or complaints, reach us via email or WhatsApp. We typically respond within 24 business hours.",
      },
    ],
  },
];

export default function TermsConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions | 10xBizz";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Read 10xBizz's Terms & Conditions governing the purchase and use of our digital products, courses, templates, and AI tools."
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4a0e8f 0%, #6B0AC9 50%, #8b2be2 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#D4A017" }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            By accessing or purchasing from 10xBizz, you agree to the following terms and conditions.
            Please read them carefully before making a purchase.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Terms &amp; Conditions</span>
          </nav>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Last updated: 24.06.2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ background: "rgba(107,10,201,0.06)", border: "1px solid rgba(107,10,201,0.15)" }}
        >
          <p className="text-gray-700 leading-relaxed text-base">
            Welcome to <strong>10xBizz</strong>. By accessing or purchasing from our website{" "}
            <a href="https://www.10xbizz.com" className="font-medium hover:underline" style={{ color: "#6B0AC9" }}>
              www.10xbizz.com
            </a>{" "}
            or through any Razorpay payment link issued by us, you agree to the following terms and
            conditions. If you do not agree with any part of these terms, please refrain from making
            a purchase or using our services.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-12">
          <h2 className="font-semibold text-gray-800 text-sm mb-3 uppercase tracking-wide">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm hover:underline transition-colors"
                style={{ color: "#6B0AC9" }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
            >
              <div
                className="px-6 py-4"
                style={{ background: "linear-gradient(90deg, #6B0AC9, #8b2be2)" }}
              >
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              </div>
              <div className="p-6 space-y-5">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-gray-900 mb-1 text-base">{item.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
                {section.link && (
                  <Link
                    to={section.link.to}
                    className="inline-block text-sm font-medium hover:underline mt-1"
                    style={{ color: "#6B0AC9" }}
                  >
                    {section.link.label}
                  </Link>
                )}
                {/* Contact details for section 9 */}
                {section.id === "contact" && (
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                      href="mailto:care@10xbizz.com"
                      className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-purple-300 transition-colors no-underline"
                    >
                      <Mail className="w-4 h-4 shrink-0" style={{ color: "#6B0AC9" }} />
                      <span>care@10xbizz.com</span>
                    </a>
                    <a
                      href="https://wa.me/916291124216"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-green-300 transition-colors no-underline"
                    >
                      <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span>+91 6291124216</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <p className="text-gray-500 text-sm">
            Questions about these terms?{" "}
            <Link to="/contact" className="font-medium hover:underline" style={{ color: "#6B0AC9" }}>
              Contact our team
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}