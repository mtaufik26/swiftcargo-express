"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Truck } from "lucide-react";
import {
  header, gridContainer, card, cardContent,
  imageContainer, badge, textContent,
  statsContainer, statItem, imageHover, cardHover,
  viewport
} from "./Portfolio.animations";
import { PORTFOLIO_ITEMS, ICON_MAP } from "./Portfolio.constants";

const iconMap = { MapPin, Package, Truck };

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            {PORTFOLIO_ITEMS.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyek yang Telah Kami Selesaikan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Track record kami dalam memberikan solusi logistik terbaik untuk berbagai industri
          </p>
        </motion.div>

        {/* PORTFOLIO GRID */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={cardHover.whileHover}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <motion.div
                  variants={imageContainer}
                  whileHover={imageHover.whileHover}
                  transition={imageHover.transition}
                  className="w-full h-56"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Category Badge */}
                <motion.div
                  variants={badge}
                  className="absolute top-4 left-4"
                >
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {item.category}
                  </span>
                </motion.div>
              </div>

              {/* Content Section */}
              <motion.div variants={cardContent} className="p-6">
                <motion.h3 variants={textContent} className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </motion.h3>
                
                <motion.p variants={textContent} className="text-gray-600 text-sm mb-6">
                  {item.description}
                </motion.p>

                {/* Stats Section */}
                <motion.div
                  variants={statsContainer}
                  className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100"
                >
                  {item.stats.map((stat, i) => {
                    const Icon = iconMap[stat.icon];
                    return (
                      <motion.div
                        key={i}
                        variants={statItem}
                        className="text-center"
                      >
                        <Icon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
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