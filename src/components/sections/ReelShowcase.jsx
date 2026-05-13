import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import vid0 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.04 PM.mp4'
import vid1 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM.mp4'
import vid2 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM (1).mp4'
import vid3 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM (2).mp4'
import vid4 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM (3).mp4'
import vid5 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM (4).mp4'
import vid6 from '../../assets/WhatsApp Video 2026-04-30 at 9.40.05 PM (5).mp4'
import inf1 from '../../assets/influencer1.mp4'
import inf2 from '../../assets/influencer2.mp4'
import brand1 from '../../assets/brand1.mp4'

const categories = [
  {
    id: 'influencer',
    label: '01',
    title: 'Influencer Collaborations',
    description: 'Real creators, real results — UGC-style content designed for trust, reach, and conversions.',
    videos: [vid6, vid1, vid2,inf1, inf2],
  },
  {
    id: 'scripted',
    label: '02',
    title: 'Scripted by Me',
    description: 'Every word crafted to hook, educate, and convert — from opening line to final CTA.',
    videos: [vid3, vid4, vid6],
  },
  {
    id: 'brand',
    label: '03',
    title: 'Brand Content',
    description: 'Aesthetic, on-brand reels that tell the brand story and drive meaningful engagement.',
    videos: [vid5, vid6, brand1],
  },
]

/* ─── Lightbox ────────────────────────────────── */
function Lightbox({ videos, startIdx, onClose }) {
  const ref = useRef(null)
  const [idx, setIdx] = useState(startIdx)
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const v = ref.current; if (!v) return
    v.currentTime = 0
    v.play().catch(() => {})
    setPlaying(true)
  }, [idx])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + videos.length) % videos.length)
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % videos.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, videos.length])

  const togglePlay = () => {
    const v = ref.current; if (!v) return
    if (playing) { v.pause(); setPlaying(false) } else { v.play(); setPlaying(true) }
  }
  const toggleMute = () => {
    const v = ref.current; if (!v) return
    v.muted = !v.muted; setMuted(v.muted)
  }
  const prev = () => setIdx(i => (i - 1 + videos.length) % videos.length)
  const next = () => setIdx(i => (i + 1) % videos.length)

  return (
    <div className="reel-modal-backdrop" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        {/* close */}
        <button onClick={onClose} style={{ position: 'absolute', top: '-44px', right: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', zIndex: 10 }}>
          <X size={16} />
        </button>

        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}>
          <video ref={ref} src={videos[idx]} loop playsInline muted={muted} style={{ display: 'block', maxHeight: '74vh', maxWidth: 'min(320px, 88vw)', width: '100%', borderRadius: '16px' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
            <button onClick={togglePlay} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
              {playing ? <Pause size={12} fill="white" color="white" /> : <Play size={12} fill="white" color="white" style={{ marginLeft: '1px' }} />}
            </button>
            <button onClick={toggleMute} style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
              {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          </div>
        </div>

        {/* prev / next */}
        {videos.length > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={prev} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
              <ChevronLeft size={18} />
            </button>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', minWidth: '48px', textAlign: 'center' }}>
              {String(idx + 1).padStart(2,'0')} / {String(videos.length).padStart(2,'0')}
            </span>
            <button onClick={next} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#C4A8CC' }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Thumbnail card ──────────────────────────── */
function ReelCard({ src, onOpen }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const v = ref.current; if (!v) return
    if (hovered) { v.play().catch(() => {}) } else { v.pause(); v.currentTime = 0 }
  }, [hovered])

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', aspectRatio: '9/16', borderRadius: '14px', overflow: 'hidden', background: '#1A1A22', cursor: 'pointer', width: '100%', transition: 'transform 0.22s, box-shadow 0.22s', transform: hovered ? 'scale(1.04)' : 'scale(1)', boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.55)' : '0 4px 14px rgba(0,0,0,0.3)' }}
    >
      <video ref={ref} src={src} muted loop playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(196,168,204,0.9)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Play size={16} fill="white" color="white" style={{ marginLeft: '2px' }} />
        </div>
      </div>
    </div>
  )
}

/* ─── Category row ─────────────────────────────── */
function CategorySection({ cat, bg }) {
  const [lightboxIdx, setLightboxIdx] = useState(null)

  return (
    <section style={{ background: bg, padding: '56px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: bg === '#0D0D12' ? '#C4A8CC' : '#C4A8CC', display: 'block', marginBottom: '8px' }}>{cat.label}</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', fontWeight: 700, color: bg === '#0D0D12' ? '#F2F0EC' : '#EEE8F5', lineHeight: 1.15, marginBottom: '10px' }}>{cat.title}</h2>
              <p style={{ fontSize: '14px', color: bg === '#0D0D12' ? '#8A8A98' : '#9090A8', maxWidth: '480px', lineHeight: 1.65 }}>{cat.description}</p>
            </div>
            <span style={{ fontSize: '12px', color: bg === '#0D0D12' ? 'rgba(255,255,255,0.25)' : '#C8C2BC', fontVariantNumeric: 'tabular-nums' }}>
              {cat.videos.length} {cat.videos.length === 1 ? 'video' : 'videos'}
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          {cat.videos.length === 3 ? (
            /* 3 videos: 1 featured left + 2 stacked right, capped width */
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'stretch', maxWidth: '460px', margin: '0 auto' }}>
              <ReelCard src={cat.videos[0]} onOpen={() => setLightboxIdx(0)} />
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '14px' }}>
                <ReelCard src={cat.videos[1]} onOpen={() => setLightboxIdx(1)} />
                <ReelCard src={cat.videos[2]} onOpen={() => setLightboxIdx(2)} />
              </div>
            </div>
          ) : (
            /* 2 videos: side by side, centred, capped width */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '560px', margin: '0 auto' }}>
              {cat.videos.map((src, i) => (
                <ReelCard key={i} src={src} onOpen={() => setLightboxIdx(i)} />
              ))}
            </div>
          )}
        </FadeIn>
      </div>

      {lightboxIdx !== null && (
        <Lightbox videos={cat.videos} startIdx={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </section>
  )
}

/* ─── Section header ───────────────────────────── */
export function ReelShowcase() {
  return (
    <>
      <section id="reels" style={{ background: '#0D0D12', padding: '52px 0 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Content Portfolio</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#F2F0EC', lineHeight: 1.1 }}>
                Real Work. <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Real Results.</em>
              </h2>
              <p style={{ fontSize: '15px', color: '#8A8A98', marginTop: '12px' }}>Hover to preview &middot; Click to watch full screen</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CategorySection cat={categories[0]} bg="#0D0D12" />
      <CategorySection cat={categories[1]} bg="#10101A" />
      <CategorySection cat={categories[2]} bg="#0D0D12" />
    </>
  )
}
