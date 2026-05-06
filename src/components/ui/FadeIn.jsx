import { useEffect, useRef } from 'react'

function useReveal(threshold = 0.1) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.dataset.visible = '1'; obs.disconnect() } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useReveal()
  const cls = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'
  return (
    <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: delay + 's' } : {}}>
      {children}
    </div>
  )
}

export function StaggerChildren({ children, className = '' }) {
  const ref = useReveal(0.05)
  return (
    <div ref={ref} className={`stagger ${className}`}>
      {children}
    </div>
  )
}

export const staggerItem = {}