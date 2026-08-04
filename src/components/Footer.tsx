export default function Footer() {
  return (
    <footer className="border-t border-blueprint-line/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-blueprint-dim sm:flex-row">
        <span>© {new Date().getFullYear()} Александр Ипанов</span>
        <span>сделано на React + TypeScript + Tailwind</span>
      </div>
    </footer>
  )
}
