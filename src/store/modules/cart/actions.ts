import { ProductsProps } from "./types/products";

export function addProductToCart(product: ProductsProps) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function removeProductToCart(product: ProductsProps) {
  return {
    type: "REMOVE_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

// toda ação do redux precisa exportar um objeto
// esse objeto tem uma propriedade obrigatória
// type: "string que identifica cada uma das acoes"
