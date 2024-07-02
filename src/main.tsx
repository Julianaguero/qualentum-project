import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import "./index.css";
import CartContextProvider from "./context/CartContext.tsx";
import UserContextProvider from "./context/AuthContext.tsx";
import ProductsContextProvider  from "./context/ProductsContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <RouterProvider router={router} />
          </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
