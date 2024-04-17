import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Exercise, ExerciseAction } from '../types';
import { exerciseReducer } from './exerciseReducer';

interface ExerciseProviderProps {
  children: ReactNode;
}

interface ExerciseContextType {
  exercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (id: string) => void;
  loadExercises: () => void;
}

export const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export const ExerciseProvider: React.FC<ExerciseProviderProps> = ({ children }) => {
  const [exercises, dispatch] = useReducer(exerciseReducer, []);

  const addExercise = (exercise: Exercise) => dispatch({ type: 'ADD_EXERCISE', exercise });
  const removeExercise = (id: string) => dispatch({ type: 'REMOVE_EXERCISE', id });
  const loadExercises = () => {
    // Načítanie cvičení (toto je príklad, skutočná implementácia by mala zahrňovať načítanie z externého zdroja)
    const loadedExercises: Exercise[] = [];
    dispatch({ type: 'LOAD_EXERCISES', exercises: loadedExercises });
  };

  return (
    <ExerciseContext.Provider value={{ exercises, addExercise, removeExercise, loadExercises }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error('useExercise must be used within an ExerciseProvider');
  }
  return context;
};
