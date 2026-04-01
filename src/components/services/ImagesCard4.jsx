import React from "react";

const showcaseCards = [
  {
    id: 1,
    title: "Editorial Landing Page",
    image: "https://via.placeholder.com/900x1180/F5F3EE/8E95A3?text=Website+Preview+01",
    cardClass: "md:translate-y-0",
    frameClass: "aspect-[0.78/1]",
  },
  {
    id: 2,
    title: "SaaS Product Experience",
    image: "https://via.placeholder.com/900x1180/ECEBFF/7E85F6?text=Website+Preview+02",
    cardClass: "md:translate-y-6",
    frameClass: "aspect-[0.78/1]",
  },
  {
    id: 3,
    title: "Education Campaign System",
    image: "https://via.placeholder.com/900x1180/F5EEE8/B85B4A?text=Website+Preview+03",
    cardClass: "md:-translate-y-1",
    frameClass: "aspect-[0.78/1]",
  },
  {
    id: 4,
    title: "Conversion Audit Layout",
    image: "https://via.placeholder.com/900x1180/F4F5F7/5D738F?text=Website+Preview+04",
    cardClass: "md:translate-y-4",
    frameClass: "aspect-[0.78/1]",
  },
];

const ImagesCard4 = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');`}</style>

      <section
        className="relative overflow-hidden bg-white px-4   sm:px-6 lg:px-8"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(205,209,216,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(205,209,216,0.1)_1px,transparent_1px)] bg-[size:46px_46px]" />

        <div className="relative mx-auto max-w-[980px]">
       <div className="mb-12 text-center px-5 w-full max-w-[800px] mx-auto">

  <h2 className="mt-5 text-[#0d1326] font-extrabold tracking-[-0.04em] leading-[1.1] text-[clamp(2rem,4.5vw,3.6rem)] font-serif">
    
    <span className="block">
     Invest In Quality Work &
    </span>

    <span className="block mt-1 whitespace-nowrap">
   Get Quality Results
    </span>

  </h2>

  <p className="mx-auto mt-5 max-w-[600px] text-[#3d4756] text-base leading-8 font-normal font-sans">
    Raise the bar on your creative and see how it makes it easier
for all your marketing to achieve its goals.
  </p>

</div>

          <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2">
            {showcaseCards.map((card) => (
              <article key={card.id} className={`group ${card.cardClass}`}>
                <div className="relative mx-auto max-w-[320px]">
                  <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2px] border border-[#e4e1da] bg-white/70" />
                  <div className="absolute inset-0 -translate-x-4 translate-y-3 rounded-[2px] border border-[#ece7de] bg-white/60" />

                  <div className="relative rounded-[2px] border border-[#e4e1da] bg-white p-3 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_55px_-35px_rgba(15,23,42,0.34)]">
                    <div className={`overflow-hidden bg-[#f3f1ec] ${card.frameClass}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImagesCard4;
