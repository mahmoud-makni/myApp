import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';
export default class Acceuil extends Component {
  render() {
    return (
    <View style={styles.MainContainer}>
    <TextInput style={styles.recherche} placeholder=" Rechercher"/>
    <Text style={styles.Larticle}>BIENVENUE {"\n"} LISTES DES ARTICLES  </Text>
    <View style={styles.Button1}><Button color="#EA66B1"  title="    Filtre    "> </Button></View>
    <View style={styles.Button2}><Button color="#EA66B1"  title=" Je Vends "></Button></View>
  
    </View>);
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   Larticle: {
    fontSize: 24,
    left:0,
    margin: 10,
    top: 70,
    color: "#1C4AE2",
    textAlign: "center",
    position: "absolute"
  },
  Button1:{
    width: 240,
    height: 40,
    flexDirection: 'row',
    top:50,
    left:265,
  },
  Button2:{
    width: 240,
    height: 40,
    flexDirection: 'row',
    top:-35,
    left:265,

  },
  recherche:{ 
    width: 346,
    height: 50,
    backgroundColor: "#E1D5D5",
    marginTop: 10,
    marginLeft: 5,  
  },
});