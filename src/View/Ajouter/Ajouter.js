import React, { Component } from 'react';
import {AppRegistry, StyleSheet,Text,TouchableOpacity, Linking, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import flatData, {users} from '../../data/flatListData'
export default class Ajouter extends React.Component {
  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    const user = users.find( user => user.phoneNumber === e.data )
    console.log({e})
    if (user) {
      return Alert.alert(`Le numéro scanné correspond à ${user.firstName} ${user.lastName} ${user.Ville}`)
    } 
    const article = flatData.find(item => item.key === e.data)
    if (article) {
      return Alert.alert(`${article.name} ${article.Taille}`)
    }
      return Alert.alert(`Aucun fournisseur ou article ne correspond à ce QR code`)
    
  };
  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}></Text> > </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Scanner CODEQR !!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 50,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

