import {createStore} from 'redux';
import {composewithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer.js';

const Store = createStore(RootReducer, composewithDevTools(applyMiddleware(thunk)));

export default Store;
