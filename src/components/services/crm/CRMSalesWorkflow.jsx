import React from 'react';

export default function CRMSalesWorkflow() {
  const workflowSteps = [
    {
      title: "Lead Capture",
      iconSrc: "/public_svg_icone/icons8-lead-50.png",
      desc: "Leads from Facebook Ads, Google Ads, websites, and landing pages are automatically captured into your CRM."
    },
    {
      title: "Instant WhatsApp Follow-Up",
      iconSrc: "/public_svg_icone/icons8-message-50.png",
      desc: "Automatically send WhatsApp messages, confirmations, and reminders the moment a lead enquires."
    },
    {
      title: "Lead Tracking",
      iconSrc: "/public_svg_icone/icons8-retargeting-50.png",
      desc: "Track every lead, conversation, appointment, and deal from one centralized dashboard."
    },
    {
      title: "Appointment Booking",
      iconSrc: "/public_svg_icone/icons8-clock-50.png",
      desc: "Allow prospects to book meetings directly while automatic reminders reduce no-shows."
    },
    {
      title: "CRM Automation",
      iconSrc: "/public_svg_icone/icons8-settings-50.png",
      desc: "Automate follow-ups, task assignments, lead nurturing, and customer communication."
    },
    {
      title: "Performance Reporting",
      iconSrc: "/public_svg_icone/icons8-barchart-50.png",
      desc: "See lead sources, conversion rates, sales performance, and ROI through real-time dashboards."
    },
    {
      title: "Convert More Customers",
      iconSrc: "/public_svg_icone/icons8-target-50.png",
      desc: "Respond faster, stay organized, and close more deals without increasing manual work."
    }
  ];

  return (
    <>
      {/* CSS Stylesheet for Layout Accent Graphics & Gradient Bullets */}
      <style>{`
        .text-gradient-heading {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bullet {
          background: linear-gradient(135deg, #6400A1 0%, #BB000F 100%);
        }
        /* Soft Decorative Dot Grid Pattern Component Styling */
        .dot-matrix {
          background-image: radial-gradient(#E2E8F0 2px, transparent 2px);
          background-size: 16px 16px;
        }
      `}</style>

      <section className="bg-white py-24 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN: HEADINGS & DECORATIVE GRAPHICS ─── */}
          <div className="relative lg:col-span-5 space-y-4 py-8">
            {/* Top-Left Dot Matrix Background Decoration */}
            <div className="dot-matrix absolute -top-4 -left-6 w-24 h-24 opacity-70 hidden sm:block z-0" />
            
            <div className="relative z-10 space-y-4">
              <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
                From Lead To Customer
                <br />
                <span className="text-gradient-heading">
                  Automatically
                </span>
              </h2>
              <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-500 max-w-sm">
                We connect your ads, website, WhatsApp, CRM, and follow-up systems so no lead gets lost and every opportunity gets tracked.
              </p>
            </div>

            {/* Bottom-Right Dot Matrix Background Decoration */}
            <div className="dot-matrix absolute -bottom-6 left-24 w-32 h-20 opacity-70 hidden sm:block z-0" />
          </div>

          {/* ─── RIGHT COLUMN: WORKFLOW STEPS LIST ─── */}
          <div className="lg:col-span-7 space-y-6">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-2 rounded-xl hover:bg-slate-50/80 transition-colors duration-200 group"
              >
                {/* Diamond Shape Custom Gradient Bullet */}
                <div className="flex-shrink-0 mt-1.5 w-3.5 h-3.5 gradient-bullet transform rotate-45 rounded-[2px] shadow-sm group-hover:scale-110 transition-transform duration-200" />
                
                {/* Clean Borderless PNG Icon Wrapper */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-1">
                  <img 
                    src={step.iconSrc} 
                    alt={step.title} 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Content Block */}
                <div className="space-y-1 flex-1">
                  <h3 className="text-base md:text-[18px] font-bold leading-[1.3] text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold leading-[1.5] text-gray-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}