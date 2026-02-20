export default {
  id: 'L6-EX3',
  levelId: 6,
  order: 3,
  titleKey: 'level6.ex3.title',
  storyKey: 'level6.ex3.story',
  steps: ['level6.ex3.step1', 'level6.ex3.step2', 'level6.ex3.step3'],
  hints: ['level6.ex3.hint1', 'level6.ex3.hint2', 'level6.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Besprechungsprotokoll' }],
      },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 0 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Datum', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Besprechungsprotokoll', stepIndex: 2 },
  ],
  xp: { base: 35, bonus: 10 },
};
