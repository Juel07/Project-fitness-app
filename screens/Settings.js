import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Landing() {
  const [workout, setWorkout] = useState([
    { name: 'Work 1', exercise: '4', id: '1' },
    { name: 'Work 2', exercise: '3', id: '2' },
    { name: 'Work 3', id: '3' },
    { name: 'Work 4', id: '4' }
  ])


  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={workout}
        renderItem={({ item }) => (
          <Text style={styles.mainText}>{item.name}</Text>
        )}
      />
    </View>
  )
}
// export default function SettingsPage() {
//   return (
//     <View style={styles.container}>
//       <Text>Settings</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'salmon'
  }
});