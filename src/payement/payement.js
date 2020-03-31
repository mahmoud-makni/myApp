import React, { Component } from "react";
import { StyleSheet, View, Text,Button } from "react-native";
function payement(props) {
  return (
    <View style={styles.container}>
    <Text style={styles.payemant}> Payemant des factures</Text>
    <View style={styles.filtre1}>
    <Button color="#EA66B1" title="  Filtres  " > </Button></View>
    <Text style={styles.so1}>La somme payé </Text>
    <Text style={styles.so2}>La somme gagner </Text>
    </View> );}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  payemant: {
    color: "rgba(245,17,159,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 60,
  },
  filtre1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 25,
    left: 265,
    height: 35,
  },
  so1:{color: "rgba(245,17,159,1)",
  fontSize: 18,
  fontFamily: "roboto-regular",
  marginTop: 200,
  marginLeft: 60,


  },
  so2:{
  color: "rgba(245,17,159,1)",
  fontSize: 18,
  fontFamily: "roboto-regular",
  marginTop: 200,
  marginLeft: 60,


  },
});

export default payement;
