"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    layanan: [
      { name: "Same-Day Delivery", href: "#services" },
      { name: "Cargo Antar Kota", href: "#services" },
      { name: "Warehousing", href: "#services" },
      { name: "International Shipping", href: "#services" },
      { name: "E-Commerce Fulfillment", href: "#services" },
    ],
    perusahaan: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Keunggulan", href: "#advantages" },
      { name: "Portofolio", href: "#portfolio" },
      { name: "Testimoni", href: "#testimonials" },
      { name: "Karir", href: "#" },
    ],
    bantuan: [
      { name: "FAQ", href: "#faq" },
      { name: "Cara Tracking", href: "#" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Kebijakan Cookie", href: "#" },
    ],
  };

  // Social media icons (menggunakan react-icons/fa6)
  const socialLinks = [
    { name: "Facebook", href: "#", Icon: FaFacebookF },
    { name: "Twitter/X", href: "#", Icon: FaXTwitter },
    { name: "Instagram", href: "#", Icon: FaInstagram },
    { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
    { name: "WhatsApp", href: "#", Icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA SECTION */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Mengirim Paket Anda?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Bergabunglah dengan 500+ perusahaan yang telah mempercayakan 
              kebutuhan logistik mereka kepada SwiftCargo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Dapatkan Penawaran
              </a>
              <a
                href="#services"
                className="border-2 border-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-600 transition"
              >
                Pelajari Layanan
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-800">
              <div>
                <p className="text-4xl font-bold mb-1">99%</p>
                <p className="text-gray-400 text-sm">On-Time Delivery</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">500+</p>
                <p className="text-gray-400 text-sm">Klien Aktif</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">50+</p>
                <p className="text-gray-400 text-sm">Kota Terjangkau</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SwiftCargo</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Solusi logistik modern dengan fokus pada kecepatan, transparansi, 
              dan keamanan pengiriman untuk bisnis dan personal di seluruh Indonesia.
            </p>
            
            {/* SOCIAL MEDIA */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
                  aria-label={social.name}
                >
                  <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <a href="mailto:info@swiftcargo.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@swiftcargo.com</span>
              </a>
              <a href="tel:08001234567" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5" />
                <span className="text-sm">0800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} SwiftCargo Express. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}