export default {
  id: 'L6-EX1',
  levelId: 6,
  order: 1,
  titleKey: 'level6.ex1.title',
  storyKey: 'level6.ex1.story',
  steps: ['level6.ex1.step1', 'level6.ex1.step2', 'level6.ex1.step3'],
  hints: ['level6.ex1.hint1', 'level6.ex1.hint2', 'level6.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Lebenslauf' }],
      },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textAlign', paragraphIndex: 0, expected: 'center', stepIndex: 0 },
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 1 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Name', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 10 },
};
