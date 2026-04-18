"use client";

import { motion } from "framer-motion";
import { Truck, Package, Clock } from "lucide-react";
import { badge, headline, description, ctas, stats } from "./Hero.animations";
import { HERO_BADGE, HERO_CONTENT, HERO_CTAS, HERO_STATS, HERO_BG } from "./Hero.constants";

const iconMap = { Clock, Package, Truck };

export default function Hero() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28 px-4 md:px-6 mt-12 md:mt-14 lg:mt-10 overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10" />
        <img
          src={HERO_BG.src}
          alt={HERO_BG.alt}
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          variants={badge}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 mb-8 bg-white/80 backdrop-blur-sm"
        >
          <span className={`flex h-2 w-2 rounded-full ${HERO_BADGE.pulseColor} animate-pulse`} />
          {HERO_BADGE.text}
        </motion.div>

        <motion.h1
          variants={headline}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
        >
          {HERO_CONTENT.headline}
          <br />
          <span className="text-gray-600">{HERO_CONTENT.subheadline}</span>
        </motion.h1>

        <motion.p
          variants={description}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.div
          variants={ctas}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          {HERO_CTAS.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              className={`${
                cta.variant === "primary"
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "border-2 border-gray-300 text-gray-900 hover:bg-gray-50"
              } px-8 py-4 rounded-lg text-base font-medium transition text-center`}
            >
              {cta.text}
            </a>
          ))}
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={stats}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl"
        >
          {HERO_STATS.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200"
              >
                <div className={`p-3 ${stat.iconBg} rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}