import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

function ContactIcon({ label }: { label: string }) {
  const common = 'h-6 w-6'
  if (label === 'GitHub') return <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.13 3.72 1.62.1-.72.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" /></svg>
  if (label === 'LinkedIn') return <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true"><path d="M5.2 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.8H3.4V9Zm5.9 0h3.5v1.6h.05c.49-.92 1.68-1.9 3.46-1.9 3.7 0 4.38 2.43 4.38 5.6v6.5h-3.7V15c0-1.39-.02-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08v5.9H9.3V9Z" /></svg>
  if (label === 'Telegram') return <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true"><path d="M21.7 4.1 18.5 20c-.24 1.12-.88 1.4-1.78.88l-4.92-3.63-2.38 2.3c-.26.26-.48.48-.98.48l.35-5.02 9.14-8.26c.4-.35-.09-.55-.62-.2L6.01 13.7l-4.85-1.52c-1.06-.33-1.08-1.06.22-1.57L20.34 3.4c.88-.32 1.65.2 1.36.7Z" /></svg>
  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
}

export default function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow={t.sections.contact.eyebrow} title={t.sections.contact.title} />
      <p className="reveal mt-5 max-w-xl text-muted">{t.sections.contact.intro}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {t.contacts.map((c, i) => (
          <a key={c.label} href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className="reveal group flex items-center gap-4 rounded-2xl border border-line px-6 py-5 transition-colors hover:border-accent/60" style={{ animationDelay: `${i * 70}ms` }}>
            <span className="text-muted transition-colors group-hover:text-accent"><ContactIcon label={c.label} /></span>
            <div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-wider text-muted">{c.label}</p><p className="mt-1 truncate text-sm text-ink">{c.value}</p></div>
            <span className="text-muted transition-colors group-hover:text-accent">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
