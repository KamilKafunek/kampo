// HomeStackNavigator.js

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import GymModeScreen from '../../screens/GymModeScreen';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    title: 'Home',
    headerShown: true  
  }}/>
      <Stack.Screen name="GymModeScreen" component={GymModeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
