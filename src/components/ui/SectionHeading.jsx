import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400/90">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-mist-100 tracking-tight">
        {title}
      </h2>
      {description && <p className="text-mist-400 text-base sm:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  )
}
