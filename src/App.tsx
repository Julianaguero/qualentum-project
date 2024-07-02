import LoginForm from "./components/Login/LoginForm";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout/Layout";

const basename =
  process.env.NODE_ENV === "production" ? "/qualentum-project" : "/";

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />

            <Route
              path="/product/:productId"
              element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
