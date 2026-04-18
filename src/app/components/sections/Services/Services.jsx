"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Truck, Package, Warehouse, Shield, Globe } from "lucide-react";
import { header, container, card, accordion, iconRotate, viewport } from "./Services.animations";
import { SECTION_HEADER, SERVICES } from "./Services.constants";

const iconMap = { Clock, Truck, Package, Warehouse, Shield, Globe };

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            {SECTION_HEADER.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {SECTION_HEADER.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                variants={card}
                layout
                className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-gray-900 bg-gray-50 shadow-lg"
                    : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Icon + Chevron */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-900 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div variants={iconRotate} animate={{ rotate: isActive ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      variants={accordion}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pt-4 border-t border-gray-200">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
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