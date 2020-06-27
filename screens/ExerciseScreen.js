import React from 'react';
import { StyleSheet, View } from 'react-native';

import BasicFlatlist from '../components/BasicFlatlist'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Exercise = () => {
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
        <BasicFlatlist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8'
  },
});

export default Exercise;
