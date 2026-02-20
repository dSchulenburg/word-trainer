export default {
  id: 'L3-EX1',
  levelId: 3,
  order: 1,
  titleKey: 'level3.ex1.title',
  storyKey: 'level3.ex1.story',
  steps: ['level3.ex1.step1', 'level3.ex1.step2', 'level3.ex1.step3'],
  hints: ['level3.ex1.hint1', 'level3.ex1.hint2', 'level3.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Mein Stundenplan' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'bulletList', 'orderedList', 'table'],
  validations: [
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 0 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Montag', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Mein Stundenplan', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
