import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useProducts } from "./hooks";


function App() {
  const { getProducts } = useProducts();

  useEffect(() => {
     getProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
