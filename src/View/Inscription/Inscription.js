import React, { Component } from "react";
import { StyleSheet, View,TextInput,Text,Button} from "react-native";
 class Inscription extends React.Component {
  render() {
    return (
      <View style={styles.back}> 
      <Text style={styles.loremIpsum}>Creé votre compte{"\n"}(inscription)</Text>
      <TextInput style={styles.rect}placeholder="Entrer votre nom"/>
      <TextInput style={styles.rect1}placeholder="Entrer votre prénom"/>
      <TextInput style={styles.rect2}placeholder="Entrer votre ville"/>
      <TextInput style={styles.rect3}placeholder="Entrer votre mot de passe"/>
      <TextInput style={styles.rect4}placeholder="confirmer votre mot de passe"/>
      <TextInput style={styles.rect5}placeholder="code de confirmation "/>
      <View style={styles.fixToText1}>
            <Button color="#F187DF" title="CONNEXION" ></Button>
       </View>
      </View> );  } }
const styles = StyleSheet.create({
 back:{
   flex:1,
   backgroundColor: "#FFFFFF"
    },
  loremIpsum: {
    fontSize: 26,
      textAlign: "center",
      margin: 10,
      color: "#F187DF",
       },
rect: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
},

rect1: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
  },
rect2: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
  },
rect3: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
  },
rect4: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
  },
rect5: {
  width: 240,
  height: 35,
  backgroundColor: "#E1D5D5",
  borderRadius: 100,
  marginTop: 15,
  marginLeft: 90
},
fixToText1: {
  flexDirection: "row",
  justifyContent: 'space-between',
  top: 60,
  left: 150
},
})


  export default Inscription;

