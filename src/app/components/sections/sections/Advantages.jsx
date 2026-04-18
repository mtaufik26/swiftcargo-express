"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, DollarSign, Eye, Award, Headphones, Lock } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Cepat & Tepat Waktu",
    desc: "Proses pengiriman cepat dengan sistem yang sudah teroptimasi untuk memastikan paket sampai tepat waktu. 99% pengiriman on-time.",
    stat: "99%",
    statLabel: "On-Time Delivery",
  },
  {
    icon: DollarSign,
    title: "Harga Kompetitif",
    desc: "Biaya pengiriman yang terjangkau tanpa mengurangi kualitas layanan dan keamanan barang. Dapatkan diskon untuk pengiriman rutin.",
    stat: "30%",
    statLabel: "Lebih Hemat",
  },
  {
    icon: Eye,
    title: "Tracking Transparan",
    desc: "Pantau pengiriman Anda secara real-time dengan sistem yang akurat dan mudah diakses melalui website atau mobile app.",
    stat: "24/7",
    statLabel: "Real-time Tracking",
  },
  {
    icon: Award,
    title: "Profesional & Berpengalaman",
    desc: "Tim yang sudah berpengalaman lebih dari 10 tahun di bidang logistik dengan sertifikasi dan standar internasional.",
    stat: "10+",
    statLabel: "Tahun Pengalaman",
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    desc: "Tim customer service siap membantu Anda kapan saja untuk menjawab pertanyaan dan menyelesaikan masalah pengiriman.",
    stat: "<5",
    statLabel: "Menit Response Time",
  },
  {
    icon: Lock,
    title: "Keamanan Terjamin",
    desc: "Setiap pengiriman diasuransikan dan ditangani dengan prosedur keamanan ketat untuk memastikan barang sampai dengan selamat.",
    stat: "100%",
    statLabel: "Insured",
  },
];

export default function Advantages() {
  const [active, setActive] = useState(0);

  return (
    <section id="advantages" className="py-28 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wide uppercase">
            Keunggulan
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Kenapa Memilih SwiftCargo?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan layanan terbaik dengan standar internasional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gray-900 rounded-2xl">
                    {(() => {
                      const Icon = advantages[active].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {advantages[active].title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {advantages[active].desc}
                </p>

                <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-4xl font-bold text-gray-900">
                      {advantages[active].stat}
                    </p>
                    <p className="text-sm text-gray-600">
                      {advantages[active].statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT - SELECTORS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {advantages.map((item, index) => {
              const isActive = active === index;
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white text-gray-900 shadow-xl"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  <div className={`p-3 rounded-xl inline-block mb-3 ${
                    isActive ? "bg-gray-900" : "bg-gray-700"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className={`text-sm ${
                    isActive ? "text-gray-600" : "text-gray-400"
                  }`}>
                    {item.stat} {item.statLabel}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}