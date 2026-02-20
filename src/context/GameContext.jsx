import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { loadState, saveState } from '../utils/storage';
import { calculateExerciseXP, calculateStars } from '../utils/xp';

const GameContext = createContext();

const BADGE_DEFS = {
  'first-text': { icon: '✏️', titleKey: 'badge.firstText' },
  'first-format': { icon: '🎨', titleKey: 'badge.firstFormat' },
  'brief-done': { icon: '📝', titleKey: 'badge.briefDone' },
  'listen-done': { icon: '📋', titleKey: 'badge.listenDone' },
  'tabellen-done': { icon: '📊', titleKey: 'badge.tabellenDone' },
  'design-done': { icon: '🎨', titleKey: 'badge.designDone' },
  'geschaeftsbrief-done': { icon: '✉️', titleKey: 'badge.geschaeftsbriefDone' },
  'profi-done': { icon: '💼', titleKey: 'badge.profiDone' },
  'perfect-score': { icon: '⭐', titleKey: 'badge.perfectScore' },
  'speed-demon': { icon: '⚡', titleKey: 'badge.speedDemon' },
  'streak-3': { icon: '🔥', titleKey: 'badge.streak3' },
  'polyglot': { icon: '🌍', titleKey: 'badge.polyglot' },
  'formatting-king': { icon: '👑', titleKey: 'badge.formattingKing' },
};

const initialState = {
  playerName: '',
  avatarId: 0,
  xp: 0,
  badges: [],
  exerciseResults: {},
  streak: { count: 0, lastDate: null },
  formatUseCount: 0,
  hasChangedLanguage: false,
  firstTextWritten: false,
  firstFormatApplied: false,
};

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, playerName: action.name, avatarId: action.avatarId };

    case 'COMPLETE_EXERCISE': {
      const { exerciseId, errors, timeSeconds, exercise } = action;
      const existing = state.exerciseResults[exerciseId];
      const stars = calculateStars(errors);
      const xpEarned = calculateExerciseXP(exercise, errors, timeSeconds);

      const prevStars = existing ? existing.stars : 0;
      const addXP = !existing ? xpEarned : stars > prevStars ? Math.floor(xpEarned * 0.5) : 0;

      const newResults = {
        ...state.exerciseResults,
        [exerciseId]: {
          stars: Math.max(stars, prevStars),
          bestTime: existing ? Math.min(existing.bestTime, timeSeconds) : timeSeconds,
          attempts: (existing?.attempts || 0) + 1,
        },
      };

      const newBadges = [...state.badges];
      if (stars === 3 && !newBadges.includes('perfect-score')) newBadges.push('perfect-score');
      if (timeSeconds < 60 && !newBadges.includes('speed-demon')) newBadges.push('speed-demon');

      const levelBadges = [
        { ids: ['L1-EX1', 'L1-EX2', 'L1-EX3', 'L1-EX4'], badge: 'brief-done' },
        { ids: ['L2-EX1', 'L2-EX2', 'L2-EX3', 'L2-EX4'], badge: 'listen-done' },
        { ids: ['L3-EX1', 'L3-EX2', 'L3-EX3', 'L3-EX4'], badge: 'tabellen-done' },
        { ids: ['L4-EX1', 'L4-EX2', 'L4-EX3', 'L4-EX4'], badge: 'design-done' },
        { ids: ['L5-EX1', 'L5-EX2', 'L5-EX3', 'L5-EX4'], badge: 'geschaeftsbrief-done' },
        { ids: ['L6-EX1', 'L6-EX2', 'L6-EX3', 'L6-EX4'], badge: 'profi-done' },
      ];
      for (const { ids, badge } of levelBadges) {
        const allDone = ids.every((id) => newResults[id] || id === exerciseId);
        if (allDone && !newBadges.includes(badge)) newBadges.push(badge);
      }

      return { ...state, xp: state.xp + addXP, exerciseResults: newResults, badges: newBadges };
    }

    case 'UPDATE_STREAK': {
      const today = getToday();
      if (state.streak.lastDate === today) return state;
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      const isConsecutive = state.streak.lastDate === yesterday;
      const newCount = isConsecutive ? state.streak.count + 1 : 1;
      const newBadges = [...state.badges];
      if (newCount >= 3 && !newBadges.includes('streak-3')) newBadges.push('streak-3');
      return { ...state, streak: { count: newCount, lastDate: today }, badges: newBadges };
    }

    case 'TEXT_WRITTEN': {
      const newBadges = [...state.badges];
      if (!state.firstTextWritten && !newBadges.includes('first-text')) newBadges.push('first-text');
      return { ...state, firstTextWritten: true, badges: newBadges };
    }

    case 'FORMAT_APPLIED': {
      const newBadges = [...state.badges];
      if (!state.firstFormatApplied && !newBadges.includes('first-format')) newBadges.push('first-format');
      const newFormatCount = state.formatUseCount + 1;
      if (newFormatCount >= 10 && !newBadges.includes('formatting-king')) newBadges.push('formatting-king');
      return { ...state, firstFormatApplied: true, formatUseCount: newFormatCount, badges: newBadges };
    }

    case 'LANGUAGE_CHANGED': {
      if (state.hasChangedLanguage) return state;
      const newBadges = [...state.badges];
      if (!newBadges.includes('polyglot')) newBadges.push('polyglot');
      return { ...state, hasChangedLanguage: true, badges: newBadges };
    }

    case 'LOAD_STATE':
      return { ...initialState, ...action.state };

    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
}

export { BADGE_DEFS };

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const saved = loadState();
    return saved ? { ...init, ...saved } : init;
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const completeExercise = useCallback((exerciseId, errors, timeSeconds, exercise) => {
    dispatch({ type: 'COMPLETE_EXERCISE', exerciseId, errors, timeSeconds, exercise });
  }, []);

  const notifyTextWrite = useCallback(() => dispatch({ type: 'TEXT_WRITTEN' }), []);
  const notifyFormatApply = useCallback(() => dispatch({ type: 'FORMAT_APPLIED' }), []);
  const notifyLanguageChange = useCallback(() => dispatch({ type: 'LANGUAGE_CHANGED' }), []);
  const setProfile = useCallback((name, avatarId) => dispatch({ type: 'SET_PROFILE', name, avatarId }), []);
  const resetProgress = useCallback(() => dispatch({ type: 'RESET' }), []);

  const isExerciseUnlocked = useCallback(
    (exerciseId, allExercises) => {
      const ex = allExercises.find((e) => e.id === exerciseId);
      if (!ex) return false;
      const levelExercises = allExercises
        .filter((e) => e.levelId === ex.levelId)
        .sort((a, b) => a.order - b.order);
      const idx = levelExercises.findIndex((e) => e.id === exerciseId);

      if (idx === 0) {
        if (ex.levelId === 1) return true;
        const prevLevelExercises = allExercises.filter((e) => e.levelId === ex.levelId - 1);
        return prevLevelExercises.every((e) => state.exerciseResults[e.id]);
      }
      const prevEx = levelExercises[idx - 1];
      return !!state.exerciseResults[prevEx.id];
    },
    [state.exerciseResults]
  );

  return (
    <GameContext.Provider
      value={{
        ...state,
        dispatch,
        completeExercise,
        notifyTextWrite,
        notifyFormatApply,
        notifyLanguageChange,
        setProfile,
        resetProgress,
        isExerciseUnlocked,
        badgeDefs: BADGE_DEFS,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
