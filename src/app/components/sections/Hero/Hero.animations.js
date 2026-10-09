// Hardware-accelerated entrance variants with luxurious, clearly felt pacing
// Uses silky smooth cubic bezier [0.16, 1, 0.3, 1] for 60fps/120fps butter-smooth execution

export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export const badge = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const headline = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const description = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ctas = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const proofPills = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const visualColumn = {
  hidden: { opacity: 0, y: 44, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

export const metricsRibbon = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    },
  },
};

export const metricItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

