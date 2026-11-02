import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-y border-line/70 bg-panel/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow={t.sections.skills.eyebrow} title={t.sections.skills.title} />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {t.skillGroups.map((group, i) => (
            <div key={group.title} className="reveal" style={{ animationDelay: `${i * 70}ms` }}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm text-ink">
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
