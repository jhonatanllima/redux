export interface ProductsProps {
  id: number;
  title: string;
  price: number;
}

export interface CartItemProps {
  quantity: number;
  product: ProductsProps;
}

export interface CartStateProps {
  total: number;
  items: CartItemProps[];
}
