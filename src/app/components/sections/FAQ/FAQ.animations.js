import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
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

// FAQ list container dengan stagger untuk items
export const faqContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.05, // Faster stagger for snappy list entrance
      delayChildren: 0.1,
    },
  },
};

// Individual FAQ item animasi
export const faqItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// Accordion content animasi - optimized for smooth height transition
export const accordion = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1, 
    transition: { 
      duration: 0.28, // Slightly faster for snappier UX
      ease: [0.22, 1, 0.36, 1], // Custom ease for smooth start/end
    } 
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// Chevron icon rotate animasi
export const chevronRotate = {
  transition: { duration: 0.25, ease: "easeInOut" },
};

// Button hover/tap interactions
export const buttonInteractions = {
  whileHover: { backgroundColor: "rgba(249, 250, 251, 1)" }, // gray-50
  whileTap: { scale: 0.995 },
};

// CTA card animasi
export const ctaCard = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: 0.15, ...springSmooth },
  },
};

// CTA button hover effect
export const ctaButton = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

// Viewport config for scroll trigger
export const viewport = { once: true, margin: "-60px" };