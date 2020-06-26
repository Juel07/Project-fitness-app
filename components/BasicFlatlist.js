import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry, FlatList, ScrollView } from 'react-native';
// import Swipeout from 'react-native-swipeout'
import SetsFlatlistData from '../data/SetsFlatlistData'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

class FlatlistItem extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.inner}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: 80,
                    }}>
                        <Text style={styles.numberOfSets}>{this.props.item.name}</Text>
                        <Text style={styles.numberKGS}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'white'
                }}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10
    },
    numberOfSets: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2C1966',
    },
    numberKGS: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2C1966',
    }
})

export default function Analytics() {
    let [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flex: 1 }}>
                <FlatList data={SetsFlatlistData} renderItem={({ item, index }) => {
                    return (<FlatlistItem item={item} index={index}>

                    </FlatlistItem>);
                }}
                >
                </FlatList>
            </View>
        )
    }

}

