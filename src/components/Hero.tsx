import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const { profile, hero } = t

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
      <div className="reveal grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-xl text-accent md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.summary}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">{hero.statusLabel}</dt>
              <dd className="mt-1 text-ink">{profile.status}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">{hero.experienceLabel}</dt>
              <dd className="mt-1 text-ink">{profile.experienceYears}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-solid px-6 py-3 text-sm font-medium text-onsolid ring-1 ring-accent/30 transition-opacity hover:opacity-85"
            >
              {hero.contactCta}
            </a>
            <a
              href="#projects"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {hero.projectsCta}
            </a>
          </div>
        </div>

        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="mx-auto h-44 w-44 rounded-3xl object-cover ring-1 ring-line md:h-56 md:w-56"
        />
      </div>
    </section>
  )
}
