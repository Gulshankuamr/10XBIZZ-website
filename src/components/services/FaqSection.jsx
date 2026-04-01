import React, { useState } from "react";

const faqs = [
  {
    question: "How much should I spend to get results?",
    answer: [
      "We reverse engineer that with you when we understand your goals and which marketing service you want help with.",
      "The answer will be learned from a combination of conversion volume, cost per conversion and ROI.",
      "For example for paid advertising, if you want 20 conversions per day and the average cost per conversion is $10, then your marketing budget would need to be $200/day.",
    ],
  },
  {
    question: "How much do you charge?",
    answer: [
      "Once we understand the type of marketing services you need help with and your specific goals, then we can create options around timelines, strategies, and team sizes for you to decide.",
      "Our goal is to pay for ourselves within the first 3-6 months.",
    ],
  },
  {
    question: "How long until you launch?",
    answer: [
      "We can start making some changes the first day after our kick off. Usually bigger launches take nothing longer than a few weeks.",
    ],
  },
  {
    question: "How long until I get results?",
    answer: [
      "It can be immediately. For example, if we see that you're bleeding money and it's an easy fix, then we can improve that within a day.",
      "We set performance based goals for all our clients every 3 months.",
    ],
  },
  {
    question: "How long is the contract?",
    answer: [
      "Consulting, setup, management, or performance-based relationships all have different expectations. Setup can be a one-time project and performance could be a longer-term partnership immediately.",
      "If we set bigger goals with you, then we will usually recommend at least a timeline of 6 months to work together.",
    ],
  },
  {
    question: "Will you do pay-for-performance?",
    answer: [
      "We will. For pay for performance to really work well for you, there are a few things you need to consider.",
      "Will it require a brand new site?",
      "Will that site be approved by the ad platforms?",
      "Will we be able to work within your already live ad accounts?",
      "If so, then we'll be a great fit.",
    ],
  },
  {
    question: "Can you give a prediction of future performance and ROI?",
    answer: [
      "We can, and we do that by setting goals based on all our successful case studies and experiments with first-party data.",
      "We can show you how, when you get your free marketing plan.",
    ],
  },
  {
    question: "What does your reporting look like?",
    answer: [
      "See examples of our reporting, our project management, and our deeper quarterly business reviews when you get your free marketing plan.",
    ],
  },
  {
    question: "How many campaigns, blog posts, or landing pages will I get?",
    answer: [
      "You can see some examples on our homepage and they can all be customized to how you'd like to get your data and insights.",
    ],
  },
  {
    question: "How much output do I get?",
    answer: [
      "That's determined through your marketing plan request once we know what services you need help with and what your goals are.",
      "Then we can give you the timelines, strategies, and output in a more digestible format.",
    ],
  },
  {
    question: "How many hours do you work on my account?",
    answer: [
      "If your goals are more aggressive than average, then more hours will be needed. If you're needing help with multiple marketing services at the same time, then more hours will be needed.",
      "We don't charge by the hour (we normally charge a monthly retainer), but we can give you an idea of what our hourly rate would be once we know more about your goals and needs.",
    ],
  },
];

const FaqArtwork = () => (
  <div className="relative mx-auto h-[220px] w-[230px] sm:h-[260px] sm:w-[280px]">
    <div className="absolute left-2 top-3 h-[138px] w-[154px] rounded-[28px] border-[8px] border-[#5d6488] bg-white shadow-[0_12px_24px_-18px_rgba(0,0,0,0.2)] sm:h-[164px] sm:w-[182px]">
      <div className="absolute right-4 top-4 h-6 w-6 rounded-tr-[12px] border-r-[6px] border-t-[6px] border-[#dcecff]" />
      <div
        className="absolute inset-0 flex items-center justify-center text-[82px] font-extrabold text-[#5d6488] sm:text-[96px]"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        ?
      </div>
      <div className="absolute bottom-[-36px] left-14 h-0 w-0 border-l-[0px] border-r-[38px] border-t-[38px] border-l-transparent border-r-transparent border-t-[#5d6488] sm:left-16" />
      <div className="absolute bottom-[-26px] left-[61px] h-0 w-0 border-l-[0px] border-r-[28px] border-t-[28px] border-l-transparent border-r-transparent border-t-white sm:left-[69px]" />
    </div>

    <div className="absolute bottom-0 right-0 h-[128px] w-[168px] rounded-[26px] border-[8px] border-[#5d6488] bg-[#ffe79c] shadow-[0_12px_24px_-18px_rgba(0,0,0,0.2)] sm:h-[150px] sm:w-[190px]">
      <div className="absolute right-4 top-4 h-6 w-6 rounded-tr-[12px] border-r-[6px] border-t-[6px] border-[#fff4d2]" />
      <div className="absolute left-[48px] top-[34px] h-3 w-6 rounded-full border-t-[6px] border-[#5d6488] sm:left-[58px]" />
      <div className="absolute left-[90px] top-[34px] h-3 w-6 rounded-full border-t-[6px] border-[#5d6488] sm:left-[102px]" />
      <div className="absolute left-[58px] top-[58px] h-4 w-4 rounded-full bg-[#5d6488] sm:left-[70px]" />
      <div className="absolute left-[95px] top-[58px] h-4 w-4 rounded-full bg-[#5d6488] sm:left-[107px]" />
      <div className="absolute left-[61px] top-[63px] h-[5px] w-[5px] rounded-full bg-white sm:left-[73px]" />
      <div className="absolute left-[98px] top-[63px] h-[5px] w-[5px] rounded-full bg-white sm:left-[110px]" />
      <div className="absolute left-[58px] top-[82px] h-5 w-[52px] rounded-b-[24px] rounded-t-[8px] bg-[#ef7774] sm:left-[70px] sm:w-[58px]" />
      <div className="absolute bottom-[-34px] right-[36px] h-0 w-0 border-l-[34px] border-t-[34px] border-l-transparent border-t-[#5d6488]" />
      <div className="absolute bottom-[-24px] right-[43px] h-0 w-0 border-l-[24px] border-t-[24px] border-l-transparent border-t-[#ffe79c]" />
    </div>
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');`}</style>

      <section
        className="bg-[#f6f6f4] px-4 pt-12 pb-12 sm:px-6 lg:px-8"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto mb-12 w-full max-w-[800px] px-5 text-center">
            <h2
              className="mt-5 text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-[#0d1326]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block">Frequently Answered Questions -</span>
              <span className="mt-1 block">Go Ahead, Stump Us</span>
            </h2>

            <p
              className="mx-auto mt-5 max-w-[600px] text-base font-normal leading-8 text-[#3d4756]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Anything missing? Include your question when getting your custom marketing plan.
            </p>
          </div>

          <div className="mt-12">
            <FaqArtwork />
          </div>

          <div className="mx-auto mt-14 max-w-[1020px] space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[20px] border border-[#e2e5ea] bg-white shadow-[0_16px_35px_-30px_rgba(15,23,42,0.25)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#fafafa] sm:px-6 md:px-7"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="pr-4 text-[15px] font-semibold leading-7 text-[#141a25] sm:text-[17px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {index + 1}. {faq.question}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5">
                      {isOpen ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M8 8L16 16M16 8L8 16"
                            stroke="#000000"
                            strokeOpacity="0.45"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                          <path
                            d="M3.5 8.5H13.5M8.5 3.5V13.5"
                            stroke="#000000"
                            strokeOpacity="0.45"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6 md:px-7">
                        <div className="border-t border-[#eceff3] pt-5">
                          {faq.answer.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="mb-4 text-[15px] font-normal leading-7 text-[#5e6574] last:mb-0 sm:text-[16px]"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-[1020px] rounded-[20px] bg-[#eceeed] px-6 py-10 text-center sm:px-8 sm:py-12">
            <p
              className="text-[clamp(1.05rem,2vw,1.3rem)] font-bold text-[#0d1326]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Got other questions that aren&apos;t answered?
            </p>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#e8736e] transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
            >
              Get them answered in your free marketing plan
              <span className="text-[1.15rem] leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
