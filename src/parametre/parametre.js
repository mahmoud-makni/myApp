import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
function Parametre(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Paramétre d&#39;identification</Text>
      <Text style={styles.changerLeNom}>Changer le nom</Text>
      <TextInput style={styles.rect1} placeholder=" Entrer votre nom" />
      <Text style={styles.changerLePrenom}>Changer le prénom</Text>
      <TextInput style={styles.rect2} placeholder=" Entrer votre prénom" />
      <Text style={styles.loremIpsum2}>Changer numéro de téléphone</Text>
      <TextInput style={styles.rect3} placeholder=" Entrer votre numéro" />
      <Text style={styles.code}>Code</Text>
      <TextInput style={styles.rect4} placeholder="Entrer votre code" />
      <Text style={styles.loremIpsum3}>Ancien le mot de passe</Text>
      <TextInput style={styles.rect5} placeholder=" Ancien le mot de passe" />
      <Text style={styles.loremIpsum4}>Nouvelle mot de passe</Text>
      <TextInput style={styles.rect6} placeholder=" Nouvelle mot de passe" />
      <Text style={styles.loremIpsum5}>Confirmer le nouveau mot de passe</Text>
      <TextInput style={styles.rect7} placeholder=" Confirmer" />
      <View style={styles.fixToText}>
        <Button color="#EA66B1" title="        VALIDER          " >
        </Button>
      </View>
    </View>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    color: "rgba(255,3,203,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 11,
    alignSelf: "center"
  },
  changerLeNom: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 30,
    marginLeft: 28
  },
  changerLePrenom: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 29,
    marginLeft: 28
  },
  loremIpsum2: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    alignSelf: "center"
  },
  code: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 159
  },
  loremIpsum3: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    alignSelf: "center"
  },
  ancienMotDePasse: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 95
  },
  loremIpsum4: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    alignSelf: "center"
  },
  loremIpsum5: {
    color: "rgba(72,69,71,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 38
  },
  rect1: {
    width: 150,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 155,
    marginTop: -30,
    marginLeft: 200,
  },
  rect2: {
    width: 155,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: -30,
    marginLeft: 200,
  },
  rect3: {
    width: 170,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: 0,
    marginLeft: 95,
  },
  rect4: {
    width: 170,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: 0,
    marginLeft: 95,
  },

  rect5: {
    width: 170,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: 0,
    marginLeft: 95,
  },

  rect6: {
    width: 170,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: 0,
    marginLeft: 95,
  },
  rect7: {
    width: 170,
    height: 35,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginTop: 0,
    marginLeft: 95,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 25,
    left: 120,
  },

});

export default Parametre;

