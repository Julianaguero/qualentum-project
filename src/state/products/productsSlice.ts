import { createSlice } from "@reduxjs/toolkit";
import { ListOfProducts } from "../../types";

interface ProductsState {
    products: ListOfProducts;
}

const initialState : ProductsState = {
    products: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    }
})

export default productsSlice.reducer;