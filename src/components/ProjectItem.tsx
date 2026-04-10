import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import MagneticWrapper from './MagneticWrapper'
import type { Project } from '../data/projects'
import { EASE } from '../lib/animations'

interface ProjectItemProps {
  project: Project
  isOpen: boolean
  onToggle: () => void
}

export default function ProjectItem({ project, isOpen, onToggle }: ProjectItemProps) {
  return (
    <div
      className={`border-t border-border transition-colors duration-300 cursor-pointer group ${
        isOpen ? 'bg-surface-hover' : 'hover:bg-surface/80'
      }`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
      aria-expanded={isOpen}
    >
      {/* Collapsed row */}
      <div className="flex items-center gap-4 md:gap-8 px-6 md:px-10 py-7 md:py-9">
        <span className="font-display text-xs text-text-muted/50 w-8 flex-shrink-0 tracking-wider">
          {project.number}
        </span>

        <div className="flex-grow min-w-0">
          <motion.span
            className="font-display text-xl md:text-3xl text-text-primary font-semibold block"
            animate={{ x: isOpen ? 8 : 0 }}
            transition={{ type: 'spring', ...EASE.spring }}
          >
            {project.name}
                      </motion.span>
        </div>

        <span className="hidden md:block text-xs text-text-muted/60 font-body flex-shrink-0 tracking-wide uppercase">
          {project.techLine}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold/60 group-hover:text-gold flex-shrink-0 transition-colors duration-200"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-10 md:pb-12 ml-0 md:ml-16">
              {/* Project screenshot */}
              {project.image && (
                <motion.div
                  className="mb-6 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full max-w-md md:max-w-lg max-h-[40vh] object-cover rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              )}

              {/* Accent bar */}
              <div className="w-8 h-px bg-gold mb-6" />

              <motion.p
                className="text-text-body text-base md:text-lg leading-[1.8] mb-8 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2.5 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-body font-medium text-text-body border border-border rounded-full hover:border-text-muted/50 hover:text-text-primary transition-all duration-200 tracking-wide uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <MagneticWrapper strength={0.15}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-gold font-body font-medium text-sm tracking-wide uppercase hover:gap-3.5 transition-all duration-300 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site
                    <ArrowUpRight size={14} />
                  </a>
                </MagneticWrapper>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
