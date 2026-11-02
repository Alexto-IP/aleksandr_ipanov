import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="border-y border-line/70 bg-panel/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow={t.sections.certificates.eyebrow} title={t.sections.certificates.title} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.certificates.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${c.name} — ${t.certificatesLabels.view}`}
              className="reveal group flex flex-col rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-accent/60"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="text-xs text-muted">
                {t.certificatesLabels.issued}: {c.date}
              </p>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                {c.name}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted">{c.issuer}</p>
              <span className="mt-5 text-sm font-medium text-accent">{t.certificatesLabels.view} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
