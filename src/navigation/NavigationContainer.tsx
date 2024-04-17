import React from 'react';
import { NavigationContainer as NavContainer } from '@react-navigation/native';
import TabNavigator from './Route/TabNavigator';

const NavigationContainer = () => {
  return (
    <NavContainer>
      <TabNavigator />
    </NavContainer>
  );
};

export default NavigationContainer;
