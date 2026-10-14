import { catCafe } from './cat-cafe'
import { friendBirthday } from './friend-birthday'
import { marketSaturday } from './market-saturday'
import { myFamily } from './my-family'
import { parkPuppy } from './park-puppy'
import { rainyDay } from './rainy-day'
import type { Story } from '../types'

export type Level = {
  level: number
  label: string
  topik: string
  blurb: string
  stories: Story[]
}

export const LEVELS: Level[] = [
  {
    level: 1,
    label: 'Level 1',
    topik: 'TOPIK 1 · CEFR A1',
    blurb:
      'About 800 basic words. Short present and past sentences with -아요/어요, simple particles, and everyday topics.',
    stories: [catCafe, marketSaturday, myFamily, rainyDay, parkPuppy, friendBirthday],
  },
  { level: 2, label: 'Level 2', topik: 'TOPIK 2 · CEFR A2', blurb: 'Coming soon.', stories: [] },
  { level: 3, label: 'Level 3', topik: 'TOPIK 3 · CEFR B1', blurb: 'Coming soon.', stories: [] },
  { level: 4, label: 'Level 4', topik: 'TOPIK 4 · CEFR B1+', blurb: 'Coming soon.', stories: [] },
  { level: 5, label: 'Level 5', topik: 'TOPIK 5 · CEFR B2', blurb: 'Coming soon.', stories: [] },
]
