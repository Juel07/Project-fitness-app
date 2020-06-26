import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry, FlatList, ScrollView } from 'react-native';

import SetsFlatlistData from '../data/SetsFlatlistData'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

class FlatlistItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'mediumseagreen'
                }}>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 100
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListItem: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: '#2C1966'
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

