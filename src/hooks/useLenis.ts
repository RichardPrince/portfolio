import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function useLenis() {
  const lenis = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    lenis.current = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      smoothWheel: true,
    })
    lenisInstance = lenis.current

    lenis.current.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.current?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.current?.destroy()
      lenisInstance = null
    }
  }, [])

  return lenis
}
