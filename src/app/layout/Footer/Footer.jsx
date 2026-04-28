"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import {
  ctaSection, ctaTitle, ctaDescription, ctaButtons,
  statsContainer, statItem,
  mainFooter, brandSection, socialContainer, socialIcon,
  contactContainer, contactItem,
  linkColumnsContainer, linkColumn, linkItem,
  bottomBar, legalLinksContainer, legalLink,
  viewport
} from "./Footer.animations";
import { CTA_SECTION, BRAND_SECTION, FOOTER_LINKS, LEGAL_LINKS } from "./Footer.constants";

const iconMap = {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  Mail,
  Phone,
  MapPin
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white overflow-hidden">
      
      {/* CTA SECTION */}
      <div className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 relative z-10">
          <motion.div
            variants={ctaSection}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center"
          >
            <motion.h2 variants={ctaTitle} className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 tracking-tight">
              {CTA_SECTION.title}
            </motion.h2>

            <motion.p variants={ctaDescription} className="text-blue-100/60 max-w-2xl mx-auto mb-10 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              {CTA_SECTION.description}
            </motion.p>

            <motion.div variants={ctaButtons} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {CTA_SECTION.buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.href}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`${
                    btn.variant === "primary"
                      ? "bg-white text-primary hover:bg-slate-100 shadow-xl shadow-black/20"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  } px-10 py-4 md:py-5 rounded-2xl font-bold transition-all flex items-center gap-2 group`}
                >
                  {btn.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={statsContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto mt-20 pt-20 border-t border-white/5"
            >
              {CTA_SECTION.stats.map((stat, index) => (
                <motion.div key={index} variants={statItem} className="text-center group">
                  <p className="text-5xl md:text-6xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-blue-200/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <motion.div
        variants={mainFooter}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-16">

          {/* BRAND */}
          <motion.div variants={brandSection} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-black text-2xl shadow-xl">
                S
              </div>
              <h3 className="text-2xl font-black tracking-tighter">
                {BRAND_SECTION.name}
              </h3>
            </div>

            <p className="text-blue-100/60 mb-8 leading-relaxed max-w-sm text-lg font-medium">
              {BRAND_SECTION.description}
            </p>

            {/* SOCIAL */}
            <motion.div variants={socialContainer} className="flex gap-4 mb-10">
              {BRAND_SECTION.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    variants={socialIcon}
                    whileHover={{ y: -5, backgroundColor: "#fff", color: "#0f172a", scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/5 rounded-xl transition-all border border-white/5"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CONTACT */}
            <motion.div variants={contactContainer} className="space-y-4">
              {BRAND_SECTION.contactInfo.map((contact, index) => {
                const Icon = iconMap[contact.icon];
                if (!Icon) return null;

                return (
                  <motion.div key={index} variants={contactItem} className="flex items-start gap-4 text-blue-100/50 group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors border border-white/5">
                      <Icon className="w-4 h-4" />
                    </div>

                    {contact.href ? (
                      <a href={contact.href} className="text-sm md:text-base hover:text-white transition-colors pt-1 font-medium">
                        {contact.label}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base pt-1 font-medium">
                        {contact.label}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* LINKS */}
          <motion.div variants={linkColumnsContainer} className="md:col-span-1 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <motion.div key={category} variants={linkColumn}>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-200/30 mb-8">
                  {category}
                </h4>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <motion.li key={link.name} variants={linkItem}>
                      <a
                        href={link.href}
                        className="text-blue-100/50 hover:text-white transition-all text-base font-bold flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150" />
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        variants={bottomBar}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-blue-200/20 text-sm font-bold">
            © {currentYear} SwiftCargo Express. All rights reserved.
          </p>

          <motion.div variants={legalLinksContainer} className="flex gap-8 text-sm text-blue-200/20 font-bold">
            {LEGAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                variants={legalLink}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </footer>
  );
}