export default {
  id: 'L1-EX4',
  levelId: 1,
  order: 4,
  titleKey: 'level1.ex4.title',
  storyKey: 'level1.ex4.story',
  steps: ['level1.ex4.step1', 'level1.ex4.step2', 'level1.ex4.step3'],
  hints: ['level1.ex4.hint1', 'level1.ex4.hint2', 'level1.ex4.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Hamburg, den 15. Februar 2026' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Liebe Mama,' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'mir geht es gut. Die Schule ist toll.' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Deine Maria' }],
      },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'textAlign'],
  validations: [
    { type: 'textAlign', paragraphIndex: 0, expected: 'right', stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Liebe Mama', stepIndex: 1 },
    { type: 'hasMark', mark: 'italic', textMatch: 'Deine Maria', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
