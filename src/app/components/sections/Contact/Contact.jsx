"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Phone, Mail, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { CONTACT_HEADER, CONTACT_HUBS, SERVICE_OPTIONS } from "./Contact.constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "overland",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple UX delay for polished feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "overland",
        message: "",
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 mb-4 w-fit">
            <span>{CONTACT_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {CONTACT_HEADER.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {CONTACT_HEADER.description}
          </p>
        </motion.div>

        {/* 2-COLUMN SPLIT */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: DIRECT CONTACT & HUB LOCATIONS (5 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* DIRECT ASSISTANCE CARD */}
            <div className="bg-slate-900 text-white rounded-3xl p-7 shadow-xl shadow-slate-900/5">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                Commercial Dispatch Desk
              </span>
              <h3 className="text-2xl font-black mb-1">
                +1 (800) 555-0199
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-6">
                Toll-free client coordination line • Monday to Friday, 7am - 8pm CST
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>dispatch@swiftcargo.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompt response within 1 business day guaranteed</span>
                </div>
              </div>
            </div>

            {/* HUBS DIRECTORY */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
                Primary Operational Centers:
              </span>

              {CONTACT_HUBS.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <h4 className="font-bold text-slate-900 text-sm">
                      {hub.city}
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-slate-700">{hub.facility}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{hub.address}</p>
                  
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-800">{hub.phone}</span>
                    <span className="text-blue-600 font-medium">{hub.email}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT: CLEAN QUOTE FORM (7 COLS) */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 p-7 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out. A SwiftCargo logistics specialist will review your freight requirements and follow up with a proposal shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Freight Rate & Information Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tell us about your cargo requirements to receive an upfront rate estimate.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Miller Manufacturing Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jmiller@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Freight Mode Needed *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Shipment Details (Origin, Destination, Estimated Weight, Frequency)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include origin city, destination, cargo type, and any temperature or handling requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Submit Rate Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                      Your business data is kept confidential and will only be used to generate your proposal.
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}