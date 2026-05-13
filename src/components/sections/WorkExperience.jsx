import { useEffect, useRef } from 'react'
import { FadeIn } from '../ui/FadeIn'
import { Check, MapPin, Wrench, Lightbulb } from 'lucide-react'

const experiences = [
  {
    title: 'Social Media Manager',
    company: 'Zobha Skincare Brand',
    period: '2024 – 2025',
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
    company: 'Ardas',
    period: '2025 – November 2025',
    type: 'Full-time',
    current: false,
    description: 'Worked on improving website visibility, content optimization, and search performance through strategic SEO practices and digital marketing support.',
    tasks: [
      'Conducted keyword research for targeted content strategy',
      'Optimized meta titles, descriptions, and website structure',
      'Worked on on-page SEO and content readability',
      'Assisted with website audits and competitor analysis',
      'Supported organic growth strategies for brand visibility',
      'Managed SEO-focused content improvements',
    ],
    tools: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Ubersuggest', 'Yoast SEO'],
    skills: ['On-Page SEO', 'Keyword Research', 'Technical SEO Basics', 'Content Optimization', 'SEO Audits', 'Competitor Research', 'Organic Growth Strategy'],
    caseStudy: {
      title: 'Website Optimization Project',
      desc: 'Improved website structure and content organization using SEO-focused practices.',
      focus: ['Keyword placement optimization', 'Meta tag enhancement', 'Content readability improvement', 'Internal linking structure', 'Search visibility support'],
    },
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

          {exp.description && (
            <p style={{ fontSize: '13.5px', color: '#9090A8', lineHeight: 1.7, marginTop: '10px' }}>{exp.description}</p>
          )}

          <div style={{ height: '1px', background: '#28283A', margin: '20px 0' }} />

          <div className="grid sm:grid-cols-2 gap-3" style={{ marginBottom: '22px' }}>
            {exp.tasks.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', color: '#C0C0D0', fontSize: '14px', lineHeight: 1.55 }}>
                <Check size={13} style={{ color: '#C4A8CC', marginTop: '3px', flexShrink: 0 }} />{t}
              </div>
            ))}
          </div>

          {/* Tools & Skills */}
          {(exp.tools || exp.skills) && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '22px' }}>
              {exp.tools && (
                <div style={{ background: '#1A1028', border: '1px solid #2E2040', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
                    <Wrench size={12} style={{ color: '#C4A8CC' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C4A8CC' }}>SEO Tools</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.tools.map(tool => (
                      <span key={tool} style={{ fontSize: '12.5px', color: '#C0C0D0' }}>· {tool}</span>
                    ))}
                  </div>
                </div>
              )}
              {exp.skills && (
                <div style={{ background: '#1A1028', border: '1px solid #2E2040', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
                    <Lightbulb size={12} style={{ color: '#C4A8CC' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C4A8CC' }}>Skills</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.skills.map(skill => (
                      <span key={skill} style={{ fontSize: '12.5px', color: '#C0C0D0' }}>· {skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mini Case Study */}
          {exp.caseStudy && (
            <div style={{ background: 'rgba(196,168,204,0.05)', border: '1px solid rgba(196,168,204,0.18)', borderRadius: '12px', padding: '18px 20px', marginBottom: '22px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C4A8CC', display: 'block', marginBottom: '6px' }}>Mini Case Study</span>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#EEE8F5', marginBottom: '5px' }}>{exp.caseStudy.title}</h4>
              <p style={{ fontSize: '12.5px', color: '#9090A8', lineHeight: 1.6, marginBottom: '12px' }}>{exp.caseStudy.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.caseStudy.focus.map(f => (
                  <span key={f} style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '100px', background: 'rgba(196,168,204,0.1)', border: '1px solid rgba(196,168,204,0.2)', color: '#C4A8CC' }}>{f}</span>
                ))}
              </div>
            </div>
          )}

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

      
      </div>
    </section>
  )
}
