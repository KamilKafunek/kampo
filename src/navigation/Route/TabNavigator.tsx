// TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigator from './HomeStackNavigator';
import AddStackNavigator from './AddStackNavigator';
import SearchScreen from '../../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'magnify' : 'magnify';  // Consider adding an outline version if available
        } else if (route.name === 'Add') {
          iconName = focused ? 'plus-box' : 'plus-box-outline';
        } else {
          iconName = 'circle';  // Fallback icon in case none of the conditions match
        }

        // Return the icon component with guaranteed string assignment
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: colors.surface },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.background,
    })}
  >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
    title: 'Home',
    headerShown: false 
  }}/>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={AddStackNavigator} options={{
    title: 'Add',
    headerShown: false
  }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
