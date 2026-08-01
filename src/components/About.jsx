import Reveal from './ui/Reveal.jsx'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 — Background" title={about.heading} />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-mist-400 sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <GlassCard className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-1">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist-400">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-mist-100 sm:text-base">{fact.value}</p>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
