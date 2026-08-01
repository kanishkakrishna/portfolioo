import { Trophy, Code2, Users, Award, ArrowUpRight } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import GlassCard from './ui/GlassCard.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import StatCounter from './ui/StatCounter.jsx'
import { achievements, stats } from '../data/portfolio.js'

const iconMap = {
  Codeforces: Code2,
  LeetCode: Trophy,
  Hackathon: Users,
  Olympiad: Award,
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Track Record"
          title="Achievements"
          description="Competitive programming, hackathons, and academic recognition — measured in numbers, not adjectives."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.category] ?? Trophy
            const Wrapper = a.link ? 'a' : 'div'
            return (
              <Reveal key={a.category} delay={i * 0.08}>
                <GlassCard as={Wrapper} {...(a.link ? { href: a.link, target: '_blank', rel: 'noreferrer' } : {})} className="flex h-full flex-col justify-between gap-6 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    {a.link && <ArrowUpRight size={16} className="text-mist-400" />}
                  </div>
                  <div>
                    <p className="font-mono text-2xl font-semibold text-mist-100">{a.stat}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.1em] text-mist-400">{a.statLabel}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-mist-400">{a.detail}</p>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <GlassCard className="grid grid-cols-2 gap-8 p-8 sm:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
