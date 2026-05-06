import { FadeIn, StaggerChildren } from '../ui/FadeIn'
import { Smartphone, CalendarDays, Clapperboard, Handshake, PenLine, Megaphone } from 'lucide-react'

const cards = [
  { icon: Smartphone,   title: 'Social Media Management', desc: 'End-to-end strategy, planning, and daily execution.',     color: '#C4A8CC' },
  { icon: CalendarDays, title: 'Content Strategy',         desc: 'Data-driven calendars aligned to business goals.',         color: '#C4A8CC' },
  { icon: Clapperboard, title: 'Reels Production',         desc: 'Trend-led, hook-first short-form video content.',          color: '#C4A8CC' },
  { icon: Handshake,    title: 'Influencer Marketing',     desc: 'From sourcing and briefs to full campaign execution.',     color: '#C4A8CC' },
  { icon: PenLine,      title: 'Script Writing (UGC)',     desc: 'Natural, conversion-optimised scripts for UGC reels.',    color: '#C4A8CC' },
  { icon: Megaphone,    title: 'Performance Marketing',    desc: 'Meta IG & FB ads built around measurable results.',       color: '#C4A8CC' },
]

export function Expertise() {
  return (
    <section id="expertise" style={{ background: '#10101A', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>What I Do</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1 }}>
              Areas of <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Expertise</em>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              style={{ background: '#16161E', border: '1px solid #28283A', borderRadius: '16px', padding: '28px', transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3E3050'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(196,168,204,0.10)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#28283A'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#1A1028', border: '1px solid #3E3050', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} style={{ color: '#C4A8CC' }} />
                </div>
                <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '13px', fontWeight: 700, color: '#3E3050', letterSpacing: '0.04em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: '15px', color: '#EEE8F5', marginBottom: '8px', letterSpacing: '-0.01em' }}>{title}</p>
              <p style={{ fontSize: '14px', color: '#9090A8', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </StaggerChildren>

      </div>
    </section>
  )
}