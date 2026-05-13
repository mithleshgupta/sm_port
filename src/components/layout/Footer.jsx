import { Camera, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{ background: '#0D0D12', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '40px 0' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, fontSize: '16px', color: '#F2F0EC', letterSpacing: '-0.01em' }}>SM.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:your@email.com" aria-label="Email" style={{ color: '#9090A8', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C4A8CC'}
            onMouseLeave={e => e.currentTarget.style.color = '#9090A8'}>
            <Mail size={17} />
          </a>
          <a href="https://www.instagram.com/wtfffpooja/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            style={{ color: '#9090A8', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C4A8CC'}
            onMouseLeave={e => e.currentTarget.style.color = '#9090A8'}>
            <Camera size={17} />
          </a>
         
        </div>
        <p style={{ fontSize: '12px', color: 'rgba(160,160,170,0.5)' }}>© 2026 · Social Media Manager &amp; Content Strategist</p>
      </div>
    </footer>
  )
}
