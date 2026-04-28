import { fadeInUp } from "@/lib/animations/variants";
import { springSmooth, easeOut } from "@/lib/animations/transitions";

// Badge animasi - muncul pertama
export const badge = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ...easeOut },
  },
};

// Headline animasi - muncul setelah badge
export const headline = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ...springSmooth },
  },
};

// Description animasi - muncul setelah headline
export const description = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ...springSmooth },
  },
};

// CTA Buttons animasi - muncul setelah description
export const ctas = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.6, ...springSmooth },
  },
};

// Stats animasi - muncul terakhir
export const stats = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.8, ...springSmooth },
  },
};

// Visual Column animation - enters from right
export const visualColumn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ...springSmooth },
  },
};

// Floating animation for UI cards
export const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Container stagger untuk future expansion
export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};