import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function  Modestore(props) {
  return (
    <View style={styles.container}>
   <Text style={styles.store}>store</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#9AE9E4'
  },
  store:{
    fontSize:20
  }}) 
export default Modestore;