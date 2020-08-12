import React, { Component } from 'react';
import {
    Text, Alert,
    Platform, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
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
        return require('random-string')({ length: numberOfCharacters });
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
                    height: 340,
                    backgroundColor: '#fff'
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
                <TextInput keyboardType='numeric' selectionColor='#2C1966'
                    style={{
                        height: 40,
                        borderBottomColor: '#DADADA',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 15,
                        marginBottom: 10,
                        borderBottomWidth: 2,
                        textAlign: 'center'
                    }}
                    onChangeText={(text) => this.setState({ newReps: text })}
                    placeholder="Enter number of Reps"
                    value={this.state.newReps}
                />
                <TextInput keyboardType='numeric' selectionColor='#2C1966'
                    style={{
                        height: 40,
                        borderBottomColor: '#DADADA',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 2,
                        textAlign: 'center'
                    }}

                    onChangeText={(text) => this.setState({ newWeight: text })}
                    placeholder="Enter the Weight in Kgs"
                    value={this.state.newWeight}
                />
                <TextInput keyboardType='numeric' selectionColor='#2C1966'
                    style={{
                        height: 40,
                        borderBottomColor: '#DADADA',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 2,
                        textAlign: 'center'
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
                        const newKey = this.generateKey(24); //generate key with 24 characters
                        const newSet = {
                            key: newKey,
                            reps: this.state.newReps,
                            weight: this.state.newWeight,
                            rest: this.state.newRest
                        };
                        flatListData.push(newSet);
                        this.props.parentFlatList.refreshFlatList(newKey); //refresh the flatlist after adding the data, by calling the parent flatlist
                        this.refs.myModal.close(); //closing the modal - use the reference name of the modal component. call the function close()
                    }}>
                </Button>
            </Modal>
        );
    }
}