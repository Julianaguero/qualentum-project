import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps, ProductProps } from "../../types";
// import { setItem } from "../../hooks/useLocalStorage";

interface CartState {
    cart: CartItemProps[];
}


const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductProps>) => {
            const productInCartIndex = state.cart.findIndex(
                (item) => item.product.id === action.payload.id
            );

            if (productInCartIndex >= 0) {
                state.cart[productInCartIndex].quantity += 1;
            } else {
                state.cart.push({
                    product: action.payload,
                    quantity: 1,
                })
            }
        },
        emptyCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;