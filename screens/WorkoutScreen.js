import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import ProgressCircle from 'react-native-progress-circle'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/greenButton';

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
        <ScrollView>
          <View style={styles.top}>
            <View style={styles.textContainer}>
              <Text style={styles.topText}>Track your progress</Text>
            </View>
            <View style={styles.whiteBlock}>
              <View style={styles.chartContainer}>
                {/* <ProgressChart data={data} width={200} height={200} strokeWidth={16} radius={32} hideLegend={false}
              />  */}
                <ProgressCircle
                  percent={25}
                  radius={50}
                  borderWidth={18}
                  color="#6699ff"
                  bgColor="#fff"
                  shadowColor='#dadada'
                >
                  <Text style={{ fontSize: 15 }}>{'25%'}</Text>
                </ProgressCircle>
              </View>
              <View style={styles.infoContainer}>

                <View style={styles.caloriesContainer} >
                  <Text style={styles.infoText}>
                    Calories
               </Text>
                  <Text style={styles.infoText}>460KJ
               </Text>
                </View>
                <View style={styles.timeContainer}>
                  <Text style={styles.infoText}>
                    Total Time
               </Text>
                  <Text style={styles.infoText}>
                    40 mins
               </Text>
                </View>
              </View>

              <View style={styles.buttonContainer}>
              <CustomButton text="Complete Workout"></CustomButton>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.textContainer}>
              <Text style={styles.bottomText}>Exercise Breakdown</Text>
            </View>
            <View style={styles.exerciseList}>
              <TouchableOpacity
                style={styles.rect}
                activeOpacity={0.7}
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
            </View>
          </View>
        </ScrollView>
      </View >

    );
  }
}

const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    width: '100%'
  },
  top: {
    backgroundColor: '#2C1966',
    flex: 1,
    flexDirection: 'column',
  },
  whiteBlock: {
    backgroundColor: '#fff',
    // height: 200,
    width: '90%',
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
    // paddingBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  chartContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  caloriesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#dadada',
  },
  timeContainer: {
    flexDirection: 'column',
    padding: 10
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  infoText: {
    textAlign: 'center',
    fontFamily: 'Medium',

  },
  bottom: {
    backgroundColor: '#F8F8F8',
    zIndex: -1,
    flex: 2,
    marginTop: -55,
    paddingTop: 55 + 115,
  },
  bottomText: {
    color: 'black',
    fontFamily: 'Medium',
    letterSpacing: 1,
    textAlign: 'left'
  },

  exerciseList: {
    paddingHorizontal: 15,
  },

  topText: {
    color: '#fff',
    fontFamily: 'Medium',
    letterSpacing: 1,
    textAlign: 'left'
  },

  textContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15
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
    letterSpacing: 0.5,
    paddingVertical: 10
  },

  illustration: {
    color: '#2C1966',
  }

});