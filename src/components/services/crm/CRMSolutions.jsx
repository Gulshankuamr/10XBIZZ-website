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
      desc: "Capture, organize, and track leads from multiple sources in one centralized system for faster follow-ups and better conversions."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#6400A1]" />,
      title: "CRM Automation",
      desc: "Automate repetitive tasks, customer follow-ups, reminders, and workflows to save time and improve team productivity."
    },
    {
      icon: <GitFork className="w-5 h-5 text-[#6400A1]" />,
      title: "Sales Pipeline Management",
      desc: "Track every stage of your sales process with structured pipelines designed to help teams close more deals efficiently."
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#6400A1]" />,
      title: "Customer Support System",
      desc: "Manage customer enquiries, tickets, and conversations from a single dashboard for faster and more organized support."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#6400A1]" />,
      title: "WhatsApp CRM Integration",
      desc: "Connect WhatsApp with your CRM to automate responses, manage leads, and improve customer communication."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#6400A1]" />,
      title: "Marketing Automation",
      desc: "Run automated campaigns, nurture leads, and improve engagement through smart follow-up and communication systems."
    }
  ];

  return (
    <>
      {/* Custom Stylesheet for dynamic gradient borders and clean transitions */}
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
              Complete CRM Solutions To{" "}
              <span className="gradient-text">Manage, Track & Convert Leads Faster</span>
            </h2>
            <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-600 max-w-2xl mx-auto">
              From lead capture and customer support to automation and follow-ups — build a smarter CRM system designed to improve sales efficiency and business growth.
            </p>
          </div>

          {/* Cards Grid Layout (Exact Match to Image Structure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {cardsData.map((card, idx) => (
              <div 
                key={idx} 
                className="crm-card bg-white rounded-2xl p-8 flex flex-col justify-between items-start shadow-sm hover:shadow-md"
              >
                <div className="space-y-4 w-full">
                  {/* Icon Box wrapper with clean background placeholder */}
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-gray-900">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base font-semibold leading-[1.5] text-gray-500">
                    {card.desc}
                  </p>
                </div>

                {/* Interactive CTA Link */}
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