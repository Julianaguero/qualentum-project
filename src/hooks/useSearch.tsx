import { useState } from "react";
import { ListOfProducts } from "../types";


export default function useSearch({ products }: {products: ListOfProducts}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (products: ListOfProducts) => {
    return products?.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(searchTerm.trim().toLocaleLowerCase());
    });
  };

  const filteredProducts = filterProducts(products);

  return {filteredProducts, setSearchTerm } as const;
}
