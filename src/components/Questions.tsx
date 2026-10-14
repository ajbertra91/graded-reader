import { useState } from 'react'
import type { Story } from '../types'

export function Questions({ story }: { story: Story }) {
  const [picks, setPicks] = useState<(number | null)[]>(
    story.questions.map(() => null),
  )
  const done = picks.every((p) => p !== null)
  const score = picks.filter((p, i) => p === story.questions[i].answer).length

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted">
        Read each question and choose your answer. You will see the correct answer and
        its translation.
      </p>
      {story.questions.map((q, i) => {
        const pick = picks[i]
        return (
          <fieldset key={i} className="space-y-2">
            <legend className="mb-2">
              <span lang="ko" className="block text-lg font-medium">
                Q{i + 1}. {q.ko}
              </span>
              {pick !== null && (
                <span className="block text-sm text-muted">{q.en}</span>
              )}
            </legend>
            {q.options.map((o, j) => {
              const answered = pick !== null
              const correct = j === q.answer
              const style = !answered
                ? 'border-line hover:bg-surface'
                : correct
                  ? 'border-emerald-400 bg-emerald-400/10'
                  : j === pick
                    ? 'border-rose-300 bg-rose-300/10'
                    : 'border-line opacity-60'
              return (
                <button
                  key={j}
                  type="button"
                  disabled={answered}
                  className={`block w-full rounded-lg border px-4 py-3 text-left ${style}`}
                  onClick={() =>
                    setPicks((prev) => prev.map((p, k) => (k === i ? j : p)))
                  }
                >
                  <span lang="ko">
                    {j + 1}. {o.ko}
                  </span>
                  {answered && (
                    <span className="block text-sm text-muted">{o.en}</span>
                  )}
                </button>
              )
            })}
          </fieldset>
        )
      })}
      {done && (
        <div className="rounded-lg border border-line p-4">
          <p className="font-semibold">
            Your score: {score} / {story.questions.length}{' '}
            {score === story.questions.length ? '— Excellent!' : '— Good job!'}
          </p>
          <button
            type="button"
            className="mt-2 rounded-md border border-line px-3 py-1 text-sm hover:bg-surface-hi"
            onClick={() => setPicks(story.questions.map(() => null))}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  )
}
