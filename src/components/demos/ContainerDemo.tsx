import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ContainerDemo() {
  const ui = useLanguage().t.techniques.ui
  const [width, setWidth] = useState(240)

  return (
    <div>
      <label className="flex items-center gap-3 text-xs text-muted">
        {ui.width}
        <input
          type="range"
          min={200}
          max={420}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="flex-1 accent-[rgb(var(--accent))]"
        />
        <span className="w-12 text-right text-ink">{width}px</span>
      </label>
      <div className="cq-wrap mt-4" style={{ width }}>
        <div className="cq-card">
          <div className="cq-thumb" aria-hidden="true" />
          <div>
            <p className="font-medium text-sm text-ink">{ui.cardTitle}</p>
            <p className="mt-1 text-[11px] text-muted">{ui.cardText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
