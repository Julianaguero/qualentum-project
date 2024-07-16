import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import "./index.css";
import CartContextProvider from "./.unusedComponents/CartContext.tsx";
import UserContextProvider from "./context/AuthContext.tsx";
import ProductsContextProvider from "./context/ProductsContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
