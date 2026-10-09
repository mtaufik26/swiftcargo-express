"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Truck, ArrowRight } from "lucide-react";
import { NETWORK_HEADER, CORRIDORS } from "./Portfolio.constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white border-b border-slate-200/80">
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
            <span>{NETWORK_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {NETWORK_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {NETWORK_HEADER.description}
          </p>
        </motion.div>

        {/* 4 KEY CORRIDORS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {CORRIDORS.map((corridor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
              className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 uppercase tracking-wider">
                    {corridor.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Transit: <strong className="text-slate-900">{corridor.transitTime}</strong>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {corridor.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 mb-6 pb-4 border-b border-slate-200/80">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{corridor.route}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-slate-400 block mb-0.5 font-medium">Frequency</span>
                    <strong className="text-slate-800 font-semibold">{corridor.frequency}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                    <span className="text-slate-400 block mb-0.5 font-medium">Equipment</span>
                    <strong className="text-slate-800 font-semibold">{corridor.fleetTypes}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span>Inquire About This Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}