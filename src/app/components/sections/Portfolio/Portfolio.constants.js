export const SECTION_HEADER = {
  label: "Portofolio",
  title: "Proyek yang Telah Kami Selesaikan",
  description: "Track record kami dalam memberikan solusi logistik terbaik untuk berbagai industri",
};

export const PORTFOLIO_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    title: "Distribusi Nasional",
    category: "Cargo",
    description: "Pengiriman 5000+ unit produk elektronik ke 30 kota di Indonesia dalam 7 hari",
    stats: [
      { icon: "MapPin", value: "30", label: "Kota" },
      { icon: "Package", value: "5000+", label: "Unit" },
      { icon: "Truck", value: "7", label: "Hari" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    title: "Same-Day Delivery",
    category: "Express",
    description: "Layanan pengiriman dokumen penting untuk 200+ perusahaan di Jakarta",
    stats: [
      { icon: "Package", value: "200+", label: "Klien" },
      { icon: "Truck", value: "<4", label: "Jam" },
      { icon: "MapPin", value: "JKT", label: "Area" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    title: "Warehousing Solution",
    category: "Storage",
    description: "Penyimpanan dan distribusi produk FMCG untuk retailer nasional",
    stats: [
      { icon: "MapPin", value: "5000", label: "m²" },
      { icon: "Package", value: "50K+", label: "SKU" },
      { icon: "Truck", value: "24/7", label: "Operasi" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=600&fit=crop",
    title: "Cold Chain Logistics",
    category: "Specialized",
    description: "Pengiriman produk farmasi dan makanan beku dengan temperatur terkontrol",
    stats: [
      { icon: "MapPin", value: "15", label: "Kota" },
      { icon: "Package", value: "1000+", label: "Shipment" },
      { icon: "Truck", value: "-20°C", label: "Suhu" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop",
    title: "E-Commerce Fulfillment",
    category: "Fulfillment",
    description: "Handling dan pengiriman order untuk marketplace dan online shop",
    stats: [
      { icon: "Package", value: "10K+", label: "Order/Hari" },
      { icon: "Truck", value: "99%", label: "Success" },
      { icon: "MapPin", value: "Nasional", label: "Coverage" },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
    title: "International Shipping",
    category: "International",
    description: "Pengiriman cargo internasional ke Asia, Eropa, dan Amerika",
    stats: [
      { icon: "MapPin", value: "25+", label: "Negara" },
      { icon: "Package", value: "500+", label: "Container" },
      { icon: "Truck", value: "Sea/Air", label: "Mode" },
    ],
  },
];

export const ICON_MAP = {
  MapPin: "MapPin",
  Package: "Package",
  Truck: "Truck",
};