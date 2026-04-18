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

// Container dengan stagger untuk service cards
export const container = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.08, // Slightly faster stagger for snappier feel
      delayChildren: 0.15,
    },
  },
};

// Individual service card animasi - optimized spring
export const card = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 120, // Slightly stiffer for snappier entrance
      damping: 16,    // Less damping for less "wobble"
      mass: 0.8,
    },
  },
};

// Accordion expand/collapse animasi - smooth height transition
export const accordion = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1, 
    transition: { 
      duration: 0.25, // Faster for snappier UX
      ease: [0.22, 1, 0.36, 1], // Custom ease for smooth start/end
    } 
  },
};

// Icon rotate animasi
export const iconRotate = {
  transition: { duration: 0.25, ease: "easeInOut" },
};

// Viewport config
export const viewport = { once: true, margin: "-80px" };