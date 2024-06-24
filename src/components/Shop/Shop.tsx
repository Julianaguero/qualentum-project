import Products from "./Products"
import DiscountBanner from "./DiscountBanner"
import { useThemeContext } from "../../hooks/index";
import { type ListOfProducts } from "../../types";
import "./Shop.css"

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
