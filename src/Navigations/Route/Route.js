import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Acceuil from '../../View/Acceuil/Acceuil';
import ArticleDetail from '../../View/ArticleDetail/ArticleDetail';

const Stack = createStackNavigator();
  function Route() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="acceuil" component={Acceuil}/>
        <Stack.Screen name="ArticleDetail" component={ArticleDetail}/>
     
      </Stack.Navigator>
    </NavigationContainer>
    )}
    export default Route;