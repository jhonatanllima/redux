import { Reducer } from "redux";
import produce from "immer";

import { CartStateProps } from "./types/products";

const INITIAL_STATE: CartStateProps = {
  items: [],
  total: 0,
};


const cart: Reducer<CartStateProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    // function handleTotal () {
    //   const allProductPrices = draft.items[0].reduce(allPrices => allPrices.product)
    // }

    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        { 
          const { product } = action.payload;

          const productInCartIndex = draft.items.findIndex(
            (item) => item.product.id === product.id
          );

          if (productInCartIndex >= 0) {
            draft.items[productInCartIndex].quantity++;
          } else {
            draft.items.push({
              product,
              quantity: 1,
            });
          }
        }

        break;

      case "REMOVE_AMOUNT_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          if (draft.items[productInCartIndex].quantity > 1) {
            draft.items[productInCartIndex].quantity--;
          }
        }

        break;
      }

      case "REMOVE_PRODUCT_TO_CART":
        {
          const { productId } = action.payload;

          draft.items = draft.items.filter(
            (itemToRemoved) => itemToRemoved.product.id !== productId
          );
        }

        break;
      default: {
        return draft;
      }
    }
  });
};

export default cart;
