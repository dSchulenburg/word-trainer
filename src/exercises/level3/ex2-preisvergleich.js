export default {
  id: 'L3-EX2',
  levelId: 3,
  order: 2,
  titleKey: 'level3.ex2.title',
  storyKey: 'level3.ex2.story',
  steps: ['level3.ex2.step1', 'level3.ex2.step2', 'level3.ex2.step3'],
  hints: ['level3.ex2.hint1', 'level3.ex2.hint2', 'level3.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Preisvergleich' }],
      },
      {
        type: 'table',
        content: [
          {
            type: 'tableRow',
            content: [
              { type: 'tableHeader', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Produkt' }] }] },
              { type: 'tableHeader', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Aldi' }] }] },
              { type: 'tableHeader', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Rewe' }] }] },
            ],
          },
          {
            type: 'tableRow',
            content: [
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
            ],
          },
          {
            type: 'tableRow',
            content: [
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
            ],
          },
          {
            type: 'tableRow',
            content: [
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
              { type: 'tableCell', content: [{ type: 'paragraph' }] },
            ],
          },
        ],
      },
    ],
  },
  enabledTools: ['bold', 'italic', 'heading', 'table'],
  validations: [
    { type: 'cellContent', row: 1, col: 0, expected: 'Milch', stepIndex: 0 },
    { type: 'cellContent', row: 2, col: 0, expected: 'Brot', stepIndex: 1 },
    { type: 'cellContent', row: 3, col: 0, expected: 'Butter', stepIndex: 2 },
  ],
  xp: { base: 25, bonus: 5 },
};
