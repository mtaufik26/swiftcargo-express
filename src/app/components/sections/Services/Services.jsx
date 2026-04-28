"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Clock,
  Truck,
  Package,
  Warehouse,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  header,
  container,
  card,
  accordion,
  viewport,
} from "./Services.animations";
import { SECTION_HEADER, SERVICES } from "./Services.constants";

const iconMap = { Clock, Truck, Package, Warehouse, Shield, Globe };

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 bg-white overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50/50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 mx-auto">
            <div className="h-[2px] w-8 bg-blue-700" />
            <p className="text-sm font-bold text-blue-700 tracking-[0.2em] uppercase">
              {SECTION_HEADER.label}
            </p>
            <div className="h-[2px] w-8 bg-blue-700" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight">
            {SECTION_HEADER.title}
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                variants={card}
                layout
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] cursor-pointer overflow-hidden
                border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    : "bg-slate-50 border-slate-100 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                }`}
              >
                
                {/* GRADIENT HOVER */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out blur-xl ${
                    isActive ? "from-blue-400/20 opacity-100" : ""
                  }`}
                />

                {/* ICON + CHEVRON */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  
                  <div
                    className={`p-4 rounded-2xl transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-white/10 backdrop-blur-md scale-105"
                        : "bg-white shadow-sm group-hover:scale-105 group-hover:shadow-md"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isActive ? "text-white" : "text-blue-700"
                      }`}
                    />
                  </div>

                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`p-2 rounded-full ${
                      isActive ? "bg-white/10" : "bg-slate-200/50"
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-500 ease-in-out ${
                      isActive ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-base mb-6 leading-relaxed transition-colors duration-500 ease-in-out ${
                      isActive
                        ? "text-blue-100"
                        : "text-slate-500 font-medium"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* ACCORDION */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      variants={accordion}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden relative z-10"
                    >
                      <ul className="space-y-3 pt-6 border-t border-white/10">
                        {item.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-blue-50 font-medium group/item"
                          >
                            <ArrowRight className="w-4 h-4 text-blue-300 transition-transform group-hover/item:translate-x-1" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}