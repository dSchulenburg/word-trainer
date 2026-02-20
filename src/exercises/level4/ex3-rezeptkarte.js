export default {
  id: 'L4-EX3',
  levelId: 4,
  order: 3,
  titleKey: 'level4.ex3.title',
  storyKey: 'level4.ex3.story',
  steps: ['level4.ex3.step1', 'level4.ex3.step2', 'level4.ex3.step3'],
  hints: ['level4.ex3.hint1', 'level4.ex3.hint2', 'level4.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Mein Lieblingsrezept' }],
      },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textContent', expected: 'Zutaten', stepIndex: 0 },
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 2 }, stepIndex: 0 },
    { type: 'hasList', listType: 'bulletList', minItems: 3, stepIndex: 1 },
    { type: 'textContent', expected: 'Zubereitung', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 5 },
};
