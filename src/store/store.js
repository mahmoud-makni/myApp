import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Payament(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.modeStore}>Mode Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modeStore: {
    color: "rgba(245,17,159,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 348,
    marginLeft: 123
  }
});

export default Payament;
