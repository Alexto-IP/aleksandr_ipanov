/** Фрагменты кода для секции «Приёмы». Ключ = id приёма. */
export const snippets: Record<string, string> = {
  debounce: `function useDebouncedValue<T>(value: T, delay = 350): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id) // cleanup при каждом новом значении
  }, [value, delay])

  return debounced
}

const debounced = useDebouncedValue(query, 350)
const results = useMemo(() => filter(items, debounced), [debounced])`,

  memo: `const MemoChild = memo(Child)

function Parent() {
  const [ticks, setTicks] = useState(0)

  const unstable = () => {}              // новая ссылка → memo не спасает
  const stable = useCallback(() => {}, []) // та же ссылка → ререндера нет

  return <MemoChild onSelect={stable} />
}`,

  stream: `function useTelemetry(running: boolean, intervalMs = 700) {
  const [points, setPoints] = useState<number[]>(initial)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setPoints((prev) => [...prev.slice(1), nextValue(prev)])
    }, intervalMs)
    return () => clearInterval(id) // пауза и размонтирование
  }, [running, intervalMs])

  return points
}`,

  optimistic: `const like = async () => {
  const previous = likes
  setLikes(previous + 1)        // 1. UI обновляется мгновенно
  try {
    await api.like()            // 2. подтверждение сервера
  } catch {
    setLikes(previous)          // 3. откат при ошибке
    showError()
  }
}`,

  spotlight: `const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
  const r = ref.current!.getBoundingClientRect()
  ref.current!.style.setProperty('--x', e.clientX - r.left + 'px')
  ref.current!.style.setProperty('--y', e.clientY - r.top + 'px')
}

/* CSS */
.spotlight {
  background: radial-gradient(
    200px circle at var(--x, 50%) var(--y, 50%),
    rgba(79, 195, 224, 0.25), transparent 70%
  );
}`,

  tokens: `/* один источник правды */
.theme { --accent: #4FC3E0; }

.btn   { background: var(--accent); }
.badge { border-color: var(--accent); color: var(--accent); }
.card  { box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent); }

// React: меняем одну переменную
<div style={{ '--accent': accent } as CSSProperties}>`,

  container: `.wrap { container-type: inline-size; }

.card { display: flex; flex-direction: column; }

/* реагирует на ширину .wrap, а не окна браузера */
@container (min-width: 340px) {
  .card { flex-direction: row; align-items: center; }
}`,
}
