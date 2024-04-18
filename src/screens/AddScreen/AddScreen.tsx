import React from 'react';
import { View, FlatList } from 'react-native';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { AddScreenNavigationProp } from '../../types/navigationTypes';
import { Card, Title, Button } from 'react-native-paper';

interface Props {
  navigation: AddScreenNavigationProp;
}

const AddScreen: React.FC<Props> = ({ navigation }) => {
  const { exercises } = useExercise();

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.titleContainer}>
                <Title>{item.name} - {item.part}</Title>
              </View>
              <Button
                compact  // Makes the button smaller
                onPress={() => { /* add function to edit or view more details */ }}
                style={styles.editButton}>
                Edit
              </Button>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <View style={styles.footer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => navigation.navigate('ExerciseForm')}
          style={styles.addButton}>
          Add Exercise
        </Button>
      </View>
    </View>
  );
};

export default AddScreen;
