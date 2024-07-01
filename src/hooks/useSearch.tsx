import { useState } from "react";
import { ListOfProducts } from "../types";
import productList from "../utils/data.json";



export default function useSearch() {
  const [products] = useState<ListOfProducts>(productList);

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
