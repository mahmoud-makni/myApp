import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dispatchNumber } from '../../redux/actions';
import { dispatchPassword } from '../../redux/actions';
import LoginReducer from '../../redux/reducers/LoginReducer';

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

       

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
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
    marginTop: 70
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
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
    color: "#00BFFF",

  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
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