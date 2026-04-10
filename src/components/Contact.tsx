import { Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import MagneticWrapper from './MagneticWrapper'
import SectionReveal, { RevealItem } from './SectionReveal'
import { fadeUp } from '../lib/animations'

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <SectionReveal
      id="contact"
      className="py-24 md:py-40 px-6 md:px-16 max-w-[70rem] mx-auto"
    >
      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        variants={fadeUp}
      >
        <div className="w-8 h-px bg-text-muted/30" />
        <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">
          Contact
        </span>
      </motion.div>

      <RevealItem>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-text-primary font-semibold leading-tight mb-4">
          Let's build{' '}
          <br />
          something
        </h2>
      </RevealItem>

      <RevealItem>
        <p className="text-text-muted text-base md:text-lg max-w-md mb-12 leading-relaxed">
          Open to new opportunities, collaborations, or just a good conversation about reliability engineering.
        </p>
      </RevealItem>

      <div className="flex flex-col gap-4">
        <RevealItem>
          <MagneticWrapper strength={0.12}>
            <a
              href="mailto:richardpeterprince@gmail.com"
              className="group inline-flex items-center gap-4 py-4 pr-4 text-text-primary hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-gold/40 transition-colors duration-300">
                <Mail size={16} className="text-gold" />
              </span>
              <span className="font-body text-base md:text-lg font-medium">
                richardpeterprince@gmail.com
              </span>
              <ArrowUpRight size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" />
            </a>
          </MagneticWrapper>
        </RevealItem>

        <RevealItem>
          <MagneticWrapper strength={0.12}>
            <a
              href="https://linkedin.com/in/richard-prince-swe"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 py-4 pr-4 text-text-primary hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-gold/40 transition-colors duration-300">
                <LinkedInIcon size={16} />
              </span>
              <span className="font-body text-base md:text-lg font-medium">
                LinkedIn
              </span>
              <ArrowUpRight size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" />
            </a>
          </MagneticWrapper>
        </RevealItem>
        <RevealItem>
          <MagneticWrapper strength={0.12}>
            <a
              href="https://github.com/RichardPrince"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 py-4 pr-4 text-text-primary hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-gold/40 transition-colors duration-300">
                <GitHubIcon size={16} />
              </span>
              <span className="font-body text-base md:text-lg font-medium">
                GitHub
              </span>
              <ArrowUpRight size={14} className="text-text-muted group-hover:text-gold transition-colors duration-200" />
            </a>
          </MagneticWrapper>
        </RevealItem>
      </div>
    </SectionReveal>
  )
}
