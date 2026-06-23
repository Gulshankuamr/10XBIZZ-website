import React from 'react';

export default function CRMFunnels() {
  const stepsData = [
    {
      icon: "📥",
      title: "CAPTURE",
      tags: [
        "Meta Ads",
        "Google Ads",
        "Website Forms"
      ]
    },
    {
      icon: "🤖",
      title: "AUTOMATE",
      tags: [
        "WhatsApp",
        "Email",
        "Reminders"
      ]
    },
    {
      icon: "💰",
      title: "CONVERT",
      tags: [
        "Appointments",
        "Pipeline",
        "Reporting"
      ]
    }
  ];

  return (
    <>
      {/* CSS for Premium Hover Effects and Gradient Accents */}
    

      <section className="bg-[#F4F7FF] py-20 px-6 sm:px-10 overflow-hidden w-full select-none font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Top Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4 flex flex-col items-center">
            {/* Top Badge */}
            <span className="inline-block font-bold tracking-[0.05em] uppercase text-[11px] md:text-[12px] text-gray-900 bg-white border border-gray-200 px-4 py-1 rounded-full shadow-sm mb-2">
              How It Works
            </span>
            
            {/* Section Heading */}
            <h2 className="text-[32px] md:text-[48px] font-bold leading-tight tracking-[-0.03em] text-gray-900 max-w-3xl">
              The 3-Step System Behind{" "}
              <br />
              <span className="text-gradient">Faster Growth</span>
            </h2>
            
            {/* Section Description */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-900 max-w-3xl mx-auto font-medium">
              A simple but powerful CRM process designed to improve response time,
              increase conversions, and save your team hours every week.
            </p>
          </div>

          {/* Steps Flow Layout with Arrow Connectors */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
  {stepsData.map((step, idx) => (
    <React.Fragment key={idx}>
      
      {/* Step Card */}
      <div className="step-card bg-white rounded-[2.5rem] p-8 min-w-[280px] w-full md:w-80 border-4 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Icon */}
          <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-wide mb-5">
            {step.title}
          </h3>

          {/* Tags Container */}
          <div className="flex flex-wrap justify-center gap-2">
            {step.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 rounded-full text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Intelligent Flow Connectors (Down Arrow on Mobile, Right Arrow on Desktop) */}
      {idx !== stepsData.length - 1 && (
        <div className="text-4xl text-gray-900 font-light my-2 md:my-0 md:mx-2 animate-pulse">
          <span className="block md:hidden">↓</span>
          <span className="hidden md:block">→</span>
        </div>
      )}

    </React.Fragment>
  ))}
</div>

        </div>
      </section>
    </>
  );
}