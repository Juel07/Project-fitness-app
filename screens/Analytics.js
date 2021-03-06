import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function Analytics() {
  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });

  // check if fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2C1966' barStyle="light-content" />
        <Text style={styles.topText}>User's Workout Analytics</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
