import { Exercise, ExerciseAction } from '../types';

export function exerciseReducer(state: Exercise[], action: ExerciseAction): Exercise[] {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [...state, action.exercise];
    case 'REMOVE_EXERCISE':
      return state.filter(exercise => exercise.id !== action.id);
    case 'LOAD_EXERCISES':
      return action.exercises;
    case 'UPDATE_EXERCISE':
      return state.map(exercise =>
        exercise.id === action.id ? { ...exercise, ...action.exercise } : exercise
      );
    default:
      return state;
  }
}
