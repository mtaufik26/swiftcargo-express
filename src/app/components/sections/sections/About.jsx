"use client";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Clock, MapPin } from "lucide-react";

export default function About() {
  const features = [
    { icon: Clock, title: "Pengiriman Cepat", desc: "Tepat waktu dan efisien" },
    { icon: Shield, title: "Keamanan Terjamin", desc: "Asuransi untuk setiap pengiriman" },
    { icon: MapPin, title: "Jangkauan Luas", desc: "50+ kota di Indonesia" },
    { icon: CheckCircle, title: "Tracking Real-time", desc: "Pantau pengiriman 24/7" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                {/* Gudang/Warehouse */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Warehouse" className="rounded-xl md:rounded-2xl shadow-lg w-full h-40 md:h-64 object-cover" loading="lazy" />
                {/* Truck Delivery */}
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop" alt="Delivery" className="rounded-xl md:rounded-2xl shadow-lg w-full h-32 md:h-48 object-cover" loading="lazy" />
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                {/* Team/Office */}
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team" className="rounded-xl md:rounded-2xl shadow-lg w-full h-32 md:h-48 object-cover" loading="lazy" />
                {/* Container/Cargo Port */}
                <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop" alt="Logistics" className="rounded-xl md:rounded-2xl shadow-lg w-full h-40 md:h-64 object-cover" loading="lazy" />
              </div>
            </div>
            <div className="mt-4 lg:absolute lg:-bottom-6 lg:-right-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 w-full md:w-auto text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">10+</p>
              <p className="text-sm md:text-base text-gray-600">Tahun Pengalaman</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-sm font-semibold text-gray-500 mb-3 md:mb-4 tracking-wide uppercase">Tentang Kami</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Solusi Logistik Modern untuk Kebutuhan Pengiriman Anda</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">SwiftCargo Express adalah perusahaan logistik terpercaya yang menyediakan layanan pengiriman cepat, aman, dan profesional untuk kebutuhan bisnis maupun personal di seluruh Indonesia.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-gray-900 rounded-lg"><f.icon className="w-4 h-4 md:w-5 md:h-5 text-white" /></div>
                  <div><h3 className="font-semibold text-gray-900 text-sm md:text-base">{f.title}</h3><p className="text-xs md:text-sm text-gray-600">{f.desc}</p></div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl border border-gray-200">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />)}
              </div>
              <div><p className="font-semibold text-gray-900 text-sm md:text-base">500+ Klien Puas</p><p className="text-xs md:text-sm text-gray-600">Bergabung dengan kami</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}