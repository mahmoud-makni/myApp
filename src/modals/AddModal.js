import React, { Component } from 'react';
import {Text,Platform, Dimensions, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData, {users} from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: '',
            PrixClient:'',
            PrixGanger:'',
            CodeQr:'',
        }; }
showAddModal = () => {
        this.refs.myModal.open();
    }
generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
render() {
        return (
<Modal ref={"myModal"} style={{ justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10, width: screen.width - 120,height: 400 }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }} >
  <Text style={{fontSize: 16, fontWeight: 'bold',textAlign: 'center', marginTop: 40 }}>Ajouter un article</Text>
  <TextInput style={{ height: 40,borderBottomColor: 'gray',marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10,borderBottomWidth: 1 }}           
                onChangeText={(text) => this.setState({ newFoodName: text })}
                placeholder="Enter Nom de l'article"
                value={this.state.newFoodName}    />
  <TextInput style={{height: 40,borderBottomColor: 'gray',marginLeft: 30,marginRight: 30,marginTop: 10,marginBottom: 20,  borderBottomWidth: 1 }}  
                onChangeText={(text) => this.setState({ newFoodDescription: text })}
                placeholder="Enter votre description"
                value={this.state.newFoodDescription} />

<TextInput style={{height: 40,borderBottomColor: 'gray',marginLeft: 30,marginRight: 30,marginTop: 10,marginBottom: 20,  borderBottomWidth: 1 }}  
                onChangeText={(text) => this.setState({ PrixClient: text })}
                placeholder="Enter votre Prix"
                value={this.state.PrixClient} />   
 <TextInput style={{height: 40,borderBottomColor: 'gray',marginLeft: 30,marginRight: 30,marginTop: 10,marginBottom: 20,  borderBottomWidth: 1 }}  
                onChangeText={(text) => this.setState({PrixGanger: text })}
                placeholder="Enter votre Prix gagner"
                value={this.state.PrixGanger} />             


<TextInput style={{height: 40,borderBottomColor: 'gray',marginLeft: 30,marginRight: 30,marginTop: 10,marginBottom: 20,  borderBottomWidth: 1 }}  
                onChangeText={(text) => this.setState({CodeQr: text })}
                placeholder="Enter votre CodeQr"
                value={this.state.CodeQr} />             
                
                
    <Button style={{ fontSize: 18, color: 'white' }}containerStyle={{ padding: 8,marginLeft: 70, marginRight: 70, height: 40, borderRadius: 6, backgroundColor: '#F187DF' }}
                onPress={() => {
     if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                alert("Votre article est bien ajouter");
                   return;
                        }       

 const newKey = this.generateKey(24);
 const newFood = { key: newKey,
                   name: this.state.newFoodName,
                   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                   foodDescription: this.state.newFoodDescription ,
                   PrixClient: this.state.PrixClient,
                   PrixGanger:this.state.PrixGanger,
                   CodeQr:this.state.CodeQr,
                   };    

            flatListData.push(newFood);    
    //   this.props.parentFlatList.refreshFlatList(newKey);                                
            this.refs.myModal.close();  }}>
   Valider
    </Button>
</Modal> );  }}