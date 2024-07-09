import { createContext, useEffect, useState } from "react";
// import InitialProducts from "../utils/data.json"
import {  type ProductsContextProps, type ProductsContextProviderProps } from "../types";
import { filterProducts } from "../utils/shopUtils";
import useProductsAPI from "../hooks/useProductsAPI";


export const ProductsContext = createContext<ProductsContextProps>({
  filteredProducts: [],
  products: [],
  isLoading: false,
  setProducts: () => {},
  setSearchTerm: () => {},
  createProducts: async () => {},
  updateProducts: async () => {},
  deleteProducts: async () => {},
})

export default function ProductsContextProvider({children}: ProductsContextProviderProps) {
  // const [products] = useState<ListOfProducts>(InitialProducts);
  const {products, setProducts, isLoading, getProducts, createProducts, updateProducts, deleteProducts} = useProductsAPI();
    
  const [searchTerm, setSearchTerm] = useState("");

  const fetchedProducts = products || []
  

  const filteredProducts = filterProducts(fetchedProducts, searchTerm);

  

  useEffect( () => {
    const fetchProducts = async () => {
      await getProducts();
    }
    fetchProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


    return (
        <ProductsContext.Provider value={{filteredProducts, products, isLoading, setProducts, setSearchTerm, createProducts, updateProducts, deleteProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}