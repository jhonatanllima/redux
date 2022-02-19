import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StateProps } from "../../store";

import { addProductToCart } from "../../store/modules/cart/actions";
import { removeProductToCart } from "../../store/modules/cart/actions";
import { removeAmountProductToCart } from "../../store/modules/cart/actions";

import {
  ProductsProps,
} from "../../store/modules/cart/types/products";

export function Cart() {
  const dispatch = useDispatch();

  const {cart} = useSelector(
    (state: StateProps) => state
  );


  const handleRemoveProductToCart = useCallback(
    (productId: Number) => {
      dispatch(removeProductToCart(productId));
    },
    [dispatch]
  );

  const handleRemoveAmountProductToCart = useCallback(
    (product: ProductsProps) => {
      dispatch(removeAmountProductToCart(product));
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
        {cart.items.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            <td>
              <button
                type="button"
                onClick={() => handleRemoveAmountProductToCart(item.product)}
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

            <td>
              <button
                type="button"
                onClick={() => handleRemoveProductToCart(item.product.id)}
              >
                remover
              </button>
            </td>
          </tr>
        ))}

        <tfoot>{`Total R$ ${cart.total}`}</tfoot>
      </tbody>
    </table>
  );
}
