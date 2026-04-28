"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "./Navbar.constants";
import { useScrollSpy } from "@/lib/hooks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_LINKS.map(link => link.href.slice(1));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "py-2 sm:py-3" : "py-2 sm:py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-8">
        <div
          className={`flex flex-wrap md:flex-nowrap justify-between items-center backdrop-blur-2xl border transition-all duration-700 ease-in-out rounded-2xl sm:rounded-[1rem] px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl ${
            scrolled
              ? "bg-white/80 border-slate-100 shadow-primary/5"
              : "bg-white/40 border-white/30 shadow-transparent"
          }`}
        >
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-primary rounded-lg md:rounded-xl flex items-center justify-center text-white font-black text-base sm:text-lg md:text-xl shadow-lg"
            >
              S
            </motion.div>
            <span className="font-bold text-primary tracking-tighter text-base sm:text-lg md:text-xl lg:text-2xl group-hover:text-blue-700 transition-colors">
              SwiftCargo
            </span>
          </a>

          {/* NAV LINKS (FIX UTAMA DI SINI) */}
          <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-8 text-sm font-bold text-slate-500">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all hover:text-primary relative py-2 whitespace-nowrap ${
                  activeSection === link.href.slice(1) ? "text-primary" : ""
                }`}
              >
                {link.name}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-700 rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA + MOBILE BUTTON */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* CTA (FIX: tampil dari md, bukan lg) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-primary text-white px-5 md:px-6 lg:px-7 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold shadow-lg md:shadow-xl shadow-primary/10 hover:shadow-primary/20 items-center gap-2 transition-all whitespace-nowrap"
            >
              Kirim Sekarang
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 overflow-hidden mx-3 mt-2 rounded-2xl shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 8 }}
                  className={`block py-3 px-5 rounded-lg font-bold transition-all ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex bg-primary text-white text-center py-4 px-6 rounded-xl text-sm font-black shadow-lg shadow-primary/10 items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  Kirim Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}