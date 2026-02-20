export default {
  id: 'L6-EX2',
  levelId: 6,
  order: 2,
  titleKey: 'level6.ex2.title',
  storyKey: 'level6.ex2.story',
  steps: ['level6.ex2.step1', 'level6.ex2.step2', 'level6.ex2.step3'],
  hints: ['level6.ex2.hint1', 'level6.ex2.hint2', 'level6.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Praktikumsbericht' }],
      },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textContent', expected: 'Einleitung', stepIndex: 0 },
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 2 }, stepIndex: 0 },
    { type: 'paragraphCount', expected: 3, stepIndex: 1 },
    { type: 'textContent', expected: 'Tätigkeiten', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 10 },
};
