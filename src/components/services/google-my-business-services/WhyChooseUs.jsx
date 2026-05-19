import React from 'react';
import { MessageSquare, Target, BarChart4 } from 'lucide-react';

export default function WhyChooseUs() {
  const bottomCards = [
    {
      icon: <MessageSquare className="w-5 h-5 text-[#6400A1]" />,
      title: "Client Feedback",
      desc: "Search GMB services on Google; Digital Notebook consistently appears among top results, reflecting strong feedback and performance."
    },
    {
      icon: <Target className="w-5 h-5 text-[#6400A1]" />,
      title: "Local Focus",
      desc: "Local SEO matters. We prioritize it to help you generate quality leads and grow your business within your local market."
    },
    {
      icon: <BarChart4 className="w-5 h-5 text-[#6400A1]" />,
      title: "Proven Results",
      desc: "Our Google My Business agency uses a GMB ranking service to drive steady, long-term growth in local search visibility."
    }
  ];

  return (
    <>
      {/* Dynamic CSS for Premium Layout, White BG & Black-to-Gradient Hover Borders */}
      <style>{`
        .why-us-card {
          border: 2px solid #000000;
          transition: border-image 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .why-us-card:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          transform: translateY(-4px);
          box-shadow: 0 12px 20px -8px rgb(0 0 0 / 0.1);
        }
        .text-gradient-accent {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blob-gradient {
          background: linear-gradient(135deg, #6400A1 20%, #BB000F 100%);
        }
      `}</style>

      {/* Main Section with Clean White Background */}
      <section className="bg-white py-24 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* ─── TOP SECTION: SPLIT LAYOUT (IMAGE & TEXT) ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Mockup Image Container with Premium Blob Behind it */}
            <div className="lg:col-span-5 flex justify-center relative py-6">
              {/* Decorative Colorful Small Ball */}
              <div className="blob-gradient w-16 h-16 rounded-full absolute top-2 left-6 md:left-12 opacity-90 blur-[1px] animate-pulse z-0" />
              
              {/* Abstract Fluid Shaped Background Mask (Replica of Image Mask) */}
              <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-slate-100 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] absolute z-0 overflow-hidden shadow-inner border border-gray-100" />
              
              {/* Central Phone Mockup Representation */}
              <div className="relative z-10 bg-white border-[6px] border-slate-900 rounded-[36px] w-[220px] h-[420px] shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
                <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto mb-2" /> {/* Speaker/Camera notch */}
                <div className="flex-1 bg-slate-50 rounded-[24px] p-3 flex flex-col items-center justify-center space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">G</div>
                  <span className="text-[11px] font-bold text-gray-800 tracking-tight">Google My Business</span>
                  <div className="w-full h-2 bg-emerald-500 rounded-full" />
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                  <div className="w-5/6 h-2 bg-gray-200 rounded-full" />
                  {/* Small Floating Chart Mini-UI */}
                  <div className="w-full bg-white border border-gray-100 rounded-xl p-2 shadow-sm space-y-1 mt-2">
                    <div className="flex justify-between items-center text-[8px] font-bold text-gray-400">
                      <span>Performance</span>
                      <span className="text-emerald-500">+24%</span>
                    </div>
                    <div className="h-8 flex items-end gap-1 pt-1 justify-center">
                      <div className="w-2 h-4 bg-purple-200 rounded-sm" />
                      <div className="w-2 h-6 bg-purple-300 rounded-sm" />
                      <div className="w-2 h-8 bg-[#6400A1] rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Copywriting Content Typography */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-gray-900">
                Why Digital Notebook Is the Best{" "}
                <span className="text-gradient-accent">Google My Business Expert</span> And GBP Management Agency in India?
              </h2>
              
              <div className="space-y-4 text-gray-600 text-sm md:text-base font-semibold leading-[1.7]">
                <p>
                  A top-notch Google My Business agency in India. Along with it, the agency is committed to offering all the other aspects of the listing.
                </p>
                <p>
                  The results speak for themselves! You can check out our portfolio and analyse our client's performance to see how much we stay true to our commitment.
                </p>
                <p className="text-gray-900 font-bold">
                  Our Google My Business expert team is highly potent at managing your GMB profile reviews with its expertise.
                </p>
              </div>
            </div>

          </div>

          {/* ─── BOTTOM SECTION: 3-COLUMN RESPONSIVE GRID ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {bottomCards.map((card, idx) => (
              <div 
                key={idx} 
                className="why-us-card bg-slate-50/70 rounded-2xl p-8 flex flex-col items-start space-y-4"
              >
                {/* Icon wrapper circular standard setup */}
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  {card.icon}
                </div>
                
                {/* Card Title */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 tracking-tight">
                  {card.title}
                </h3>
                
                {/* Card Description */}
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