import { FadeIn } from '../ui/FadeIn'

const tools = [
  { emoji: '🎨', name: 'Canva',              sub: 'Design & Creatives' },
  { emoji: '📊', name: 'Instagram Insights', sub: 'Analytics & Growth' },
  { emoji: '📢', name: 'Meta Ads Manager',   sub: 'Paid Campaigns' },
  { emoji: '🤖', name: 'ChatGPT',            sub: 'AI Content & Scripts' },
]

export function Tools() {
  return (
    <section id="tools" style={{ background: '#0A0A10', padding: '96px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Tech Stack</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1 }}>
              Tools I <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Use</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map(({ emoji, name, sub }) => (
              <div
                key={name}
                style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#3E3050'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(196,168,204,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#28283A'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '14px' }}>{emoji}</span>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#EEE8F5', marginBottom: '5px' }}>{name}</p>
                <p style={{ fontSize: '12px', color: '#9090A8' }}>{sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}