import "@/app/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

export const metadata = {
  metadataBase: new URL("https://swiftcargo.com"),
  title: "SwiftCargo Express - Modern Freight & Logistics Solutions",
  description: "End-to-end freight forwarding, scheduled overland cargo, express air shipping, and secure warehousing designed for fast-growing businesses.",
  keywords: "freight forwarding, overland cargo, air cargo, warehousing, supply chain logistics, express shipping",
  authors: [{ name: "SwiftCargo Express" }],
  openGraph: {
    title: "SwiftCargo Express - Modern Freight & Logistics Solutions",
    description: "Reliable freight forwarding and multimodal logistics solutions for modern commerce.",
    type: "website",
    locale: "en_US",
    siteName: "SwiftCargo Express",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftCargo Express - Modern Freight & Logistics Solutions",
    description: "Reliable freight forwarding and multimodal logistics solutions for modern commerce.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden text-slate-900 bg-white selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}