import { useEffect, useState } from "react";

import api from "../../services/api";

import { ProductsProps } from "../../store/modules/cart/types/products";

export function Catalog() {
  const [catalog, setCatalog] = useState<ProductsProps[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {"--"}
          <span>{product.price}</span> {"  "}
          <button type="button">Adicionar ao carrinho</button>
        </article>
      ))}
    </main>
  );
}
