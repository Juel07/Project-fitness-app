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
import { StyleSheet, View } from 'react-native';

import BasicFlatlist from '../components/BasicFlatlist'


const Exercise = () => {
  return (
    <View style={styles.container}>
      <BasicFlatlist />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
});

export default Exercise;
