import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations/variants";
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

// Left column (contact info) animasi
export const infoColumn = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

// Right column (form) animasi
export const formColumn = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], ...springSmooth },
  },
};

// Contact info items container dengan stagger
export const infoItemsContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Individual contact info item animasi
export const infoItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// Icon container animasi
export const iconContainer = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, delay: 0.05, ...springSmooth },
  },
};

// Map container animasi
export const mapContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// Form animasi
export const form = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Form field animasi (staggered)
export const formFieldsContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const formField = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Input focus animation (for framer-motion whileFocus)
export const inputFocus = {
  whileFocus: { 
    boxShadow: "0 0 0 4px rgba(31, 41, 55, 0.1)", // subtle gray-900 ring
    transition: { duration: 0.2 },
  },
};

// Submit button animasi
export const submitButton = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

// Loading spinner animasi (Framer Motion version)
export const spinner = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  },
};

// Success state animasi
export const successState = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ...springSmooth },
  },
};

export const successIcon = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: 0.1, type: "spring", stiffness: 200, damping: 15 },
  },
};

// Viewport config
export const viewport = { once: true, margin: "-80px" };