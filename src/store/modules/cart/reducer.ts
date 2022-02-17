import { Reducer } from "redux";
import produce from "immer";

import { CartStateProps } from "./types/products";

const INITIAL_STATE: CartStateProps = {
  items: [],
};

const cart: Reducer<CartStateProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        {
          const { product } = action.payload;

          console.log(product);

          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;

      default: {
        return draft;
      }
    }
  });
};

export default cart;
