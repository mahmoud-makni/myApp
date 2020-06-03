import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dispatchNumber } from '../../redux/actions';
import { dispatchPassword } from '../../redux/actions';
import LoginReducer from '../../redux/reducers/LoginReducer';
import QRCode from 'react-native-qrcode-svg';


class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("this.props___", this.props)
  }

  render() {
    console.log('this.props.userFromStore.photoUrl:: ', this.props.userFromStore.photoUrl)
    return (

      <View style={styles.container}>

        <View style={styles.header}>


        </View>
        <Image style={styles.avatar} source={{ uri: this.props.userFromStore.photoUrl }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.props.userFromStore.firstName} {this.props.userFromStore.lastName}</Text>
            <Text style={styles.info}>Mon numero portable </Text>
            <Text style={styles.description}>{this.props.userFromStore.phoneNumber}</Text>
           <Text style={styles.add}> Adresse</Text>
           <Text style={styles.ville}>{this.props.userFromStore.Ville}</Text>
           <Text>Email : {this.props.userFromStore.Email}</Text>

           <Text style={styles.CODE}> CODE-QR </Text>
        <View style={{marginTop: 20, alignItems: 'center' }}>
          <QRCode
            value={this.props.userFromStore.phoneNumber}  
          />
        </View>
       

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
    top:-10
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    top:-40
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"

  },
  info: {
    fontSize: 16,
    color: "#696969",
    marginTop:10

  },
  description: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
    textAlign: 'center'
  },
  add:{
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  ville:{
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
    textAlign: 'center'

  },
  CODE:{
    fontSize: 16,
    color: "#696969",
    marginTop: 20,
    textAlign: 'center',
  }

});


const mapStateToProps = storeState => {
  // return {loginDetails: state}; 
  console.log({ storeState })
  return {
    userFromStore: storeState.Login.user
  }
};

const mapDispatchToProps = {
  dispatchNumber,
  dispatchPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)