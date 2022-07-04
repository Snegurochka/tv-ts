import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducer from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(reducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;