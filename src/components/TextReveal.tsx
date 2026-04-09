import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldReduceMotion } from '../lib/animations'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  splitBy?: 'char' | 'word'
  stagger?: number
  delay?: number
  className?: string
  scrollTrigger?: boolean
  gold?: boolean
}

export default function TextReveal({
  text,
  as: Tag = 'h1',
  splitBy = 'word',
  stagger = 0.03,
  delay = 0,
  className = '',
  scrollTrigger = false,
  gold = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return

    const pieces = containerRef.current.querySelectorAll('.reveal-piece')

    if (shouldReduceMotion) {
      gsap.set(pieces, { opacity: 1, y: 0 })
      return
    }

    gsap.set(pieces, { opacity: 0, y: '100%' })

    const animConfig: gsap.TweenVars = {
      opacity: 1,
      y: '0%',
      duration: 0.8,
      stagger,
      delay,
      ease: 'power4.out',
    }

    if (scrollTrigger) {
      gsap.to(pieces, {
        ...animConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    } else {
      gsap.to(pieces, animConfig)
    }

    hasAnimated.current = true
  }, [stagger, delay, scrollTrigger])

  const items = splitBy === 'char' ? text.split('') : text.split(' ')

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`${className} ${gold ? 'text-gold' : ''}`}
    >
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="reveal-piece inline-block">
            {item}
            {splitBy === 'word' && i < items.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
