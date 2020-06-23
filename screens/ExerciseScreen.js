import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExercisePage() {
  return (
    <View style={styles.container}>
      <Text>Bench press</Text>
      {/* <TouchableOpacity style={styles.relativeCard} onPress={() => navigation.navigate('WorkoutScreen')}></TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});