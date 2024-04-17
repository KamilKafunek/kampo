import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useExercise } from '../../services/ExerciseContext'; // Predpokladá, že useExercise hook existuje

const AddScreen = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const { addExercise } = useExercise(); // Predpokladá prístup k hooku useExercise

  const handleAddExercise = () => {
    if (!name || !weight || !reps) return;
    addExercise({ id: Date.now().toString(), name, weight: parseInt(weight), reps: parseInt(reps), date: new Date().toISOString() });
    setName('');
    setWeight('');
    setReps('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Exercise Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Repetitions"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddExercise}>
        Add Exercise
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
});

export default AddScreen;
