import { createContext, useState } from "react";
import InitialProducts from "../utils/data.json"
import { type ListOfProducts, type ProductsContextProps, type ProductsContextProviderProps } from "../types";

export const ProductsContext = createContext<ProductsContextProps>({
  filteredProducts: [],
  setSearchTerm: () => {},
})

export default function ProductsContextProvider({children}: ProductsContextProviderProps) {
  const [products] = useState<ListOfProducts>(InitialProducts);
    
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (products: ListOfProducts) => {
    return products?.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(searchTerm.trim().toLocaleLowerCase());
    });
  };
  

  const filteredProducts = filterProducts(products);


    return (
        <ProductsContext.Provider value={{filteredProducts, setSearchTerm}}>
            {children}
        </ProductsContext.Provider>
    )
}