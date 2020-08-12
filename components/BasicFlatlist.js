import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Platform, Image, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout'
import SetsFlatlistData from '../data/SetsFlatlistData'
import AddModal from './AddModal'
import EditModal from './EditModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import flatListData from '../data/SetsFlatlistData';

console.disableYellowBox = true; // removed when fixed

class FlatlistItem extends Component {
    constructor(props) { // constructor method to initialise an objects state in a class
        super(props); //when using constructor, you have to use super(props) method before any other statement, or this.state will be undefined
        this.state = { // define the state inside the constructor 
            activeRowKey: null //you can save your key inside this
        };
    }
    refreshFlatlistItem = () => { //automatically rerender after the state is changed.it will change the state of the flatlist item and after it has changed .
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1 //variable starts from 0, increase the no. of refresh when you update and the state is changed
            };
        });        
    }
    render() {
        const swipeSettings = {

            autoClose: true,
            onClose: (secId, rowId, direction) => { //moving from L to R
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => { //when you move from R to L, it refers to onOPen property 
                this.setState({ activeRowKey: this.props.item.key }); //REMOVE object from an array
            },
            right: [ //when you want to add task 
                { //edit object
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);  //editing the food object. this: flatlistItem's object
                    },
                    text: 'Edit', type: 'primary'
                },
                { //delete object
                    backgroundColor: '#F8F8F8',
                    color: 'red',
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete this set ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        SetsFlatlistData.splice(this.props.index, 1);
                                        //Refresh FlatList ! 
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index, //flat lists also have section ids and the default is 1 
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}
            >
                <View style={styles.card}>
                    <View style={styles.inner}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            height: 80,
                        }}>
                            <Text style={styles.numberOfReps}>{this.props.item.reps}</Text>
                            <Text style={{ padding: 2, fontSize: 18 }}>REPS</Text>
                            <Text style={styles.numberKGS}>{this.props.item.weight}</Text>
                            <Text style={{ padding: 10, fontSize: 18 }}>KGS</Text>
                        </View>
                        <Icon name="chevron-right" style={{color: '#DADADA', padding: 10}} size={25} />
                    </View>
                    <View style={styles.outer}>
                        <Text style={styles.numberOfSecs}>{this.props.item.rest}s</Text>
                        <Text style={{ paddingLeft: 2, fontSize: 18, fontWeight: '500', color: '#fff' }}>REST</Text>
                    </View>
                </View>

            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        borderBottomColor: '#F8F8F8',
        borderBottomWidth: 1.5,
        paddingLeft:10
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10
    },
    numberOfReps: {
        color: 'black',
        fontSize: 36,
        marginLeft: 5,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2C1966',
    },
    numberKGS: {
        color: 'black',
        fontSize: 36,
        paddingLeft: 20,
    },
    outer: {
        backgroundColor: '#6699ff',
        borderRadius: 40,
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberOfSecs: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default class BasicFlatlist extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null, //initialises a state
        });
        this._onPressAdd = this._onPressAdd.bind(this) //binds "this" to BasicFlatlist's object. it attaches object to the function. everytime the function is called it refers to the bound object
    } //for our methods to have access to this.state and this.props we need to bind the react component 'this' context to those methods.
    refreshFlatList = (deletedKey) => { //function defined here, could change deleted key to active key. 
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
        this.refs.flatList.scrollToEnd(); //scroll the list to the end when new item added
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal()
    }
    render() {

        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 0 }}>
                <View style={{
                    backgroundColor: '#2C1966',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 64
                }}>
                    <Text style={{
                        textTransform: 'uppercase',
                        letterSpacing: 0.5, paddingLeft: 20, color: '#fff', fontSize: 18
                    }}>Recommended Sets</Text>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='#fff'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{ width: 35, height: 35, backgroundColor: '#2C1966' }}
                            source={require('../assets/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    extraData={this.state.activeRowKey}
                    data={SetsFlatlistData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatlistItem item={item} index={index} parentFlatList={this}>

                            </FlatlistItem>);
                    }}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}></AddModal> 
                //parent flatlist object
                <EditModal ref={'editModal'} parentFlatList={this}></EditModal>  
                //'edit modal' is a reference name
            </View>
        );
    }
}

