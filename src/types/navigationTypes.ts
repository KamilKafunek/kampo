import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  AddScreen: undefined;
  ExerciseForm: undefined;
};

export type AddScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddScreen'>;
export type ExerciseFormNavigationProp = StackNavigationProp<RootStackParamList, 'ExerciseForm'>;