import { useState } from 'react'
import { LEVELS } from './data/levels'
import { Questions } from './components/Questions'
import { Reading } from './components/Reading'
import { Translation } from './components/Translation'

const TABS = ['Reading', 'Translation', 'Questions'] as const
type Tab = (typeof TABS)[number]

function App() {
  const [levelNum, setLevelNum] = useState(1)
  const [storyIndex, setStoryIndex] = useState(0)
  const [tab, setTab] = useState<Tab>('Reading')
  const level = LEVELS.find((l) => l.level === levelNum)!
  const story = level.stories[storyIndex]

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-bg px-4 py-6 text-ink">
      <h1 className="font-serif text-4xl text-accent">Korean Graded Reader</h1>

      <nav aria-label="Level" className="mt-4 flex gap-2">
        {LEVELS.map((l) => (
          <button
            key={l.level}
            type="button"
            disabled={l.stories.length === 0}
            aria-pressed={l.level === levelNum}
            className="rounded-full border border-line px-3 py-1 text-sm enabled:hover:bg-surface-hi disabled:opacity-40 aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
            onClick={() => {
              setLevelNum(l.level)
              setStoryIndex(0)
              setTab('Reading')
            }}
          >
            {l.level}
          </button>
        ))}
      </nav>
      <p className="mt-2 text-sm text-muted">
        {level.label} · {level.topik}. {level.blurb}
      </p>

      {level.stories.length > 1 && (
        <nav aria-label="Story" className="mt-4 flex flex-wrap gap-2">
          {level.stories.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={i === storyIndex}
              className="rounded-full border border-line px-3 py-1 text-sm hover:bg-surface-hi aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
              onClick={() => {
                setStoryIndex(i)
                setTab('Reading')
              }}
            >
              {s.titleEn}
            </button>
          ))}
        </nav>
      )}

      {story && (
        <>
          <h2 lang="ko" className="mt-8 font-serif text-2xl">
            {story.titleKo}
          </h2>
          <p className="text-muted">{story.titleEn}</p>

          <div role="tablist" className="mt-6 flex border-b border-line">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                type="button"
                aria-selected={tab === t}
                className="-mb-px border-b-2 border-transparent px-4 py-2 text-muted hover:text-ink aria-selected:border-accent aria-selected:text-ink"
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="mt-6">
            {tab === 'Reading' && <Reading key={story.id} story={story} />}
            {tab === 'Translation' && <Translation key={story.id} story={story} />}
            {tab === 'Questions' && <Questions key={story.id} story={story} />}
          </div>
        </>
      )}
    </main>
  )
}

export default App
