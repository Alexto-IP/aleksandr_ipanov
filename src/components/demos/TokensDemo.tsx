import { useState } from 'react'
import type { CSSProperties } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

const ACCENTS = ['#490000', '#1F4E79', '#2F6B4F', '#7A4E00']

export default function TokensDemo() {
  const ui = useLanguage().t.techniques.ui
  const [accent, setAccent] = useState(ACCENTS[0])

  return (
    <div style={{ '--accent': accent } as CSSProperties}>
      <div className="flex items-center gap-2" role="group" aria-label={ui.pickAccent}>
        <span className="mr-2 text-xs text-muted">{ui.pickAccent}</span>
        {ACCENTS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setAccent(c)}
            aria-label={c}
            aria-pressed={accent === c}
            className="h-6 w-6 rounded-full border-2 transition-transform hover:scale-110"
            style={{ background: c, borderColor: accent === c ? 'rgb(var(--ink))' : 'transparent' }}
          />
        ))}
      </div>
      <div className="token-preview mt-4 flex flex-wrap items-center gap-3">
        <button type="button" className="token-btn">{ui.previewButton}</button>
        <span className="token-badge">{ui.previewBadge}</span>
        <div className="token-card">{ui.previewCard}</div>
      </div>
    </div>
  )
}
