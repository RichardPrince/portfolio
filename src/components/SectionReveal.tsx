import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/animations'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionReveal({ children, className = '', id }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15%' }}
    >
      {children}
    </motion.section>
  )
}

export function RevealItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
