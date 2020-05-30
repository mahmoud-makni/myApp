import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Ajouter(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.ajouterUnDepot}>Ajouter un depot</Text>
        <Text style={styles.listeDesArticles}> Liste des article ajouter </Text>
        <TextInput style={styles.rect}/>
        <Text style={styles.listeDesClients}>liste des clients ajouter </Text>
        <TextInput style={styles.rect1}/>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  ajouterUnDepot: {
    color: "rgba(255,0,229,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 0,
  },
  listeDesArticles: {
    color: "#707070",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 20
  },

  rect: {
    width: 200,
    height: 80,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 30,
    marginLeft: 30
  },
  listeDesClients: {
    color: "#707070",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 20
  },
  rect1: {
    width: 200,
    height: 80,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 30,
    marginLeft: 30
  },

});
export default Ajouter;