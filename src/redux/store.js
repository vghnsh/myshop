import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewaress =[];


if(process.env.NODE_ENV === 'development'){
    middlewaress.push(logger);
}


export const store= createStore(rootReducer,applyMiddleware(...middlewaress));

export const persistor= persistStore(store);

export default {store,persistor};