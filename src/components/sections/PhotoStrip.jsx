import { useState } from 'react'
import { FadeIn } from '../ui/FadeIn'
import img0 from '../../assets/png.png'
import img1 from '../../assets/png (1).png'
import img2 from '../../assets/png (2).png'
import img3 from '../../assets/png (3).png'
import img4 from '../../assets/png (4).png'
import img5 from '../../assets/png (5).png'
import img6 from '../../assets/png (6).png'
import img7 from '../../assets/png (7).png'
import img8 from '../../assets/png (8).png'
import img9 from '../../assets/png (9).png'
import img10 from '../../assets/png (10).png'

/* Layout: 3 rows with varied widths to feel editorial
   Row 1 (4 cols): B&W studio | Makeup touch | Camera monitor | Red chair portrait
   Row 2 (3 cols): BTS content floor  | Crouching shoot  | Dark makeup shoot
   Row 3 (4 cols): 4 landscape/flat-lay shots
*/
const row1 = [
  { src: img8,  alt: 'Studio shoot BTS' },
  { src: img9,  alt: 'Beauty shoot backstage' },
  { src: img10, alt: 'Camera monitoring shoot' },
  { src: img4,  alt: 'Red chair editorial' },
]
const row2 = [
  { src: img5,  alt: 'Content strategy flat-lay' },
  { src: img7,  alt: 'On-location content creation' },
  { src: img6,  alt: 'Fashion editorial B&W' },
]
const row3 = [
  { src: img0,  alt: 'Portfolio overview' },
  { src: img1,  alt: 'Creative content work' },
  { src: img2,  alt: 'Brand content' },
  { src: img3,  alt: 'Visual storytelling' },
]

function PhotoCard({ src, alt, ratio = '3/4' }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: ratio,
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#1A1A22',
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease, opacity 0.4s ease',
          opacity: loaded ? 1 : 0,
          transform: 'scale(1)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
      />
    </div>
  )
}

export function PhotoStrip() {
  return (
    <section style={{ background: '#0D0D12', padding: '72px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '8px' }}>
                Visual Identity
              </span>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#F2F0EC', lineHeight: 1.1 }}>
                The Person &amp; the <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Work</em>
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: '#8A8A98', maxWidth: '300px', lineHeight: 1.65, textAlign: 'right' }}>
              Creating content that connects — from strategy to final cut.
            </p>
          </div>
        </FadeIn>

        {/* Row 1 — 4 portrait cards */}
        <FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '10px' }}>
            {row1.map((p, i) => <PhotoCard key={i} src={p.src} alt={p.alt} ratio="3/4" />)}
          </div>
        </FadeIn>

        {/* Row 2 — 3 portrait cards, slightly taller ratio */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '10px' }}>
            {row2.map((p, i) => <PhotoCard key={i} src={p.src} alt={p.alt} ratio="3/4" />)}
          </div>
        </FadeIn>

        {/* Row 3 — 4 landscape cards */}
        <FadeIn delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {row3.map((p, i) => <PhotoCard key={i} src={p.src} alt={p.alt} ratio="4/3" />)}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
