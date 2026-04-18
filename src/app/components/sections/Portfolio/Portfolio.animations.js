import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations/variants";
import { springSmooth, easeInOut } from "@/lib/animations/transitions";

// Header section animasi
export const header = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Grid container dengan stagger untuk cards
export const gridContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.12, // Balanced: not too fast, not too slow
      delayChildren: 0.1,
    },
  },
};

// Individual card animasi - optimized spring for smooth entrance
export const card = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Balanced stiffness: smooth but responsive
      damping: 18,    // Balanced damping: minimal wobble, natural feel
      mass: 0.9,
    },
  },
};

// Card inner content stagger (image → badge → title → desc → stats)
export const cardContent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Image container animasi
export const imageContainer = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// Category badge animasi
export const badge = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
  },
};

// Title & description animasi
export const textContent = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stats container with stagger for individual stats
export const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Individual stat item animasi
export const statItem = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Image hover effect with Framer Motion (replaces CSS transform)
export const imageHover = {
  whileHover: { scale: 1.08 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

// Card hover lift effect
export const cardHover = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: "easeOut" } },
};

// Viewport config for scroll trigger
export const viewport = { once: true, margin: "-80px" };