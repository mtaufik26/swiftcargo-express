"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, DollarSign, Eye, Award, Headphones, Lock } from "lucide-react";
import {
  header, mainCardColumn, selectorsColumn, selectorsGrid,
  selectorButton, buttonInteractions, contentCard,
  iconContainer, statBox, viewport
} from "./Advantages.animations";
import { SECTION_HEADER, ADVANTAGES, ICON_MAP } from "./Advantages.constants";

const iconMap = { Zap, DollarSign, Eye, Award, Headphones, Lock };

export default function Advantages() {
  const [active, setActive] = useState(0);
  const activeAdvantage = ADVANTAGES[active];
  const ActiveIcon = iconMap[activeAdvantage.icon];

  return (
    <section id="advantages" className="py-28 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wide uppercase">
            {SECTION_HEADER.label}
          </p>
          <h2 className="text-4xl font-bold mb-4">
            {SECTION_HEADER.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - MAIN CARD */}
          <motion.div
            variants={mainCardColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={contentCard}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div variants={iconContainer} className="p-4 bg-gray-900 rounded-2xl">
                    <ActiveIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">
                    {activeAdvantage.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {activeAdvantage.desc}
                </p>

                <motion.div 
                  variants={statBox}
                  className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl"
                >
                  <div>
                    <p className="text-4xl font-bold text-gray-900">
                      {activeAdvantage.stat}
                    </p>
                    <p className="text-sm text-gray-600">
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
              className="grid grid-cols-2 gap-4"
            >
              {ADVANTAGES.map((item, index) => {
                const isActive = active === index;
                const Icon = iconMap[item.icon];

                return (
                  <motion.button
                    key={index}
                    variants={selectorButton}
                    whileHover={buttonInteractions.whileHover}
                    whileTap={buttonInteractions.whileTap}
                    onClick={() => setActive(index)}
                    className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-white text-gray-900 shadow-xl"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    <div className={`p-3 rounded-xl inline-block mb-3 ${
                      isActive ? "bg-gray-900" : "bg-gray-700"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className={`text-sm ${
                      isActive ? "text-gray-600" : "text-gray-400"
                    }`}>
                      {item.stat} {item.statLabel}
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