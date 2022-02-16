import { Reducer } from "redux";

import { CartStateProps } from "./types/products";

const INITIAL_STATE: CartStateProps = {
  items: [],
};

const cart: Reducer<CartStateProps> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      console.log(product);

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
