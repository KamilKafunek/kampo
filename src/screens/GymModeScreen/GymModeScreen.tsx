// src/screens/GymModeScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { GymModeScreenNavigationProp } from '../../types/navigationTypes';
import { TextInput, Card, Title, Paragraph, Button } from 'react-native-paper';

interface Props {
  navigation: GymModeScreenNavigationProp;
}

const GymModeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button mode="contained">
        test gym screenu
      </Button>
    </View>
  );
};

export default GymModeScreen;
