import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProducts, deleteProducts, getProducts, getProductsById, handleErrors, updateProducts } from "../../api/productsAPI";
import {  ProductProps } from "../../types";


export const getProductsThunk = createAsyncThunk(
    "products/getProducts",
    async () => {
        try {
            const products = await getProducts();
            if (!products || products.length === 0) {
                throw new Error("No products found");
            }
            return products;
        } catch (error) {
            handleErrors(error);
            throw error;
        }
    }
)

export const getProductsByIdThunk = createAsyncThunk(
    "products/getProductsById",
    async (productId: string) => {
        try {
            const product = await getProductsById(productId);
            if (!product) {
                throw new Error("No products found");
            }
            return product;
        } catch (error) {
            handleErrors(error);
            throw error;
        }
    }
)

export const createProductsThunk = createAsyncThunk(
    "products/createProducts",
    async (productToCreate: ProductProps) => {
        try {
            const newProduct = await createProducts(productToCreate)
            if(!newProduct) {
                throw new Error("Error creating the product.");
            }
            return newProduct
        } catch (error) {
            handleErrors(error)
        }
    }
)

export const updateProductsThunk = createAsyncThunk(
    "products/updateProducts",
    async (productToUpdate : ProductProps) => {
        try {
            const updateProduct = await updateProducts(productToUpdate);
            if(!updateProduct) {
                throw new Error("Error updating the product.");
            }
            return updateProduct
        } catch (error) {
            handleErrors(error)
        }
    }
)

export const deleteProductsThunk = createAsyncThunk(
    "products/deleteProducts",
    async (productId: string) => {
        try {
            const deletedProduct = await deleteProducts(productId)
            if(!deleteProducts) {
                throw Error("Error deleting product.")
            }
            return deletedProduct
        } catch (error) {
            handleErrors(error)
        }
    }
)