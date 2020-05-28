import React from 'react';
import { View, Text, TouchableOpacity, Animated,  ScrollView,  Image,  Dimensions } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../../View/Profile/Profile';
import Drawer from '../Drawer/Drawer';
const { width } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
export default class MyTabs extends React.Component {

  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000
};

handleSlide = type => {
    let {
        active,
        xTabOne,
        xTabTwo,
        translateX,
        translateXTabOne,
        translateXTabTwo
    } = this.state;
    Animated.spring(translateX, {
        toValue: type,
        duration: 100
    }).start();
    if (active === 0) {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: 0,
                duration: 100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: width,
                duration: 100
            }).start()
        ]);
    } else {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: -width,
                duration: 100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: 0,
                duration: 100
            }).start()
        ]);
    }
};

    render() {
    return (
           <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
  
              if (route.name === 'Acceuil') {
                iconName = 'home'
              } else if (route.name === 'Profile') {
                iconName = 'home' 
              }
  
              // You can return any component that you like here!
              return <Ionicons name={'home'} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor:'gray',
            activeBackgroundColor :"#F187DF", 
            activeTintColor: '#FFFFFF',
            


          }}
        >
          <Tab.Screen name="Acceuil" component={() => <Drawer navigationProp={this.props.navigation} />} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
  
    );
  }

}

