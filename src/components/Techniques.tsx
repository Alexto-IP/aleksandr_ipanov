import { useState } from 'react'
import type { ComponentType } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from './SectionHeading'
import DebounceDemo from './demos/DebounceDemo'
import MemoDemo from './demos/MemoDemo'
import StreamDemo from './demos/StreamDemo'
import OptimisticDemo from './demos/OptimisticDemo'
import SpotlightDemo from './demos/SpotlightDemo'
import TokensDemo from './demos/TokensDemo'
import ContainerDemo from './demos/ContainerDemo'

const demos: Record<string, ComponentType> = {
  debounce: DebounceDemo,
  memo: MemoDemo,
  stream: StreamDemo,
  optimistic: OptimisticDemo,
  spotlight: SpotlightDemo,
  tokens: TokensDemo,
  container: ContainerDemo,
}

type Tab = 'react' | 'frontend'

export default function Techniques() {
  const { t } = useLanguage()
  const tech = t.techniques
  const [tab, setTab] = useState<Tab>('react')
  const items = tech[tab]

  return (
    <section id="techniques" className="border-y border-line/70 bg-panel/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow={tech.eyebrow} title={tech.title} />
        <p className="reveal mt-5 max-w-2xl leading-relaxed text-muted">{tech.intro}</p>

        <div role="tablist" aria-label={tech.title} className="mt-8 inline-flex rounded-full border border-line bg-bg p-1 text-sm">
          {(['react', 'frontend'] as const).map((id) => (
            <button
              key={id}
              role="tab"
              type="button"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls="techniques-panel"
              onClick={() => setTab(id)}
              className={`rounded-full px-5 py-1.5 font-medium transition-colors ${
                tab === id ? 'bg-solid text-onsolid' : 'text-muted hover:text-ink'
              }`}
            >
              {tech.tabs[id]}
            </button>
          ))}
        </div>

        <div id="techniques-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item, i) => {
            const Demo = demos[item.id]
            return (
              <article
                key={`${tab}-${item.id}`}
                className="reveal flex flex-col rounded-2xl border border-line bg-bg p-6"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <h3 className="text-base font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <div className="mt-5 flex-1 rounded-xl border border-line bg-panel/60 p-4">{Demo && <Demo />}</div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
