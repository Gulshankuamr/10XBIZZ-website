import React from 'react';
import { Mail, Phone, Video, CreditCard } from 'lucide-react';

export default function CRMIntegrations() {
  // इंटीग्रेशन के लिए 9 लोगो आइटम्स की एरे (सिर्फ नाम या इनलाइन SVG)
  const integrations = [
    { name: "HRMS", isSvg: false, icon: <span className="text-[10px] font-bold text-white bg-slate-800 rounded-full w-full h-full flex items-center justify-center">HRMS</span> },
    { name: "Outlook", isSvg: true, svg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#0078d4" d="M2.5 4.5L11 2v20l-8.5-2.5V4.5z"/><path fill="#106ebe" d="M11 2l10.5 3v14L11 22V2z"/><path fill="#fff" d="M6 8h4v1H6V8zm0 3h4v1H6v-1zm0 3h4v1H6v-1z"/></svg>
      )
    },
    { name: "Gmail", isSvg: true, svg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#4285F4" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/><path fill="#EA4335" d="M22 6v12c0 1.1-.9 2-2 2h-2V8l-6 4-6-4v12H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z"/></svg>
      )
    },
    { name: "QuickBooks", isSvg: false, icon: <span className="text-xs font-bold text-green-600">qb</span> },
    { name: "Xero", isSvg: false, icon: <span className="text-xs font-black text-cyan-500 tracking-tighter">xero</span> },
    { name: "WhatsApp", isSvg: true, svg: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.53 1.975 14.063.953 11.444.953c-5.441 0-9.865 4.371-9.87 9.8c-.001 1.736.46 3.431 1.334 4.93L1.93 22.062l6.717-1.754z"/></svg>
      )
    },
    { name: "Zoom", isSvg: false, icon: <Video className="w-5 h-5 text-blue-600" /> },
    { name: "Teams", isSvg: false, icon: <span className="text-xs font-bold text-indigo-600">T</span> },
    { name: "Stripe", isSvg: false, icon: <CreditCard className="w-5 h-5 text-purple-600" /> },
  ];

  return (
    <>
      {/* CSS Stylesheet for Layout Customization and Gradient Hover Effects */}
      <style>{`
        // .integration-bar {
        //   border: 2px solid #000000;
        //   transition: border-image 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        // }
        .integration-bar:hover {
          border-color: transparent;
          border-image: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          border-image-slice: 1;
          box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.05);
        }
        .text-gradient-title {
          background: linear-gradient(125.94deg, #6400A1 0%, #BB000F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .logo-circle {
          border: 1px solid #E2E8F0;
          transition: all 0.2s ease;
        }
        .logo-circle:hover {
          border-color: #000000;
          transform: scale(1.08);
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
      `}</style>

      <section className="bg-[#F8FAFC] py-20 px-6 sm:px-10 font-['Montserrat',ui-sans-serif,system-ui,sans-serif] w-full select-none overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Typography Top Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              All-In-One <span className="text-gradient-title">CRM Software</span>
            </h2>
            <p className="text-base md:text-[18px] font-medium leading-[1.7] text-gray-600 max-w-4xl mx-auto">
              With native integration to HRMS, Accounting, Email, WhatsApp, Zoom, Teams, and Payment Gateways, your sales team stays productive, accountable, and focused on closing deals, whether they're in the office or on the move.
            </p>
          </div>

          {/* Integration White Bar (Exact Replica of Uploaded Image Layout Structure) */}
          <div className="pt-4 max-w-5xl mx-auto">
            <div className="integration-bar bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left Side Static Title */}
              <div className="flex-shrink-0">
                <h3 className="text-[18px] md:text-[22px] font-bold text-gray-900 tracking-tight text-center md:text-left">
                  Software Integrations
                </h3>
              </div>

              {/* Right Side Rounded Logo Items Wrapper */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 md:gap-4">
                {integrations.map((item, idx) => (
                  <div 
                    key={idx} 
                    title={item.name}
                    className="logo-circle w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center p-2.5 cursor-pointer"
                  >
                    {item.isSvg ? item.svg : item.icon}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}