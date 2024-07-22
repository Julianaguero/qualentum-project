import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProducts, deleteProducts, getProducts, getProductsById, updateProducts } from "../../api/productsAPI";
import {  ListOfProducts, ProductProps } from "../../types";

type RejectValue = string;

type AsyncThunkConfig = {
    rejectValue: RejectValue;
};

export const getProductsThunk = createAsyncThunk<ListOfProducts, void, AsyncThunkConfig>(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const products = await getProducts();
            if (!products || products.length === 0) {
                throw new Error("No products found");
            }
            return products;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
             } 
             return thunkAPI.rejectWithValue("Unknown error occurred");
        }
    }
)

export const getProductsByIdThunk = createAsyncThunk(
    "products/getProductsById",
    async (productId: string, thunkAPI) => {
        try {
            const product = await getProductsById(productId);
            if (!product) {
                throw new Error("No products found");
            }
            return product;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
             } 
             return thunkAPI.rejectWithValue("Unknown error occurred");
        }
    }
)

export const createProductsThunk = createAsyncThunk(
    "products/createProducts",
    async (productToCreate: ProductProps, thunkAPI) => {
        try {
            const newProduct = await createProducts(productToCreate)
            if(!newProduct) {
                throw new Error("Error creating the product.");
            }
            return newProduct
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
             } 
             return thunkAPI.rejectWithValue("Unknown error occurred");
        }
    }
)

export const updateProductsThunk = createAsyncThunk(
    "products/updateProducts",
    async (productToUpdate : ProductProps, thunkAPI) => {
        try {
            const updateProduct = await updateProducts(productToUpdate);
            if(!updateProduct) {
                throw new Error("Error updating the product.");
            }
            return updateProduct
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
             } 
             return thunkAPI.rejectWithValue("Unknown error occurred");
        }
    }
)

export const deleteProductsThunk = createAsyncThunk(
    "products/deleteProducts",
    async (productId: string, thunkAPI) => {
        try {
            const deletedProduct = await deleteProducts(productId)
            if(!deleteProducts) {
                throw Error("Error deleting product.")
            }
            return deletedProduct
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
             } 
             return thunkAPI.rejectWithValue("Unknown error occurred");
        }
    }
)