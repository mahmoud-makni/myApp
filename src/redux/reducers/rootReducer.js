import  LoginReducer from './LoginReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  Login: LoginReducer
  

});
export default RootReducer;