import React from "react";
import { motion } from "framer-motion";

const TRUST_POINTS = [
  { title: "Results-driven approach", icon: "📈" },
  { title: "Personalized strategy", icon: "🧠" },
  { title: "Automation expertise", icon: "🤖" },
  { title: "Long-term support", icon: "🤝" },
  { title: "Business-first thinking", icon: "💼" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden font-sans">
      {/* Decorative Background Elements (Matching your theme) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6400A1]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#BB000F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[10px] uppercase tracking-[0.2em] font-bold mb-5 text-[#6400A1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BB000F] animate-pulse" />
            Trust / Authority
          </div>
          
          <h2 className="text-[36px] md:text-[50px] font-black text-gray-900 leading-tight tracking-tight mb-6 font-['Montserrat']">
            Why Businesses <span className="italic text-[#6400A1]">Choose Us</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our mission is to drive progress and enhance the lives of our customers by 
            delivering superior products and services that exceed expectations.
          </p>
        </div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] rounded-[30px] overflow-hidden shadow-2xl mb-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000" 
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Content & Trust Points Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available, but the 
              majority have suffered alteration in some form, by injected humour, or 
              randomized words which don't look even slightly believable. We focus on 
              building systems that solve real business problems.
            </p>
            
            <button className="px-8 py-4 bg-gradient-to-r from-[#6400A1] to-[#BB000F] text-white rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all flex items-center gap-3">
              Get Started <span>→</span>
            </button>
          </div>

          {/* Icon List (Authority Points) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_POINTS.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#6400A1]/30 transition-colors"
              >
                <span className="text-xl">{point.icon}</span>
                <span className="font-bold text-gray-800 text-sm tracking-tight">
                  {point.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}