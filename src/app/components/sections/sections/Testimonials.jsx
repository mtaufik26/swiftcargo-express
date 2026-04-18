"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, TechStore Indonesia",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    content: "SwiftCargo sangat membantu bisnis e-commerce kami. Pengiriman cepat, tracking real-time, dan customer service yang responsif. Sangat direkomendasikan!",
    company: "TechStore Indonesia",
  },
  {
    name: "Siti Nurhaliza",
    role: "Operations Manager, FreshMart",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    content: "Cold chain logistics mereka sangat profesional. Produk makanan beku kami selalu sampai dalam kondisi sempurna. Partnership yang sangat berharga.",
    company: "FreshMart",
  },
  {
    name: "Ahmad Wijaya",
    role: "Founder, FashionHub",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    content: "Dari 5 vendor logistik yang kami coba, SwiftCargo yang paling reliable. On-time delivery rate mereka benar-benar 99% seperti yang dijanjikan.",
    company: "FashionHub",
  },
  {
    name: "Dewi Lestari",
    role: "Supply Chain Director, PharmaCare",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    content: "Untuk pengiriman obat-obatan yang memerlukan penanganan khusus, SwiftCargo sangat trustworthy. Sistem tracking dan dokumentasi sangat lengkap.",
    company: "PharmaCare",
  },
  {
    name: "Rudi Hartono",
    role: "Owner, ElektroMart",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    content: "Harga kompetitif dengan kualitas layanan premium. Warehousing mereka juga sangat aman dan terorganisir. Hemat biaya logistik kami sampai 30%.",
    company: "ElektroMart",
  },
  {
    name: "Maya Kusuma",
    role: "E-Commerce Manager, BeautyBox",
    image: "https://i.pravatar.cc/150?img=10",
    rating: 5,
    content: "Same-day delivery mereka benar-benar same-day! Pelanggan kami sangat puas dengan kecepatan pengiriman. Repeat order meningkat 40%.",
    company: "BeautyBox",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            Testimoni
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kepercayaan klien adalah prioritas utama kami
          </p>
        </motion.div>

        {/* MAIN TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-3xl p-10 relative"
            >
              <Quote className="w-12 h-12 text-gray-300 absolute top-8 left-8" />
              
              <div className="relative z-10 pt-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* THUMBNAILS */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeIndex === index
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs opacity-75">{item.company}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CLIENTS LOGO STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Dipercaya oleh 500+ perusahaan di Indonesia
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50 grayscale">
            {["TechStore", "FreshMart", "FashionHub", "PharmaCare", "ElektroMart", "BeautyBox"].map((client) => (
              <div key={client} className="text-2xl font-bold text-gray-500">
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}