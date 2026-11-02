import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTelemetry } from '../../hooks/useTelemetry'

const W = 280
const H = 72

export default function StreamDemo() {
  const ui = useLanguage().t.techniques.ui
  const [running, setRunning] = useState(true)
  const points = useTelemetry(running)

  const min = 32
  const max = 40
  const path = points
    .map((v, i) => {
      const x = (i / (points.length - 1)) * W
      const y = H - ((v - min) / (max - min)) * H
      return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">{ui.sensor}</span>
        <span className="text-xl text-accent">{points[points.length - 1].toFixed(1)}</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 h-20 w-full overflow-visible text-accent" role="img" aria-label={ui.sensor}>
        <path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <button
        type="button"
        onClick={() => setRunning((r) => !r)}
        className="mt-3 rounded-full border border-line px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {running ? ui.pause : ui.start}
      </button>
    </div>
  )
}
