import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "SwiftCargo Express - Pengiriman Cepat & Aman",
  description: "Layanan logistik modern dengan pengiriman cepat, harga kompetitif, dan sistem tracking transparan untuk semua kebutuhan bisnis dan personal Anda.",
  keywords: "logistik, pengiriman, cargo, same day delivery, tracking, warehousing",
  authors: [{ name: "SwiftCargo Express" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5", // TAMBAHKAN INI
  openGraph: {
    title: "SwiftCargo Express - Pengiriman Cepat & Aman",
    description: "Solusi logistik modern untuk bisnis dan personal",
    type: "website",
    locale: "id_ID",
    siteName: "SwiftCargo Express",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftCargo Express",
    description: "Solusi logistik modern untuk bisnis dan personal",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}