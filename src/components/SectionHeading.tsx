interface Props {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="reveal">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueprint-cyanDim">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-blueprint-paper">{title}</h2>
      <div className="mt-4 h-px w-16 bg-blueprint-cyan/60" />
    </div>
  )
}
