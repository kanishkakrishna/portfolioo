import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-mist-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.</p>
        <p className="font-mono">Designed &amp; developed from scratch.</p>
      </div>
    </footer>
  )
}
