"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Phone, Mail, Clock, ArrowRight, Headphones, CheckCircle2 
} from "lucide-react";
import { FAQ_HEADER, FAQS, FAQ_SIDEBAR } from "./FAQ.constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: STICKY HEADER & SUPPORT DESK (5 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 mb-4 w-fit">
                <span>{FAQ_HEADER.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {FAQ_HEADER.headline}
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {FAQ_HEADER.description}
              </p>
            </div>

            {/* DIRECT SUPPORT CARD */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-900/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white leading-tight">
                    {FAQ_SIDEBAR.cardTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {FAQ_SIDEBAR.hours}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {FAQ_SIDEBAR.cardDescription}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{FAQ_SIDEBAR.phone} <span className="text-slate-500">• Toll-Free</span></span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{FAQ_SIDEBAR.email}</span>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800">
                <a
                  href={FAQ_SIDEBAR.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>{FAQ_SIDEBAR.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FAQ ACCORDION LIST (7 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7 space-y-3.5"
          >
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-slate-50/70 border-slate-300 shadow-2xs"
                      : "bg-white border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-xl bg-white border border-slate-200 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}