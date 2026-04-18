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

// Main testimonial card switch animasi (AnimatePresence)
export const testimonialCard = {
  hidden: { opacity: 0, x: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -30,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// Quote icon animasi
export const quoteIcon = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.4, delay: 0.1, ...springSmooth },
  },
};

// Rating stars container dengan stagger
export const starsContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

export const starItem = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Testimonial content (quote text) animasi
export const testimonialContent = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// Avatar + name section animasi dengan stagger
export const authorSection = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

export const avatar = {
  hidden: { opacity: 0, scale: 0.8, x: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.35, ...springSmooth },
  },
};

export const authorName = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const authorRole = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut", delay: 0.05 },
  },
};

// Thumbnail buttons container dengan stagger
export const thumbnailsContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

export const thumbnail = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// Thumbnail button hover/tap interactions
export const thumbnailInteractions = {
  whileHover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

// Client logos strip animasi
export const clientLogosSection = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const clientLogosContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const clientLogo = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Viewport config
export const viewport = { once: true, margin: "-80px" };