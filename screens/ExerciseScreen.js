//   addButton: {
//     position: "absolute",
//     zIndex: 11,
//     right: 20,
//     bottom: 90,
//     backgroundColor: 'black',
//     width: 90,
//     height: 90,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8
//   },
//   addButtonText :{
//     color: '#fff',
//     fontSize: 24
//   }
// });

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>Recommended Sets
      </Text>
        </View>
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
  titleText: {
    fontFamily: 'Medium',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  textWrapper: {
    padding: 20
  }
});

export default Exercise;
