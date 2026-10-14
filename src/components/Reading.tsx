import { useEffect, useState } from 'react'
import type { Story } from '../types'

type Active = { word: string; rect: DOMRect }

const headword = (key: string) => key.split('#')[0]

export function Reading({ story }: { story: Story }) {
  const [active, setActive] = useState<Active | null>(null)

  useEffect(() => {
    if (!active) return
    const close = () => setActive(null)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const width = 224
  const left = active
    ? Math.min(
        Math.max(8, active.rect.left + active.rect.width / 2 - width / 2),
        window.innerWidth - width - 8,
      )
    : 0

  return (
    <div onClick={() => setActive(null)}>
      <p className="mb-4 text-sm text-muted">
        Tap an underlined word to see its meaning.
      </p>
      <div className="space-y-6 text-xl leading-10">
        {story.paragraphs.map((para, i) => (
          <p key={i} lang="ko">
            {para.map((seg, j) =>
              seg.word ? (
                <button
                  key={j}
                  type="button"
                  className="cursor-pointer underline decoration-accent/70 decoration-dotted underline-offset-4 hover:bg-accent/10 aria-expanded:bg-accent/20"
                  aria-expanded={active?.word === seg.word && undefined}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive({
                      word: seg.word!,
                      rect: e.currentTarget.getBoundingClientRect(),
                    })
                  }}
                >
                  {seg.text}
                </button>
              ) : (
                <span key={j}>{seg.text}</span>
              ),
            )}
          </p>
        ))}
      </div>
      {active && (
        <div
          role="tooltip"
          className="fixed z-10 rounded-lg border border-line bg-surface px-3 py-2 text-center shadow-lg"
          style={{ top: active.rect.bottom + 8, left, width }}
        >
          <div lang="ko" className="text-lg font-semibold">
            {headword(active.word)}
          </div>
          <div className="text-sm text-ink/80">
            {story.vocab[active.word] ?? '—'}
          </div>
        </div>
      )}
    </div>
  )
}
