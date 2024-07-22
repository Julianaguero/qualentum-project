import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice"
import cartReducer from "./cart/cartSlice"
import themeReducer from "./theme/themeSlice"
import authReducer from "./auth/authSlice"
import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";

const rootReducer = combineReducers({ 
    cart: cartReducer,
    products: productsReducer,
    theme: themeReducer,
    auth: authReducer
 }
);
export type RootState = ReturnType<typeof rootReducer>;


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;