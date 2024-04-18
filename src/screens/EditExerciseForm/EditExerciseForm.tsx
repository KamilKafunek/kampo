// src/screens/EditExerciseForm.tsx
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { EditExerciseFormNavigationProp } from '../../types/navigationTypes';
import { TextInput, Button } from 'react-native-paper';

interface Props {
  navigation: EditExerciseFormNavigationProp;
  route: any;
}

const EditExerciseForm: React.FC<Props> = ({ navigation, route }) => {
  const { exerciseId } = route.params;
  const { exercises, updateExercise } = useExercise();
  const exercise = exercises.find(ex => ex.id === exerciseId);

  const [name, setName] = useState(exercise ? exercise.name : '');
  const [part, setPart] = useState(exercise ? exercise.part : 'Chest');

  const handleSave = () => {
    if (!name || !part) return;
  
    // Ensure the updatedExercise object includes all necessary properties
    const updatedExercise = {
      id: exerciseId, // Include the id
      name, 
      part, 
      date: new Date().toISOString()
    };
  
    // Now calling updateExercise with the properly structured object
    updateExercise(exerciseId, updatedExercise);
    navigation.goBack();
  };
  
  const handleCancel = () => {
    navigation.goBack();  // Simply navigates back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Exercise Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Picker
        selectedValue={part}
        onValueChange={setPart}
        style={styles.picker}
      >
        <Picker.Item label="Chest" value="Chest" />
        <Picker.Item label="Back" value="Back" />
        <Picker.Item label="Legs" value="Legs" />
        <Picker.Item label="Arms" value="Arms" />
        <Picker.Item label="Shoulders" value="Shoulders" />
        <Picker.Item label="Core" value="Core" />
      </Picker>
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
      <Button mode="outlined" onPress={handleCancel} style={styles.button}>
        Cancel
      </Button>
    </View>
  );
};

export default EditExerciseForm;
