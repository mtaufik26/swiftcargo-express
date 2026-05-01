"use client";

import { motion } from "framer-motion";
import { Truck, Package, Clock, ArrowRight } from "lucide-react";
import { badge, headline, description, ctas, stats, visualColumn, floating } from "./Hero.animations";
import { HERO_BADGE, HERO_CONTENT, HERO_CTAS, HERO_STATS, HERO_VISUALS } from "./Hero.constants";

const iconMap = { Clock, Package, Truck };

export default function Hero() {
  return (
    <section className="relative flex items-start bg-white pt-24 pb-12 sm:pt-32 sm:pb-14 md:pt-40 md:pb-24 lg:pt-30 lg:pb-32 px-4 sm:px-6 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[220px] sm:w-[300px] md:w-[400px] h-[220px] sm:h-[300px] md:h-[400px] bg-slate-50 rounded-full blur-3xl opacity-80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* RIGHT COLUMN (GAMBAR) */}
          <motion.div
            variants={visualColumn}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* IMAGE CONTAINER FIX */}
            <div className="relative z-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-lg sm:shadow-xl md:shadow-2xl shadow-blue-900/10 border-4 sm:border-6 md:border-8 border-white bg-white flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src={HERO_VISUALS.main}
                alt="SwiftCargo Hero"
                className="w-full h-full max-h-[260px] sm:max-h-[340px] md:max-h-[500px] object-contain"
              />
            </div>

            {/* FLOATING CARD (SUDAH DISESUAIKAN) */}
            <motion.div
              variants={floating}
              animate="animate"
              className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-4 md:-bottom-10 md:-left-20 z-20 w-28 sm:w-36 md:w-64"
            >
              <div className="bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-lg sm:shadow-xl md:shadow-2xl border border-white/50 overflow-hidden">
                <img 
                  src={HERO_VISUALS.tracking} 
                  alt="Live Tracking" 
                  className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-[1.5rem]"
                />
              </div>
            </motion.div>

            {/* DECOR */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-100 rounded-full blur-xl opacity-70 animate-pulse" />
          </motion.div>

          {/* LEFT COLUMN (TEXT) */}
          <div className="order-2 lg:order-1">
            
            {/* BADGE */}
            <motion.div
              variants={badge}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 border border-blue-100 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold text-blue-700 mb-5 sm:mb-6 md:mb-8 bg-blue-50/50 backdrop-blur-sm"
            >
              <span className={`flex h-2 w-2 rounded-full ${HERO_BADGE.pulseColor} animate-pulse`} />
              {HERO_BADGE.text}
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              variants={headline}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5 md:mb-6 tracking-tight"
            >
              {HERO_CONTENT.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                {HERO_CONTENT.subheadline}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={description}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-xl text-slate-600 max-w-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              variants={ctas}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-16"
            >
              {HERO_CTAS.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  className={`${
                    cta.variant === "primary"
                      ? "bg-primary text-white hover:bg-primary-light shadow-md sm:shadow-lg hover:shadow-xl"
                      : "bg-white border border-slate-200 text-primary hover:bg-slate-50"
                  } px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2`}
                >
                  {cta.text}
                  {cta.variant === "primary" && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={stats}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-8 border-t border-slate-100 pt-5 sm:pt-6 md:pt-10"
            >
              {HERO_STATS.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-1">
                      <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${stat.iconColor}`} />
                      <span className="text-base sm:text-lg md:text-3xl font-bold text-primary">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[8px] sm:text-[9px] md:text-sm text-slate-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}