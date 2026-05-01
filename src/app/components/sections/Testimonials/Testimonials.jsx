"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  header, testimonialCard, quoteIcon, starsContainer, starItem,
  testimonialContent, authorSection, avatar, authorName, authorRole,
  thumbnailsContainer, thumbnail,
  clientLogosSection, clientLogosContainer, clientLogo,
  viewport
} from "./Testimonials.animations";
import { SECTION_HEADER, TESTIMONIALS, CLIENT_LOGOS } from "./Testimonials.constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 bg-white overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-3xl opacity-50 -z-10" />

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
            <p className="text-xs sm:text-sm font-bold text-blue-700 tracking-[0.2em] uppercase">
              {SECTION_HEADER.label}
            </p>
            <div className="h-[2px] w-8 bg-blue-700" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight">
            {SECTION_HEADER.title}
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={testimonialCard}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-50 rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-xl md:shadow-2xl shadow-primary/5 border border-slate-100"
            >

              {/* QUOTE */}
              <motion.div
                variants={quoteIcon}
                className="absolute top-4 right-4 opacity-10 pointer-events-none"
              >
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary rotate-180" />
              </motion.div>

              <div className="relative z-10">
                
                {/* STARS */}
                <motion.div variants={starsContainer} className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} variants={starItem}>
                      <Star
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          i < activeTestimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* CONTENT */}
                <motion.p
                  variants={testimonialContent}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-bold leading-relaxed mb-8 md:mb-12 tracking-tight"
                >
                  {activeTestimonial.content}
                </motion.p>

                {/* AUTHOR (FIX MOBILE) */}
                <motion.div
                  variants={authorSection}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                >
                  
                  {/* AVATAR */}
                  <div className="flex">
                    <motion.img
                      variants={avatar}
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-[1.5rem] object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col gap-1">
                    
                    <motion.h4
                      variants={authorName}
                      className="font-bold sm:font-black text-primary text-lg sm:text-2xl leading-tight"
                    >
                      {activeTestimonial.name}
                    </motion.h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      
                      <motion.p
                        variants={authorRole}
                        className="text-blue-700 font-bold uppercase text-[10px] sm:text-xs tracking-wider"
                      >
                        {activeTestimonial.role}
                      </motion.p>

                      <div className="hidden sm:block w-1.5 h-1.5 bg-slate-300 rounded-full" />

                      <motion.p
                        variants={authorRole}
                        className="text-slate-500 text-xs sm:text-sm font-medium"
                      >
                        {activeTestimonial.company}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* THUMBNAILS */}
        <motion.div
          variants={thumbnailsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex justify-center gap-4 sm:gap-6 flex-wrap"
        >
          {TESTIMONIALS.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.button
                key={index}
                variants={thumbnail}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-[1.5rem] transition-all duration-500 border ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white text-slate-600 border-slate-100 hover:shadow-md"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover border-2 ${
                    isActive ? "border-white/20" : "border-slate-50"
                  }`}
                />

                <div className="text-left hidden sm:block">
                  <p className={`font-bold text-sm ${
                    isActive ? "text-white" : "text-primary"
                  }`}>
                    {item.name}
                  </p>
                  <p className={`text-[10px] uppercase tracking-widest ${
                    isActive ? "text-blue-200" : "text-slate-400"
                  }`}>
                    {item.company}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* CLIENT LOGOS */}
        <motion.div
          variants={clientLogosSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 md:mt-32 pt-12 md:pt-20 border-t border-slate-100"
        >
          <p className="text-center text-xs sm:text-sm font-bold text-slate-400 mb-8 md:mb-12 uppercase tracking-[0.2em]">
            Dipercaya oleh 500+ perusahaan di Indonesia
          </p>

          <motion.div
            variants={clientLogosContainer}
            className="flex justify-center items-center gap-10 md:gap-24 flex-wrap"
          >
            {CLIENT_LOGOS.map((client) => (
              <motion.div
                key={client}
                variants={clientLogo}
                className="text-xl md:text-3xl font-black text-slate-200 hover:text-primary transition-colors duration-500"
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}