import { buildStory, differs, matches, topic } from '../build-story'

export const daejeonBreadFestival = buildStory({
  id: 'news-daejeon-bread-festival',
  titleKo: '대전에서 빵 축제가 있습니다',
  titleEn: 'A Bread Festival in Daejeon',
  source: {
    outlet: 'The Korea Herald',
    url: 'https://www.koreaherald.com/article/10903744',
    date: '2026-10-15',
  },
  paragraphs: [
    [
      ['이번 {주말}에 {대전}에서 {빵} {축제}가 {있습니다|있다}.', 'This weekend, there is a bread festival in Daejeon.'],
      ['{토요일}과 {일요일}에 합니다.', 'It is on Saturday and Sunday.'],
      ['{장소}는 대전 엑스포 과학공원입니다.', 'The place is Daejeon Expo Science Park.'],
    ],
    [
      ['{빵집} 120{곳}이 {함께} 있습니다.', 'One hundred twenty bakeries are there together.'],
      ['성심당도 있습니다.', 'Sungsimdang is also there.'],
      ['사람들은 {여러} 빵을 {살 수 있습니다|사다}.', 'People can buy many kinds of bread.'],
      ['빵집을 {도는|돌다} {버스}도 있습니다.', 'There is also a bus that goes around the bakeries.'],
    ],
    [
      ['{대전역}에서 {셔틀버스}가 {갑니다|가다}.', 'A shuttle bus goes from Daejeon Station.'],
      ['버스는 15{분}마다 있습니다.', 'The bus runs every 15 minutes.'],
      ['하루 {표}는 1,000원입니다.', 'A one-day ticket is 1,000 won.'],
    ],
  ],
  vocab: {
    주말: 'weekend',
    대전: 'Daejeon (city)',
    빵: 'bread',
    축제: 'festival',
    있다: 'be; there is',
    토요일: 'Saturday',
    일요일: 'Sunday',
    장소: 'place; venue',
    빵집: 'bakery',
    곳: 'place (counter)',
    함께: 'together',
    여러: 'many; several kinds of',
    사다: 'buy',
    돌다: 'go around; turn',
    버스: 'bus',
    대전역: 'Daejeon Station',
    셔틀버스: 'shuttle bus',
    가다: 'go',
    분: 'minute(s)',
    표: 'ticket',
  },
  questions: [
    topic(
      [
        ['대전의 빵 축제 소식', 'News about a bread festival in Daejeon'],
        ['대전의 날씨 소식', 'News about the weather in Daejeon'],
        ['새 버스 표 소식', 'News about a new bus ticket'],
        ['서울의 시장 소식', 'News about a market in Seoul'],
      ],
      0,
    ),
    matches(
      [
        ['축제는 월요일에 합니다.', 'The festival is on Monday.'],
        ['축제는 서울에서 합니다.', 'The festival is in Seoul.'],
        ['축제에는 빵집 120곳이 있습니다.', 'There are 120 bakeries at the festival.'],
        ['버스 표는 10,000원입니다.', 'A bus ticket is 10,000 won.'],
      ],
      2,
    ),
    differs(
      [
        ['토요일과 일요일에 합니다.', 'It is on Saturday and Sunday.'],
        ['대전역에서 셔틀버스가 갑니다.', 'A shuttle bus goes from Daejeon Station.'],
        ['버스는 15분마다 있습니다.', 'The bus runs every 15 minutes.'],
        ['사람들은 빵을 살 수 없습니다.', 'People cannot buy bread.'],
      ],
      3,
    ),
  ],
})
