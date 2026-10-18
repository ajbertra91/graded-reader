import { bugaksanTrail } from './news/bugaksan-trail'
import { busanFilmFestival } from './news/busan-film-festival'
import { busanShark } from './news/busan-shark'
import { daejeonBreadFestival } from './news/daejeon-bread-festival'
import { sundayRain } from './news/sunday-rain'
import type { Level } from './levels'

export const NEWS_LEVELS: Level[] = [
  {
    level: 1,
    label: 'News Level 1',
    topik: 'TOPIK 1 · CEFR A1',
    blurb:
      'Real Korea Herald stories, rewritten in simple Korean. News style: formal -ㅂ니다/습니다 endings, short sentences, and place names, numbers, and dates.',
    stories: [sundayRain, bugaksanTrail, busanShark, daejeonBreadFestival, busanFilmFestival],
  },
  ...[2, 3, 4, 5].map((n) => ({
    level: n,
    label: `News Level ${n}`,
    topik: ['TOPIK 2 · CEFR A2', 'TOPIK 3 · CEFR B1', 'TOPIK 4 · CEFR B1+', 'TOPIK 5 · CEFR B2'][n - 2],
    blurb: 'Coming soon.',
    stories: [],
  })),
]
