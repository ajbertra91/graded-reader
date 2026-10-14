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
