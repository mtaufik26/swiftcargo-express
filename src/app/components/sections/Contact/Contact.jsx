"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import {
  header, infoColumn, formColumn, infoItemsContainer,
  infoItem, iconContainer, mapContainer, form,
  formFieldsContainer, formField, inputFocus,
  submitButton, spinner, successState, successIcon,
  viewport
} from "./Contact.animations";
import { SECTION_HEADER, CONTACT_INFO, FORM_FIELDS, MAP_EMBED } from "./Contact.constants";

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
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl opacity-50" />
      </div>

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
            <p className="text-sm font-bold text-blue-700 tracking-[0.2em] uppercase">
              {SECTION_HEADER.label}
            </p>
            <div className="h-[2px] w-8 bg-blue-700" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight">
            {SECTION_HEADER.title}
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            {SECTION_HEADER.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT - CONTACT INFO */}
          <motion.div
            variants={infoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-8 md:space-y-10"
          >
            <motion.div
              variants={infoItemsContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {CONTACT_INFO.map((info, index) => {
                const Icon = iconMap[info.icon];
                return (
                  <motion.div
                    key={index}
                    variants={infoItem}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 bg-slate-50 rounded-[1.5rem] sm:rounded-[2rem] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 group"
                  >
                    <div className="p-4 bg-primary rounded-2xl h-fit shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-primary text-lg sm:text-xl mb-2 tracking-tight group-hover:text-blue-700 transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* MAP */}
            <motion.div
              variants={mapContainer}
              className="rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden h-[280px] sm:h-[300px] md:h-[350px] bg-slate-100 shadow-xl border-4 sm:border-8 border-white group relative"
            >
              <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <iframe
                src={MAP_EMBED.src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_EMBED.title}
                className="relative z-0"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT - CONTACT FORM */}
          <motion.div
            variants={formColumn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent" />
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  variants={successState}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="h-full flex flex-col items-center justify-center text-center py-16 md:py-20"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 shadow-inner shadow-green-100">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary mb-4 tracking-tight">
                    Pesan Terkirim!
                  </h3>
                  
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
                    Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda dalam waktu kurang dari 24 jam.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={form}
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8 relative z-10"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Konsultasi Gratis</h3>
                    <p className="text-slate-400 font-medium text-sm md:text-base">
                      Isi formulir di bawah ini untuk memulai pengiriman Anda hari ini.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {FORM_FIELDS.slice(0, 4).map((field) => (
                      <div key={field.name} className={field.grid}>
                        <label className="block text-[11px] font-bold text-primary/70 mb-3 ml-1 uppercase tracking-widest">
                          {field.label}
                        </label>
                        
                        {field.type === "select" ? (
                          <div className="relative group">
                            <select
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              required={field.required}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none appearance-none text-primary font-medium"
                            >
                              {field.options.map((opt) => (
                                <option key={opt.value} value={opt.value} disabled={!opt.value}>
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            </div>
                          </div>
                        ) : (
                          <motion.input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            required={field.required}
                            variants={inputFocus}
                            whileFocus="whileFocus"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-primary font-medium placeholder:text-slate-300"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                    
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-bold text-primary/70 mb-3 ml-1 uppercase tracking-widest">
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
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none text-primary font-medium placeholder:text-slate-300"
                        placeholder={FORM_FIELDS[4].placeholder}
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    variants={submitButton}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-4 md:py-5 rounded-[1.5rem] font-bold text-lg hover:bg-primary-light transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            variants={spinner}
                            animate="animate"
                            className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                          />
                          Mengirim...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-center gap-3"
                        >
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Kirim Pesan Sekarang
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