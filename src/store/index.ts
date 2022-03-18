import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

import rootSaga from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";
import { CartStateProps } from "./modules/cart/types/products";

export interface StateProps {
  cart: CartStateProps;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares =[sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
)); // estado global iniciado []

 sagaMiddleware.run(rootSaga);

export default store;
