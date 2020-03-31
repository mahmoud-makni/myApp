import React, { Component } from "./node_modules/react";
import { StyleSheet, View,TextInput,Text,Container,ImageBackground} from "react-native";
function Inscription(props) {
  return (
         <View style={styles.back}> 
         <Text style={styles.loremIpsum}>Creé votre compte {"\n"} (inscription)</Text>
      <TextInput style={styles.rect}    placeholder=" Entrer votre nom "/>
      <TextInput style={styles.rect1}   placeholder=" Entrer votre prénom "/>
      <TextInput style={styles.rect2}   placeholder=" Entrer votre ville"/>
      <TextInput style={styles.rect3}   placeholder=" Entrer votre mot de passe "/>
      <TextInput style={styles.rect4}   placeholder=" confirmer votre mot de passe "/>
      <TextInput style={styles.rect5}   placeholder=" code de confirmation "/>
      </View> )}
const styles = StyleSheet.create({
 back:{
   flex:1,
   backgroundColor: "#F187DF",   },
  loremIpsum: {
    fontSize: 26,
      textAlign: "center",
      margin: 10,
      color: "#F21313",
       },
rect: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 10,
  marginTop: 0,
  marginLeft: 0,   },
rect1: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: -30,
  marginLeft: -30,   },
rect2: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 0,
  marginLeft: 0,   },
rect3: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 0,
  marginLeft: 0,   },
rect4: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 0,
  marginLeft: 0,  },
rect5: {
  width: 240,
  height: 50,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 0,
  marginLeft: 0,},})
export default Inscription;

