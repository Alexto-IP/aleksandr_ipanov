import { useEffect, useState } from 'react'

/** Возвращает value с задержкой: обновляется только после паузы в `delay` мс. */
export function useDebouncedValue<T>(value: T, delay = 350): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id) // cleanup: сбрасываем таймер при каждом новом значении
  }, [value, delay])

  return debounced
}
