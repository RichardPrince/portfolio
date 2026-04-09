import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectItem from './ProjectItem'
import TextReveal from './TextReveal'
import { projects } from '../data/projects'
import { shouldReduceMotion, fadeUp, EASE } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rowsRef.current || shouldReduceMotion) return

    const rows = rowsRef.current.querySelectorAll('.project-row')
    gsap.set(rows, { opacity: 0, y: 30 })
    gsap.to(rows, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: rowsRef.current,
        start: 'top 85%',
        once: true,
      },
    })
  }, [])

  return (
    <section id="projects" className="py-24 md:py-40 max-w-[70rem] mx-auto">
      <div className="px-6 md:px-16 mb-16">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE.out }}
        >
          <div className="w-8 h-px bg-text-muted/30" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-body font-medium">
            Selected Work
          </span>
        </motion.div>

        <TextReveal
          text="Projects"
          as="h2"
          splitBy="word"
          className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary font-semibold"
          scrollTrigger
          stagger={0.1}
        />
      </div>

      <div ref={rowsRef}>
        {projects.map((project, i) => (
          <div key={project.number} className="project-row">
            <ProjectItem
              project={project}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
