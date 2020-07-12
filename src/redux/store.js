import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewaress =[logger];

const store= createStore(rootReducer,applyMiddleware(...middlewaress));
export default store;