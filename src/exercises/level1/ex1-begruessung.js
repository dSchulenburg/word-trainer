export default {
  id: 'L1-EX1',
  levelId: 1,
  order: 1,
  titleKey: 'level1.ex1.title',
  storyKey: 'level1.ex1.story',
  steps: ['level1.ex1.step1', 'level1.ex1.step2', 'level1.ex1.step3'],
  hints: ['level1.ex1.hint1', 'level1.ex1.hint2', 'level1.ex1.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      { type: 'paragraph' },
    ],
  },
  enabledTools: [],
  validations: [
    { type: 'textContent', expected: 'Hallo, ich bin neu hier', stepIndex: 0 },
    { type: 'textContent', expected: 'Ich komme aus', stepIndex: 1 },
    { type: 'paragraphCount', expected: 3, stepIndex: 2 },
  ],
  xp: { base: 15, bonus: 5 },
};
