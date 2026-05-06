export function SectionHeader({ tag, title, highlight, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && (
        <span className="inline-block text-pink text-xs font-bold uppercase tracking-[3px] mb-3">
          {tag}
        </span>
      )}
      <h2
        className="font-playfair text-4xl md:text-5xl font-black leading-tight mb-3"
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      <div
        className={`h-1 w-14 rounded-full bg-gradient-to-r from-rose to-violet mb-5 ${center ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl" style={center ? { margin: '0 auto' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
