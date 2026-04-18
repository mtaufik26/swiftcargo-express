export const SECTION_HEADER = {
  label: "Kontak",
  title: "Hubungi Kami",
  description: "Tim kami siap membantu Anda. Silakan hubungi kami untuk informasi lebih lanjut.",
};

export const CONTACT_INFO = [
  {
    icon: "MapPin",
    title: "Alamat Kantor",
    details: ["Jl. Logistik Raya No. 123", "Jakarta Selatan, 12190", "Indonesia"],
  },
  {
    icon: "Phone",
    title: "Telepon",
    details: ["Customer Service: 0800-123-4567", "WhatsApp: +62 812-3456-7890"],
  },
  {
    icon: "Mail",
    title: "Email",
    details: ["info@swiftcargo.com", "support@swiftcargo.com"],
  },
  {
    icon: "Clock",
    title: "Jam Operasional",
    details: ["Senin - Sabtu: 08.00 - 20.00", "Minggu: 09.00 - 17.00"],
  },
];

export const FORM_FIELDS = [
  { 
    name: "name", 
    label: "Nama Lengkap *", 
    type: "text", 
    placeholder: "John Doe", 
    required: true, 
    grid: "md:col-span-1" 
  },
  { 
    name: "email", 
    label: "Email *", 
    type: "email", 
    placeholder: "john@example.com", 
    required: true, 
    grid: "md:col-span-1" 
  },
  { 
    name: "phone", 
    label: "Nomor Telepon", 
    type: "tel", 
    placeholder: "+62 812-3456-7890", 
    required: false, 
    grid: "md:col-span-1" 
  },
  { 
    name: "subject", 
    label: "Subjek *", 
    type: "select", 
    placeholder: "Pilih Subjek", 
    required: true, 
    grid: "md:col-span-1",
    options: [
      { value: "", label: "Pilih Subjek" },
      { value: "pengiriman", label: "Informasi Pengiriman" },
      { value: "harga", label: "Penawaran Harga" },
      { value: "kerjasama", label: "Kerjasama Bisnis" },
      { value: "komplain", label: "Komplain" },
      { value: "lainnya", label: "Lainnya" },
    ],
  },
  { 
    name: "message", 
    label: "Pesan *", 
    type: "textarea", 
    placeholder: "Tulis pesan Anda di sini...", 
    required: true, 
    grid: "md:col-span-2", 
    rows: 5 
  },
];

export const ICON_MAP = {
  MapPin: "MapPin",
  Phone: "Phone",
  Mail: "Mail",
  Clock: "Clock",
};

export const MAP_EMBED = {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.26149919596!2d106.6894!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf5807c595!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890",
  title: "Office Location",
  alt: "Lokasi Kantor SwiftCargo di Jakarta",
};