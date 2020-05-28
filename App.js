import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/Navigation/navigation';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
       
                <AuthNavigator/>
                <NavigationContainer/> 
            </Provider>
        );
    } 
  }