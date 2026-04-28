"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import {
  header, faqContainer, faqItem, accordion,
  chevronRotate, buttonInteractions, ctaCard, ctaButton,
  viewport
} from "./FAQ.animations";
import { SECTION_HEADER, FAQS, CTA } from "./FAQ.constants";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
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

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={faqContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-4 md:space-y-5"
        >
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={faqItem}
                custom={index}
                className={`transition-all duration-500 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border ${
                  isActive 
                    ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-slate-100" 
                    : "bg-white/50 hover:bg-white border-transparent"
                }`}
              >
                <motion.button
                  variants={buttonInteractions}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex justify-between items-center text-left transition-all group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`p-3 rounded-xl transition-all duration-500 ${isActive ? "bg-primary text-white scale-110 shadow-lg" : "bg-slate-100 text-slate-400 group-hover:text-primary group-hover:scale-110"}`}>
                      <HelpCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    </div>
                    <span className={`font-bold text-base sm:text-lg md:text-xl tracking-tight transition-colors duration-500 ${isActive ? "text-primary" : "text-primary/70 group-hover:text-primary"}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`p-2 rounded-full transition-colors duration-500 ${isActive ? "bg-primary/5" : "bg-slate-100 group-hover:bg-slate-200"}`}
                  >
                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${isActive ? "text-primary" : "text-slate-400"}`} />
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
                      <div className="px-6 md:px-8 pb-6 sm:pb-8 pt-2">
                        <div className="pl-0 sm:pl-12 md:pl-16">
                          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
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
          className="mt-16 md:mt-20 text-center p-6 sm:p-10 md:p-12 bg-primary rounded-[2rem] sm:rounded-[3rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
          
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-8 relative z-10">
            {CTA.text}
          </p>
          
          <motion.a
            href={CTA.buttonHref}
            variants={ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 inline-flex items-center gap-3 bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-[1.5rem] font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-black/20 group"
          >
            {CTA.buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}