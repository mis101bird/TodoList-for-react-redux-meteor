import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// create a logger
const logger = createLogger();
const middleware = [ReduxThunk, logger];

// Using the applyMiddleware function to extend our store with thunk and logger.
const Store = createStore(rootReducer, {}, applyMiddleware(...middleware));
export default Store;