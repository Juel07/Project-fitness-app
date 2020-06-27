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

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newReps: '',
            newWeight: '',
            newRest: ''
        };
    }
    showEditModal = (editingSet, flatlistItem) => {
        this.setState({
            key: editingSet.key,
            newReps: editingSet.reps,
            newWeight: editingSet.weight,
            newRest: editingSet.rest,
            flatlistItem: flatlistItem
        })
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
                }}>Edit Set</Text>
                <TextInput keyboardType='numeric'
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
                    placeholder="Edit number of Reps"
                    value={this.state.newReps}
                />
                <TextInput keyboardType='numeric'
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
                    placeholder="Edit the Weight in Kgs"
                    value={this.state.newWeight}
                />
                <TextInput keyboardType='numeric'
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
                    placeholder="Edit the resting time in seconds"
                    value={this.state.newRest}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }} text={'Edit this set'}
                    onPress={() => {
                        if (this.state.newReps.length == 0 || this.state.newWeight.length == 0) {
                            alert("You must enter the number of Reps and weight (Kgs) for this set");
                            return;
                        }
                        // update existing set
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return; //not found
                        }
                        flatListData[foundIndex].reps = this.state.newReps;
                        flatListData[foundIndex].weight = this.state.newWeight;
                        flatListData[foundIndex].rest = this.state.newRest;
                        //refresh flatlist item
                        this.state.flatlistItem.refreshFlatlistItem();
                        this.refs.myModal.close();
                    }}>
                </Button>
            </Modal>
        );
    }
}