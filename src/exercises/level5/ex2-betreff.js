export default {
  id: 'L5-EX2',
  levelId: 5,
  order: 2,
  titleKey: 'level5.ex2.title',
  storyKey: 'level5.ex2.story',
  steps: ['level5.ex2.step1', 'level5.ex2.step2', 'level5.ex2.step3'],
  hints: ['level5.ex2.hint1', 'level5.ex2.hint2', 'level5.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Maria Müller' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Musterstraße 1' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: '20000 Hamburg' }],
      },
      { type: 'paragraph' },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Firma ABC GmbH' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Personalabteilung' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Hauptstraße 10' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: '20095 Hamburg' }],
      },
      { type: 'paragraph' },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textContent', expected: 'Betreff', stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Betreff', stepIndex: 1 },
    { type: 'hasUnderline', textMatch: 'Bewerbung', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
