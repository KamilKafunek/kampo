import React from 'react';
import { ExerciseProvider } from './src/services/ExerciseContext';
import NavigationContainer from './src/navigation/NavigationContainer'; 
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ExerciseProvider>
        <NavigationContainer />
      </ExerciseProvider>
    </PaperProvider>
  );
};

export default App;
