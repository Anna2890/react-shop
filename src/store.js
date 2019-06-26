import { createStore, applyMiddleware } from 'redux'; //method
import logger from 'redux-logger'; //библиотека для отслеж состояний

import rootReducer from './redusers';


export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store
}





