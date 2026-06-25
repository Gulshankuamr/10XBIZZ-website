import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RefreshCcw, ChevronRight, CheckCircle, XCircle, Mail, MessageCircle } from "lucide-react";

const nonRefundable = [
  "AI prompt files",
  "Canva ad template vaults",
  "Funnel swipe files",
  "Workshop recordings or downloadable bonuses",
];

const refundEligible = [
  "Courses & Memberships within 7 days of purchase",
  "Duplicate / failed transactions",
  "Access not received within 1 hour of payment",
  "Payment failure with amount deducted",
];

const sections = [
  {
    id: "important-note",
    title: "Important Note",
    content: [
      {
        subtitle: "Digital Products Policy",
        text: "Due to the instant accessibility of our digital products (courses, bundles, templates, swipe files, etc.), we maintain a strict refund policy to protect the integrity of our content and prevent misuse.",
      },
    ],
  },
  {
    id: "conditional-refund",
    title: "7-Day Conditional Refund Policy",
    subtitle: "Only for Courses & Memberships",
    content: [
      {
        subtitle: "Eligibility",
        text: "If you're not fully satisfied with the course or membership you've purchased, you may request a refund within 7 days of your purchase date.",
      },
      {
        subtitle: "How to Apply",
        text: "Send an email to care@10xbizz.com with your full name, Order ID or Razorpay reference number, and reason for requesting the refund.",
      },
      {
        subtitle: "Approval Condition",
        text: "Refund requests are subject to approval. We may require proof that you've completed specific lessons or tried implementing the content before processing a refund. This helps us reduce abuse of the policy.",
      },
      {
        subtitle: "Downloadable Resources",
        text: "Refunds are not applicable to downloadable resources like templates, prompt bundles, funnel kits, or digital toolkits once they have been accessed.",
      },
    ],
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    content: [
      {
        subtitle: "Strictly Non-Refundable",
        text: "Once accessed or downloaded, the items listed below cannot be refunded under any circumstances as they are instantly delivered digital assets.",
      },
    ],
    list: nonRefundable,
  },
  {
    id: "transfers",
    title: "Course Transfers or Exchanges",
    content: [
      {
        subtitle: "No Switching Policy",
        text: "We currently do not support switching one course or bundle for another after purchase. Please review the course details carefully before completing your payment.",
      },
    ],
  },
  {
    id: "need-help",
    title: "Need Help?",
    content: [
      {
        subtitle: "Contact Us For",
        text: "Payment failures, duplicate payments, or if you did not receive access or login details within 1 hour of purchase — reach out to us immediately at care@10xbizz.com or message us on WhatsApp for urgent support.",
      },
    ],
  },
];

export default function CancellationRefund() {
  useEffect(() => {
    document.title = "Cancellation & Refund Policy | 10xBizz";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Learn about 10xBizz's Cancellation and Refund Policy — 7-day conditional refund for courses, non-refundable digital items, and how to request a refund."
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — same purple as TermsConditions */}
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
            <RefreshCcw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            At 10xBizz, we are committed to delivering high-value digital resources, courses, and
            tools designed to help you grow with AI, Facebook Ads, Funnels, and more.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Cancellation &amp; Refund Policy</span>
          </nav>
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
            We strive to ensure that every buyer has a positive and informed experience. Please review
            our refund and cancellation policy carefully before making a purchase.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h2 className="font-semibold text-green-800 text-base mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Eligible for Refund
            </h2>
            <ul className="space-y-2">
              {refundEligible.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h2 className="font-semibold text-red-800 text-base mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Not Eligible for Refund
            </h2>
            <ul className="space-y-2">
              {nonRefundable.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Policy Sections */}
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
                {section.subtitle && (
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {section.subtitle}
                  </p>
                )}
              </div>
              <div className="p-6 space-y-5">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-gray-900 mb-1 text-base">{item.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div
          className="mt-10 rounded-2xl p-6"
          style={{ background: "rgba(107,10,201,0.06)", border: "1px solid rgba(107,10,201,0.15)" }}
        >
          <h3 className="font-semibold text-gray-900 mb-4 text-base">Contact Us</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:care@10xbizz.com"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-purple-300 transition-colors no-underline"
            >
              <Mail className="w-4 h-4 shrink-0" style={{ color: "#6B0AC9" }} />
              <span>care@10xbizz.com</span>
            </a>
            <a
              href="https://wa.me/916291124216"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-green-300 transition-colors no-underline"
            >
              <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
              <span>WhatsApp: +91 6291124216</span>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            By making a purchase from 10xBizz, you agree to this policy.
          </p>
        </div>

        <div className="mt-10 text-center border-t border-gray-100 pt-8">
          <p className="text-gray-500 text-sm">
            Have more questions?{" "}
            <Link to="/contact" className="font-medium hover:underline" style={{ color: "#6B0AC9" }}>
              Contact our support team
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}