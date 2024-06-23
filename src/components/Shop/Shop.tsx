import "./Shop.css"
import DiscountBanner from "./DiscountBanner"
import Products from "./Products"
import { type ListOfProducts } from "../../types";
import { useThemeContext } from "../../hooks/useThemeContext";

interface ShopProps {
  products: ListOfProducts;
}

export default function Shop({products} : ShopProps) {
const {theme} = useThemeContext();
    
  return (
    <main id="shop" className={`${theme}`}>
        <DiscountBanner />
        <Products products={products} />

    </main>
  )
}
