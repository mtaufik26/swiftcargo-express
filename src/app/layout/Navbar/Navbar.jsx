"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, NAV_BRAND } from "./Navbar.constants";
import { useScrollSpy } from "@/lib/hooks";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS, 120);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -32 }}
      animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <nav
          aria-label="Main Navigation"
          className={`flex justify-between items-center transition-all duration-300 rounded-2xl px-5 sm:px-6 py-3 border ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-md shadow-slate-900/5"
              : "bg-white/90 backdrop-blur-sm border-slate-200/70 shadow-xs"
          }`}
        >
          {/* BRAND LOGO */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
          >
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-xs group-hover:bg-blue-600 transition-colors">
              <span className="tracking-tighter">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg group-hover:text-blue-600 transition-colors leading-none">
                {NAV_BRAND.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-tight mt-0.5">
                {NAV_BRAND.tag}
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-bold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* RIGHT ACTION CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <span>{NAV_BRAND.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 text-slate-800 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl p-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-xl text-sm font-bold shadow-sm transition-colors"
                >
                  <span>{NAV_BRAND.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}