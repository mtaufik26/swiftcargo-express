"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, MapPin } from "lucide-react";
import { 
  container, imageColumn, contentColumn, 
  label, headline, description, featureItem, clientStats, badge, viewport 
} from "./About.animations";
import { 
  SECTION_LABEL, HEADLINE, FEATURES, IMAGES, EXPERIENCE_BADGE, CLIENT_STATS 
} from "./About.constants";

const iconMap = { CheckCircle, Shield, Clock, MapPin };

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - IMAGES */}
          <motion.div 
            variants={imageColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* First column images */}
              <div className="space-y-3 md:space-y-4">
                {IMAGES.filter(img => img.order === "first" || img.order === "second").map((img, i) => (
                  <img 
                    key={i} 
                    src={img.src} 
                    alt={img.alt} 
                    className={`rounded-xl md:rounded-2xl shadow-lg w-full ${img.height} object-cover`} 
                    loading="lazy" 
                  />
                ))}
              </div>
              
              {/* Second column images */}
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                {IMAGES.filter(img => img.order === "third" || img.order === "fourth").map((img, i) => (
                  <img 
                    key={i + 2} 
                    src={img.src} 
                    alt={img.alt} 
                    className={`rounded-xl md:rounded-2xl shadow-lg w-full ${img.height} object-cover`} 
                    loading="lazy" 
                  />
                ))}
              </div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              variants={badge}
              className="mt-4 lg:absolute lg:-bottom-6 lg:-right-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 w-full md:w-auto text-center lg:text-left"
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{EXPERIENCE_BADGE.value}</p>
              <p className="text-sm md:text-base text-gray-600">{EXPERIENCE_BADGE.label}</p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - CONTENT */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Section Label */}
            <motion.p variants={label} className="text-sm font-semibold text-gray-500 mb-3 md:mb-4 tracking-wide uppercase">
              {SECTION_LABEL}
            </motion.p>
            
            {/* Headline */}
            <motion.h2 variants={headline} className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {HEADLINE.main}
            </motion.h2>
            
            {/* Description */}
            <motion.p variants={description} className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              {HEADLINE.description}
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {FEATURES.map((f, i) => {
                const Icon = iconMap[f.icon];
                return (
                  <motion.div key={i} variants={featureItem} className="flex items-start gap-3">
                    <div className="p-2 bg-gray-900 rounded-lg">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">{f.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Client Stats Card */}
            <motion.div variants={clientStats} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl border border-gray-200">
              <div className="flex -space-x-2 md:-space-x-3">
                {CLIENT_STATS.avatars.map((avatarId, i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?img=${avatarId}`} 
                    alt="" 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" 
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">{CLIENT_STATS.count} {CLIENT_STATS.label}</p>
                <p className="text-xs md:text-sm text-gray-600">{CLIENT_STATS.sublabel}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}