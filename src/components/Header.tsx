import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col text-sm font-semibold tracking-tight text-ink">
          <span>A.Ipanov</span>
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted">Frontend / Fullstack Development</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted md:flex">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div role="group" aria-label="Language / Язык" className="flex items-center rounded-full border border-line p-0.5 text-xs">
            {(['ru', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-3 py-1 font-medium uppercase transition-colors ${
                  lang === code ? 'bg-solid text-onsolid' : 'text-muted hover:text-ink'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.themeLabels.toLight : t.themeLabels.toDark}
            title={theme === 'dark' ? t.themeLabels.toLight : t.themeLabels.toDark}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
