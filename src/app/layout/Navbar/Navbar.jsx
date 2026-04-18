"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./Navbar.constants";
import { useScrollSpy } from "@/lib/hooks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_LINKS.map(link => link.href.slice(1));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`flex justify-between items-center backdrop-blur-md border rounded-xl px-4 md:px-6 py-3 shadow-sm transition-all ${
          scrolled ? "bg-white/90 border-gray-200" : "bg-white/90 border-gray-200"
        }`}>
          <a href="" className="font-semibold text-gray-900 tracking-wide text-lg">SwiftCargo</a>
          
          <div className="hidden lg:flex gap-6 text-sm text-gray-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition hover:text-gray-900 py-2 ${
                  activeSection === link.href.slice(1) ? "text-gray-900 font-medium" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:block bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800 transition font-medium min-h-[44px]">
            Kirim Sekarang
          </a>

          <button className="lg:hidden p-2 min-h-[44px]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gray-900 text-white text-center py-3 px-4 rounded-lg text-sm hover:bg-gray-800 transition font-medium mt-4 min-h-[44px]"
              >
                Kirim Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}