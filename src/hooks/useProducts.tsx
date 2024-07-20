import { createProductsThunk, deleteProductsThunk, getProductsThunk, updateProductsThunk } from "../state/products/productsAPIActions";
import { type ProductProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const {products, isLoading, isError} = useAppSelector(state => state.products);

  const getProducts = () => {
    dispatch(getProductsThunk())
  }

  const createProducts = (product: ProductProps) => {
    dispatch(createProductsThunk(product))
  }

  const updateProducts = (product: ProductProps) => {
    dispatch(updateProductsThunk(product))
  }

  const deleteProducts = (productId: string) => {
    dispatch(deleteProductsThunk(productId))
  }

 
  
  return { products, isLoading, isError, getProducts, createProducts, updateProducts, deleteProducts} as const
};

export default useProducts;
