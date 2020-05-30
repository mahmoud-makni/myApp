import React, { Component } from "react";
import {connect} from 'react-redux';
import {dispatchPassword} from '../../redux/actions';
import {StyleSheet , View , Text , Image , TextInput, Button,Keyboard} from "react-native";
import {users} from '../../data/flatListData'
 class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      password:'',
      marginTop: 40,
      phoneNumber: ''
    }  }
CONNEXION = () =>{
  const user = users.find(user => user.password === this.state.password && user.phoneNumber === this.state.phoneNumber);
  if (user) {
    this.props.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: user
    })
    this.props.navigation.navigate("Acceuil");
  }
   };
Inscriptioncréervotrecompte = () =>{
     this.props.navigation.navigate("Inscription");
   };
   componentDidMount(): void {
     console.log('this.props.navigation: ', this.props.navigation)
     console.log('this.props.route: ', this.props.route)
     this.setState({
       phoneNumber: this.props.route.params.phoneNumber
     })
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDismissed,
    );
  }
  keyboardDidShow = () => {
    this.setState({
      marginTop: -20,
    });
  };
  keyboardDismissed = () => {
    this.setState({
      marginTop: 50,
    });
  };
  render(){
    console.log('this.state:', this.state)
    console.log('this.props:', this.props)

   return (
   <View style={styles.container}>
<Text style={styles.welcome}>BIENVENUE {"\n"}CONNECTER A VOTRE COMPTE</Text>
<Text style={styles.Num} >Entrez votre mot de passe</Text>

<TextInput style={styles.rect1} placeholder="Entrer votre mot de passse"
      secureTextEntry
      onChangeText={text => this.setState({password: text})}
      ref={input => {
      this.password = input;
      console.log.props;
   }}
 />
<Text style={styles.Ins} onPress={()=>this.Inscriptioncréervotrecompte()}>Inscription (créer votre compte)</Text>
<Button color="#F187DF" title="CONNEXION" onPress={()=>this.CONNEXION()}></Button> 
</View> );
}
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF" },
    welcome: {
      fontSize: 26,
      textAlign: "center",
      margin: 10,
      top: 70,
      left: 8,
      color: "#F187DF",
      position: "absolute"},
    Num:{
      fontSize:17,
      top:230,
      left:90,
      color:"#707070"},
    rect1: {
        width: 240,
        height: 50,
        backgroundColor: "#E1D5D5",
        borderRadius: 100,
        marginTop: 250,
        marginLeft: 90
        },
    Ins: {
        fontSize:16,
        top:80,
        left:120,
        color:"#F187DF"},
      fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          top:100,
          left:150}
  }); 
  // const mapStateToProps = state => {
  //   return {loginDetails: state.loginDetails};
    
  // };
  
  const mapDispatchToProps = dispatch => {
    return {
      isLogged: state => {
        dispatch(dispatchPassword(state));
        
      
      },
    };
  };


  const mapStateToProps = (storeState) => {
    console.log({storeState})
    return {
      
    }
  }
  
  export default connect(mapStateToProps,null)(Login);
  
