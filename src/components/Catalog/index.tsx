import { useSelector } from "react-redux";

export function Catalog() {
  const catalog = useSelector((state) => state);

  console.log(catalog, "store");

  return <h1>Catalog</h1>;
}
