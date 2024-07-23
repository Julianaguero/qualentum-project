import { setSearchTerm } from "../store/products/productsSlice";
import { filterProducts } from "../utils/shopUtils";
import { useAppDispatch, useAppSelector } from "./store";
import useProducts from "./useProducts";



export default function useSearch() {
  const dispatch = useAppDispatch()
  const { products, isLoading, isError } = useProducts();
  const searchTerm = useAppSelector(state => state.products.searchTerm);

  const filteredProducts = filterProducts(products, searchTerm);

  const updateSearchTerm = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  

  return {filteredProducts, isLoading, isError, updateSearchTerm};
}
