import { useEffect, useRef, useState } from 'react'
import { FadeIn } from '../ui/FadeIn'
import { TrendingUp, Users, Zap, ShoppingBag, Check, Minus } from 'lucide-react'

function Metric({ icon: Icon, value, suffix, label }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [n, setN] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.4 })
    obs.observe(ref.current); return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!vis || !value) return
    let s = 0; const step = value / 90
    const t = setInterval(() => { s += step; if (s >= value) { setN(value); clearInterval(t) } else setN(Math.floor(s)) }, 1000 / 60)
    return () => clearInterval(t)
  }, [vis, value])

  return (
    <div ref={ref} style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px 24px', textAlign: 'center' }}>
      <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#1A1028', border: '1px solid #3E3050', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <Icon size={18} style={{ color: '#C4A8CC' }} />
      </div>
      <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 700, color: '#EEE8F5', lineHeight: 1, marginBottom: '6px' }}>
        {value ? (vis ? n : 0) + suffix : suffix}
      </div>
      <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9090A8' }}>{label}</div>
    </div>
  )
}

const before = ['Low engagement across all posts', 'No content calendar or strategy', 'Weak hooks & captions', 'Zero influencer activity']
const after  = ['Trend-based reels with strong hooks', 'Structured monthly content calendar', 'Influencer collabs & UGC campaigns', 'Meta ads with conversion creatives']

export function CaseStudy() {
  return (
    <section id="case-study" style={{ background: '#0A0A10', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Case Study</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1, marginBottom: '14px' }}>
              Zobha <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Skincare</em>
            </h2>
            <p style={{ fontSize: '16px', color: '#9090A8', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Full social media overhaul — strategy, reels, influencer management &amp; Meta ads.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginBottom: '32px' }}>
          <Metric icon={TrendingUp} value={40}   suffix="%+" label="Engagement" />
          <Metric icon={Users}      value={null}  suffix="2x"  label="Reach Growth" />
          <Metric icon={Zap}        value={null}  suffix="↑"   label="Influencer Reach" />
          <Metric icon={ShoppingBag} value={null} suffix="↑"  label="Product Sales" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <FadeIn direction="left">
            <div style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#EF4444' }}>Before</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {before.map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9090A8', fontSize: '14px' }}>
                    <Minus size={12} style={{ color: '#EF4444', flexShrink: 0, opacity: 0.7 }} />{t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'block' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#22C55E' }}>After</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {after.map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#EEE8F5', fontSize: '14px' }}>
                    <Check size={13} style={{ color: '#22C55E', flexShrink: 0 }} />{t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
