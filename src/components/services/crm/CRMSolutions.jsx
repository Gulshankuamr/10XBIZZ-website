import React from 'react';
import { 
  Layers, 
  Cpu, 
  GitFork, 
  Headphones, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

export default function CRMSolutions() {
  const cardsData = [
    {
      icon: <Layers className="w-5 h-5 text-[#6400A1]" />,
      title: "Lead Management",
      desc: "Capture every enquiry from your website, ads, WhatsApp, and forms in one organized system so your team can respond faster and close more deals."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#6400A1]" />,
      title: "CRM Automation",
      desc: "Automate lead assignments, follow-up reminders, customer nurturing, and repetitive tasks so your team spends less time managing leads and more time closing them."
    },
    {
      icon: <GitFork className="w-5 h-5 text-[#6400A1]" />,
      title: "Sales Pipeline Management",
      desc: "Track every lead from enquiry to sale with a clear sales pipeline that helps you identify bottlenecks and improve conversion rates."
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#6400A1]" />,
      title: "Customer Support System",
      desc: "Manage customer conversations, support requests, and service tickets from a centralized dashboard to deliver faster and more professional support."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#6400A1]" />,
      title: "WhatsApp CRM Integration",
      desc: "Connect WhatsApp with your CRM to automatically capture leads, track conversations, send follow-ups, and improve customer engagement."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#6400A1]" />,
      title: "Marketing Automation",
      desc: "Automatically nurture leads through WhatsApp, email, and SMS workflows designed to increase engagement and drive more conversions."
    }
  ];

  return (
    <>
      <style>{`
        .crm-card {
          border: 2px solid #000000;
          transition: border-image 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
        }
        .crm-card:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          transform: translateY(-2px);
        }
        .gradient-text {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-btn-text {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .crm-card:hover .gradient-btn-text {
          color: #000000;
          -webkit-text-fill-color: #000000;
        }
      `}</style>

      <section className="bg-[#F8FAFC] py-20 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              Complete CRM Systems To{" "}
              <span className="gradient-text">Capture, Follow Up & Close More Customers</span>
            </h2>
            <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-600 max-w-2xl mx-auto">
              Stop losing leads across WhatsApp, forms, calls, and emails. We build CRM and automation systems that help you manage enquiries, automate follow-ups, and convert more customers with less manual work.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                className="crm-card bg-white rounded-2xl p-8 flex flex-col justify-between items-start shadow-sm hover:shadow-md"
              >
                <div className="space-y-4 w-full">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold leading-[1.5] text-gray-500">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-auto flex items-center gap-1 group/btn cursor-pointer">
                  <span className="gradient-btn-text text-base font-bold leading-none transition-colors duration-300">
                    Get Started
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-900 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}