import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow={t.sections.projects.eyebrow} title={t.sections.projects.title} />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {t.projects.map((p, i) => (
          <div
            key={p.name}
            className="scan-line reveal group rounded-sm border border-blueprint-line bg-blueprint-panel/40 p-6 transition-colors hover:border-blueprint-cyanDim"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-mono text-base text-blueprint-paper group-hover:text-blueprint-cyan">
                {p.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-blueprint-dim">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span key={tech} className="rounded-sm border border-blueprint-line px-2 py-0.5 font-mono text-[11px] text-blueprint-cyanDim">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 border-t border-blueprint-line/60 pt-4 font-mono text-xs">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-blueprint-dim transition-colors hover:text-blueprint-cyan"
                >
                  {t.projectLabels.repo} <span>↗</span>
                </a>
              )}
              {p.demoHref && (
                <a
                  href={p.demoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-blueprint-amber transition-colors hover:text-blueprint-cyan"
                >
                  {t.projectLabels.demo} <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
