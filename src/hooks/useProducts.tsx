import { createProductsThunk, deleteProductsThunk, getProductsByIdThunk, getProductsThunk, updateProductsThunk } from "../state/products/productsAPIActions";
import { removeSelectedProduct } from "../state/products/productsSlice";
import { type ProductProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const {products, isLoading, isError, selectedProduct} = useAppSelector(state => state.products);

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

  const getProductsById = (productId: string) => {
    dispatch(getProductsByIdThunk(productId))
  }

  const resetSelectedProduct = () => {
    dispatch(removeSelectedProduct())
  }
  
  return { products, isLoading, isError, getProducts, getProductsById, createProducts, updateProducts, deleteProducts, selectedProduct, resetSelectedProduct  } as const
};

export default useProducts;
