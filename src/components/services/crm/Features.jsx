import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CRMFeatures() {
  const featuresData = [
    {
      iconSrc: "/public_svg_icone/icons8-lead-50.png",
      title: "Lead Capture Automation",
      desc: "Automatically capture leads from websites, ads, landing pages, and WhatsApp into one organized CRM dashboard.",
      bullets: ["Instant lead collection", "Auto lead assignment", "Multi-source integrations"]
    },
    {
      iconSrc: "/public_svg_icone/icons8-trending-50.png",
      title: "Sales Pipeline Tracking",
      desc: "Track every lead stage from enquiry to conversion with a structured and easy-to-manage sales pipeline system.",
      bullets: ["Drag & drop pipeline", "Deal stage tracking", "Sales progress visibility"]
    },
    {
      iconSrc: "/public_svg_icone/icons8-message-50.png",
      title: "WhatsApp CRM Integration",
      desc: "Connect WhatsApp with your CRM to automate customer communication and improve response speed.",
      bullets: ["Instant replies", "Automated follow-ups", "Centralized conversations"]
    },
    {
      iconSrc: "/public_svg_icone/icons8-settings-50.png",
      title: "CRM Workflow Automation",
      desc: "Automate repetitive tasks, reminders, notifications, and follow-up workflows to save time and improve efficiency.",
      bullets: ["Smart workflows", "Task automation", "Auto reminders"]
    },
    {
      iconSrc: "/public_svg_icone/icons8-crm-50.png",
      title: "Customer Management System",
      desc: "Store customer information, conversation history, and activity logs in one secure centralized system.",
      bullets: ["Customer profiles", "Interaction history", "Organized database"]
    },
    {
      iconSrc: "/public_svg_icone/icons8-barchart-50.png",
      title: "Analytics & Reporting",
      desc: "Monitor lead performance, sales growth, and team productivity with easy-to-understand CRM reports.",
      bullets: ["Sales insights", "Lead tracking reports", "Performance analytics"]
    }
  ];

  return (
    <>
      {/* Advanced CSS for SaaS UI, Smooth Border Gradients & Glow Effects */}
      <style>{`
        .feature-card {
          border: 2px solid #E2E8F0;
          transition: border-image 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .feature-card:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05);
        }
        .text-gradient {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bg-gradient-btn {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          transition: opacity 0.2s ease;
        }
        .bg-gradient-btn:hover {
          opacity: 0.95;
        }
      `}</style>

      {/* ─── MAIN FEATURES SECTION ─── */}
      <section className="bg-white py-24 px-6 sm:px-10 overflow-hidden w-full select-none font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 flex flex-col items-center">
            <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-[#6400A1] bg-purple-50 px-4 py-1.5 rounded-full mb-1">
              Smart CRM Features
            </span>
            <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 max-w-3xl">
              Powerful Features Built To <span className="text-gradient">Automate & Scale Your Business</span>
            </h2>
            <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-500 max-w-2xl mx-auto">
              Manage leads, automate follow-ups, improve customer communication, and streamline your sales process with a complete CRM growth system.
            </p>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {featuresData.map((item, idx) => (
              <div 
                key={idx} 
                className="feature-card bg-white rounded-[24px] p-8 flex flex-col justify-between items-start shadow-sm"
              >
                <div className="space-y-5 w-full flex flex-col items-center">
                  {/* Clean, Borderless & Center-Aligned Large PNG Icon Container */}
                  <div className="w-16 h-16 flex items-center justify-center p-1 shrink-0">
                    <img 
                      src={item.iconSrc} 
                      alt={item.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Title & Desc */}
                  <div className="space-y-2 text-center w-full">
                    <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold leading-[1.5] text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Small Clean Text Features (Bullet Points) */}
                <div className="w-full pt-6 mt-6 border-t border-gray-100 space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}