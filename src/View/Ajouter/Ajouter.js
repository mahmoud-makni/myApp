import React, { Component } from "react";
import { platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'my pic app',
  takePhotoButtonTitle: 'Prendre un photo avec votre camera',
  chooserFromLibraryButtonTitle: 'Ouvrir votre gallerie',
}

export default class Ajouter extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null
    }
  }
  myfun = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.welcome}>Scanner le CODEQR</Text>
        <Image source={this.avatarSource} style={{ width: '100%', height: 300, margin: 10 }} />
        <TouchableOpacity style={{ backgroundColor: '#00BFFF', margin: 10, padding: 10 }}
          onPress={this.myfun}>
          <Text style={{ color: '#FFFFFF',backgroundColor:'#00BFFF' }}>select Image</Text>
        </TouchableOpacity>
      </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize:24,
    left:100,
   
    color: "#00BFFF",
    
  },
})

