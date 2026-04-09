import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticWrapper from './MagneticWrapper'
import { getLenis } from '../hooks/useLenis'
import { fadeUp, STAGGER } from '../lib/animations'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const lenis = getLenis()
    const target = document.querySelector(href)
    if (lenis && target) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/70 backdrop-blur-2xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[70rem] mx-auto px-6 md:px-16 flex items-center justify-between h-16 md:h-20">
          <MagneticWrapper strength={0.2}>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-display text-lg text-gold font-semibold cursor-pointer tracking-wide"
            >
              RP            </a>
          </MagneticWrapper>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs font-body font-medium text-text-muted/70 hover:text-text-primary tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary cursor-pointer p-3 -mr-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-bg/98 backdrop-blur-2xl flex flex-col items-start justify-center px-12 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative number */}
            <div className="absolute right-8 bottom-12 font-display text-[8rem] text-white/[0.02] font-bold leading-none select-none pointer-events-none" aria-hidden="true">
              RP
            </div>

            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-4xl text-text-primary hover:text-gold transition-colors duration-200 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * STAGGER.children + 0.1 }}
              >
                {link.label}              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
