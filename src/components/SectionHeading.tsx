interface Props {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="reveal">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow.replace(/^\/\/\s*/, '')}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
    </div>
  )
}
