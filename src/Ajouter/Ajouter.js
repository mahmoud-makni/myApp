import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Ajouter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.rect1}></View>
      <Text style={styles.ajouterUnDepot}>Ajouter un depot</Text>
      <Text style={styles.listeDesArticles}>Liste des Articles</Text>
      <Text style={styles.listeDesClients}>Liste des Clients</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 214,
    height: 170,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 27,
    marginTop: 118,
    marginLeft: 27
  },
  rect1: {
    width: 214,
    height: 170,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 27,
    marginTop: 82,
    marginLeft: 27
  },
  ajouterUnDepot: {
    color: "rgba(255,0,229,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: -528,
    alignSelf: "center"
  },
  listeDesArticles: {
    color: "rgba(255,0,4,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 47,
    marginLeft: 20
  },
  listeDesClients: {
    color: "rgba(255,0,28,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 224,
    marginLeft: 20
  }
});

export default Ajouter;