import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function SettingsPage() {
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
          <Text style={styles.topText}>Settings</Text>
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