import type { Variants } from 'framer-motion'

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  reveal: 1.0,
} as const

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.76, 0, 0.24, 1] as const,
  spring: { stiffness: 100, damping: 15 },
} as const

export const STAGGER = {
  children: 0.08,
  sections: 0.15,
} as const

export const shouldReduceMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export const fadeUp: Variants = {
  hidden: shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal },
  },
}

export const slideFromLeft: Variants = {
  hidden: shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
}

export const slideFromRight: Variants = {
  hidden: shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
}

export const scaleIn: Variants = {
  hidden: shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.children,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.sections,
    },
  },
}
