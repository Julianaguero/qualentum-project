import { useState } from "react";
import { ListOfProducts } from "../types";


export default function useSearch({ products }: {products: ListOfProducts}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (products: ListOfProducts) => {
    return products?.filter((product) => {
      return product.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
    });
  };

  const filteredProducts = filterProducts(products);

  return {filteredProducts, setSearchTerm } as const;
}
