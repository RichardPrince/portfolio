import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionReveal, { RevealItem } from './SectionReveal'
import MagneticWrapper from './MagneticWrapper'
import { fadeUp } from '../lib/animations'

export default function Resume() {
  return (
    <SectionReveal
      id="resume"
      className="py-24 md:py-32 px-6 md:px-16 max-w-[70rem] mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
        <div>
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            variants={fadeUp}
          >
            <div className="w-8 h-px bg-text-muted/30" />
            <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">
              Resume
            </span>
          </motion.div>

          <RevealItem>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary font-semibold mb-4">
              Experience &amp; Skills            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-text-body text-base md:text-lg max-w-md leading-relaxed">
              Walmart Global Tech, Fast Enterprises, UC Santa Cruz. Full background on experience, skills, and certifications.
            </p>
          </RevealItem>
        </div>

        <RevealItem>
          <MagneticWrapper strength={0.2}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold font-body font-medium text-sm tracking-wide uppercase rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold"
            >
              <span
                className="absolute inset-0 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-3 group-hover:text-bg transition-colors duration-300">
                <Download size={16} />
                Download PDF
              </span>
            </a>
          </MagneticWrapper>
        </RevealItem>
      </div>

      {/* Decorative line */}
      <div className="h-px bg-gradient-to-r from-border via-border to-transparent mt-16" />
    </SectionReveal>
  )
}
