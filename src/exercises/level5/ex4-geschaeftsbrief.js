export default {
  id: 'L5-EX4',
  levelId: 5,
  order: 4,
  titleKey: 'level5.ex4.title',
  storyKey: 'level5.ex4.story',
  steps: ['level5.ex4.step1', 'level5.ex4.step2', 'level5.ex4.step3'],
  hints: ['level5.ex4.hint1', 'level5.ex4.hint2', 'level5.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textAlign', paragraphIndex: 0, expected: 'right', stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Betreff', stepIndex: 1 },
    { type: 'textContent', expected: 'Mit freundlichen', stepIndex: 2 },
  ],
  xp: { base: 35, bonus: 10 },
};
