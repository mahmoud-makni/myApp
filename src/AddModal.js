import React, { Component } from 'react';
import { AppRegistry,Text,Platform, TouchableHighlight, Dimensions, TextInput} from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''  }; }
    showAddModal = () => {
        this.refs.myModal.open(); }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});  }
    render() {
        return (
<Modal ref={"myModal"}style={{ justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10, width: screen.width - 80, height: 280 }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                 }} >
<Text style={{fontSize: 16, fontWeight: 'bold',textAlign: 'center', marginTop: 40}}>JE VENDS ! un nouveau article</Text>
   <TextInput style={{height: 40, borderBottomColor: 'gray',marginLeft: 30,marginRight: 30, marginTop: 20,marginBottom: 10, borderBottomWidth: 1 }}           
         onChangeText={(text) => this.setState({ newFoodName: text })}
         placeholder="Enter le nom de l'article"
         value={this.state.newFoodName}  />
   <TextInput style={{height: 40,borderBottomColor: 'gray', marginLeft: 30,marginRight: 30, marginTop: 10,marginBottom: 20,borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({ newFoodDescription: text })}
          placeholder="Enter votre description "
          value={this.state.newFoodDescription}  />
   <Button style={{ fontSize: 18, color: 'white' }}
     containerStyle={{ padding: 8, marginLeft: 70, marginRight: 70, height: 40,borderRadius: 6,backgroundColor: '#C37DC8'  }}
     onPress={() => { if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0)
     { alert("Votre Article est enregistre");

   return; }       
        const newKey = this.generateKey(24);
        const newFood = { key: newKey,
                          name: this.state.newFoodName,
                          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Airmax.jpg",
                          foodDescription: this.state.newFoodDescription };

                        flatListData.push(newFood);    
                        this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();  }}> Valider    </Button>
</Modal>    ); }  }