import { profile } from '../data/resume'

const NAV = [
  { label: 'Опыт', href: '#experience' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Образование', href: '#education' },
  { label: 'Контакты', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-blueprint-line/60 bg-blueprint-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-blueprint-cyan">
          A.IPANOV
        </a>
        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-wider text-blueprint-dim md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-blueprint-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 font-mono text-xs text-blueprint-dim">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blueprint-amber/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blueprint-amber" />
          </span>
          {profile.availability}
        </div>
      </div>
    </header>
  )
}
