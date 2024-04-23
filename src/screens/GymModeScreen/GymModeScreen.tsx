// src/screens/GymModeScreen.tsx
import React, { useState, useEffect } from 'react';
import { useExercise } from '../../services/ExerciseContext';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { GymModeScreenNavigationProp } from '../../types/navigationTypes';
import { TextInput, Card, Title, Paragraph, Button } from 'react-native-paper';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


interface Props {
  navigation: GymModeScreenNavigationProp;
}

const GymModeScreen: React.FC<Props> = (props) => {
  const [time, setTime] = useState(0); // Stopwatch time in seconds
  const [running, setRunning] = useState(false);
  const [clicks, setClicks] = useState(0); // To detect double clicks

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null; // Declare interval here, initialized as null

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval); // Clear only if interval is not null
    };
  }, [running]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clicks === 1) {
        setRunning(!running);
      } else if (clicks === 2) {
        setTime(0);
        setRunning(false);
      }
      setClicks(0); // Reset click count after delay
    }, 300); // 300 ms for double click interval

    return () => clearTimeout(timer);
  }, [clicks]);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>{formatTime()}</Text>
        </TouchableOpacity>
    </View>
);
};


export default GymModeScreen;
