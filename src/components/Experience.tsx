import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

function CompanyMark({ name, logo }: { name: string; logo?: string }) {
  // Подложка всегда белая: логотипы тёмные и должны читаться в обеих темах
  return (
    <div className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl bg-white px-2 ring-1 ring-line">
      {logo ? (
        <img src={`${import.meta.env.BASE_URL}${logo}`} alt={name} className="h-6 w-auto max-w-[72px] object-contain" />
      ) : (
        <span className="text-base font-semibold text-[#490000]" aria-hidden="true">
          {name.charAt(0)}
        </span>
      )}
    </div>
  )
}

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow={t.sections.experience.eyebrow} title={t.sections.experience.title} />

      <div className="mt-12 divide-y divide-line/70">
        {t.experience.map((job, i) => (
          <article
            key={i}
            className="reveal grid gap-4 py-10 first:pt-0 md:grid-cols-[190px_1fr] md:gap-10"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="text-sm text-muted">
              <p>{job.period}</p>
              <p className="mt-1 text-xs">{job.duration}</p>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <CompanyMark name={job.company} logo={job.logo} />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{job.role}</h3>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                    <span>{job.company}</span>
                    {job.location && <span>· {job.location}</span>}
                    {job.note && (
                      <span className="rounded-full border border-accent/40 px-2 py-0.5 text-xs text-accent">{job.note}</span>
                    )}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl leading-relaxed text-muted">{job.summary}</p>

              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink/90">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
