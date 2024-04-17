import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { ExerciseContext } from '../../services/ExerciseContext';

const HomeScreen = () => {
  const context = useContext(ExerciseContext);
  
  // Príklad ochrany pred undefined
  if (!context) {
    return <Text>Loading or context not available</Text>;
  }

  const { exercises, loadExercises } = context;
  const [gymMode, setGymMode] = useState(false);

  useEffect(() => {
    loadExercises();
  }, []);

  const toggleGymMode = () => {
    setGymMode(!gymMode);
  };

  return (
    <ScrollView style={styles.container}>
      <Button icon="dumbbell" mode="contained" onPress={toggleGymMode}>
        {gymMode ? "Exit Gym Mode" : "Enter Gym Mode"}
      </Button>
      {exercises.map((exercise, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{exercise.name}</Title>
            <Paragraph>Weight: {exercise.weight} kg</Paragraph>
            <Paragraph>Reps: {exercise.reps}</Paragraph>
            <Paragraph>Date: {exercise.date}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 8,
  },
});

export default HomeScreen;
