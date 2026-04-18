import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations/variants";
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

// Left column (main card) animasi
export const mainCardColumn = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

// Right column (selectors) animasi + stagger for buttons
export const selectorsColumn = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

export const selectorsGrid = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

// Individual selector button animasi
export const selectorButton = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button hover/tap states (for framer-motion whileHover/whileTap)
export const buttonInteractions = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

// Main content card switch animasi (AnimatePresence)
export const contentCard = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -25,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// Icon container animasi
export const iconContainer = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, delay: 0.1, ...springSmooth },
  },
};

// Stat box animasi
export const statBox = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.15, ...springSmooth },
  },
};

// Viewport config
export const viewport = { once: true, margin: "-100px" };