"use client";

import { motion } from "framer-motion";
import { Truck, Package, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28 px-4 md:px-6 mt-12 md:mt-14 lg:mt-10 overflow-hidden">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
          alt="Logistics warehouse"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 mb-8 bg-white/80 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          SwiftCargo Express - Logistik Terpercaya
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
        >
          Pengiriman Cepat & Aman
          <br />
          <span className="text-gray-600">untuk Bisnis dan Personal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed"
        >
          Layanan logistik modern dengan pengiriman cepat, harga kompetitif,
          dan sistem tracking transparan untuk semua kebutuhan Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-800 transition text-center"
          >
            Kirim Sekarang
          </a>
          <a
            href="#services"
            className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition text-center"
          >
            Pelajari Layanan
          </a>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl"
        >
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-600">Layanan Nonstop</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1000+</p>
              <p className="text-sm text-gray-600">Pengiriman/Hari</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Truck className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600">Kota Terjangkau</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}