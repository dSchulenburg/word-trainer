export default {
  id: 'L2-EX4',
  levelId: 2,
  order: 4,
  titleKey: 'level2.ex4.title',
  storyKey: 'level2.ex4.story',
  steps: ['level2.ex4.step1', 'level2.ex4.step2', 'level2.ex4.step3'],
  hints: ['level2.ex4.hint1', 'level2.ex4.hint2', 'level2.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Umzugs-Checkliste' }],
      },
      { type: 'paragraph' },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'bulletList', 'orderedList'],
  validations: [
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 2 }, stepIndex: 0 },
    { type: 'hasList', listType: 'orderedList', minItems: 3, stepIndex: 1 },
    { type: 'paragraphCount', expected: 3, stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 10 },
};
