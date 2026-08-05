import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { t, lang, setLang } = useLanguage()

  return (
    <header className="sticky top-0 z-20 border-b border-blueprint-line/60 bg-blueprint-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-blueprint-cyan">
          A.IPANOV
        </a>
        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-wider text-blueprint-dim md:flex">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-blueprint-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div
            role="group"
            aria-label="Language / Язык"
            className="flex items-center rounded-sm border border-blueprint-line font-mono text-xs"
          >
            {(['ru', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-2.5 py-1 uppercase transition-colors ${
                  lang === code
                    ? 'bg-blueprint-cyan/15 text-blueprint-cyan'
                    : 'text-blueprint-dim hover:text-blueprint-paper'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-blueprint-dim sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blueprint-amber/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blueprint-amber" />
            </span>
            {t.profile.availability}
          </div>
        </div>
      </div>
    </header>
  )
}
