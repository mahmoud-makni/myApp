import React, { Component } from "react";
import {StyleSheet,View, Text, Image, TextInput, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from "../Acceuil/Acceuil";
 class Login extends React.Component {
  render(){
   return (<View style={styles.container}><Text style={styles.welcome}>
    BIENVENUE {"\n"}CONNECTER A VOTRE COMPTE</Text>
<Text style={styles.Num} >Entrez votre mot de passe </Text>
<TextInput type="password"  name="password" minlength="8" required Text style={styles.rect1} placeholder=" Entrer votre mot de passe "/>
<Text style={styles.Ins} onPress={() => navigation.navigate('Inscription')}>Inscription(créer votre compte)</Text>
<Button color="#F21313" title="CONNEXION" onPress={() => navigation.navigate('Acceuil')}> </Button> 
</View>)}}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F187DF", },
    welcome: {
      fontSize: 26,
      textAlign: "center",
      margin: 10,
      top: 100,
      left: 0.2,
      color: "#F21313",
      position: "absolute",},
    Num:{
      fontSize:17,
      top:290,
      left:60,
      color:"#707070",},
    rect1: {
        width: 240,
        height: 50,
        backgroundColor: "#E1D5D5",
        borderRadius: 100,
        marginTop: 300,
        marginLeft: 60,  },
    Ins: {
        fontSize:16,
        top:80,
        left:120,
        color:"#FBF8F9",},
            fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          top:100,
          left:150},
  })
export default Login;
const Stack = createStackNavigator();
function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="CONNEXION" component={Acceuil} />
        <Stack.Screen name="Inscription(créer votre compte)" component={Inscription} />
      </Stack.Navigator>
    </NavigationContainer> );}
