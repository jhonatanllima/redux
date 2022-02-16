import { useSelector } from "react-redux";
import { StateProps } from "../../store";
import { CartItemProps } from "../../store/modules/cart/types/products";

export function Cart() {
  const cart = useSelector<StateProps, CartItemProps[]>(
    (state) => state.cart.items
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
