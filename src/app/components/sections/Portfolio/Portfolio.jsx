"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Truck, ArrowRight } from "lucide-react";
import {
  header, gridContainer, card, cardContent,
  imageContainer, badge, textContent,
  statsContainer, statItem, viewport
} from "./Portfolio.animations";
import { SECTION_HEADER, PORTFOLIO_ITEMS } from "./Portfolio.constants";

const iconMap = { MapPin, Package, Truck };

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-60" />
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
            <div className="h-[2px] w-8 bg-blue-700" />
            <p className="text-sm font-bold text-blue-700 tracking-[0.2em] uppercase">
              {SECTION_HEADER.label}
            </p>
            <div className="h-[2px] w-8 bg-blue-700" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight">
            {SECTION_HEADER.title}
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* PORTFOLIO GRID */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-500"
            >
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden h-64 md:h-72">
                <motion.div
                  variants={imageContainer}
                  className="w-full h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* CATEGORY BADGE */}
                <motion.div
                  variants={badge}
                  className="absolute top-6 left-6"
                >
                  <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-blue-700 uppercase tracking-widest shadow-lg">
                    {item.category}
                  </span>
                </motion.div>
              </div>

              {/* CONTENT SECTION */}
              <motion.div variants={cardContent} className="p-6 sm:p-8 md:p-10">
                <motion.h3 variants={textContent} className="text-xl sm:text-2xl font-bold text-primary mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                  {item.title}
                </motion.h3>
                
                <motion.p variants={textContent} className="text-slate-500 font-medium mb-8 leading-relaxed line-clamp-2 text-sm md:text-base">
                  {item.description}
                </motion.p>

                {/* STATS */}
                <motion.div
                  variants={statsContainer}
                  className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-50"
                >
                  {item.stats.map((stat, i) => {
                    const Icon = iconMap[stat.icon];
                    return (
                      <motion.div
                        key={i}
                        variants={statItem}
                        className="text-center"
                      >
                        <div className="mb-2 p-2 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-5 h-5 text-blue-700" />
                        </div>
                        <p className="text-xl font-black text-primary tracking-tighter">{stat.value}</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}