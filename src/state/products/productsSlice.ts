import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps, type ListOfProducts } from "../../types";
import { createProductsThunk, deleteProductsThunk, getProductsThunk, updateProductsThunk } from "./productsAPIActions";

export type ProductsState = {
    products: ListOfProducts,
    isLoading: boolean,
    isError: boolean | null,
    searchTerm: string,
}

const initialState : ProductsState = {
    products: [],
    isLoading: false,
    isError: null,
    searchTerm: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action : PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action : PayloadAction<ListOfProducts>) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(createProductsThunk.fulfilled, (state, action : PayloadAction<ProductProps | undefined>) => {
                state.isLoading = false;
                if (action.payload) {
                    state.products.push(action.payload);
                }
            })
            .addCase(updateProductsThunk.fulfilled, (state, action : PayloadAction<ProductProps | undefined>) => {
                state.isLoading = false;
                if(action.payload) {
                    state.products = state.products.map(product => 
                        product.id === action.payload?.id 
                            ? action.payload
                            : product
                    )
                }
            })
            .addCase(deleteProductsThunk.fulfilled, (state, action : PayloadAction<ProductProps | undefined>) => {
                state.isLoading = false;
                if(action.payload) {
                    state.products = state.products.filter(product => product.id !== action.payload?.id)
                }
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                    state.isError = null;
                }
            )  
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state) => {
                    state.isLoading = false;
                    state.isError = true;
                }
            )
    }
})

export const  {setSearchTerm} = productsSlice.actions;

export default productsSlice.reducer;