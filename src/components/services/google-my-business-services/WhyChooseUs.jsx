import React from 'react';
import { MapPin, Star, PhoneCall } from 'lucide-react';

export default function WhyGMBSystemWorks() {
  const cards = [
    {
      icon: <MapPin className="w-5 h-5 text-[#6400A1]" />,
      title: "Better Local Visibility",
      desc: "Appear when customers search for your services nearby."
    },
    {
      icon: <Star className="w-5 h-5 text-[#6400A1]" />,
      title: "Stronger Online Reputation",
      desc: "Build trust through profile optimization and review growth strategies."
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-[#6400A1]" />,
      title: "More Calls & Enquiries",
      desc: "Turn profile views into actual customer conversations."
    }
  ];

  return (
    <>
      {/* Global Section Transitions / Adjustments if needed */}
      <style>{`
        .system-card {
          border: 1px solid #E2E8F0; /* Slate 200 border */
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .system-card:hover {
          border-color: #6400A1;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -10px rgba(100, 0, 161, 0.08);
        }
      `}</style>

      {/* Main Container Layer */}
      <section className="bg-white py-24 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section: Title & Subheadline */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-gray-900">
              Why Our Google Business Profile System Works
            </h2>
            <p className="text-sm md:text-base font-semibold leading-[1.6] text-gray-500 max-w-2xl mx-auto">
              Most businesses create a profile and forget about it. We actively optimize, monitor, and improve it to generate more local leads.
            </p>
          </div>

          {/* 3-Column Responsive Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="system-card bg-white rounded-2xl p-8 flex flex-col items-start space-y-4 shadow-[0_4px_20px_rgba(15,23,42,0.015)]"
              >
                {/* Fixed Clean Rounded Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  {card.icon}
                </div>
                
                {/* Card Title Headline */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 tracking-tight">
                  {card.title}
                </h3>
                
                {/* Card Description Snippet */}
                <p className="text-xs md:text-sm font-semibold leading-[1.6] text-gray-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}