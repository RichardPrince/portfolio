import { useRef, useCallback, type ReactNode } from 'react'
import gsap from 'gsap'
import { shouldReduceMotion } from '../lib/animations'

interface MagneticWrapperProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function MagneticWrapper({
  children,
  strength = 0.3,
  className = '',
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || shouldReduceMotion) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      gsap.to(ref.current, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current || shouldReduceMotion) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
  }, [])

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
