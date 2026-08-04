import { education } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="// образование" title="Образование и квалификация" />

      <div className="mt-10 space-y-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="reveal flex flex-col gap-1 border-b border-blueprint-line/60 pb-6 sm:flex-row sm:items-baseline sm:justify-between"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div>
              <h3 className="font-display text-lg text-blueprint-paper">{e.degree}</h3>
              <p className="mt-1 text-sm text-blueprint-dim">{e.school}</p>
              <p className="text-sm text-blueprint-dim">{e.faculty}</p>
              {e.href && (
                <a
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-mono text-xs text-blueprint-cyan hover:text-blueprint-cyanDim"
                >
                  {e.hrefLabel ?? 'Подробнее →'}
                </a>
              )}
            </div>
            <span className="whitespace-nowrap font-mono text-xs text-blueprint-cyanDim">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
