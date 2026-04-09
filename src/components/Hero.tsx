import { motion } from 'framer-motion'
import { fadeUp, EASE } from '../lib/animations'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:pl-[15%] overflow-hidden"
    >
      {/* Large decorative number */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[28rem] lg:text-[36rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </div>

      {/* Horizon line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ top: '70%' }}
        aria-hidden="true"
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-[8%] top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.5, ease: EASE.out }}
        >
          <div className="w-12 h-px bg-text-muted/30" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">
            Portfolio 2026
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-text-primary font-semibold leading-[1.02] mb-2">
          Richard
        </h1>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-text-primary font-semibold leading-[1.02] mb-6">
          Prince        </h1>

        <motion.p
          className="font-body text-lg md:text-xl text-text-muted font-medium tracking-wide"
          style={{ fontVariant: 'all-small-caps' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.5, ease: EASE.out }}
        >
          Site Reliability Engineer
        </motion.p>

        <motion.p
          className="text-text-muted mt-4 text-base md:text-lg max-w-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5, ease: EASE.out }}
        >
          Production reliability at retail scale. I also build websites and full-stack applications on the side.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex items-center gap-6 mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.5, ease: EASE.out }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gold text-bg font-body font-medium text-sm rounded-sm cursor-pointer hover:bg-gold/90 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="text-text-muted text-sm font-body font-medium hover:text-gold transition-colors duration-200 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="w-px h-8 bg-text-muted/30 animate-[bounce-scroll_1.5s_ease-in-out_infinite]" />
        <span className="text-text-muted text-[10px] tracking-[0.25em] uppercase font-body">
          scroll
        </span>
      </motion.div>
    </section>
  )
}
