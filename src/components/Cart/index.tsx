import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StateProps } from "../../store";

import { addProductToCart } from "../../store/modules/cart/actions";
import { removeProductToCart } from "../../store/modules/cart/actions";

import {
  CartItemProps,
  ProductsProps,
} from "../../store/modules/cart/types/products";

export function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector<StateProps, CartItemProps[]>(
    (state) => state.cart.items
  );

  const handleRemoveProductToCart = useCallback(
    (product: ProductsProps) => {
      dispatch(removeProductToCart(product));
    },
    [dispatch]
  );

  const handleAddProductToCart = useCallback(
    (product: ProductsProps) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <table style={{ marginTop: "2rem" }}>
      <thead>
        <th>Produto</th>
        <th>Preço</th>
        <th>Quantidade</th>
        <th>Subtotal</th>
      </thead>

      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            <td>
              <button
                type="button"
                onClick={() => handleRemoveProductToCart(item.product)}
              >
                -
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={() => handleAddProductToCart(item.product)}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
