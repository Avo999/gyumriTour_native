import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import reducers from "./store/reducers";
import sagas from './store/sagas';

const sagaMiddleWare = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(sagas)