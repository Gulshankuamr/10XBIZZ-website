import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Rocket } from "lucide-react";

export default function Mission() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
      `}</style>

      <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-white font-['DM_Sans',sans-serif]">
        {/* Subtle Background Elements */}


        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE — Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 shrink-0"
          >
            <div className="relative shadow-[0_40px_100px_rgba(100,0,161,0.12)] rounded-[2.5rem] overflow-hidden border border-slate-100">
              <img 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
                alt="Our Team Mission" 
              />
              
              {/* Floating Trust Badge */}
         
            </div>

            {/* Decorative Icon Box */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#6400A1] to-[#BB000F] p-5 rounded-2xl shadow-lg hidden md:block">
               <Rocket className="text-white size-8" />
            </div>
          </motion.div>

          {/* RIGHT SIDE — Mission Content */}
          <div className="flex-1 text-slate-600">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#6400A1] font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[#6400A1]/30"></span> Our Mission
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8 font-['Syne']">
                Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6400A1] to-[#BB000F]">Predictable Systems</span> For Unstoppable Growth.
              </h2>
            </motion.div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-medium text-slate-800">
                Our mission is to help businesses grow with systems that are measurable, scalable, and built for long-term success.
              </p>
              
              <p>
                We believe marketing should create predictable growth — not confusion. 
                Most agencies focus on vanity metrics; we focus on the **infrastructure of your success**.
              </p>

              {/* Mission Bullet Points */}
              <div className="grid gap-4 pt-4">
                {[
                  "Eliminating guesswork from lead generation.",
                  "Automating conversion paths to save time.",
                  "Turning ad spend into a clear investment engine."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-[#BB000F] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="pt-4 italic text-slate-500 border-t border-slate-100">
                "We don't just build websites or run ads; we build the future of your business operations."
              </p>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-10"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 bg-[#6400A1] hover:bg-[#6400A1] text-white py-4 px-10 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-slate-200"
              >
                <span>Partner With Us</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
     
    </section>
    </>
  );
}