export default {
  id: 'L4-EX2',
  levelId: 4,
  order: 2,
  titleKey: 'level4.ex2.title',
  storyKey: 'level4.ex2.story',
  steps: ['level4.ex2.step1', 'level4.ex2.step2', 'level4.ex2.step3'],
  hints: ['level4.ex2.hint1', 'level4.ex2.hint2', 'level4.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Nachhilfe Angebot' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Fach: Mathematik' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Wann: Montag und Mittwoch, 15-16 Uhr' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: 'Kontakt: Maria, Klasse 10b' }],
      },
    ],
  },
  validations: [
    { type: 'hasNode', nodeType: 'heading', attrs: { level: 1 }, stepIndex: 0 },
    { type: 'textAlign', paragraphIndex: 0, expected: 'center', stepIndex: 1 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Kontakt', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
