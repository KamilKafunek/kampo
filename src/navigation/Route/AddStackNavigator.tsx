import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import AddScreen from '../../screens/AddScreen';
import ExerciseForm from '../../screens/ExerciseForm';

const Stack = createStackNavigator();

const AddStackNavigator = () => {
  const { colors } = useTheme();  // Using React Native Paper's theming capabilities

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,  // Use the primary color from the theme
        },
        headerTintColor: colors.surface,  // Color for header's back button and title
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="AddScreen" 
        component={AddScreen} 
        options={{ title: 'Add Exercise' }} 
      />
      <Stack.Screen 
        name="ExerciseForm" 
        component={ExerciseForm} 
        options={{ title: 'Exercise Details' }}
      />
    </Stack.Navigator>
  );
};

export default AddStackNavigator;
