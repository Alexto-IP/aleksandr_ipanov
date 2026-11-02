import { useEffect, useState } from 'react'

/** Имитация потока данных с устройства (аналог WebSocket / polling). */
export function useTelemetry(running: boolean, intervalMs = 700, size = 28) {
  const [points, setPoints] = useState<number[]>(() => Array.from({ length: size }, () => 36))

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setPoints((prev) => {
        const next = Math.min(40, Math.max(32, prev[prev.length - 1] + (Math.random() - 0.5) * 1.2))
        return [...prev.slice(1), next] // функциональный апдейт — без устаревших замыканий
      })
    }, intervalMs)
    return () => clearInterval(id) // без cleanup интервал жил бы после паузы и размонтирования
  }, [running, intervalMs])

  return points
}
