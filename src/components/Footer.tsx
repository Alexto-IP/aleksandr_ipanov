import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line/70 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {t.profile.name}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  )
}
