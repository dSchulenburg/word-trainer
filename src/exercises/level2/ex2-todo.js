export default {
  id: 'L2-EX2',
  levelId: 2,
  order: 2,
  titleKey: 'level2.ex2.title',
  storyKey: 'level2.ex2.story',
  steps: ['level2.ex2.step1', 'level2.ex2.step2', 'level2.ex2.step3'],
  hints: ['level2.ex2.hint1', 'level2.ex2.hint2', 'level2.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 2 },
        content: [{ type: 'text', text: 'Meine To-Do-Liste' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'bulletList', 'orderedList'],
  validations: [
    { type: 'hasList', listType: 'orderedList', minItems: 3, stepIndex: 0 },
    { type: 'listItemContent', listType: 'orderedList', itemIndex: 0, expected: 'Deutschkurs', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Meine To-Do-Liste', stepIndex: 2 },
  ],
  xp: { base: 20, bonus: 5 },
};
