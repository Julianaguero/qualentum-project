import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import { useThemeContext, useSearch } from "./hooks";

import productList from "./utils/data.json";

import { type ListOfProducts } from "./types";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";

function App() {
  const { theme } = useThemeContext();
  const [products] = useState<ListOfProducts>(productList);
  const { filteredProducts, setSearchTerm } = useSearch({ products });

  const [ activePage, setActivePage ] = useState<"shop" | "cart">("shop")

  const toggleActivePage = (value: "cart" | "shop") => {
    return setActivePage(value);
  }

  return (
    <>
      <Header getSearchTerm={setSearchTerm} theme={theme} handleActivePage={toggleActivePage}/>
      {activePage === "shop"
        ? <Shop products={filteredProducts} theme={theme} />
        : <ShoppingCart theme={theme}/>}
        <LoginForm />
      <Footer />
    </>
  );
}

export default App;
