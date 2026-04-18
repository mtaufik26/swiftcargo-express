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