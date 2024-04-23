import React from 'react';
import { NavigationContainer as NavContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './Route/TabNavigator';  // Adjust the path as necessary

const RootStack = createStackNavigator();

const NavigationContainer = () => {
  return (
    <NavContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Main" component={TabNavigator} />
        {/* Add other screens here if necessary */}
      </RootStack.Navigator>
    </NavContainer>
  );
};

export default NavigationContainer;
