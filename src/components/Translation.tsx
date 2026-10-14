import { useState } from 'react'
import type { Story } from '../types'

export function Translation({ story }: { story: Story }) {
  const [shown, setShown] = useState<Set<string>>(new Set())
  const allShown = shown.size === story.sentences.length

  const toggle = (id: string) =>
    setShown((prev) => {
      const next = new Set(prev)
      if (!next.delete(id)) next.add(id)
      return next
    })

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Tap a sentence to show or hide its English.
        </p>
        <button
          type="button"
          className="shrink-0 rounded-md border border-line px-3 py-1 text-sm hover:bg-surface-hi"
          onClick={() =>
            setShown(allShown ? new Set() : new Set(story.sentences.map((s) => s.id)))
          }
        >
          {allShown ? 'Hide all' : 'Show all'}
        </button>
      </div>
      <ul className="space-y-2">
        {story.sentences.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className="w-full rounded-lg border border-line px-4 py-3 text-left hover:bg-surface"
              aria-expanded={shown.has(s.id)}
              onClick={() => toggle(s.id)}
            >
              <span lang="ko" className="block text-lg">
                {s.ko}
              </span>
              {shown.has(s.id) && (
                <span className="mt-1 block text-ink/80">{s.en}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mb-2 mt-8 text-sm font-semibold uppercase tracking-wide text-muted">
        Full translation
      </h3>
      <div className="space-y-3 text-ink/80">
        {story.translation.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
