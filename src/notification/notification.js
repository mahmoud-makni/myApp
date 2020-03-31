import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
function notification(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.notification}>Notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notification: {
    color: "rgba(245,17,159,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 348,
    alignSelf: "center"
  }
});

export default notification;

