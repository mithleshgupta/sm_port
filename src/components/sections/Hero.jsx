import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Pause } from 'lucide-react'
import vid1 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM.mp4'

export function Hero() {
  const statsRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [eng, setEng] = useState(0)
  const [reach, setReach] = useState(0)
  const [reels, setReels] = useState(0)

  useEffect(() => {
    const el = statsRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const run = (target, setter, dur) => {
      let s = 0; const step = target / (dur * 60)
      const t = setInterval(() => { s += step; if (s >= target) { setter(target); clearInterval(t) } else setter(Math.floor(s)) }, 1000 / 60)
      return t
    }
    const t1 = run(40, setEng, 1.8)
    const t2 = run(2, setReach, 1.8)
    const t3 = run(7, setReels, 1.8)
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3) }
  }, [inView])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{ background: '#0A0A10', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '60px 24px 80px', width: '100%' }}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="hero-in hero-in-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#1A1028', border: '1px solid #3E3050', borderRadius: '100px', padding: '5px 14px 5px 9px', marginBottom: '28px' }}>
              <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ADE80', display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C4A8CC' }}>Open to Work</span>
            </div>

            <h1 className="hero-in hero-in-2" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.8rem,5.5vw,4.8rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px' }}>
              I Build Scroll<br />
              <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Stopping Brands.</em>
            </h1>

            <p className="hero-in hero-in-3" style={{ fontSize: '17px', color: '#9090A8', lineHeight: 1.7, maxWidth: '420px', marginBottom: '36px' }}>
              Social Media Manager, Content Strategist & SEO Specialist helping brands grow through content, reels & digital storytelling.
            </p>

            <div className="hero-in hero-in-4 flex gap-3 flex-wrap" style={{ marginBottom: '52px' }}>
              <button
                onClick={() => scrollTo('reels')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#EEE8F5', color: '#0A0A10', fontWeight: 600, fontSize: '14px', padding: '13px 26px', borderRadius: '100px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#EEE8F5' }}
              >
                Watch My Work <ArrowRight size={14} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'transparent', color: '#EEE8F5', fontWeight: 600, fontSize: '14px', padding: '12px 26px', borderRadius: '100px', border: '1.5px solid #504E68', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C4A8CC'; e.currentTarget.style.color = '#C4A8CC' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#504E68'; e.currentTarget.style.color = '#EEE8F5' }}
              >
                Let&apos;s Talk
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="hero-in hero-in-5 flex items-center gap-8 flex-wrap" style={{ paddingTop: '28px', borderTop: '1px solid #28283A' }}>
              <div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 700, color: '#EEE8F5', lineHeight: 1 }}>{eng}%+</div>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090A8', marginTop: '5px' }}>Engagement</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: '#28283A' }} />
              <div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 700, color: '#EEE8F5', lineHeight: 1 }}>{reach}x</div>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090A8', marginTop: '5px' }}>Reach Growth</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: '#28283A' }} />
              <div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 700, color: '#EEE8F5', lineHeight: 1 }}>{reels}+</div>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090A8', marginTop: '5px' }}>Reels Made</div>
              </div>
            </div>
          </div>

          {/* RIGHT - hero video */}
          <div className="hero-in hero-in-6 flex justify-center lg:justify-end">
            <HeroVideo src={vid1} />
          </div>

        </div>
      </div>
    </section>
  )
}

function HeroVideo({ src }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const v = ref.current; if (!v) return
    if (playing) { v.pause(); setPlaying(false) } else { v.play(); setPlaying(true) }
  }

  return (
    <div className="float-anim" style={{ position: 'relative', width: '280px', maxWidth: '90vw' }}>
      <div style={{ aspectRatio: '9/16', borderRadius: '28px', overflow: 'hidden', background: '#0D0D12', boxShadow: '0 28px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)', position: 'relative' }}>
        <video
          ref={ref}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)', pointerEvents: 'none' }} />
        <button
          onClick={toggle}
          style={{ position: 'absolute', bottom: '14px', right: '14px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
        >
          {playing ? <Pause size={14} fill="white" color="white" /> : <Play size={14} fill="white" color="white" style={{ marginLeft: '1px' }} />}
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: '-16px', left: '-20px', background: '#16161E', border: '1px solid #28283A', borderRadius: '14px', padding: '10px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.09)', display: 'flex', alignItems: 'center', gap: '9px' }}>
        <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ADE80', display: 'block', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8888A0', marginBottom: '2px' }}>Currently at</div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#C4A8CC', lineHeight: 1 }}>Zobha Skincare</div>
        </div>
      </div>
    </div>
  )
}
