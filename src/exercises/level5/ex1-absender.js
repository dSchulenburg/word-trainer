export default {
  id: 'L5-EX1',
  levelId: 5,
  order: 1,
  titleKey: 'level5.ex1.title',
  storyKey: 'level5.ex1.story',
  steps: ['level5.ex1.step1', 'level5.ex1.step2', 'level5.ex1.step3'],
  hints: ['level5.ex1.hint1', 'level5.ex1.hint2', 'level5.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      { type: 'paragraph' },
      { type: 'paragraph' },
      { type: 'paragraph' },
      { type: 'paragraph' },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'paragraphCount', expected: 3, stepIndex: 0 },
    { type: 'textAlign', paragraphIndex: 0, expected: 'right', stepIndex: 1 },
    { type: 'textContent', expected: 'Firma', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
