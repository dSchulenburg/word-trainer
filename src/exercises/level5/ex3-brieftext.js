export default {
  id: 'L5-EX3',
  levelId: 5,
  order: 3,
  titleKey: 'level5.ex3.title',
  storyKey: 'level5.ex3.story',
  steps: ['level5.ex3.step1', 'level5.ex3.step2', 'level5.ex3.step3'],
  hints: ['level5.ex3.hint1', 'level5.ex3.hint2', 'level5.ex3.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        attrs: { textAlign: 'right' },
        content: [{ type: 'text', text: 'Maria Müller' }],
      },
      {
        type: 'paragraph',
        attrs: { textAlign: 'right' },
        content: [{ type: 'text', text: 'Musterstraße 1, 20000 Hamburg' }],
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
        content: [{ type: 'text', text: 'Hauptstraße 10, 20095 Hamburg' }],
      },
      { type: 'paragraph' },
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'Betreff: Bewerbung als Praktikantin',
            marks: [{ type: 'bold' }],
          },
        ],
      },
      { type: 'paragraph' },
      { type: 'paragraph' },
    ],
  },
  validations: [
    { type: 'textContent', expected: 'Sehr geehrte Damen und Herren', stepIndex: 0 },
    { type: 'paragraphCount', expected: 5, stepIndex: 1 },
    { type: 'textContent', expected: 'Mit freundlichen', stepIndex: 2 },
  ],
  xp: { base: 30, bonus: 5 },
};
