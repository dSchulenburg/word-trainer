export default {
  id: 'L4-EX1',
  levelId: 4,
  order: 1,
  titleKey: 'level4.ex1.title',
  storyKey: 'level4.ex1.story',
  steps: ['level4.ex1.step1', 'level4.ex1.step2', 'level4.ex1.step3'],
  hints: ['level4.ex1.hint1', 'level4.ex1.hint2', 'level4.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Einladung zur Party!' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Wann: Samstag, 20 Uhr' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Wo: Bei mir zu Hause' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Bitte alle kommen!' }],
      },
    ],
  },
  validations: [
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 1 }, stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Einladung', stepIndex: 1 },
    { type: 'textAlign', paragraphIndex: 0, expected: 'center', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
