import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface GradientBlobProps {
  color: string
  size: number
  x: string
  y: string
  speed?: number
}

export default function GradientBlob({ color, size, x, y, speed = 20 }: GradientBlobProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    tl.to(ref.current, {
      x: 60,
      y: -40,
      scale: 1.1,
      duration: speed,
      ease: 'sine.inOut',
    })
    tl.to(ref.current, {
      x: -30,
      y: 50,
      scale: 0.9,
      duration: speed * 0.8,
      ease: 'sine.inOut',
    })

    return () => { tl.kill() }
  }, [speed])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 will-change-transform"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    />
  )
}
