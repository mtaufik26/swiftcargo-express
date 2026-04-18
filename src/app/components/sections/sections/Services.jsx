"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Clock, Truck, Package, Warehouse, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Same-Day Delivery",
    desc: "Pengiriman dalam hari yang sama dengan proses cepat dan efisien untuk kebutuhan mendesak Anda. Jaminan sampai di hari yang sama untuk area tertentu.",
    features: ["Pickup dalam 1 jam", "Delivery 4-8 jam", "Real-time tracking"],
  },
  {
    icon: Truck,
    title: "Cargo Antar Kota",
    desc: "Layanan pengiriman barang skala besar antar kota dengan sistem distribusi yang aman dan terpercaya untuk bisnis Anda.",
    features: ["Kapasitas besar", "Harga kompetitif", "Asuransi tersedia"],
  },
  {
    icon: Globe,
    title: "Real-Time Tracking",
    desc: "Pantau status pengiriman Anda secara langsung dengan sistem tracking transparan yang dapat diakses 24/7 melalui website atau aplikasi.",
    features: ["Update real-time", "Notifikasi otomatis", "Riwayat pengiriman"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    desc: "Penyimpanan barang dengan sistem modern dan keamanan tinggi untuk menjaga kualitas dan efisiensi distribusi bisnis Anda.",
    features: ["Gudang ber-AC", "Security 24/7", "Inventory management"],
  },
  {
    icon: Package,
    title: "Express Delivery",
    desc: "Layanan pengiriman kilat untuk dokumen dan paket penting dengan prioritas penanganan khusus dan jaminan keamanan maksimal.",
    features: ["Prioritas handling", "Signature required", "Insurance included"],
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    desc: "Perlindungan penuh untuk setiap pengiriman dengan opsi asuransi yang fleksibel sesuai nilai barang yang Anda kirim.",
    features: ["Coverage hingga 100%", "Klaim mudah", "Proses cepat"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            Layanan Kami
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solusi Logistik yang Fleksibel
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Setiap layanan dirancang untuk memberikan kecepatan, keamanan, 
            dan transparansi dalam proses pengiriman.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemAnim}
                layout
                className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-gray-900 bg-gray-50 shadow-lg"
                    : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-900 rounded-xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-4 border-t border-gray-200">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}