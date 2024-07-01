import Header from "./components/Header/Header";
import LoginForm from "./components/Login/LoginForm";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
 

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />}/>
        </Routes>
        <ShoppingCart />
        <LoginForm />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
