import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ExerciseProvider } from './src/services/ExerciseContext';
import NavigationContainer from './src/navigation/NavigationContainer'; // Predpokladám, že cesta je správna
import 'react-native-gesture-handler';

const App = () => {
  return (
    <PaperProvider>
      <ExerciseProvider>
        <NavigationContainer />
      </ExerciseProvider>
    </PaperProvider>
  );
};

export default App;
