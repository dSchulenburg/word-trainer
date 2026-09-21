import { useState, useCallback, useRef } from 'react';
import { useI18n } from '../context/I18nContext';
import { useGame } from '../context/GameContext';
import { dispatchSectionComplete } from '../../../shared/journal/dispatch';
import { exercises as alleUebungen } from '../exercises';
import { validateExercise, getCompletedSteps } from '../utils/validation';
import { calculateExerciseXP, calculateStars } from '../utils/xp';
import ExerciseInstructions from './ExerciseInstructions';
import DocumentArea from './DocumentArea';
import ValidationFeedback from './ValidationFeedback';
import LevelComplete from './LevelComplete';

export default function ExerciseView({ exercise, onBack, onNextExercise }) {
  const { t } = useI18n();
  const { completeExercise, exerciseResults } = useGame();
  const [docJSON, setDocJSON] = useState(null);
  const [validationResult, setValidationResult] = useState(null);
  const [completedSteps, setCompletedSteps] = useState(new Map());
  const [showComplete, setShowComplete] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [stars, setStars] = useState(0);
  const startTime = useRef(Date.now());
  const totalErrors = useRef(0);

  const handleDocChange = useCallback(
    (json) => {
      setDocJSON(json);
      const steps = getCompletedSteps(exercise.validations, json);
      setCompletedSteps(steps);
    },
    [exercise]
  );

  const handleCheck = useCallback(() => {
    if (!docJSON) return;
    const result = validateExercise(exercise.validations, docJSON);
    setValidationResult(result);
    setCompletedSteps(getCompletedSteps(exercise.validations, docJSON));

    if (result.passed) {
      const seconds = Math.floor((Date.now() - startTime.current) / 1000);
      const xp = calculateExerciseXP(exercise, totalErrors.current, seconds);
      const s = calculateStars(totalErrors.current);
      setEarnedXP(xp);
      setStars(s);
      completeExercise(exercise.id, totalErrors.current, seconds, exercise);
      setShowComplete(true);

      // Journal-Signal: genau einmal feuern, wenn das LEVEL gerade fertig wird.
      // exerciseResults ist der Stand VOR diesem completeExercise, enthaelt die
      // eben geloeste Aufgabe also noch nicht. Ohne die wasAlreadyDone-Pruefung
      // kaeme die Reflexionskarte bei jeder Wiederholung erneut hoch.
      const levelUebungen = alleUebungen.filter((e) => e.levelId === exercise.levelId);
      const schonFertig = !!exerciseResults[exercise.id];
      const fertigJetzt =
        levelUebungen.filter((e) => exerciseResults[e.id]).length + (schonFertig ? 0 : 1);
      if (!schonFertig && levelUebungen.length > 0 && fertigJetzt >= levelUebungen.length) {
        dispatchSectionComplete('word-trainer', `level-${exercise.levelId}`, {
          concepts: [exercise.type || 'formatierung'],
        });
      }
    } else {
      totalErrors.current += result.errors;
    }
  }, [docJSON, exercise, completeExercise, exerciseResults]);

  if (showComplete) {
    return (
      <LevelComplete
        exercise={exercise}
        stars={stars}
        xp={earnedXP}
        onNext={onNextExercise}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="exercise-view">
      <div className="exercise-sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="btn btn--secondary" onClick={onBack} style={{ padding: '0.3rem 0.6rem' }}>
            {'←'} {t('common.back')}
          </button>
          <h2 className="exercise-sidebar__title">{t(exercise.titleKey)}</h2>
        </div>
        <ExerciseInstructions exercise={exercise} completedSteps={completedSteps} />
      </div>
      <div className="exercise-view__editor">
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
          <DocumentArea exercise={exercise} onDocChange={handleDocChange} />
        </div>
        <ValidationFeedback
          validationResult={validationResult}
          onCheck={handleCheck}
          allDone={validationResult?.passed}
        />
      </div>
    </div>
  );
}
