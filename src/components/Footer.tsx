import { useRef } from 'react'
import { useGsapScrollReveal } from '../hooks/useGsapScrollReveal'

export default function Footer() {
  const borderRef = useRef<HTMLDivElement>(null)

  useGsapScrollReveal(borderRef, {
    from: { scaleX: 0, opacity: 0 },
    to: { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut' },
  })

  return (
    <footer className="py-10 px-6 md:px-16 max-w-[70rem] mx-auto">
      <div
        ref={borderRef}
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10 origin-center"
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted/50 text-xs font-body tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Richard Prince
        </p>
        <p className="text-text-muted/30 text-xs font-body tracking-wide">
          Designed &amp; built from scratch
        </p>
      </div>
    </footer>
  )
}
