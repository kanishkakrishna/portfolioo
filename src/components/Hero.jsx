import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, FileDown } from 'lucide-react'
import Button from './ui/Button.jsx'
import GlassCard from './ui/GlassCard.jsx'
import { profile, stats } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-20 sm:px-10 lg:px-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-7">
          <motion.div
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
            </span>
            <span className="text-signal-green">Open to Software Engineering roles</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-mist-100 sm:text-5xl md:text-6xl"
          >
            {profile.name}
            <span className="block text-gradient">{profile.role}</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <Button href={profile.links.resume} target="_blank" rel="noreferrer" icon={FileDown} variant="solid">
              Resume
            </Button>
            <Button href={profile.links.github} target="_blank" rel="noreferrer" icon={Github} variant="glass">
              GitHub
            </Button>
            <Button href={profile.links.linkedin} target="_blank" rel="noreferrer" icon={Linkedin} variant="glass">
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        {/* Signature element: live dev-stats terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm animate-float-slow"
        >
          <GlassCard className="p-5" hover={false}>
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 font-mono text-[11px] text-mist-400">status.sh</span>
            </div>
            <div className="space-y-2.5 font-mono text-[13px] text-mist-300">
              <p>
                <span className="text-signal-green">➜</span> whoami
              </p>
              <p className="text-mist-100">{profile.name}</p>
              <p>
                <span className="text-signal-green">➜</span> location
              </p>
              <p className="text-mist-100">{profile.location}</p>
              <p>
                <span className="text-signal-green">➜</span> fetch --stats
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-xl font-semibold text-mist-100">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-[11px] text-mist-400">{s.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <motion.div
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/30 blur-3xl animate-float-slower"
            aria-hidden
          />
          <motion.div
            className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl animate-float-slow"
            aria-hidden
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-400 sm:flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowUpRight size={16} className="rotate-90" />
      </motion.a>
    </section>
  )
}
