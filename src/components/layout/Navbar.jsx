import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'Reels',      href: '#reels' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Expertise',  href: '#expertise' },
  { label: 'Experience', href: '#work' },
  { label: 'About',      href: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      document.querySelectorAll('section[id]').forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 130) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className="nav-mounted fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,16,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #28283A' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between" style={{ height: '64px' }}>
        <button
          onClick={() => scrollTo('#hero')}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: '17px', color: '#EEE8F5', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em' }}
        >
          SM.
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isAct = active === id
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  style={{ fontSize: '13px', fontWeight: isAct ? 600 : 500, color: isAct ? '#C4A8CC' : '#9090A8', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s', padding: '0 0 4px', position: 'relative' }}
                >
                  {label}
                  <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: isAct ? '100%' : '0', height: '2px', background: '#C4A8CC', borderRadius: '1px', transition: 'width 0.25s ease', display: 'block' }} />
                </button>
              </li>
            )
          })}
          <li>
            <button
              onClick={() => scrollTo('#contact')}
              style={{ fontSize: '12px', fontWeight: 600, color: '#0A0A10', background: '#EEE8F5', border: 'none', cursor: 'pointer', padding: '8px 20px', borderRadius: '100px', transition: 'background 0.2s', letterSpacing: '0.01em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#EEE8F5' }}
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EEE8F5' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={`mobile-menu md:hidden ${open ? 'open' : ''}`}
        style={{ background: 'rgba(10,10,16,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #28283A' }}
      >
        <div className="px-5 pb-5 flex flex-col">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              style={{ textAlign: 'left', fontSize: '14px', fontWeight: 500, color: '#EEE8F5', padding: '11px 0', background: 'none', border: 'none', borderBottom: '1px solid #1E1E2A', cursor: 'pointer' }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            style={{ marginTop: '12px', background: '#EEE8F5', color: '#0A0A10', fontSize: '13px', fontWeight: 600, padding: '11px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}
