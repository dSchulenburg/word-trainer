export default {
  id: 'L1-EX3',
  levelId: 1,
  order: 3,
  titleKey: 'level1.ex3.title',
  storyKey: 'level1.ex3.story',
  steps: ['level1.ex3.step1', 'level1.ex3.step2', 'level1.ex3.step3'],
  hints: ['level1.ex3.hint1', 'level1.ex3.hint2', 'level1.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Mein erster Tag' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Heute ist mein erster Tag in der Schule.' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Ich bin sehr aufgeregt.' }],
      },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading'],
  validations: [
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 1 }, stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Mein erster Tag', stepIndex: 1 },
    { type: 'paragraphCount', expected: 3, stepIndex: 2 },
  ],
  xp: { base: 20, bonus: 5 },
};
