"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  header, faqContainer, faqItem, accordion,
  chevronRotate, buttonInteractions, ctaCard, ctaButton,
  viewport
} from "./FAQ.animations";
import { SECTION_HEADER, FAQS, CTA } from "./FAQ.constants";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-28 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
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
          <p className="text-gray-600 text-lg">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={faqContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={faqItem}
                custom={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <motion.button
                  variants={buttonInteractions}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition min-h-[44px]"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    variants={chevronRotate}
                    animate={{ rotate: isActive ? 180 : 0 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      variants={accordion}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CONTACT CTA */}
        <motion.div
          variants={ctaCard}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 text-center p-8 bg-gray-900 rounded-2xl text-white"
        >
          <p className="text-lg mb-4">{CTA.text}</p>
          <motion.a
            href={CTA.buttonHref}
            variants={ctaButton}
            whileHover="whileHover"
            whileTap="whileTap"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {CTA.buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}