import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, Alert,
    Platform, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
// import Button from 'react-native-button';
import Button from './greenButton';

import flatListData from '../data/SetsFlatlistData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newReps: '',
            newWeight: '',
            newRest: ''
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 20,
                    textTransform: 'uppercase',
                    letterSpacing: 0.6
                }}>New Set</Text>
                <TextInput keyboardType='numeric'
                    style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ newReps: text })}
                    placeholder="Enter number of Reps"
                    value={this.state.newReps}                 
                />
                <TextInput keyboardType='numeric'
                    style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ newWeight: text })}
                    placeholder="Enter the Weight in Kgs"
                    value={this.state.newWeight}
                />
                <TextInput keyboardType='numeric'
                    style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ newRest: text })}
                    placeholder="Enter the resting time in seconds"
                    value={this.state.newRest}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }} text={'Add this set'}
                    onPress={() => {
                         if (this.state.newReps.length == 0 || this.state.newWeight.length == 0) {
                            alert("You must enter the number of Reps and weight (Kgs) for this set");
                            return;
                        }       
                        const newKey = this.generateKey(24);
                        const newSet = {
                            key: newKey,
                            reps: this.state.newReps,
                            weight: this.state.newWeight,
                            rest: this.state.newRest
                        };    
                        flatListData.push(newSet);    
                        this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}>
                </Button>
            </Modal>
        );
    }
}