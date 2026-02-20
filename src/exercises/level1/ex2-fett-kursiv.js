export default {
  id: 'L1-EX2',
  levelId: 1,
  order: 2,
  titleKey: 'level1.ex2.title',
  storyKey: 'level1.ex2.story',
  steps: ['level1.ex2.step1', 'level1.ex2.step2', 'level1.ex2.step3'],
  hints: ['level1.ex2.hint1', 'level1.ex2.hint2', 'level1.ex2.hint3'],
  initialContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'Mein Name ist Maria. Ich wohne in Hamburg. Ich lerne gerne Deutsch.',
          },
        ],
      },
    ],
  },
  enabledTools: ['bold', 'italic'],
  validations: [
    { type: 'hasMark', mark: 'bold', textMatch: 'Maria', stepIndex: 0 },
    { type: 'hasMark', mark: 'bold', textMatch: 'Hamburg', stepIndex: 1 },
    { type: 'hasMark', mark: 'italic', textMatch: 'gerne', stepIndex: 2 },
  ],
  xp: { base: 15, bonus: 5 },
};
