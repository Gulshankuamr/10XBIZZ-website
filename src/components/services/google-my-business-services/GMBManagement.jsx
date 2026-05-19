import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, XCircle } from 'lucide-react';

export default function GMBManagement() {
  // दोनों ड्रॉपडाउन कस्टमाइज़ेशन को अलग-अलग कंट्रोल करने के लिए स्टेट्स
  const [isIncludedOpen, setIsIncludedOpen] = useState(true);
  const [isExcludedOpen, setIsExcludedOpen] = useState(true);

  const includedItems = [
    "Google My Business website redesign",
    "Information updation",
    "Keywords insertion",
    "1 post every week for 3 months",
    "Guidance on how to get more reviews",
    "Use of royalty-free stock images or photos which the business will send for the designs."
  ];

  const excludedItems = [
    "Writing customers reviews.",
    "Contacting customers on your (i.e. users) behalf."
  ];

  return (
    <>
      {/* Premium UI Specific Layer Styles */}
      <style>{`
        .gmb-gradient-bg {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
        }
        .glass-dropdown-btn {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
        }
        .glass-dropdown-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .content-card {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="bg-white py-16 px-4 sm:px-8 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Gradient Box Wrapper Container */}
          <div className="gmb-gradient-bg rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Soft Ambient Light Glow Circle on Background */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Title */}
            <div className="mb-10 relative z-10">
              <h2 className="text-white text-[28px] md:text-[38px] font-bold leading-[1.1] tracking-[-0.02em]">
                Google My Business Listing Management
              </h2>
            </div>

            {/* Content Two-Column Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
              
              {/* ─── COLUMN 1: WHAT IS INCLUDED ─── */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsIncludedOpen(!isIncludedOpen)}
                  className="glass-dropdown-btn w-full rounded-2xl p-5 flex items-center justify-between text-white text-base md:text-[18px] font-bold tracking-wide"
                >
                  <span>View what is included</span>
                  {isIncludedOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                </button>

                {isIncludedOpen && (
                  <div className="content-card bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
                    <ul className="space-y-4">
                      {includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base font-semibold leading-[1.5] text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ─── COLUMN 2: WHAT IS EXCLUDED ─── */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsExcludedOpen(!isExcludedOpen)}
                  className="glass-dropdown-btn w-full rounded-2xl p-5 flex items-center justify-between text-white text-base md:text-[18px] font-bold tracking-wide"
                >
                  <span>View what is excluded</span>
                  {isExcludedOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                </button>

                {isExcludedOpen && (
                  <div className="content-card bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
                    <ul className="space-y-4">
                      {excludedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <XCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base font-semibold leading-[1.5] text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}