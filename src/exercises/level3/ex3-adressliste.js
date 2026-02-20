export default {
  id: 'L3-EX3',
  levelId: 3,
  order: 3,
  titleKey: 'level3.ex3.title',
  storyKey: 'level3.ex3.story',
  steps: ['level3.ex3.step1', 'level3.ex3.step2', 'level3.ex3.step3'],
  hints: ['level3.ex3.hint1', 'level3.ex3.hint2', 'level3.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Meine Adressliste' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'table'],
  validations: [
    { type: 'hasTable', minRows: 2, minCols: 2, stepIndex: 0 },
    { type: 'cellContent', row: 0, col: 0, expected: 'Name', stepIndex: 1 },
    { type: 'cellContent', row: 0, col: 1, expected: 'Adresse', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
