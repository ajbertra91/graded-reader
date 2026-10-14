export type Segment = { text: string; word?: string }

export type Option = { ko: string; en: string }

export type Question = {
  ko: string
  en: string
  options: Option[]
  answer: number
}

export type Sentence = { id: string; ko: string; en: string }

export type Story = {
  id: string
  level: number
  titleKo: string
  titleEn: string
  paragraphs: Segment[][]
  vocab: Record<string, string>
  sentences: Sentence[]
  translation: string[]
  questions: Question[]
}
