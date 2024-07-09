import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};

export default useProducts;
