import { FadeIn } from '../ui/FadeIn'
import profileImg from '../../assets/png (4).png'

const values = [
  { label: 'Results-Driven',   sub: 'Every post tied to a measurable goal' },
  { label: 'Trend-Aware',      sub: 'Always ahead of the curve' },
  { label: 'Brand Versatile',  sub: 'Lifestyle, beauty, fashion & beyond' },
  { label: 'Consistent',       sub: 'Reliable delivery, every single week' },
]

export function About() {
  return (
    <section id="about" style={{ background: '#10101A', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <FadeIn direction="left" className="flex justify-center">
            <div style={{ position: 'relative', width: '260px', maxWidth: '100%' }}>
              <div style={{ aspectRatio: '3/4', borderRadius: '20px', overflow: 'hidden', border: '1px solid #28283A', boxShadow: '0 16px 40px rgba(0,0,0,0.09)' }}>
                <img src={profileImg} alt="Pooja Singh" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-14px', right: '-18px', background: '#16161E', border: '1px solid #28283A', borderRadius: '14px', padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8888A0', marginBottom: '3px' }}>Current Brand</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#C4A8CC' }}>Zobha Skincare</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '14px' }}>About Me</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1, marginBottom: '20px' }}>
              Hi, I&apos;m <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Pooja Singh</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#9090A8', lineHeight: 1.75, maxWidth: '440px', marginBottom: '12px' }}>
              I&apos;m a <strong style={{ color: '#EEE8F5', fontWeight: 600 }}>Social Media Manager &amp; Content Strategist</strong> focused on creating content that connects, engages, and drives real results.
            </p>
            <p style={{ fontSize: '15px', color: '#9090A8', lineHeight: 1.75, maxWidth: '440px', marginBottom: '28px' }}>
              My hands-on experience with consumer brands has taught me how to turn audience needs into content that builds trust and growth — and that translates across <strong style={{ color: '#C4A8CC', fontWeight: 600 }}>any industry, any niche</strong>.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {values.map(({ label, sub }) => (
                <div
                  key={label}
                  style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '14px', padding: '18px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3E3050' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#28283A' }}
                >
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#EEE8F5', marginBottom: '5px' }}>{label}</p>
                  <p style={{ fontSize: '12px', color: '#9090A8', lineHeight: 1.55 }}>{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}