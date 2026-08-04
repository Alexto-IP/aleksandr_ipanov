import { experience } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="// компетенция" title="Опыт работы" />

      <div className="mt-10 space-y-10 border-l border-blueprint-line pl-8">
        {experience.map((job, i) => (
          <div key={i} className="reveal relative" style={{ animationDelay: `${i * 100}ms` }}>
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border border-blueprint-cyan bg-blueprint-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-xs text-blueprint-cyanDim">
              <span>{job.period}</span>
              <span>{job.duration}</span>
            </div>
            <h3 className="mt-2 font-display text-xl text-blueprint-paper">
              {job.role} · <span className="text-blueprint-dim">{job.company}</span>
            </h3>
            <p className="mt-1 font-mono text-xs text-blueprint-dim">{job.location}</p>
            <p className="mt-3 max-w-2xl text-sm text-blueprint-dim">{job.summary}</p>

            <ul className="mt-4 space-y-2 text-sm text-blueprint-paper/90">
              {job.highlights.map((h, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1 text-blueprint-amber">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-blueprint-line px-2 py-1 font-mono text-[11px] text-blueprint-cyanDim"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
