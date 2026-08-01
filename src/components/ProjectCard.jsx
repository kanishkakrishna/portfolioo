import { motion } from 'framer-motion'
import { Github, ArrowUpRight, Radar, Compass } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import GlassCard from './ui/GlassCard.jsx'
import Button from './ui/Button.jsx'

const accentMap = {
  indigo: {
    gradient: 'from-indigo-500/40 via-indigo-500/10 to-transparent',
    text: 'text-indigo-400',
    dot: 'bg-indigo-500',
  },
  violet: {
    gradient: 'from-violet-500/40 via-violet-500/10 to-transparent',
    text: 'text-violet-400',
    dot: 'bg-violet-500',
  },
}

const iconMap = {
  'ride-matching': Radar,
  'khojindia-ai': Compass,
}

export default function ProjectCard({ project, index }) {
  const accent = accentMap[project.accent]
  const Icon = iconMap[project.id] ?? Radar
  const reversed = index % 2 === 1

  return (
    <Reveal delay={0.05}>
      <GlassCard className="overflow-hidden p-0" hover={false}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          {/* Large visual */}
          <div
            className={`relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br ${accent.gradient} lg:min-h-[420px] [direction:ltr]`}
          >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:h-40 sm:w-40"
            >
              <Icon size={56} className={accent.text} strokeWidth={1.5} />
            </motion.div>
            <span className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400">
              0{index + 1} / Featured Build
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-5 p-8 [direction:ltr] sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-mist-100 sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-mist-400 sm:text-base">{project.summary}</p>
            </div>

            <p className="text-sm leading-relaxed text-mist-400">{project.description}</p>

            <ul className="flex flex-col gap-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-mist-300">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={project.github} target="_blank" rel="noreferrer" icon={Github} variant="glass">
                GitHub
              </Button>
              {project.demo && (
                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  icon={ArrowUpRight}
                  iconPosition="right"
                  variant="solid"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  )
}
