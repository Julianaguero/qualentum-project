import { createContext, useState } from "react";
import InitialProducts from "../utils/data.json"
import { type ListOfProducts, type ProductsContextProps, type ProductsContextProviderProps } from "../types";
import { filterProducts } from "../utils/shopUtils";

export const ProductsContext = createContext<ProductsContextProps>({
  filteredProducts: [],
  setSearchTerm: () => {},
})

export default function ProductsContextProvider({children}: ProductsContextProviderProps) {
  const [products] = useState<ListOfProducts>(InitialProducts);
    
  const [searchTerm, setSearchTerm] = useState("");

  
  

  const filteredProducts = filterProducts(products, searchTerm);


    return (
        <ProductsContext.Provider value={{filteredProducts, setSearchTerm}}>
            {children}
        </ProductsContext.Provider>
    )
}