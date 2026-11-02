import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { content, type ContentBundle, type Lang } from '../data/content'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: ContentBundle
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'preferred-lang'

// Страны/регионы, где русский — основной или широко распространённый язык общения.
// Используется как эвристика при автоопределении языка по IP и по таймзоне.
const RU_SPEAKING_COUNTRIES = new Set(['RU', 'BY', 'KZ', 'KG', 'UZ', 'TJ', 'TM', 'AM', 'AZ', 'MD'])

const RU_TIMEZONES = new Set([
  'Europe/Moscow', 'Europe/Kaliningrad', 'Europe/Samara', 'Europe/Volgograd', 'Europe/Saratov',
  'Europe/Astrakhan', 'Europe/Kirov', 'Europe/Ulyanovsk', 'Asia/Yekaterinburg', 'Asia/Omsk',
  'Asia/Novosibirsk', 'Asia/Barnaul', 'Asia/Tomsk', 'Asia/Novokuznetsk', 'Asia/Krasnoyarsk',
  'Asia/Irkutsk', 'Asia/Chita', 'Asia/Yakutsk', 'Asia/Khandyga', 'Asia/Vladivostok',
  'Asia/Ust-Nera', 'Asia/Magadan', 'Asia/Sakhalin', 'Asia/Srednekolymsk', 'Asia/Kamchatka',
  'Asia/Anadyr', 'Europe/Minsk', 'Asia/Almaty', 'Asia/Qyzylorda', 'Asia/Qostanay',
  'Asia/Aqtobe', 'Asia/Aqtau', 'Asia/Atyrau', 'Asia/Oral', 'Asia/Bishkek', 'Asia/Dushanbe',
  'Asia/Ashgabat', 'Asia/Samarkand', 'Asia/Tashkent', 'Asia/Yerevan', 'Asia/Baku',
  'Europe/Chisinau',
])

/** Быстрая синхронная догадка — по языку браузера, затем по таймзоне. Нужна, чтобы
 *  не было "мигания" английского текста до ответа сервиса геолокации. */
function detectFromBrowser(): Lang {
  if (typeof navigator !== 'undefined') {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language]
    if (langs.some((l) => l?.toLowerCase().startsWith('ru'))) return 'ru'
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (RU_TIMEZONES.has(tz)) return 'ru'
  } catch {
    // Intl недоступен — просто идём дальше
  }
  return 'en'
}

/** Определение языка по региону через IP (без ключа API). При недоступности сети
 *  или тайм-ауте — тихо возвращает null, и остаётся синхронная догадка. */
async function detectFromIP(): Promise<Lang | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 2500)
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal })
    clearTimeout(timeout)
    if (!res.ok) return null
    const data = await res.json()
    const code = (data?.country_code as string | undefined)?.toUpperCase()
    if (!code) return null
    return RU_SPEAKING_COUNTRIES.has(code) ? 'ru' : 'en'
  } catch {
    return null
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'ru'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en') return saved
    return detectFromBrowser()
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // localStorage может быть недоступен (приватный режим и т.п.) — не критично
    }
  }

  const toggleLang = () => setLang(lang === 'ru' ? 'en' : 'ru')

  // Уточняем язык по IP-региону только если пользователь ещё не делал осознанный выбор
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en') return
    let cancelled = false
    detectFromIP().then((detected) => {
      if (detected && !cancelled) setLangState(detected)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: content[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
