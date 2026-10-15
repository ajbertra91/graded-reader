import { buildVocabulary } from '../data/vocabulary'

const VOCABULARY = buildVocabulary()

export function Vocabulary() {
  return (
    <div className="mt-6 space-y-10">
      <p className="text-sm text-muted">
        Every word from the stories, grouped by level. Words are grouped by type. Each word appears once, under the first level that uses it.
      </p>
      {VOCABULARY.map(({ level, label, topik, count, groups }) => (
        <section key={level} aria-labelledby={`vocab-level-${level}`}>
          <h2 id={`vocab-level-${level}`} className="font-serif text-2xl">
            {label}
            <span className="ml-3 text-sm text-muted">
              {topik} · {count} {level > 1 ? 'new ' : ''}words
            </span>
          </h2>
          {groups.map(({ pos, entries }) => (
            <div key={pos} className="mt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {pos} <span className="text-muted">({entries.length})</span>
              </h3>
              <ul className="mt-1 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                {entries.map(({ key, word, gloss }) => (
                  <li key={key} className="flex items-baseline gap-3 border-b border-line py-1.5">
                    <span lang="ko" className="shrink-0 text-lg font-semibold">
                      {word}
                    </span>
                    <span className="text-sm text-ink/80">{gloss}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
