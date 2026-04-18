"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import {
  header, infoColumn, formColumn, infoItemsContainer,
  infoItem, iconContainer, mapContainer, form,
  formFieldsContainer, formField, inputFocus,
  submitButton, spinner, successState, successIcon,
  viewport
} from "./Contact.animations";
import { SECTION_HEADER, CONTACT_INFO, FORM_FIELDS, ICON_MAP, MAP_EMBED } from "./Contact.constants";

const iconMap = { MapPin, Phone, Mail, Clock };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT - CONTACT INFO */}
          <motion.div
            variants={infoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-6"
          >
            <motion.div
              variants={infoItemsContainer}
              className="space-y-4"
            >
              {CONTACT_INFO.map((info, index) => {
                const Icon = iconMap[info.icon];
                return (
                  <motion.div
                    key={index}
                    variants={infoItem}
                    className="flex gap-4 p-6 bg-gray-50 rounded-2xl"
                  >
                    <motion.div 
                      variants={iconContainer}
                      className="p-3 bg-gray-900 rounded-xl h-fit"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* MAP */}
            <motion.div
              variants={mapContainer}
              className="rounded-2xl overflow-hidden h-64 bg-gray-200"
            >
              <iframe
                src={MAP_EMBED.src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_EMBED.title}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT - CONTACT FORM */}
          <motion.div
            variants={formColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-gray-50 p-8 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  variants={successState}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div 
                    variants={successIcon}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={form}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div variants={formFieldsContainer} className="grid md:grid-cols-2 gap-6">
                    {FORM_FIELDS.slice(0, 4).map((field) => (
                      <motion.div key={field.name} variants={formField} className={field.grid}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-600 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                          >
                            {field.options.map((opt) => (
                              <option key={opt.value} value={opt.value} disabled={!opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <motion.input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            variants={inputFocus}
                            whileFocus="whileFocus"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-600 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                            placeholder={field.placeholder}
                          />
                        )}
                      </motion.div>
                    ))}
                    
                    {/* Message textarea (full width) */}
                    <motion.div variants={formField} className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {FORM_FIELDS[4].label}
                      </label>
                      <motion.textarea
                        name={FORM_FIELDS[4].name}
                        value={formData.message}
                        onChange={handleChange}
                        required={FORM_FIELDS[4].required}
                        rows={FORM_FIELDS[4].rows}
                        variants={inputFocus}
                        whileFocus="whileFocus"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-600 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                        placeholder={FORM_FIELDS[4].placeholder}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    variants={submitButton}
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            variants={spinner}
                            animate="animate"
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Mengirim...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Kirim Pesan
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}