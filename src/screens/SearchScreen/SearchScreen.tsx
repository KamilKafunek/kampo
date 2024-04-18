import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { TextInput, Card, Title, Paragraph } from 'react-native-paper';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const { exercises } = useExercise();
  const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        label="Search Exercises"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <FlatList
        data={filteredExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>Weight: {item.weight} kg</Paragraph>
              <Paragraph>Reps: {item.reps}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default SearchScreen;