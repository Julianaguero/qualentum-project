import Products from "../components/Shop/Products"
import DiscountBanner from "../components/Shop/DiscountBanner"
import { ThemeProps, type ListOfProducts } from "../types";
import "./Shop.css"

interface ShopProps {
  products: ListOfProducts;
  theme: ThemeProps;
}

export default function Shop({products, theme} : ShopProps) {

    
  return (
    <main id="shop" className={`${theme}`}>
        <DiscountBanner />
        <Products products={products} />

    </main>
  )
}
