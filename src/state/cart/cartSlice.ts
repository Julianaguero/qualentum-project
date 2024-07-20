import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps, ProductProps } from "../../types";
import { getItemFromLocalStorage } from "../../utils/localStorageUtils";

export type cartState = CartItemProps[];

const initialState: cartState = (() => {
        const persistedState = getItemFromLocalStorage("userCart")
        return persistedState ? persistedState : [];
    })()

    
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductProps>) => {
            const productInCartIndex = state.findIndex(
                (item) => item.product.id === action.payload.id
            );

            if (productInCartIndex >= 0) {
                state[productInCartIndex].quantity += 1;
            } else {
                state.push({
                    product: action.payload,
                    quantity: 1,
                })
            }
        },
        emptyCart: (state) => {
            state.length = 0;  
        }
    }
});

export const { addItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;