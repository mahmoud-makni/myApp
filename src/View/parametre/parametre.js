import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
function Parametre(props) {
  return (
  <View style={styles.container}>
              <Text style={styles.Parametre}>Paramétre d&#39;identification</Text>
            
              <Text style={styles.changerLeNom}>Changer le nom      :</Text>
              <TextInput style={styles.rect1} placeholder=" Entrer votre nom"/>
            
              <Text style={styles.changerLePrenom}>Changer le prénom :</Text>
<              TextInput style={styles.rect2} placeholder=" Entrer votre prénom"/>
            
              <Text style={styles.changerLenum}>Changer numéro de téléphone</Text>
              <TextInput style={styles.rect3} placeholder=" Entrer votre numéro"/>

             <Text style={styles.loremIpsum4}>Nouvelle mot de passe</Text>
             <TextInput style={styles.rect6} placeholder=" Nouvelle mot de passe " secureTextEntry />

             <Text style={styles.loremIpsum5 } >Confirmer le nouveau mot de passe</Text>
             <TextInput style={styles.rect7} placeholder=" Confirmer " secureTextEntry />


             <Text style={styles.adress } >Changer l'adresse</Text>
             <TextInput style={styles.rectadress} placeholder="Entrer votre nouvelle adress " />


             <Text style={styles.email } >Changer le Email</Text>
             <TextInput style={styles.reactemail} placeholder=" Ex:AP-ZE@gamil.com "/>



<View style={styles.fixToText}>
<Button color="#13FF01" title="     VALIDER    ">
</Button>
</View>
</View>
);}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
   
  },
  Parametre: {
    color: "rgba(255,3,203,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 0,
    fontWeight: 'bold'
  },
  changerLeNom: {
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 10
  },
  changerLePrenom: {
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 8 ,
    marginLeft: 10
  },
  changerLenum: {
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft:10,

  },
  loremIpsum4: {
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 0,
    marginLeft:10
  },
  loremIpsum5: {
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 0,
    marginLeft: 10
  },
  rect1: {
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: -30,
    marginLeft: 170,
  },
  rect2: {
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: -25,
    marginLeft: 170,
  },
  rect3: {
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: 0,
    marginLeft: 130,
  },
  rect6: {
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: 0,
    marginLeft: 130,
  },
  rect7: {
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: 0,
    marginLeft: 130,
  },
  reactemail:{
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: 0,
    marginLeft: 130,

  },
  rectadress:{
    width: 200,
    height: 40,
    backgroundColor: "#D6E9D5",
    marginTop: 0,
    marginLeft: 130,

  },
  adress:{
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 0,
    marginLeft:10,

  },
  email:{
    color: "rgba(72,69,71,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 0,
    marginLeft:10,

  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 20,
    left: 150,
    
  },

});

export default Parametre;

