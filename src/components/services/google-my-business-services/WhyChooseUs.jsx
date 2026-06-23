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
    <section className="bg-white py-20 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section: Title & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-gray-900">
            Why Our Google Business Profile System Works
          </h2>
          <p className="text-sm md:text-base font-semibold leading-[1.6] text-slate-600 max-w-2xl mx-auto">
            Most businesses create a profile and forget about it. We actively optimize, monitor, and improve it to generate more local leads.
          </p>
        </div>

        {/* 3-Column Responsive Layout Grid with Brutalist Structural Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] p-8 flex flex-col items-start space-y-4 border-4 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Fixed Clean Rounded Icon Box with Border */}
              <div className="w-10 h-10 rounded-xl border-2 border-slate-950 bg-purple-50 flex items-center justify-center">
                {card.icon}
              </div>
              
              {/* Card Title Headline */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 tracking-tight">
                {card.title}
              </h3>
              
              {/* Card Description Snippet updated to highly-legible slate-800 */}
              <p className="text-xs md:text-sm font-medium leading-[1.6] text-slate-800">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}