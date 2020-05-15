import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combineReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
