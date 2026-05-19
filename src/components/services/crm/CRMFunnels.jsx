import React from 'react';

export default function CRMFunnels() {
  const stepsData = [
    {
      number: "1",
      title: "Capture & Organize Leads",
      desc: "Collect leads from websites, ads, WhatsApp, and forms into one centralized CRM system for easy tracking and management."
    },
    {
      number: "2",
      title: "Automate Follow-Ups",
      desc: "Send instant responses, reminders, and follow-up messages automatically to improve response time and engagement."
    },
    {
      number: "3",
      title: "Convert & Manage Customers",
      desc: "Track conversations, manage your sales pipeline, and turn qualified leads into long-term customers more efficiently."
    }
  ];

  return (
    <>
      {/* CSS for Dynamic Premium Layout, Connectors, and Gradient Borders */}
      <style>{`
        // .step-card {
        //   border: 2px solid #000000;
        //   transition: border-image 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        // }
        .step-card:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          transform: translateY(-4px);
        }
        .badge-gradient {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
        }
        .text-gradient {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section className="bg-[#F4F7FF] py-20 px-6 sm:px-10 overflow-hidden w-full select-none font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Top Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4 flex flex-col items-center">
            {/* Top Badge */}
            <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-gray-500 bg-white border border-gray-200 px-4 py-1 rounded-full shadow-sm mb-2">
              How It Works
            </span>
            
            {/* Section Heading */}
            <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 max-w-3xl">
              Simple CRM Workflow{" "}
              <span className="text-gradient">Designed To Convert More Leads</span>
            </h2>
            
            {/* Section Description */}
            <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-600 max-w-2xl mx-auto">
              Capture enquiries, automate follow-ups, and manage customer interactions through a streamlined CRM process built for faster business growth.
            </p>
          </div>

          {/* Steps Horizontal Row Layout (Exact Replica of Image Grid Structure with Connectors) */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Background Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[44%] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0" />

            {stepsData.map((step, idx) => (
              <div 
                key={idx} 
                className="step-card relative bg-white rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md z-10"
              >
                {/* Number Badge with Gradient Accent */}
                <div className="badge-gradient w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shadow-sm mb-6">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm md:text-base font-semibold leading-[1.5] text-gray-500">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}