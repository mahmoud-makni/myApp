import React, { Component } from 'react';
import { Text, Platform, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: '',
            PrixClient:'',
            PrixGanger:'',
            CodeQr:'',
        };
    }
    showEditModal = (editingFood, flatlistItem) => {
        // console.log(`editingFood = ${JSON.stringify(editingFood)}`);           
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatlistItem: flatlistItem.PrixClient
        });
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => {

        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal ref={"myModal"} style={{ justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10, width: screen.width - 120, height: 400 }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Nom de l'article</Text>
 <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10, borderBottomWidth: 1  }}
                    onChangeText={(text) => this.setState({ foodName: text })}
                    placeholder="Enter votre Nom d'article"
                    value={this.state.foodName} />
 <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 20, borderBottomWidth: 1 }}
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter votre description"
                    value={this.state.foodDescription} />
 <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 20, borderBottomWidth: 1 }}
                    onChangeText={(text) => this.setState({ PrixClient: text })}
                    placeholder="Enter votre Prix"
                    value={this.state.PrixClient} />

  <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 20, borderBottomWidth: 1 }}
                    onChangeText={(text) => this.setState({ PrixGanger: text })}
                    placeholder="Enter votre Prix gagner"
                    value={this.state.PrixGanger} />              
               
 
<TextInput style={{height: 40,borderBottomColor: 'gray',marginLeft: 30,marginRight: 30,marginTop: 10,marginBottom: 20,  borderBottomWidth: 1 }}  
                onChangeText={(text) => this.setState({providerPhone: text })}
                placeholder="Enter num de fornusseur "
                value={this.state.providerPhone} />             
                             
               
               
               
                <Button style={{ fontSize: 18, color: 'white' }} containerStyle={{ padding: 8, marginLeft: 70, marginRight: 70, height: 40, borderRadius: 6, backgroundColor:'#02FC3A' }}
                    onPress={() => {
                        if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                            alert("Vous inserer le nom ou la descriptions");
                            return;
                        }
                        //Update existing Food
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return; //not found
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        flatListData[foundIndex].PrixClient=this.state.PrixClient;
                        flatListData[foundIndex].PrixGanger=this.state.PrixGanger;
                        flatListData[foundIndex].providerPhone=this.state.providerPhone;
                        //Refresh flatlist item
                     //   this.state.flatlistItem.refreshFlatListItem();
                        this.setState({ foodName: '',foodDescription:'',PrixClient:''})
                        this.refs.myModal.close();
                           }}>
                          Valider
                 </Button>
            </Modal>);  }  }