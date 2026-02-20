export default {
  id: 'L2-EX1',
  levelId: 2,
  order: 1,
  titleKey: 'level2.ex1.title',
  storyKey: 'level2.ex1.story',
  steps: ['level2.ex1.step1', 'level2.ex1.step2', 'level2.ex1.step3'],
  hints: ['level2.ex1.hint1', 'level2.ex1.hint2', 'level2.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 2 },
        content: [{ type: 'text', text: 'Einkaufsliste' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'bulletList'],
  validations: [
    { type: 'hasList', listType: 'bulletList', minItems: 4, stepIndex: 0 },
    { type: 'listItemContent', listType: 'bulletList', itemIndex: 0, expected: 'Brot', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Einkaufsliste', stepIndex: 2 },
  ],
  xp: { base: 20, bonus: 5 },
};
