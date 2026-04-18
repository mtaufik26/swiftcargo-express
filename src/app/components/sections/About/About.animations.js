import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations/variants";
import { springSmooth } from "@/lib/animations/transitions";

// Container utama dengan stagger untuk child elements
export const container = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Animasi untuk kolom kiri (gambar) - slide dari kiri
export const imageColumn = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

// Animasi untuk kolom kanan (teks) - slide dari kanan
export const contentColumn = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

// Animasi untuk label section
export const label = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Animasi untuk headline
export const headline = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animasi untuk description paragraph
export const description = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animasi untuk setiap feature item (staggered)
export const featureItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Animasi untuk client stats card
export const clientStats = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.2, ...springSmooth },
  },
};

// Animasi untuk experience badge (floating effect)
export const badge = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3, ...springSmooth },
  },
};

// Viewport config untuk trigger animasi saat scroll
export const viewport = { once: true, margin: "-100px" };