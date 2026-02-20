export default {
  id: 'L3-EX4',
  levelId: 3,
  order: 4,
  titleKey: 'level3.ex4.title',
  storyKey: 'level3.ex4.story',
  steps: ['level3.ex4.step1', 'level3.ex4.step2', 'level3.ex4.step3'],
  hints: ['level3.ex4.hint1', 'level3.ex4.hint2', 'level3.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Wochenplan' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'table', 'textAlign'],
  validations: [
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 0 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Zeit', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Wochenplan', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 10 },
};
