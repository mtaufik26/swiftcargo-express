"use client";

import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { BRAND_FOOTER, FOOTER_COLUMNS } from "./Footer.constants";

const iconMap = {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        
        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* BRAND COLUMN (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  {BRAND_FOOTER.name}
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  {BRAND_FOOTER.tag}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              {BRAND_FOOTER.description}
            </p>

            <div className="flex items-center gap-2.5">
              {BRAND_FOOTER.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Visit SwiftCargo on ${social.name}`}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* LINK COLUMNS (7 COLS) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_COLUMNS).map(([columnName, links]) => (
              <div key={columnName}>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-4">
                  {columnName}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-150 block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} SwiftCargo Express, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}