import { apostlesCreed } from './church/apostles-creed'
import { lordsPrayer } from './church/lords-prayer'
import type { Level } from './levels'

export const CHURCH_LEVELS: Level[] = [
  {
    level: 1,
    label: 'Church Korean',
    topik: '',
    blurb:
      'Prayers and creeds as Korean Protestant churches say them. The language is formal and old-style, with endings such as -사오며, -옵시고, and -이다.',
    stories: [lordsPrayer, apostlesCreed],
  },
  ...[2, 3, 4, 5].map((n) => ({
    level: n,
    label: `Church Korean ${n}`,
    topik: '',
    blurb: 'Coming soon.',
    stories: [],
  })),
]
