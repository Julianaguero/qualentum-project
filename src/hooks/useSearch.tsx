import { useContext} from "react";
import { ProductsContext } from "../context/ProductsContext";



export default function useSearch() {
  const context = useContext(ProductsContext)

  if(context === undefined) {
    throw new Error("useSearch must be used within a ProductsProvider")
  }

  return context;
}
