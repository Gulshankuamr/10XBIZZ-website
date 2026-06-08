import React, { useState } from "react";
import HeroActionButton from "../ui/HeroActionButton";
import FreeMarketingPlan from "../freemarektingPlane/FreeMarketingPlan";

const CallToAction = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="my-20 px-4 font-['Montserrat',ui-sans-serif,system-ui,sans-serif]">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4C0083] via-[#2A0060] to-[#180047] px-6 py-12 md:px-14 md:py-16 flex flex-col items-center text-center gap-10">

     

        {/* Glow blobs */}
        <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(180,80,255,0.22)_0%,transparent_70%)]" />
        <div className="absolute -bottom-20 left-[10%] w-[260px] h-[260px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(100,0,161,0.3)_0%,transparent_70%)]" />

        {/* CENTERED CONTENT SECTION */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-medium text-white/90 mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b97bff] animate-pulse" />
            READY TO SCALE?
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] text-white mb-4 tracking-[-0.03em]">
            Stop Losing Leads.
            <br />
            <span className="bg-gradient-to-r from-white to-[#CAABFF] bg-clip-text text-transparent">
              Start Building Smarter Systems.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-[17px] font-medium leading-[1.8] text-white/75 max-w-2xl mb-8">
            We help businesses generate, manage, and convert leads through automation,
            CRM systems, and performance-driven growth strategies.
          </p>
        </div>

        {/* SINGLE CTA BUTTON */}
        <div className="relative z-10 flex items-center justify-center w-full max-w-md mx-auto">
          <HeroActionButton
            variant="primary"
            onClick={() => setOpenModal(true)}
            className="py-4 px-10 min-h-[58px] font-semibold shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02]"
          >
            Build My Growth System
          </HeroActionButton>
        </div>

      </div>

      {/* Pop Modal */}
      {openModal && (
        <FreeMarketingPlan onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default CallToAction;