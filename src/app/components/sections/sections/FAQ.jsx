"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa biaya pengiriman untuk paket 5kg dari Jakarta ke Bandung?",
    answer: "Biaya pengiriman untuk paket 5kg dari Jakarta ke Bandung mulai dari Rp 35.000 untuk reguler (2-3 hari) dan Rp 55.000 untuk same-day delivery. Harga dapat bervariasi tergantung dimensi paket dan layanan tambahan yang dipilih.",
  },
  {
    question: "Apakah ada asuransi untuk barang yang dikirim?",
    answer: "Ya, kami menyediakan asuransi pengiriman dengan coverage hingga 100% nilai barang. Premi asuransi mulai dari 0.5% dari nilai barang. Untuk barang berharga tinggi, kami sangat menyarankan menggunakan asuransi.",
  },
  {
    question: "Bagaimana cara melacak pengiriman saya?",
    answer: "Anda dapat melacak pengiriman melalui website kami dengan memasukkan nomor resi, atau melalui aplikasi mobile SwiftCargo. Sistem tracking kami update secara real-time dan Anda akan mendapat notifikasi otomatis via SMS/email di setiap tahap pengiriman.",
  },
  {
    question: "Berapa lama waktu pengiriman untuk luar Jawa?",
    answer: "Waktu pengiriman untuk luar Jawa bervariasi: Sumatera 3-5 hari, Kalimantan 4-6 hari, Sulawesi 5-7 hari, Bali & Nusa Tenggara 4-6 hari, Papua & Maluku 7-10 hari. Kami juga menyediakan layanan express yang lebih cepat.",
  },
  {
    question: "Apakah SwiftCargo menerima pengiriman internasional?",
    answer: "Ya, kami melayani pengiriman internasional ke lebih dari 25 negara di Asia, Eropa, dan Amerika. Untuk pengiriman internasional, silakan hubungi tim kami untuk informasi detail mengenai dokumen yang diperlukan dan estimasi biaya.",
  },
  {
    question: "Bagaimana prosedur jika barang rusak atau hilang?",
    answer: "Jika barang rusak atau hilang, Anda dapat mengajukan klaim dalam waktu 7 hari setelah pengiriman. Proses klaim dapat dilakukan online dengan melampirkan foto barang dan dokumen pengiriman. Klaim akan diproses dalam 3-5 hari kerja.",
  },
  {
    question: "Apakah ada layanan pickup ke rumah/kantor?",
    answer: "Ya, kami menyediakan layanan pickup gratis untuk area Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Untuk area lain, biaya pickup mulai dari Rp 15.000. Anda dapat menjadwalkan pickup melalui website atau aplikasi kami.",
  },
  {
    question: "Barang apa saja yang tidak boleh dikirim?",
    answer: "Barang yang tidak boleh dikirim meliputi: barang ilegal, narkotika, senjata tajam/api, bahan mudah terbakar/peledak, hewan hidup (kecuali dengan izin khusus), uang tunai, dan barang berharga tanpa asuransi. Daftar lengkap tersedia di halaman Terms & Conditions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-28 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CONTACT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-gray-900 rounded-2xl text-white"
        >
          <p className="text-lg mb-4">Masih ada pertanyaan?</p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}