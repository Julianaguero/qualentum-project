import "./Shop.css"
import DiscountBanner from "./DiscountBanner"
import Products from "./Products"
import { type ListOfProducts } from "../../types";

interface ShopProps {
  products: ListOfProducts;
}

export default function Shop({products} : ShopProps) {
    
  return (
    <main id="shop">
        <DiscountBanner />
        <Products products={products} />

    </main>
  )
}
