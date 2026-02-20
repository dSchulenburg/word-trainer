export default {
  id: 'L2-EX3',
  levelId: 2,
  order: 3,
  titleKey: 'level2.ex3.title',
  storyKey: 'level2.ex3.story',
  steps: ['level2.ex3.step1', 'level2.ex3.step2', 'level2.ex3.step3'],
  hints: ['level2.ex3.hint1', 'level2.ex3.hint2', 'level2.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Mein Tagesplan' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'bulletList', 'orderedList'],
  validations: [
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 2 }, stepIndex: 0 },
    { type: 'hasList', listType: 'bulletList', minItems: 2, stepIndex: 1 },
    { type: 'textContent', expected: 'Nachmittag', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
