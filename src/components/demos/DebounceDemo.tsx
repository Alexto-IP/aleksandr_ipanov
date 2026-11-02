import { useMemo, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'

const ITEMS = ['React', 'Redux Toolkit', 'TypeScript', 'Vue', 'MUI', 'Vite', 'FastAPI', 'Express', 'Docker', 'GitHub Actions', 'Jinja', 'SQLite']

export default function DebounceDemo() {
  const ui = useLanguage().t.techniques.ui
  const [query, setQuery] = useState('')
  const debounced = useDebouncedValue(query, 350)

  const results = useMemo(
    () => ITEMS.filter((i) => i.toLowerCase().includes(debounced.trim().toLowerCase())),
    [debounced],
  )

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={ui.searchPlaceholder}
        aria-label={ui.searchPlaceholder}
        className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
      />
      <p className="mt-2 text-[11px] text-muted">
        {ui.typed}: <span className="text-ink">"{query}"</span> · {ui.applied}:{' '}
        <span className="text-accent">"{debounced}"</span>
      </p>
      <div className="mt-3 flex min-h-[2rem] flex-wrap gap-2">
        {results.length ? (
          results.map((r) => (
            <span key={r} className="rounded-lg border border-line px-2 py-1 text-[11px] text-muted">
              {r}
            </span>
          ))
        ) : (
          <span className="text-xs text-muted">{ui.nothing}</span>
        )}
      </div>
    </div>
  )
}
