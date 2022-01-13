export interface ProductsProps {
  id: number;
  title: string;
  price: number;
}

export interface CartItemProps {
  product: ProductsProps;
  quantity: number;
}

export interface CartStateProps {
  items: CartItemProps[];
}
