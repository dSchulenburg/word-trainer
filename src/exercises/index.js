import l1ex1 from './level1/ex1-begruessung';
import l1ex2 from './level1/ex2-fett-kursiv';
import l1ex3 from './level1/ex3-ueberschrift';
import l1ex4 from './level1/ex4-brief';
import l2ex1 from './level2/ex1-einkaufsliste';
import l2ex2 from './level2/ex2-todo';
import l2ex3 from './level2/ex3-tagesplan';
import l2ex4 from './level2/ex4-umzug';
import l3ex1 from './level3/ex1-stundenplan';
import l3ex2 from './level3/ex2-preisvergleich';
import l3ex3 from './level3/ex3-adressliste';
import l3ex4 from './level3/ex4-wochenplan';
import l4ex1 from './level4/ex1-einladung';
import l4ex2 from './level4/ex2-aushang';
import l4ex3 from './level4/ex3-rezeptkarte';
import l4ex4 from './level4/ex4-steckbrief';
import l5ex1 from './level5/ex1-absender';
import l5ex2 from './level5/ex2-betreff';
import l5ex3 from './level5/ex3-brieftext';
import l5ex4 from './level5/ex4-geschaeftsbrief';
import l6ex1 from './level6/ex1-lebenslauf';
import l6ex2 from './level6/ex2-praktikumsbericht';
import l6ex3 from './level6/ex3-protokoll';
import l6ex4 from './level6/ex4-bewerbung';

export const exercises = [
  l1ex1, l1ex2, l1ex3, l1ex4,
  l2ex1, l2ex2, l2ex3, l2ex4,
  l3ex1, l3ex2, l3ex3, l3ex4,
  l4ex1, l4ex2, l4ex3, l4ex4,
  l5ex1, l5ex2, l5ex3, l5ex4,
  l6ex1, l6ex2, l6ex3, l6ex4,
];

export const levels = [
  {
    id: 1,
    titleKey: 'level1.title',
    storyKey: 'level1.story',
    icon: '📝',
    exercises: exercises.filter((e) => e.levelId === 1),
  },
  {
    id: 2,
    titleKey: 'level2.title',
    storyKey: 'level2.story',
    icon: '📋',
    exercises: exercises.filter((e) => e.levelId === 2),
  },
  {
    id: 3,
    titleKey: 'level3.title',
    storyKey: 'level3.story',
    icon: '📊',
    exercises: exercises.filter((e) => e.levelId === 3),
  },
  {
    id: 4,
    titleKey: 'level4.title',
    storyKey: 'level4.story',
    icon: '🎨',
    exercises: exercises.filter((e) => e.levelId === 4),
  },
  {
    id: 5,
    titleKey: 'level5.title',
    storyKey: 'level5.story',
    icon: '✉️',
    exercises: exercises.filter((e) => e.levelId === 5),
  },
  {
    id: 6,
    titleKey: 'level6.title',
    storyKey: 'level6.story',
    icon: '💼',
    exercises: exercises.filter((e) => e.levelId === 6),
  },
];

export function getExercise(id) {
  return exercises.find((e) => e.id === id) || null;
}

export function getNextExercise(currentId) {
  const idx = exercises.findIndex((e) => e.id === currentId);
  return idx >= 0 && idx < exercises.length - 1 ? exercises[idx + 1] : null;
}
