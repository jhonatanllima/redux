import { createStore } from "redux";
import { CartStateProps } from "./modules/cart/types/products";
import rootReducer from "./modules/rootReducer";

export interface StateProps {
  cart: CartStateProps;
}

const store = createStore(rootReducer); // estado global iniciado []

export default store;
