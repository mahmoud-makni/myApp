import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Image, Alert, Platform, TouchableHighlight, Text,TextInput } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal'

class FlatListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null    };  }
    render() {
        const swipeSettings = {
        autoClose: true,
        onClose: (secId, rowId, direction) => {
             if (this.state.activeRowKey != null) {
                 this.setState({ activeRowKey: null });  }  },
        onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key }); },
             right: [
 {      onPress: () => {
         const deletingRow = this.state.activeRowKey;
         Alert.alert(
        'Attentions',
        'Etes-vous sûr que vous voulez supprimer?',
         [
         { text: 'Non', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
         { text: 'Oui', onPress: () => {
                  flatListData.splice(this.props.index, 1);
                         //Refresh FlatList ! 
                  this.props.parentFlatList.refreshFlatList(deletingRow);  } },],
      
      { cancelable: true }  );    },
         text: 'Supprimer', type: 'delete' } ],
         rowId: this.props.index,
         sectionId: 1 };
      
      
      
      return (
<Swipeout {...swipeSettings}>
     <View style={{ flex: 1,flexDirection:'column'}}>
         <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#A0C2EA' }}>
             <Image source={{ uri: this.props.item.imageUrl }}
                style={{ width: 100, height: 100, margin: 5 }}>
             </Image>
                       
                       
         <View style={{flex: 1, flexDirection: 'column', height: 100}}>
               <Text style={styles.flatListItem}>{this.props.item.name}</Text>
               <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
         </View>
         </View>
      <View style={{ height: 1, backgroundColor: '#EA66B1' }}>

     </View>
     </View>
 </Swipeout>  );  }  }
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 8,
        fontSize: 16, }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
 <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
    <View style={{ backgroundColor: '#A0C2EA', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', height: 64 }}><View>
    <Text style={{ left: -50, color: '#EA66B1', fontSize: 26 }}>Liste des articles</Text>
 
 </View>
    <TouchableHighlight
            style={{ marginRight: 40}}
            underlayColor='tomato'
             onPress={this._onPressAdd} >
         <Image
            style={{ width: 40, height: 40 }}
            source={require('../icons/icons-add.png')} />
    </TouchableHighlight>
 </View>
     <FlatList
          ref={"flatList"}
          data={flatListData}
          renderItem={({ item, index }) => {
                       
         return (
        
           <FlatListItem item={item} index={index} parentFlatList={this}>
           </FlatListItem>);  }}  >
     </FlatList>
         <AddModal ref={'addModal'} parentFlatList={this} >
         </AddModal>
 </View>    );  } }