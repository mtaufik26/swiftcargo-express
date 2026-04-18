import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations/variants";
import { springSmooth, easeInOut } from "@/lib/animations/transitions";

// CTA Section animasi
export const ctaSection = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ctaTitle = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ctaDescription = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ctaButtons = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stats container dengan stagger
export const statsContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

export const statItem = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// Main Footer animasi
export const mainFooter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// Brand section animasi
export const brandSection = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Social icons container dengan stagger
export const socialContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

export const socialIcon = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Social icon hover/tap interactions
export const socialInteractions = {
  whileHover: { scale: 1.15, backgroundColor: "rgba(55, 65, 81, 1)" }, // gray-700
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
};

// Contact info items dengan stagger
export const contactContainer = {
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

export const contactItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Link columns container dengan stagger
export const linkColumnsContainer = {
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

export const linkColumn = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// Individual link animasi
export const linkItem = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Link hover effect
export const linkHover = {
  whileHover: { x: 4, color: "rgba(255, 255, 255, 1)" },
  transition: { duration: 0.2 },
};

// Bottom bar animasi
export const bottomBar = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const legalLinksContainer = {
  ...staggerContainer,
  visible: {
    ...staggerContainer.visible,
    transition: {
      ...staggerContainer.visible.transition,
      staggerChildren: 0.05,
    },
  },
};

export const legalLink = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Viewport config
export const viewport = { once: true, margin: "-50px" };