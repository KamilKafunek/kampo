import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  AddScreen: undefined;
  ExerciseForm: undefined;
  EditExerciseForm: { exerciseId: string };               
  GymModeScreen: undefined;
  HomeScreen: undefined;
};

export type AddScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddScreen'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type ExerciseFormNavigationProp = StackNavigationProp<RootStackParamList, 'ExerciseForm'>;
export type EditExerciseFormNavigationProp = StackNavigationProp<RootStackParamList, 'EditExerciseForm'>;
export type GymModeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GymModeScreen'>;