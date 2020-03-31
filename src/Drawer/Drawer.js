import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView, } from '@react-navigation/drawer';
import { TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from '../Acceuil/Acceuil';
import Ajouter from '../Ajouter/Ajouter';
import notification from '../notification/notification';
import payement from '../payement/payement';
import parametre from '../parametre/parametre';
import store from '../store/store';

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TurO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {

  render() {
    return (
      <NavigationContainer>
        <DrawerNav.Navigator
          // eslint-disable-next-line react-native/no-inline-styleshh
          drawerStyle={{
            width: 320,
          }}
          drawerType={'slide'}
          initialRouteName="Acceuil">
          <DrawerNav.Screen name="Acceuil" component={Acceuil} />
<DrawerNav.Screen options={
            { drawerLabe1: 'Ajouter un dépôt' },
            { drawerLabelStyle: { color: 'red' } }}
            name="Ajouter un dépôt" component={Ajouter} />
<DrawerNav.Screen options={
            { drawerLabe2: 'Parametrer l’application' },
            { drawerLabelStyle: { color: 'red' } }}
            name="Parametrer l’application" component={parametre} />
<DrawerNav.Screen options={
            { drawerLabe3: 'Payement des factures' },
            { drawerLabelStyle: { color: 'red' } }}
            name="Payement des factures" component={payement} />
<DrawerNav.Screen options={
            { drawerLabe4: 'Notification' },
            { drawerLabelStyle: { color: 'red' } }}
            name="Notification" component={notification} />
<DrawerNav.Screen options={
            { drawerLabe5: 'Mode Store' },
            { drawerLabelStyle: { color: 'red' } }}
            name="Mode Store" component={store} />
</DrawerNav.Navigator></NavigationContainer>)
}
}