"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  header, testimonialCard, quoteIcon, starsContainer, starItem,
  testimonialContent, authorSection, avatar, authorName, authorRole,
  thumbnailsContainer, thumbnail, thumbnailInteractions,
  clientLogosSection, clientLogosContainer, clientLogo,
  viewport
} from "./Testimonials.animations";
import { SECTION_HEADER, TESTIMONIALS, CLIENT_LOGOS } from "./Testimonials.constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-28 px-6 bg-white">
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
            {SECTION_HEADER.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {SECTION_HEADER.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        {/* MAIN TESTIMONIAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="max-w-4xl mx-auto mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={testimonialCard}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-50 rounded-3xl p-10 relative"
            >
              <motion.div variants={quoteIcon} className="absolute top-8 left-8">
                <Quote className="w-12 h-12 text-gray-300" />
              </motion.div>
              
              <div className="relative z-10 pt-8">
                {/* Rating Stars */}
                <motion.div variants={starsContainer} className="flex gap-1 mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <motion.div key={i} variants={starItem}>
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.p variants={testimonialContent} className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{activeTestimonial.content}"
                </motion.p>

                {/* Author Section */}
                <motion.div variants={authorSection} className="flex items-center gap-4">
                  <motion.img
                    variants={avatar}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <motion.h4 variants={authorName} className="font-bold text-gray-900 text-lg">
                      {activeTestimonial.name}
                    </motion.h4>
                    <motion.p variants={authorRole} className="text-gray-600">
                      {activeTestimonial.role}
                    </motion.p>
                    <motion.p variants={authorRole} className="text-sm text-gray-500">
                      {activeTestimonial.company}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* THUMBNAIL BUTTONS */}
        <motion.div
          variants={thumbnailsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex justify-center gap-4 flex-wrap"
        >
          {TESTIMONIALS.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.button
                key={index}
                variants={thumbnail}
                whileHover={thumbnailInteractions.whileHover}
                whileTap={thumbnailInteractions.whileTap}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left hidden sm:block">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs opacity-75">{item.company}</p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* CLIENT LOGOS STRIP */}
        <motion.div
          variants={clientLogosSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Dipercaya oleh 500+ perusahaan di Indonesia
          </p>
          <motion.div
            variants={clientLogosContainer}
            className="flex justify-center items-center gap-12 flex-wrap opacity-50 grayscale"
          >
            {CLIENT_LOGOS.map((client) => (
              <motion.div key={client} variants={clientLogo} className="text-2xl font-bold text-gray-500">
                {client}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}