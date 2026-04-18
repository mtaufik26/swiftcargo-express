"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Truck } from "lucide-react";

const portfolio = [
  {
    // ✅ Truck - Distribusi Nasional
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    title: "Distribusi Nasional",
    category: "Cargo",
    description: "Pengiriman 5000+ unit produk elektronik ke 30 kota di Indonesia dalam 7 hari",
    stats: [
      { icon: MapPin, value: "30", label: "Kota" },
      { icon: Package, value: "5000+", label: "Unit" },
      { icon: Truck, value: "7", label: "Hari" },
    ],
  },
  {
    // ✅ Warehouse interior - Same-Day Delivery (kurir ambil paket)
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    title: "Same-Day Delivery",
    category: "Express",
    description: "Layanan pengiriman dokumen penting untuk 200+ perusahaan di Jakarta",
    stats: [
      { icon: Package, value: "200+", label: "Klien" },
      { icon: Truck, value: "<4", label: "Jam" },
      { icon: MapPin, value: "JKT", label: "Area" },
    ],
  },
  {
    // ✅ Warehouse storage - Warehousing Solution
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    title: "Warehousing Solution",
    category: "Storage",
    description: "Penyimpanan dan distribusi produk FMCG untuk retailer nasional",
    stats: [
      { icon: MapPin, value: "5000", label: "m²" },
      { icon: Package, value: "50K+", label: "SKU" },
      { icon: Truck, value: "24/7", label: "Operasi" },
    ],
  },
  {
    // ❌ GANTI INI - Cold Chain Logistics (harus cold storage/refrigerated)
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=600&fit=crop",
    title: "Cold Chain Logistics",
    category: "Specialized",
    description: "Pengiriman produk farmasi dan makanan beku dengan temperatur terkontrol",
    stats: [
      { icon: MapPin, value: "15", label: "Kota" },
      { icon: Package, value: "1000+", label: "Shipment" },
      { icon: Truck, value: "-20°C", label: "Suhu" },
    ],
  },
  {
    // ✅ E-Commerce Fulfillment (packing/fulfillment center)
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop",
    title: "E-Commerce Fulfillment",
    category: "Fulfillment",
    description: "Handling dan pengiriman order untuk marketplace dan online shop",
    stats: [
      { icon: Package, value: "10K+", label: "Order/Hari" },
      { icon: Truck, value: "99%", label: "Success" },
      { icon: MapPin, value: "Nasional", label: "Coverage" },
    ],
  },
  {
    // ❌ GANTI INI - International Shipping (harus kapal kargo/pelabuhan)
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
    title: "International Shipping",
    category: "International",
    description: "Pengiriman cargo internasional ke Asia, Eropa, dan Amerika",
    stats: [
      { icon: MapPin, value: "25+", label: "Negara" },
      { icon: Package, value: "500+", label: "Container" },
      { icon: Truck, value: "Sea/Air", label: "Mode" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            Portofolio
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyek yang Telah Kami Selesaikan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Track record kami dalam memberikan solusi logistik terbaik untuk berbagai industri
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}