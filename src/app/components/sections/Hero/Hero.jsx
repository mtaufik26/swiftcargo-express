"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Truck, 
  Clock, Star, Lock 
} from "lucide-react";
import { HERO_CONTENT, ACTIVE_CONSIGNMENT, HERO_METRICS, HERO_IMAGE } from "./Hero.constants";
import { 
  heroContainer, badge, headline, description, 
  ctas, proofPills, visualColumn, metricsRibbon, metricItem 
} from "./Hero.animations";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section 
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={heroContainer}
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 bg-slate-50/60 border-b border-slate-200/80 bg-grid-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TOP EDITORIAL GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 md:mb-20">
          
          {/* LEFT: EDITORIAL COPY & CONVICTION (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* NETWORK STATUS BADGE */}
            <motion.div 
              variants={badge}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 shadow-2xs mb-6 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{HERO_CONTENT.badge}</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-600 font-bold">{HERO_CONTENT.badgeSla}</span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1 
              variants={headline}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] mb-6 tracking-tight"
            >
              {HERO_CONTENT.headline}
              <br />
              <span className="text-blue-600">
                {HERO_CONTENT.subheadline}
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p 
              variants={description}
              className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-normal"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* CTAS */}
            <motion.div 
              variants={ctas}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-8"
            >
              <a
                href={HERO_CONTENT.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={HERO_CONTENT.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-slate-950 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-2xs transition-all duration-200 cursor-pointer"
              >
                <span>{HERO_CONTENT.secondaryCta.text}</span>
              </a>
            </motion.div>

            {/* TRUST PROOF PILLS */}
            <motion.div 
              variants={proofPills}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium pt-4 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">4.9/5 Partner Rating</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero Hidden Fees</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>All-Risk Marine Coverage</span>
              </span>
            </motion.div>

          </div>

          {/* RIGHT: BESPOKE FREIGHT OPERATIONS ARTIFACT (5 COLS) */}
          <motion.div 
            variants={visualColumn}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">
              
              {/* TOP CONSIGNMENT MANIFEST HEADER */}
              <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-blue-400 text-[10px] font-mono font-bold tracking-wider">
                      {ACTIVE_CONSIGNMENT.manifestId}
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      Live Manifest
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {ACTIVE_CONSIGNMENT.status}
                  </span>
                </div>

                {/* ROUTE CORRIDOR DISPLAY */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Origin</span>
                    <strong className="text-white font-bold">{ACTIVE_CONSIGNMENT.originName}</strong>
                  </div>
                  <div className="flex-1 px-4 flex flex-col items-center">
                    <div className="w-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <div className="flex-1 h-0.5 bg-slate-700 relative overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-400 rounded-full" 
                          initial={{ width: "0%" }}
                          animate={isMounted ? { width: `${ACTIVE_CONSIGNMENT.progressPercent}%` } : { width: "0%" }}
                          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        />
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono mt-1">74% of Route</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-medium">Destination</span>
                    <strong className="text-white font-bold">{ACTIVE_CONSIGNMENT.destName}</strong>
                  </div>
                </div>
              </div>

              {/* CENTER FLEET PHOTOGRAPHY */}
              <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
                <img
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY PERFORMANCE BADGE (TOP-RIGHT) */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900">99.4% SLA Guaranteed</span>
                </div>
              </div>

              {/* BOTTOM TELEMATICS & CARGO DETAILS */}
              <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-0.5">
                      <Truck className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Assigned Fleet</span>
                    </div>
                    <p className="font-bold text-slate-900">{ACTIVE_CONSIGNMENT.unitName}</p>
                    <p className="text-[10px] text-slate-500">{ACTIVE_CONSIGNMENT.fleetType}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-slate-500 mb-0.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Cargo Security</span>
                    </div>
                    <p className="font-bold text-slate-900">Tamper-Proof RFID</p>
                    <p className="text-[10px] text-slate-500">Seal Active • Verified</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Est. Delivery: <strong className="text-slate-900">{ACTIVE_CONSIGNMENT.etaTime}</strong></span>
                  </span>
                  <span className="text-blue-600 font-semibold">Priority Freight</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* DOCKED METRICS RIBBON (UNIFIED ARCHITECTURAL BAR) */}
        <motion.div 
          variants={metricsRibbon}
          className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 p-2 sm:p-3">
            {HERO_METRICS.map((metric, idx) => (
              <motion.div 
                key={idx} 
                variants={metricItem}
                className="p-4 sm:p-6 text-center sm:text-left"
              >
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight block mb-1">
                  {metric.value}
                </span>
                <h4 className="font-bold text-slate-800 text-sm">
                  {metric.label}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">
                  {metric.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}