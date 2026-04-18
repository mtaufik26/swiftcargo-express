"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import {
  ctaSection, ctaTitle, ctaDescription, ctaButtons,
  statsContainer, statItem,
  mainFooter, brandSection, socialContainer, socialIcon, socialInteractions,
  contactContainer, contactItem,
  linkColumnsContainer, linkColumn, linkItem, linkHover,
  bottomBar, legalLinksContainer, legalLink,
  viewport
} from "./Footer.animations";
import { CTA_SECTION, BRAND_SECTION, FOOTER_LINKS, LEGAL_LINKS, ICON_MAP } from "./Footer.constants";

const iconMap = { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, Mail, Phone, MapPin };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA SECTION */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={ctaSection}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center"
          >
            <motion.h2 variants={ctaTitle} className="text-4xl md:text-5xl font-bold mb-6">
              {CTA_SECTION.title}
            </motion.h2>
            
            <motion.p variants={ctaDescription} className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              {CTA_SECTION.description}
            </motion.p>
            
            <motion.div variants={ctaButtons} className="flex flex-col sm:flex-row gap-4 justify-center">
              {CTA_SECTION.buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    btn.variant === "primary"
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "border-2 border-gray-700 hover:border-gray-600"
                  } px-8 py-4 rounded-xl font-semibold transition`}
                >
                  {btn.text}
                </motion.a>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={statsContainer}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-800"
            >
              {CTA_SECTION.stats.map((stat, index) => (
                <motion.div key={index} variants={statItem} className="text-center">
                  <p className="text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
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
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <motion.div variants={brandSection} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{BRAND_SECTION.name}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {BRAND_SECTION.description}
            </p>
            
            {/* SOCIAL MEDIA */}
            <motion.div variants={socialContainer} className="flex gap-3 mb-6">
              {BRAND_SECTION.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    variants={socialIcon}
                    whileHover={socialInteractions.whileHover}
                    whileTap={socialInteractions.whileTap}
                    transition={socialInteractions.transition}
                    className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={contactContainer} className="space-y-3">
              {BRAND_SECTION.contactInfo.map((contact, index) => {
                const Icon = iconMap[contact.icon];
                const Content = (
                  <>
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{contact.label}</span>
                  </>
                );
                
                return contact.href ? (
                  <motion.a
                    key={index}
                    variants={contactItem}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                  >
                    {Content}
                  </motion.a>
                ) : (
                  <motion.div key={index} variants={contactItem} className="flex items-center gap-3 text-gray-400">
                    {Content}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* LINK COLUMNS */}
          <motion.div variants={linkColumnsContainer} className="md:col-span-1 lg:col-span-3 grid md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <motion.div key={category} variants={linkColumn}>
                <h4 className="font-semibold mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <motion.li key={link.name} variants={linkItem}>
                      <motion.a
                        href={link.href}
                        variants={linkHover}
                        className="text-gray-400 hover:text-white transition text-sm"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        variants={bottomBar}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} SwiftCargo Express. All rights reserved.
            </p>
            <motion.div variants={legalLinksContainer} className="flex gap-6 text-sm text-gray-500">
              {LEGAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  variants={legalLink}
                  href={link.href}
                  whileHover={{ color: "rgba(255, 255, 255, 1)" }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-white transition"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}