import React from "react";

const caseStudyCards = [
    {
        id: 1,
        brand: "Airbnb",
        brandColor: "#ff5a5f",
        result: "25% decrease in cost per click",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+01",
    },
    {
        id: 2,
        brand: "Juniper Networks",
        brandColor: "#50545c",
        result: "329% increase in conversion rate",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+02",
    },
    {
        id: 3,
        brand: "Autopilot",
        brandColor: "#2e3138",
        result: "42% decrease in cost per acquisition",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+03",
    },
    {
        id: 4,
        brand: "Mavenlink",
        brandColor: "#4b92ec",
        result: "90% increase in conversions",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+04",
    },
    {
        id: 5,
        brand: "Fleshlight",
        brandColor: "#171717",
        result: "18% increase in conversion rate",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+05",
    },
    {
        id: 6,
        brand: "Segment",
        brandColor: "#4bbf8b",
        result: "195% increase in conversions",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+06",
    },
    {
        id: 7,
        brand: "Stanford Business",
        brandColor: "#9e2e2e",
        result: "139% increase in conversions",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+07",
    },
    {
        id: 8,
        brand: "Yoga International",
        brandColor: "#8c5a2b",
        result: "115% increase in conversions",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+08",
    },
    {
        id: 9,
        brand: "Base",
        brandColor: "#20252e",
        result: "57% decrease in cost per conversion",
        image: "https://via.placeholder.com/640x360/E6E7EB/8F96A3?text=Case+Study+Image+09",
    },
];

const ImagesCard3 = () => {
    return (
        <>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');`}</style>

            <section
                className="relative overflow-hidden px-4  sm:px-6 lg:px-8"
                style={{ backgroundColor: "#EFEDE6", paddingTop: "80px", paddingBottom: "80px" }}
            >
                <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(188,191,199,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(188,191,199,0.16)_1px,transparent_1px)] bg-[size:46px_46px]" />

                <div className="relative mx-auto max-w-[980px]">
                    <div className="mb-12 text-center px-5 w-full max-w-[800px] mx-auto">

                        <h2 className="mt-5 text-[#0d1326] font-extrabold tracking-[-0.04em] leading-[1.1] text-[clamp(2rem,4.5vw,3.6rem)] font-serif">

                            <span className="block">
                                More Client Wins Than Any Other
                            </span>

                            <span className="block mt-1 whitespace-nowrap">
                                Marketing Team On The Planet
                            </span>

                        </h2>

                        <p className="mx-auto mt-5 max-w-[600px] text-[#3d4756] text-base leading-8 font-normal font-sans">
                            With the most performance proof of any team on the planet,
                            our 200+ published case studies are just the start.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {caseStudyCards.map((card) => (
                            <article
                                key={card.id}
                                className="group overflow-hidden rounded-[10px] border-[4px] border-[#636b8f] bg-white shadow-[8px_8px_0_rgba(99,107,143,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f7f7f5] hover:shadow-[10px_10px_0_rgba(99,107,143,0.18)]"
                            >
                                <div className="flex h-[220px] flex-col">
                                    <div className="flex h-[96px] flex-col items-center justify-center px-4 text-center">
                                        <div
                                            className="text-[clamp(1.45rem,2vw,2rem)] font-extrabold uppercase tracking-[-0.03em]"
                                            style={{ fontFamily: "'Syne', sans-serif", color: card.brandColor, lineHeight: 1 }}
                                        >
                                            {card.brand}
                                        </div>

                                        <p
                                            className="mt-3 text-[15px] font-extrabold leading-5 text-[#1f2430]"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {card.result}
                                        </p>
                                    </div>

                                    <div className="relative flex-1 overflow-hidden border-t border-[#d8dbe3] bg-[#e7e8eb]">
                                        <div className="absolute inset-x-0 top-0 z-10 h-4 bg-[radial-gradient(circle_at_10px_0px,_transparent_11px,_#ffffff_12px)] bg-[length:22px_18px] bg-repeat-x" />
                                        <img
                                            src={card.image}
                                            alt={card.brand}
                                            className="h-full w-full object-cover object-center grayscale-[12%] transition-transform duration-300 group-hover:scale-[1.03]"
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(221,224,230,0.22))]" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-14 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.12em] text-[#ff6f61] transition-colors duration-300 hover:text-[#e65d50]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            See the videos, reviews, and other case studies
                            <span className="text-lg">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImagesCard3;
