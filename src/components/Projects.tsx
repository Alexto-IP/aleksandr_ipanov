import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow={t.sections.projects.eyebrow} title={t.sections.projects.title} />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {t.projects.map((p, i) => (
          <div
            key={p.name}
            className="reveal group flex flex-col rounded-2xl border border-line p-6 transition-colors hover:border-accent/60"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <h3 className="text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            {(p.href || p.demoHref) && (
              <div className="mt-5 flex gap-5 text-sm">
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
                    {t.projectLabels.repo} ↗
                  </a>
                )}
                {p.demoHref && (
                  <a href={p.demoHref} target="_blank" rel="noreferrer" className="font-medium text-accent transition-opacity hover:opacity-70">
                    {t.projectLabels.demo} ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
