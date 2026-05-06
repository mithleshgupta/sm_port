import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById('back-to-top')
    const onScroll = () => btn?.classList.toggle('visible', window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#EEE8F5', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A0A10', boxShadow: '0 4px 16px rgba(0,0,0,0.18)', transition: 'background 0.2s, transform 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#EEE8F5'; e.currentTarget.style.transform = 'none' }}
    >
      <ArrowUp size={17} />
    </button>
  )
}
