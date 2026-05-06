import { FadeIn } from '../ui/FadeIn'

const days = [
  { day: 'Mon', content: 'Skincare Tip Reel',         type: 'Reel' },
  { day: 'Tue', content: 'Brand Story Post',          type: 'Post' },
  { day: 'Wed', content: 'Product Highlight',         type: 'Post' },
  { day: 'Thu', content: 'Skincare Routine Carousel', type: 'Carousel' },
  { day: 'Fri', content: 'Trending Reel',             type: 'Reel' },
  { day: 'Sat', content: 'Influencer / UGC Collab',   type: 'Post' },
  { day: 'Sun', content: 'Educational Carousel',      type: 'Carousel' },
]

const typeStyle = {
  Reel:     { bg: '#1A1028', border: '#3E3050', color: '#C4A8CC' },
  Post:     { bg: '#F0F4FE', border: '#BDD0FB', color: '#3B6EDA' },
  Carousel: { bg: '#F0FDF4', border: '#BBEDCB', color: '#16A34A' },
}

export function Strategy() {
  return (
    <section id="strategy" style={{ background: '#16161E', padding: '96px 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Strategy</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1 }}>
              Weekly Content <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Framework</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ background: '#0A0A10', border: '1px solid #28283A', borderRadius: '16px', overflow: 'hidden' }}>
            {days.map(({ day, content, type }, i) => {
              const s = typeStyle[type]
              return (
                <div
                  key={day}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', borderBottom: i < days.length - 1 ? '1px solid #1E1E2A' : 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#10101A' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#C4A8CC', width: '30px', flexShrink: 0 }}>{day}</span>
                  <span style={{ flex: 1, fontSize: '14px', color: '#C0C0D0' }}>{content}</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '100px', background: s.bg, border: `1px solid ${s.border}`, color: s.color, whiteSpace: 'nowrap' }}>{type}</span>
                </div>
              )
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}