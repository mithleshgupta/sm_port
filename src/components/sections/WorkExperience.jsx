import { useEffect, useRef } from 'react'
import { FadeIn } from '../ui/FadeIn'
import { Check, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Social Media Manager',
    company: 'Zobha Skincare Brand',
    period: '2025 – Present',
    type: 'Full-time',
    current: true,
    tasks: [
      'Monthly content strategy & calendar',
      'Reels, posts & caption writing',
      'Influencer identification & management',
      'UGC-style script writing',
      'Meta ad campaign support',
      'Audience engagement & community management',
    ],
    results: ['+40% Engagement', '2x Reach', '+25% Eng. Rate', 'Sales Growth', 'Brand Repositioning'],
  },
  {
    title: 'SEO Executive',
    company: 'Ardas Interior',
    period: '2024 – 2025',
    type: 'Full-time',
    current: false,
    tasks: [
      'Managed & optimized website on Shopify & Odoo',
      'On-page SEO, keyword research & content optimization',
      'Off-page SEO activities and backlink building',
      'Fixed technical SEO issues & improved site structure',
      'Optimized product pages, meta tags & internal linking',
      'Monitored performance and organic growth',
    ],
    results: ['+30–40% Organic Traffic', '2–3 Keywords Page 1', 'Improved Indexing', 'Stronger Brand Presence'],
  },
]

function ExperienceEntry({ exp, isLast }) {
  const dotRef  = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const line = lineRef.current
    if (!dot) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          dot.dataset.visible = '1'
          if (line) setTimeout(() => { line.dataset.visible = '1' }, 240)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(dot)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      {/* Stem */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '36px', flexShrink: 0 }}>
        <div
          ref={dotRef}
          className="timeline-dot"
          style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#C4A8CC', border: '3px solid #16161E', boxShadow: '0 0 0 2px #C4A8CC', flexShrink: 0, marginTop: '4px', zIndex: 1 }}
        />
        {!isLast && (
          <div style={{ flex: 1, width: '2px', background: '#F0EBE6', marginTop: '10px', borderRadius: '1px', position: 'relative', overflow: 'hidden', minHeight: '40px' }}>
            <div
              ref={lineRef}
              className="timeline-line"
              style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #C4A8CC 55%, transparent)', borderRadius: '1px' }}
            />
          </div>
        )}
      </div>

      {/* Card */}
      <FadeIn direction="right" className="flex-1">
        <div style={{ paddingBottom: '52px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '5px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#EEE8F5', letterSpacing: '-0.01em', marginBottom: '5px' }}>{exp.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#C4A8CC' }}>{exp.company}</span>
                <span style={{ color: '#504E68' }}>·</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '12px', color: '#8A8A98' }}>
                  <MapPin size={10} /> {exp.type}
                </span>
              </div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, padding: '5px 16px', borderRadius: '100px', background: '#1A1028', border: '1px solid #3E3050', color: '#C4A8CC', whiteSpace: 'nowrap' }}>
              {exp.period}
            </span>
          </div>

          <div style={{ height: '1px', background: '#28283A', margin: '20px 0' }} />

          <div className="grid sm:grid-cols-2 gap-3" style={{ marginBottom: '22px' }}>
            {exp.tasks.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', color: '#C0C0D0', fontSize: '14px', lineHeight: 1.55 }}>
                <Check size={13} style={{ color: '#C4A8CC', marginTop: '3px', flexShrink: 0 }} />{t}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {exp.results.map(r => (
              <span key={r} style={{ fontSize: '12px', fontWeight: 600, padding: '5px 14px', borderRadius: '100px', background: '#1A1028', border: '1px solid #3E3050', color: '#C4A8CC' }}>{r}</span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export function WorkExperience() {
  return (
    <section id="work" style={{ background: '#16161E', padding: '96px 0' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '12px' }}>Experience</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#EEE8F5', lineHeight: 1.1 }}>
              Where I&apos;ve <em style={{ fontStyle: 'italic', color: '#C4A8CC' }}>Worked</em>
            </h2>
          </div>
        </FadeIn>

        {experiences.map((exp, i) => (
          <ExperienceEntry key={exp.company} exp={exp} isLast={i === experiences.length - 1} />
        ))}

        {/* Currently active indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '52px', marginTop: '-4px' }}>
          <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', color: '#8A8A98', fontStyle: 'italic' }}>Currently active at Zobha Skincare</span>
        </div>

      </div>
    </section>
  )
}
