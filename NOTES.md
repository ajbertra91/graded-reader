# Korean Graded Reader — notes

## Source structure (koreangradedreaders.com, Level 1 reading page)
- The page is a shell. Story data loads from `/wp-json/kr/v1/reading-data/<post-id>` as public JSON.
- Keys used: `passage_html` (paragraphs with `<span class="kr-tap" data-word="…">`),
  `tap_vocab` (dictionary form → gloss), `translation_sentences_all` (sentence ko/en),
  `translation_paragraphs`, `questions` + `questions_answers` (4 options, `is_answer`).
- `data-word` keys are dictionary forms (좋아해요 → 좋아하다). `#V44` suffixes separate homonyms (안 "not" vs 안 "inside").
- Not copied: dictation, audio, review/SRS, pricing, other languages.

## Level 1 design principles (from research)
- Lexical coverage: readers need about 95% known words for supported reading and about 98% for fluent extensive reading (Laufer 1989; Hu & Nation 2000; Schmitt, Jiang & Grabe 2011). Level 1 texts keep to roughly 800 TOPIK-1 words, so a tap gloss covers the few unknown words.
- Glossing: L1 tooltips improve incidental vocabulary learning without hurting comprehension.
- Korean specifics: particles (은/는, 이/가, 을/를, 에, 에서) mark word boundaries. Tapped words are shown in dictionary form because verbs and adjectives conjugate.
- Level 1 text: short sentences, present and past polite (-아요/어요, -았/었어요), repeated vocabulary, concrete topic.
- Comprehension checks use the TOPIK reading format: topic, "matches the text", "differs from the text".

## Level 2 design (research status)
- koreangradedreaders.com does not publish Level 2 targets (vocabulary count, grammar list, length). Only "Levels 1-2 are beginner" and vocabulary plus grammar notes on each post.
- No published Korean graded reader spec was found. Targets below come from TOPIK I grammar lists and the coverage research above, so treat them as our own choices.
- Coverage: readers need to know the vocabulary of the current level for 95% coverage (graded reader corpus study). Level 2 stories reuse Level 1 words and add about 40 new words per story.
- Grammar added over Level 1: -(으)ㄹ 거예요, -고 싶다, -아/어 주다, -아/어 보다, -(으)ㄴ 적이 없다, -아/어서, -(으)니까, -(으)ㄹ 때, -(으)ㄹ게요.
- Story 1: `first-kimchi-stew`. It reuses 김치찌개, 시장, 친구, 토요일, and 요리 from Level 1.
