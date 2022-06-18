import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(reducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;