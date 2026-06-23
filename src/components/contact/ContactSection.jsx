import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    businessName: "",
    revenue: "",
    service: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      setSubmitError("Please accept the terms to continue.");
      return;
    }

    setSubmitError("");
    setLoading(true);

    const payload = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      phone_number: formData.phone.trim(),
      business_email: formData.email.trim(),
      business_name: formData.businessName.trim(),
      monthly_revenue: formData.revenue,
      service_interested_in: formData.service,
      tell_us_about: formData.message.trim(),
    };

    try {
      const response = await fetch("https://10x.fctesting.shop/api/business-inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitError("Submission failed. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      {/* ── HERO SECTION ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#6400A1] via-[#3a006e] to-[#1a0033] px-6 py-20 text-center text-white md:px-10 md:pb-32 md:pt-24">
        {/* Background Decorative Shapes */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

     <div className="relative z-10 mx-auto max-w-3xl">
  
  {/* Top Badge */}
  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] md:text-[10px]">
    <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF1920]" />
    Free Strategy Session — Limited Slots
  </div>

  {/* Heading */}
  <h1 className="mb-5 text-[34px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[56px]">
    Grow Your Business{" "}
    <span className="bg-[linear-gradient(104.17deg,#6400A1_0%,#FF1920_100%)] bg-clip-text text-transparent">
      10X Faster
    </span>
    <br />
    With Digital Marketing
  </h1>

  {/* Paragraph */}
  <p className="mx-auto mb-8 max-w-xl text-[15px] leading-7 text-white/65 md:text-[17px]">
    Get a custom growth roadmap from our experts and scale your business with proven marketing systems.
  </p>

  {/* Stats */}
  <div className="flex flex-wrap justify-center gap-5">
    {[
      "500+ Clients Served",
      "₹10Cr+ Revenue Generated",
      "98% Client Satisfaction",
    ].map((t) => (
      <div
        key={t}
        className="flex items-center gap-2 text-[13px] font-semibold text-white/85"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px]">
          ✓
        </span>
        {t}
      </div>
    ))}
  </div>

</div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 mx-auto -mt-12 max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          
          {/* INFO COLUMN */}
          <div className="lg:col-span-2 space-y-4 pt-12 my-4 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
  {[
    { icon: "📞", title: "Call Us Directly", val: "+91 98765 43210", sub: "Mon–Sat, 10am – 7pm IST" },
    { icon: "✉️", title: "Email", val: "hello@10xbizz.com", sub: "Reply within 2 business hours" },
    { icon: "💬", title: "WhatsApp", val: "Chat Instantly", sub: "Available 24/7 on WhatsApp" },
  ].map((c) => (
    <div 
      key={c.title} 
      className="group flex items-start gap-4 rounded-2xl border-2 border-slate-900 bg-white p-5 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:border-[#6400A1]"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-slate-900 bg-gradient-to-br from-purple-50 to-red-50 text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        {c.icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#6400A1]">{c.title}</p>
        <p className="text-base font-bold text-gray-900">{c.val}</p>
        <p className="text-xs text-slate-600 font-medium">{c.sub}</p>
      </div>
    </div>
  ))}

  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
    {[
      { num: "500+", lbl: "Happy Clients" },
      { num: "4.9★", lbl: "Avg Rating" },
      { num: "8+", lbl: "Years Exp." },
      { num: "3X", lbl: "Avg ROI" },
    ].map((s) => (
      <div 
        key={s.lbl} 
        className="rounded-2xl border-2 border-slate-900 bg-gradient-to-br from-purple-50/50 to-red-50/50 p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <p className="text-2xl font-bold text-[#6400A1]">{s.num}</p>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-700">{s.lbl}</p>
      </div>
    ))}
  </div>
</div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-2xl shadow-purple-900/5 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#6400A1] to-[#FF1920] text-4xl shadow-lg">
                    🎉
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">Request Submitted!</h3>
                  <p className="mx-auto mb-8 max-w-xs text-gray-500 leading-[1.7]">
                    Thank you, <span className="font-bold text-gray-800">{formData.firstName}</span>! Our team will contact you within 24 hours.
                  </p>
                  <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6400A1] to-[#FF1920] px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95">
                    Back to Home
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Book Your Free Strategy Call 🚀</h2>
                    <p className="mt-2 text-sm text-gray-400">Fill in the details below and we'll reach out within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {submitError ? (
                      <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {submitError}
                      </div>
                    ) : null}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <FormGroup label="First Name" required>
                        <input type="text" name="firstName" className="form-input-custom" placeholder="Rahul" value={formData.firstName} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup label="Last Name" required>
                        <input type="text" name="lastName" className="form-input-custom" placeholder="Sharma" value={formData.lastName} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup label="Phone Number" required>
                        <input type="tel" name="phone" className="form-input-custom" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup label="Business Email" required>
                        <input type="email" name="email" className="form-input-custom" placeholder="rahul@company.com" value={formData.email} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup label="Business Name" required>
                        <input type="text" name="businessName" className="form-input-custom" placeholder="Your Company" value={formData.businessName} onChange={handleChange} required />
                      </FormGroup>
                      <FormGroup label="Monthly Revenue">
                        <select name="revenue" className="form-input-custom appearance-none" value={formData.revenue} onChange={handleChange}>
                          <option value="">Select Range</option>
                          <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                          <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                          <option value="₹5L – ₹20L">₹5L – ₹20L</option>
                          <option value="₹20L – ₹1 Cr">₹20L – ₹1 Cr</option>
                          <option value="Above ₹1 Cr">Above ₹1 Cr</option>
                        </select>
                      </FormGroup>
                    </div>

                    <FormGroup label="Service Interested In" required>
                      <select name="service" className="form-input-custom appearance-none" value={formData.service} onChange={handleChange} required>
                        <option value="">Choose a Service</option>
                        <option value="Facebook & Instagram Ads">Facebook & Instagram Ads</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="CRM Automation">CRM Automation</option>
                        <option value="WhatsApp Automation">WhatsApp Automation</option>
                        <option value="Sales Funnel">Sales Funnel</option>
                        <option value="Marketing Consultation">Marketing Consultation</option>
                        <option value="Full Digital Marketing Package">Full Digital Marketing Package</option>
                      </select>
                    </FormGroup>

                    <FormGroup label="Tell Us About Your Business">
                      <textarea name="message" className="form-input-custom min-h-[100px] resize-none" placeholder="Briefly describe your challenges..." value={formData.message} onChange={handleChange} />
                    </FormGroup>

                    <div className="flex gap-3 pt-2">
                      <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} className="mt-1 h-4 w-4 shrink-0 accent-[#6400A1]" />
                      <label htmlFor="agree" className="text-xs leading-[1.7] text-gray-400">
                        I agree to the <a href="/terms" className="font-bold text-[#6400A1] hover:underline">Terms</a> and <a href="/privacy" className="font-bold text-[#6400A1] hover:underline">Privacy Policy</a>. I consent to being contacted via phone, email, or WhatsApp.
                      </label>
                    </div>

                    <button type="submit" disabled={loading} className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#6400A1] to-[#FF1920] p-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {loading ? "Submitting..." : "Book My Free Strategy Call"}
                        {!loading && (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        )}
                      </span>
                    </button>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    100% Free · No Credit Card · No Spam
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Tailwind Custom Styles via Layer or standard CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .form-input-custom {
          width: 100%;
          border: 1.5px solid #ede4f8;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          background-color: #faf7ff;
          transition: all 0.2s;
          outline: none;
        }
        .form-input-custom:focus {
          border-color: #6400A1;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(100, 0, 161, 0.05);
        }
        select.form-input-custom {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%236400A1' stroke-width='3'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
        }
      `}} />
    </div>
  );
}

// Reusable Helper Component for Form Groups
function FormGroup({ label, children, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-[0.05em] text-gray-500">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}