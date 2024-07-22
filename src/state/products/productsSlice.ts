import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps, type ListOfProducts } from "../../types";
import { createProductsThunk, deleteProductsThunk, getProductsByIdThunk, getProductsThunk, updateProductsThunk } from "./productsAPIActions";

export type ProductsState = {
    products: ListOfProducts,
    isLoading: boolean,
    isError: boolean | null,
    errorMessage: string | null,
    searchTerm: string,
    selectedProduct: ProductProps | null,
}

const initialState : ProductsState = {
    products: [],
    isLoading: false,
    isError: null,
    errorMessage: null,
    searchTerm: "",
    selectedProduct: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, action : PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<ProductProps>) => {
            state.selectedProduct = action.payload;
        },
        removeSelectedProduct: (state) => {
            state.selectedProduct = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action : PayloadAction<ListOfProducts | undefined>) => {
                state.isLoading = false;
                state.products = action.payload || [];
            })
            .addCase(getProductsByIdThunk.fulfilled, (state, action : PayloadAction<ProductProps>) => {
                state.isLoading = false;
                state.selectedProduct = action.payload;
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
                (state, action: PayloadAction<string>) => {
                    console.log(action.payload, "payload.message")
                    console.log(state.isError)
                    state.isLoading = false;
                    state.isError = true;
                    state.errorMessage = action.payload as string || "An error occurred";
                }
            )
    }
})

export const  {setSearchTerm, setSelectedProduct, removeSelectedProduct} = productsSlice.actions;

export default productsSlice.reducer;