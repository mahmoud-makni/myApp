import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView, } from '@react-navigation/drawer';
import { TouchableOpacity, Text, View,Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Acceuil from '../../View/Acceuil/Acceuil';
import Ajouter from '../../View/Ajouter/Ajouter';
import notification from '../../View/notification/notification';
import payement from '../../View/payement/payement';
import parametre from '../../View/parametre/parametre';
import Modestore from '../../View/store/store';
import { connect } from 'react-redux';

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TurO CONTAIN BOTTOM  TAB
 class Drawer extends Component {
   
  render() {
    console.log('Drawer props: ', this.props)
    return (

      <DrawerNav.Navigator
        // eslint-disable-next-line react-native/no-inline-styleshh
        drawerStyle={{
          width: 300,
          backgroundColor: "#FFFFFF",
          fontSize:24,
        }}
   
        drawerType={'slide'}
        initialRouteName="Acceuil">

        <DrawerNav.Screen  name={this.props.userFromStore.firstName + ' ' + this.props.userFromStore.lastName} 
        
         component={() => <></>} />
       

        <DrawerNav.Screen name="Acceuil" component={() =>  <Acceuil />} />
      


        <DrawerNav.Screen options={
          { drawerLabe1: 'Ajouter un dépôt' },
          { drawerLabelStyle: {  } }}
          name="Ajouter un dépôt" component={Ajouter} />
      
      
        <DrawerNav.Screen options={
          { drawerLabe2: 'Parametrer l’application' },
          { drawerLabelStyle: { } }}
          name="Parametrer l’application" component={parametre} />


        <DrawerNav.Screen options={
          { drawerLabe3: 'Payement des factures' },
          { drawerLabelStyle: { } }}
          name="Payement des factures" component={payement} />


        <DrawerNav.Screen options={
          { drawerLabe4: 'Notification' },
          { drawerLabelStyle: { } }}
          name="Notification" component={notification} />


        <DrawerNav.Screen options={
          { drawerLabe5: 'Mode Store' },
          { drawerLabelStyle: {  } }}
          name="Mode Store" component={Modestore} />
       
      </DrawerNav.Navigator>)
  }
}

const mapStateToProps = storeState => {
  // return {loginDetails: state}; 
  console.log({ storeState })
  return {
    userFromStore: storeState.Login.user
  }
};
// export default connect(mapStateToProps, null)(Drawer)

export default connect(mapStateToProps)(Drawer)