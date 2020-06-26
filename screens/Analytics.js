import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
          <Text style={styles.topText}>User's Workout Analytics</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, AppRegistry, FlatList, ScrollView } from 'react-native';

// import SetsFlatlistData from '../data/SetsFlatlistData'

// import { useFonts } from '@use-expo/font';
// import { AppLoading } from 'expo';

// export default class FlatlistItem extends Component {
//   render() {
//     let [fontsLoaded] = useFonts({
//       'Regular': require('../assets/fonts/Roboto-Regular.ttf'),
//       'Bold': require('../assets/fonts/Roboto-Bold.ttf'),
//       'Medium': require('../assets/fonts/Roboto-Medium.ttf'),
//     });

//     if (!fontsLoaded) {
//       return <AppLoading />;
//     } else {
//       return (
//         <ScrollView style={styles.container}>

//           <View style={{
//             flex: 1,
//             flexDirection: 'column',
//           }}>
//             <View style={{
//               flex: 1,
//               flexDirection: 'row',
//               backgroundColor: 'mediumseagreen'
//             }}>
              
//               <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 height: 100
//               }}>
//                 <Text style={styles.flatListItem}>{this.props.item.name}</Text>
//                 <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
//               </View>
//             </View>
//             <View style={{
//               height: 1,
//               backgroundColor: 'white'
//             }}>

//             </View>
//           </View>
//         </ScrollView >
//       );
//     }
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   flatListItem: {
//     color: 'white',
//     padding: 10,
//     fontSize: 16,
//   },
//   },
//   setCard: {
//     position: 'relative',
//     padding: 20,
//     paddingRight: 100,
//     borderBottomWidth: 2,
//     borderBottomColor: '#DADADA'
//   }
// })