import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CRMSalesWorkflow() {
  const workflowSteps = [
    {
      title: "End-to-End Sales Flow",
      desc: "Leads Automatically Captured into CRM Software"
    },
    {
      title: "Simplified System, No Middleware Needed",
      desc: "No APIs to manage, no manual syncing"
    },
    {
      title: "Plug-and-Play Digital Ads Integration",
      desc: "Automatically capture leads from Google and Meta Ads directly into the CRM, eliminate manual entry and missed opportunities"
    },
    {
      title: "Email & Calendar Integration",
      desc: "Emails, meetings are automatically logged to each lead, with Calendar reminders to ensure timely follow-ups"
    },
    {
      title: "Quotation & Invoicing",
      desc: "Generate quotations and invoices directly from deals"
    },
    {
      title: "Accounting Integration",
      desc: "Seamless Integration with, Xero, MYOB, and QuickBooks. Eliminates duplicate data entry, reconciliation errors, and admin workload"
    },
    {
      title: "Built-In Payments, Reduced Debtor Days (DSO)",
      desc: "Send payment links and receive payment faster via Stripe, PayPal, and CCAvenue"
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
                One Connected <br />
                <span className="text-gradient-heading">Sales Workflow</span>
              </h2>
              <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-500 max-w-sm">
                From ads to payments, everything runs in one connected CRM Software.
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
                
                {/* Text Content Block */}
                <div className="space-y-1">
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