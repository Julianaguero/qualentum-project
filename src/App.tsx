import Header from "./components/Header/Header";
import LoginForm from "./components/Login/LoginForm";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";
import ProductPage  from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const basename = process.env.NODE_ENV === 'production' ? '/qualentum-project' : '/';


function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
