import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldReduceMotion } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  start?: string
  once?: boolean
}

export function useGsapScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const {
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
    start = 'top 85%',
    once = true,
  } = options

  useEffect(() => {
    if (!ref.current) return

    if (shouldReduceMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0, x: 0, scale: 1 })
      return
    }

    gsap.set(ref.current, from)

    const trigger = gsap.to(ref.current, {
      ...to,
      scrollTrigger: {
        trigger: ref.current,
        start,
        once,
      },
    })

    return () => { trigger.kill() }
  }, [ref, from, to, start, once])
}
