import React, { Component } from "react";
import {connect} from 'react-redux';
import {dispatchNumber} from '../../redux/actions';
import { StyleSheet, View,Text, TextInput, Keyboard,TouchableHighlight,Button } from "react-native";
import {users} from '../../data/flatListData';


class Num extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number:'',
      marginTop: 50 
     };
    }
  SUIVANT = () => {
    if (users.find(user => user.phoneNumber === this.state.number)) {
      this.props.navigation.navigate("Login", {phoneNumber: this.state.number});
    }
  };
  componentDidMount(): void {
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
render() {
  console.log(this.props)
 return (
<View style={styles.container}>
  <View style={{marginTop:this.state.marginTop}}>
    <Text style={styles.welcome}>VOTRE IDENTIFIANT{"\n"}POUR NOUS REJOINDRE</Text>
    <Text style={styles.dec}>Votre numéro de téléphone et le mot depasse {"\n"}seront utilisés pour vous connecter à votre compte.</Text>
    <Text style={styles.Num}>Veuillez saisir votre numéro de téléphone</Text>
    <TextInput style={styles.rect1} placeholder=" Entrer votre numéro " 
      keyboardType='numeric'  
      onChangeText={text => this.setState({number: text})}
      ref={input => {
      this.number = input;
      console.log.props;
   }}
 />
      <View style={styles.fixToText}>
      <Button color="#F187DF" title="  SUIVANT   " onPress={() => this.SUIVANT()}>

      </Button>
      </View>
  </View>
</View>  
   )
  } }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  welcome: {
    fontSize: 26,
    textAlign: "center",
    margin: 35,
    left: 5,
    color: "#F187DF",
  },
  dec: {
    fontSize: 14,
    left: 18,
    color: "#707070",
    top: 30
  },
  Num: {
    fontSize: 18,
    left: 20,
    color: "#707070",
    top: 60
  },
  rect1: {
    width: 240,
    height: 50,
    backgroundColor: "#E1D5D5",
    borderRadius: 150,
    marginLeft: 90,
    marginTop: 80
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:70,
    left:160,
    

    

  }

});
const mapStateToProps = state => {
  return {loginDetails: state.loginDetails};
  
};



const mapDispatchToProps = dispatch => {
  return {
    isLogged: state => {
      dispatch(dispatchNumber(state));
      
    
    },
  };
};


export default connect(null,mapDispatchToProps)(Num);
