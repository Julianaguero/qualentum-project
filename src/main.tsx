import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import "./index.css";
import CartContextProvider from "./context/CartContext.tsx";
import UserContextProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
