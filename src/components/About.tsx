import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionReveal, { RevealItem } from './SectionReveal'
import { slideFromLeft } from '../lib/animations'
import { useGsapScrollReveal } from '../hooks/useGsapScrollReveal'

export default function About() {
  const ruleRef = useRef<HTMLDivElement>(null)

  useGsapScrollReveal(ruleRef, {
    from: { scaleX: 0, opacity: 0 },
    to: { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut' },
  })

  return (
    <SectionReveal id="about" className="py-24 md:py-40 px-6 md:px-16 max-w-[70rem] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Desktop rotated label */}
        <motion.div
          className="md:w-[12%] flex-shrink-0 hidden md:flex items-start pt-2"
          variants={slideFromLeft}
        >
          <div className="relative">
            <span
              className="font-display text-5xl text-text-muted/15 font-bold"
              style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
            >
              ABOUT
            </span>
            {/* Gold dot accent */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-text-muted/30 rounded-full" />
          </div>
        </motion.div>

        {/* Mobile label */}
        <motion.div className="md:hidden flex items-center gap-4" variants={slideFromLeft}>
          <div className="w-8 h-px bg-text-muted/30" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">About</span>
        </motion.div>

        {/* Bio content */}
        <div className="md:w-[88%]">
          <RevealItem>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary font-semibold mb-8 leading-tight">
              I build systems that stay up
              <br />
              <span className="text-text-muted">when it matters most.</span>
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="text-base md:text-lg leading-[1.8] mb-6 max-w-2xl">
              Production reliability engineer at{' '}
              <span className="text-text-primary font-medium">Walmart Global Tech</span> with
              2+ years owning{' '}
              <span className="text-text-primary font-medium">incident response</span>,{' '}
              <span className="text-text-primary font-medium">observability</span>, and{' '}
              <span className="text-text-primary font-medium">workflow automation</span>
              {' '}across 20+ enterprise applications spanning 5,000+ store locations.
            </p>
          </RevealItem>

          <RevealItem>
            <p className="text-base md:text-lg text-text-body leading-[1.8] max-w-2xl">
              I've led P1/P2 war rooms under pressure, built monitoring infrastructure
              in Splunk and Grafana, and drove a 60% reduction in repeat incidents through
              postmortem-driven fixes. Outside of production, I build websites and
              full-stack apps for real clients and personal projects, from local
              businesses to mobile marketplaces.
            </p>
          </RevealItem>

          {/* Stats row */}
          <RevealItem>
            <div className="flex gap-12 mt-12 pt-8 border-t border-border">
              <div>
                <span className="font-display text-3xl text-text-primary font-semibold">20+</span>
                <p className="text-text-muted text-sm mt-1 font-body">Apps Supported</p>
              </div>
              <div>
                <span className="font-display text-3xl text-text-primary font-semibold">5K+</span>
                <p className="text-text-muted text-sm mt-1 font-body">Store Locations</p>
              </div>
              <div>
                <span className="font-display text-3xl text-text-primary font-semibold">60%</span>
                <p className="text-text-muted text-sm mt-1 font-body">Fewer Repeat Incidents</p>
              </div>
            </div>
          </RevealItem>

          {/* Decorative gold rule */}
          <div
            ref={ruleRef}
            className="h-px bg-gradient-to-r from-border to-transparent mt-12 origin-left"
            style={{ width: '40%' }}
          />
        </div>
      </div>
    </SectionReveal>
  )
}
