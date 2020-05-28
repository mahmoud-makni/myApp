
import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../reducers/rootReducer';
import {createLogger} from 'redux-logger';
export const logger = createLogger({});
let store = createStore(RootReducer,applyMiddleware(logger));
export default store;


