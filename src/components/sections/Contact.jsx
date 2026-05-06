import { Mail, Camera, MessageCircle } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'

const links = [
  { href: 'mailto:Poojaasingh1100@gmail.com', icon: Mail,          label: 'Email Me' },
  { href: 'https://instagram.com/yourhandle', icon: Camera,        label: 'Instagram' },
  { href: 'https://wa.me/yourwhatsapp',       icon: MessageCircle, label: 'WhatsApp' },
]

export function Contact() {
  return (
    <section id="contact" style={{ background: '#0D0D12', padding: '112px 0' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <FadeIn>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '20px' }}>
            Let&apos;s Work Together
          </span>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.6rem,6vw,4.5rem)', fontWeight: 700, color: '#F2F0EC', lineHeight: 1.06, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Ready to Grow<br />
            <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Your Brand?</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#8A8A98', lineHeight: 1.7, marginBottom: '48px', maxWidth: '380px', margin: '0 auto 48px' }}>
            Drop me a message and let&apos;s build something great together.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '13px 26px', borderRadius: '100px', fontWeight: 600, fontSize: '14px', color: '#F2F0EC', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC'; e.currentTarget.style.borderColor = '#C4A8CC' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
              >
                <Icon size={16} />{label}
              </a>
            ))}
          </div>

          <p style={{ color: 'rgba(160,160,170,0.4)', fontSize: '12px', letterSpacing: '0.03em' }}>
            Available for freelance, brand partnerships &amp; full-time roles
          </p>
        </FadeIn>
      </div>
    </section>
  )
}