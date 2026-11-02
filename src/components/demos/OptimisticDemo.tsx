import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

type Status = 'idle' | 'saving' | 'saved' | 'error'

const fakeRequest = (fail: boolean) =>
  new Promise<void>((resolve, reject) => setTimeout(() => (fail ? reject(new Error('500')) : resolve()), 900))

export default function OptimisticDemo() {
  const ui = useLanguage().t.techniques.ui
  const [likes, setLikes] = useState(42)
  const [status, setStatus] = useState<Status>('idle')
  const [fail, setFail] = useState(false)
  const alive = useRef(true)

  useEffect(() => {
    alive.current = true
    return () => {
      alive.current = false
    }
  }, [])

  const like = async () => {
    const previous = likes
    setLikes(previous + 1) // 1. обновляем UI сразу
    setStatus('saving')
    try {
      await fakeRequest(fail) // 2. подтверждаем на сервере
      if (alive.current) setStatus('saved')
    } catch {
      if (alive.current) {
        setLikes(previous) // 3. при ошибке откатываемся
        setStatus('error')
      }
    }
  }

  const message = { idle: '', saving: ui.saving, saved: ui.saved, error: ui.rolledBack }[status]

  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={like}
          disabled={status === 'saving'}
          className="rounded-full bg-solid px-4 py-2 text-xs font-medium text-onsolid transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          ♥ {ui.like}
        </button>
        <span className="text-2xl text-ink">{likes}</span>
      </div>
      <p
        role="status"
        className={`mt-3 min-h-[1rem] text-[11px] ${status === 'error' ? 'text-accent' : 'text-muted'}`}
      >
        {message}
      </p>
      <label className="mt-3 flex cursor-pointer items-center gap-2 text-xs text-muted">
        <input type="checkbox" checked={fail} onChange={(e) => setFail(e.target.checked)} className="accent-[rgb(var(--accent))]" />
        {ui.serverError}
      </label>
    </div>
  )
}
