import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Num from '../../View/Num/Num';
import Login from '../../View/Login/Login';
import Inscription from '../../View/Inscription/Inscription';
import MyTabs from '../TB/Tab';
import AllArticles from '../../data/flatListData'
import { View, Text, StyleSheet, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import QRCode from 'react-native-qrcode-svg';

const DetailsComponent = (props) => {
  console.log('DetailsComponent PROPS.route.params: ', props.route.params)
  const relatedArticle = AllArticles.find(article => article.key === props.route.params.key)
  console.log('relatedArticle:: ', relatedArticle)
  return (








    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <Image style={styles.avatar} source={{ uri: relatedArticle.imageUrl }} />
      <View style={styles.body}>

        <Text style={styles.name1}> Nom d'article : </Text>

        <Text style={styles.name}> {relatedArticle.name}</Text>

        <Text style={styles.description1}> Description : </Text>

        <Text style={styles.description}>{relatedArticle.foodDescription}</Text>

        <Text style={styles.prix1}> Prix d'article : </Text>

        <Text style={styles.prix}>{relatedArticle.PrixClient}</Text>

        <Text style={styles.taille1}> Taille disponible : </Text>

        <Text style={styles.taille}> {relatedArticle.Taille}</Text>

        <Text style={styles.CODE}> CODE-QR </Text>
        <View style={{marginTop: -80, alignItems: 'center'}}>
          <QRCode
            value={relatedArticle.key}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 415,
    height: 250,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },

  name: {
    fontSize: 16,
    color: "#696969",
    fontWeight: "600",
    left: 140,
    top: -55
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    left: 140,
    top: -75
  },
  prix: {
    fontSize: 20,
    left: 140,
    top: -87,
    color: '#02FC3A',
  },
  name1: {
    fontSize: 18,
    top: -30
  },
  description1: {
    fontSize: 18,
    top: -40
  },
  prix1: {
    fontSize: 18,
    top: -60,

  },
  taille1: {
    fontSize: 18,
    top: -80,
  },
  taille: {
    fontSize: 16,
    left: 170,
    top: -104,
    color: "#696969",
  },
  CODE: {
    fontSize: 20,
    left: 150,
    top: -90,
    color: 'red'

  },
  CODE1: {
    left: 150,
    top: -10,

  }


});





const Stack = createStackNavigator();
function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Num">
        <Stack.Screen name="Num" component={Num} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Acceuil" component={MyTabs} />
        <Stack.Screen name="Details" component={DetailsComponent} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AuthNavigator;