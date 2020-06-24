import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

export default function Workout() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Track your Progress</Text>
        <View style={styles.whiteBlock}>     {/* flex: 1 */}
          <View style={styles.chartContainer}>  {/* flex: 1 */}
            <ProgressChart data={data} width={200} height={200} strokeWidth={16} radius={32} chartConfig={chartConfig} hideLegend={true}
          /> 
          </View>

          <View style={styles.infoContainer}>  {/* flex: 1 */}

            <View style={styles.caloriesContainer} > {/* add CSS for divider- 1px, #DADADA */}
              <Text style={styles.infoText}>
                Calories
              </Text>
              <Text style={styles.infoText}>
                460KJ
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

          <View style={styles.buttonContainer}>  {/* flex: 1, align 7 justigy: center, custom button component */}

          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.mainText}>Exercise Breakdown</Text>
        </View>
        <ScrollView>

        </ScrollView>
      </View>
    </View>
  )
}

const data = {
  data: [0.7]
}

// export default function Analytics() {
//   return (
//     <View style={styles.container}>
//       <Text>User's Workout Analytics</Text>
//     </View>
//   );
// }

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
    flex: 1
  },
  bottom: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    flex: 2,
  },
  mainText: {
    color: '#FFFFF',
    fontFamily: 'Roboto-Medium',
  },

  topText: {
    color: 'black',
    fontFamily: 'Roboto-Medium',
  }

});