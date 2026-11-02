import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow={t.sections.education.eyebrow} title={t.sections.education.title} />

      <div className="mt-12 divide-y divide-line/70">
        {t.education.map((e, i) => (
          <div
            key={i}
            className="reveal flex flex-col gap-2 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-ink">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted">{e.school}</p>
              <p className="text-sm text-muted">{e.faculty}</p>
              {e.href && (
                <a href={e.href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-70">
                  {e.hrefLabel ?? t.educationDefaultLink}
                </a>
              )}
            </div>
            <span className="whitespace-nowrap text-sm text-muted">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
