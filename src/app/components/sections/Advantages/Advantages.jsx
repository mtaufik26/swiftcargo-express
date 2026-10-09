"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeDollarSign, Navigation, Headphones, Check } from "lucide-react";
import { ADVANTAGES_HEADER, ADVANTAGES } from "./Advantages.constants";

const iconMap = { ShieldCheck, BadgeDollarSign, Navigation, Headphones };

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/80 mb-4 w-fit">
            <span>{ADVANTAGES_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            {ADVANTAGES_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {ADVANTAGES_HEADER.description}
          </p>
        </motion.div>

        {/* 4 CORE BENEFITS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = iconMap[adv.icon];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                className="bg-slate-800/60 p-7 rounded-3xl border border-slate-700/70 hover:border-slate-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/80 text-blue-400 border border-blue-800/60 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {adv.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal mb-6">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{adv.statLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}