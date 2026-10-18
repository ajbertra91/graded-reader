import { buildStory, differs, matches, topic } from '../build-story'

export const bugaksanTrail = buildStory({
  id: 'news-bugaksan-trail',
  titleKo: '북악산에 새 길이 열립니다',
  titleEn: 'A New Trail Opens on Bugaksan',
  source: {
    outlet: 'The Korea Herald',
    url: 'https://www.koreaherald.com/article/10905142',
    date: '2026-10-16',
  },
  paragraphs: [
    [
      ['{북악산}에 새 {길}이 {열립니다|열리다}.', 'A new trail opens on Bugaksan.'],
      ['{토요일} {오전} 9시부터 {갈 수 있습니다|가다}.', 'You can go from 9 a.m. on Saturday.'],
      ['길은 {청와대} {뒤}에 있습니다.', 'The trail is behind Cheong Wa Dae.'],
      ['길이는 1.32{킬로미터}입니다.', 'It is 1.32 kilometers long.'],
    ],
    [
      ['이 길은 {약} 60{년} 동안 {닫혀 있었습니다|닫히다}.', 'This trail was closed for about 60 years.'],
      [
        '1968년에 {북한} {군인}들이 청와대 {근처}에 {왔습니다|오다}.',
        'In 1968, North Korean soldiers came near Cheong Wa Dae.',
      ],
      ['그래서 {사람}들이 {갈 수 없었습니다|가다}.', 'So people could not go there.'],
      [
        '2020년과 2022년에는 {다른} 길이 {열렸습니다|열리다}.',
        'In 2020 and 2022, other trails opened.',
      ],
      ['이번 길이 {마지막}입니다.', 'This trail is the last one.'],
    ],
    [
      ['길에는 {전망대} 네 {곳}이 있습니다.', 'There are four viewing decks on the trail.'],
      [
        '전망대에서 {인왕산}과 {남산}이 {보입니다|보이다}.',
        'From the viewing decks, you can see Inwangsan and Namsan.',
      ],
      ['{경복궁}도 보입니다.', 'You can also see Gyeongbokgung Palace.'],
    ],
  ],
  vocab: {
    북악산: 'Bugaksan (mountain in Seoul)',
    길: 'trail; road; way',
    열리다: 'open (by itself)',
    토요일: 'Saturday',
    오전: 'morning; a.m.',
    가다: 'go',
    청와대: 'Cheong Wa Dae (presidential compound)',
    뒤: 'behind; back',
    킬로미터: 'kilometer',
    약: 'about',
    년: 'year',
    닫히다: 'be closed',
    북한: 'North Korea',
    군인: 'soldier',
    근처: 'near; nearby',
    오다: 'come',
    사람: 'person; people',
    다른: 'other; different',
    마지막: 'last',
    전망대: 'viewing deck',
    곳: 'place',
    인왕산: 'Inwangsan (mountain in Seoul)',
    남산: 'Namsan (mountain in Seoul)',
    보이다: 'be seen; can be seen',
    경복궁: 'Gyeongbokgung Palace',
  },
  questions: [
    topic(
      [
        ['북악산에 새 길이 열린다는 소식', 'News that a new trail opens on Bugaksan'],
        ['청와대 앞 시장 소식', 'News about a market in front of Cheong Wa Dae'],
        ['서울의 날씨 소식', 'News about the weather in Seoul'],
        ['새 버스 길 소식', 'News about a new bus route'],
      ],
      0,
    ),
    matches(
      [
        ['길이는 10킬로미터입니다.', 'It is 10 kilometers long.'],
        ['일요일 오전에 엽니다.', 'It opens on Sunday morning.'],
        ['길에서 남산이 보입니다.', 'You can see Namsan from the trail.'],
        ['길은 시장 뒤에 있습니다.', 'The trail is behind a market.'],
      ],
      2,
    ),
    differs(
      [
        ['토요일 오전 9시부터 갈 수 있습니다.', 'You can go from 9 a.m. on Saturday.'],
        ['이 길은 약 60년 동안 닫혀 있었습니다.', 'This trail was closed for about 60 years.'],
        ['전망대에서 바다가 보입니다.', 'You can see the sea from the viewing decks.'],
        ['전망대가 네 곳 있습니다.', 'There are four viewing decks.'],
      ],
      2,
    ),
  ],
})
