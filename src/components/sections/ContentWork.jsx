import { FadeIn } from '../ui/FadeIn'
import { UserCheck, FileText, Target, LineChart } from 'lucide-react'

const cards = [
  { icon: UserCheck, title: 'Influencer Collab',
    points: ['End-to-end influencer management', 'Detailed campaign briefs', 'UGC & paid partnership strategy'] },
  { icon: FileText,  title: 'Script Writing',
    points: ['UGC-style scripts for reels', 'Strong hooks for watch time', 'Natural storytelling + product fit'] },
  { icon: Target,    title: 'Paid Campaigns',
    points: ['Meta IG & FB ad creatives', 'Audience segmentation', 'Conversion-focused testing'] },
  { icon: LineChart, title: 'Content Strategy',
    points: ['Monthly content calendars', 'Content pillar alignment', 'Performance-led iteration'] },
]

export function ContentWork() {
  return (
    <section id="content-work" style={{ background: '#10101A', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>My Work</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1 }}>
              Content &amp; <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Brand Work</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, title, points }) => (
            <div
              key={title}
              className="reveal"
              style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#1A1028', border: '1px solid #3E3050', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} style={{ color: '#C4A8CC' }} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#EEE8F5', letterSpacing: '-0.01em' }}>{title}</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {points.map(p => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9090A8', fontSize: '14px', lineHeight: 1.6 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C4A8CC', flexShrink: 0, marginTop: '6px' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}