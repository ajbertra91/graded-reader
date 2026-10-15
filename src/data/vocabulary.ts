import { LEVELS } from './levels'

export const POS_ORDER = ['Nouns', 'Verbs', 'Adjectives', 'Adverbs', 'Counters & numbers', 'Connectors', 'Other'] as const
export type Pos = (typeof POS_ORDER)[number]

export type VocabEntry = { key: string; word: string; gloss: string }
export type PosGroup = { pos: Pos; entries: VocabEntry[] }
export type LevelVocab = { level: number; label: string; topik: string; count: number; groups: PosGroup[] }

const WORDS: Record<Pos, string> = {
  Nouns:
    '가족 간식 강아지 검은색 고양이 공원 과일 그날 그때 김치찌개 꽃 날 날씨 눈 다리 다음 동생 딸기 무릎 물 버스 비 사과 사람 사진 색 생일 선물 설거지 손 수건 시간 시장 아빠 아저씨 아침 어제 엄마 여러분 옆 오늘 요리 우리 우산 위 음료 의자 이름 인기 일요일 저 저녁 주인 지난달 직원 집 책 축구 친구 카페 커피 케이크 코 토요일 학교 회사 안#V45 ' +
    '고기 금요일 김치 냄비 냄새 돼지고기 두부 맛 불고기 식당 식탁 양파 오후 요리법 인터넷 입 적 주',
  Verbs:
    '가다 걷다 기억하다 끝나다 노래하다 놀다 놀라다 늦다 들어가다 마시다 만나다 만지다 말하다 먹다 보다 사다 산책하다 앉다 오다 올라오다 웃다 이야기하다 있다 잘하다 젖다 주다 좋아하다 찍다 축하하다 하다 못하다 ' +
    '끓이다 나다 넣다 들어오다 만들다 사 먹다 시작하다 연습하다 요리하다 자르다 찾다',
  Adjectives:
    '고맙다 궁금하다 귀엽다 다르다 따뜻하다 많다 맛있다 비싸다 빨갛다 싸다 예쁘다 작다 좋다 춥다 크다 피곤하다 행복하다 없다 피곤하다 ' +
    '괜찮다 기쁘다 짜다 재미있다',
  Adverbs:
    '같이 계속 꼭 너무 다 더 많이 매주 모두 바로 아주 정말 제일 조금 항상 안#V44 ' + '또 먼저 보통 이제 잘 한번',
  'Counters & numbers': '개 마리 명 번 살 원 세 네 열 한 이천',
  Connectors: '그래도 그래서 그리고 하지만 그다음에',
  Other: '그',
}

const POS_BY_WORD = new Map<string, Pos>(
  POS_ORDER.flatMap((pos) => WORDS[pos].split(/ (?=\S)/).map((w) => [w.trim().replace(' ', ' '), pos] as const)),
)

const headword = (key: string) => key.split('#')[0]

export const posOf = (key: string): Pos | undefined => POS_BY_WORD.get(key) ?? POS_BY_WORD.get(headword(key))

// Each word is listed once, under the first level that uses it.
export function buildVocabulary(levels = LEVELS): LevelVocab[] {
  const seen = new Set<string>()
  return levels
    .filter((l) => l.stories.length > 0)
    .map(({ level, label, topik, stories }) => {
      const byPos = new Map<Pos, VocabEntry[]>()
      let count = 0
      for (const story of stories) {
        for (const [key, gloss] of Object.entries(story.vocab)) {
          const pos = posOf(key) ?? 'Other'
          const word = headword(key)
          const id = `${pos}:${word}`
          if (seen.has(id)) continue
          seen.add(id)
          count++
          byPos.set(pos, [...(byPos.get(pos) ?? []), { key, word, gloss }])
        }
      }
      const groups = POS_ORDER.filter((pos) => byPos.has(pos)).map((pos) => ({
        pos,
        entries: byPos.get(pos)!.sort((a, b) => a.word.localeCompare(b.word, 'ko')),
      }))
      return { level, label, topik, count, groups }
    })
}
