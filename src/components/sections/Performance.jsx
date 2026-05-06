import { FadeIn } from '../ui/FadeIn'

const cards = [
  { num: '01', label: 'Campaign Support',    desc: 'Meta IG & FB ad campaigns aligned to brand goals.' },
  { num: '02', label: 'Audience Targeting',  desc: 'Segmentation to reach the most relevant buyers.' },
  { num: '03', label: 'Creative Production', desc: 'Ad-ready reels & statics built for conversions.' },
  { num: '04', label: 'A/B Testing',         desc: 'Iterative creative testing to find top performers.' },
  { num: '05', label: 'Reach Optimisation',  desc: 'Organic + paid strategy to grow qualified reach.' },
  { num: '06', label: 'Conversion Focus',    desc: 'Tied to product visibility, reach & measurable sales.' },
]

export function Performance() {
  return (
    <section id="performance" style={{ background: '#0D0D12', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Ads &amp; Growth</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#F2F0EC', lineHeight: 1.1 }}>
              Performance <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Marketing</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ num, label, desc }) => (
            <div
              key={num}
              className="reveal"
              style={{ background: '#161620', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,168,204,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C4A8CC, #D4A585)' }} />
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.8rem', fontWeight: 700, color: '#C4A8CC', lineHeight: 1, marginBottom: '14px', opacity: 0.5 }}>{num}</p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#F2F0EC', marginBottom: '8px', letterSpacing: '-0.01em' }}>{label}</p>
              <p style={{ fontSize: '14px', color: '#8A8A98', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}