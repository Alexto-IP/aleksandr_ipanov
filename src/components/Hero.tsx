import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pt-24">
      <div className="reveal grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint-cyanDim">
            // паспорт специалиста
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-blueprint-paper md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl text-blueprint-cyan md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-blueprint-dim">{profile.summary}</p>

          <dl className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 border-t border-blueprint-line pt-6 font-mono text-xs">
            <div>
              <dt className="text-blueprint-cyanDim">СТАТУС</dt>
              <dd className="mt-1 text-blueprint-paper">{profile.status}</dd>
            </div>
            <div>
              <dt className="text-blueprint-cyanDim">ОПЫТ</dt>
              <dd className="mt-1 text-blueprint-paper">{profile.experienceYears}</dd>
            </div>
            <div>
              <dt className="text-blueprint-cyanDim">ДОСТУПНОСТЬ</dt>
              <dd className="mt-1 text-blueprint-amber">{profile.availability}</dd>
            </div>
          </dl>

          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-sm border border-blueprint-cyan/60 bg-blueprint-cyan/10 px-5 py-2.5 font-mono text-sm text-blueprint-cyan transition-colors hover:bg-blueprint-cyan/20"
            >
              Связаться
            </a>
            <a
              href="#projects"
              className="rounded-sm border border-blueprint-line px-5 py-2.5 font-mono text-sm text-blueprint-dim transition-colors hover:border-blueprint-cyanDim hover:text-blueprint-paper"
            >
              Смотреть проекты
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-40 w-40 shrink-0 md:h-48 md:w-48">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-blueprint-cyanDim/50">
            <rect x="4" y="4" width="192" height="192" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="14" y="14" width="172" height="172" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="absolute inset-4 h-[calc(100%-32px)] w-[calc(100%-32px)] rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  )
}
