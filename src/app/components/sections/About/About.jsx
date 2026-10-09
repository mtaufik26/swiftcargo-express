"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import { ABOUT_HEADER, ABOUT_PILLARS, ABOUT_IMAGES, ABOUT_BADGE } from "./About.constants";

const iconMap = { Truck, Warehouse, ShieldCheck };

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 mb-4 w-fit">
            <span>{ABOUT_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {ABOUT_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ABOUT_HEADER.description}
          </p>
        </motion.div>

        {/* 2-COLUMN SHOWCASE */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: IMAGE COMPOSITION (5 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/5 bg-slate-100">
              <img
                src={ABOUT_IMAGES.main}
                alt="SwiftCargo Modern Warehouse Facility"
                className="w-full h-[320px] sm:h-[400px] md:h-[460px] object-cover"
                loading="lazy"
              />

              {/* INSET SECONDARY IMAGE */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-44 sm:w-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={ABOUT_IMAGES.secondary}
                  alt="SwiftCargo Fleet Dispatch"
                  className="w-full h-28 sm:h-36 object-cover"
                  loading="lazy"
                />
              </div>

              {/* EXPERIENCE BADGE OVERLAY */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-900/90 backdrop-blur-md text-white px-4 sm:px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black tracking-tight leading-none">
                    {ABOUT_BADGE.years}
                  </p>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    {ABOUT_BADGE.label}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3 VALUE PILLARS (7 COLS) */}
          <div className="lg:col-span-7 space-y-5">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.14 }}
                  className="bg-slate-50/70 p-6 sm:p-7 rounded-2xl border border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 pl-15 sm:pl-0">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
                      {pillar.stat}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {pillar.statLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}