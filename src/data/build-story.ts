import type { Question, Segment, Source, Story } from '../types'

// Korean text marks tappable words as {surface|dictionary form}.
// {word} means the surface form is also the dictionary form.
const TAG = /\{([^|}]+)(?:\|([^}]+))?\}/g

export type Line = [ko: string, en: string]
export type Choice = [ko: string, en: string]

const parse = (ko: string): Segment[] => {
  const segments: Segment[] = []
  let last = 0
  for (const m of ko.matchAll(TAG)) {
    const start = m.index!
    if (start > last) segments.push({ text: ko.slice(last, start) })
    segments.push({ text: m[1], word: m[2] ?? m[1] })
    last = start + m[0].length
  }
  if (last < ko.length) segments.push({ text: ko.slice(last) })
  return segments
}

const plain = (ko: string) => ko.replace(TAG, (_, surface: string) => surface)

const question = (ko: string, en: string, choices: Choice[], answer: number): Question => ({
  ko,
  en,
  options: choices.map(([k, e]) => ({ ko: k, en: e })),
  answer,
})

export const topic = (choices: Choice[], answer: number) =>
  question(
    '이 글의 주제로 가장 알맞은 것을 고르십시오.',
    'Choose the most appropriate topic of this passage.',
    choices,
    answer,
  )

export const matches = (choices: Choice[], answer: number) =>
  question(
    '이 글의 내용과 같은 것을 고르십시오.',
    'Choose the one that matches the content of this passage.',
    choices,
    answer,
  )

export const differs = (choices: Choice[], answer: number) =>
  question(
    '이 글의 내용과 다른 것을 고르십시오.',
    'Choose the one that is different from the content of this passage.',
    choices,
    answer,
  )

type Draft = {
  id: string
  level?: number
  titleKo: string
  titleEn: string
  paragraphs: Line[][]
  vocab: Record<string, string>
  questions: Question[]
  source?: Source
}

export function buildStory(draft: Draft): Story {
  const lines = draft.paragraphs.flat()
  return {
    id: draft.id,
    level: draft.level ?? 1,
    titleKo: draft.titleKo,
    titleEn: draft.titleEn,
    paragraphs: draft.paragraphs.map((para) => parse(para.map(([ko]) => ko).join(' '))),
    vocab: draft.vocab,
    sentences: lines.map(([ko, en], i) => ({
      id: `S${String(i + 1).padStart(2, '0')}`,
      ko: plain(ko),
      en,
    })),
    translation: draft.paragraphs.map((para) => para.map(([, en]) => en).join(' ')),
    questions: draft.questions,
    source: draft.source,
  }
}
