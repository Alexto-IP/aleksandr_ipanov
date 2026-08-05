import { useLanguage } from '../i18n/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-blueprint-line/60 bg-blueprint-panel/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {t.stats.map((s, i) => (
          <div key={i} className="reveal bg-blueprint-bg px-6 py-8" style={{ animationDelay: `${i * 80}ms` }}>
            <p className="font-mono text-3xl font-medium text-blueprint-cyan">
              {s.value}
              <span className="ml-1 text-base text-blueprint-cyanDim">{s.unit}</span>
            </p>
            <p className="mt-2 text-xs leading-snug text-blueprint-dim">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
