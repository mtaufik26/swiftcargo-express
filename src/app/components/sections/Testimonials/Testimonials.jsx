"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS_HEADER, TESTIMONIALS, CLIENT_LOGOS } from "./Testimonials.constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 mb-4 w-fit">
            <span>{TESTIMONIALS_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {TESTIMONIALS_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {TESTIMONIALS_HEADER.description}
          </p>
        </motion.div>

        {/* 3 TESTIMONIAL CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.14 }}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {t.sector}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold">
                    {t.role}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUSTED CLIENT LOGO STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pt-10 border-t border-slate-200"
        >
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Powering Freight Across Industry Leaders
          </p>

          <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-14 flex-wrap">
            {CLIENT_LOGOS.map((logo, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base font-extrabold text-slate-400 tracking-tight hover:text-slate-700 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}