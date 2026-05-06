import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const ref = useRef()
  useEffect(() => {
    const bar = ref.current
    if (!bar) return
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${total ? window.scrollY / total : 0})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="scroll-progress" ref={ref} />
}
