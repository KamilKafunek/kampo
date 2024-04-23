import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import AddScreen from '../../screens/AddScreen';
import ExerciseForm from '../../screens/ExerciseForm';
import EditExerciseForm from '../../screens/EditExerciseForm';


const Stack = createStackNavigator();

const AddStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
      }}
    >
      <Stack.Screen name="AddScreen" component={AddScreen} options={{
    title: 'Add',
    headerShown: true
  }}/>
      <Stack.Screen name="ExerciseForm" component={ExerciseForm} />
      <Stack.Screen name="EditExerciseForm" component={EditExerciseForm} />
    </Stack.Navigator>
  );
};

export default AddStackNavigator;
