import { useLanguage } from '../i18n/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-line/70">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4 md:divide-x md:divide-line/70">
        {t.stats.map((s, i) => (
          <div key={i} className="reveal md:px-6 md:first:pl-0" style={{ animationDelay: `${i * 70}ms` }}>
            <p className="text-4xl font-semibold tracking-tight text-ink">
              {s.value}
              <span className="ml-1 text-base font-medium text-accent">{s.unit}</span>
            </p>
            <p className="mt-2 text-xs leading-snug text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
