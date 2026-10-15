import { describe, expect, it } from 'vitest'
import { LEVELS } from './levels'
import { buildVocabulary, posOf } from './vocabulary'

describe('vocabulary', () => {
  it('assigns a part of speech to every story word', () => {
    const keys = LEVELS.flatMap((l) => l.stories.flatMap((s) => Object.keys(s.vocab)))
    expect(keys.filter((k) => !posOf(k))).toEqual([])
  })

  it('lists each word once across all levels', () => {
    const ids = buildVocabulary().flatMap((l) => l.groups.flatMap((g) => g.entries.map((e) => `${g.pos}:${e.word}`)))
    expect(new Set(ids).size).toBe(ids.length)
  })
})
