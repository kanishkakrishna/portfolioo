import { motion } from 'framer-motion'
import Reveal from './ui/Reveal.jsx'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Toolbox"
          title="Skills"
          description="Languages, frameworks and infrastructure I reach for when turning a spec into a running system."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <GlassCard className="h-full p-6">
                <p className="font-display text-lg font-semibold text-mist-100">{group.title}</p>
                <p className="mt-1 text-sm text-mist-400">{group.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, borderColor: 'rgba(129,140,248,0.5)' }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-mist-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
