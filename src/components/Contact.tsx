import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow={t.sections.contact.eyebrow} title={t.sections.contact.title} />

      <p className="reveal mt-6 max-w-xl text-blueprint-dim">{t.sections.contact.intro}</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {t.contacts.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex items-center justify-between rounded-sm border border-blueprint-line px-5 py-4 transition-colors hover:border-blueprint-cyanDim"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-blueprint-cyanDim">{c.label}</p>
              <p className="mt-1 text-sm text-blueprint-paper">{c.value}</p>
            </div>
            <span className="font-mono text-blueprint-dim group-hover:text-blueprint-cyan">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
