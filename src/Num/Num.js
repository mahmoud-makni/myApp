import React, { Component } from "react";
import {StyleSheet, View, Text, Image, ImageBackground,Container, TextInput , Button  }  from "react-native";
import { NavigationContainer } from '@react-navigation/native';
class Num extends Component {
render(){
 
  return ( 
     <View style={styles.container}><Text style={styles.welcome}>
     VOTRE IDENTIFIANT {"\n"}POUR NOUS REJOINDRE </Text>
     <Text style={styles.dec}>
     Votre numéro de téléphone et le mot de
      passe seront utilisés pour vous connecter
     à votre compte.</Text>
     <Text style={styles.Num} >Veuillez saisir votre numéro de téléphone </Text>
     <TextInput style={styles.rect1} placeholder=" Entrer votre numéro "/>
     <View style={styles.fixToText}>
     <Button color="#FD5A5A"  title="SUIVANT" onPress={() => navigation.navigate('Login')}>
       </Button>
       </View> 
       </View> ) }}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F187DF",
  },
    welcome: {
      fontSize: 26,
      textAlign: "center",
      margin: 10,
      top: 100,
      left: 20,
      color: "#F21313",
      position: "absolute",
    },
    dec:{
      fontSize: 14,
      top: 220,
      left:15,
      color:"#707070",
    },
    Num:{
      fontSize:17,
      top:290,
      left:10,
      color:"#707070",
    },
    rect1: {
      width: 240,
      height: 50,
      backgroundColor: "#E1D5D5",
      borderRadius: 150,
      marginTop: 300,
      marginLeft: 50,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      top:100,
      left:150
    },
  })
export default Num ;