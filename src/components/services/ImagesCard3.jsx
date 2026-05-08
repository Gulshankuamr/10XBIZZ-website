import React, { useState } from "react";

const specialityCards = [
  {
    id: 1,
    label: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#F5A623] to-[#e8870f]",
    gridClass: "md:col-start-1 md:row-start-1 md:row-end-3",
  },
  {
    id: 2,
    label: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#20C5A0] to-[#0a9e80]",
    gridClass: "md:col-start-2 md:row-start-1",
  },
  {
    id: 3,
    label: "Mobile Marketing",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#1a1a2e] to-[#16213e]",
    gridClass: "md:col-start-3 md:row-start-1",
  },
  {
    id: 4,
    label: "Online Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#4E8FE8] to-[#2b6fd4]",
    gridClass: "md:col-start-4 md:row-start-1 md:row-end-3",
  },
  {
    id: 5,
    label: "Search Engine Marketing",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#5B63E8] to-[#3b44c8]",
    gridClass: "md:col-start-2 md:row-start-2 md:row-end-4",
  },
  {
    id: 6,
    label: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#C542D4] to-[#a030b0]",
    gridClass: "md:col-start-3 md:row-start-2",
  },
  {
    id: 7,
    label: "Paid Marketing",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#F05E7A] to-[#d83a57]",
    gridClass: "md:col-start-1 md:row-start-3",
  },
  {
    id: 8,
    label: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#F5A623] to-[#e07d0a]",
    gridClass: "md:col-start-3 md:row-start-3",
  },
  {
    id: 9,
    label: "Content Marketing",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#20C5A0] to-[#0b8c6e]",
    gridClass: "md:col-start-4 md:row-start-3",
  },
];

const OurSpeciality = () => {
  return (
    <section className="py-24 px-6 bg-[#f8f9fc] font-['Outfit',sans-serif]">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight font-['Plus_Jakarta_Sans'] mb-4">
          Our Speciality
        </h2>
        <div className="flex justify-center items-center gap-1.5">
          <span className="w-12 h-1.5 bg-indigo-600 rounded-full"></span>
          <span className="w-4 h-1.5 bg-indigo-600 opacity-50 rounded-full"></span>
          <span className="w-2 h-1.5 bg-indigo-600 opacity-25 rounded-full"></span>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[220px]">
        {specialityCards.map((card) => (
          <div
            key={card.id}
            className={`group relative overflow-hidden rounded-[32px] cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.gridClass}`}
          >
            {/* Background Gradient Layer */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}></div>

            {/* Clear Image Layer */}
            <div className="absolute inset-0 w-full h-full p-2">
               <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                    loading="lazy"
                    style={{ imageRendering: 'auto' }}
                  />
               </div>
            </div>

            {/* Shine Animation Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Text Label */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-white text-xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight drop-shadow-md">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSpeciality;