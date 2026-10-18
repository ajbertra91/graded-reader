import { buildStory, differs, matches, topic } from '../build-story'

export const busanFilmFestival = buildStory({
  id: 'news-busan-film-festival',
  titleKo: '부산국제영화제가 끝났습니다',
  titleEn: 'The Busan Film Festival Has Ended',
  source: {
    outlet: 'The Korea Herald',
    url: 'https://www.koreaherald.com/article/10904249',
    date: '2026-10',
  },
  paragraphs: [
    [
      ['제31회 {부산국제영화제}가 {끝났습니다|끝나다}.', 'The 31st Busan International Film Festival has ended.'],
      ['10일 동안 했습니다.', 'It ran for 10 days.'],
      ['{목요일}에 {시상식}이 {있었습니다|있다}.', 'The award ceremony was on Thursday.'],
    ],
    [
      [
        '{이란} {감독} 마지드 마지디의 {영화}가 {최고} {상}을 {받았습니다|받다}.',
        "Iranian director Majid Majidi's film won the top prize.",
      ],
      ['영화 {제목}은 "Midday Meal"입니다.', 'The film title is "Midday Meal".'],
      ['마지디 감독은 {한국}에 {처음} 왔습니다.', 'Director Majidi came to Korea for the first time.'],
    ],
    [
      ['감독은 이 영화를 {어머니}에게 {드렸습니다|드리다}.', 'The director dedicated this film to his mother.'],
      ['어머니는 영화 {전}에 {돌아가셨습니다|돌아가시다}.', 'His mother passed away before the film.'],
    ],
  ],
  vocab: {
    부산국제영화제: 'Busan International Film Festival',
    끝나다: 'end; finish',
    목요일: 'Thursday',
    시상식: 'award ceremony',
    있다: 'be; there is',
    이란: 'Iran',
    감독: 'director',
    영화: 'movie; film',
    최고: 'the best; top',
    상: 'prize; award',
    받다: 'receive; win',
    제목: 'title',
    한국: 'Korea',
    처음: 'first; for the first time',
    어머니: 'mother',
    드리다: 'give (honorific); dedicate',
    전: 'before',
    돌아가시다: 'pass away (honorific)',
  },
  questions: [
    topic(
      [
        ['부산국제영화제 소식', 'News about the Busan International Film Festival'],
        ['이란 여행 소식', 'News about a trip to Iran'],
        ['새 영화관 소식', 'News about a new movie theater'],
        ['감독의 생일 소식', "News about a director's birthday"],
      ],
      0,
    ),
    matches(
      [
        ['영화제는 3일 동안 했습니다.', 'The festival ran for 3 days.'],
        ['영화제는 10일 동안 했습니다.', 'The festival ran for 10 days.'],
        ['시상식은 월요일에 있었습니다.', 'The ceremony was on Monday.'],
        ['영화제는 서울에서 했습니다.', 'The festival was in Seoul.'],
      ],
      1,
    ),
    differs(
      [
        ['마지디 감독은 이란 사람입니다.', 'Director Majidi is Iranian.'],
        ['마지디 감독은 한국 사람입니다.', 'Director Majidi is Korean.'],
        ['마지디 감독의 영화가 최고 상을 받았습니다.', "Director Majidi's film won the top prize."],
        ['감독은 영화를 어머니에게 드렸습니다.', 'The director dedicated the film to his mother.'],
      ],
      1,
    ),
  ],
})
