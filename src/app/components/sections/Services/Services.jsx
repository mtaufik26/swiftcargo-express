"use client";

import { motion } from "framer-motion";
import { Truck, Plane, Ship, Snowflake, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_HEADER, SERVICES } from "./Services.constants";

const iconMap = { Truck, Plane, Ship, Snowflake };

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-slate-50/50 border-b border-slate-200/80">
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
            <span>{SERVICES_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {SERVICES_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {SERVICES_HEADER.description}
          </p>
        </motion.div>

        {/* 4 CORE SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* ICON & HIGHLIGHT */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/60">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* BULLETS */}
                  <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CARD CTA */}
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}