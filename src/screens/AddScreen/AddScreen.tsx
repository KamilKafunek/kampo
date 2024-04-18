import React from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { AddScreenNavigationProp } from '../../types/navigationTypes';

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
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} {item.part}</Text>
          </View>
        )}
      />
      <Button
        title="Add New Exercise"
        onPress={() => navigation.navigate('ExerciseForm')}
      />
    </View>
  );
};

export default AddScreen;