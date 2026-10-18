import { describe, expect, it } from 'vitest'
import { CHURCH_LEVELS } from './church-levels'
import { LEVELS } from './levels'
import { NEWS_LEVELS } from './news-levels'

const quizzed = [...LEVELS, ...NEWS_LEVELS].flatMap((l) => l.stories)
const stories = [...quizzed, ...CHURCH_LEVELS.flatMap((l) => l.stories)]

describe.each(stories.map((s) => [s.id, s] as const))('%s', (_id, story) => {
  const tapped = new Set(story.paragraphs.flat().flatMap((seg) => (seg.word ? [seg.word] : [])))

  it('has a gloss for every tappable word', () => {
    expect([...tapped].filter((w) => !(w in story.vocab))).toEqual([])
  })

  it('has no unused glosses', () => {
    expect(Object.keys(story.vocab).filter((w) => !tapped.has(w))).toEqual([])
  })

  it('has sentences that match the paragraphs', () => {
    const text = story.paragraphs.map((p) => p.map((s) => s.text).join('')).join(' ')
    expect(story.sentences.map((s) => s.ko).join(' ')).toBe(text)
  })

  it.runIf(quizzed.includes(story))('has three questions with four options and a valid answer', () => {
    expect(story.questions).toHaveLength(3)
    for (const q of story.questions) {
      expect(q.options).toHaveLength(4)
      expect(q.options[q.answer]).toBeDefined()
    }
  })
})
