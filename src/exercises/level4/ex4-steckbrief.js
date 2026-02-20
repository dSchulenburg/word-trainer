export default {
  id: 'L4-EX4',
  levelId: 4,
  order: 4,
  titleKey: 'level4.ex4.title',
  storyKey: 'level4.ex4.story',
  steps: ['level4.ex4.step1', 'level4.ex4.step2', 'level4.ex4.step3'],
  hints: ['level4.ex4.hint1', 'level4.ex4.hint2', 'level4.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Mein Steckbrief' }],
      },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 0 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Name', stepIndex: 1 },
    { type: 'textAlign', paragraphIndex: 0, expected: 'center', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 10 },
};
