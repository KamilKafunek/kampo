import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import AddScreen from '../../screens/AddScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Používame ikony od MaterialCommunityIcons

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'help-circle'; // Predvolený názov ikony ako fallback
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
                iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Add') {
                iconName = focused ? 'plus-box' : 'plus-box-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
        },        
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Add" component={AddScreen} />
  </Tab.Navigator>
);

export default TabNavigator;