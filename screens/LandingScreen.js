import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem } from 'react-native-elements'


export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableScale
          activeScale={0.95}
          friction={90}
          tension={100}
          style={styles.box}
          onPress={() => navigation.navigate("Full Body Workout 1")} >
          <View style={styles.inner} >
            <View style={styles.text} >
              <Text style={styles.mainText}>Full Body Workout 1</Text>
              <Text style={styles.subText}>4 exercises</Text>
            </View>
            <Icon name="chevron-right" style={styles.illustration} size={25} />
          </View>
        </TouchableScale>
        {/* <ListItem
          Component={TouchableScale}
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} //
          onPress={() => navigation.navigate("Full Body Workout 1")}
          title="Full Body Workout"
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          subtitleStyle={{ color: 'black', fontWeight: 'normal' }}
          subtitle="4 Exercises"
          chevron={{ color: 'black', size: 20 }}
          style={styles.rect}
          containerStyle={{
            borderRadius: 10, shadowColor: "#929292",
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowOpacity: 5,
            shadowRadius: 4
          }}
        /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'space-around'
  },

  box: {
    Padding: 10,
    margin: 10
  },

  inner: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    shadowColor: "#929292",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 5,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 3
  },
  mainText: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: '600'
  },

  subText: {
    fontSize: 14,
    textAlign: 'left',
    color: '#929292'
  },

  illustration: {
    color: '#2C1966',
  }

});

