import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  AddScreen: undefined;
  ExerciseForm: undefined;
  EditExerciseForm: { exerciseId: string };
};

export type AddScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddScreen'>;
export type ExerciseFormNavigationProp = StackNavigationProp<RootStackParamList, 'ExerciseForm'>;
export type EditExerciseFormNavigationProp = StackNavigationProp<RootStackParamList, 'EditExerciseForm'>;