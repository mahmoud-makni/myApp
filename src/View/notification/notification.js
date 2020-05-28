import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight} from 'react-native';
const DATA = [
  {
    id: 1,
    name: 'Mahmoud',
    lastName: 'Ajouter un articles vendus'
  },
  { id: 2,
    name: 'Amal',
    lastName: 'supprimé un articles'
  },
  { id: 7,
    name: 'Hajer',
    lastName: 'Ajouter un depot'
  },
  { id: 3,
    name: 'Mohamed',
    lastName: 'Changer un prix'
  },
  { id: 4,
    name: 'Hanen',
    lastName: 'Disponible'
  },
  { id: 5,
    name: 'Amira',
    lastName: 'Connecté a votre compte'
  },
  { id: 6,
    name: 'Salmen',
    lastName: 'Non disponible' },
    { id: 7,
      name: 'Salmen',
      lastName: 'Non disponible' } ]
   class notification extends React.Component {
  render() {
  return (

















           <View style={styles.MainContainer}>
               <Text style={{left:0,color:'#EA66B1',fontSize:26}}>Notifications</Text>

                      <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
           <View style={{
                        elevation: 5, //hedhi ma temchych aala emulateur kn aala tel
                        height: '5%',
                        padding:'7%'  }}>
               <Text>{item.name}{'\t'}{item.lastName} </Text>
            </View>
                    )}
            keyExtractor={item => item.id.toString()}  />
           </View> )
   }}
  const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', },
  notification: {
    fontSize: 25,
    left: 0,
    margin: 10,
    top: 60,
    color: "#1C4AE2",
    textAlign: "center",
    position: "absolute"  },
});
export default notification;