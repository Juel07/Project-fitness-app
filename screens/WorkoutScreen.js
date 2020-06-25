import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Workout({ navigation }) {
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
        <View style={styles.top}>
          <Text style={styles.topText}>Track your progress</Text>
          <View style={styles.whiteBlock}></View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Exercise Breakdown</Text>
          </View>
          <ScrollView style={styles.exerciseList}>
            <TouchableOpacity
              style={styles.rect}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Bench Press")} >
              <View style={styles.inner} >
                <View style={styles.text} >
                  <Text style={styles.mainText}>Bench Press</Text>
                </View>
                <Icon name="chevron-right" style={styles.illustration} size={25}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rect}
              activeOpacity={0.6}
               >
              <View style={styles.inner} >
                <View style={styles.text} >
                  <Text style={styles.mainText}>Planks</Text>
                </View>
                <Icon name="chevron-right" style={styles.illustration} size={25}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rect}
              activeOpacity={0.6}
 >
              <View style={styles.inner} >
                <View style={styles.text} >
                  <Text style={styles.mainText}>Squats</Text>
                </View>
                <Icon name="chevron-right" style={styles.illustration} size={25}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rect}
              activeOpacity={0.6}
              >
              <View style={styles.inner} >
                <View style={styles.text} >
                  <Text style={styles.mainText}>Pull Ups</Text>
                </View>
                <Icon name="chevron-right" style={styles.illustration} size={25}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  top: {
    width: '100%',
    backgroundColor: '#2C1966',
    flex: 1,
    flexDirection: 'column',
  },
  whiteBlock: {
    backgroundColor: '#fff',
    height: 150,
    width: 280,
    borderRadius: 20,
    shadowColor: "#929292",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 1,
    // paddingTop: 30,
    paddingBottom: 30,
    alignSelf: 'center'
  },
  bottom: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    zIndex: -1,
    flex: 2,
    marginTop: -55,
    paddingTop: 55 + 90,
    paddingHorizontal: 15,
  },
  bottomText: {
    color: 'black',
    fontFamily: 'Medium',
    letterSpacing: 1,
    textAlign: 'left'

  },

  topText: {
    color: '#fff',
    fontFamily: 'Medium',
    letterSpacing: 1,
    padding: 10,
    textAlign: 'left'
  },

  bottomTextContainer: {
  },

  exerciseList: {
  },

  rect: {
    Padding: 10,
    margin: 5
  },

  inner: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    shadowColor: "#dadada",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 3
  },
  mainText: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Medium',
    textTransform: 'uppercase',
    color: '#2C1966',
    letterSpacing: 0.5
  },

  illustration: {
    color: '#2C1966',
  }

});