import { skillGroups } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-blueprint-line/60 bg-blueprint-panel/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="// стек" title="Навыки" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div key={group.title} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-blueprint-cyanDim">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-blueprint-line bg-blueprint-bg px-3 py-1 text-sm text-blueprint-paper/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
