import { Mail, Github, Linkedin, Code2, Phone } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import GlassCard from './ui/GlassCard.jsx'
import Button from './ui/Button.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { profile } from '../data/portfolio.js'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, icon: Phone },
  { label: 'GitHub', value: 'View profile', href: profile.links.github, icon: Github },
  { label: 'LinkedIn', value: 'View profile', href: profile.links.linkedin, icon: Linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="05 — Get In Touch"
          title="Let's build something reliable."
          description="Open to Software Engineering roles and interesting backend/AI problems. Fastest way to reach me is email."
        />

        <Reveal delay={0.1} className="mt-12">
          <GlassCard className="mx-auto max-w-3xl p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <Button href={`mailto:${profile.email}`} icon={Mail} variant="solid" className="text-base">
                {profile.email}
              </Button>

              <div className="grid w-full grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <c.icon size={18} className="text-mist-400 transition-colors group-hover:text-indigo-400" />
                    <span className="font-mono text-[11px] text-mist-400 group-hover:text-mist-100">
                      {c.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <a
            href={profile.links.codeforces}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-mist-400 hover:text-indigo-400"
          >
            <Code2 size={14} />
            Competitive programming profiles on Codeforces & LeetCode
          </a>
        </Reveal>
      </div>
    </section>
  )
}
