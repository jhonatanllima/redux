import { Reducer } from "redux";

import { CartStateProps } from "./types/products";

const INITIAL_STATE: CartStateProps = {
  items: [],
};

const cart: Reducer<CartStateProps> = () => {
  return INITIAL_STATE;
};

export default cart;
