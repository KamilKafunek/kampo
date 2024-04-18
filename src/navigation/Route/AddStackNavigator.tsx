import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from '../../screens/AddScreen';
import ExerciseForm from '../../screens/ExerciseForm';

const Stack = createStackNavigator();

const AddStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AddScreen" component={AddScreen} />
    <Stack.Screen name="ExerciseForm" component={ExerciseForm} />
  </Stack.Navigator>
);

export default AddStackNavigator;