import { buildStory, differs, matches, topic } from '../build-story'

export const sundayRain = buildStory({
  id: 'news-sunday-rain',
  titleKo: '일요일에 비가 많이 옵니다',
  titleEn: 'Heavy Rain Comes on Sunday',
  source: {
    outlet: 'The Korea Herald',
    url: 'https://www.koreaherald.com/article/10905461',
    date: '2026-10-16',
  },
  paragraphs: [
    [
      ['토요일까지 {날씨}가 {좋습니다|좋다}.', 'The weather is good until Saturday.'],
      ['{하늘}이 {맑습니다|맑다}.', 'The sky is clear.'],
      ['{낮}에는 {따뜻합니다|따뜻하다}.', 'It is warm in the daytime.'],
      ['낮 {기온}은 21도에서 27도입니다.', 'The daytime temperature is 21 to 27 degrees.'],
    ],
    [
      ['{일요일}에는 {비}가 {많이} {옵니다|오다}.', 'On Sunday, it rains a lot.'],
      ['{서울}에는 {아침}부터 비가 옵니다.', 'In Seoul, rain starts in the morning.'],
      ['{오후}에는 {전국}에 비가 {내립니다|내리다}.', 'In the afternoon, rain falls across the country.'],
      ['{바람}도 {강합니다|강하다}.', 'The wind is also strong.'],
    ],
    [
      ['{월요일}부터 {추워집니다|춥다}.', 'From Monday, it gets cold.'],
      ['{우산}을 {준비하세요|준비하다}.', 'Please prepare an umbrella.'],
    ],
  ],
  vocab: {
    날씨: 'weather',
    좋다: 'good',
    하늘: 'sky',
    맑다: 'clear; sunny',
    낮: 'daytime',
    따뜻하다: 'warm',
    기온: 'temperature (of the air)',
    일요일: 'Sunday',
    비: 'rain',
    많이: 'a lot',
    오다: 'come; (rain) fall',
    서울: 'Seoul',
    아침: 'morning',
    오후: 'afternoon',
    전국: 'the whole country',
    내리다: 'fall; come down',
    바람: 'wind',
    강하다: 'strong',
    월요일: 'Monday',
    춥다: 'cold',
    우산: 'umbrella',
    준비하다: 'prepare',
  },
  questions: [
    topic(
      [
        ['주말 날씨', 'Weekend weather'],
        ['서울 여행', 'A trip to Seoul'],
        ['우산 가게', 'An umbrella shop'],
        ['겨울 옷', 'Winter clothes'],
      ],
      0,
    ),
    matches(
      [
        ['일요일은 날씨가 맑습니다.', 'Sunday weather is clear.'],
        ['토요일 낮은 따뜻합니다.', 'Saturday daytime is warm.'],
        ['월요일부터 따뜻해집니다.', 'It gets warm from Monday.'],
        ['토요일에 비가 옵니다.', 'It rains on Saturday.'],
      ],
      1,
    ),
    differs(
      [
        ['토요일까지 날씨가 좋습니다.', 'The weather is good until Saturday.'],
        ['일요일에 비가 옵니다.', 'It rains on Sunday.'],
        ['월요일부터 따뜻해집니다.', 'It gets warm from Monday.'],
        ['바람도 강합니다.', 'The wind is also strong.'],
      ],
      2,
    ),
  ],
})
