import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

/** Считает коммиты компонента и пишет число напрямую в DOM (сам счётчик не вызывает рендеров). */
function useRenderCounter() {
  const count = useRef(0)
  const el = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    count.current += 1
    if (el.current) el.current.textContent = String(count.current)
  })
  return el
}

interface ChildProps {
  label: string
  unit: string
  onSelect: () => void
  highlight?: boolean
}

function ChildView({ label, unit, onSelect, highlight }: ChildProps) {
  const counter = useRenderCounter()
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`rounded-lg border p-3 text-left text-xs transition-colors ${
        highlight ? 'border-accent/50 bg-accent/5' : 'border-line'
      }`}
    >
      <span className="block text-muted">{label}</span>
      <span className="mt-1 block text-2xl text-ink">
        <span ref={counter}>1</span>
      </span>
      <span className="text-muted">{unit}</span>
    </button>
  )
}

const MemoChild = memo(ChildView)

export default function MemoDemo() {
  const ui = useLanguage().t.techniques.ui
  const [ticks, setTicks] = useState(0)

  const noop = () => {} // новая ссылка на каждом рендере родителя → memo бесполезен
  const stableNoop = useCallback(() => {}, []) // стабильная ссылка → memo работает

  return (
    <div>
      <button
        type="button"
        onClick={() => setTicks((n) => n + 1)}
        className="rounded-full bg-solid px-4 py-2 text-xs font-medium text-onsolid transition-opacity hover:opacity-85"
      >
        {ui.rerenderParent} ({ticks})
      </button>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <MemoChild label={ui.plainChild} unit={ui.renders} onSelect={noop} />
        <MemoChild label={ui.memoChild} unit={ui.renders} onSelect={stableNoop} highlight />
      </div>
    </div>
  )
}
