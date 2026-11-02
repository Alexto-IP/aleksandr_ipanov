import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

export default function SpotlightDemo() {
  const ui = useLanguage().t.techniques.ui
  const ref = useRef<HTMLDivElement>(null)

  // Никакого useState: пишем координаты прямо в CSS-переменные — React не перерисовывается
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className="spotlight flex h-40 items-center justify-center rounded-lg border border-line"
    >
      <span className="relative text-xs text-muted">{ui.spotlightHint}</span>
    </div>
  )
}
