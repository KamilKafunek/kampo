// src/screens/ExerciseForm.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { ExerciseFormNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: ExerciseFormNavigationProp;
}

const ExerciseForm: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [part, setPart] = useState('Chest'); // Predvolená hodnota
  const { addExercise } = useExercise();

  const handleAddExercise = () => {
    if (!name) return;
    addExercise({ id: Date.now().toString(), name, part, date: new Date().toISOString() });
    navigation.goBack(); // Vráťte sa späť po pridaní cviku
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Picker
        selectedValue={part}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setPart(itemValue)}
      >
        <Picker.Item label="Chest" value="Chest" />
        <Picker.Item label="Back" value="Back" />
        <Picker.Item label="Legs" value="Legs" />
        <Picker.Item label="Arms" value="Arms" />
      </Picker>
      <Button title="Add Exercise" onPress={handleAddExercise} />
    </View>
  );
};

export default ExerciseForm;
