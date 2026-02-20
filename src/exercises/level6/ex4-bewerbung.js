export default {
  id: 'L6-EX4',
  levelId: 6,
  order: 4,
  titleKey: 'level6.ex4.title',
  storyKey: 'level6.ex4.story',
  steps: ['level6.ex4.step1', 'level6.ex4.step2', 'level6.ex4.step3'],
  hints: ['level6.ex4.hint1', 'level6.ex4.hint2', 'level6.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textAlign', paragraphIndex: 0, expected: 'right', stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Bewerbung', stepIndex: 1 },
    { type: 'hasUnderline', textMatch: 'Bewerbung', stepIndex: 1 },
    { type: 'textContent', expected: 'Sehr geehrte', stepIndex: 2 },
    { type: 'textContent', expected: 'Mit freundlichen', stepIndex: 2 },
  ],
  xp: { base: 40, bonus: 15 },
};
