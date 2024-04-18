export interface Exercise {
  id: string;
  name: string;
  weight?: number; // Zmena na nepovinnú vlastnosť
  reps?: number;  // Zmena na nepovinnú vlastnosť
  part: string;
  date: string;
}

export type ExerciseAction =
| { type: 'ADD_EXERCISE'; exercise: Exercise }
| { type: 'REMOVE_EXERCISE'; id: string }
| { type: 'LOAD_EXERCISES'; exercises: Exercise[] };