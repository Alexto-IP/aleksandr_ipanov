import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow={t.sections.contact.eyebrow} title={t.sections.contact.title} />
      <p className="reveal mt-5 max-w-xl text-muted">{t.sections.contact.intro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {t.contacts.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center justify-between rounded-2xl border border-line px-6 py-5 transition-colors hover:border-accent/60"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
              <p className="mt-1 truncate text-sm text-ink">{c.value}</p>
            </div>
            <span className="ml-3 text-muted transition-colors group-hover:text-accent">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
