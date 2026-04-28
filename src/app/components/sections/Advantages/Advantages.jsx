"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, DollarSign, Eye, Award, Headphones, Lock, ArrowRight } from "lucide-react";
import {
  header, mainCardColumn, selectorsColumn, selectorsGrid,
  selectorButton, buttonInteractions, contentCard,
  iconContainer, statBox, viewport
} from "./Advantages.animations";
import { SECTION_HEADER, ADVANTAGES } from "./Advantages.constants";

const iconMap = { Zap, DollarSign, Eye, Award, Headphones, Lock };

export default function Advantages() {
  const [active, setActive] = useState(0);
  const activeAdvantage = ADVANTAGES[active];
  const ActiveIcon = iconMap[activeAdvantage.icon];

  return (
    <section id="advantages" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-primary text-white overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 mx-auto">
            <div className="h-[2px] w-8 bg-blue-500" />
            <p className="text-sm font-bold text-blue-500 tracking-[0.2em] uppercase">
              {SECTION_HEADER.label}
            </p>
            <div className="h-[2px] w-8 bg-blue-500" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 tracking-tight">
            {SECTION_HEADER.title}
          </h2>

          <p className="text-blue-100/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT - MAIN CARD */}
          <motion.div
            variants={mainCardColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative lg:pr-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={contentCard}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white text-primary rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent" />
                
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <motion.div variants={iconContainer} className="p-5 bg-primary rounded-2xl shadow-xl">
                    <ActiveIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold tracking-tight text-primary">
                    {activeAdvantage.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-medium relative z-10">
                  {activeAdvantage.desc}
                </p>

                <motion.div 
                  variants={statBox}
                  className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 relative z-10"
                >
                  <div className="w-2 h-12 bg-blue-700 rounded-full" />
                  <div>
                    <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter mb-1 leading-none">
                      {activeAdvantage.stat}
                    </p>
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mt-1">
                      {activeAdvantage.statLabel}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT - SELECTORS */}
          <motion.div
            variants={selectorsColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              variants={selectorsGrid}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {ADVANTAGES.map((item, index) => {
                const isActive = active === index;
                const Icon = iconMap[item.icon];

                return (
                  <motion.button
                    key={index}
                    variants={selectorButton}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActive(index)}
                    className={`p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-left transition-all duration-500 relative overflow-hidden group border ${
                      isActive
                        ? "bg-white text-primary border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className={`p-4 rounded-xl inline-block mb-6 transition-all duration-500 ${
                      isActive ? "bg-primary text-white scale-110 shadow-lg" : "bg-white/10 text-slate-400 group-hover:text-white group-hover:scale-110"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h4 className="font-bold text-lg sm:text-xl mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    
                    <p className={`text-xs font-bold transition-colors duration-500 flex items-center gap-2 uppercase tracking-wider ${
                      isActive ? "text-blue-700" : "text-slate-400 group-hover:text-slate-200"
                    }`}>
                      {item.stat} {item.statLabel}
                      {isActive && <ArrowRight className="w-3 h-3 transition-transform translate-x-1" />}
                    </p>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}